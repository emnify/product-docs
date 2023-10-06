"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a={description:"Define the device to be used with the SIM",last_update:{date:"08-24-2023"},slug:"/quickstart/create-device"},c="Create a device",o={unversionedId:"quickstart/create-device",id:"quickstart/create-device",title:"Create a device",description:"Define the device to be used with the SIM",source:"@site/docs/quickstart/create-device.md",sourceDirName:"quickstart",slug:"/quickstart/create-device",permalink:"/quickstart/create-device",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/create-device.md",tags:[],version:"current",lastUpdatedAt:1692835200,formattedLastUpdatedAt:"Aug 24, 2023",frontMatter:{description:"Define the device to be used with the SIM",last_update:{date:"08-24-2023"},slug:"/quickstart/create-device"},sidebar:"mainDocsSidebar",previous:{title:"Register emnify SIMs",permalink:"/quickstart/register-sims"},next:{title:"Get a device online",permalink:"/apn-configuration"}},s={},d=[{value:"Create devices with the emnify REST API",id:"create-devices-with-the-emnify-rest-api",level:2},{value:"Insert the assigned SIM",id:"insert-the-assigned-sim",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-device"},"Create a device"),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"/quickstart/register-sims"},"registering SIMs"),", you need to create a virtual representation of the device associated with the SIM.\nTo create a device, give it a name and assign a service and coverage policy."),(0,i.kt)("p",null,"If you plan on using your device right away, select ",(0,i.kt)("strong",{parentName:"p"},"Activate"),".\nOtherwise, select ",(0,i.kt)("strong",{parentName:"p"},"Leave Disabled"),"."),(0,i.kt)("h2",{id:"create-devices-with-the-emnify-rest-api"},"Create devices with the emnify REST API"),(0,i.kt)("p",null,"You can create one device or multiple devices in bulk using the emnify REST API.\nFor step-by-step instructions, see ",(0,i.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/create-endpoints.html"},"Create Endpoints")," in the emnify System Documentation."),(0,i.kt)("h2",{id:"insert-the-assigned-sim"},"Insert the assigned SIM"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Skip this step if your device already has an embedded SIM.")),(0,i.kt)("p",null,"Before you can ",(0,i.kt)("a",{parentName:"p",href:"/apn-configuration"},"get your device online"),", insert the SIM that's ",(0,i.kt)("a",{parentName:"p",href:"/quickstart/register-sims"},"registered and assigned")," to the device and turn it on."))}u.isMDXComponent=!0}}]);