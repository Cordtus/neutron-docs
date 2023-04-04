"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[7807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="State",c={unversionedId:"neutron/cron/state",id:"neutron/cron/state",title:"State",description:"The Cron module stores schedules with name as the key in the following format:",source:"@site/docs/neutron/cron/state.md",sourceDirName:"neutron/cron",slug:"/neutron/cron/state",permalink:"/neutron/cron/state",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Client",permalink:"/neutron/cron/client"},next:{title:"Metrics",permalink:"/neutron/cron/metrics"}},i={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state"},"State"),(0,o.kt)("p",null,"The Cron module stores schedules with ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," as the key in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"message Schedule {\n    // Name of schedule\n    string name = 1;\n    // Period in blocks\n    uint64 period = 2;\n    // Msgs that will be executed every period amount of time\n    repeated MsgExecuteContract msgs = 3 [ (gogoproto.nullable) = false ];\n    // Last execution's block height\n    uint64 last_execute_height = 4;\n}\n\nmessage MsgExecuteContract {\n    // Contract is the address of the smart contract\n    string contract = 1;\n    // Msg json encoded message to be passed to the contract\n    string msg = 2;\n}\n")),(0,o.kt)("p",null,"The Cron module uses params in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"message Params {\n    // Security address that can remove schedules\n    string security_address = 1;\n    // Limit of schedules executed in one block\n    uint64 limit = 2;\n}\n")))}p.isMDXComponent=!0}}]);