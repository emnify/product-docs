# Device troubleshooting

The following information provides a starting point for determining why a device is not performing as expected.

## Device connectivity info

First, determine the state of the device either by looking at the device's **Details**.

| State        | Description |
| ------------ | ----------- |
| **Attached** | If the device has successfully attached to the emnify Core Network in the past, its state is displayed as **Attached** until the visited network has signaled that the device is inactive/offline. Usually the visited network informs the emnify Core Network within 1-2 days after a device has gone offline. | 
| **Blocked**   | Service is suspended either due to exceeded traffic limits or IMEI lock |
| **Offline**  | A network connection is not possible. There are many reasons for this state. |
| **Online**   | A network connection is active and the device can use data and SMS per the device policies. | 

:::tip
The easiest way to see if your device has connectivity is to look for the **PDP Context active 00:00:00** display that refreshes every 20 seconds in the **Connection** section of **Device Details**.
If it is present and the active time (shown in hh:mm:ss format) is increasing with each refresh, then you know your device is connected to the network.
:::

<details>
  <summary>What is a PDP context?</summary>
  A Packet Data Protocol (PDP) context is a data structure that enables a device to transmit and receive data using Internet Protocol (IP).  
  This data structure includes a device's IP address, IMSI, and additional parameters to properly route data to and from the network.  

  If the most recent PDP context event for a device is **Create PDP Context**, the device should be **online** with an active network connection.  

  If the most recent PDP context event for a device is **Delete PDP Context**, the device is **offline**.
</details>

### Usage charts

The **Usage** column under **Device Details** displays a chart if any usage is present for the given time period which defaults to the **Last Hour**.
The absence of data usage or spikes in data usage could indicate abnormal behavior.

<details>
  <summary>Show me an example.</summary>

  In this case, there has been no data sent or received during the last hour.

  <img
    src={require('./assets/usage-data-last-hour.png').default}
    style={{width:335}}
    alt=""
  /> 

  After selecting the **Current Month** view, you can see that this device has not been sending or receiving data for several days.

  <img
    src={require('./assets/usage-data-current-month.png').default}
    style={{width:335}}
    alt=""
  /> 

</details>


### Events

The event log often contains information that can be used to determine what went wrong.

<details>
  <summary>Where do I find a device's events?</summary>
  <img
    src={require('./assets/device-details-events.png').default}
    style={{width:655}}
    alt=""
  />  

  **Note**: Events are always shown in reverse chronological order, i.e., the newest ones at the top.

</details>

:::danger Warning
Do not rely solely on **Event Type** for determining what event was actually logged.
For instance, **Create PDP Context** by itelf does *not* mean that a PDP context was successfully created.
:::

#### Event severity

When used in the context of troubleshooting, an event's severity is more important than the event type.
For instance, if a network connection cannot be established because of an IMEI lock, the event type may show as **Create PDP Context** with a green play button icon in front of it.
Also, since its **Event Source** is not shown unless you expand its details, you will not see at first glance that this is a **Policy Control** issue.
The only hint that something might have gone wrong is its severity: **Warning**.
In contrast, a successful **Create PDP Context** event will have an **Event Source** of **Network** and a completely different **Description**.

<details>
  <summary>Compare a successful Create PDP Context event with one that failed</summary>
  <img
    src={require('./assets/create-pdp-context-success-and-failure.png').default}
    style={{width:550}}
    alt=""
  /> 
</details>

#### Filtering

The first column, **Severity**, provides the following filters:

- **All** (default)
- **Info**
- **Warning**
- **Critical**

For instance, if you filter for the **Warning** severity and see any of the following events, it is a good indication of a failure that is preventing network connectivity. 

- **Create PDP Context**
- **Endpoint blocked**
- **Endpoint data traffic limit warning**
- **User authentication failed**

:::info
For more detailed information about events, see [**emnify system events**](/services/events).
:::

#### Events indicating normal operation

The expected series of events for a fully functional, connected device would look similar to this:

1. Info: Endpoint enabled
1. Info: SIM activation
1. Info: Update GPRS location
1. Info: Create PDP Context
1. Info: Update location
1. Info: Create PDP Context
1. Info: Delete PDP Context
1. Info: Create PDP Context

#### Resetting connectivity

If you reset connectivity for a device, the expected series of events would be:

1. Info: SIM suspension
1. Info: Delete PDP Context
1. Info: Endpoint disabled
1. Info: Endpoint enabled
1. Info: SIM activation
1. Info: Update location

If the connection (PDP context) is never created, and the connection remains **Attached**, try rebooting the device.
In some cases, a reboot is needed to establish the data connection.
If so, these additional events should be logged with **Create PDP Context** being the crucial one. 

1. Info: Update GPRS location
1. Info: Create PDP Context

##  Troubleshooting tips

Data connectivity problems can be caused by a number of factors.
The [Troubleshooting](/userguide/quickstart/troubleshooting) section of the Quickstart guide provides detailed troubleshooting steps for specific issues that can prevent a device from functioning as expected.