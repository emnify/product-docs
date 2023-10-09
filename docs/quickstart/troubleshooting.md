---
description: Tips and solutions for resolving common issues when setting up your emnify account
last_update: 
  date: 08-24-2023
pagination_next: null
pagination_prev: quickstart/apn-configuration/index
slug: /quickstart/troubleshooting
---

# Troubleshooting

When you experience issues while connecting your device for the first time, there are several common patterns that can be identified by looking at [**Connected Devices**](https://portal.emnify.com/connected-devices) in the Portal.
If you don't have any entry in the connected devices, go back to [Create a device](/quickstart/create-device) and assign the SIM.

The device show different icons that indicate the status
(**Offline**, **Attached**, **Online**, **Blocked**).
If no icon is visible, assign a SIM to the device.

For most troubleshooting, a look at the **Events** tab of the **Device Details** is necessary.
A usual event flow should look like this:

1. Update Location - the SIM card is (re)authenticating with a different network element.
If successful, the device shows as **Attached** and can already receive SMS.
1. Update GPRS location - the SIM card has successfully registered for data sessions with a different network element.
1. Create PDP context - the device has started a data transfer.
The device shows **Online** as long is there is no delete PDP context event.
1. Delete PDP context - the device has ended a data transfer.
The event details also show the data transmitted and the [connectivity status](/glossary#connectivity-status) is set to **Offline**.

There can be many update locations before or in between the data session.

## The device is offline

- Click **Details** and ensure that the device is enabled
- Click **Details**, then navigate to the **Events** tab. 
Validate if there is any location update event created and rejected. 
The reasoning should indicate the resolution to the problem. 

If there is no location update event:

- Ensure the device is powered on and searches for a network
- Ensure that the device is in reception of any supported network

## The device shows attached but doesn't transmit data

- Verify that the APN is correctly set to _em_ or use _emnify_ instead since some devices don't support two-digit APNs.
You can find guides for various devices in [Get a device online](/apn-configuration).
- Ensure that you activate data access and the radio types (that is, 2G, 3G, 4G) if you change policy settings.
- Make sure mobile data is enabled and that international roaming is allowed.
- Click **Details**, then navigate to the **Events** tab.
Validate if there is any PDP create event and rejected.
The reason and resolution is given in the event description.

The **Attached** status doesn't necessarily mean that the device is powered on.
If the device first attaches to a network and then powers off - there is no information towards the emnify network that would allow to detect this.

## The device shows online but doesn't transmit data

- Ensure mobile data is enabled, as well as international roaming is allowed.
- Click **Details**, then navigate to the **Events** tab to validate if any `Warn` or `Error` is detected.
- For NB-IoT and LTE-M this behavior can happen when the device automatically connects to a network - rather specify the network that shall be used with using the `AT+COPS`.
Also, verify that the network is on emnify’s [NB-IoT coverage](https://www.emnify.com/nb-iot-coverage) or [LTE-M network coverage](https://www.emnify.com/lte-m-coverage) list.
- Ensure that your data destination and DNS server (default emnify uses Google's `8.8.8.8` DNS server if your device doesn't specify a DNS server) isn't blocked for the device.

## Other general troubleshooting tips

- After configuration changes, make sure they're correctly applied on the device (for example, with a reboot).
- Clicking the reset connectivity icon on [**Connected Devices**](https://portal.emnify.com/connected-devices) can also reset the network state and allow your device to freshly reattach.
- The issue may only be present with one network or in the specific location (for example, due to high interference for this network).
You can use the network blocklist to block the network and force the change to a different network.

## Contact the support team

If you've tried everything and still can't find a solution, you can contact the [emnify support team](/support).

Be sure to include the following information in your request:

- Your company name
- The ICCIDs of your SIMs in question
- The type of device you're using
- A short description of the issue
- A phone number where we can reach you if required
