"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={description:"Benefits of the Data Streamer and how you can get started"},o="Getting started with the Data Streamer",s={unversionedId:"services/data-streamer/getting-started",id:"services/data-streamer/getting-started",title:"Getting started with the Data Streamer",description:"Benefits of the Data Streamer and how you can get started",source:"@site/docs/services/data-streamer/getting-started.md",sourceDirName:"services/data-streamer",slug:"/services/data-streamer/getting-started",permalink:"/services/data-streamer/getting-started",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/data-streamer/getting-started.md",tags:[],version:"current",lastUpdatedAt:1683023007,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{description:"Benefits of the Data Streamer and how you can get started"},sidebar:"mainDocsSidebar",previous:{title:"Data Streamer",permalink:"/services/data-streamer"},next:{title:"Connection types",permalink:"/services/data-streamer/connection-types"}},c={},l=[{value:"Benefits",id:"benefits",level:2},{value:"Using the Data Streamer",id:"using-the-data-streamer",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-the-data-streamer"},"Getting started with the Data Streamer"),(0,n.kt)("p",null,"Before a device can send data to an application, it must communicate with the mobile network to ensure that it can send the data over that network.\nThis communication happens through signaling events, which are usually hidden from the application."),(0,n.kt)("p",null,"With the emnify Data Streamer, this connectivity metadata is made available to your cloud platform or self-developed software stacks in near real time.\nUsing one of the many integrations provides you with complete network transparency to triage and resolve issues quickly and build your application or business logic based on the provided information."),(0,n.kt)("p",null,"These integrations also provide insights for IoT remote monitoring and anomaly detection or detailed information about service usage (i.e., data, SMS) and cost per device.\nYou can also configure data streams to reflect events generated by the emnify system when your users perform billing-related updates, order SIMs, or perform other operations."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connectivity metadata integrated into operational dashboards for service teams"),(0,n.kt)("li",{parentName:"ul"},"Faster triaging between the device, connectivity, and application issues"),(0,n.kt)("li",{parentName:"ul"},"Insights about network attach, data, and roaming issues or when a device is above the service limit"),(0,n.kt)("li",{parentName:"ul"},"Overview of service usage and cost per device")),(0,n.kt)("h2",{id:"using-the-data-streamer"},"Using the Data Streamer"),(0,n.kt)("p",null,"There are two main ways to manage data streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"usage#data-streamer-in-the-portal"},"emnify Portal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"usage#data-streamer-api"},"emnify REST API")," ")),(0,n.kt)("p",null,"More information on these systems and how they compare is available on the ",(0,n.kt)("a",{parentName:"p",href:"usage"},"Using the Data Streamer")," page."))}p.isMDXComponent=!0}}]);