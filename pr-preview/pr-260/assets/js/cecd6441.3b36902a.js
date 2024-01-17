"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2583],{3502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(5893),s=t(1151);const r={description:"Configure the type of content delivered by the data stream",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/stream-types"},i="Stream types",d={id:"services/platform/data-streamer/stream-types",title:"Stream types",description:"Configure the type of content delivered by the data stream",source:"@site/docs/services/platform/data-streamer/stream-types.md",sourceDirName:"services/platform/data-streamer",slug:"/multicloud-data-streamer/stream-types",permalink:"/pr-preview/pr-260/multicloud-data-streamer/stream-types",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1672444800,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{description:"Configure the type of content delivered by the data stream",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/stream-types"},sidebar:"mainDocsSidebar",previous:{title:"Connection types",permalink:"/pr-preview/pr-260/multicloud-data-streamer/connection-types"},next:{title:"Manage data streams",permalink:"/pr-preview/pr-260/multicloud-data-streamer/manage-data-streams"}},o={},c=[{value:"Event data",id:"event-data",level:2},{value:"Usage data",id:"usage-data",level:2},{value:"Traffic types",id:"traffic-types",level:3},{value:"Data",id:"data",level:4},{value:"SMS",id:"sms",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"stream-types",children:"Stream types"}),"\n",(0,a.jsxs)(n.p,{children:["Through stream types, you can configure the type of content delivered by the data stream.\nYou may choose between receiving ",(0,a.jsx)(n.em,{children:"event data"})," or ",(0,a.jsx)(n.em,{children:"usage data"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Streaming event and usage data within one stream is possible but not advised, as these data records don't share a common schema definition."}),"\n",(0,a.jsx)(n.h2,{id:"event-data",children:"Event data"}),"\n",(0,a.jsx)(n.p,{children:"The emnify system generates several types of events.\nThese events allow you to track notable system occurrences based on behavior."}),"\n",(0,a.jsx)(n.p,{children:"Some common use cases for events on emnify include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Triggers for custom business processes"})," (for example, authentication or custom usage limitations configured on the ",(0,a.jsx)(n.a,{href:"/multicloud-data-streamer/usage#data-streamer-in-the-portal",children:"emnify Portal"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Monitoring"})," (for example, SIM or data connection lifecycles)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Input for custom billing systems"})," (that is, updating billing configuration, processing invoices, etc.)"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Learn more about the available event types and how to use them in the ",(0,a.jsx)(n.a,{href:"/system-events",children:"Event documentation"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"usage-data",children:"Usage data"}),"\n",(0,a.jsx)(n.p,{children:"Usage data records get generated when devices consume data or SMS services.\nThese records provide information about the SIM, used service, visited network, volumes, and cost."}),"\n",(0,a.jsx)(n.p,{children:"Usage data streams are often used for monitoring and analyzing data consumption and as input for custom billing systems."}),"\n",(0,a.jsx)(n.p,{children:"Each usage data record contains information about the:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Device"})," (organization, SIM, IMSI)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Time"})," (start and end time)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Price applied for rating"})," (data plan, coverage policy, coverage area)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Mobile network operator used for the service"})," (operator, country)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type of service"})," (SMS or data)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Consumed service volumes"})," (down- and upstream, total volume)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Costs"})," (amount, currency)"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"traffic-types",children:"Traffic types"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"ID"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#data",children:"Data"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"6"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#sms",children:"SMS"})})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"data",children:"Data"}),"\n",(0,a.jsx)(n.p,{children:"Data usage records are created:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Every 45 seconds for open PDP contexts (when at least 100 KB of data is consumed)"}),"\n",(0,a.jsx)(n.li,{children:"After the PDP context is closed"}),"\n"]}),"\n",(0,a.jsxs)(t,{className:"custom-details-example",children:[(0,a.jsx)("summary",{children:"Example JSON response"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "cost": 0.00439866,\n        "id": 393533342974012,\n        "operator": { // network\n            "id": 5,\n            "name": "Telefonica O2",\n            "mnc": "07",\n            "country": {\n                "id": 74,\n                "mcc": "262",\n                "name": "Germany"\n            }\n        },\n        "organisation": {\n            "id": 11060,\n            "name": "emnify LTEM Demo"\n        },\n        "tariff": { // data plan\n            "id": 557,\n            "name": "Regional Pro EUR",\n            "ratezone": { // coverage area\n                "id": 3398,\n                "name": "Europe Basic"\n            }\n        },\n        "traffic_type": { // usage type\n            "id": 5,\n            "description": "Data"\n        },\n        "endpoint": { // device\n            "id": 10830095,\n            "name": "Wallbox 232",\n            "ip_address": "10.196.67.7",\n            "tags": "V1",\n            "imei": "8677300511111142",\n            "balance": {\n                "amount": -0.684147,\n                "last_updated": "2022-04-26T12:02:21Z",\n                "expiry_date": "2022-04-06T08:00:00Z",\n                "currency": {\n                    "id": 1,\n                    "code": "EUR",\n                    "symbol": "\u20ac"\n                }\n            }\n        },\n        "imsi": "295050901064821",\n        "volume": {\n            "total": 0.219933,\n            "rx": 0.172848,\n            "tx": 0.047085\n        },\n        "start_timestamp": "2022-04-26T11:53:43Z",\n        "sim": {\n            "id": 3324192,\n            "iccid": "8988303000005555555",\n            "msisdn": "423663920123456",\n            "production_date": "2020-09-09T06:42:59Z"\n        },\n        "currency": {\n            "id": 1,\n            "code": "EUR",\n            "symbol": "\u20ac"\n        },\n        "end_timestamp": "2022-04-26T12:02:43Z",\n        "imsi_id": 9624042\n    }\n]\n'})})]}),"\n",(0,a.jsx)(n.admonition,{title:"API reference",type:"note",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/data-streamer.html#usage-object",children:"Data Streamer usage object"})})}),"\n",(0,a.jsx)(n.h4,{id:"sms",children:"SMS"}),"\n",(0,a.jsx)(n.p,{children:"Usage records for SMS are created when an SMS is successfully delivered either:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["From the device (",(0,a.jsx)(n.code,{children:'"rx": 1'}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Towards the device (",(0,a.jsx)(n.code,{children:'"tx": 1'}),")"]}),"\n"]}),"\n",(0,a.jsxs)(t,{className:"custom-details-example",children:[(0,a.jsx)("summary",{children:"Example JSON response"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "cost": 0.07,\n        "id": 393603365044284,\n        "operator": { // network\n            "id": 5,\n            "name": "Telefonica O2",\n            "mnc": "07",\n            "country": {\n                "id": 74,\n                "mcc": "262",\n                "name": "Germany"\n            }\n        },\n        "organisation": {\n            "id": 11060,\n            "name": "emnify LTEM Demo"\n        },\n        "tariff": { // data plan\n            "id": 1,\n            "name": "Internal Test Data Plan",\n            "ratezone": { // coverage area\n                "id": 1,\n                "name": "Area 1"\n            }\n        },\n        "traffic_type": { // usage type\n            "id": 6,\n            "description": "SMS"\n        },\n        "endpoint": { // device\n            "id": 10830095,\n            "name": "Wallbox 232",\n            "ip_address": "10.196.67.7",\n            "tags": "V1",\n            "imei": "8677300511111142",\n            "balance": {\n                "amount": -0.754147,\n                "last_updated": "2022-04-26T13:13:56Z",\n                "expiry_date": "2022-04-06T08:00:00Z",\n                "currency": {\n                    "id": 1,\n                    "code": "EUR",\n                    "symbol": "\u20ac"\n                }\n            }\n        },\n        "imsi": "901430111111111",\n        "volume": {\n            "total": 1,\n            "rx": 1,\n            "tx": 0\n        },\n        "start_timestamp": "2022-04-26T13:13:56Z",\n        "sim": {\n            "id": 3324192,\n            "iccid": "8988303000005555555",\n            "msisdn": "423663920123456",\n            "production_date": "2020-09-09T06:42:59Z"\n        },\n        "currency": {\n            "id": 1,\n            "code": "EUR",\n            "symbol": "\u20ac"\n        },\n        "end_timestamp": "2022-04-26T13:13:56Z",\n        "imsi_id": 9624042\n    }\n]\n'})})]}),"\n",(0,a.jsx)(n.admonition,{title:"API reference",type:"note",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/data-streamer.html#usage-object",children:"Data Streamer usage object"})})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var a=t(7294);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);