---
description: Performing SMS related operations with the API 
displayed_sidebar: devResourcesSidebar
---

# Sending and receiving SMS

You can perform the following SMS related operations using the `endpoint` API.

1. List sent and received SMS: `GET /api/v1/endpoint/{endpoint_id}/sms`
1. Send SMS to an endpoint: `POST /api/v1/endpoint/{endpoint_id}/sms`
1. Get details about an endpoint SMS: `GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`
1. Cancel a buffered SMS: `DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`

**Example**: Send SMS to an endpoint

```
POST [https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms](https://cdn.emnify.net/api/v1/endpoint/%7Bendpoint_id%7D/sms?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)
```

**Request body**:

```json
{
  "source_address": 12345689,
  "payload": "This is the message text"
}
```

**Responses**

```
201
```

The source address is the sender number appearing on the receiving device.
The payload is the actual text to be sent as SMS.

:::info
See [How to send and receive SMS via the API](https://www.emnify.com/developer-blog/how-to-send-and-receive-sms-via-the-api) for more information.
:::