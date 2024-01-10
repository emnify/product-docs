"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={description:"Configure the type of content delivered by the data stream",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/stream-types"},i="Stream types",s={unversionedId:"services/platform/data-streamer/stream-types",id:"services/platform/data-streamer/stream-types",title:"Stream types",description:"Configure the type of content delivered by the data stream",source:"@site/docs/services/platform/data-streamer/stream-types.md",sourceDirName:"services/platform/data-streamer",slug:"/multicloud-data-streamer/stream-types",permalink:"/pr-preview/pr-230/multicloud-data-streamer/stream-types",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/data-streamer/stream-types.md",tags:[],version:"current",lastUpdatedAt:1672444800,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{description:"Configure the type of content delivered by the data stream",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/stream-types"},sidebar:"mainDocsSidebar",previous:{title:"Connection types",permalink:"/pr-preview/pr-230/multicloud-data-streamer/connection-types"},next:{title:"Manage data streams",permalink:"/pr-preview/pr-230/multicloud-data-streamer/manage-data-streams"}},l={},m=[{value:"Event data",id:"event-data",level:2},{value:"Usage data",id:"usage-data",level:2},{value:"Traffic types",id:"traffic-types",level:3},{value:"Data",id:"data",level:4},{value:"SMS",id:"sms",level:4}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stream-types"},"Stream types"),(0,r.kt)("p",null,"Through stream types, you can configure the type of content delivered by the data stream.\nYou may choose between receiving ",(0,r.kt)("em",{parentName:"p"},"event data")," or ",(0,r.kt)("em",{parentName:"p"},"usage data"),"."),(0,r.kt)("p",null,"Streaming event and usage data within one stream is possible but not advised, as these data records don't share a common schema definition."),(0,r.kt)("h2",{id:"event-data"},"Event data"),(0,r.kt)("p",null,"The emnify system generates several types of events.\nThese events allow you to track notable system occurrences based on behavior."),(0,r.kt)("p",null,"Some common use cases for events on emnify include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Triggers for custom business processes")," (for example, authentication or custom usage limitations configured on the ",(0,r.kt)("a",{parentName:"li",href:"/multicloud-data-streamer/usage#data-streamer-in-the-portal"},"emnify Portal"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Monitoring")," (for example, SIM or data connection lifecycles)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input for custom billing systems")," (that is, updating billing configuration, processing invoices, etc.)")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Learn more about the available event types and how to use them in the ",(0,r.kt)("a",{parentName:"p",href:"/system-events"},"Event documentation"),".")),(0,r.kt)("h2",{id:"usage-data"},"Usage data"),(0,r.kt)("p",null,"Usage data records get generated when devices consume data or SMS services.\nThese records provide information about the SIM, used service, visited network, volumes, and cost."),(0,r.kt)("p",null,"Usage data streams are often used for monitoring and analyzing data consumption and as input for custom billing systems."),(0,r.kt)("p",null,"Each usage data record contains information about the:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Device")," (organization, SIM, IMSI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Time")," (start and end time)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Price applied for rating")," (data plan, coverage policy, coverage area)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mobile network operator used for the service")," (operator, country)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type of service")," (SMS or data)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Consumed service volumes")," (down- and upstream, total volume)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs")," (amount, currency)")),(0,r.kt)("h3",{id:"traffic-types"},"Traffic types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#data"},"Data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sms"},"SMS"))))),(0,r.kt)("h4",{id:"data"},"Data"),(0,r.kt)("p",null,"Data usage records are created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every 45 seconds for open PDP contexts (when at least 100 KB of data is consumed)"),(0,r.kt)("li",{parentName:"ul"},"After the PDP context is closed")),(0,r.kt)("details",{className:"custom-details-example"},(0,r.kt)("summary",null,"Example JSON response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "cost": 0.00439866,\n        "id": 393533342974012,\n        "operator": { // network\n            "id": 5,\n            "name": "Telefonica O2",\n            "mnc": "07",\n            "country": {\n                "id": 74,\n                "mcc": "262",\n                "name": "Germany"\n            }\n        },\n        "organisation": {\n            "id": 11060,\n            "name": "emnify LTEM Demo"\n        },\n        "tariff": { // data plan\n            "id": 557,\n            "name": "Regional Pro EUR",\n            "ratezone": { // coverage area\n                "id": 3398,\n                "name": "Europe Basic"\n            }\n        },\n        "traffic_type": { // usage type\n            "id": 5,\n            "description": "Data"\n        },\n        "endpoint": { // device\n            "id": 10830095,\n            "name": "Wallbox 232",\n            "ip_address": "10.196.67.7",\n            "tags": "V1",\n            "imei": "8677300511111142",\n            "balance": {\n                "amount": -0.684147,\n                "last_updated": "2022-04-26T12:02:21Z",\n                "expiry_date": "2022-04-06T08:00:00Z",\n                "currency": {\n                    "id": 1,\n                    "code": "EUR",\n                    "symbol": "\u20ac"\n                }\n            }\n        },\n        "imsi": "295050901064821",\n        "volume": {\n            "total": 0.219933,\n            "rx": 0.172848,\n            "tx": 0.047085\n        },\n        "start_timestamp": "2022-04-26T11:53:43Z",\n        "sim": {\n            "id": 3324192,\n            "iccid": "8988303000005555555",\n            "msisdn": "423663920123456",\n            "production_date": "2020-09-09T06:42:59Z"\n        },\n        "currency": {\n            "id": 1,\n            "code": "EUR",\n            "symbol": "\u20ac"\n        },\n        "end_timestamp": "2022-04-26T12:02:43Z",\n        "imsi_id": 9624042\n    }\n]\n'))),(0,r.kt)("admonition",{title:"API Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/data-streamer.html#usage-object"},"Data Streamer usage object"))),(0,r.kt)("h4",{id:"sms"},"SMS"),(0,r.kt)("p",null,"Usage records for SMS are created when an SMS is successfully delivered either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the device (",(0,r.kt)("inlineCode",{parentName:"li"},'"rx": 1'),")"),(0,r.kt)("li",{parentName:"ul"},"Towards the device (",(0,r.kt)("inlineCode",{parentName:"li"},'"tx": 1'),")")),(0,r.kt)("details",{className:"custom-details-example"},(0,r.kt)("summary",null,"Example JSON response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "cost": 0.07,\n        "id": 393603365044284,\n        "operator": { // network\n            "id": 5,\n            "name": "Telefonica O2",\n            "mnc": "07",\n            "country": {\n                "id": 74,\n                "mcc": "262",\n                "name": "Germany"\n            }\n        },\n        "organisation": {\n            "id": 11060,\n            "name": "emnify LTEM Demo"\n        },\n        "tariff": { // data plan\n            "id": 1,\n            "name": "Internal Test Data Plan",\n            "ratezone": { // coverage area\n                "id": 1,\n                "name": "Area 1"\n            }\n        },\n        "traffic_type": { // usage type\n            "id": 6,\n            "description": "SMS"\n        },\n        "endpoint": { // device\n            "id": 10830095,\n            "name": "Wallbox 232",\n            "ip_address": "10.196.67.7",\n            "tags": "V1",\n            "imei": "8677300511111142",\n            "balance": {\n                "amount": -0.754147,\n                "last_updated": "2022-04-26T13:13:56Z",\n                "expiry_date": "2022-04-06T08:00:00Z",\n                "currency": {\n                    "id": 1,\n                    "code": "EUR",\n                    "symbol": "\u20ac"\n                }\n            }\n        },\n        "imsi": "901430111111111",\n        "volume": {\n            "total": 1,\n            "rx": 1,\n            "tx": 0\n        },\n        "start_timestamp": "2022-04-26T13:13:56Z",\n        "sim": {\n            "id": 3324192,\n            "iccid": "8988303000005555555",\n            "msisdn": "423663920123456",\n            "production_date": "2020-09-09T06:42:59Z"\n        },\n        "currency": {\n            "id": 1,\n            "code": "EUR",\n            "symbol": "\u20ac"\n        },\n        "end_timestamp": "2022-04-26T13:13:56Z",\n        "imsi_id": 9624042\n    }\n]\n'))),(0,r.kt)("admonition",{title:"API Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/data-streamer.html#usage-object"},"Data Streamer usage object"))))}p.isMDXComponent=!0}}]);