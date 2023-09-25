---
description: Perform SMS related operations with the API 
last_update: 
  date: 11-04-2021
---

# Send and receive SMS

You can perform the following SMS related operations using the `endpoint` API.

1. List sent and received SMS: `GET /api/v1/endpoint/{endpoint_id}/sms`
1. Send SMS to an endpoint: `POST /api/v1/endpoint/{endpoint_id}/sms`
1. Get details about an endpoint SMS: `GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`
1. Cancel a buffered SMS: `DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`

**Example**: send SMS to an endpoint

```javascript
POST https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms
```

**Request body**:

```json
{
  "source_address": 12345689,
  "payload": "This is the message text"
}
```

**Responses**:

```json
201
```

The source address is the sender number appearing on the receiving device.
The payload is the actual text to be sent as SMS.

:::info
For more information, see [How to send and receive SMS via the API](https://www.emnify.com/developer-blog/how-to-send-and-receive-sms-via-the-api).
:::
