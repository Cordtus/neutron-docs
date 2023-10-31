"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[2984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},i="Overview",s={unversionedId:"neutron/modules/3rdparty/osmosis/tokenfactory/overview",id:"neutron/modules/3rdparty/osmosis/tokenfactory/overview",title:"Overview",description:"This module was taken from Osmosis chain codebase (commit//github.com/osmosis-labs/osmosis/commit/9e178a631f91ffc91c51f3665ed915c9f15e1807). The reason of this action was to adopt module and tests to our codebase because it was not possible to import it without code modification",source:"@site/docs/neutron/modules/3rdparty/osmosis/tokenfactory/overview.md",sourceDirName:"neutron/modules/3rdparty/osmosis/tokenfactory",slug:"/neutron/modules/3rdparty/osmosis/tokenfactory/overview",permalink:"/neutron/modules/3rdparty/osmosis/tokenfactory/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/modules/3rdparty/cosmoshub/globalfee/overview"},next:{title:"Messages",permalink:"/neutron/modules/3rdparty/osmosis/tokenfactory/messages"}},l={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Expectations from the chain",id:"expectations-from-the-chain",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This module was taken from Osmosis chain codebase (commit: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/commit/9e178a631f91ffc91c51f3665ed915c9f15e1807"},"https://github.com/osmosis-labs/osmosis/commit/9e178a631f91ffc91c51f3665ed915c9f15e1807"),"). The reason of this action was to adopt module and tests to our codebase because it was not possible to import it without code modification\nthat was made by Osmosis team to the orginal Cosmos SDK. These changes made it not possible (without deep modifications of the whole code) to import module to our code.")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"The tokenfactory module allows any account to create a new token with\nthe name ",(0,a.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}"),'. Because tokens are\nnamespaced by creator address, this allows token minting to be\npermissionless, due to not needing to resolve name collisions. A single\naccount can create multiple denoms, by providing a unique subdenom for each\ncreated denom. Once a denom is created, the original creator is given\n"admin" privileges over the asset. This allows them to:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mint their denom to any account"),(0,a.kt)("li",{parentName:"ul"},"Burn their denom from any account"),(0,a.kt)("li",{parentName:"ul"},"Create a transfer of their denom between any two accounts"),(0,a.kt)("li",{parentName:"ul"},"Change the admin In the future, more admin capabilities may be\nadded. Admins can choose to share admin privileges with other\naccounts using the authz module. The ",(0,a.kt)("inlineCode",{parentName:"li"},"ChangeAdmin")," functionality,\nallows changing the master admin account, or even setting it to\n",(0,a.kt)("inlineCode",{parentName:"li"},'""'),", meaning no account has admin privileges of the asset.")),(0,a.kt)("h2",{id:"expectations-from-the-chain"},"Expectations from the chain"),(0,a.kt)("p",null,"The chain's bech32 prefix for addresses can be at most 16 characters long."),(0,a.kt)("p",null,"This comes from denoms having a 128 byte maximum length, enforced from the SDK, and us setting longest_subdenom to be 44 bytes.\nA token factory token's denom is:\n",(0,a.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}"),"\nSplitting up into sub-components, this has:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"len(factory) = 7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'2 * len("/") = 2')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"len(longest_subdenom)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"len(creator_address) = len(bech32(longest_addr_length, chain_addr_prefix))"),".\nLongest addr length at the moment is ",(0,a.kt)("inlineCode",{parentName:"li"},"32 bytes"),".\nDue to SDK error correction settings, this means ",(0,a.kt)("inlineCode",{parentName:"li"},"len(bech32(32, chain_addr_prefix)) = len(chain_addr_prefix) + 1 + 58"),".\nAdding this all, we have a total length constraint of ",(0,a.kt)("inlineCode",{parentName:"li"},"128 = 7 + 2 + len(longest_subdenom) + len(longest_chain_addr_prefix) + 1 + 58"),".\nTherefore ",(0,a.kt)("inlineCode",{parentName:"li"},"len(longest_subdenom) + len(longest_chain_addr_prefix) = 128 - (7 + 2 + 1 + 58) = 60"),".")),(0,a.kt)("p",null,"The choice between how we standardized the split these 60 bytes between maxes from longest_subdenom and longest_chain_addr_prefix is somewhat arbitrary. Considerations going into this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Per ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32"},"BIP-0173")," the technically longest HRP for a 32 byte address ('data field') is 31 bytes. (Comes from encode(data) = 59 bytes, and max length = 90 bytes)"),(0,a.kt)("li",{parentName:"ul"},"subdenom should be at least 32 bytes so hashes can go into it"),(0,a.kt)("li",{parentName:"ul"},"longer subdenoms are very helpful for creating human readable denoms"),(0,a.kt)("li",{parentName:"ul"},"chain addresses should prefer being smaller. The longest HRP in cosmos to date is 11 bytes. (",(0,a.kt)("inlineCode",{parentName:"li"},"persistence"),")")),(0,a.kt)("p",null,"For explicitness, its currently set to ",(0,a.kt)("inlineCode",{parentName:"p"},"len(longest_subdenom) = 44")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"len(longest_chain_addr_prefix) = 16"),"."),(0,a.kt)("p",null,"Please note, if the SDK increases the maximum length of a denom from 128 bytes, these caps should increase.\nSo please don't make code rely on these max lengths for parsing."))}u.isMDXComponent=!0}}]);