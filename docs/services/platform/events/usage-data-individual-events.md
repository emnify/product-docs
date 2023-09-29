---
description: Manage events with emnify's Data Streamer, REST API, or Portal
last_update: 
  date: 01-11-2023
slug: /system-events/usage-data-available
---

# Available data for individual events

No matter where you view events in the Portal, you'll have access to the following information for each event:

| Event type | Information |
| ----- | ----- |
| **Severity** | The [event severity](/system-events#event-severity). |
| **Date** | A timestamp the event was triggered. By default, the Portal shows the relative date (for example, "a day ago," "15 days ago," "a month ago"). <br/> Pressing the clock icon shows an absolute date value in the `MMMM dd, yyyy hh:mm a` format. |
| **Event Source** | Which [system triggered the event](/system-events#event-source). |
| **Event Type** | [Name of the triggered event](/system-events/event-types) (the `description` value in the [Event Type Object](https://cdn.emnify.net/api/doc/event.html#event-type-object)). <br/> This field also indicates the network generation ([4G](https://www.emnify.com/iot-glossary/4g), [5G](https://www.emnify.com/iot-glossary/5g), etc.) for specific events, like [PDP context lifecycles](/system-events/  event-types#data-connection-lifecycle). |
| **Device** | Name of the device impacted by the event (the `name` value from the [Endpoint Object](https://cdn.emnify.net/api/doc/event.html#endpoint-object)). <br/> This name often links to the device's entry on the [**Connected Devices**](https://portal.emnify.com/connected-devices) page of the emnify Portal. |
| **Operator** | Which [Mobile Network Operator (MNO)](https://www.emnify.com/iot-glossary/mno) the device is currently roaming on (for example, Vodafone, AT&T). <br/> Only listed for relevant network events. |
| **Country** | The country where the MNO listed in the `Operator` field is providing the cellular service. |
| **ID** | A generated unique identifier for the event. |
| **Description** | What happened, why (in some cases), and any additional details associated with the event type. |
