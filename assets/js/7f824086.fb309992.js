"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4214],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(g,s(s({ref:e},d),{},{components:a})):n.createElement(g,s({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[m]="string"==typeof t?t:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},704:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={description:"Managing data streams with the emnify Portal or API"},s="Using the Data Streamer",o={unversionedId:"services/data-streamer/usage",id:"services/data-streamer/usage",title:"Using the Data Streamer",description:"Managing data streams with the emnify Portal or API",source:"@site/docs/services/data-streamer/usage.md",sourceDirName:"services/data-streamer",slug:"/services/data-streamer/usage",permalink:"/services/data-streamer/usage",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/data-streamer/usage.md",tags:[],version:"current",lastUpdatedAt:1678379714,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{description:"Managing data streams with the emnify Portal or API"},sidebar:"mainDocsSidebar",previous:{title:"Managing data streams",permalink:"/services/data-streamer/managing-data-streams"},next:{title:"Available integrations",permalink:"/services/data-streamer/available-integrations"}},l={},p=[{value:"Choosing which interface to use",id:"choosing-which-interface-to-use",level:2},{value:"Data Streamer in the Portal",id:"data-streamer-in-the-portal",level:2},{value:"Viewing data streams",id:"viewing-data-streams",level:3},{value:"Creating data streams",id:"creating-data-streams",level:3},{value:"Inspecting and updating data streams",id:"inspecting-and-updating-data-streams",level:3},{value:"Deleting data streams",id:"deleting-data-streams",level:3},{value:"Data Streamer API",id:"data-streamer-api",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Specification and documentation",id:"specification-and-documentation",level:3},{value:"Working with the Data Streamer API",id:"working-with-the-data-streamer-api",level:3},{value:"Creating data streams",id:"creating-data-streams-1",level:3},{value:"Listing data streams",id:"listing-data-streams",level:3},{value:"Retrieving details",id:"retrieving-details",level:3},{value:"Updating data streams",id:"updating-data-streams",level:3},{value:"Deleting data streams",id:"deleting-data-streams-1",level:3}],d={toc:p};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-data-streamer"},"Using the Data Streamer"),(0,r.kt)("p",null,"You can manage data streams with the ",(0,r.kt)("a",{parentName:"p",href:"#data-streamer-in-the-portal"},"emnify Portal")," or the ",(0,r.kt)("a",{parentName:"p",href:"#data-streamer-api"},"Data Streamer API"),"."),(0,r.kt)("h2",{id:"choosing-which-interface-to-use"},"Choosing which interface to use"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#data-streamer-in-the-portal"},"emnify Portal")),(0,r.kt)("br",{parentName:"p"}),"\n","Managing data streams with the Portal is convenient when taking the first steps or if you don't expect configuration changes to be needed often."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#data-streamer-api"},"Data Streamer API")),(0,r.kt)("br",{parentName:"p"}),"\n","Integrating the Data Streamer API becomes a faster and more secure approach when multiple data streams need to be managed as part of the daily business or in the case of advanced operations (e.g., seamless migration from one data stream to another without lags or duplicates)."),(0,r.kt)("h2",{id:"data-streamer-in-the-portal"},"Data Streamer in the Portal"),(0,r.kt)("p",null,"To ",(0,r.kt)("a",{parentName:"p",href:"managing-data-streams"},"manage your data streams"),", ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/sign/"},"log in to your emnify Portal account"),".\nThen, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#data-streams"},(0,r.kt)("strong",{parentName:"a"},"Data Streams"))," section of the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations"},(0,r.kt)("strong",{parentName:"a"},"Integrations")," page"),"."),(0,r.kt)("h3",{id:"viewing-data-streams"},"Viewing data streams"),(0,r.kt)("p",null,"If there are no data streams configured, the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#data-streams"},(0,r.kt)("strong",{parentName:"a"},"Data Streams"))," panel displays all available ",(0,r.kt)("a",{parentName:"p",href:"connection-types"},"connection types")," as tiles."),(0,r.kt)("img",{src:a(7859).Z,alt:""}),(0,r.kt)("p",null,"If you already have a data stream configured, the panel displays all existing streams, ordered by creation date (newest on the top).\nThis list view can be used to gain an overview of the current states of different data streams."),(0,r.kt)("p",null,"Data streams are marked as ",(0,r.kt)("strong",{parentName:"p"},"Running")," are properly operating.\nFailed streams exhibit an ",(0,r.kt)("strong",{parentName:"p"},"Error")," status.\nPaused streams are marked as ",(0,r.kt)("strong",{parentName:"p"},"Paused"),"."),(0,r.kt)("img",{src:a(9076).Z,alt:""}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Details")," button allows you to inspect the configuration of the specific stream.\nThe ",(0,r.kt)("strong",{parentName:"p"},"Destination")," configuration varies depending on the connection type."),(0,r.kt)("img",{src:a(5991).Z,alt:""}),(0,r.kt)("h3",{id:"creating-data-streams"},"Creating data streams"),(0,r.kt)("p",null,"When no configured data streams are available, click ",(0,r.kt)("strong",{parentName:"p"},"Add")," on the preferred connection type tile."),(0,r.kt)("img",{src:a(6630).Z,alt:""}),(0,r.kt)("p",null,"Otherwise, click ",(0,r.kt)("strong",{parentName:"p"},"Add New Stream")," at the top of the existing ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#data-streams"},(0,r.kt)("strong",{parentName:"a"},"Data Streams"))," list.\nThis shows the connection type tiles. You can choose your preferred connection type and click ",(0,r.kt)("strong",{parentName:"p"},"Add"),"."),(0,r.kt)("img",{src:a(6470).Z,alt:""}),(0,r.kt)("p",null,"Configure the source by selecting your desired ",(0,r.kt)("a",{parentName:"p",href:"stream-types"},"stream type"),".\nOptionally, you can add event options for ",(0,r.kt)("a",{parentName:"p",href:"managing-data-streams#filtering-event-data-streams"},"filtering on event types"),"."),(0,r.kt)("p",null,"Provide the required settings to configure the destination."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"API keys and configuration parameters differ by connection type.\nInstructions for configuring each connection type are in the ",(0,r.kt)("a",{parentName:"p",href:"available-integrations"},"Available integrations")," section.")),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Create")," and verify the status of your new stream."),(0,r.kt)("p",null,"If everything goes well, the data stream is successfully created.\nThe configuration view will close, and you will see the integration status shown as ",(0,r.kt)("strong",{parentName:"p"},"Running"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the configuration is invalid, a warning will display along with an error message indicating the cause of the problem.\nIf this happens, the stream isn't created and you must correct the configuration.")),(0,r.kt)("h3",{id:"inspecting-and-updating-data-streams"},"Inspecting and updating data streams"),(0,r.kt)("p",null,"With the ",(0,r.kt)("strong",{parentName:"p"},"Details")," button on the Data Stream tiles, you can inspect the configuration and update the ",(0,r.kt)("a",{parentName:"p",href:"managing-data-streams#filtering-event-data-streams"},"filters for event data streams"),"."),(0,r.kt)("img",{src:a(5089).Z,alt:""}),(0,r.kt)("h3",{id:"deleting-data-streams"},"Deleting data streams"),(0,r.kt)("p",null,"To permanently delete a data stream, click the trash bin icon near the ",(0,r.kt)("strong",{parentName:"p"},"Details")," button."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You\u2019ll need to confirm this action.")),(0,r.kt)("h2",{id:"data-streamer-api"},"Data Streamer API"),(0,r.kt)("p",null,"You can manage your data streams using the emnify Data Streamer API.\nAvailable entry points are listed under the ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations"},"Integrations section of the emnify REST API reference"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can find detailed information on the Data Streamer data properties and compatibility notes in the ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/event.html"},"Data Streamer API Reference")," in the ",(0,r.kt)("em",{parentName:"p"},"emnify System Documentation"),".  ")),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"To use the emnify API, you need to authenticate with an authentication token.\nWe use JWTs as the authentication token."),(0,r.kt)("p",null,"Each integration also requires credentials to verify that the data streamer has permission to write data to that service."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/getting-started.html"},"Getting Started guide in the ",(0,r.kt)("em",{parentName:"a"},"emnify REST API Documentation"))," provides step-by-step instructions for retrieving this token.")),(0,r.kt)("h3",{id:"specification-and-documentation"},"Specification and documentation"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/rest-api"},"emnify REST API")," is based on the OpenAPI Specification OAS3.\nWe also have ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html"},"interactive API documentation"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Prior OpenAPI knowledge isn't necessary for working with the emnify API.\nNevertheless, ",(0,r.kt)("a",{parentName:"p",href:"https://oai.github.io/Documentation/specification.html"},"understanding how an OpenAPI Specification is structured")," could help you navigate our documentation.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/data-streamer.html"},"Data Streamer reference page")," in the ",(0,r.kt)("em",{parentName:"p"},"emnify REST API Documentation")," provides details about the data structure and common elements you'll encounter while working with the Data Streamer API."),(0,r.kt)("h3",{id:"working-with-the-data-streamer-api"},"Working with the Data Streamer API"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"API keys and configuration parameters differ by ",(0,r.kt)("a",{parentName:"p",href:"connection-types"},"connection type"),".\nDetails on setting up, updating, or deleting integrations are in the ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations"},"emnify API reference"),".\nIt lists all entry points for managing data streams programmatically and contains examples of the available connection types and filtering options.")),(0,r.kt)("p",null,"The following entry points are available for managing data streams:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream")),(0,r.kt)("td",{parentName:"tr",align:null},"List data streams.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/{data_stream_id}")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve detailed information of a data stream by ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a data stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PATCH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/{data_stream_id}")),(0,r.kt)("td",{parentName:"tr",align:null},"Update a data stream by ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/{data_stream_id}/restart")),(0,r.kt)("td",{parentName:"tr",align:null},"Restart a data stream by ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/{data_stream_id}")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a data stream by ID.")))),(0,r.kt)("p",null,"The following lookup entry points are available for retrieving possible configuration options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/status")),(0,r.kt)("td",{parentName:"tr",align:null},"List possible data stream statuses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/connection_type")),(0,r.kt)("td",{parentName:"tr",align:null},"List possible data stream connection types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/type")),(0,r.kt)("td",{parentName:"tr",align:null},"List possible data stream types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/data_stream/filter_field_type")),(0,r.kt)("td",{parentName:"tr",align:null},"List possible data stream filter fields.")))),(0,r.kt)("h3",{id:"creating-data-streams-1"},"Creating data streams"),(0,r.kt)("p",null,"Once authenticated, users can create data streams by sending ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2/data_stream"),"."),(0,r.kt)("p",null,"An example cURL to create a data stream would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://cdn.emnify.net/api/v2/data_stream" \\\n-H "accept: */*" \\\n-H "Authorization: Bearer AuthToken" \\\n-H "Content-Type: application/json" \\\n-d \'{"data_stream_type":...\'\n')),(0,r.kt)("p",null,"The request body (set using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag in cURL) configures the data stream's parameters."),(0,r.kt)("p",null,"The following JSON request body example shows how to create a stream of usage data records with the ",(0,r.kt)("a",{parentName:"p",href:"available-integrations#webhook"},"Webhook integration"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data_stream_type": {\n    "id": 1 // usage data\n  },\n  "destination": {\n    "connection_type": "RestAPI",\n    "credentials": {\n      "url": "https://my-application-server/servicebus.net",\n      "method": "POST", // HTTP method expected by the application server for pushing data records\n      "headers": [\n        // can be used for authentication or\n        // other mapping functionality on the application server side\n        "my_custom_header_1:value1",\n        "my_custom_header_2:value2"\n      ]\n    },\n    "format": "Json" // further format options will be added in future\n  }\n}\n')),(0,r.kt)("p",null,"You can also create an event stream with ",(0,r.kt)("a",{parentName:"p",href:"available-integrations#amazon-kinesis-data-streams"},"AWS Kinesis integration")," and enabled filtering, like the following JSON request body example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data_stream_type": {\n    "id": 2 // events\n  },\n  "destination": {\n    "connection_type": "AwsKinesis",\n    "credentials": {\n      "region": "af-south-1",\n      "stream_name": "demo-stream",\n      "role_arn": "arn:aws:iam:1234567890:role/role_for_kinesis_data_stream"\n    },\n    "format": "Json"\n  },\n  "filters": [\n    {\n      "field": "event_type_id",\n      "value": [1, 2, 3]\n    },\n    {\n      "or": [\n        {\n          "field": "alert",\n          "value": true\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{title:"API Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/CreateDataStreamer"},"emnify API specification - Create Data Stream"),".")),(0,r.kt)("h3",{id:"listing-data-streams"},"Listing data streams"),(0,r.kt)("p",null,"You can list all data streams belonging to your organization by sending ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2/data_stream"),"."),(0,r.kt)("p",null,"An example cURL request to list data streams would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://cdn.emnify.net/api/v2/data_stream" \\\n-H "accept: application/json"  \\\n-H "Authorization:Bearer AuthToken"\n')),(0,r.kt)("admonition",{title:"API Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/ListDataStreamerV2s"},"emnify API specification - List Data Stream configurations of your organization"))),(0,r.kt)("h3",{id:"retrieving-details"},"Retrieving details"),(0,r.kt)("p",null,"Retrieving details of an existing data stream is possible by making a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2/data_stream/{data_stream_id}"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data_stream_id")," path parameter is the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property in each object returned by the ",(0,r.kt)("a",{parentName:"p",href:"#listing-data-streams"},"listing data streams")," request and is an ID that is unique for each data stream."),(0,r.kt)("p",null,"An example cURL request to get detailed information for a data stream with an ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://cdn.emnify.net/api/v2/data_stream/123" \\\n-H "accept: application/json" \\\n-H "Authorization:Bearer AuthToken"\n')),(0,r.kt)("admonition",{title:"API Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/GetDataStreamerByIdV2"},"emnify API specification - Get Details on Existing Data Stream"))),(0,r.kt)("h3",{id:"updating-data-streams"},"Updating data streams"),(0,r.kt)("p",null,"Authenticated users may update data streams belonging to their organization by making a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2/data_stream/{data_stream_id}"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data_stream_id")," path parameter is the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property in each object returned by the ",(0,r.kt)("a",{parentName:"p",href:"#listing-data-streams"},"listing data streams")," request and is an ID that is unique for each data stream."),(0,r.kt)("p",null,"An example cURL request to update a data stream with an ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"123"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://cdn.emnify.net/api/v2/data_stream/123" \\\n-H "accept: application/json" \\\n-H"Authorization: Bearer AuthToken" \\\n-H "Content-Type: application/json" \\-d \'{...}\'\n')),(0,r.kt)("p",null,"The request body (set using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag in cURL) configures the parameters of the data stream itself."),(0,r.kt)("p",null,"The following example shows how to pause a stream and erase any filters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": {\n    "id": 2 // 1 = Running, 2 = Paused, 3 = Error, 4 = Pending\n  },\n  "filters": []\n}\n')),(0,r.kt)("admonition",{title:"API Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/PatchV2DataStream"},"emnify API specification - Modify Existing Data Stream"))),(0,r.kt)("h3",{id:"deleting-data-streams-1"},"Deleting data streams"),(0,r.kt)("p",null,"Sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2/data_stream/{data_stream_id}")," will delete the data stream with that ID."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data_stream_id")," path parameter is the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property in each object returned by the ",(0,r.kt)("a",{parentName:"p",href:"#listing-data-streams"},"listing data streams")," request and is an ID that is unique for each data stream."),(0,r.kt)("p",null,"The following cURL request would then delete a data stream with an ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"123"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://cdn.emnify.net/api/v2/data_stream/123" \\\n-H "accept: application/json" \\\n-H "Authorization: Bearer AuthToken"\n')),(0,r.kt)("admonition",{title:"API Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/DeleteDataStreamerV2"},"emnify API specification - Delete Existing Data Stream"))))}m.isMDXComponent=!0},5089:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-details-events-filter-92318e8e6a8fe3fcd9e721c01eab3e36.png"},9076:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-status-568377dad256f3b637bc756473b0fed9.png"},6630:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-add-buttons-69e614d17050d6975324b48e2251091d.png"},6470:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-add-new-button-b61a5da0a834bd85bdb837fed3233310.png"},5991:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-details-usage-19c7a8019237bbf3a00e3b2f10947b54.png"},7859:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-panel-a4544e79d7daf533e417c60cc1a43335.png"}}]);