# Connection Types

The emnify Data Streamer allows you to integrate real-time connectivity data streams of your devices and SIMs into your third-party cloud services and/or business systems. 

Using this data, you can build operational dashboards that visualize device, network, and application information side-by-side. 

## Available data streamer integrations

<!-- TODO: Add links -->

- Amazon Kinesis Data Streams
- Amazon S3
- Azure Event Hubs
- Google Cloud Pub/Sub
- Keen
- Datadog
- Webhook (generic RESTful API)

You can use any integration to create multiple independent data streams and operate them in parallel. 
Each data stream can be configured to push data to a separate platform for consumption and processing. 

For example, one stream may be connected to a network monitoring system, another can connect to a data analytics platform, and a third can simultaneously sync with S3 for archiving.
