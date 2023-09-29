---
description: xx
slug: /system-events/usage-retrieve-events-api.md
---

# Retrieve events with the Event API

You can use the Event API to retrieve a list of events or event types available to your organization through the following entry points:

| Method   | Entry point     | Description   |
| -------- | --------------- | ------------- |
| `GET`    | [/api/v1/event](https://cdn.emnify.net/api/doc/swagger.html#/Events/GetEvents)  | Returns the list of events, filtered, sorted, and paged according to query parameters. |
| `GET`    | [/api/v1/event/type](https://cdn.emnify.net/api/doc/swagger.html#/Events/EventTypeGet)  | Provides the list of `event_types` (lookup). |

You can also use the following entry points to list events for specific endpoints, SIMs, or users. 
These event lists can be further filtered, sorted, and paginated using query parameters:

| Method   | Entry point     | Description   |
| -------- | --------------- | ------------- |
| `GET`    | [/api/v1/endpoint/{endpoint_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointEventsByID)  | Returns the list of endpoint events. |
| `GET`    | [/api/v1/sim/{sim_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/SIM/SimEventPagePerPageSortBySimIdAndQGet)  | Returns the list of SIM events. |
| `GET`    | [/api/v1/user/{user_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/User%20Management/UserEventPagePerPageSortByUserIdAndQGet)  | Returns the list of user events. |

These endpoints allow you to access and manage event data in a flexible and customizable manner.
