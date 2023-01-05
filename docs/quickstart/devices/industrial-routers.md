---
description: How to connect to routers to configure the APN
---
# Industrial routers

*Applies to RUT240, RUT950, RUT955, RUTX09, RUTX11, RUTX12, RUTX14, RUTXR1, RUT360*

Newer firmware version of the Teltonika Routers should automatically detect the emnify APN.
Nevertheless, in case the APN is not correctly detected, it can be configured with 3 methods:

1. With the Teltonika WebUI over Wifi, Ethernet
1. Via the SMS console through the emnify Portal (most simple)
1. via the emnify SMS API or Zapier Integration (when automating the configuration)


1. APN configuration through the Teltonika Router WebUI
Connect your PC through the routers Wi-Fi using the credentials   provided on the device.
Open the Teltonika WebUI <http://192.168.1.1> and go to the Mobile configuration.
Type in `em` in APN – there is no PIN configured on the SIM and no APN username or password required.
1. Teltonika Networks Router APN configuration via SMS console / API or Zapier [Teltonika Documentation Source](https://wiki.teltonika-networks.com/view/SMS_Commands)

Make sure that the Router is powered on and the SIM card is inserted and activated.
In the emnify Portal, the device should show as **Attached**.

The following SMS command needs to be sent to the device:

```
cellular apn=em
```
