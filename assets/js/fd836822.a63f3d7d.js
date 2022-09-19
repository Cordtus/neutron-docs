"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[593],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,g=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(g,o(o({ref:e},u),{},{components:a})):n.createElement(g,o({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6203:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},o="Events",p={unversionedId:"neutron/gov/events",id:"neutron/gov/events",title:"Events",description:"NOTE: events are similar to vanilla cosmos gov module",source:"@site/docs/neutron/gov/events.md",sourceDirName:"neutron/gov",slug:"/neutron/gov/events",permalink:"/neutron-docs/neutron/gov/events",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"State",permalink:"/neutron-docs/neutron/gov/state"},next:{title:"Build Neutron source code",permalink:"/neutron-docs/neutron/build"}},i={},d=[{value:"EndBlocker",id:"endblocker",level:2},{value:"Handlers",id:"handlers",level:2},{value:"MsgSubmitProposal",id:"msgsubmitproposal",level:3},{value:"MsgVote",id:"msgvote",level:3},{value:"MsgVoteWeighted",id:"msgvoteweighted",level:3},{value:"MsgDeposit",id:"msgdeposit",level:3}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: events are similar to vanilla cosmos gov module")),(0,r.kt)("p",null,"The governance module emits the following events:"),(0,r.kt)("h2",{id:"endblocker"},"EndBlocker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inactive_proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inactive_proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_result"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalResult}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active_proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active_proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_result"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalResult}")))),(0,r.kt)("h2",{id:"handlers"},"Handlers"),(0,r.kt)("h3",{id:"msgsubmitproposal"},"MsgSubmitProposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit_proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit_proposal ","[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"voting_period_start"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"{depositAmount}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"submit_proposal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"{senderAddress}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[0]"," Event only emitted if the voting period starts during the submission.")),(0,r.kt)("h3",{id:"msgvote"},"MsgVote"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_vote"),(0,r.kt)("td",{parentName:"tr",align:null},"option"),(0,r.kt)("td",{parentName:"tr",align:null},"{voteOption}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_vote"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"vote")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"{senderAddress}")))),(0,r.kt)("h3",{id:"msgvoteweighted"},"MsgVoteWeighted"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_vote"),(0,r.kt)("td",{parentName:"tr",align:null},"option"),(0,r.kt)("td",{parentName:"tr",align:null},"{weightedVoteOptions}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_vote"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"vote")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"{senderAddress}")))),(0,r.kt)("h3",{id:"msgdeposit"},"MsgDeposit"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"{depositAmount}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_deposit ","[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"voting_period_start"),(0,r.kt)("td",{parentName:"tr",align:null},"{proposalID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"deposit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"{senderAddress}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[0]"," Event only emitted if the voting period starts during the submission.")))}m.isMDXComponent=!0}}]);