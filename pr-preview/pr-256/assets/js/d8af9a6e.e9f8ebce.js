"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5800],{2208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(5893),i=n(1151);const r={description:"Manage events with emnify's Data Streamer, REST API, or Portal",last_update:{date:"01-11-2023"},slug:"/system-events/usage"},a="Work with system events",d={id:"services/platform/events/usage",title:"Work with system events",description:"Manage events with emnify's Data Streamer, REST API, or Portal",source:"@site/docs/services/platform/events/usage.mdx",sourceDirName:"services/platform/events",slug:"/system-events/usage",permalink:"/pr-preview/pr-256/system-events/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/events/usage.mdx",tags:[],version:"current",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Manage events with emnify's Data Streamer, REST API, or Portal",last_update:{date:"01-11-2023"},slug:"/system-events/usage"},sidebar:"mainDocsSidebar",previous:{title:"Event types",permalink:"/pr-preview/pr-256/system-events/event-types"},next:{title:"Security",permalink:"/pr-preview/pr-256/services/security"}},o={},l=[{value:"Data Streamer",id:"data-streamer",level:2},{value:"Manage event data streams in the Portal",id:"manage-event-data-streams-in-the-portal",level:3},{value:"Event API",id:"event-api",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Specification and documentation",id:"specification-and-documentation",level:3},{value:"Retrieve events with the Event API",id:"retrieve-events-with-the-event-api",level:3},{value:"emnify Portal",id:"emnify-portal",level:2},{value:"Events in the Portal",id:"events-in-the-portal",level:3},{value:"Available data for individual events",id:"available-data-for-individual-events",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"work-with-system-events",children:"Work with system events"}),"\n",(0,s.jsx)(t.p,{children:"There are three ways you can access and trigger available events:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#data-streamer",children:"Data Streamer"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#event-api",children:"Event API"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#emnify-portal",children:"emnify Portal"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"data-streamer",children:"Data Streamer"}),"\n",(0,s.jsx)(t.p,{children:"The emnify Data Streamer allows you to configure data streams that capture events generated by the emnify system.\nThese events can include billing-related updates, SIM orders, and other operations your users perform."}),"\n",(0,s.jsx)(t.p,{children:"You gain full network transparency by leveraging integrations to identify and address issues quickly.\nAdditionally, you can use the provided information to develop your applications or business logic.\nThese integrations offer valuable insights for IoT remote monitoring, anomaly detection, detailed service usage data (data and SMS), and cost per device."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/multicloud-data-streamer",children:"Data Streamer documentation"})," to learn more about its benefits and how to get started."]})}),"\n",(0,s.jsx)(t.h3,{id:"manage-event-data-streams-in-the-portal",children:"Manage event data streams in the Portal"}),"\n",(0,s.jsxs)(t.p,{children:["To manage your data streams, log in to your ",(0,s.jsx)(t.a,{href:"https://portal.emnify.com/",children:"emnify Portal"})," account.\nThen, navigate to the ",(0,s.jsx)(t.a,{href:"https://portal.emnify.com/integrations#data-streams",children:(0,s.jsx)(t.strong,{children:"Data Streams"})})," section of the ",(0,s.jsxs)(t.a,{href:"https://portal.emnify.com/integrations",children:[(0,s.jsx)(t.strong,{children:"Integrations"})," page"]}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If no data streams are configured, the ",(0,s.jsx)(t.strong,{children:"Data Streams"})," panel displays all available connection types as tiles."]}),"\n",(0,s.jsx)(t.p,{children:"If you already have a data stream configured, the panel displays all existing streams, ordered by creation date (newest on the top).\nThis list view can be used to gain an overview of the current states of different data streams."}),"\n",(0,s.jsxs)(t.p,{children:["Data streams marked as ",(0,s.jsx)(t.strong,{children:"Running"})," are properly operating.\nFailed streams exhibit an ",(0,s.jsx)(t.strong,{children:"Error"})," status.\nPaused streams are marked as ",(0,s.jsx)(t.strong,{children:"Paused"}),"."]}),"\n",(0,s.jsx)("img",{src:n(9297).Z,alt:""}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Details"})," button allows you to inspect the configuration of the specific stream."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["You can distinguish event data streams by checking if the ",(0,s.jsx)(t.strong,{children:"Stream Type"})," on a specific data stream is set to ",(0,s.jsx)(t.strong,{children:"Stream events"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["The Data Streamer can apply filtering for event data streams based on event types.\nUnder ",(0,s.jsx)(t.strong,{children:"Event Options"}),", you can choose to ",(0,s.jsx)(t.strong,{children:"Stream all events"})," or ",(0,s.jsx)(t.strong,{children:"Stream specific events only"}),".\nSelecting the latter displays a searchable dropdown listing all ",(0,s.jsx)(t.a,{href:"/system-events/event-types",children:"event types"})," available as filters."]}),"\n",(0,s.jsx)("img",{src:n(5063).Z,alt:""}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Using the Portal, you can also create, update, and delete data streams.\nLearn more in the ",(0,s.jsx)(t.a,{href:"/multicloud-data-streamer/usage#data-streamer-in-the-portal",children:"Data Streamer usage documentation"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"event-api",children:"Event API"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/rest",children:"emnify REST API"})," provides a variety of HTTP requests for integrating several emnify services into your application, including the ability to trigger and monitor events."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"#retrieve-events-with-the-event-api",children:"Event API"})," specifically allows you to search for recent events and supports various types of result filtering."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["For events, the emnify REST API uses a ",(0,s.jsx)(t.a,{href:"https://dev.to/anubhavitis/push-vs-pull-api-architecture-1djo",children:"pull architecture"}),", which means you're responsible for requesting updates and retrieving new events.\nIf you prefer real-time updates, consider using the ",(0,s.jsx)(t.a,{href:"#data-streamer",children:"emnify Data Streamer"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(t.p,{children:"To use the emnify API, you must authenticate with an authentication token.\nemnify uses JSON Web Tokens (JWTs) for the authentication tokens."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsxs)(t.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:["Getting Started guide in the ",(0,s.jsx)(t.em,{children:"emnify REST API Documentation"})]})," provides step-by-step instructions for retrieving your authentication token."]})}),"\n",(0,s.jsx)(t.h3,{id:"specification-and-documentation",children:"Specification and documentation"}),"\n",(0,s.jsxs)(t.p,{children:["The emnify API is based on the OpenAPI Specification 3.0 (OAS3).\nWe also offer ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html",children:"interactive API documentation"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Prior OpenAPI knowledge isn't necessary to work with the emnify API.\nHowever, understanding ",(0,s.jsx)(t.a,{href:"https://oai.github.io/Documentation/specification.html",children:"how an OpenAPI Specification is structured"})," could help you navigate the documentation."]})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/event.html",children:"Events Reference page"})," in the ",(0,s.jsx)(t.em,{children:"emnify REST API Documentation"})," provides detailed information about the event structure and common elements you'll encounter using the Event API."]}),"\n",(0,s.jsx)(t.h3,{id:"retrieve-events-with-the-event-api",children:"Retrieve events with the Event API"}),"\n",(0,s.jsx)(t.p,{children:"The following entry points are available for retrieving a list of the events or event types available to your organization:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Entry point"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Events/GetEvents",children:"/api/v1/event"})}),(0,s.jsx)(t.td,{children:"Returns the list of events, filtered, sorted, and paged according to query parameters."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Events/EventTypeGet",children:"/api/v1/event/type"})}),(0,s.jsxs)(t.td,{children:["Provides the list of ",(0,s.jsx)(t.code,{children:"event_types"})," (lookup)."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"You can also list events for specific endpoints, SIMs, or users using the following entry points.\nThese event lists can be filtered, sorted, and paged according to query parameters."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Entry point"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointEventsByID",children:"/api/v1/endpoint/{endpoint_id}/event"})}),(0,s.jsx)(t.td,{children:"Returns the list of endpoint events."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/SIM/SimEventPagePerPageSortBySimIdAndQGet",children:"/api/v1/sim/{sim_id}/event"})}),(0,s.jsx)(t.td,{children:"Returns the list of SIM events."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"GET"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/User%20Management/UserEventPagePerPageSortByUserIdAndQGet",children:"/api/v1/user/{user_id}/event"})}),(0,s.jsx)(t.td,{children:"Returns the list of user events."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"emnify-portal",children:"emnify Portal"}),"\n",(0,s.jsxs)(t.p,{children:["There are several ways to view or trigger events within the ",(0,s.jsx)(t.a,{href:"https://portal.emnify.com/",children:"emnify Portal"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"events-in-the-portal",children:"Events in the Portal"}),"\n",(0,s.jsx)(t.p,{children:"Here's where you can find event information in the Portal:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Destination"}),(0,s.jsx)(t.th,{children:"Event information"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://portal.emnify.com/",children:(0,s.jsx)(t.strong,{children:"Dashboard"})})}),(0,s.jsxs)(t.td,{children:["Overview of all event activity within your organization. ",(0,s.jsx)("br",{})," ",(0,s.jsx)("img",{src:n(2142).Z,alt:""})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,s.jsx)(t.strong,{children:"Connected Devices"})}),"\xa0",(0,s.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,s.jsx)(t.strong,{children:"Details"}),"\xa0",(0,s.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,s.jsx)(t.strong,{children:"Events"})]}),(0,s.jsxs)(t.td,{children:['List of triggered events for a particular device (also referred to as an "endpoint"). ',(0,s.jsx)("br",{})," ",(0,s.jsx)("img",{src:n(6768).Z,alt:""})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://portal.emnify.com/sim-inventory",children:(0,s.jsx)(t.strong,{children:"SIM Inventory"})}),"\xa0",(0,s.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,s.jsx)(t.strong,{children:"Details"}),"\xa0",(0,s.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,s.jsx)(t.strong,{children:"Events"})]}),(0,s.jsxs)(t.td,{children:["List of triggered events for a particular SIM card. ",(0,s.jsx)("br",{})," ",(0,s.jsx)("img",{src:n(1849).Z,alt:""})]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Any events triggered in the ",(0,s.jsx)(t.a,{href:"https://portal.emnify.com/",children:"Portal"})," show ",(0,s.jsx)(t.strong,{children:"API"})," as the ",(0,s.jsx)(t.a,{href:"/system-events#event-source",children:"event source"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"available-data-for-individual-events",children:"Available data for individual events"}),"\n",(0,s.jsx)(t.p,{children:"No matter where you view events in the Portal, you'll have access to the following information for each event."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Severity"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"/system-events#event-severity",children:"event severity"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Date"}),(0,s.jsxs)(t.td,{children:['A timestamp the event was triggered. By default, the Portal shows the relative date (for example, "a day ago," "15 days ago," "a month ago"). Pressing the clock icon shows an absolute date value in the ',(0,s.jsx)(t.code,{children:"MMMM dd, yyyy hh:mm a"})," format."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Event Source"}),(0,s.jsxs)(t.td,{children:["Which ",(0,s.jsx)(t.a,{href:"/system-events#event-source",children:"system triggered the event"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Event Type"}),(0,s.jsxs)(t.td,{children:["Name of the triggered event (the ",(0,s.jsx)(t.code,{children:"description"})," value in the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/event.html#event-type-object",children:"Event Type Object"}),"). This field also indicates the network generation (4G, 5G, etc.) for specific events, like ",(0,s.jsx)(t.a,{href:"/system-events/event-types#data-connection-lifecycle",children:"PDP context lifecycles"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Device"}),(0,s.jsxs)(t.td,{children:["Name of the device impacted by the event (the ",(0,s.jsx)(t.code,{children:"name"})," value from the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/event.html#endpoint-object",children:"Endpoint Object"}),"). This name often links to the device's entry on the ",(0,s.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,s.jsx)(t.strong,{children:"Connected Devices"})})," page of the emnify Portal."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsxs)(t.td,{children:["Which ",(0,s.jsx)(t.a,{href:"https://www.emnify.com/iot-glossary/mno",children:"Mobile Network Operator (MNO)"})," the device is currently roaming on (for example, Vodafone, AT&T). Only listed for relevant network events."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Country"}),(0,s.jsxs)(t.td,{children:["The country where the MNO listed in the ",(0,s.jsx)(t.code,{children:"Operator"})," field is providing the cellular service."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ID"}),(0,s.jsx)(t.td,{children:"A generated unique identifier for the event."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"What happened, why (in some cases), and any additional details associated with the event type."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5063:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-integrations-data-streams-details-events-filter-92318e8e6a8fe3fcd9e721c01eab3e36.png"},9297:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-integrations-data-streams-status-568377dad256f3b637bc756473b0fed9.png"},6768:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-connected-devices-details-events-c471a3da056e0e7b2ec2313d0b95a20f.png"},2142:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-dashboard-events-5724646ba3e5dc304767f71977bebd14.png"},1849:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-sim-inventory-details-events-f2e0924fa144cde07707791160373969.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);