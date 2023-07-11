"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3014],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3813:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={description:"Distributed data plane, traditional operators vs emnify, regional breakout",slug:"/services/iot-cloud-communication-platform"},i="IoT cloud communication platform",l={unversionedId:"services/network/iot-cloud-communication-platform",id:"services/network/iot-cloud-communication-platform",title:"IoT cloud communication platform",description:"Distributed data plane, traditional operators vs emnify, regional breakout",source:"@site/docs/services/network/iot-cloud-communication-platform.md",sourceDirName:"services/network",slug:"/services/iot-cloud-communication-platform",permalink:"/services/iot-cloud-communication-platform",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/network/iot-cloud-communication-platform.md",tags:[],version:"current",lastUpdatedAt:1689068344,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{description:"Distributed data plane, traditional operators vs emnify, regional breakout",slug:"/services/iot-cloud-communication-platform"},sidebar:"mainDocsSidebar",previous:{title:"Global IoT Network",permalink:"/services/global-iot-network"},next:{title:"Cloud Connect",permalink:"/services/cloud-connect"}},c={},s=[{value:"Distributed data plane",id:"distributed-data-plane",level:2},{value:"Traditional operators vs emnify",id:"traditional-operators-vs-emnify",level:2},{value:"Regional breakout",id:"regional-breakout",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iot-cloud-communication-platform"},"IoT cloud communication platform"),(0,n.kt)("p",null,"emnify\u2019s platform (consisting of a mobile core network and a communication platform dedicated for IoT) has been built up cloud-natively.\nBeing deployed in 3 AWS cloud regions within 2-3 availability zones / data centers per region increases the availability of the solution - even when one cloud data center becomes unavailable, data will still be transported over the emnify network."),(0,n.kt)("h2",{id:"distributed-data-plane"},"Distributed data plane"),(0,n.kt)("p",null,"Traditional connectivity providers have a centrally located network core.\nAll data is backhauled to the home country of the operator which means that customer data travels across the globe and distributed latency optimized application infrastructure is not possible."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Traditional operators",src:o(9112).Z,width:"2245",height:"1587"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"emnify",src:o(3730).Z,width:"2245",height:"1587"})),(0,n.kt)("h2",{id:"traditional-operators-vs-emnify"},"Traditional operators vs emnify"),(0,n.kt)("p",null,"The data plane of emnify\u2019s cloud communication platform is distributed across major cloud regions (Virginia/US, Ireland/Europe, Singapore/APAC) and directly connected to central peering points with the local operators."),(0,n.kt)("h2",{id:"regional-breakout"},"Regional breakout"),(0,n.kt)("p",null,"emnify\u2019s distributed data plane enables device data to breakout locally, keeping the customer data within the same region.\nMoreover, it also helps reduce network latency.\nYou can either select a specific breakout region or the network automatically selects the breakout region closest to the device.\nThis can be done on the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," \u2192 ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/device-policies"},(0,n.kt)("strong",{parentName:"a"},"Device Policies"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"New service policy")," which is applicable to a group of devices."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Breakout regions",src:o(7419).Z,width:"1334",height:"616"})))}d.isMDXComponent=!0},3730:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/emnify-distributed-plane-2850f2711bf3762786e8c2b4c93c51b4.png"},7419:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/portal-device-policies-breakout-regions-77028904f1c2480013b7b7d0171421b9.png"},9112:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/traditional-operators-e473c6063c74110afa321933627f281e.png"}}]);