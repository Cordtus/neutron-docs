"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[782],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},u=function(e){var o=l(e.components);return n.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return t?n.createElement(g,s(s({ref:o},u),{},{components:t})):n.createElement(g,s({ref:o},u))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=c;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2166:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const r={},s="Messages",i={unversionedId:"neutron/gov/messages",id:"neutron/gov/messages",title:"Messages",description:"NOTE: Messages are similar to vanilla cosmos gov module",source:"@site/docs/neutron/gov/messages.md",sourceDirName:"neutron/gov",slug:"/neutron/gov/messages",permalink:"/neutron-docs/neutron/gov/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron-docs/neutron/gov/overview"},next:{title:"Client",permalink:"/neutron-docs/neutron/gov/client"}},p={},l=[{value:"Deposit",id:"deposit",level:2},{value:"Vote",id:"vote",level:2}],u={toc:l};function d(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Messages are similar to vanilla cosmos gov module"),(0,a.kt)("h2",{parentName:"blockquote",id:"proposal-submission"},"Proposal Submission")),(0,a.kt)("p",null,"Proposals can be submitted by any account via a ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSubmitProposal"),"\ntransaction."),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Msgs")," passed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"messages")," field of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSubmitProposal")," message\nmust be registered in the app's ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgServiceRouter"),". Each of these messages must\nhave one signer, namely the gov module account. And finally, the metadata length\nmust not be larger than the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxMetadataLen")," config passed into the gov keeper."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"State modifications:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate new ",(0,a.kt)("inlineCode",{parentName:"li"},"proposalID")),(0,a.kt)("li",{parentName:"ul"},"Create new ",(0,a.kt)("inlineCode",{parentName:"li"},"Proposal")),(0,a.kt)("li",{parentName:"ul"},"Initialise ",(0,a.kt)("inlineCode",{parentName:"li"},"Proposal"),"'s attributes"),(0,a.kt)("li",{parentName:"ul"},"Decrease balance of sender by ",(0,a.kt)("inlineCode",{parentName:"li"},"InitialDeposit")),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"MinDeposit")," is reached:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Push ",(0,a.kt)("inlineCode",{parentName:"li"},"proposalID")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"ProposalProcessingQueue")))),(0,a.kt)("li",{parentName:"ul"},"Transfer ",(0,a.kt)("inlineCode",{parentName:"li"},"InitialDeposit")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Proposer")," to the governance ",(0,a.kt)("inlineCode",{parentName:"li"},"ModuleAccount"))),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSubmitProposal")," transaction can be handled according to the following\npseudocode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// PSEUDOCODE //\n// Check if MsgSubmitProposal is valid. If it is, create proposal //\n\nupon receiving txGovSubmitProposal from sender do\n\n  if !correctlyFormatted(txGovSubmitProposal)\n    // check if proposal is correctly formatted and the messages have routes to other modules. Includes fee payment.\n    // check if all messages' unique Signer is the gov acct.\n    // check if the metadata is not too long.\n    throw\n\n  initialDeposit = txGovSubmitProposal.InitialDeposit\n  if (initialDeposit.Atoms <= 0) OR (sender.AtomBalance < initialDeposit.Atoms)\n    // InitialDeposit is negative or null OR sender has insufficient funds\n    throw\n\n  if (txGovSubmitProposal.Type != ProposalTypePlainText) OR (txGovSubmitProposal.Type != ProposalTypeSoftwareUpgrade)\n\n  sender.AtomBalance -= initialDeposit.Atoms\n\n  depositParam = load(GlobalParams, 'DepositParam')\n\n  proposalID = generate new proposalID\n  proposal = NewProposal()\n\n  proposal.Messages = txGovSubmitProposal.Messages\n  proposal.Metadata = txGovSubmitProposal.Metadata\n  proposal.TotalDeposit = initialDeposit\n  proposal.SubmitTime = <CurrentTime>\n  proposal.DepositEndTime = <CurrentTime>.Add(depositParam.MaxDepositPeriod)\n  proposal.Deposits.append({initialDeposit, sender})\n  proposal.Submitter = sender\n  proposal.YesVotes = 0\n  proposal.NoVotes = 0\n  proposal.NoWithVetoVotes = 0\n  proposal.AbstainVotes = 0\n  proposal.CurrentStatus = ProposalStatusOpen\n\n  store(Proposals, <proposalID|'proposal'>, proposal) // Store proposal in Proposals mapping\n  return proposalID\n")),(0,a.kt)("h2",{id:"deposit"},"Deposit"),(0,a.kt)("p",null,"Once a proposal is submitted, if\n",(0,a.kt)("inlineCode",{parentName:"p"},"Proposal.TotalDeposit < ActiveParam.MinDeposit"),", Atom holders can send\n",(0,a.kt)("inlineCode",{parentName:"p"},"MsgDeposit")," transactions to increase the proposal's deposit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'// MsgDeposit defines a message to submit a deposit to an existing proposal.\nmessage MsgDeposit {\noption (gogoproto.equal)            = false;\noption (gogoproto.goproto_stringer) = false;\noption (gogoproto.stringer)         = false;\noption (gogoproto.goproto_getters)  = false;\n\nuint64   proposal_id = 1 [(gogoproto.jsontag) = "proposal_id", (gogoproto.moretags) = "yaml:\\"proposal_id\\""];\nstring   depositor   = 2;\nrepeated cosmos.base.v1beta1.Coin amount = 3\n[(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"State modifications:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Decrease balance of sender by ",(0,a.kt)("inlineCode",{parentName:"li"},"deposit")),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"deposit")," of sender in ",(0,a.kt)("inlineCode",{parentName:"li"},"proposal.Deposits")),(0,a.kt)("li",{parentName:"ul"},"Increase ",(0,a.kt)("inlineCode",{parentName:"li"},"proposal.TotalDeposit")," by sender's ",(0,a.kt)("inlineCode",{parentName:"li"},"deposit")),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"MinDeposit")," is reached:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Push ",(0,a.kt)("inlineCode",{parentName:"li"},"proposalID")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"ProposalProcessingQueueEnd")))),(0,a.kt)("li",{parentName:"ul"},"Transfer ",(0,a.kt)("inlineCode",{parentName:"li"},"Deposit")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"proposer")," to the governance ",(0,a.kt)("inlineCode",{parentName:"li"},"ModuleAccount"))),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgDeposit")," transaction has to go through a number of checks to be valid.\nThese checks are outlined in the following pseudocode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// PSEUDOCODE //\n// Check if MsgDeposit is valid. If it is, increase deposit and check if MinDeposit is reached\n\nupon receiving txGovDeposit from sender do\n  // check if proposal is correctly formatted. Includes fee payment.\n\n  if !correctlyFormatted(txGovDeposit)\n    throw\n\n  proposal = load(Proposals, <txGovDeposit.ProposalID|'proposal'>) // proposal is a const key, proposalID is variable\n\n  if (proposal == nil)\n    // There is no proposal for this proposalID\n    throw\n\n  if (txGovDeposit.Deposit.Atoms <= 0) OR (sender.AtomBalance < txGovDeposit.Deposit.Atoms) OR (proposal.CurrentStatus != ProposalStatusOpen)\n\n    // deposit is negative or null\n    // OR sender has insufficient funds\n    // OR proposal is not open for deposit anymore\n\n    throw\n\n  depositParam = load(GlobalParams, 'DepositParam')\n\n  if (CurrentBlock >= proposal.SubmitBlock + depositParam.MaxDepositPeriod)\n    proposal.CurrentStatus = ProposalStatusClosed\n\n  else\n    // sender can deposit\n    sender.AtomBalance -= txGovDeposit.Deposit.Atoms\n\n    proposal.Deposits.append({txGovVote.Deposit, sender})\n    proposal.TotalDeposit.Plus(txGovDeposit.Deposit)\n\n    if (proposal.TotalDeposit >= depositParam.MinDeposit)\n      // MinDeposit is reached, vote opens\n\n      proposal.VotingStartBlock = CurrentBlock\n      proposal.CurrentStatus = ProposalStatusActive\n      ProposalProcessingQueue.push(txGovDeposit.ProposalID)\n\n  store(Proposals, <txGovVote.ProposalID|'proposal'>, proposal)\n")),(0,a.kt)("h2",{id:"vote"},"Vote"),(0,a.kt)("p",null,"Once ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveParam.MinDeposit")," is reached, voting period starts. From there,\nbonded Atom holders are able to send ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgVote")," transactions to cast their\nvote on the proposal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'// MsgVote defines a message to cast a vote.\nmessage MsgVote {\n  option (gogoproto.equal)            = false;\n  option (gogoproto.goproto_stringer) = false;\n  option (gogoproto.stringer)         = false;\n  option (gogoproto.goproto_getters)  = false;\n\n  uint64     proposal_id = 1 [(gogoproto.jsontag) = "proposal_id", (gogoproto.moretags) = "yaml:\\"proposal_id\\""];\n  string     voter       = 2;\n  VoteOption option      = 3;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"State modifications:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Record ",(0,a.kt)("inlineCode",{parentName:"li"},"Vote")," of sender")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: Gas cost for this message has to take into account the future tallying of the vote in EndBlocker.")),(0,a.kt)("p",null,"Next is a pseudocode outline of the way ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgVote")," transactions are\nhandled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"  // PSEUDOCODE //\n  // Check if MsgVote is valid. If it is, count vote//\n\n  upon receiving txGovVote from sender do\n    // check if proposal is correctly formatted. Includes fee payment.\n\n    if !correctlyFormatted(txGovDeposit)\n      throw\n\n    proposal = load(Proposals, <txGovDeposit.ProposalID|'proposal'>)\n\n    if (proposal == nil)\n      // There is no proposal for this proposalID\n      throw\n\n\n    if  (proposal.CurrentStatus == ProposalStatusActive)\n\n\n        // Sender can vote if\n        // Proposal is active\n        // Sender has some bonds\n\n        store(Governance, <txGovVote.ProposalID|'addresses'|sender>, txGovVote.Vote)   // Voters can vote multiple times. Re-voting overrides previous vote. This is ok because tallying is done once at the end.\n")))}d.isMDXComponent=!0}}]);