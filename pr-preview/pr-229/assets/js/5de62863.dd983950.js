"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=n,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={description:"Benefits of emnify's multicloud Data Streamer and how to get started",last_update:{date:"12-31-2022"},pagination_label:"Data Streamer",slug:"/multicloud-data-streamer"},o="emnify multicloud Data Streamer",s={unversionedId:"services/platform/data-streamer/index",id:"services/platform/data-streamer/index",title:"emnify multicloud Data Streamer",description:"Benefits of emnify's multicloud Data Streamer and how to get started",source:"@site/docs/services/platform/data-streamer/index.md",sourceDirName:"services/platform/data-streamer",slug:"/multicloud-data-streamer",permalink:"/pr-preview/pr-229/multicloud-data-streamer",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/data-streamer/index.md",tags:[],version:"current",lastUpdatedAt:1672444800,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{description:"Benefits of emnify's multicloud Data Streamer and how to get started",last_update:{date:"12-31-2022"},pagination_label:"Data Streamer",slug:"/multicloud-data-streamer"},sidebar:"mainDocsSidebar",previous:{title:"Integrations",permalink:"/pr-preview/pr-229/integration-guides"},next:{title:"Connection types",permalink:"/pr-preview/pr-229/multicloud-data-streamer/connection-types"}},l={},c=[{value:"Benefits",id:"benefits",level:2},{value:"Use the Data Streamer",id:"use-the-data-streamer",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emnify-multicloud-data-streamer"},"emnify multicloud Data Streamer"),(0,n.kt)("p",null,"Before a device can send data to an application, it must communicate with the mobile network to ensure that it can send the data over that network.\nThis communication happens through signaling events, which are usually hidden from the application."),(0,n.kt)("p",null,"With the emnify Data Streamer, this connectivity metadata is made available to your cloud platform or self-developed software stacks in near real time.\nUsing one of the many integrations provides you with complete network transparency to triage and resolve issues quickly and build your application or business logic based on the provided information."),(0,n.kt)("p",null,"These integrations also provide insights for IoT remote monitoring and anomaly detection or detailed information about service usage (that is, data and SMS) and cost per device.\nYou can also configure data streams to reflect events generated by the emnify system when your users perform billing-related updates, order SIMs, or perform other operations."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connectivity metadata integrated into operational dashboards for service teams"),(0,n.kt)("li",{parentName:"ul"},"Faster triaging between the device, connectivity, and application issues"),(0,n.kt)("li",{parentName:"ul"},"Insights about network attach, data, and roaming issues or when a device is over the service limit"),(0,n.kt)("li",{parentName:"ul"},"Overview of service usage and cost per device")),(0,n.kt)("h2",{id:"use-the-data-streamer"},"Use the Data Streamer"),(0,n.kt)("p",null,"There are two main ways to manage data streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/usage#data-streamer-in-the-portal"},"emnify Portal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/usage#data-streamer-api"},"emnify REST API")," ")),(0,n.kt)("p",null,"More information on these systems and how they compare is available on the ",(0,n.kt)("a",{parentName:"p",href:"/multicloud-data-streamer/usage"},"Using the Data Streamer")," page."))}m.isMDXComponent=!0}}]);