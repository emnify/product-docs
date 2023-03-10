"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,y=d["".concat(p,".").concat(f)]||d[f]||m[f]||o;return r?a.createElement(y,i(i({ref:t},l),{},{components:r})):a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={description:"Must-knows for working with the emnify SDKs"},i="Concepts",s={unversionedId:"sdks/concepts",id:"sdks/concepts",title:"Concepts",description:"Must-knows for working with the emnify SDKs",source:"@site/docs/sdks/concepts.md",sourceDirName:"sdks",slug:"/sdks/concepts",permalink:"/sdks/concepts",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/sdks/concepts.md",tags:[],version:"current",lastUpdatedAt:1678447251,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{description:"Must-knows for working with the emnify SDKs"},sidebar:"mainDocsSidebar",previous:{title:"Software Development Kits",permalink:"/sdks"},next:{title:"Python",permalink:"/sdks/python"}},p={},c=[{value:"SDK Glossary",id:"sdk-glossary",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"concepts"},"Concepts"),(0,n.kt)("h2",{id:"sdk-glossary"},"SDK Glossary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Device"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any physical device supplied with a SIM that obtains connectivity. It's important not to mix up the terms 'Device' and 'Endpoint.' A device is a superset of the endpoint and SIM acting as a whole. ",(0,n.kt)("a",{parentName:"td",href:"/devices"},"Learn more about devices"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Device Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Primary way to control connectivity. It can be either ",(0,n.kt)("strong",{parentName:"td"},"Enabled")," or ",(0,n.kt)("strong",{parentName:"td"},"Disabled"),". When ",(0,n.kt)("strong",{parentName:"td"},"Enabled"),", a device that has a SIM assigned can go online. On the other hand, when ",(0,n.kt)("strong",{parentName:"td"},"Disabled"),", the device doesn't get any service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SIM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Represents a physical or eSIM issued by emnify. ",(0,n.kt)("a",{parentName:"td",href:"https://support.emnify.com/hc/en-us/sections/360000642374-SIM-cards"},"Learn more about SIM cards"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SIM Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the SIM's phase in the ",(0,n.kt)("a",{parentName:"td",href:"/services/sim-lifecycle-management"},"SIM lifecycle"),". When using the SDK, avoid changing the SIM status directly. Instead, change it using the device status.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Tariff Profile"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Controls where and how your devices have coverage. Referred to as ",(0,n.kt)("a",{parentName:"td",href:"https://portal.emnify.com/device-policies"},(0,n.kt)("strong",{parentName:"a"},"Coverage Policy")," in the emnify Portal"),". ",(0,n.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/tariff-profile.html"},"Learn more about tariff profiles"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Service Profile"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines available services (e.g., SMS, 4G, etc.) and traffic limits for a device. Referred to as ",(0,n.kt)("a",{parentName:"td",href:"https://portal.emnify.com/device-policies"},(0,n.kt)("strong",{parentName:"a"},"Service Policy")," in the emnify Portal"),". ",(0,n.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/service-profile.html"},"Learn more about service profiles"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Blacklist Operators"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Method that allows you to restrict device connectivity to a specific operator or group of operators.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Operator"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Underlying mobile network operator (MNO) used to provide connectivity. Explore operator coverage by country and region on ",(0,n.kt)("a",{parentName:"td",href:"https://www.emnify.com/pricing"},"our pricing page"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SMS"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/services/sms"},"Learn more about SMS"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Application Token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Authenticates your identity when using the emnify SDK and API. ",(0,n.kt)("a",{parentName:"td",href:"/rest-api/authentication#authenticate-with-an-application-token"},"Learn how to generate an application token"),".")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More terminology and definitions are available in the ",(0,n.kt)("a",{parentName:"p",href:"/glossary"},"Developer Glossary"),". ")))}d.isMDXComponent=!0}}]);