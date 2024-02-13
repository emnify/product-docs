---
description: Configure the type of content delivered by the data stream
last_update: 
  date: 12-31-2022
slug: /multicloud-data-streamer/stream-types
---

# Stream types

Through stream types, you can configure the type of content delivered by the data stream.
You may choose between receiving _event data_ or _usage data_.

Streaming event and usage data within one stream is possible but not advised, as these data records don't share a common schema definition.

## Event data

The emnify system generates several types of events.
These events allow you to track notable system occurrences based on behavior.

Some common use cases for events on emnify include:

- **Triggers for custom business processes** (for example, authentication or custom usage limitations configured on the [emnify Portal](/multicloud-data-streamer/usage#data-streamer-in-the-portal))
- **Monitoring** (for example, SIM or data connection lifecycles)
- **Input for custom billing systems** (that is, updating billing configuration, processing invoices, etc.)

:::tip
Learn more about the available event types and how to use them in the [Event documentation](/system-events).
:::

## Usage data

Usage data records get generated when devices consume data or SMS services.
These records provide information about the SIM, used service, visited network, volumes, and cost.

Usage data streams are often used for monitoring and analyzing data consumption and as input for custom billing systems.

Each usage data record contains information about the:

- **Device** (organization, SIM, IMSI)
- **Time** (start and end time)
- **Price applied for rating** (data plan, coverage policy, coverage area)
- **Mobile network operator used for the service** (operator, country)
- **Type of service** (SMS or data)
- **Consumed service volumes** (down- and upstream, total volume)
- **Costs** (amount, currency)

### Traffic types

| ID  | Description   |
| --- | ------------- |
| 5   | [Data](#data) |
| 6   | [SMS](#sms)   |

#### Data

Data usage records are created:

- Every 45 seconds for open PDP contexts (when at least 100 KB of data is consumed)
- After the PDP context is closed

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
[
    {
        "cost": 0.00439866,
        "id": 393533342974012,
        "operator": { // network
            "id": 5,
            "name": "Telefonica O2",
            "mnc": "07",
            "country": {
                "id": 74,
                "mcc": "262",
                "name": "Germany"
            }
        },
        "organisation": {
            "id": 11060,
            "name": "emnify LTEM Demo"
        },
        "tariff": { // data plan
            "id": 557,
            "name": "Regional Pro EUR",
            "ratezone": { // coverage area
                "id": 3398,
                "name": "Europe Basic"
            }
        },
        "traffic_type": { // usage type
            "id": 5,
            "description": "Data"
        },
        "endpoint": { // device
            "id": 10830095,
            "name": "Wallbox 232",
            "ip_address": "10.196.67.7",
            "tags": "V1",
            "imei": "8677300511111142",
            "balance": {
                "amount": -0.684147,
                "last_updated": "2022-04-26T12:02:21Z",
                "expiry_date": "2022-04-06T08:00:00Z",
                "currency": {
                    "id": 1,
                    "code": "EUR",
                    "symbol": "€"
                }
            }
        },
        "imsi": "295050901064821",
        "volume": {
            "total": 0.219933,
            "rx": 0.172848,
            "tx": 0.047085
        },
        "start_timestamp": "2022-04-26T11:53:43Z",
        "sim": {
            "id": 3324192,
            "iccid": "8988303000005555555",
            "msisdn": "423663920123456",
            "production_date": "2020-09-09T06:42:59Z"
        },
        "currency": {
            "id": 1,
            "code": "EUR",
            "symbol": "€"
        },
        "end_timestamp": "2022-04-26T12:02:43Z",
        "imsi_id": 9624042,
        "session_id": "722aeb56-c4de-4753-ac23-4f99c1980c5e"
    }
]
```

</details>

:::note[API reference]
[Data Streamer usage object](https://cdn.emnify.net/api/doc/data-streamer.html#usage-object)
:::

#### SMS

Usage records for SMS are created when an SMS is successfully delivered either:

- From the device (`"rx": 1`)
- Towards the device (`"tx": 1`)

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
[
    {
        "cost": 0.07,
        "id": 393603365044284,
        "operator": { // network
            "id": 5,
            "name": "Telefonica O2",
            "mnc": "07",
            "country": {
                "id": 74,
                "mcc": "262",
                "name": "Germany"
            }
        },
        "organisation": {
            "id": 11060,
            "name": "emnify LTEM Demo"
        },
        "tariff": { // data plan
            "id": 1,
            "name": "Internal Test Data Plan",
            "ratezone": { // coverage area
                "id": 1,
                "name": "Area 1"
            }
        },
        "traffic_type": { // usage type
            "id": 6,
            "description": "SMS"
        },
        "endpoint": { // device
            "id": 10830095,
            "name": "Wallbox 232",
            "ip_address": "10.196.67.7",
            "tags": "V1",
            "imei": "8677300511111142",
            "balance": {
                "amount": -0.754147,
                "last_updated": "2022-04-26T13:13:56Z",
                "expiry_date": "2022-04-06T08:00:00Z",
                "currency": {
                    "id": 1,
                    "code": "EUR",
                    "symbol": "€"
                }
            }
        },
        "imsi": "901430111111111",
        "volume": {
            "total": 1,
            "rx": 1,
            "tx": 0
        },
        "start_timestamp": "2022-04-26T13:13:56Z",
        "sim": {
            "id": 3324192,
            "iccid": "8988303000005555555",
            "msisdn": "423663920123456",
            "production_date": "2020-09-09T06:42:59Z"
        },
        "currency": {
            "id": 1,
            "code": "EUR",
            "symbol": "€"
        },
        "end_timestamp": "2022-04-26T13:13:56Z",
        "imsi_id": 9624042,
        "session_id": "beafcbbf-48b7-49c5-b493-fce36bad466a"
    }
]
```

</details>

:::note[API reference]
[Data Streamer usage object](https://cdn.emnify.net/api/doc/data-streamer.html#usage-object)
:::
