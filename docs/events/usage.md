# Working with events

There are three ways you can access and trigger available events:

- [emnify's Data Streamer](#emnifys-data-streamer)
- [emnify REST API](#event-api)
- [The emnify Portal](the-emnify-portal)

## emnify's Data Streamer
<!-- https://www.emnify.com/developers/documentation#_data_streamer -->

<!-- TODO -->

## emnify REST API

The emnify REST API provides a variety of HTTP requests to integrate several emnify services into your application, including triggering and monitoring events.

The [Event API](#retrieving-events-with-the-event-api) specifically allows searching for recent events and supports various types of result filtering.

:::caution
For events, the emnify REST API uses a [pull architecture](https://dev.to/anubhavitis/push-vs-pull-api-architecture-1djo), which means you're responsible for requesting updates and retrieving new events. 
If you'd prefer real-time updates, please use the [emnify Data Streamer](#emnifys-data-streamer).
:::

### Authentication

To use the emnify API, you need to authenticate with an authentication token. We use JWTs as the authentication token. 

:::tip
The [Getting Started guide in the emnify API Documentation](https://cdn.emnify.net/api/doc/getting-started.html) provides step-by-step instructions for retrieving this token.
:::

### Specification and documentation

The emnify API is based on the OpenAPI Specification OAS3. 
We also have [interactive API documentation in Swagger](https://cdn.emnify.net/api/doc/swagger.html).  

:::note
Prior OpenAPI knowledge isn't necessary for working with the emnify API. 
That said, [understanding how an OpenAPI Specification is structured](https://oai.github.io/Documentation/specification.html) could help you navigate our documentation.
:::

The [Events Reference page](https://cdn.emnify.net/api/doc/event.html) in the emnify System Documentation provides details about the event structure and common elements you'll encounter while working with the Event API.

### Retrieving events with the Event API

The following entry points are available for retrieving a list of the events or event types available to your organization: 

| Method   | Entry point     | Description   |
| -------- | --------------- | ------------- |
| `GET`    | [/api/v1/event](https://cdn.emnify.net/api/doc/swagger.html#/Events/GetEvents)  | Returns the list of events, filtered, sorted and paged according to query parameters. |
| `GET`    | [/api/v1/event/type](https://cdn.emnify.net/api/doc/swagger.html#/Events/EventTypeGet)  | Provides the list of event_types (lookup). |

Using the following entry points, you can also list events for specific endpoints, SIMs, or users. 
These event lists can be filtered, sorted, and paged according to query parameters.

| Method   | Entry point     | Description   |
| -------- | --------------- | ------------- |
| `GET`    | [/api/v1/endpoint/{endpoint_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointEventsByID)  | Returns the list of endpoint events. |
| `GET`    | [/api/v1/sim/{sim_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/SIM/SimEventPagePerPageSortBySimIdAndQGet)  | Returns the list of SIM events. |
| `GET`    | [/api/v1/user/{user_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/User%20Management/UserEventPagePerPageSortByUserIdAndQGet)  | Returns the list of user events. |

## The emnify Portal

There are several ways to view or trigger events within [the emnify Portal](https://portal.emnify.com/). 

### Events in the Portal

Here's where you can find event information in the Portal: 

- **Dashboard**: Overview of all event activity within your organization. 
- **Connected Devices** → **Details** → **Events**: List of triggered events for that particular device (also referred to as "endpoint").
- **SIM Inventory** → **Details** → **Events**: List of triggered events for that particular SIM card.

:::info
Any events triggered in the [Portal](https://portal.emnify.com/) will show **API** as the [event source](./index.md#event-source).
:::

### Available data for individual events

No matter where you view events in the Portal, you'll have access to the following information for each event:

- **Severity**: The [event severity](./index.md#event-severity).
- **Date**: When the event was triggered. By default, the Portal shows the relative date (e.g., "a day ago", "15 days ago," "a month ago"). Pressing the clock icon will show an absolute date value in the `MMMM dd, yyyy hh:mm a` format.
- **Event Source**: What [system triggered the event](./index.md#event-source).
- **Event Type**: [Name of the triggered event](event-types) (the `description` value in the [Event Type Object](https://cdn.emnify.net/api/doc/event.html#event-type-object)). This field will also indicate the network generation (i.e., [4G](https://www.emnify.com/iot-glossary/4g), [5G](https://www.emnify.com/iot-glossary/5g), etc.) for specific events, like [PDP context lifecycles](event-types#data-connection-lifecycle).
- **Device**: Name of the device impacted by the event (the `name` value from the [Endpoint Object](https://cdn.emnify.net/api/doc/event.html#endpoint-object)). This name will often link to the device's entry on the "Connected Devices" page.
- **Operator**: [Mobile Network Operator (MNO)](https://www.emnify.com/iot-glossary/mno) the device is currently roaming on (e.g., Vodafone, AT&T). Only listed for relevant Network events.
- **Country**: The country where the MNO listed in the `Operator` field is providing the cellular service.
- **ID**: A generated unique identifier for the event.
- **Description**: What happened, why (in some cases), and any additional details associated with the event type.
