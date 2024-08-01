"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},o="ICQ Relayer",s={unversionedId:"relaying/icq-relayer",id:"version-1.0/relaying/icq-relayer",title:"ICQ Relayer",description:"Overview",source:"@site/versioned_docs/version-1.0/relaying/icq-relayer.md",sourceDirName:"relaying",slug:"/relaying/icq-relayer",permalink:"/1.0/relaying/icq-relayer",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"IBC Relayer",permalink:"/1.0/relaying/ibc-relayer"},next:{title:"CosmWasm + ICA",permalink:"/1.0/tutorials/cosmwasm-ica"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Queries gathering",id:"queries-gathering",level:3},{value:"Queries execution",id:"queries-execution",level:3},{value:"Results submission",id:"results-submission",level:3},{value:"A bit of technical details about queries",id:"a-bit-of-technical-details-about-queries",level:4},{value:"Queries submission",id:"queries-submission",level:5},{value:"Beacons in TX queries",id:"beacons-in-tx-queries",level:5},{value:"Configuration",id:"configuration",level:2},{value:"Neutron chain node settings",id:"neutron-chain-node-settings",level:3},{value:"Target chain node settings",id:"target-chain-node-settings",level:3},{value:"Relayer application settings",id:"relayer-application-settings",level:3},{value:"Logger configuration",id:"logger-configuration",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up Relayer wallet",id:"setting-up-relayer-wallet",level:3},{value:"Running the Relayer",id:"running-the-relayer",level:2},{value:"Webserver API",id:"webserver-api",level:2},{value:"Shutting the Relayer down",id:"shutting-the-relayer-down",level:2}],d={toc:u},h="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icq-relayer"},"ICQ Relayer"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/neutron/modules/interchain-queries/overview"},"Interchain Queries")," allow smart contracts to make queries to a remote chain. An ICQ Relayer is a required component for making them possible. It acts as a facilitator between the Neutron chain and a querying chain, gathering queries that are needed to be performed from the Neutron, actually performing them, and eventually making the results available for the Neutron's smart contracts. These three main responsibilities are described in details below."),(0,a.kt)("p",null,"If you are a smart contracts developer and up to develop your dApp on Neutron, you will most likely need your own ICQ Relayer to manage your Interchain Queries."),(0,a.kt)("h3",{id:"queries-gathering"},"Queries gathering"),(0,a.kt)("p",null,"All registered Interchain Queries and their parameters are stored in the eponymous module and available by its ",(0,a.kt)("a",{parentName:"p",href:"/neutron/modules/interchain-queries/client#queries"},"query interface"),". The Relayer utilises the module's interface in order to initialise the performing list of queries. This is how the Relayer maintains the list of queries to be executed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on initialisation, the ICQ module ",(0,a.kt)("inlineCode",{parentName:"li"},"RegisteredQueries")," query is executed with the ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_REGISTRY_ADDRESSES")," parameter used for the ",(0,a.kt)("inlineCode",{parentName:"li"},"Owners")," field;"),(0,a.kt)("li",{parentName:"ul"},"during the rest of the run, the Relayer listens to the ICQ module's ",(0,a.kt)("inlineCode",{parentName:"li"},"query_update")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"query_removed")," ",(0,a.kt)("a",{parentName:"li",href:"/neutron/modules/interchain-queries/events"},"events")," and modifies the queries list and parameters correspondingly.")),(0,a.kt)("p",null,"The Relayer also listens to the Neutron's ",(0,a.kt)("inlineCode",{parentName:"p"},"NewBlockHeader")," events that are used as a trigger for queries execution. Since each query has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"update_period"),", the Relayer tracks queries execution height and executes only the queries which update time has come."),(0,a.kt)("h3",{id:"queries-execution"},"Queries execution"),(0,a.kt)("p",null,"When the update time comes for a query, the Relayer runs the specified query on the remote chain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in case of a KV-query, the Relayer just ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-query-relayer/blob/4542045ab24d2735890e70d4dc525677d5f30c8a/internal/proof/proof_impl/get_storage_values.go#L11"},"reads"),"\nnecessary KV-keys from the remote chain's storage with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/ae77f0080a724b159233bd9b289b2e91c0de21b5/docs/interfaces/lite/specification.md"},"Merkle Proofs"),". Neutron will need these proofs to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/v1.0.4/x/interchainqueries/keeper/msg_server.go#L228"},"verify")," validity of KV-results on results submission;"),(0,a.kt)("li",{parentName:"ul"},"in case of a TX-query, the Relayer makes a query to the target chain's ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html#querying-transactions"},"Tendermint RPC"),"\nto search transactions by message types, events and attributes which were emitted during transactions execution and were\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html"},"indexed")," by Tendermint. More about Tx query parameters syntax ",(0,a.kt)("a",{parentName:"li",href:"/neutron/modules/interchain-queries/messages#register-interchain-query"},"in the dedicated section"),". When Relayer submits transactions search results to Neutron chain, it ",(0,a.kt)("strong",{parentName:"li"},"DOES NOT")," include events into result (even if events were used for the query), because ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/blob/bff63aec83a4cfbb3bba253cfa04737fb21dacb4/types/results.go#L47"},"events are not deterministic"),", therefore they can break blockchain consensus. One more important thing about TX queries is that the Relayer is made the way it only searches for and submits transactions within the trusting period of the Tendermint Light Client. Trusting period is usually calculated as ",(0,a.kt)("inlineCode",{parentName:"li"},"2/3 * unbonding_period"),". Read more about Tendermint Light Client and trusted periods ",(0,a.kt)("a",{parentName:"li",href:"https://blog.cosmos.network/light-clients-in-tendermint-consensus-1237cfbda104"},"at this post"),".")),(0,a.kt)("h3",{id:"results-submission"},"Results submission"),(0,a.kt)("p",null,"Relayer submits a query result as the following depending on the Relayer's configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"simply sending it to the Neutron's Interchain Queries module which handles it by storing the result in the blockchain state (KV queries with ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_KV_CALLBACKS"),"=false);"),(0,a.kt)("li",{parentName:"ul"},"sending it to the Neutron's Interchain Queries module which handles it by storing the result in the blockchain state and passing the result to the owner smart contract (KV queries with ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_KV_CALLBACKS"),"=true);"),(0,a.kt)("li",{parentName:"ul"},"passing it to the smart contract that has registered the query (TX queries).")),(0,a.kt)("p",null,"This means that it's the Relayer who pays gas for these actions. Note that KV queries submission are straightforward and therefore cheap whereas TX ones and KV callbacks also include smart contract call and their cost may vary significantly."),(0,a.kt)("h4",{id:"a-bit-of-technical-details-about-queries"},"A bit of technical details about queries"),(0,a.kt)("h5",{id:"queries-submission"},"Queries submission"),(0,a.kt)("p",null,"The KV queries are submitted in a fire-and-forget way, i.e. they are submitted once per ",(0,a.kt)("inlineCode",{parentName:"p"},"update_period")," span and never retried forcibly (e.g. on a submission error). The TX queries are a bit more tricky: since they are not stored in the Neutron chain and simply passed to smart contracts, it's needed that each tx is passed and handled by the smart contract only once."),(0,a.kt)("p",null,"The Relayer uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"BroadcastTxSync")," messages broadcast type to maintain balance between performance and submission control, but this means that the submission result is not waited for. And here comes an important part related to TX queries. To achieve both submission speed and sequential submission handling, the Relayer fires TX submission messages, remembers the query result as sent, and then in the background retrieves the submission result for the query. If it turns to be a success, the TX is saved as fully processed and will not be sent to the smart contract again. Otherwise, this tx will be marked as failed and will not be sent to the smart contract again during this run. Instead, to prevent repeated submission of transactions which can't be successfully handled by the smart contract, the retry will only be possible on Relayer restart."),(0,a.kt)("p",null,"As a default when the Relayer submits a TX query result to the Neutron chain and an error occurs in the smart contract during the sudo call, the Relayer will ignore this error and not retry the submission. For all other errors, the Relayer will exit with an error."),(0,a.kt)("p",null,"This behaviour cased by the fact that the Relayer is not aware of the smart contract's logic and therefore can't know whether the error is recoverable or not. Also, the Relayer should treat all other errors (network/balance/wallet) as fatal, exit and let itself be restarted by the admin/system."),(0,a.kt)("p",null,"It is strongly recommended to run the Relayer as a daemon to allow easy restart."),(0,a.kt)("p",null,"If you want to change the behaviour, you can do so by changing the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"RELAYER_IGNORE_ERRORS_REGEX"),"."),(0,a.kt)("h5",{id:"beacons-in-tx-queries"},"Beacons in TX queries"),(0,a.kt)("p",null,"Transactions for a TX query are retrieved from a target chain in ascending order. Since the TX query results aren't submitted to the Neutron chain storage (they are processed by smart contracts via Sudo calls right away) there is no way to get the last processed height from the Neutron for a TX query. In order to keep a TX query progress in terms of already processed heights (make further queries, or restart the Relayer and start from the point where the Relayer stopped during the previous run) the Relayer saves progress for each TX query in its own storage. One of the things it stores is the remote chain height, and it gets updated when all transactions from the given height have been submitted to the chain (i.e. submission messages with these transactions have been broadcast). When the next time to execute the query comes, or when the Relayer restarts, this height will be used to retrieve the next batch of transactions. The ",(0,a.kt)("inlineCode",{parentName:"p"},"RELAYER_INITIAL_TX_SEARCH_OFFSET")," config parameter is tightly coupled with this part of documentation. Read more about it in the ",(0,a.kt)("a",{parentName:"p",href:"#relayer-application-settings"},"Relayer application configuration section"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This section contains description for all the possible config values that the Relayer supports. For example values see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-query-relayer/blob/main/.env.example"},".env.example")," file in the Relayer's repository."),(0,a.kt)("h3",{id:"neutron-chain-node-settings"},"Neutron chain node settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_RPC_ADDR")," \u2014 RPC address of a Neutron node to interact with (e.g. get events and to submit results);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_REST_ADDR")," \u2014 REST address of a Neutron node to interact with (e.g. get registered queries list);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR")," \u2014 path to keys directory;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_SIGN_KEY_NAME")," \u2014 name of the key pair to be used by the Relayer;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_TIMEOUT")," \u2014 timeout for Neutron RPC and REST calls;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_GAS_PRICES")," \u2014 the price for a unit of gas used by the Relayer;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_GAS_LIMIT")," \u2014 the maximum price to be paid for a single submission;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_GAS_ADJUSTMENT")," \u2014 gas multiplier used in order to avoid underestimating;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_CONNECTION_ID")," \u2014 Neutron chain connection ID; Relayer will only relay events for this connection;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_DEBUG")," \u2014 flag to run neutron chain provider in debug mode;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_KEYRING_BACKEND")," \u2014 described ",(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/run-node/keyring.html#the-kwallet-backend"},"here"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_OUTPUT_FORMAT")," \u2014 Neutron chain provider output format;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_SIGN_MODE_STR")," \u2014 described ",(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/core/transactions.html#signing-transactions"},"here"),", also consider use short variation, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"direct"),".")),(0,a.kt)("h3",{id:"target-chain-node-settings"},"Target chain node settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_RPC_ADDR")," \u2014 RPC address of a target chain node to interact with (e.g. send queries);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_ACCOUNT_PREFIX")," \u2014 target chain account prefix;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_VALIDATOR_ACCOUNT_PREFIX")," \u2014 target chain validator account prefix;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_TIMEOUT")," \u2014 timeout for target chain RPC calls;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_DEBUG")," \u2014 flag to run neutron chain provider in debug mode;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_OUTPUT_FORMAT")," \u2014 target chain provider output format.")),(0,a.kt)("h3",{id:"relayer-application-settings"},"Relayer application settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_REGISTRY_ADDRESSES")," \u2014 a list of comma-separated smart-contract addresses (registered query owners) for which the Relayer processes interchain queries. If empty, literally all registered queries are processed which is usable if you are up to deploy a public Relayer;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_TX_QUERIES")," \u2014 if true, Relayer will process tx queries (if ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", Relayer will ignore them). A true value here is mostly usable for a private Relayer because TX queries submission is quite expensive;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_KV_CALLBACKS")," \u2014 if ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", will pass proofs as sudo callbacks to contracts. A true value here is mostly usable for a private Relayer because KV query callbacks execution is quite expensive. If false, results will simply be submitted to Neutron and become available for smart contracts retrieval;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_MIN_KV_UPDATE_PERIOD")," \u2014 minimal period of queries execution and submission. This value is usable for a public Relayer as a rate limiter because it roughly overrides the queries ",(0,a.kt)("inlineCode",{parentName:"li"},"update_period")," and force queries execution not more often than ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," blocks;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_STORAGE_PATH")," \u2014 path to leveldb storage, will be created on the given path if it doesn't exist. It is required if ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_TX_QUERIES")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_QUERIES_TASK_QUEUE_CAPACITY")," \u2014 capacity of the channel that is used to send messages from subscriber to Relayer. Better set to a higher value to avoid problems with Tendermint websocket subscriptions;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_CHECK_SUBMITTED_TX_STATUS_DELAY")," \u2014 delay in seconds between TX query submission and the result handling checking (more about this in the ",(0,a.kt)("a",{parentName:"li",href:"#a-bit-of-technical-details-about-tx-submission"},"TX submission section"),");"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_INITIAL_TX_SEARCH_OFFSET")," - Only for transaction queries. If set to non zero and no prior search height exists, it will initially set search height to (last_height - X). One example of usage of it will be if you have lots of old tx's on first start you don't need. Keep in mind that it will affect each newly created transaction query. To get a better understanding about how this works read the ",(0,a.kt)("a",{parentName:"li",href:"#beacons-in-tx-queries"},"dedicated section"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_WEBSERVER_PORT")," \u2014 listener address for webserver json api you can query and prometheus metrics;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_IGNORE_ERRORS_REGEX")," - regular expression to match errors that should be ignored. If the error matches the regex, the Relayer will ignore it and will not retry the submission. For any other errors, the Relayer will exit with an error.")),(0,a.kt)("h3",{id:"logger-configuration"},"Logger configuration"),(0,a.kt)("p",null,"As it is said in the Relayer's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-query-relayer#logging"},"readme"),", the Relayer uses a little bit modified version of Uber's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber-go/zap"},"zap.Logger"),". This modification allows logger configuration via env parameters. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-logger#configuration-via-env-variables"},"logger configuration guide")," readme for more information."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before running the Relayer application for production purposes, you need to create a wallet for the Relayer, top it up, and set up the configuration (refer to the ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"Configuration")," section). Also you will most likely need to deploy your own RPC nodes of Neutron and the chain of interest."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/neutron/build-and-run/overview"},"How to deploy your own Neutron RPC node"),".")),(0,a.kt)("h3",{id:"setting-up-relayer-wallet"},"Setting up Relayer wallet"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The keyring folder for Relayer's usage is configured by the ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR")," variable. The easiest way is to run ",(0,a.kt)("inlineCode",{parentName:"li"},"neutrond keys")," from the cloned ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron"},"neutron repository")," and get the default value from the ",(0,a.kt)("inlineCode",{parentName:"li"},"--keyring-dir")," flag:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"neutrond keys\nKeyring management commands. These keys may be in any format supported by the\nTendermint crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key.\n...\nFlags:\n      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used\n...\nGlobal Flags:\n      --home string         directory for config and data (default \"/Users/your-user/.neutrond\")\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Then execute ",(0,a.kt)("inlineCode",{parentName:"li"},"neutrond keys add relayer --keyring-backend test")," to create an account in the default keyring directory;"),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"relayer")," as the ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_SIGN_KEY_NAME"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"test")," as the ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_KEYRING_BACKEND"),", and pass the keyring directory as a volume to the Relayer's docker container using the keyring path in the container as the ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR"),";"),(0,a.kt)("li",{parentName:"ol"},"Get the Relayer's wallet address and top its balance up. If you're running the Relayer on the testnet, use the official Neutron faucet. For the mainnet, get some NTRN for the address.")),(0,a.kt)("h2",{id:"running-the-relayer"},"Running the Relayer"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure you've finished the ",(0,a.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")," part;"),(0,a.kt)("li",{parentName:"ol"},"Build Relayer's docker image from the Relayer's folder:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make build-docker\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run Relayer in a docker container way:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --env-file .env.example -p 9999:9999 neutron-org/neutron-query-relayer\n")),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-p 9999:9999")," exposes the port that allows access to the webserver json api and Relayer's metrics powered using Prometheus. The container's port will be the same as the ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_LISTEN_ADDR")," value that is ",(0,a.kt)("inlineCode",{parentName:"li"},"9999")," by default. Use another value if you are up to use a different port;"),(0,a.kt)("li",{parentName:"ul"},"add keyring passing to the volumes list. For example, assign ",(0,a.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR=/keyring")," and run the app as:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --env-file .env.example -v /Users/your-user/.neutrond:/keyring -p 9999:9999 neutron-org/neutron-query-relayer\n")),(0,a.kt)("h2",{id:"webserver-api"},"Webserver API"),(0,a.kt)("p",null,"Relayer serves it's own JSON API and provides commands for querying info about it."),(0,a.kt)("p",null,"It listens on port that is set in ",(0,a.kt)("inlineCode",{parentName:"p"},"RELAYER_LISTEN_ADDR")," env."),(0,a.kt)("p",null,"Commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Print available queries:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go run ./cmd/neutron_query_relayer query")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resubmit failed transactions:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go run ./cmd/neutron_query_relayer exec resubmit-tx <queryId> <transactionHash>")),(0,a.kt)("h2",{id:"shutting-the-relayer-down"},"Shutting the Relayer down"),(0,a.kt)("p",null,"During the execution the Neutron ICQ Relayer receives events from Neutron, reads remote chain's state, and modifies its own state and the Neutron' one. In order to reach a reliable and consistent flow the Relayer is designed the way it finishes initialised interactions with its local storage on received ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGINT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGTERM"),". It usually takes a fraction of a second."))}c.isMDXComponent=!0}}]);