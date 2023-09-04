---
description: Configure SIM-equipped devices with an Access Point Name (APN) via the emnify Portal
pagination_next: quickstart/apn-configuration/android
slug: /apn-configuration
---

# Get a device online

To establish network connectivity, turn on your device.
Then, you need to make two important configuration changes:

1. [Configure the APN](#configure-the-apn) so the device can connect to the emnify network.
1. Enable roaming.

After that, the device registers to a network (no PIN code entry needed).
Once it has registered, your device's [**Connection**](/glossary#connectivity-status) changes to **Attached**.
SMS and [USSD](/glossary#ussd) services are now available.

When your device has established a data session, the **Connection** changes to **Online**.
This means it's ready to send or receive data traffic.

:::tip
Verify a device's connectivity status in the emnify Portal under [**Connected Devices**](https://portal.emnify.com/connected-devices).
:::

## Configure the APN

Any device equipped with a SIM card requires an [Access Point Name (APN)](/glossary#apn) configuration to establish a data session.
Some devices and networks auto-detect the APN but for most cases you need to configure it.

APN: `em` (or alternatively use `emnify`)

Further, some Android or iOS-based devices and cellular modules also need to be configured to allow for roaming.

Select your device type and model to see how to configure the APN:

- [Android](/apn-configuration/android)
- [iOS devices](/apn-configuration/ios)
- [Cellular modules](/apn-configuration/cellular-modules)
- [GPS trackers](/apn-configuration/gps-trackers)
- [Industrial routers](/apn-configuration/industrial-routers)
