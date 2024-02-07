---
description: Manage data streams with the emnify Portal or REST API
last_update:
  date: 01-17-2024
slug: /multicloud-data-streamer/usage
---

# Use the Data Streamer

You can manage data streams with the [emnify Portal](#data-streamer-in-the-emnify-portal) or the [Data Streamer API](#data-streamer-api).

## Choose which interface to use

**[emnify Portal](#data-streamer-in-the-emnify-portal)**  
Managing data streams with the Portal is convenient when taking the first steps or if you don't expect configuration changes to be needed often.

**[Data Streamer API](#data-streamer-api)**  
Integrating the Data Streamer API becomes a faster and more secure approach when multiple data streams need to be managed as part of the daily business or in the case of advanced operations (for example, seamless migration from one data stream to another without lags or duplicates).

## Data Streamer in the emnify Portal

To [manage your data streams](/multicloud-data-streamer/manage-data-streams), [log in to your emnify Portal account](https://portal.emnify.com/sign/).
Then, navigate to the [**Data Streams**](https://portal.emnify.com/integrations#data-streams) section of the [**Integrations** page](https://portal.emnify.com/integrations).

### View data streams

If there are no data streams configured, the [**Data Streams**](https://portal.emnify.com/integrations#data-streams) panel displays all available [connection types](/multicloud-data-streamer/connection-types) as tiles.

If you already have a data stream configured, the panel displays all existing streams, ordered by creation date (newest on the top).
This list view can be used to gain an overview of the current states of different data streams.

Data streams are marked as **Running** are properly operating.
Failed streams exhibit an **Error** status.
Paused streams are marked as **Paused**.

<img
  src={require('../assets/portal-integrations-data-streams-status.png').default}
  alt=""
/>

The **Details** button allows you to inspect the configuration of the specific stream.
The **Destination** configuration varies depending on the connection type.

<img
  src={require('./assets/portal-integrations-data-streams-details-usage.png').default}
  alt=""
/>

### Create data streams

When no configured data streams are available, click **Add** on the preferred connection type tile.
Otherwise, click **Add New Stream** at the top of the existing [**Data Streams**](https://portal.emnify.com/integrations#data-streams) list.
This shows the connection type tiles. You can choose your preferred connection type and click **Add**.

<img
  src={require('./assets/portal-integrations-data-streams-add-new-button.png').default}
  alt=""
/>

Configure the source by selecting your desired [stream type](/multicloud-data-streamer/stream-types).
Optionally, you can add event options for [filtering on event types](/multicloud-data-streamer/manage-data-streams#filter-event-data-streams).

Provide the required settings to configure the destination.

:::info
API keys and configuration parameters differ by connection type.
Instructions for configuring each connection type are in the [Available integrations](/multicloud-data-streamer/integrations) section.
:::

Click **Create** and verify the status of your new stream.

If everything goes well, the data stream is successfully created.
The configuration view closes, and you see the integration status shown as **Running**.

:::warning
If the configuration is invalid, a warning displays along with an error message indicating the cause of the problem.
If this happens, the stream isn't created and you must correct the configuration.
:::

### Inspect and update data streams

With the **Details** button on the Data Stream tiles, you can inspect the configuration and update the [filters for event data streams](/multicloud-data-streamer/manage-data-streams#filter-event-data-streams).

<img
  src={require('../assets/portal-integrations-data-streams-details-events-filter.png').default}
  alt=""
  style={{ width: 550 }}
/>

### Delete data streams

To permanently delete a data stream, click the trash bin icon near the **Details** button.

:::note
You’ll need to confirm this action.
:::

## Data Streamer API

You can manage your data streams using the emnify Data Streamer API.
Available entry points are listed under the [Integrations section of the emnify REST API reference](https://cdn.emnify.net/api/doc/swagger.html#/Integrations).

:::info
You can find detailed information on the Data Streamer data properties and compatibility notes in the [Data Streamer API Reference](https://cdn.emnify.net/api/doc/event.html) in the _emnify System Documentation_.
:::

### Authentication

To use the emnify REST API, you need to authenticate with an authentication token.
emnify uses JWTs as the authentication token.

Each integration also requires credentials to verify that the Data Streamer has permission to write data to that service.

:::tip
The [Getting Started guide in the _emnify REST API Documentation_](https://cdn.emnify.net/api/doc/getting-started.html) provides step-by-step instructions for retrieving this token.
:::

### Specification and documentation

The [emnify REST API](/rest) is based on the OpenAPI Specification OAS3.
There's also [interactive API documentation](https://cdn.emnify.net/api/doc/swagger.html).

:::tip
Prior OpenAPI knowledge isn't necessary for working with the emnify API.
Nevertheless, [understanding how an OpenAPI Specification is structured](https://oai.github.io/Documentation/specification.html) could help you navigate the documentation.
:::

The [Data Streamer reference page](https://cdn.emnify.net/api/doc/data-streamer.html) in the _emnify REST API Documentation_ provides details about the data structure and common elements you'll encounter while working with the Data Streamer API.

### Work with the Data Streamer API

:::info
API keys and configuration parameters differ by [connection type](/multicloud-data-streamer/connection-types).
Details on setting up, updating, or deleting integrations are in the [emnify API reference](https://cdn.emnify.net/api/doc/swagger.html#/Integrations).
It lists all entry points for managing data streams programmatically and contains examples of the available connection types and filtering options.
:::

The following entry points are available for managing data streams:

| Method   | Entrypoint                                     | Description                                           |
| -------- | ---------------------------------------------- | ----------------------------------------------------- |
| `GET`    | `/api/v2/data_stream`                          | List data streams.                                    |
| `GET`    | `/api/v2/data_stream/{data_stream_id}`         | Retrieve detailed information of a data stream by ID. |
| `POST`   | `/api/v2/data_stream`                          | Create a data stream.                                 |
| `PATCH`  | `/api/v2/data_stream/{data_stream_id}`         | Update a data stream by ID.                           |
| `POST`   | `/api/v2/data_stream/{data_stream_id}/restart` | Restart a data stream by ID.                          |
| `DELETE` | `/api/v2/data_stream/{data_stream_id}`         | Delete a data stream by ID.                           |

The following lookup entry points are available for retrieving possible configuration options:

| Method | Entrypoint                              | Description                                 |
| ------ | --------------------------------------- | ------------------------------------------- |
| `GET`  | `/api/v2/data_stream/status`            | List possible data stream statuses.         |
| `GET`  | `/api/v2/data_stream/connection_type`   | List possible data stream connection types. |
| `GET`  | `/api/v2/data_stream/type`              | List possible data stream types.            |
| `GET`  | `/api/v2/data_stream/filter_field_type` | List possible data stream filter fields.    |

<!-- markdownlint-disable-next-line MD024 -->
### Create data streams

Once authenticated, users can create data streams by sending `POST` requests to `/api/v2/data_stream`.

An example cURL to create a data stream would look like the following:

```bash
curl -X POST "https://cdn.emnify.net/api/v2/data_stream" \
-H "accept: */*" \
-H "Authorization: Bearer AuthToken" \
-H "Content-Type: application/json" \
-d '{"data_stream_type":...'
```

The request body (set using the `-d` flag in cURL) configures the data stream's parameters.

The following JSON request body example shows how to create a stream of usage data records with the [Webhook integration](/multicloud-data-streamer/integrations#webhook):

```json
{
  "data_stream_type": {
    "id": 1 // usage data
  },
  "destination": {
    "connection_type": "RestAPI",
    "credentials": {
      "url": "https://my-application-server/servicebus.net",
      "method": "POST", // HTTP method expected by the application server for pushing data records
      "headers": [
        // can be used for authentication or
        // other mapping functionality on the application server side
        "my_custom_header_1:value1",
        "my_custom_header_2:value2"
      ]
    },
    "format": "Json" // further format options will be added in future
  }
}
```

You can also create an event stream with [AWS Kinesis integration](/multicloud-data-streamer/integrations#amazon-kinesis-data-streams) and enabled filtering, like the following JSON request body example:

```json
{
  "data_stream_type": {
    "id": 2 // events
  },
  "destination": {
    "connection_type": "AwsKinesis",
    "credentials": {
      "region": "af-south-1",
      "stream_name": "demo-stream",
      "role_arn": "arn:aws:iam:1234567890:role/role_for_kinesis_data_stream"
    },
    "format": "Json"
  },
  "filters": [
    {
      "field": "event_type_id",
      "value": [1, 2, 3]
    },
    {
      "or": [
        {
          "field": "alert",
          "value": true
        }
      ]
    }
  ]
}
```

:::note[API reference]
[Create data stream](https://cdn.emnify.net/api/doc/swagger.html#/Integrations/CreateDataStreamer).
:::

### List data streams

You can list all data streams belonging to your organization by sending `GET` requests to `/api/v2/data_stream`.

An example cURL request to list data streams would look like the following:

```bash
curl -X GET "https://cdn.emnify.net/api/v2/data_stream" \
-H "accept: application/json"  \
-H "Authorization:Bearer AuthToken"
```

:::note[API reference]
[List data stream configurations of your organization](https://cdn.emnify.net/api/doc/swagger.html#/Integrations/ListDataStreamerV2s)
:::

### Retrieve details

Retrieving details of an existing data stream is possible by making a `GET` request to `/api/v2/data_stream/{data_stream_id}`.

The `data_stream_id` path parameter is the top-level `id` property in each object returned by the [list data streams](#list-data-streams) request and is an ID that's unique for each data stream.

An example cURL request to get detailed information for a data stream with an ID of `123` would look like the following:

```bash
curl -X GET "https://cdn.emnify.net/api/v2/data_stream/123" \
-H "accept: application/json" \
-H "Authorization:Bearer AuthToken"
```

:::note[API reference]
[Get details on existing data stream](https://cdn.emnify.net/api/doc/swagger.html#/Integrations/GetDataStreamerByIdV2)
:::

### Update data streams

Authenticated users may update data streams belonging to their organization by making a `PATCH` request to `/api/v2/data_stream/{data_stream_id}`.

The `data_stream_id` path parameter is the top-level `id` property in each object returned by the [list data streams](#list-data-streams) request and is an ID that's unique for each data stream.

An example cURL request to update a data stream with an ID of `123`:

```bash
curl -X PATCH "https://cdn.emnify.net/api/v2/data_stream/123" \
-H "accept: application/json" \
-H"Authorization: Bearer AuthToken" \
-H "Content-Type: application/json" \-d '{...}'
```

The request body (set using the `-d` flag in cURL) configures the parameters of the data stream itself.

The following example shows how to pause a stream and erase any filters:

```json
{
  "status": {
    "id": 2 // 1 = Running, 2 = Paused, 3 = Error, 4 = Pending
  },
  "filters": []
}
```

:::note[API reference]
[Modify existing data stream](https://cdn.emnify.net/api/doc/swagger.html#/Integrations/PatchV2DataStream)
:::

<!-- markdownlint-disable-next-line MD024 -->
### Delete data streams

Sending a `DELETE` request to `/api/v2/data_stream/{data_stream_id}` deletes the data stream with that ID.

The `data_stream_id` path parameter is the top-level `id` property in each object returned by the [list data streams](#list-data-streams) request and is an ID that's unique for each data stream.

The following cURL request would then delete a data stream with an ID of `123`:

```bash
curl -X DELETE "https://cdn.emnify.net/api/v2/data_stream/123" \
-H "accept: application/json" \
-H "Authorization: Bearer AuthToken"
```

:::note[API reference]
[Delete existing data stream](https://cdn.emnify.net/api/doc/swagger.html#/Integrations/DeleteDataStreamerV2)
:::
