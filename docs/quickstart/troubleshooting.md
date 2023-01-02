# Troubleshooting

When you experience issues while connecting your device for the first time there are several common patterns that can be identified by looking at the connected device section in the portal.
If you do not have any entry in the connected devices - go back to [Creating a Device](creating-a-device) and assign the SIM.

The device will show different icons that indicate the status
(`Offline`, `Attached`, `Online`, `Blocked`).
If no icon is visible, assign a SIM to the device.

For most of the troubleshooting, a look at Details→Events is necessary.
A usual event flow should look like this:

1. Update Location - the SIM card is (re)authenticating with a different network element.
If successful the device will show as `Attached` and can already receive SMS.
1. Update GPRS location - the SIM card has successfully registered for data sessions with a different network element.
1. Create PDP context - the device has started a data transfer.
The device will show `Online` as long is there is no delete PDP context event.
1. Delete PDP context - the device has ended a data transfer.
The event details will also show the data transmitted and the device status will be set to `Offline`.

There can be many update locations before or in between the data session.

## The device is offline

- Click on Details → ensure that the device is enabled
- Click on Details → Events. Validate if there is any location update event created and rejected. The reasoning should indicate the resolution to the problem. If there is no location update event:
- Ensure the device is powered on and searches for a network
- Ensure that the device is in reception of any supported network

## The device shows attached but does not transmit data

- Verify that the APN is correctly set to *em* or use *emnify* instead since some devices do not support two-digit APNs.
You can find guides for various devices in [Getting the first device online](#getting-the-first-device-online).
- Ensure that you activate data access and the radio types (i.e., 2G, 3G, 4G) if you change policy settings.
- Make sure mobile data is enabled and that international roaming is allowed.
- Click Details → Events.
Validate if there is any PDP create event and rejected.
The reason and resolution is given in the event description.

The `Attached` status does not necessarily mean that the device is powered on.
If the device first attaches to a network and then powers off - there is no information towards the emnify network that would allow to detect this.

## The device shows online but does not transmit data

- Ensure mobile data is enabled, as well as international roaming is allowed.
- Validate under Details→Events if any `Warn` or `Error` is detected.
- For NB-IoT and LTE-M this behavior can happen when the device automatically connects to a network - rather specify the network that shall be used with using the `AT+COPS`.
Also, verify that the network is on emnify’s [NB-IoTcoverage](https://www.emnify.com/nb-iot-coverage) or [LTE-M network coverage](https://www.emnify.com/lte-m-coverage) list.
- Ensure that your data destination and DNS server (default emnify uses Google's `8.8.8.8` DNS server if your device does not specify a DNS server) is not blocked for the device.

**Other general troubleshooting tips**

- After configuration changes, make sure they are correctly applied on the device (e.g., with a reboot).
- Clicking the reset connectivity icon on Connected Devices can also reset the network state and allow your device to freshly reattach.
- The issue may only be present with one network or in the specific location (e.g., due to high interference for this network).
You can use the Operator Blacklist to block the network and force the change to a different network.
