---
description: Manually configure the emnify APN on industrial cellular routers like Teltonika Networks
last_update:
  date: 08-09-2023
sidebar_label: Industrial routers
slug: /apn-configuration/industrial-routers
---

# Configure the APN on industrial routers

<!-- markdownlint-disable MD040 -->
<!-- vale emnify.Headings = NO -->

## Teltonika Networks

> Applies to RUT240, RUT950, RUT955, RUTX09, RUTX11, RUTX12, RUTX14, RUTXR1, RUT360

Newer firmware versions of the Teltonika Networks' industrial cellular routers should automatically detect the emnify APN.
If the APN isn't correctly detected, you can configure it in three ways:

- With the [Teltonika WebUI](#teltonika-webui) over Wi-Fi or Ethernet
- Through the [emnify Portal SMS console](#sms-console-teltonika) (recommended)
- Via SMS through the [emnify REST API](#rest-api-teltonika)

### Teltonika WebUI

1. Connect your PC through the router's Wi-Fi using the credentials provided on the device.
1. Open the Teltonika WebUI `http://192.168.1.1` and go to the **Mobile Configuration**.
1. Type in `em` in **APN**.
Make sure to select the **Auto** checkbox.

:::note
There's no **PIN number** configured on the SIM.
:::

### emnify Portal SMS console \{#sms-console-teltonika}

First, turn on your router and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Teltonika Networks router.
Turning on the router for the first time after installing the SIM shows the status as **Attached**.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the following command:

```shell
cellular apn=em
```

:::info
See [Teltonika's SMS Commands](https://wiki.teltonika-networks.com/view/SMS_Commands) reference for a comprehensive list of SMS commands, syntax, and usage.
:::

### emnify REST API \{#rest-api-teltonika}

You can also automate deployment using the [SMS calls in the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint).

To send SMS to the router, use [**POST** `/api/v1/endpoint/{endpoint_id}/sms`](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost) with the following request body:

```json
{ 
  "source_address": "123456789",
  "payload": "cellular apn=em" 
}
```

Replace _`123456789`_ with your chosen source address.  

:::tip
Follow the [Getting started](https://cdn.emnify.net/api/doc/getting-started.html) guide in the emnify System Documentation to learn how to authenticate and use the API.
:::
