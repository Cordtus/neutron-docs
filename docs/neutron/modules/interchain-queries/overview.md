# Overview

## Abstract

This document specifies the ICQ (**I**nter**C**hain **Q**ueries) module for the Neutron network.

The ICQ module implements a mechanism to retrieve data from remote chains connected to Neutron via IBC.

## Concepts

A smart-contract can register two types of Interchain Query for particular chain with some query payload and `update_period`:
* Key-Value query (KV-query) - to read **values** from Cosmos-SDK KV-storage on remote chain which are stored under a set of **keys**;
* Transactions query (TX-query) - find transactions on remote chain under by condition (transactions filter).

ICQ Relayer keeps track of registered Interchain Queries by querying all existed ICQs at the start of work and by subscribing on [Update](https://github.com/neutron-org/neutron/blob/v1.0.4-rc1/x/interchainqueries/keeper/msg_server.go#L305) and [Delete](https://github.com/neutron-org/neutron/blob/v1.0.4-rc1/x/interchainqueries/keeper/msg_server.go#L321) events which are emitted in corresponding Neutron handlers. When the ICQ Relayer sees that it's time to perform an interchain query, it makes a necessary RPC call to a remote chain and makes the results available for the Neutron's smart contracts by submitting the result to the module. Read more about it at the [Relayer's page](/relaying/icq-relayer#overview).

Neutron verifies the data and processes the query result depending on the interchain query type:
* in case of a KV-query, the ICQ module saves the result into module's storage, and passed the query id to the contract's
[SudoKVQueryResult](https://github.com/neutron-org/neutron/blob/v1.0.4-rc1/x/contractmanager/keeper/sudo.go#L211) [handler](https://github.com/neutron-org/neutron-sdk/blob/c197ceacc1c23d2f1283be91f8f90c2be1328db0/contracts/neutron_interchain_queries/src/contract.rs#L255);
* in case of a TX-query, the ICQ module **does not** save the result to the storage, finds the contract that registered the query,
and passes the full result to the contract's [SudoTXQueryResult](https://github.com/neutron-org/neutron/blob/v1.0.4-rc1/x/contractmanager/keeper/sudo.go#L173) [handler](https://github.com/neutron-org/neutron-sdk/blob/c197ceacc1c23d2f1283be91f8f90c2be1328db0/contracts/neutron_interchain_queries/src/contract.rs#L141).

## Transaction filters

Since events themselves are not part of the consensus and are not included in the transaction result, it's necessary to
[implement additional checks](https://github.com/neutron-org/neutron-sdk/blob/c197ceacc1c23d2f1283be91f8f90c2be1328db0/contracts/neutron_interchain_queries/src/contract.rs#L197)
in your `SudoTXQueryResult` handler to check that result transactions satisfies your transactions filter. For instance, you can check that messages in the transactions have proper types, payload, etc.
If your contract does not have such checks, malicious relayer can send a fully valid Tendermint transaction which does not satisfy your defined transactions filter, and your business-logic can be broken.

> NOTE: when registering a TX-query, you write the transaction filters as filters for transaction events. When you check the submitted transaction in your contracts, though, you can only check the information that is stored on-chain (i.e., message fields for messages in a transaction). To put it another way, the set of values that you can use to filter transactions is the intersection of the values that are added to transaction events (used by the ICQ relayer to perform the search) and the values included directly to sdk.Msgs (can be used by your code to check whether the submitted transaction matches your query).  

You can see more info, examples and recommendations about proper transactions result handling [here](https://github.com/neutron-org/neutron-sdk/blob/main/contracts/neutron_interchain_txs/src/contract.rs#L335).

## Query creation deposit
In order to clean up ledger from not used, outdated queries special deposit mechanism is used. [RegisteredQuery](https://github.com/neutron-org/neutron/blob/v1.0.4-rc1/proto/interchainqueries/genesis.proto#L40) contains `deposit` field, this field is used to collect escrow payment for query creation. In order to return escrow payment a `RemoveInterchainQuery` message should be issued. 

Permission to perform `RemoveInterchainQuery` message is based on three parameters:
1. `query_submit_timeout` — a module parameter which can be thought of as query service period;
2. `last_submitted_result_local_height` — registered query's property representing the Neutron's height the query was updated last time at;
3. `registered_at_height` — registered query's property representing the Neutron's height the query was registered at.

The permissions to execute `RemoveInterchainQuery` are as follows:
- within the service period (i.e. if `current_height <= last_submitted_result_local_height + query_submit_timeout && current_height <= registered_at_height + query_submit_timeout`) only the query's owner is permissioned to remove it;
- beyond the service period (i.e. if `current_height > last_submitted_result_local_height + query_submit_timeout || current_height > registered_at_height + query_submit_timeout`) anyone can remove the query and take the deposit as a reward.

Amount of coins to deposit is defined via parameter (`query_deposit`) controlled by governance proposal.

In other words, it is expected of the query owner to remove its queries when they are not needed anymore. If a query hasn't been in use for the `query_submit_timeout` and owner hasn't removed it, network users are granted with an opportunity to clean the chain up and raise assets for it.
