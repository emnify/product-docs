# Integration Guides

## Amazon

### Amazon Kinesis Data Streams

Amazon Kinesis Data Streams allows for collecting and processing large streams of event and usage data records in real-time. 
Applications created on Amazon Kinesis Data Streams can run on Amazon EC2 instances. 
Typical uses are to send processed records to dashboards, generate alerts, dynamically change pricing or advertising strategies, or send data to other Amazon services.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration into AWS Kinesis]

### Amazon S3

Amazon S3 is an object storage service that stores the raw event and usage data as it arrives from a data stream. 
Shortly after creating the stream, a CSV file containing your event or usage data records is uploaded to the S3 bucket. 
The CSV files can then be sent to other Amazon services (e.g., Amazon QuickSight) or consumed by a third-party analytics or business intelligence tool for generating insights.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer Integration into AWS S3]

### S3 Security Guidelines

Event data sent via data streams may include usernames, email addresses, and other data which can identify users or platform resources (depending on the event filtering applied). 
Therefore, you should treat the delivered files as containing sensitive information. 
Precautions should be taken to ensure that the event and usage data in the destination S3 buckets are adequately secured.

The following steps are the minimum security requirements for storing this data in S3:

1. Ensure that the S3 bucket isn't publicly accessible. You can block public access in the ‘Permissions’ tab of the S3 bucket:
<!-- SCREENSHOT -->
1. Server-side encryption can be enabled for each bucket, and S3 will encrypt objects before they are saved to disk. 
Decryption performs when downloading the objects. 
You can enable this in the ‘Properties’ tab of the S3 bucket:
<!-- SCREENSHOT -->

<!-- TODO: Check for guide link -->

### Amazon QuickSight

Amazon QuickSight allows you to create and publish interactive business intelligence dashboards that include machine learning-powered insights into your event and usage data. 
Once you have configured your data stream and are storing event and usage data in Amazon S3, you can use AWS QuickSight to view and analyze them.

<!-- TODO: Add guide link -->

More information on analyzing and visualizing your event and usage data is available in this blog article: [How to analyze emnify usage data and events in AWS QuickSight?]

## Azure

### Azure Event Hubs

Azure Event Hubs is a fully managed, real-time data ingestion service that can receive and process millions of event or usage data records per second. 
Data sent to an event hub can be transformed and stored using any real-time analytics provider or batching/storage adapters, such as Microsoft Power BI or Azure Time Series Insights.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration into Azure Event Hub]

### Microsoft Power BI

Microsoft Power BI is a unified, scalable platform for self-service and enterprise business intelligence (BI) that allows you to analyze, visualize, share, and promote your connectivity metadata insights across your organization.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration for Power BI]

### Azure Time Series Insights

Azure Time Series Insights is an analytics platform to monitor, analyze, and visualize your data. 
It allows you to use time series data insights and interactive analytics to accelerate connectivity metadata use throughout your organization and turn your event and usage data into actionable insights.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration for Azure Time Series Classic]

## Google Cloud

### Google Cloud Pub/Sub

Pub/Sub is Google’s messaging middleware that allows you to collect and process your event and usage data in real-time. 
It can also display and analyze data with other Google services, such as Google BigQuery.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration for Google Cloud Pub/Sub]

### Google Cloud BigQuery

Google Cloud BigQuery is a data warehouse that enables you to query your connectivity metadata in real-time to gain insights and predict business outcomes.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration for Google BigQuery]

## Keen

Keen is a managed event streaming platform that enables you to collect, store, query, and present real-time connectivity metadata without writing any code. 
With built-in data analytics, you can build queries and display the metrics via API to troubleshoot your IoT solution.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration for Keen.io]

## Datadog

Datadog is a real-time monitoring and analytics service for cloud-scale applications, servers, databases, and services. 
In conjunction with the emnify Data Streamer, it allows you to collect and analyze usage metrics for your endpoints and SIM cards. 
You can also create dashboards and trigger alerts on specific events or situations.

<!-- TODO: Add guide link -->

**Integration guide**: [emnify Data Streamer integration for Datadog]

## Webhook

The data streamer may also send usage and event data in JSON format toward a configurable URL specified by the user. 
In this case, users provide an application that consumes HTTP POST requests sent from the emnify platform.

This is the most flexible method of processing a data stream. It allows any custom implementation of analytics, reporting, or a pipeline of tools to process usage and event data.

To use the Webhook data stream, you must provide a web service that listens for messages from the emnify Data Streamer.

The emnify platform will send HTTP POST requests with JSON data payloads when event or usage data records occur.

When using the emnify Webhook in bulk mode, each HTTP POST will include a JSON collection instead of an individual event or usage data record. 
The HTTP POST requests are sent at intervals and should be used if the receiving system needs to process multiple events in bulk instead of individual events as they occur.

<!-- TODO: Add guide link -->

**Integration guide**: []

### Integromat

Integromat is a low-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata.

<!-- TODO: Add guide link -->

**Integration guide**: [Automate Business Processes with Multi-Cloud Data Streamer and Integromat]

### Automate.io

Automate.io is a no-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata.

<!-- TODO: Add guide link -->

**Integration guide**: [How to receive email notifications using Automate.io]
