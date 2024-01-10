"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={description:"Configure SIM-equipped devices with an Access Point Name (APN) via the emnify Portal",last_update:{date:"08-24-2023"},slug:"/apn-configuration"},o="Get a device online",c={unversionedId:"quickstart/apn-configuration/index",id:"quickstart/apn-configuration/index",title:"Get a device online",description:"Configure SIM-equipped devices with an Access Point Name (APN) via the emnify Portal",source:"@site/docs/quickstart/apn-configuration/index.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration",permalink:"/pr-preview/pr-230/apn-configuration",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/apn-configuration/index.md",tags:[],version:"current",lastUpdatedAt:1692835200,formattedLastUpdatedAt:"Aug 24, 2023",frontMatter:{description:"Configure SIM-equipped devices with an Access Point Name (APN) via the emnify Portal",last_update:{date:"08-24-2023"},slug:"/apn-configuration"},sidebar:"mainDocsSidebar",previous:{title:"Create a device",permalink:"/pr-preview/pr-230/quickstart/create-device"},next:{title:"Android",permalink:"/pr-preview/pr-230/apn-configuration/android"}},p={},l=[{value:"Configure the APN",id:"configure-the-apn",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-a-device-online"},"Get a device online"),(0,a.kt)("p",null,"To establish network connectivity, turn on your device.\nThen, you need to make two important configuration changes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#configure-the-apn"},"Configure the APN")," so the device can connect to the emnify network."),(0,a.kt)("li",{parentName:"ol"},"Enable roaming.")),(0,a.kt)("p",null,"After that, the device registers to a network (no PIN code entry needed).\nOnce it has registered, your device's ",(0,a.kt)("a",{parentName:"p",href:"/glossary#connectivity-status"},(0,a.kt)("strong",{parentName:"a"},"Connection"))," changes to ",(0,a.kt)("strong",{parentName:"p"},"Attached"),".\nSMS services are now available."),(0,a.kt)("p",null,"When your device has established a data session, the ",(0,a.kt)("strong",{parentName:"p"},"Connection")," changes to ",(0,a.kt)("strong",{parentName:"p"},"Online"),".\nThis means it's ready to send or receive data traffic."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Verify a device's connectivity status in the emnify Portal under ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/connected-devices"},(0,a.kt)("strong",{parentName:"a"},"Connected Devices")),".")),(0,a.kt)("h2",{id:"configure-the-apn"},"Configure the APN"),(0,a.kt)("p",null,"Any device equipped with a SIM card requires an ",(0,a.kt)("a",{parentName:"p",href:"/glossary#apn"},"Access Point Name (APN)")," configuration to establish a data session.\nSome devices and networks auto-detect the APN but for most cases you need to configure it."),(0,a.kt)("p",null,"APN: ",(0,a.kt)("inlineCode",{parentName:"p"},"em")," (or alternatively use ",(0,a.kt)("inlineCode",{parentName:"p"},"emnify"),")"),(0,a.kt)("p",null,"Further, some Android or iOS-based devices and cellular modules also need to be configured to allow for roaming."),(0,a.kt)("p",null,"Select your device type and model to see how to configure the APN:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/apn-configuration/android"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/apn-configuration/ios"},"iOS devices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/apn-configuration/cellular-modules"},"Cellular modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/apn-configuration/gps-trackers"},"GPS trackers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/apn-configuration/industrial-routers"},"Industrial routers"))))}u.isMDXComponent=!0}}]);