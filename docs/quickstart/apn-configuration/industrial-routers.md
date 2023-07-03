---
description: Connect to routers to configure the APN
slug: /apn-configuration/industrial-routers
---

# Industrial routers

*Applies to RUT240, RUT950, RUT955, RUTX09, RUTX11, RUTX12, RUTX14, RUTXR1, RUT360*

Newer firmware version of the Teltonika Routers should automatically detect the emnify APN.
Nevertheless, in case the APN is not correctly detected, it can be configured with 3 methods:

1. With the Teltonika WebUI over Wifi, Ethernet
1. Via the SMS console through the [**Connected Devices** page of the emnify Portal](https://portal.emnify.com/connected-devices)
1. via the emnify SMS API or Zapier Integration (when automating the configuration)


**APN configuration through the Teltonika Router WebUI**

1. Connect your PC through the routers Wi-Fi using the credentials   provided on the device.
1. Open the Teltonika WebUI <http://192.168.1.1> and go to the Mobile configuration.
1. Type in `em` in APN – there is no PIN configured on the SIM and no APN username or password required.


**Teltonika Networks Router APN configuration via SMS console / API or Zapier **

1. Make sure that the Router is powered on and the SIM card is inserted and activated.
1. In the emnify Portal, ensure that the device is shown as **Attached**.
1. Send the following SMS command to the device:

```
cellular apn=em
```

:::info
See [Teltonika's SMS Commands](https://wiki.teltonika-networks.com/view/SMS_Commands) reference for a comprehensive list of SMS commands, syntax, and usage.
:::