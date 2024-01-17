"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[1703],{8038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(5893),s=a(1151);const r={description:"Manage data streams with the emnify Portal or REST API",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/usage"},i="Use the Data Streamer",d={id:"services/platform/data-streamer/usage",title:"Use the Data Streamer",description:"Manage data streams with the emnify Portal or REST API",source:"@site/docs/services/platform/data-streamer/usage.md",sourceDirName:"services/platform/data-streamer",slug:"/multicloud-data-streamer/usage",permalink:"/multicloud-data-streamer/usage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1672444800,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{description:"Manage data streams with the emnify Portal or REST API",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/usage"},sidebar:"mainDocsSidebar",previous:{title:"Manage data streams",permalink:"/multicloud-data-streamer/manage-data-streams"},next:{title:"Available integrations",permalink:"/multicloud-data-streamer/integrations"}},o={},c=[{value:"Choose which interface to use",id:"choose-which-interface-to-use",level:2},{value:"Data Streamer in the Portal",id:"data-streamer-in-the-portal",level:2},{value:"View data streams",id:"view-data-streams",level:3},{value:"Create data streams",id:"create-data-streams",level:3},{value:"Inspect and update data streams",id:"inspect-and-update-data-streams",level:3},{value:"Delete data streams",id:"delete-data-streams",level:3},{value:"Data Streamer API",id:"data-streamer-api",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Specification and documentation",id:"specification-and-documentation",level:3},{value:"Work with the Data Streamer API",id:"work-with-the-data-streamer-api",level:3},{value:"Create data streams",id:"create-data-streams-1",level:3},{value:"List data streams",id:"list-data-streams",level:3},{value:"Retrieve details",id:"retrieve-details",level:3},{value:"Update data streams",id:"update-data-streams",level:3},{value:"Delete data streams",id:"delete-data-streams-1",level:3}];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-the-data-streamer",children:"Use the Data Streamer"}),"\n",(0,n.jsxs)(t.p,{children:["You can manage data streams with the ",(0,n.jsx)(t.a,{href:"#data-streamer-in-the-portal",children:"emnify Portal"})," or the ",(0,n.jsx)(t.a,{href:"#data-streamer-api",children:"Data Streamer API"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"choose-which-interface-to-use",children:"Choose which interface to use"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"#data-streamer-in-the-portal",children:"emnify Portal"})}),(0,n.jsx)(t.br,{}),"\n","Managing data streams with the Portal is convenient when taking the first steps or if you don't expect configuration changes to be needed often."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"#data-streamer-api",children:"Data Streamer API"})}),(0,n.jsx)(t.br,{}),"\n","Integrating the Data Streamer API becomes a faster and more secure approach when multiple data streams need to be managed as part of the daily business or in the case of advanced operations (for example, seamless migration from one data stream to another without lags or duplicates)."]}),"\n",(0,n.jsx)(t.h2,{id:"data-streamer-in-the-portal",children:"Data Streamer in the Portal"}),"\n",(0,n.jsxs)(t.p,{children:["To ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/manage-data-streams",children:"manage your data streams"}),", ",(0,n.jsx)(t.a,{href:"https://portal.emnify.com/sign/",children:"log in to your emnify Portal account"}),".\nThen, navigate to the ",(0,n.jsx)(t.a,{href:"https://portal.emnify.com/integrations#data-streams",children:(0,n.jsx)(t.strong,{children:"Data Streams"})})," section of the ",(0,n.jsxs)(t.a,{href:"https://portal.emnify.com/integrations",children:[(0,n.jsx)(t.strong,{children:"Integrations"})," page"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"view-data-streams",children:"View data streams"}),"\n",(0,n.jsxs)(t.p,{children:["If there are no data streams configured, the ",(0,n.jsx)(t.a,{href:"https://portal.emnify.com/integrations#data-streams",children:(0,n.jsx)(t.strong,{children:"Data Streams"})})," panel displays all available ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/connection-types",children:"connection types"})," as tiles."]}),"\n",(0,n.jsx)(t.p,{children:"If you already have a data stream configured, the panel displays all existing streams, ordered by creation date (newest on the top).\nThis list view can be used to gain an overview of the current states of different data streams."}),"\n",(0,n.jsxs)(t.p,{children:["Data streams are marked as ",(0,n.jsx)(t.strong,{children:"Running"})," are properly operating.\nFailed streams exhibit an ",(0,n.jsx)(t.strong,{children:"Error"})," status.\nPaused streams are marked as ",(0,n.jsx)(t.strong,{children:"Paused"}),"."]}),"\n",(0,n.jsx)("img",{src:a(9297).Z,alt:""}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Details"})," button allows you to inspect the configuration of the specific stream.\nThe ",(0,n.jsx)(t.strong,{children:"Destination"})," configuration varies depending on the connection type."]}),"\n",(0,n.jsx)("img",{src:a(3411).Z,alt:""}),"\n",(0,n.jsx)(t.h3,{id:"create-data-streams",children:"Create data streams"}),"\n",(0,n.jsxs)(t.p,{children:["When no configured data streams are available, click ",(0,n.jsx)(t.strong,{children:"Add"})," on the preferred connection type tile.\nOtherwise, click ",(0,n.jsx)(t.strong,{children:"Add New Stream"})," at the top of the existing ",(0,n.jsx)(t.a,{href:"https://portal.emnify.com/integrations#data-streams",children:(0,n.jsx)(t.strong,{children:"Data Streams"})})," list.\nThis shows the connection type tiles. You can choose your preferred connection type and click ",(0,n.jsx)(t.strong,{children:"Add"}),"."]}),"\n",(0,n.jsx)("img",{src:a(8837).Z,alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Configure the source by selecting your desired ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/stream-types",children:"stream type"}),".\nOptionally, you can add event options for ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/manage-data-streams#filter-event-data-streams",children:"filtering on event types"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Provide the required settings to configure the destination."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["API keys and configuration parameters differ by connection type.\nInstructions for configuring each connection type are in the ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/integrations",children:"Available integrations"})," section."]})}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Create"})," and verify the status of your new stream."]}),"\n",(0,n.jsxs)(t.p,{children:["If everything goes well, the data stream is successfully created.\nThe configuration view closes, and you see the integration status shown as ",(0,n.jsx)(t.strong,{children:"Running"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"If the configuration is invalid, a warning displays along with an error message indicating the cause of the problem.\nIf this happens, the stream isn't created and you must correct the configuration."})}),"\n",(0,n.jsx)(t.h3,{id:"inspect-and-update-data-streams",children:"Inspect and update data streams"}),"\n",(0,n.jsxs)(t.p,{children:["With the ",(0,n.jsx)(t.strong,{children:"Details"})," button on the Data Stream tiles, you can inspect the configuration and update the ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/manage-data-streams#filter-event-data-streams",children:"filters for event data streams"}),"."]}),"\n",(0,n.jsx)("img",{src:a(5063).Z,alt:""}),"\n",(0,n.jsx)(t.h3,{id:"delete-data-streams",children:"Delete data streams"}),"\n",(0,n.jsxs)(t.p,{children:["To permanently delete a data stream, click the trash bin icon near the ",(0,n.jsx)(t.strong,{children:"Details"})," button."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"You\u2019ll need to confirm this action."})}),"\n",(0,n.jsx)(t.h2,{id:"data-streamer-api",children:"Data Streamer API"}),"\n",(0,n.jsxs)(t.p,{children:["You can manage your data streams using the emnify Data Streamer API.\nAvailable entry points are listed under the ",(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations",children:"Integrations section of the emnify REST API reference"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can find detailed information on the Data Streamer data properties and compatibility notes in the ",(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/event.html",children:"Data Streamer API Reference"})," in the ",(0,n.jsx)(t.em,{children:"emnify System Documentation"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(t.p,{children:"To use the emnify REST API, you need to authenticate with an authentication token.\nemnify uses JWTs as the authentication token."}),"\n",(0,n.jsx)(t.p,{children:"Each integration also requires credentials to verify that the Data Streamer has permission to write data to that service."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsxs)(t.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:["Getting Started guide in the ",(0,n.jsx)(t.em,{children:"emnify REST API Documentation"})]})," provides step-by-step instructions for retrieving this token."]})}),"\n",(0,n.jsx)(t.h3,{id:"specification-and-documentation",children:"Specification and documentation"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/rest",children:"emnify REST API"})," is based on the OpenAPI Specification OAS3.\nThere's also ",(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html",children:"interactive API documentation"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Prior OpenAPI knowledge isn't necessary for working with the emnify API.\nNevertheless, ",(0,n.jsx)(t.a,{href:"https://oai.github.io/Documentation/specification.html",children:"understanding how an OpenAPI Specification is structured"})," could help you navigate the documentation."]})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/data-streamer.html",children:"Data Streamer reference page"})," in the ",(0,n.jsx)(t.em,{children:"emnify REST API Documentation"})," provides details about the data structure and common elements you'll encounter while working with the Data Streamer API."]}),"\n",(0,n.jsx)(t.h3,{id:"work-with-the-data-streamer-api",children:"Work with the Data Streamer API"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["API keys and configuration parameters differ by ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/connection-types",children:"connection type"}),".\nDetails on setting up, updating, or deleting integrations are in the ",(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations",children:"emnify API reference"}),".\nIt lists all entry points for managing data streams programmatically and contains examples of the available connection types and filtering options."]})}),"\n",(0,n.jsx)(t.p,{children:"The following entry points are available for managing data streams:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Entrypoint"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream"})}),(0,n.jsx)(t.td,{children:"List data streams."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/{data_stream_id}"})}),(0,n.jsx)(t.td,{children:"Retrieve detailed information of a data stream by ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"POST"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream"})}),(0,n.jsx)(t.td,{children:"Create a data stream."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"PATCH"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/{data_stream_id}"})}),(0,n.jsx)(t.td,{children:"Update a data stream by ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"POST"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/{data_stream_id}/restart"})}),(0,n.jsx)(t.td,{children:"Restart a data stream by ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"DELETE"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/{data_stream_id}"})}),(0,n.jsx)(t.td,{children:"Delete a data stream by ID."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The following lookup entry points are available for retrieving possible configuration options:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Entrypoint"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/status"})}),(0,n.jsx)(t.td,{children:"List possible data stream statuses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/connection_type"})}),(0,n.jsx)(t.td,{children:"List possible data stream connection types."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/type"})}),(0,n.jsx)(t.td,{children:"List possible data stream types."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/v2/data_stream/filter_field_type"})}),(0,n.jsx)(t.td,{children:"List possible data stream filter fields."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-data-streams-1",children:"Create data streams"}),"\n",(0,n.jsxs)(t.p,{children:["Once authenticated, users can create data streams by sending ",(0,n.jsx)(t.code,{children:"POST"})," requests to ",(0,n.jsx)(t.code,{children:"/api/v2/data_stream"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"An example cURL to create a data stream would look like the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://cdn.emnify.net/api/v2/data_stream" \\\n-H "accept: */*" \\\n-H "Authorization: Bearer AuthToken" \\\n-H "Content-Type: application/json" \\\n-d \'{"data_stream_type":...\'\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The request body (set using the ",(0,n.jsx)(t.code,{children:"-d"})," flag in cURL) configures the data stream's parameters."]}),"\n",(0,n.jsxs)(t.p,{children:["The following JSON request body example shows how to create a stream of usage data records with the ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/integrations#webhook",children:"Webhook integration"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "data_stream_type": {\n    "id": 1 // usage data\n  },\n  "destination": {\n    "connection_type": "RestAPI",\n    "credentials": {\n      "url": "https://my-application-server/servicebus.net",\n      "method": "POST", // HTTP method expected by the application server for pushing data records\n      "headers": [\n        // can be used for authentication or\n        // other mapping functionality on the application server side\n        "my_custom_header_1:value1",\n        "my_custom_header_2:value2"\n      ]\n    },\n    "format": "Json" // further format options will be added in future\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can also create an event stream with ",(0,n.jsx)(t.a,{href:"/multicloud-data-streamer/integrations#amazon-kinesis-data-streams",children:"AWS Kinesis integration"})," and enabled filtering, like the following JSON request body example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "data_stream_type": {\n    "id": 2 // events\n  },\n  "destination": {\n    "connection_type": "AwsKinesis",\n    "credentials": {\n      "region": "af-south-1",\n      "stream_name": "demo-stream",\n      "role_arn": "arn:aws:iam:1234567890:role/role_for_kinesis_data_stream"\n    },\n    "format": "Json"\n  },\n  "filters": [\n    {\n      "field": "event_type_id",\n      "value": [1, 2, 3]\n    },\n    {\n      "or": [\n        {\n          "field": "alert",\n          "value": true\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"API reference",type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/CreateDataStreamer",children:"Create data stream"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"list-data-streams",children:"List data streams"}),"\n",(0,n.jsxs)(t.p,{children:["You can list all data streams belonging to your organization by sending ",(0,n.jsx)(t.code,{children:"GET"})," requests to ",(0,n.jsx)(t.code,{children:"/api/v2/data_stream"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"An example cURL request to list data streams would look like the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://cdn.emnify.net/api/v2/data_stream" \\\n-H "accept: application/json"  \\\n-H "Authorization:Bearer AuthToken"\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"API reference",type:"note",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/ListDataStreamerV2s",children:"List data stream configurations of your organization"})})}),"\n",(0,n.jsx)(t.h3,{id:"retrieve-details",children:"Retrieve details"}),"\n",(0,n.jsxs)(t.p,{children:["Retrieving details of an existing data stream is possible by making a ",(0,n.jsx)(t.code,{children:"GET"})," request to ",(0,n.jsx)(t.code,{children:"/api/v2/data_stream/{data_stream_id}"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"data_stream_id"})," path parameter is the top-level ",(0,n.jsx)(t.code,{children:"id"})," property in each object returned by the ",(0,n.jsx)(t.a,{href:"#list-data-streams",children:"list data streams"})," request and is an ID that's unique for each data stream."]}),"\n",(0,n.jsxs)(t.p,{children:["An example cURL request to get detailed information for a data stream with an ID of ",(0,n.jsx)(t.code,{children:"123"})," would look like the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://cdn.emnify.net/api/v2/data_stream/123" \\\n-H "accept: application/json" \\\n-H "Authorization:Bearer AuthToken"\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"API reference",type:"note",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/GetDataStreamerByIdV2",children:"Get details on existing data stream"})})}),"\n",(0,n.jsx)(t.h3,{id:"update-data-streams",children:"Update data streams"}),"\n",(0,n.jsxs)(t.p,{children:["Authenticated users may update data streams belonging to their organization by making a ",(0,n.jsx)(t.code,{children:"PATCH"})," request to ",(0,n.jsx)(t.code,{children:"/api/v2/data_stream/{data_stream_id}"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"data_stream_id"})," path parameter is the top-level ",(0,n.jsx)(t.code,{children:"id"})," property in each object returned by the ",(0,n.jsx)(t.a,{href:"#list-data-streams",children:"list data streams"})," request and is an ID that's unique for each data stream."]}),"\n",(0,n.jsxs)(t.p,{children:["An example cURL request to update a data stream with an ID of ",(0,n.jsx)(t.code,{children:"123"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X PATCH "https://cdn.emnify.net/api/v2/data_stream/123" \\\n-H "accept: application/json" \\\n-H"Authorization: Bearer AuthToken" \\\n-H "Content-Type: application/json" \\-d \'{...}\'\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The request body (set using the ",(0,n.jsx)(t.code,{children:"-d"})," flag in cURL) configures the parameters of the data stream itself."]}),"\n",(0,n.jsx)(t.p,{children:"The following example shows how to pause a stream and erase any filters:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "status": {\n    "id": 2 // 1 = Running, 2 = Paused, 3 = Error, 4 = Pending\n  },\n  "filters": []\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"API reference",type:"note",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/PatchV2DataStream",children:"Modify existing data stream"})})}),"\n",(0,n.jsx)(t.h3,{id:"delete-data-streams-1",children:"Delete data streams"}),"\n",(0,n.jsxs)(t.p,{children:["Sending a ",(0,n.jsx)(t.code,{children:"DELETE"})," request to ",(0,n.jsx)(t.code,{children:"/api/v2/data_stream/{data_stream_id}"})," deletes the data stream with that ID."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"data_stream_id"})," path parameter is the top-level ",(0,n.jsx)(t.code,{children:"id"})," property in each object returned by the ",(0,n.jsx)(t.a,{href:"#list-data-streams",children:"list data streams"})," request and is an ID that's unique for each data stream."]}),"\n",(0,n.jsxs)(t.p,{children:["The following cURL request would then delete a data stream with an ID of ",(0,n.jsx)(t.code,{children:"123"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X DELETE "https://cdn.emnify.net/api/v2/data_stream/123" \\\n-H "accept: application/json" \\\n-H "Authorization: Bearer AuthToken"\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"API reference",type:"note",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Integrations/DeleteDataStreamerV2",children:"Delete existing data stream"})})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-details-events-filter-92318e8e6a8fe3fcd9e721c01eab3e36.png"},9297:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-status-568377dad256f3b637bc756473b0fed9.png"},8837:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-add-new-button-b61a5da0a834bd85bdb837fed3233310.png"},3411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-data-streams-details-usage-19c7a8019237bbf3a00e3b2f10947b54.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>i});var n=a(7294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);