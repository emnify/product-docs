"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5800],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={description:"Manage events with emnify's Data Streamer, REST API, or Portal",last_update:{date:"01-11-2023"},slug:"/system-events/usage"},o="Work with system events",s={unversionedId:"services/platform/events/usage",id:"services/platform/events/usage",title:"Work with system events",description:"Manage events with emnify's Data Streamer, REST API, or Portal",source:"@site/docs/services/platform/events/usage.mdx",sourceDirName:"services/platform/events",slug:"/system-events/usage",permalink:"/pr-preview/pr-228/system-events/usage",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/events/usage.mdx",tags:[],version:"current",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Manage events with emnify's Data Streamer, REST API, or Portal",last_update:{date:"01-11-2023"},slug:"/system-events/usage"},sidebar:"mainDocsSidebar",previous:{title:"Event types",permalink:"/pr-preview/pr-228/system-events/event-types"},next:{title:"Security",permalink:"/pr-preview/pr-228/services/security"}},l={},p=[{value:"Data Streamer",id:"data-streamer",level:2},{value:"Manage event data streams in the Portal",id:"manage-event-data-streams-in-the-portal",level:3},{value:"Event API",id:"event-api",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Specification and documentation",id:"specification-and-documentation",level:3},{value:"Retrieve events with the Event API",id:"retrieve-events-with-the-event-api",level:3},{value:"emnify Portal",id:"emnify-portal",level:2},{value:"Events in the Portal",id:"events-in-the-portal",level:3},{value:"Available data for individual events",id:"available-data-for-individual-events",level:3}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"work-with-system-events"},"Work with system events"),(0,r.kt)("p",null,"There are three ways you can access and trigger available events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#data-streamer"},"Data Streamer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#event-api"},"Event API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#emnify-portal"},"emnify Portal"))),(0,r.kt)("h2",{id:"data-streamer"},"Data Streamer"),(0,r.kt)("p",null,"The emnify Data Streamer allows you to configure data streams that capture events generated by the emnify system.\nThese events can include billing-related updates, SIM orders, and other operations your users perform."),(0,r.kt)("p",null,"You gain full network transparency by leveraging integrations to identify and address issues quickly.\nAdditionally, you can use the provided information to develop your applications or business logic.\nThese integrations offer valuable insights for IoT remote monitoring, anomaly detection, detailed service usage data (data and SMS), and cost per device."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/multicloud-data-streamer"},"Data Streamer documentation")," to learn more about its benefits and how to get started.")),(0,r.kt)("h3",{id:"manage-event-data-streams-in-the-portal"},"Manage event data streams in the Portal"),(0,r.kt)("p",null,"To manage your data streams, log in to your ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," account.\nThen, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#data-streams"},(0,r.kt)("strong",{parentName:"a"},"Data Streams"))," section of the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations"},(0,r.kt)("strong",{parentName:"a"},"Integrations")," page"),"."),(0,r.kt)("p",null,"If no data streams are configured, the ",(0,r.kt)("strong",{parentName:"p"},"Data Streams")," panel displays all available connection types as tiles."),(0,r.kt)("p",null,"If you already have a data stream configured, the panel displays all existing streams, ordered by creation date (newest on the top).\nThis list view can be used to gain an overview of the current states of different data streams."),(0,r.kt)("p",null,"Data streams marked as ",(0,r.kt)("strong",{parentName:"p"},"Running")," are properly operating.\nFailed streams exhibit an ",(0,r.kt)("strong",{parentName:"p"},"Error")," status.\nPaused streams are marked as ",(0,r.kt)("strong",{parentName:"p"},"Paused"),"."),(0,r.kt)("img",{src:a(9297).Z,alt:""}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Details")," button allows you to inspect the configuration of the specific stream."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can distinguish event data streams by checking if the ",(0,r.kt)("strong",{parentName:"p"},"Stream Type")," on a specific data stream is set to ",(0,r.kt)("strong",{parentName:"p"},"Stream events"),".")),(0,r.kt)("p",null,"The Data Streamer can apply filtering for event data streams based on event types.\nUnder ",(0,r.kt)("strong",{parentName:"p"},"Event Options"),", you can choose to ",(0,r.kt)("strong",{parentName:"p"},"Stream all events")," or ",(0,r.kt)("strong",{parentName:"p"},"Stream specific events only"),".\nSelecting the latter displays a searchable dropdown listing all ",(0,r.kt)("a",{parentName:"p",href:"/system-events/event-types"},"event types")," available as filters."),(0,r.kt)("img",{src:a(5063).Z,alt:""}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using the Portal, you can also create, update, and delete data streams.\nLearn more in the ",(0,r.kt)("a",{parentName:"p",href:"/multicloud-data-streamer/usage#data-streamer-in-the-portal"},"Data Streamer usage documentation"),".")),(0,r.kt)("h2",{id:"event-api"},"Event API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/rest"},"emnify REST API")," provides a variety of HTTP requests for integrating several emnify services into your application, including the ability to trigger and monitor events."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#retrieve-events-with-the-event-api"},"Event API")," specifically allows you to search for recent events and supports various types of result filtering."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For events, the emnify REST API uses a ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/anubhavitis/push-vs-pull-api-architecture-1djo"},"pull architecture"),", which means you're responsible for requesting updates and retrieving new events.\nIf you prefer real-time updates, consider using the ",(0,r.kt)("a",{parentName:"p",href:"#data-streamer"},"emnify Data Streamer"),".")),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"To use the emnify API, you must authenticate with an authentication token.\nemnify uses JSON Web Tokens (JWTs) for the authentication tokens."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/getting-started.html"},"Getting Started guide in the ",(0,r.kt)("em",{parentName:"a"},"emnify REST API Documentation"))," provides step-by-step instructions for retrieving your authentication token.")),(0,r.kt)("h3",{id:"specification-and-documentation"},"Specification and documentation"),(0,r.kt)("p",null,"The emnify API is based on the OpenAPI Specification 3.0 (OAS3).\nWe also offer ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html"},"interactive API documentation"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Prior OpenAPI knowledge isn't necessary to work with the emnify API.\nHowever, understanding ",(0,r.kt)("a",{parentName:"p",href:"https://oai.github.io/Documentation/specification.html"},"how an OpenAPI Specification is structured")," could help you navigate the documentation.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/event.html"},"Events Reference page")," in the ",(0,r.kt)("em",{parentName:"p"},"emnify REST API Documentation")," provides detailed information about the event structure and common elements you'll encounter using the Event API."),(0,r.kt)("h3",{id:"retrieve-events-with-the-event-api"},"Retrieve events with the Event API"),(0,r.kt)("p",null,"The following entry points are available for retrieving a list of the events or event types available to your organization:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Entry point"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/swagger.html#/Events/GetEvents"},"/api/v1/event")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the list of events, filtered, sorted, and paged according to query parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/swagger.html#/Events/EventTypeGet"},"/api/v1/event/type")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the list of ",(0,r.kt)("inlineCode",{parentName:"td"},"event_types")," (lookup).")))),(0,r.kt)("p",null,"You can also list events for specific endpoints, SIMs, or users using the following entry points.\nThese event lists can be filtered, sorted, and paged according to query parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Entry point"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointEventsByID"},"/api/v1/endpoint/","{","endpoint_id","}","/event")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the list of endpoint events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/swagger.html#/SIM/SimEventPagePerPageSortBySimIdAndQGet"},"/api/v1/sim/","{","sim_id","}","/event")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the list of SIM events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/swagger.html#/User%20Management/UserEventPagePerPageSortByUserIdAndQGet"},"/api/v1/user/","{","user_id","}","/event")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the list of user events.")))),(0,r.kt)("h2",{id:"emnify-portal"},"emnify Portal"),(0,r.kt)("p",null,"There are several ways to view or trigger events within the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal"),"."),(0,r.kt)("h3",{id:"events-in-the-portal"},"Events in the Portal"),(0,r.kt)("p",null,"Here's where you can find event information in the Portal:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Destination"),(0,r.kt)("th",{parentName:"tr",align:null},"Event information"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://portal.emnify.com/"},(0,r.kt)("strong",{parentName:"a"},"Dashboard"))),(0,r.kt)("td",{parentName:"tr",align:null},"Overview of all event activity within your organization. ",(0,r.kt)("br",null)," ",(0,r.kt)("img",{src:a(2142).Z,alt:""}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")),"\xa0",(0,r.kt)("span",{"aria-label":"and then"},">")," ",(0,r.kt)("strong",{parentName:"td"},"Details"),"\xa0",(0,r.kt)("span",{"aria-label":"and then"},">")," ",(0,r.kt)("strong",{parentName:"td"},"Events")),(0,r.kt)("td",{parentName:"tr",align:null},'List of triggered events for a particular device (also referred to as an "endpoint"). ',(0,r.kt)("br",null)," ",(0,r.kt)("img",{src:a(6768).Z,alt:""}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://portal.emnify.com/sim-inventory"},(0,r.kt)("strong",{parentName:"a"},"SIM Inventory")),"\xa0",(0,r.kt)("span",{"aria-label":"and then"},">")," ",(0,r.kt)("strong",{parentName:"td"},"Details"),"\xa0",(0,r.kt)("span",{"aria-label":"and then"},">")," ",(0,r.kt)("strong",{parentName:"td"},"Events")),(0,r.kt)("td",{parentName:"tr",align:null},"List of triggered events for a particular SIM card. ",(0,r.kt)("br",null)," ",(0,r.kt)("img",{src:a(1849).Z,alt:""}))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Any events triggered in the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"Portal")," show ",(0,r.kt)("strong",{parentName:"p"},"API")," as the ",(0,r.kt)("a",{parentName:"p",href:"/system-events#event-source"},"event source"),".")),(0,r.kt)("h3",{id:"available-data-for-individual-events"},"Available data for individual events"),(0,r.kt)("p",null,"No matter where you view events in the Portal, you'll have access to the following information for each event."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Severity"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/system-events#event-severity"},"event severity"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},'A timestamp the event was triggered. By default, the Portal shows the relative date (for example, "a day ago," "15 days ago," "a month ago"). Pressing the clock icon shows an absolute date value in the ',(0,r.kt)("inlineCode",{parentName:"td"},"MMMM dd, yyyy hh:mm a")," format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Source"),(0,r.kt)("td",{parentName:"tr",align:null},"Which ",(0,r.kt)("a",{parentName:"td",href:"/system-events#event-source"},"system triggered the event"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the triggered event (the ",(0,r.kt)("inlineCode",{parentName:"td"},"description")," value in the ",(0,r.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/event.html#event-type-object"},"Event Type Object"),"). This field also indicates the network generation (4G, 5G, etc.) for specific events, like ",(0,r.kt)("a",{parentName:"td",href:"/system-events/event-types#data-connection-lifecycle"},"PDP context lifecycles"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Device"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the device impacted by the event (the ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," value from the ",(0,r.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/event.html#endpoint-object"},"Endpoint Object"),"). This name often links to the device's entry on the ",(0,r.kt)("a",{parentName:"td",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices"))," page of the emnify Portal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operator"),(0,r.kt)("td",{parentName:"tr",align:null},"Which ",(0,r.kt)("a",{parentName:"td",href:"https://www.emnify.com/iot-glossary/mno"},"Mobile Network Operator (MNO)")," the device is currently roaming on (for example, Vodafone, AT&T). Only listed for relevant network events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},"The country where the MNO listed in the ",(0,r.kt)("inlineCode",{parentName:"td"},"Operator")," field is providing the cellular service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"A generated unique identifier for the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"What happened, why (in some cases), and any additional details associated with the event type.")))))}m.isMDXComponent=!0},5063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-details-events-filter-92318e8e6a8fe3fcd9e721c01eab3e36.png"},9297:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-status-568377dad256f3b637bc756473b0fed9.png"},6768:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-connected-devices-details-events-c471a3da056e0e7b2ec2313d0b95a20f.png"},2142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-dashboard-events-5724646ba3e5dc304767f71977bebd14.png"},1849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-sim-inventory-details-events-f2e0924fa144cde07707791160373969.png"}}]);