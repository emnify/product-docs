---
description: Data streamer integrations and links to step-by-step guides
---

# Available integrations

## Amazon

### Amazon Kinesis Data Streams

Amazon Kinesis Data Streams allows for collecting and processing large streams of event and usage data records in real time.
Applications created on Amazon Kinesis Data Streams can run on Amazon EC2 instances.
Typical uses are to send processed records to dashboards, generate alerts, dynamically change pricing or advertising strategies, or send data to other Amazon services.

:::tip Step-by-step guide
[emnify Data Streamer integration into AWS Kinesis](https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-kinesis)
:::

### Amazon S3

Amazon S3 is an object storage service that stores the raw event and usage data as it arrives from a data stream.
Shortly after creating the stream, a CSV file containing your event or usage data records is uploaded to the S3 bucket.
The CSV files can then be sent to other Amazon services (e.g., Amazon QuickSight) or consumed by a third-party analytics or business intelligence tool for generating insights.

:::tip Step-by-step guide
[emnify Data Streamer Integration into AWS S3](https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-s3)
:::

#### S3 Security Guidelines

Event data sent via data streams may include usernames, email addresses, and other data which can identify users or platform resources (depending on the event filtering applied).
Therefore, you should treat the delivered files as containing sensitive information.
Precautions should be taken to ensure that the event and usage data in the destination S3 buckets are adequately secured.

The following steps are the minimum security requirements for storing this data in S3:

1. Ensure that the S3 bucket isn't publicly accessible.   
   You can block public access in the **Permissions** tab of the S3 bucket:
   ![Screenshot from a test S3 bucket in the AWS console. The "Permissions" tab is active at the top. Underneath, "Block public access" is selected. There is a description about the block public access bucket settings, followed by a panel indicating that "Block all public access" is marked as "On." There is also an "Edit" button in this panel.](assets/aws-s3-bucket-permissions-blocking-public-access.png)
1. Server-side encryption can be enabled for each bucket, and S3 will encrypt objects before they are saved to disk.
   Decryption performs when downloading the objects.  
   You can enable this in the **Properties** tab of the S3 bucket:
   ![Screenshot from the same test S3 bucket. The "Properties" tab is active, showing various available properties and their status. In this screenshot, all are disabled except "Default encryption," which has "AES-256" as the selected value. A modal is visible, prompting you to "View bucket policy."](assets/aws-s3-bucket-properties-encryption.png)

### Amazon QuickSight

Amazon QuickSight allows you to create and publish interactive business intelligence dashboards that include machine learning-powered insights into your event and usage data.
Once you have configured your data stream and are storing event and usage data in Amazon S3, you can use AWS QuickSight to view and analyze them.

:::tip Step-by-step guide
[How to analyze emnify usage data and events in AWS QuickSight?](https://support.emnify.com/hc/en-us/articles/360010604820-How-to-analyze-emnify-usage-data-and-events-in-AWS-Quicksight-)

**_Warning: This guide uses a legacy version of the [emnify Portal](https://portal.emnify.com/)._**
:::

## Azure

### Azure Event Hubs

Azure Event Hubs is a fully managed, real-time data ingestion service that can receive and process millions of event or usage data records per second.
Data sent to an event hub can be transformed and stored using any real-time analytics provider or batching/storage adapters, such as Microsoft Power BI or Azure Time Series Insights.

:::tip Step-by-step guide
[emnify Data Streamer integration into Azure Event Hub](https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-azure-event-hub)
:::

### Microsoft Power BI

Microsoft Power BI is a unified, scalable platform for self-service and enterprise business intelligence (BI) that allows you to analyze, visualize, share, and promote your connectivity metadata insights across your organization.

:::tip Step-by-step guide
[emnify Data Streamer integration for Power BI](https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-power-bi)
:::

### Azure Time Series Insights

Azure Time Series Insights is an analytics platform to monitor, analyze, and visualize your data.
It allows you to use time series data insights and interactive analytics to accelerate connectivity metadata use throughout your organization and turn your event and usage data into actionable insights.

:::tip Step-by-step guide
[emnify Data Streamer integration for Azure Time Series Classic](https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-azure-time-series-classic)
:::

## Google Cloud

### Google Cloud Pub/Sub

Pub/Sub is Google’s messaging middleware that allows you to collect and process your event and usage data in real time.
It can also display and analyze data with other Google services, such as Google BigQuery.

:::tip Step-by-step guide
[emnify Data Streamer integration for Google Cloud Pub/Sub](https://www.emnify.com/integration-guides/datastreamer-integration-into-google-cloud-pubsub)
:::

### Google Cloud BigQuery

Google Cloud BigQuery is a data warehouse that enables you to query your connectivity metadata in real time to gain insights and predict business outcomes.

:::tip Step-by-step guide
[emnify Data Streamer integration for Google BigQuery](https://www.emnify.com/integration-guides/datastreamer-integration-google-bigquery)
:::

## Keen

Keen is a managed event streaming platform that enables you to collect, store, query, and present real-time connectivity metadata without writing any code.
With built-in data analytics, you can build queries and display the metrics via API to troubleshoot your IoT solution.

:::tip Step-by-step guide
[emnify Data Streamer integration for Keen.io](https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-keen-io)
:::

## Datadog

Datadog is a real-time monitoring and analytics service for cloud-scale applications, servers, databases, and services.
In conjunction with the emnify Data Streamer, it allows you to collect and analyze usage metrics for your endpoints and SIM cards.
You can also create dashboards and trigger alerts on specific events or situations.

:::tip Step-by-step guide
[emnify Data Streamer integration for Datadog](https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-datadog)
:::

## Webhook

The data streamer may also send usage and event data in JSON format to a configurable, user-specified webhook URL.
In this case, users provide an application that consumes HTTP POST requests sent from the emnify system.

This is the most flexible method of processing a data stream. It allows any custom implementation of analytics, reporting, or a pipeline of tools to process usage and event data.

To use the Webhook data stream, you must provide a web service that listens for messages from the emnify Data Streamer.

The emnify system will send HTTP POST requests with JSON data payloads when event or usage data records occur.

When using the emnify Webhook in bulk mode, each HTTP POST will include a JSON collection instead of an individual event or usage data record.
The HTTP POST requests are sent at intervals and should be used if the receiving system needs to process multiple events in bulk instead of individual events as they occur.

### Make (formerly Integromat)

[Make](https://www.make.com/en) (formerly Integromat) is a low-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata.

:::tip Step-by-step guide
[Automate Business Processes with Multi-Cloud Data Streamer and Make](https://www.emnify.com/integration-guides/emnify-mcds-integromat-integration)

**_Warning: This guide still needs to be updated to reflect the new naming._**
:::

### Automate.io

Automate.io is a no-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata.

:::tip Step-by-step guide
[How to receive email notifications using Automate.io](https://www.emnify.com/integration-guides/how-to-receice-email-notifications-using-automate.io)
:::
