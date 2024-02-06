---
description: Configure SIM-equipped devices with an Access Point Name (APN) via the emnify Portal
last_update: 
  date: 02-06-2024
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
SMS services are now available.

When your device has established a data session, the **Connection** changes to **Online**.
This means it's ready to send or receive data traffic.

:::tip
Verify a device's connectivity status in the emnify Portal under [**Connected Devices**](https://portal.emnify.com/connected-devices).
:::

## Configure the APN

Any device equipped with a SIM card requires an [Access Point Name (APN)](/glossary#apn) configuration to establish a data session.
Some devices and networks auto-detect the APN, but you need to configure it in most cases.

APN: `em` (or alternatively use `emnify`)

:::info
If your devices have an emnify SIM card, the APN must be `em` or `emnify`.
No username or password is required.
:::

Further, some Android or iOS-based devices and cellular modules must also be configured to allow roaming.

Common configuration steps often involve:

- **AT commands**  
Cellular module settings are done in the device firmware (applies to cellular modules).
- **SMS commands**  
Settings are done via SMS (usually for GPS trackers and routers), so you don't need to connect with the device.
- **Device configurator**  
Devices must connect through a different interface (serial, USB, Wi-Fi, Bluetooth), and then a graphical configuration user interface guides you through the process. 

Select your device type and model to see how to configure the APN:

- [Android](/apn-configuration/android)
- [iOS devices](/apn-configuration/ios)
- [Cellular modules](/apn-configuration/cellular-modules)
- [GPS trackers](/apn-configuration/gps-trackers)
- [Industrial routers](/apn-configuration/industrial-routers)
