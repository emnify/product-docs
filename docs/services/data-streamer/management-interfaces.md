# Management Interfaces

Data streams are managed by using the Portal or the API.

**Portal**
Managing data streams with the Portal is convenient when taking the first steps or if you don't expect configuration changes to be needed often.

**API**
Integrating the Data Streamer API becomes a faster and more secure approach when multiple data streams need to be managed as part of the daily business or in the case of advanced operations (e.g., seamless migration from one data stream to another without lags or duplicates).

## Data Streamer in the Portal

To create, view, update, or delete a data stream, log in to your account on the emnify Portal. 
Then, navigate to the ‘Integrations’ page by clicking on the Integrations menu item on the left.

### Viewing data streams

If there are no data streams configured, the Data Streams panel displays all available connection types as tiles:

<!-- SCREENSHOT -->

If you already have a data stream configured, the panel displays all existing streams, ordered by creation date (newest on the top). 
This list view can be used to gain an overview of the current states of different data streams. 
Integrations marked as ‘Running’ are properly operating, failed integrations have the ‘Error’ status, and paused streams are marked as ‘Paused.’

<!-- SCREENSHOT -->

The ‘Details’ button on the right allows you to inspect the configuration of the specific stream. 
The Destination configuration varies depending on the connection type.

<!-- SCREENSHOT -->

### Creating data streams

When no configured data streams are available, click the ‘Add' button on the preferred connection type tile.

<!-- SCREENSHOT -->

Otherwise, click the ‘Add New Stream’ button at the top of the existing Data Streams list. 
This shows the connection type tiles. You can choose your preferred connection type and click the ‘Add’ button.

<!-- SCREENSHOT -->

Configure the source by selecting your desired stream type (Event or Usage Data, see Stream Types). 
Optionally, you can add event options for filtering on event types (see Filtering Event Data Streams section for details).

Provide the required settings to configure the destination. 
API keys and configuration parameters differ by connection type. 
Instructions for configuring each connection type are in the Integration Guides section. 

Click the ‘Create’ button and verify the status of your new stream. 
If the configuration is invalid, a warning will display along with an error message indicating the cause of the problem. 
The stream isn't created in this case, and you must correct the configuration.

If everything goes well, the data stream is successfully created. 
The configuration view will close, and you will see the integration status shown as ‘Running.’

### Inspecting and updating data streams

With the ‘Details’ button on the Data Stream tiles, you can inspect the configuration and update the filters for event data streams (see Updating Data Streams and Filtering Event Data Streams). 

<!-- SCREENSHOT -->

### Deleting data streams

To permanently delete a data stream, click the trash bin icon on the left of the ‘Details’ button. 
You’ll need to confirm this action.

## Data Streamer API

You can manage your data streams using the emnify Data Streamer API. 
Each integration requires credentials to verify that the data streamer has permission to write data to that service.

 Visit the API Documentation section of the emnify System Documentation.

You can learn about the different authentication methods, and find example code snippets and interactive API Documentation.

 API keys and configuration parameters differ by connection type. Details on setting up, updating, or deleting integrations are in the emnify API section. It lists all entry points for managing data streams programmatically and contains examples of the available connection types and filtering options.

The following entry points are available for managing data streams:

<!-- TODO: TABLE -->

The following lookup entry points are available for retrieving possible configuration options:

<!-- TODO: TABLE -->

### Creating data streams

Once authenticated, users can create data streams by making POST requests to /api/v2/data_stream. 

An example cURL to create a data stream would look like the following:

```bash
curl -X POST "https://cdn.emnify.net/api/v2/data_stream" \
-H "accept: */*" \
-H "Authorization: Bearer AuthToken" \
-H "Content-Type: application/json" \
-d '{"data_stream_type":...'
```

The request body (set using the -d flag in cURL) configures the data stream's parameters. 

The following JSON request body example shows how to create a stream of usage data records with the Webhook integration:

```json
{
  "data_stream_type": {
    "id": 1.            // usage data
  },
  "destination": {
    "connection_type": "RestAPI",
    "credentials": {
      "url": "https://my-application-server/servicebus.net",
      "method": "POST", // HTTP method expected by the application server for pushing data records
      "headers": [
        "my_custom_header_1:value1",  // can be used for authentication or
        "my_custom_header_2:value2"   // other mapping functionality on the application server side
      ]
    },
    "format": "Json"    // further format options will be added in future
  }
}
```

You can also create an event stream with AWS Kinesis integration and enabled filtering, like the following JSON request body example:

```json
{
  "data_stream_type": {
    "id": 2         // events
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
      "value": [
        1,
        2,
        3
      ]
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

More comprehensive documentation of the configurable parameters and interactive examples are in the emnify API specification for this operation at POST /api/v2/data_stream.

### Listing data streams

You can list all data streams belonging to your organization by making GET requests to /api/v2/data_stream. 

An example cURL request to list data streams would look like the following:

```bash
curl -X GET "https://cdn.emnify.net/api/v2/data_stream" \
-H "accept: application/json"  \
-H "Authorization:Bearer AuthToken"
```

Further documentation, including interactive examples, is in the emnify API specification for this operation at GET /api/v2/data_stream.

### Retrieving details

Retrieving details of an existing data stream is possible by making a GET request to /api/v2/data_stream/{data_stream_id}.

The data_stream_id path parameter is the top-level id property in each object returned by the GET /api/v2/data_stream request and is an ID that is unique for each data stream.

An example cURL request to get detailed information for a data stream with an ID of 123 would look like the following:

```bash
curl -X GET "https://cdn.emnify.net/api/v2/data_stream/123" \
-H "accept: application/json" \
-H "Authorization:Bearer AuthToken"
```

Further documentation, including interactive examples, is in the emnify API specification for this operation at GET /api/v2/data_stream/{data_stream_id}.

### Updating data streams

Authenticated users may update data streams belonging to their organization by making a PATCH request to /api/v2/data_stream/{data_stream_id}. 

The data_stream_id path parameter is the top-level id property in each object returned by the GET /api/v2/data_stream request and is an ID that is unique for each data stream.

An example cURL request to update a data stream with an ID of 123:

```bash
curl -X PATCH "https://cdn.emnify.net/api/v2/data_stream/123" \
-H "accept: application/json" \
-H"Authorization: Bearer AuthToken" \
-H "Content-Type: application/json" \-d '{...}'
```

The request body (set using the -d flag in cURL) configures the parameters of the data stream itself. 

The following example shows how to pause a stream and erase any filters:

```json
{
  "status": {
    "id": 2 // 1 = Running, 2 = Paused, 3 = Error, 4 = Pending
  },
  "filters": []
}
```

Further documentation, and interactive examples, is in the emnify API specification for this operation at PATCH /api/v2/data_stream/{data_stream_id}.

### Deleting data streams

Making a DELETE request to /api/v2/data_stream/{data_stream_id} will delete the data stream with that ID.

The data_stream_id path parameter is the top-level id property in each object returned by GET /api/v2/data_stream request  and is an ID that is unique for each data stream.

The following cURL request would then delete a data stream with an ID of 123:

```bash
curl -X DELETE "https://cdn.emnify.net/api/v2/data_stream/123" \
-H "accept: application/json" \
-H "Authorization: Bearer AuthToken"
```

Further documentation, and interactive examples, are in the emnify API specification for this operation at DELETE /api/v2/data_stream/{data_stream_id}.

### Data References

<!-- TODO: Add link to new Swagger docs -->