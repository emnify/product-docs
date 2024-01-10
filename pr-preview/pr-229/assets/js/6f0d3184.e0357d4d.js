"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={description:"Setup no-code workflows via Zapier, SMS, as well as event or application triggers in the emnify Portal",last_update:{date:"01-31-2023"},slug:"/portal/no-code"},i="No-code workflows",l={unversionedId:"portal/integrations/no-code",id:"portal/integrations/no-code",title:"No-code workflows",description:"Setup no-code workflows via Zapier, SMS, as well as event or application triggers in the emnify Portal",source:"@site/docs/portal/integrations/no-code.md",sourceDirName:"portal/integrations",slug:"/portal/no-code",permalink:"/pr-preview/pr-229/portal/no-code",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/integrations/no-code.md",tags:[],version:"current",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Setup no-code workflows via Zapier, SMS, as well as event or application triggers in the emnify Portal",last_update:{date:"01-31-2023"},slug:"/portal/no-code"},sidebar:"mainDocsSidebar",previous:{title:"SMS",permalink:"/pr-preview/pr-229/portal/sms"},next:{title:"Application tokens",permalink:"/pr-preview/pr-229/portal/application-tokens"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-code-workflows"},"No-code workflows"),(0,o.kt)("p",null,"Zapier is a service that allows you to connect more than 4000 applications\u2014including emnify\u2014to automate workflows."),(0,o.kt)("p",null,"With the available integrations, you can automate device provisioning between emnify and your application.\nFor example, you can send a configuration SMS to set the proper APN when the device connects for the first time.\nOther use cases are scheduled or application-triggered SIM activations/deactivations so that the SIM contract starts and ends with the device subscription of your customers."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To learn more, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.emnify.com/developer-blog/emnify-zapier-nocode"},"How to automate workflows with Zapier and emnify in 5 minutes"),".")),(0,o.kt)("p",null,"The following events are available as triggers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All events in the Data Streamer"),(0,o.kt)("li",{parentName:"ul"},"Device enabled (SIM activated)"),(0,o.kt)("li",{parentName:"ul"},"Device disabled (SIM deactivated)"),(0,o.kt)("li",{parentName:"ul"},"Usage Limit Reached")),(0,o.kt)("p",null,"The following actions are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Send SMS to device"),(0,o.kt)("li",{parentName:"ul"},"Create a device (SIM configuration)"),(0,o.kt)("li",{parentName:"ul"},"Enable a device (SIM activation)"),(0,o.kt)("li",{parentName:"ul"},"Block current network (add the last tried network to the blocklist)"),(0,o.kt)("li",{parentName:"ul"},"Reconfigure a device"),(0,o.kt)("li",{parentName:"ul"},"Disable a device")),(0,o.kt)("p",null,"Using the Zapier webhook, you can also use triggers from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SMS delivered notification"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/glossary#sms-mo"},"Mobile originated SMS (SMS MO)"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Browse the available workflows in the emnify Portal by navigating to the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#no-code-workflows"},(0,o.kt)("strong",{parentName:"a"},"No-Code Workflows"))," section of the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," page.")))}u.isMDXComponent=!0}}]);