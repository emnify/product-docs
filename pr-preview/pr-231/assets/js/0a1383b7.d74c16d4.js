"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={last_update:{date:"01-03-2024"},slug:"/services/factory-test-mode"},i="Factory test mode",s={unversionedId:"services/connectivity/factory-test-mode",id:"services/connectivity/factory-test-mode",title:"Factory test mode",description:"The factory test mode (FTM) feature allows you to test SIM cards before deploying to a production environment.",source:"@site/docs/services/connectivity/factory-test-mode.md",sourceDirName:"services/connectivity",slug:"/services/factory-test-mode",permalink:"/pr-preview/pr-231/services/factory-test-mode",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/connectivity/factory-test-mode.md",tags:[],version:"current",lastUpdatedAt:170424e4,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{last_update:{date:"01-03-2024"},slug:"/services/factory-test-mode"},sidebar:"mainDocsSidebar",previous:{title:"SIM lifecycle management",permalink:"/pr-preview/pr-231/services/sim-lifecycle-management"},next:{title:"SMS",permalink:"/pr-preview/pr-231/services/sms"}},c={},l=[{value:"Deploy devices from FTM",id:"deploy-devices-from-ftm",level:2},{value:"Available networks",id:"available-networks",level:2},{value:"Limits",id:"limits",level:2},{value:"Activate FTM in the emnify Portal",id:"activate-ftm-in-the-emnify-portal",level:2},{value:"Patch a SIM to Factory Test with the emnify REST API",id:"patch-a-sim-to-factory-test-with-the-emnify-rest-api",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"factory-test-mode"},"Factory test mode"),(0,n.kt)("p",null,"The factory test mode (FTM) feature allows you to test SIM cards before deploying to a production environment.\nYou can use SIMs in FTM up to defined data and SMS thresholds without incurring charges."),(0,n.kt)("p",null,"In this state, you won't be charged the monthly SIM hosting fees, and the data consumed won't affect the pooled allowance."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"By default, FTM is only available for customers with the ",(0,n.kt)("strong",{parentName:"p"},"Plus Package")," or ",(0,n.kt)("strong",{parentName:"p"},"Pro Package"),".\nIf you're on a different package but interested in FTM, contact ",(0,n.kt)("a",{parentName:"p",href:"/support"},"emnify support"),".")),(0,n.kt)("h2",{id:"deploy-devices-from-ftm"},"Deploy devices from FTM"),(0,n.kt)("p",null,"A popular use case for FTM is automating deployments.\nYou can store devices with the assigned SIMs in FTM free of charge.\nThen, the SIM is automatically activated once your customers use the quotas. There's no additional configuration required."),(0,n.kt)("h2",{id:"available-networks"},"Available networks"),(0,n.kt)("p",null,"You can use FTM for networks in the assigned coverage policy.\nPlease be sure that the networks where you are planning to use this feature are part of an activated coverage area."),(0,n.kt)("h2",{id:"limits"},"Limits"),(0,n.kt)("p",null,"The default thresholds for SIMs in FTM are 100 KB of data and 10 SMS (either in its totality or a combination of SMS MT or MO).\nThese limits can be customized per organization.\nOnce either threshold is crossed, the SIM automatically moves to the ",(0,n.kt)("strong",{parentName:"p"},"Activated")," state and accrues charges."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The tenth SMS executes the SIM activation.")),(0,n.kt)("p",null,"SIMs in FTM are also activated in any of the following scenarios to ensure reliability and coverage:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SIM cards that never reached any threshold but are in FTM longer than the designated test period.\nThe default test period for organizations created after July 23, 2023, is 180 days."),(0,n.kt)("li",{parentName:"ul"},"If the device's status is altered while the SIM is in ",(0,n.kt)("strong",{parentName:"li"},"Factory test"),"."),(0,n.kt)("li",{parentName:"ul"},"Running a reset connectivity."),(0,n.kt)("li",{parentName:"ul"},"Cancelling or switching to a different package that doesn't support FTM.")),(0,n.kt)("h2",{id:"activate-ftm-in-the-emnify-portal"},"Activate FTM in the emnify Portal"),(0,n.kt)("p",null,"You can enable FTM while registering SIMs in the emnify Portal."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the steps to ",(0,n.kt)("a",{parentName:"li",href:"/quickstart/register-sims#register-sims-in-the-emnify-portal"},"register a new SIM or SIM batch"),"."),(0,n.kt)("li",{parentName:"ol"},"After your SIM is registered, select ",(0,n.kt)("strong",{parentName:"li"},"Create device"),"."),(0,n.kt)("li",{parentName:"ol"},"In ",(0,n.kt)("strong",{parentName:"li"},"Create a new device"),", fill in your device details.\nUnder ",(0,n.kt)("strong",{parentName:"li"},"Select Device Mode"),", choose ",(0,n.kt)("strong",{parentName:"li"},"Factory Test"),"."),(0,n.kt)("li",{parentName:"ol"},"Review, then click ",(0,n.kt)("strong",{parentName:"li"},"Create device"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/apn-configuration"},"Configure the APN"),", then click ",(0,n.kt)("strong",{parentName:"li"},"APN is set up"),".")),(0,n.kt)("p",null,"Once created, your device should be ready to go online if configured with the correct APN, and data roaming is enabled."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can follow the same steps while registering a SIM batch.")),(0,n.kt)("h2",{id:"patch-a-sim-to-factory-test-with-the-emnify-rest-api"},"Patch a SIM to Factory Test with the emnify REST API"),(0,n.kt)("p",null,"For more information about patching SIM cards via the REST API, see ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/factory-test-mode.html"},"Factory Test Mode on the emnify System Documentation"),"."))}d.isMDXComponent=!0}}]);