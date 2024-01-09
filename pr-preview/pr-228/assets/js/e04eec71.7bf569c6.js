"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,u=d["".concat(p,".").concat(y)]||d[y]||c[y]||i;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Python SDK examples",description:"Code samples showing how to use the emnify python SDK",last_update:{date:"09-06-2023"},pagination_label:"Python SDK examples",sidebar_label:"Examples",slug:"/sdks/python/examples"},l="Examples",o={unversionedId:"sdks/python/examples",id:"sdks/python/examples",title:"Python SDK examples",description:"Code samples showing how to use the emnify python SDK",source:"@site/docs/sdks/python/examples.md",sourceDirName:"sdks/python",slug:"/sdks/python/examples",permalink:"/sdks/python/examples",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/sdks/python/examples.md",tags:[],version:"current",lastUpdatedAt:1693958400,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{title:"Python SDK examples",description:"Code samples showing how to use the emnify python SDK",last_update:{date:"09-06-2023"},pagination_label:"Python SDK examples",sidebar_label:"Examples",slug:"/sdks/python/examples"},sidebar:"mainDocsSidebar",previous:{title:"Python SDK quickstart",permalink:"/sdks/python/quickstart"},next:{title:"Java SDK Quickstart",permalink:"/sdks/java/quickstart"}},p={},s=[],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following examples show you how to use the emnify Python SDK."),(0,r.kt)("p",null,"The source code for each example is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emnify/emnify-sdk-python/tree/main/docs/examples"},"emnify-sdk-python GitHub repository"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/mass_sim_activation.py"},"Get your first device online")),(0,r.kt)("td",{parentName:"tr",align:null},"Connect an emnify SIM to your device and configure the APN to access the internet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py"},"Initialize the SDK client")),(0,r.kt)("td",{parentName:"tr",align:null},"Import dependencies and initialize the SDK using an application token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py"},"Create and activate a device")),(0,r.kt)("td",{parentName:"tr",align:null},"Assign an unassigned SIM, create a new device with defined parameters, and activate it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py"},"Configure a device")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve a device's details and adjust its attributes, like the name and tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py"},"Configure the operator blacklist")),(0,r.kt)("td",{parentName:"tr",align:null},"Add or remove operators from the blacklist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py"},"Disable a device")),(0,r.kt)("td",{parentName:"tr",align:null},"Change a device status to disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py"},"Delete a device")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable and delete a device with specific ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/filtering_and_sorting.py"},"Filter a list of SIM cards")),(0,r.kt)("td",{parentName:"tr",align:null},"Return all SIMs for a specific customer organization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/filtering_and_sorting.py"},"Sort all devices")),(0,r.kt)("td",{parentName:"tr",align:null},"Return a list of devices sorted by last updated date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py"},"Manage device connectivity")),(0,r.kt)("td",{parentName:"tr",align:null},"Reset the device or network connectivity and check the connectivity status.")))))}d.isMDXComponent=!0}}]);