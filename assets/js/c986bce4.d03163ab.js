"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},s="Overview",i={unversionedId:"neutron-core/interchain-queries/overview",id:"neutron-core/interchain-queries/overview",title:"Overview",description:"Abstract",source:"@site/docs/neutron-core/interchain-queries/overview.md",sourceDirName:"neutron-core/interchain-queries",slug:"/neutron-core/interchain-queries/overview",permalink:"/neutron-docs/neutron-core/interchain-queries/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Events",permalink:"/neutron-docs/neutron-core/interchain-txs/events"},next:{title:"Messages",permalink:"/neutron-docs/neutron-core/interchain-queries/messages"}},c={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Transaction filters",id:"transaction-filters",level:2}],l={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This document specifies the ICQ (",(0,a.kt)("strong",{parentName:"p"},"I"),"nter",(0,a.kt)("strong",{parentName:"p"},"C"),"hain ",(0,a.kt)("strong",{parentName:"p"},"Q"),"ueries) module for the Neutron network."),(0,a.kt)("p",null,"The ICQ module implements a mechanism to retrieve data from remote chains connected to Neutron via IBC."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"A smart-contract can register two types of Interchain Query for particular chain with some query payload and ",(0,a.kt)("inlineCode",{parentName:"p"},"update_period"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Key-Value query (KV-query) - to read ",(0,a.kt)("strong",{parentName:"li"},"values")," from Cosmos-SDK KV-storage on remote chain which are stored under a set of ",(0,a.kt)("strong",{parentName:"li"},"keys"),";"),(0,a.kt)("li",{parentName:"ul"},"Transactions query (TX-query) - find transactions on remote chain under by condition (transactions filter).")),(0,a.kt)("p",null,"The ICQ module emits an event that contains information about the registered interchain query every ",(0,a.kt)("inlineCode",{parentName:"p"},"update_period")," blocks\nin module's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/x/interchainqueries/keeper/abci.go#L14"},"EndBlocker"),"."),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/relaying/icq-relayer-guide"},"ICQ relayer")," receives such an event, it runs the specified query on the remote chain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in case of KV-query, the ICQ relayer just ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/cosmos-query-relayer/blob/4542045ab24d2735890e70d4dc525677d5f30c8a/internal/proof/proof_impl/get_storage_values.go#L11"},"reads"),"\nnecessary KV-keys from the storage in remote chain with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/ae77f0080a724b159233bd9b289b2e91c0de21b5/docs/interfaces/lite/specification.md"},"Merkle Proofs"),".\nNeutron need the proofs to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/49c33ff43122cb12ee20e98493e0e2439a94f928/x/interchainqueries/keeper/msg_server.go#L217"},"verify")," validity of KV-results when they are being submitted on Neutron;"),(0,a.kt)("li",{parentName:"ul"},"in case if TX-query, the ICQ relayer makes a query to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html#querying-transactions"},"Tendermint RPC"),"\nto search transactions by message types, events and attributes which were emitted during transactions execution and were\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html"},"indexed")," by Tendermint (you can read about the syntax ",(0,a.kt)("a",{parentName:"li",href:"messages#register-interchain-query"},"here"),"). When the ICQ relayer submit transactions search result on Neutron,\nit ",(0,a.kt)("strong",{parentName:"li"},"DOES NOT")," include events into result (even if events were used for the query),\nbecause ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/blob/bff63aec83a4cfbb3bba253cfa04737fb21dacb4/types/results.go#L47"},"events are not deterministic"),",\ntherefore they can break blockchain consensus. ")),(0,a.kt)("p",null,"Neutron verifies the data and processes the query result depending on the interchain query type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in case of a KV-query, the ICQ module saves the result into module's storage, and passed the query id to the contract's\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/internal/sudo/sudo.go#L265"},"SudoKVQueryResult")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-contracts/blob/c197ceacc1c23d2f1283be91f8f90c2be1328db0/contracts/neutron_interchain_queries/src/contract.rs#L255"},"handler"),";"),(0,a.kt)("li",{parentName:"ul"},"in case of a TX-query, the ICQ module ",(0,a.kt)("strong",{parentName:"li"},"does not")," save the result to the storage, finds the contract that registered the query,\nand passes the full result to the contract's ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/internal/sudo/sudo.go#L227"},"SudoTXQueryResult")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-contracts/blob/c197ceacc1c23d2f1283be91f8f90c2be1328db0/contracts/neutron_interchain_queries/src/contract.rs#L141"},"handler"),".")),(0,a.kt)("h2",{id:"transaction-filters"},"Transaction filters"),(0,a.kt)("p",null,"Since events themselves are not part of the consensus and are not included in the transaction result, it's necessary to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-contracts/blob/c197ceacc1c23d2f1283be91f8f90c2be1328db0/contracts/neutron_interchain_queries/src/contract.rs#L197"},"implement additional checks"),"\nin your ",(0,a.kt)("inlineCode",{parentName:"p"},"SudoTXQueryResult")," handler to check that result transactions satisfies your transactions filter. For instance, you can check that messages in the transactions have proper types, payload, etc.\nIf your contract does not have such checks, malicious relayer can send a fully valid Tendermint transaction which does not satisfy your defined transactions filter, and your business-logic can be broken."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: when registering a TX-query, you write the transaction filters as filters for transaction events. When you check the submitted transaction in your contracts, though, you can only check the information that is stored on-chain (i.e., message fields for messages in a transaction). To put it another way, the set of values that you can use to filter transactions is the intersection of the values that are added to transaction events (used by the ICQ relayer can perform the search) and the values included directly to sdk.Msgs (can be used by your code to check whether the submitted transaction matches your query).  ")),(0,a.kt)("p",null,"You can see more info, examples and recommendations about proper transactions result handling ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-contracts/blob/main/contracts/neutron_interchain_txs/src/contract.rs#L335"},"here"),"."))}h.isMDXComponent=!0}}]);