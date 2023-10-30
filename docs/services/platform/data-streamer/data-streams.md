---
description: Set up, filter, pause, or delete data streams with the emnify multicloud Data Streamer
last_update: 
  date: 12-31-2022
slug: /multicloud-data-streamer/manage-data-streams
---

# Data streams

## Manage data streams

### Set up a data stream

Each [connection type](/multicloud-data-streamer/connection-types) requires specific credentials to ensure that the Data Streamer has permission to write data to that service.
API keys and configuration parameters differ by connection type.

During creation, you can define the connection type and the corresponding destination settings, the stream type, and the filtering.

### Filter event data streams

The Data Streamer can apply filtering for event data streams based on event types.

By default, the data stream has no filters and streams all events. You can apply multiple filters to each stream to create more granular and targeted data for analysis.
The data stream only contains events matching the selected event types.

### Pause or delete a data stream

You can pause a stream (for example, if you want to take down the receiving server for maintenance) and resume later when convenient by activating the data stream again via your preferred interface.
The event and usage data is available for seven days after creation.

If you want to remove a data stream permanently, you need to delete it.


## More information 
[In this video](https://youtu.be/FE8MUwNLe9k) the EMnify Data Streamer is introduced and shows how this product gives full visibility on IoT Data.
The EDS is used to stream all events and usage data generated and visible in the EUI to third party tools.

To discover how to stream all events to AWS S3, please visit [How to store all events and data usage on AWS S3?](https://support.emnify.com/hc/en-us/articles/360010214460).


