"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[5050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r="CosmWasm + WasmKit",s={unversionedId:"tutorials/cosmwasm_wasmkit",id:"tutorials/cosmwasm_wasmkit",title:"CosmWasm + WasmKit",description:"This guide will explore an overview of lifecycle of a simple CosmWasm contract using WasmKit. You can check out more detailed WasmKit usage here.",source:"@site/docs/tutorials/cosmwasm_wasmkit.md",sourceDirName:"tutorials",slug:"/tutorials/cosmwasm_wasmkit",permalink:"/tutorials/cosmwasm_wasmkit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CosmWasm + Remix IDE",permalink:"/tutorials/cosmwasm_remix"},next:{title:"CosmWasm + ICA",permalink:"/tutorials/cosmwasm_ica"}},l={},c=[{value:"WasmKit&#39;s approach to abstraction",id:"wasmkits-approach-to-abstraction",level:2},{value:"Contract development cycle",id:"contract-development-cycle",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Setup rust environment",id:"setup-rust-environment",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:2},{value:"Initialize a project",id:"initialize-a-project",level:3},{value:"Compile the project",id:"compile-the-project",level:3},{value:"Listing Tasks",id:"listing-tasks",level:3},{value:"Cleanup Artifacts",id:"cleanup-artifacts",level:3},{value:"Start local network",id:"start-local-network",level:3},{value:"Running user scripts",id:"running-user-scripts",level:3},{value:"Run tests",id:"run-tests",level:2},{value:"Initiate wasmkit playground",id:"initiate-wasmkit-playground",level:2},{value:"Configuration guide",id:"configuration-guide",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cosmwasm--wasmkit"},"CosmWasm + WasmKit"),(0,i.kt)("p",null,"This guide will explore an overview of lifecycle of a simple CosmWasm contract using WasmKit. You can check out more detailed WasmKit usage ",(0,i.kt)("a",{parentName:"p",href:"https://wasmkit.kubiklabs.xyz/"},"here"),"."),(0,i.kt)("p",null,"WasmKit is a development framework specifically designed for building CosmWasm contracts. The primary goal of the project is to simplify, streamline, and enhance the process of developing CosmWasm contracts."),(0,i.kt)("h2",{id:"wasmkits-approach-to-abstraction"},"WasmKit's approach to abstraction"),(0,i.kt)("p",null,"WasmKit's approach separates the running instances (networks, contracts, accounts) from the core logic (deploy steps, testing logic) to make contract interation possible with any CosmWasm enabled chain with any account with just a slight change in ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmkit.config.js")," if need be."),(0,i.kt)("p",null,"WasmKit configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmkit.config.js")," maps blockchain networks (neutron mainnet, neutron testnet or localnet), accounts (contract admin account, contract deploy account, testing account) and even contracts (their .wasm file, schema files) with just their names and only use given names while writing interaction script or testing logic. This is poweful mechanism as it removes the need to store and keep track of data values for these 3 entities, for example, there is no need to store codeId after contract deployment, contractAddress after instantiation or to store RPC URL or chainId for mainnet, testnets."),(0,i.kt)("h3",{id:"contract-development-cycle"},"Contract development cycle"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Setup contracts repo"),": A project repository to hold rust contracts, deployment scripts, tests and configuration files in one place. Can possibly have docs and/or front-end source too."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Implement contract logic, compile and debug"),": Define contract's storage, messages and contract methods for given messages. Compile contracts to generate ",(0,i.kt)("inlineCode",{parentName:"li"},".wasm")," files as contract binary and contract messages schema ",(0,i.kt)("inlineCode",{parentName:"li"},".json")," files."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Write unit, integration tests"),": Unit tests can be written in contract's rust source and chain interaction integration tests in typescript."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Compress wasm binary, deploy to network, instantiate contract"),": Deploy to network by using a simple deploy script written in typescript. Contract instantiation can also be done within the typescript script."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Query or Execute contract"),": Contract queries and execute calls can be simply implemented in typescript using the ",(0,i.kt)("inlineCode",{parentName:"li"},"typescript_schema/")," clients generated."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Write front-end and scripts to interact with the contract"),": The same ",(0,i.kt)("inlineCode",{parentName:"li"},"typescript_schema/")," clients can be used to write front-end interaction with the contracts.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The minimum packages/requirements are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node ",(0,i.kt)("inlineCode",{parentName:"li"},"v16+")),(0,i.kt)("li",{parentName:"ul"},"Yarn ",(0,i.kt)("inlineCode",{parentName:"li"},"v1.22+")," or Npm ",(0,i.kt)("inlineCode",{parentName:"li"},"v6.0+")),(0,i.kt)("li",{parentName:"ul"},"Connection to a Neutron node")),(0,i.kt)("h2",{id:"quick-start"},"Quick start"),(0,i.kt)("h3",{id:"setup-rust-environment"},"Setup rust environment"),(0,i.kt)("p",null,"WasmKit requires a Rust environment installed on local machine to work properly. A working instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rustc")," should be enough to get started."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nrustup --version\nrustc --version\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Alternatively, you can install rust by following their ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"documentation"),".")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @kubiklabs/wasmkit\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @kubiklabs/wasmkit\n")),(0,i.kt)("p",null,"Installation from source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kubiklabs/wasmkit.git\ncd wasmkit && yarn install && yarn build\ncd packages/wasmkit && yarn link\nchmod +x $HOME/.yarn/bin/wasmkit\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Depending on your system and how you install, the wasmkit commands could work with ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," prefix or without. Try both to be sure on how it works for you.")),(0,i.kt)("h3",{id:"initialize-a-project"},"Initialize a project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit init <project-name>\n")),(0,i.kt)("p",null,"This will create a directory inside the current directory with boiler-plate code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"contracts/")," directory has all the rust files for the contract logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scripts/")," directory contains ",(0,i.kt)("inlineCode",{parentName:"li"},".ts")," scripts that users can write according to the use case, a sample script has been added to give some understanding of how a user script should look like."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test/")," directory contains ",(0,i.kt)("inlineCode",{parentName:"li"},".ts")," scripts to run intergation tests for the deployed contracts.")),(0,i.kt)("h3",{id:"compile-the-project"},"Compile the project"),(0,i.kt)("p",null,"Begin by typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd <project-name>\nnpx wasmkit --help\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you're inside project's root directory when running compile command.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command generates compiled ",(0,i.kt)("inlineCode",{parentName:"p"},".wasm")," files in ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts/contracts/"),", schema ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," files in ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts/schema/")," and typescript clients in ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts/typescript_schema/"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compile all the contracts in the project:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit compile\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compile only one contracts or a subset of all contracts in the project:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit compile <contract-source-dir>\n\nnpx wasmkit compile contracts/first_contract/ # compile only contract with name 'first_contract'\n\nnpx wasmkit compile contracts/first_contract/ contracts/second_contract/ # compile only these 2 contracts\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Skip schema generation while compiling:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit compile --skip-schema\n")),(0,i.kt)("h3",{id:"listing-tasks"},"Listing Tasks"),(0,i.kt)("p",null,"To see the tasks (commands) that are available, run wasmkit in project's directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit\n")),(0,i.kt)("p",null,"This will display the list of built-in tasks. This is your starting point to find out what tasks are available to run."),(0,i.kt)("h3",{id:"cleanup-artifacts"},"Cleanup Artifacts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clear artifacts data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit clean\n")),(0,i.kt)("p",null,"This will remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts/")," directory completely."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clean artifacts for only one contract:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit clean <contract-name>\n")),(0,i.kt)("h3",{id:"start-local-network"},"Start local network"),(0,i.kt)("p",null,"A local instance of neutron network can be created if a following config is specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmkit.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  localnetworks: {  // specify localnetwork docker image, ports and environment variables\n    neutron: {\n      docker_image: "neutron-node",\n      rpc_port: 26657,\n      rest_port: 1317,\n      flags: ["RUN_BACKGROUND=0"],\n    },\n  },\n')),(0,i.kt)("p",null,"You can see there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"neutron-node")," used as a docker image. For such a setup you'll need to ",(0,i.kt)("a",{parentName:"p",href:"/neutron/build-and-run/neutron-docker#3-build-a-neutron-node-image"},"Build a Neutron node image"),". Once done, a neutron localnet using above config can be started by doing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit localnet-start neutron\n")),(0,i.kt)("p",null,"The RPC URL for this localnetwork will be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:26657")," and REST URL will be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:1317"),". This can be verified by doing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit node-info --network localnet\n")),(0,i.kt)("h3",{id:"running-user-scripts"},"Running user scripts"),(0,i.kt)("p",null,"User scripts are a way to define the flow of interacting with contracts on some network in the form of a script. These scripts can be used to deploy a contract, query or execute a contract. A sample script ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/sample-script.ts")," is available in the boilerplate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit run scripts/<script-name>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wasmkit.config.js")," has list of networks defined and comes by default with 3 networks defined, namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"testnet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"localnet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet"),". To specify which network to the script (or test) for, simply use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--network")," flag similar as given below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit run scripts/<script-name> --network localnet\n")),(0,i.kt)("h2",{id:"run-tests"},"Run tests"),(0,i.kt)("p",null,"To run all the tests in ",(0,i.kt)("inlineCode",{parentName:"p"},"test/")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit test\n")),(0,i.kt)("p",null,"To run a specific test or a subset of tests, just pass the path of test files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit test test/<test-name>\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wasmkit test test/sample-test.ts test/another-test.ts\n")),(0,i.kt)("h2",{id:"initiate-wasmkit-playground"},"Initiate wasmkit playground"),(0,i.kt)("p",null,"Wasmkit playground is an auto-generated minimal front-end for interacting with deployed contracts. Since wasmkit keeps track of the deployed contract addresses on multiple networks, it can generate the playground front-end using these addresses and the typescript schema generated from the contracts. This playground can be useful when quickly interacting with contracts either for debugging purposes or it can be shared as part of contract documentation for anyone to try out contracts interaction without having to setup environment or installing any cli."),(0,i.kt)("p",null,"To initiate wamskit playground, make sure you are in project directory and contracts are compiled and instantiated using compile and run commands of wasmkit respectively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd <project-name>\nnpx wasmkit playground\n")),(0,i.kt)("p",null,"This command will clone a react application to interact with deployed contracts. User can also modify its theme and logo using config file."),(0,i.kt)("p",null,"Locally run the playground front-end using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd playground/\nyarn start\n")),(0,i.kt)("h2",{id:"configuration-guide"},"Configuration guide"),(0,i.kt)("p",null,"If you examine the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmkit.config.js")," file, you will find testnet/localnet accounts and various networks, allowing users to customize fee, account, and network information according to their requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// You can specify your own testnet/mainnet/localnet accounts\n// testnet account can be funded using faucets\nconst testnet_accounts = [\n  {\n    name: 'account_0',\n    address: 'neutron1e...dp5',\n    mnemonic: 'omit ... text'\n  },\n  {\n    name: 'account_1',\n    address: 'neutron1n...z8h',\n    mnemonic: 'student ... bicycle'\n  }\n];\n\nconst localnet_accounts = [\n  {\n    name: 'account_0',\n    address: 'neutron3f...sf2',\n    mnemonic: 'clip ... choose'\n  }\n];\n\nconst mainnet_accounts = [\n  {\n    name: 'account_0',\n    address: 'neutron3f...sf2',\n    mnemonic: 'clip ... choose'\n  }\n];\n\n// You can specify other networks similarly,\n// just need to know RPC URL and chainID\n// custom fee can also be added here\n// for detailed example: https://github.com/kubiklabs/wasmkit/blob/master/packages/wasmkit/sample-project/wasmkit.config.js\nconst networks = {\n  localnet: {\n    endpoint: 'http://localhost:26657/',\n    chainId: 'test-1',\n    accounts: localnet_accounts,\n  },\n  testnet: {\n    endpoint: 'https://rpc-palvus.pion-1.ntrn.tech/',\n    chainId: 'pion-1',\n    accounts: testnet_accounts,\n  },\n  mainnet: {\n    endpoint: 'https://rpc-kralum.neutron-1.neutron.org',\n    chainId: 'neutron-1',\n    accounts: mainnet_accounts,\n  },\n};\n\nmodule.exports = {\n  networks: {\n    default: networks.testnet,\n    testnet: networks.testnet,\n    localnet: networks.localnet,\n  },\n  localnetworks: {  // specify localnetwork docker image, ports and environment variables\n    neutron: {\n      docker_image: \"neutron-node\",\n      rpc_port: 26657,\n      rest_port: 1317,\n      flags: [\"RUN_BACKGROUND=0\"],\n    },\n  },\n  mocha: {\n    timeout: 60000\n  },\n  rust: {\n    version: \"1.63.0\",\n  }\n};\n")))}u.isMDXComponent=!0}}]);