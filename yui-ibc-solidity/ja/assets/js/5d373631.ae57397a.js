"use strict";(self.webpackChunkyui_docs_yui_ibc_solidity=self.webpackChunkyui_docs_yui_ibc_solidity||[]).push([[382],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),u=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=u(n.components);return a.createElement(c.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,c=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),d=u(t),k=r,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return t?a.createElement(m,o(o({ref:e},s),{},{components:t})):a.createElement(m,o({ref:e},s))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[d]="string"==typeof n?n:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6067:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var a=t(3117),r=(t(7294),t(3905));const l={sidebar_position:3},o="Contract\u4f5c\u6210",i={unversionedId:"minitoken/contract",id:"minitoken/contract",title:"Contract\u4f5c\u6210",description:"IBC\u3092\u7528\u3044\u30662\u53f0\u5e33\u9593\u3067\u8ee2\u9001\u3067\u304d\u308b\u30c8\u30fc\u30af\u30f3\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/minitoken/contract.md",sourceDirName:"minitoken",slug:"/minitoken/contract",permalink:"/yui-docs/yui-ibc-solidity/ja/minitoken/contract",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u524d\u306b\u5fc5\u8981\u306a\u6e96\u5099",permalink:"/yui-docs/yui-ibc-solidity/ja/minitoken/prerequisites"},next:{title:"Contract\u306e\u30c7\u30d7\u30ed\u30a4",permalink:"/yui-docs/yui-ibc-solidity/ja/minitoken/deploy"}},c={},u=[{value:"\u57fa\u672c\u6a5f\u80fd",id:"\u57fa\u672c\u6a5f\u80fd",level:2},{value:"constructor",id:"constructor",level:3},{value:"mint",id:"mint",level:3},{value:"burn",id:"burn",level:3},{value:"transfer",id:"transfer",level:3},{value:"balanceOf",id:"balanceof",level:3},{value:"IBC\u95a2\u9023",id:"ibc\u95a2\u9023",level:2},{value:"Packet",id:"packet",level:3},{value:"constructor\u6539\u4fee",id:"constructor\u6539\u4fee",level:3},{value:"sendTransfer",id:"sendtransfer",level:3},{value:"IModuleCallbacks",id:"imodulecallbacks",level:3},{value:"onRecvPacket",id:"onrecvpacket",level:4},{value:"onAcknowledgementPacket",id:"onacknowledgementpacket",level:4},{value:"\u3053\u3053\u3067\u53d6\u308a\u6271\u308f\u306a\u304b\u3063\u305f\u9805\u76ee",id:"\u3053\u3053\u3067\u53d6\u308a\u6271\u308f\u306a\u304b\u3063\u305f\u9805\u76ee",level:2},{value:"\u901a\u8ca8\u5358\u4f4d\u306e\u533a\u5225",id:"\u901a\u8ca8\u5358\u4f4d\u306e\u533a\u5225",level:3}],s={toc:u},d="wrapper";function p(n){let{components:e,...t}=n;return(0,r.kt)(d,(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract\u4f5c\u6210"},"Contract\u4f5c\u6210"),(0,r.kt)("p",null,"IBC\u3092\u7528\u3044\u30662\u53f0\u5e33\u9593\u3067\u8ee2\u9001\u3067\u304d\u308b\u30c8\u30fc\u30af\u30f3\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer"},"ICS-20"),"\n\u3068\u3044\u3046\u30c8\u30fc\u30af\u30f3\u8ee2\u9001\u898f\u683c\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"ICS-20\u3067\u306f\u30c8\u30fc\u30af\u30f3\u306e\u767a\u884c\u5143\u3092denomination\u3092\u7528\u3044\u3066\u533a\u5225\u3057\u307e\u3059\u304c\u3001\u4eca\u56de\u5b9f\u88c5\u3059\u308bMiniToken\u3067\u306f\u767a\u884c\u5143\u306e\u53f0\u5e33\u3092\u533a\u5225\u305b\u305a\u306b\u6271\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u6a5f\u80fd"},"\u57fa\u672c\u6a5f\u80fd"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u57fa\u672c\u7684\u306a\u64cd\u4f5c\u6a5f\u80fd\u3092\u5099\u3048\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mint"),": \u6307\u5b9a\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u30c8\u30fc\u30af\u30f3\u3092\u65b0\u898f\u767a\u884c\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"burn"),": \u81ea\u8eab\u306e\u30c8\u30fc\u30af\u30f3\u3092\u511f\u5374\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer"),": \u81ea\u8eab\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4ed6\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u8ee2\u9001\u3059\u308b")),(0,r.kt)("p",null,"\u307e\u305f\u3001\u72b6\u614b\u53c2\u7167\u6a5f\u80fd\u3092\u6301\u3061\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"balanceOf"),": \u3042\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c8\u30fc\u30af\u30f3\u6b8b\u9ad8\u3092\u53d6\u5f97\u3059\u308b")),(0,r.kt)("p",null,"\u72b6\u614b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u3092\u6301\u3061\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"balances"),": \u5404\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c8\u30fc\u30af\u30f3\u6b8b\u9ad8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner"),": mint\u306a\u3069\u306e\u7279\u6a29\u7684\u306a\u64cd\u4f5c\u304c\u8a31\u53ef\u3055\u308c\u308b\u30a2\u30ab\u30a6\u30f3\u30c8")),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u5358\u7d14\u306b\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u751f\u6210\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092owner\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="contracts/app/MiniToken.sol"',title:'"contracts/app/MiniToken.sol"'},"address private owner;\n\nconstructor() public {\n    owner = msg.sender;\n}\n")),(0,r.kt)("h3",{id:"mint"},"mint"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u3001\u6307\u5b9a\u91cf\u3060\u3051\u30c8\u30fc\u30af\u30f3\u3092\u5897\u52a0\u3057\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"_mint"),"\u306f\u3001\u5f8c\u3067\u30ed\u30b8\u30c3\u30af\u3092\u4ed6\u306e\u5185\u90e8\u51e6\u7406\u304b\u3089\u547c\u3073\u51fa\u3057\u305f\u3044\u306e\u3067\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'mapping(address => uint256) private _balances;\n\nfunction mint(address account, uint256 amount) onlyOwner external {\n    require(_mint(account, amount), "invalid address");\n}\n\nfunction _mint(address account, uint256 amount) internal returns (bool) {\n    if (account == address(0)) {\n        return false;\n    }\n    _balances[account] += amount;\n    return true;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onlyOwner"),"\u306a\u3069\u306emodifier\u5b9f\u88c5\u306e\u8aac\u660e\u306f\u53d6\u308a\u4e0a\u3052\u307e\u305b\u3093\u304c\u3001\u6c17\u306b\u306a\u308b\u65b9\u306f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"burn"},"burn"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u3001\u6307\u5b9a\u91cf\u3060\u3051\u30c8\u30fc\u30af\u30f3\u3092\u524a\u6e1b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function burn(address account, uint256 amount) onlyOwner external {\n    _burn(account, amount);\n}\n\nfunction _burn(address account, uint256 amount) internal returns (bool) {\n    uint256 accountBalance = _balances[account];\n    if (accountBalance < amount) {\n        return false;\n    }\n    _balances[account] = accountBalance - amount;\n    return true;\n}\n")),(0,r.kt)("h3",{id:"transfer"},"transfer"),(0,r.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u3092\u4ed6\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u9001\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'function transfer(address to, uint256 amount) external {\n    require(to != address(0), "Token: invalid address");\n    uint256 balance = _balances[msg.sender];\n    require(_balances[msg.sender] >= amount, "Token: amount shortage");\n    _balances[msg.sender] -= amount;\n    _balances[to] += amount;\n}\n')),(0,r.kt)("h3",{id:"balanceof"},"balanceOf"),(0,r.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6b8b\u9ad8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'function balanceOf(address account) external view returns (uint256) {\n    require(account != address(0), "Token: invalid address");\n    return _balances[account];\n}\n')),(0,r.kt)("h2",{id:"ibc\u95a2\u9023"},"IBC\u95a2\u9023"),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u57fa\u672c\u6a5f\u80fd\u3092\u5143\u306b\u3001IBC\u306b\u5fc5\u8981\u306a\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"packet"},"Packet"),(0,r.kt)("p",null,"\u53f0\u5e33\u9593\u306e\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7528\u3044\u308bIBC Packet\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Packet\u306b\u95a2\u3057\u3066\u8a73\u3057\u304f\u77e5\u308a\u305f\u3044\u65b9\u306f\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics"},"ICS 004"),"\n\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"MiniTokenPacketData\u306f\u3001MiniToken\u3092\u8ee2\u9001\u5143\u53f0\u5e33\u304b\u3089\u8ee2\u9001\u5148\u53f0\u5e33\u306b\u5bfe\u3057\u3066\u8ee2\u9001\u3059\u308b\u306e\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:'title="/proto/lib/Packet.proto"',title:'"/proto/lib/Packet.proto"'},"message MiniTokenPacketData {\n    // the token amount to be transferred\n    uint64 amount = 1;\n    // the sender address\n    bytes sender = 2;\n    // the recipient address on the destination chain\n    bytes receiver = 3;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"amount: \u9001\u91d1\u3059\u308b\u30c8\u30fc\u30af\u30f3\u91cf"),(0,r.kt)("li",{parentName:"ul"},"sender: \u8ee2\u9001\u5143\u53f0\u5e33\u4e0a\u306e\u9001\u91d1\u5143\u30a2\u30ab\u30a6\u30f3\u30c8"),(0,r.kt)("li",{parentName:"ul"},"receiver: \u8ee2\u9001\u5148\u53f0\u5e33\u4e0a\u306e\u9001\u91d1\u5148\u30a2\u30ab\u30a6\u30f3\u30c8")),(0,r.kt)("p",null,"Packet\u3092\u5b9a\u7fa9\u3057\u305f\u3089\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/solidity-protobuf"},"solidity-protobuf"),"\u3092\u7528\u3044\u3066sol\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305a\u3001solidity-protobuf\u3092\u53d6\u5f97\u3057\u3001\u5fc5\u8981\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/datachainlab/solidity-protobuf.git\ncd solidity-protobuf\npip install -r requirements.txt\n")),(0,r.kt)("p",null,"\u3053\u306e\u30d5\u30a9\u30eb\u30c0\u3092SOLPB_DIR\u74b0\u5883\u5909\u6570\u306b\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export SOLPB_DIR=<solidity-protobuf dir>\n")),(0,r.kt)("p",null,"\u7d9a\u3044\u3066\u3001\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5074\u3067\u3001sol\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd <tutorial dir>\nmake proto\n")),(0,r.kt)("h3",{id:"constructor\u6539\u4fee"},"constructor\u6539\u4fee"),(0,r.kt)("p",null,'yui-ibc-solidity\u306e\u5b9a\u7fa9\u3059\u308bIBC/TAO\u5c64\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3068\u3057\u3066\u3001\u4ee5\u4e0b\u3092MiniToken\u3078\u6307\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\n\u306a\u304a\u3001TAO\u5c64\u306f\u3001"transport, authentication, & ordering"\u3092\u8868\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b8\u30c3\u30af\u306b\u4f9d\u5b58\u3057\u306a\u3044IBC\u306e\u30b3\u30a2\u6a5f\u80fd\u3092\u6271\u3063\u3066\u3044\u307e\u3059\u3002'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IBCHandler"),(0,r.kt)("li",{parentName:"ul"},"IBCHost")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"IBCHandler ibcHandler;\nIBCHost ibcHost;\n\nconstructor(IBCHost host_, IBCHandler ibcHandler_) public {\n    owner = msg.sender;\n\n    ibcHost = host_;\n    ibcHandler = ibcHandler_;\n}\n")),(0,r.kt)("h3",{id:"sendtransfer"},"sendTransfer"),(0,r.kt)("p",null,"Token\u306b\u5bfe\u3057\u3066\u65b0\u305f\u306a\u64cd\u4f5c\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"sendTransfer"),"\u306f\u3001\u5148\u7a0b\u5b9a\u7fa9\u3057\u305fMiniTokenPacketData\u3092\u7528\u3044\u3066\u3001\u76f8\u624b\u306e\u53f0\u5e33\u306b\u30c8\u30fc\u30af\u30f3\u3092\u9001\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function sendTransfer(\n    string calldata denom,\n    uint64 amount,\n    address receiver,\n    string calldata sourcePort,\n    string calldata sourceChannel,\n    uint64 timeoutHeight\n) external {\n    require(_burn(msg.sender, amount));\n\n    _sendPacket(\n        MiniTokenPacketData.Data({\n            amount: amount,\n            sender: abi.encodePacked(msg.sender),\n            receiver: abi.encodePacked(receiver)\n        }),\n        sourcePort,\n        sourceChannel,\n        timeoutHeight\n    );\n}\n")),(0,r.kt)("p",null,"\u7d9a\u3044\u3066\u3001Packet\u767b\u9332\u51e6\u7406",(0,r.kt)("inlineCode",{parentName:"p"},"_sendPacket"),"\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"IBCHandler.sendPacket"),"\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u9001\u4fe1\u3059\u3079\u304dPacket\u304c\u767b\u9332\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// These two variables can be passed when initializing Token contract.\n//IBCHandler ibcHandler;\n//IBCHost ibcHost;\n\nfunction _sendPacket(MiniTokenPacketData.Data memory data, string memory sourcePort, string memory sourceChannel, uint64 timeoutHeight) virtual internal {\n    (Channel.Data memory channel, bool found) = ibcHost.getChannel(sourcePort, sourceChannel);\n    require(found, "channel not found");\n    ibcHandler.sendPacket(Packet.Data({\n        sequence: ibcHost.getNextSequenceSend(sourcePort, sourceChannel),\n        source_port: sourcePort,\n        source_channel: sourceChannel,\n        destination_port: channel.counterparty.port_id,\n        destination_channel: channel.counterparty.channel_id,\n        data: MiniTokenPacketData.encode(data),\n        timeout_height: Height.Data({revision_number: 0, revision_height: timeoutHeight}),\n        timeout_timestamp: 0\n    }));\n}\n')),(0,r.kt)("h3",{id:"imodulecallbacks"},"IModuleCallbacks"),(0,r.kt)("p",null,"IBC Module\u3067\u306eChannel\u30cf\u30f3\u30c9\u30b7\u30a7\u30a4\u30af\u3084Packet\u3092\u53d7\u4fe1\u3057\u305f\u969b\u306a\u3069\u306b\u3001MiniToken\u3078\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3057\u3066\u3082\u3089\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nyui-ibc-solidity\u3067\u5b9a\u7fa9\u3055\u308c\u308b\u4ee5\u4e0b\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"interface IModuleCallbacks {\n    function onChanOpenInit(Channel.Order, string[] calldata connectionHops, string calldata portId, string calldata channelId, ChannelCounterparty.Data calldata counterparty, string calldata version) external;\n    function onChanOpenTry(Channel.Order, string[] calldata connectionHops, string calldata portId, string calldata channelId, ChannelCounterparty.Data calldata counterparty, string calldata version, string calldata counterpartyVersion) external;\n    function onChanOpenAck(string calldata portId, string calldata channelId, string calldata counterpartyVersion) external;\n    function onChanOpenConfirm(string calldata portId, string calldata channelId) external;\n    function onChanCloseInit(string calldata portId, string calldata channelId) external;\n    function onChanCloseConfirm(string calldata portId, string calldata channelId) external;\n\n    function onRecvPacket(Packet.Data calldata) external returns(bytes memory);\n    function onAcknowledgementPacket(Packet.Data calldata, bytes calldata acknowledgement) external;\n}\n")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u3046\u3061\u3001\u30c8\u30fc\u30af\u30f3\u306b\u95a2\u308f\u308b\u51e6\u7406\u306f\u4e3b\u306b\u4ee5\u4e0b\u3067\u6271\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"onRecvPacket"),(0,r.kt)("li",{parentName:"ul"},"onAcknowledgementPacket")),(0,r.kt)("p",null,"\u53f0\u5e33\u9593\u306eChannel\u78ba\u7acb\u306e\u969b\u306b\u5b9f\u65bd\u3057\u305f\u3044\u51e6\u7406\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u4eca\u56de\u306e\u30b1\u30fc\u30b9\u3067\u306f\u7279\u306b\u8003\u616e\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"onChanOpenInit"),(0,r.kt)("li",{parentName:"ul"},"onChanOpenTry"),(0,r.kt)("li",{parentName:"ul"},"onChanOpenAck"),(0,r.kt)("li",{parentName:"ul"},"onChanOpenConfirm"),(0,r.kt)("li",{parentName:"ul"},"onChanCloseInit"),(0,r.kt)("li",{parentName:"ul"},"onChanCloseConfirm")),(0,r.kt)("p",null,"IBC\u306b\u304a\u3051\u308bChannel\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u77e5\u308a\u305f\u3044\u65b9\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/blob/ad99cb444ece8becae59f995b3371dc1ffc3ec5b/spec/core/ics-004-channel-and-packet-semantics/README.md#channel-lifecycle-management"},"https://github.com/cosmos/ibc/blob/ad99cb444ece8becae59f995b3371dc1ffc3ec5b/spec/core/ics-004-channel-and-packet-semantics/README.md#channel-lifecycle-management")),(0,r.kt)("h4",{id:"onrecvpacket"},"onRecvPacket"),(0,r.kt)("p",null,"Packet\u306e\u5185\u5bb9\u306b\u5408\u308f\u305b\u3066\u3001\u6307\u5b9a\u3055\u308c\u305f\u9001\u91d1\u5148\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u30c8\u30fc\u30af\u30f3\u3092\u65b0\u898f\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u8ee2\u9001\u5148\u53f0\u5e33\u4e0a\u3067MiniTokenPacketData\u3092\u53d7\u4fe1\u3059\u308b\u3068\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u51e6\u7406\u306e\u6210\u5426\u3092Acknowledgement\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function onRecvPacket(Packet.Data calldata packet) onlyIBC external virtual override returns (bytes memory acknowledgement) {\n    MiniTokenPacketData.Data memory data = MiniTokenPacketData.decode(packet.data);\n    return _newAcknowledgement(\n        _mint(data.receiver.toAddress(), data.amount)\n    );\n}\n")),(0,r.kt)("h4",{id:"onacknowledgementpacket"},"onAcknowledgementPacket"),(0,r.kt)("p",null,"\u8ee2\u9001\u5148\u3067\u51e6\u7406\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u306b\u306f\u3001\u9001\u91d1\u5143\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u30c8\u30fc\u30af\u30f3\u3092\u511f\u9084\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u8ee2\u9001\u5143\u53f0\u5e33\u4e0a\u3067\u3001Acknowledgement\u3092\u53d7\u4fe1\u3059\u308b\u3068\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function onAcknowledgementPacket(Packet.Data calldata packet, bytes calldata acknowledgement) onlyIBC external virtual override {\n    if (!_isSuccessAcknowledgement(acknowledgement)) {\n        _refundTokens(MiniTokenPacketData.decode(packet.data));\n    }\n}\n")),(0,r.kt)("h2",{id:"\u3053\u3053\u3067\u53d6\u308a\u6271\u308f\u306a\u304b\u3063\u305f\u9805\u76ee"},"\u3053\u3053\u3067\u53d6\u308a\u6271\u308f\u306a\u304b\u3063\u305f\u9805\u76ee"),(0,r.kt)("p",null,"\u4eca\u56de\u5b9f\u88c5\u3057\u305f\u30c8\u30fc\u30af\u30f3\u306fICS-20\u3068\u306f\u7570\u306a\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306f\u305d\u306e\u9055\u3044\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5c1a\u3001ICS-20\u306e\u5b9f\u88c5\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/yui-ibc-solidity/tree/main/contracts/apps"},"https://github.com/hyperledger-labs/yui-ibc-solidity/tree/main/contracts/apps")),(0,r.kt)("h3",{id:"\u901a\u8ca8\u5358\u4f4d\u306e\u533a\u5225"},"\u901a\u8ca8\u5358\u4f4d\u306e\u533a\u5225"),(0,r.kt)("p",null,"ICS-20\u3067\u306f\u901a\u8ca8\u5358\u4f4d\uff08denomination\u307e\u305f\u306fdenom\uff09\u3092\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ics20Port}/{ics20Channel}/{denom}"),"\u3068\u3057\u3066\u8868\u73fe\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u901a\u8ca8\u5358\u4f4d\u3092\u7528\u3044\u3066\u3001ICS-20\u30c8\u30fc\u30af\u30f3\u3092\u5143\u306e\u30c1\u30a7\u30fc\u30f3\u307e\u3067\u9061\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/docs/apps/transfer/overview.md#denomination-trace"},"https://github.com/cosmos/ibc-go/blob/main/docs/apps/transfer/overview.md#denomination-trace")))}p.isMDXComponent=!0}}]);