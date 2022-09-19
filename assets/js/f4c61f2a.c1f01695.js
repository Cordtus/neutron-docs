"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="Messages",i={unversionedId:"neutron/interchain-txs/messages",id:"neutron/interchain-txs/messages",title:"Messages",description:"MsgRegisterInterchainAccount",source:"@site/docs/neutron/interchain-txs/messages.md",sourceDirName:"neutron/interchain-txs",slug:"/neutron/interchain-txs/messages",permalink:"/neutron/interchain-txs/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/interchain-txs/overview"},next:{title:"Client",permalink:"/neutron/interchain-txs/client"}},c={},l=[{value:"MsgRegisterInterchainAccount",id:"msgregisterinterchainaccount",level:2},{value:"Response",id:"response",level:3},{value:"IBC Events",id:"ibc-events",level:3},{value:"State modifications",id:"state-modifications",level:3},{value:"MsgSubmitTx",id:"msgsubmittx",level:2},{value:"Response",id:"response-1",level:3},{value:"IBC Events",id:"ibc-events-1",level:3},{value:"State modifications",id:"state-modifications-1",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("h2",{id:"msgregisterinterchainaccount"},"MsgRegisterInterchainAccount"),(0,a.kt)("p",null,"Attempts to register an interchain account by sending an IBC packet over an IBC connection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgRegisterInterchainAccount {\n  option (gogoproto.equal) = false;\n  option (gogoproto.goproto_getters) = false;\n\n  string from_address = 1;\n  string connection_id = 2 [ (gogoproto.moretags) = "yaml:\\"connection_id\\"" ];\n  string interchain_account_id = 3 [ (gogoproto.moretags) = "yaml:\\"interchain_account_id\\"" ];\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from_address")," must be a smart contract address, otherwise the message will fail;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connection_id")," must be the identifier of a valid IBC connection, otherwise the message will fail;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interchain_account_id")," is used to generate the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/v3.1.1/modules/apps/27-interchain-accounts/controller/keeper/account.go#L17"},"owner")," parameter for ICA's ",(0,a.kt)("inlineCode",{parentName:"li"},"RegisterInterchainAccount()")," call, which is later used for port identifier generation (see below).")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"IBC ports naming / Interchain Account address derivation"),(0,a.kt)("p",null,"If a contract with the address ",(0,a.kt)("inlineCode",{parentName:"p"},"neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq")," sends an ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRegisterInterchainAccount")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"interchain_account_id")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"hub/1"),", the generated ICA owner will look like ",(0,a.kt)("inlineCode",{parentName:"p"},"neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq.hub/1"),", and the IBC port generated by the ICA app will be equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq.hub/1"),"."),(0,a.kt)("p",null,"ICA's remote address generation concatenates connection identifier and port identifier to use them as the derivation key for the new account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// GenerateAddress returns an sdk.AccAddress derived using the provided module account address and connection and port identifiers.\n// The sdk.AccAddress returned is a sub-address of the module account, using the host chain connection ID and controller chain's port ID as the derivation key\nfunc GenerateAddress(moduleAccAddr sdk.AccAddress, connectionID, portID string) sdk.AccAddress {\n    return sdk.AccAddress(sdkaddress.Derive(moduleAccAddr, []byte(connectionID+portID)))\n}\n\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," your contract needs to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo()")," entrypoint on order to successfully process the IBC events associated with this message. You can find an example in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-contracts/tree/main/contracts"},"neutron-contracts")," repository. ")),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgRegisterInterchainAccountResponse {}\n")),(0,a.kt)("h3",{id:"ibc-events"},"IBC Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type MessageOnChanOpenAck struct {\n    OpenAck OpenAckDetails `json:"open_ack"`\n}\n\ntype OpenAckDetails struct {\n    PortID                string `json:"port_id"`\n    ChannelID             string `json:"channel_id"`\n    CounterpartyChannelId string `json:"counterparty_channel_id"`\n    CounterpartyVersion   string `json:"counterparty_version"`\n}\n')),(0,a.kt)("p",null,"The data from an ",(0,a.kt)("inlineCode",{parentName:"p"},"OnChanOpenAck")," event is passed to the contract using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/288609255ad92dfe5c54eae572fe7d6010e712eb/x/wasm/keeper/keeper.go#L453"},"Sudo() call"),". You can have a look at an example handler implementation in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-contracts/tree/main/contracts"},"neutron-contracts")," repository. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: you can find the interchain account address in the stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CounterpartyVersion")," field as part of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/27-interchain-accounts/host/keeper/handshake.go#L78"},"metadata"),".")),(0,a.kt)("h3",{id:"state-modifications"},"State modifications"),(0,a.kt)("p",null,"None."),(0,a.kt)("h2",{id:"msgsubmittx"},"MsgSubmitTx"),(0,a.kt)("p",null,"Attempts to execute a transaction on a remote chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgSubmitTx {\n  option (gogoproto.equal) = false;\n  option (gogoproto.goproto_getters) = false;\n\n  string from_address = 1;\n  string interchain_account_id = 2;\n  string connection_id = 3;\n  repeated google.protobuf.Any msgs = 4;\n  string memo = 5;\n  uint64 timeout = 6;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from_address")," must be a smart contract address, otherwise the message will fail;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interchain_account_id")," is identical to ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgRegisterInterchainAccount.interchain_account_id"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connection_id")," must be the identifier of a valid IBC connection, otherwise the message will fail;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memo")," is the transaction ",(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/core/transactions.html"},"memo"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," is a timeout in seconds after which the packet times out.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," most networks reject memos longer than 256 bytes.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," your contract needs to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo()")," entrypoint on order to successfully process the IBC events associated with this message. You can find an example in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-contracts/tree/main/contracts"},"neutron-contracts")," repository.")),(0,a.kt)("h3",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgSubmitTxResponse {\n  uint64 sequence_id = 1;\n  string channel = 2;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sequence_id")," is a channel's sequence_id for outgoing ibc packet. Unique per a channel;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"channel")," is the src channel name on neutron's side trasaction was submitted from;")),(0,a.kt)("h3",{id:"ibc-events-1"},"IBC Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type SudoMessageTimeout struct {\n    Timeout struct {\n        Request channeltypes.Packet `json:"request"`\n    } `json:"timeout"`\n}\n\ntype SudoMessageResponse struct {\n    Response struct {\n        Request channeltypes.Packet `json:"request"`\n        Data    []byte              `json:"data"` // Message data\n    } `json:"response"`\n}\n\ntype SudoMessageError struct {\n    Error struct {\n        Request channeltypes.Packet `json:"request"`\n        Details string              `json:"details"`\n    } `json:"error"`\n}\n')),(0,a.kt)("p",null,"While trying to execute an interchain transaction, you can receive an IBC ",(0,a.kt)("inlineCode",{parentName:"p"},"Timeout")," or an IBC ",(0,a.kt)("inlineCode",{parentName:"p"},"Acknowledgement"),", and the latter can contain either a valid response or an error. These three types of transaction results are passed to the contract as distinct messages using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/288609255ad92dfe5c54eae572fe7d6010e712eb/x/wasm/keeper/keeper.go#L453"},"Sudo() call"),". You can have a look at an example handler implementation in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-contracts/tree/main/contracts"},"neutron-contracts")," repository."),(0,a.kt)("p",null,"You can more find info, recommendations and examples about how process acknowledgements ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-contracts/blob/main/contracts/neutron_interchain_txs/src/contract.rs#L335"},"here"),"."),(0,a.kt)("h3",{id:"state-modifications-1"},"State modifications"),(0,a.kt)("p",null,"None."))}u.isMDXComponent=!0}}]);