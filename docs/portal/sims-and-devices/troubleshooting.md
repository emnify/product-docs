---
description: Tips and solutions for resolving why a device isn't performing as expected
last_update: 
  date: 07-20-2023
slug: /portal/troubleshooting
---

# Device troubleshooting

The following information provides a starting point for determining why a device isn't performing as expected.

## Device connectivity info

First, determine the device's state either by looking at the device's **Details**.

| State        | Description |
| ------------ | ----------- |
| **Attached** | If the device has successfully attached to the emnify Core Network in the past, its state is displayed as **Attached** until the visited network has signaled that the device is inactive/offline. Usually, the visited network informs the emnify Core Network within 1-2 days after a device has gone offline. |
| **Blocked**  | Service is suspended either due to exceeded traffic limits or [IMEI lock](/glossary#imei-lock). |
| **Offline**  | A network connection isn't possible. There are many reasons for this state. |
| **Online**   | A network connection is active, and the device can use data and SMS per the device policies. |

:::tip
The most efficient way to see if your device has connectivity is to look for the **PDP Context active 00:00:00** display that refreshes every 20 seconds in the **Connection** section of **Device Details**.
If it's present and the active time (shown in hh:mm:ss format) increases with each refresh, then you know your device is connected to the network.
:::

<details className="custom-details-troubleshooting">
  <summary>What's a PDP context?</summary>
  A Packet Data Protocol (PDP) context is a data structure that enables a device to transmit and receive data using Internet Protocol (IP).  
  This data structure includes a device's IP address, IMSI, and additional parameters to properly route data to and from the network.  

 If a device's most recent PDP context event is **Create PDP Context**, the device should be **online** with an active network connection.  

  The device is offline if a device's most recent PDP context event is **Delete PDP Context**.
</details>

## Usage charts

The **Usage** column under **Device Details** displays a chart if any usage is present for the given time period, which defaults to the **Last Hour**.
The absence of data usage or spikes in data usage could indicate abnormal behavior.

## Events

The event log often contains information that can be used to determine what went wrong.

<details className="custom-details-troubleshooting">
  <summary>Where to find a device's events</summary>
  <img
    src={require('./assets/device-details-events.png').default}
    style={{width:655}}
    alt=""
  />  

  **Note**: events are always shown in reverse chronological order, with the newest ones at the top.

</details>

:::caution Warning
Don't rely solely on the **Event Type** to determine what event was logged.
For instance, **Create PDP Context** by itself _doesn't_ mean that a PDP context was successfully created.
:::

### Event severity

When used for troubleshooting, an event's severity is more important than the event type.
For instance, if a network connection can't be established because of an IMEI lock, the event type may show as **Create PDP Context** with a green play button icon in front of it.
Also, since its **Event Source** is only shown if you expand its details, you won't see at first glance that this is a **Policy Control** issue.
The only hint that something might have gone wrong is its severity, **Warning**.
In contrast, a successful **Create PDP Context** event has an **Event Source** of **Network** and a completely different **Description**.

<details className="custom-details-example">
  <summary>Compare a successful Create PDP Context event with one that failed</summary>
  <img
    src={require('./assets/create-pdp-context-success-and-failure.png').default}
    style={{width:550}}
    alt=""
  />
</details>

### Filtering

The first column, **Severity**, provides the following filters:

- **All** (default)
- **Info**
- **Warning**
- **Critical**

For instance, if you filter for the **Warning** severity and see any of the following events, it's a good indication of a failure that's preventing network connectivity.

- **Create PDP Context**
- **Endpoint blocked**
- **Endpoint data traffic limit warning**
- **User authentication failed**

:::info
For more detailed information about events, see [**emnify system events**](/system-events).
:::

### Events indicating normal operation

The expected series of events for a fully functional, connected device would look similar to this:

1. Info: Endpoint enabled
1. Info: SIM activation
1. Info: Update GPRS location
1. Info: Create PDP Context
1. Info: Update location
1. Info: Create PDP Context
1. Info: Delete PDP Context
1. Info: Create PDP Context

### Reset connectivity

If you reset connectivity for a device, the expected series of events would be:

1. Info: SIM suspension
1. Info: Delete PDP Context
1. Info: Endpoint disabled
1. Info: Endpoint enabled
1. Info: SIM activation
1. Info: Update location

If the connection (PDP context) is never created and the connection remains **Attached**, try rebooting the device.
In some cases, a reboot is needed to establish the data connection.
If so, these additional events should be logged, with **Create PDP Context** being the crucial one.

1. Info: Update GPRS location
1. Info: Create PDP Context

## More troubleshooting tips

Several factors can cause data connectivity problems.
For more detailed troubleshooting tips, see [Troubleshooting](/quickstart/troubleshooting).
