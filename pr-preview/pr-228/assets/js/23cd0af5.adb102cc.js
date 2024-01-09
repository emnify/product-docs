"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={description:"Integrate real-time data streams of your devices and SIMs with the emnify multicloud Data Streamer",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/connection-types"},i="Connection types",l={unversionedId:"services/platform/data-streamer/connection-types",id:"services/platform/data-streamer/connection-types",title:"Connection types",description:"Integrate real-time data streams of your devices and SIMs with the emnify multicloud Data Streamer",source:"@site/docs/services/platform/data-streamer/connection-types.md",sourceDirName:"services/platform/data-streamer",slug:"/multicloud-data-streamer/connection-types",permalink:"/multicloud-data-streamer/connection-types",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/data-streamer/connection-types.md",tags:[],version:"current",lastUpdatedAt:1672444800,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{description:"Integrate real-time data streams of your devices and SIMs with the emnify multicloud Data Streamer",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/connection-types"},sidebar:"mainDocsSidebar",previous:{title:"Data Streamer",permalink:"/multicloud-data-streamer"},next:{title:"Stream types",permalink:"/multicloud-data-streamer/stream-types"}},s={},c=[{value:"Available Data Streamer integrations",id:"available-data-streamer-integrations",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"connection-types"},"Connection types"),(0,n.kt)("p",null,"The emnify Data Streamer allows you to integrate real-time connectivity data streams of your devices and SIMs into your third-party cloud services and/or business systems."),(0,n.kt)("p",null,"Using this data, you can build operational dashboards that visualize device, network, and application information side-by-side."),(0,n.kt)("h2",{id:"available-data-streamer-integrations"},"Available Data Streamer integrations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/integrations#amazon"},"Amazon")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/integrations#azure"},"Azure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/integrations#google-cloud"},"Google Cloud")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/integrations#keen"},"Keen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/integrations#datadog"},"Datadog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/integrations#webhook"},"Webhook")," (generic RESTful API)")),(0,n.kt)("p",null,"You can use any integration to create multiple independent data streams and operate them in parallel.\nEach data stream can be configured to push data to a separate platform for consumption and processing."),(0,n.kt)("p",null,"For example, one stream may be connected to a network monitoring system, another can connect to a data analytics platform, and a third can simultaneously sync with S3 for archiving."))}u.isMDXComponent=!0}}]);