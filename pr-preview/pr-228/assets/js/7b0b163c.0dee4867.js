"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=m(n),f=r,d=g["".concat(l,".").concat(f)]||g[f]||c[f]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(7462),r=(n(7294),n(3905));const a={pagination_next:"services/platform/data-streamer/index",last_update:{date:"02-15-2023"},sidebar_label:"Integrations",slug:"/integration-guides"},o="Integration guides",s={unversionedId:"services/platform/integration-guides/index",id:"services/platform/integration-guides/index",title:"Integration guides",description:"emnify services can be integrated with your existing infrastructure.",source:"@site/docs/services/platform/integration-guides/index.md",sourceDirName:"services/platform/integration-guides",slug:"/integration-guides",permalink:"/integration-guides",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/integration-guides/index.md",tags:[],version:"current",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{pagination_next:"services/platform/data-streamer/index",last_update:{date:"02-15-2023"},sidebar_label:"Integrations",slug:"/integration-guides"},sidebar:"mainDocsSidebar",previous:{title:"SMS",permalink:"/services/sms"},next:{title:"Data Streamer",permalink:"/multicloud-data-streamer"}},l={},m=[{value:"Amazon Web Services",id:"amazon-web-services",level:2},{value:"Microsoft Azure",id:"microsoft-azure",level:2},{value:"Google Cloud",id:"google-cloud",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"Other integrations",id:"other-integrations",level:2}],u={toc:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-guides"},"Integration guides"),(0,r.kt)("p",null,"emnify services can be integrated with your existing infrastructure.\nHere are some step-by-step integration guides to help you along the process."),(0,r.kt)("h2",{id:"amazon-web-services"},"Amazon Web Services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-and-aws-iot-core-integration"},"emnify and AWS IoT Core integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-kinesis"},"emnify Data Streamer integration into AWS Kinesis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-s3"},"emnify Data Streamer integration into AWS S3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway"},"emnify Cloud Connect integration with AWS Transit Gateway"))),(0,r.kt)("h2",{id:"microsoft-azure"},"Microsoft Azure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-azure-event-hub"},"emnify Data Streamer integration into Azure Event Hub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-and-azure-iot-hub-integration"},"emnify and Azure IoT Hub integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-azure-time-series-classic"},"emnify Data Streamer integration for Azure Time Series Classic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-cloud-connect-azure-integration"},"emnify Cloud Connect integration into Azure Virtual Network Gateway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-power-bi"},"emnify Data Streamer integration for Power BI"))),(0,r.kt)("h2",{id:"google-cloud"},"Google Cloud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/datastreamer-integration-google-bigquery"},"emnify DataStreamer integration for Google BigQuery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-and-google-cloud-iot-core-integration"},"emnify and Google Cloud IoT Core integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-cloudconnect-integration-to-google-cloud-platform"},"emnify Cloud Connect Integration to Google Cloud Platform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/datastreamer-integration-into-google-cloud-pubsub"},"emnify Data Streamer integration for Google Cloud Pub/Sub"))),(0,r.kt)("h2",{id:"webhooks"},"Webhooks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-mcds-integromat-integration"},"Automate Business Processes with Multi Cloud Data Streamer and Integromat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/how-to-receice-email-notifications-using-automate.io"},"How to receive email notifications using Automate.io"))),(0,r.kt)("h2",{id:"other-integrations"},"Other integrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-datadog"},"emnify Data Streamer integration for Datadog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/how-to-setup-an-ipsec-using-emnify-cloudconnect"},"How to setup an IPsec using emnify Cloud Connect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-keen-io"},"emnify Data Streamer integration for Keen.io"))))}g.isMDXComponent=!0}}]);