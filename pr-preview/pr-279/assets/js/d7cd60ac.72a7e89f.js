"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[9612],{7814:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=i(5893),n=i(1151);const s={description:"List of available third-party integrations for the emnify multicloud Data streamer and links to step-by-step implementation guides",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/integrations"},o="Available integrations",r={id:"services/platform/data-streamer/integrations",title:"Available integrations",description:"List of available third-party integrations for the emnify multicloud Data streamer and links to step-by-step implementation guides",source:"@site/docs/services/platform/data-streamer/integrations.md",sourceDirName:"services/platform/data-streamer",slug:"/multicloud-data-streamer/integrations",permalink:"/pr-preview/pr-279/multicloud-data-streamer/integrations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1672444800,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{description:"List of available third-party integrations for the emnify multicloud Data streamer and links to step-by-step implementation guides",last_update:{date:"12-31-2022"},slug:"/multicloud-data-streamer/integrations"},sidebar:"mainDocsSidebar",previous:{title:"Use the Data Streamer",permalink:"/pr-preview/pr-279/multicloud-data-streamer/usage"},next:{title:"emnify system events",permalink:"/pr-preview/pr-279/system-events"}},l={},d=[{value:"Amazon",id:"amazon",level:2},{value:"Amazon Kinesis Data Streams",id:"amazon-kinesis-data-streams",level:3},{value:"Amazon S3",id:"amazon-s3",level:3},{value:"S3 Security Guidelines",id:"s3-security-guidelines",level:4},{value:"Amazon QuickSight",id:"amazon-quicksight",level:3},{value:"Azure",id:"azure",level:2},{value:"Azure Event Hubs",id:"azure-event-hubs",level:3},{value:"Microsoft Power BI",id:"microsoft-power-bi",level:3},{value:"Azure Time Series Insights",id:"azure-time-series-insights",level:3},{value:"Google Cloud",id:"google-cloud",level:2},{value:"Google Cloud Pub/Sub",id:"google-cloud-pubsub",level:3},{value:"Google Cloud BigQuery",id:"google-cloud-bigquery",level:3},{value:"Keen",id:"keen",level:2},{value:"Datadog",id:"datadog",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Make (formerly Integromat)",id:"make-formerly-integromat",level:3},{value:"Automate.io",id:"automateio",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"available-integrations",children:"Available integrations"}),"\n",(0,a.jsx)(t.h2,{id:"amazon",children:"Amazon"}),"\n",(0,a.jsx)(t.h3,{id:"amazon-kinesis-data-streams",children:"Amazon Kinesis Data Streams"}),"\n",(0,a.jsx)(t.p,{children:"Amazon Kinesis Data Streams allows for collecting and processing large streams of event and usage data records in real time.\nApplications created on Amazon Kinesis Data Streams can run on Amazon EC2 instances.\nTypical uses are to send processed records to dashboards, generate alerts, dynamically change pricing or advertising strategies, or send data to other Amazon services."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-kinesis",children:"emnify Data Streamer integration into AWS Kinesis"})})}),"\n",(0,a.jsx)(t.h3,{id:"amazon-s3",children:"Amazon S3"}),"\n",(0,a.jsx)(t.p,{children:"Amazon S3 is an object storage service that stores the raw event and usage data as it arrives from a data stream.\nShortly after creating the stream, a CSV file containing your event or usage data records is uploaded to the S3 bucket.\nThe CSV files can then be sent to other Amazon services (for example, Amazon QuickSight) or consumed by a third-party analytics or business intelligence tool for generating insights."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-s3",children:"emnify Data Streamer Integration into AWS S3"})})}),"\n",(0,a.jsx)(t.h4,{id:"s3-security-guidelines",children:"S3 Security Guidelines"}),"\n",(0,a.jsx)(t.p,{children:"Event data sent via data streams may include usernames, email addresses, and other data which can identify users or platform resources (depending on the event filtering applied).\nTherefore, you should treat the delivered files as containing sensitive information.\nPrecautions should be taken to ensure that the event and usage data in the destination S3 buckets are adequately secured."}),"\n",(0,a.jsx)(t.p,{children:"The following steps are the minimum security requirements for storing this data in S3:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Ensure that the S3 bucket isn't publicly accessible.",(0,a.jsx)(t.br,{}),"\n","You can block public access in the ",(0,a.jsx)(t.strong,{children:"Permissions"})," tab of the S3 bucket:\n",(0,a.jsx)(t.img,{alt:"Screenshot from a test S3 bucket in the AWS console. The &quot;Permissions&quot; tab is active at the top. Underneath, &quot;Block public access&quot; is selected. There is a description about the block public access bucket settings, followed by a panel indicating that &quot;Block all public access&quot; is marked as &quot;On.&quot; There is also an &quot;Edit&quot; button in this panel.",src:i(7).Z+"",width:"1200",height:"758"})]}),"\n",(0,a.jsxs)(t.li,{children:["Server-side encryption can be enabled for each bucket, and S3 encrypts objects before they're saved to disk.\nDecryption performs when downloading the objects.",(0,a.jsx)(t.br,{}),"\n","You can enable this in the ",(0,a.jsx)(t.strong,{children:"Properties"})," tab of the S3 bucket:\n",(0,a.jsx)(t.img,{alt:"Screenshot from the same test S3 bucket. The &quot;Properties&quot; tab is active, showing various available properties and their status. In this screenshot, all are disabled except &quot;Default encryption,&quot; which has &quot;AES-256&quot; as the selected value. A modal is visible, prompting you to &quot;View bucket policy.&quot;",src:i(8656).Z+"",width:"1900",height:"770"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"amazon-quicksight",children:"Amazon QuickSight"}),"\n",(0,a.jsx)(t.p,{children:"Amazon QuickSight allows you to create and publish interactive business intelligence dashboards that include machine learning-powered insights into your event and usage data.\nOnce you have configured your data stream and are storing event and usage data in Amazon S3, you can use AWS QuickSight to view and analyze them."}),"\n",(0,a.jsxs)(t.admonition,{title:"step-by-step guide",type:"tip",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://support.emnify.com/hc/en-us/articles/360010604820-How-to-analyze-emnify-usage-data-and-events-in-AWS-Quicksight-",children:"How to analyze emnify usage data and events in AWS QuickSight?"})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsxs)(t.em,{children:["Warning: this guide uses a legacy version of the ",(0,a.jsx)(t.a,{href:"https://portal.emnify.com/",children:"emnify Portal"}),"."]})})})]}),"\n",(0,a.jsx)(t.h2,{id:"azure",children:"Azure"}),"\n",(0,a.jsx)(t.h3,{id:"azure-event-hubs",children:"Azure Event Hubs"}),"\n",(0,a.jsx)(t.p,{children:"Azure Event Hubs is a fully managed, real-time data ingestion service that can receive and process millions of event or usage data records per second.\nData sent to an event hub can be transformed and stored using any real-time analytics provider or batching/storage adapters, such as Microsoft Power BI or Azure Time Series Insights."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-azure-event-hub",children:"emnify Data Streamer integration into Azure Event Hub"})})}),"\n",(0,a.jsx)(t.h3,{id:"microsoft-power-bi",children:"Microsoft Power BI"}),"\n",(0,a.jsx)(t.p,{children:"Microsoft Power BI is a unified, scalable platform for self-service and enterprise business intelligence (BI) that allows you to analyze, visualize, share, and promote your connectivity metadata insights across your organization."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-power-bi",children:"emnify Data Streamer integration for Power BI"})})}),"\n",(0,a.jsx)(t.h3,{id:"azure-time-series-insights",children:"Azure Time Series Insights"}),"\n",(0,a.jsx)(t.p,{children:"Azure Time Series Insights is an analytics platform to monitor, analyze, and visualize your data.\nIt allows you to use time series data insights and interactive analytics to accelerate connectivity metadata use throughout your organization and turn your event and usage data into actionable insights."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-azure-time-series-classic",children:"emnify Data Streamer integration for Azure Time Series Classic"})})}),"\n",(0,a.jsx)(t.h2,{id:"google-cloud",children:"Google Cloud"}),"\n",(0,a.jsx)(t.h3,{id:"google-cloud-pubsub",children:"Google Cloud Pub/Sub"}),"\n",(0,a.jsx)(t.p,{children:"Pub/Sub is Google\u2019s messaging middleware that allows you to collect and process your event and usage data in real time.\nIt can also display and analyze data with other Google services, such as Google BigQuery."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/datastreamer-integration-into-google-cloud-pubsub",children:"emnify Data Streamer integration for Google Cloud Pub/Sub"})})}),"\n",(0,a.jsx)(t.h3,{id:"google-cloud-bigquery",children:"Google Cloud BigQuery"}),"\n",(0,a.jsx)(t.p,{children:"Google Cloud BigQuery is a data warehouse that enables you to query your connectivity metadata in real time to gain insights and predict business outcomes."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/datastreamer-integration-google-bigquery",children:"emnify Data Streamer integration for Google BigQuery"})})}),"\n",(0,a.jsx)(t.h2,{id:"keen",children:"Keen"}),"\n",(0,a.jsx)(t.p,{children:"Keen is a managed event streaming platform that enables you to collect, store, query, and present real-time connectivity metadata without writing any code.\nWith built-in data analytics, you can build queries and display the metrics via API to troubleshoot your IoT solution."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-keen-io",children:"emnify Data Streamer integration for Keen.io"})})}),"\n",(0,a.jsx)(t.h2,{id:"datadog",children:"Datadog"}),"\n",(0,a.jsx)(t.p,{children:"Datadog is a real-time monitoring and analytics service for cloud-scale applications, servers, databases, and services.\nIn conjunction with the emnify Data Streamer, it allows you to collect and analyze usage metrics for your endpoints and SIM cards.\nYou can also create dashboards and trigger alerts on specific events or situations."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-datadog",children:"emnify Data Streamer integration for Datadog"})})}),"\n",(0,a.jsx)(t.h2,{id:"webhook",children:"Webhook"}),"\n",(0,a.jsx)(t.p,{children:"The Data Streamer may also send usage and event data in JSON format to a configurable, user-specified webhook URL.\nIn this case, users provide an application that consumes HTTP POST requests sent from the emnify system."}),"\n",(0,a.jsx)(t.p,{children:"This is the most flexible method of processing a data stream. It allows any custom implementation of analytics, reporting, or a pipeline of tools to process usage and event data."}),"\n",(0,a.jsx)(t.p,{children:"To use the Webhook data stream, you must provide a web service that listens for messages from the emnify Data Streamer."}),"\n",(0,a.jsx)(t.p,{children:"The emnify system sends HTTP POST requests with JSON data payloads when event or usage data records occur."}),"\n",(0,a.jsx)(t.p,{children:"When using the emnify Webhook in bulk mode, each HTTP POST includes a JSON collection instead of an individual event or usage data record.\nThe HTTP POST requests are sent at intervals and should be used if the receiving system needs to process multiple events in bulk instead of individual events as they occur."}),"\n",(0,a.jsx)(t.h3,{id:"make-formerly-integromat",children:"Make (formerly Integromat)"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.make.com/en",children:"Make"})," (formerly Integromat) is a low-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata."]}),"\n",(0,a.jsxs)(t.admonition,{title:"step-by-step guide",type:"tip",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/emnify-mcds-integromat-integration",children:"Automate Business Processes with Multi-Cloud Data Streamer and Make"})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"Warning: this guide still needs to be updated to reflect the new naming."})})})]}),"\n",(0,a.jsx)(t.h3,{id:"automateio",children:"Automate.io"}),"\n",(0,a.jsx)(t.p,{children:"Automate.io is a no-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata."}),"\n",(0,a.jsx)(t.admonition,{title:"step-by-step guide",type:"tip",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.emnify.com/integration-guides/how-to-receice-email-notifications-using-automate.io",children:"How to receive email notifications using Automate.io"})})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},7:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aws-s3-bucket-permissions-blocking-public-access-7f72fbfb55072a5723781e76b07c17ed.png"},8656:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aws-s3-bucket-properties-encryption-dc7498519948d4bea89b5dd14c1104d5.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var a=i(7294);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);