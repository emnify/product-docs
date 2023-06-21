---
description: Set up, filter, pause, or delete data streams with the emnify multicloud Data Streamer
slug: /emnify-multicloud-data-streamer-manage-data-streams
---

# Manage data streams

## Set up a data stream

Each [connection type](/emnify-multicloud-data-streamer-connection-types) requires specific credentials to ensure that the data streamer has permission to write data to that service. 
API keys and configuration parameters differ by connection type.

During creation, you can define the connection type and the corresponding destination settings, the stream type, and the filtering.

## Filter event data streams

The data streamer can apply filtering for event data streams based on event types. 

By default, the data stream has no filters and streams all events. You can apply multiple filters to each stream to create more granular and targeted data for analysis. 
The data stream will only contain events matching the selected event types.

## Pause or delete a data stream

You can pause a stream (e.g., if you want to take down the receiving server for maintenance) and resume later when convenient by activating the data stream again via your preferred interface. 
The event and usage data is available for 7 days after creation.

If you want to remove a data stream permanently, you need to delete it.
