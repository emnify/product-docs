---
description: How to store all events and data usage on AWS S3?
last_update: 
  date: 20-11-2023
pagination_next: null
pagination_prev: null
slug: /how-tos/configure-data-sms-limits
---

# How to store all events and data usage on AWS S3?

During this webinar we show how to stream all available events and data usage available on the EUI to an AWS S3 bucket using the EMnify Data Streamer (EDS).
This video is the second part of the Introduction to the EMnify Data Streamer.

:::info
Update: the AWS authentication has been updated since this webinar was posted. 
Users no longer need to provide an AWS access key and Secret key.
To check the new authentication method please download our Manual.
To get more input on the "trust relationship role" visit our API documentation.
:::

### 1. Create S3 Bucket
Log in your AWS account and create an S3 bucket.
No specific permissions are required so all public access can remain blocked.
When your bucket is created, it can look as such:

TODO: INSERT IMAGE


### 2. Create a Data Streamer
In the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-emnify-platform), click on the technical configuration icon on the top right hand corner:
TODO: INSERT IMAGE

And click on "+ Add Data Streamer". Choose "AWS S3" in the "API Type" drop-down menu.
To find your AWS access and Secret key, visit your IAM section in your AWS account.
TODO: INSERT IMAGE

If everything worked well, the remote status of your data streamer should be "200" and CSV files should be streamed to your S3 bucket.
TODO: INSERT IMAGE

### 3. Filter events
In the EUI, you can filter the types of events you wish to store on your S3 buck.et by clicking on the filter icon.
TODO: INSERT IMAGE
