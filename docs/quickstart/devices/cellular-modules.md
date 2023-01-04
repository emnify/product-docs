---
description: Configuring Quectel, u-Blox, and several other vendors
---
# Cellular modules

For Telit, Sierra Wireless, Cinterion/Gemalto/Thales, SIMcom, or Sequans, see [General cellular IoT modules](#general-cellular-iot-modules).

## Quectel cellular IoT modules

*Applies to all Quectel modules: BG95, BG96, EG25, EG91, EG95, EC21, EC25, M65, M66, M95, MC60, BG77, BG600L*

With Quectel modules the APN can be set with the 3GPP standard command `AT+CGDCONT`:

```console
AT+CGDCONT=1,"IP","em",,
```

Quectel also utilizes a vendor specific command `AT+QICSGP`:

```console
AT+QICSGP=1,1,"em","","",1
```

According to [Quectel](https://www.quectel.com/faqs/12-8-what-is-the-difference-between-cgdcont-and-qicsgp/) the command `AT+QICSGP` shall be used when the internal TCP/UDP stack should be used – and it also allows to configure which bearer (CSD or GPRS) is used. GPRS must be used.

For managing roaming Quectel also introduced the `AT+QCFG` command.
The suggested setting is:

```console
AT+QCFG="roamservice",2,1
```

Check your Quectel module AT command guide for more information.

## u-Blox cellular IoT modules

u-Blox supports the standard 3GPP command to set APNs via `AT+CGDCONT`

```console
AT+CGDCONT=1,"IP","em",,
```

u-Blox also supports a vendor specific command to configure the APN for the initial EPS bearer:

```console
AT+UCGDFLT=1,"IP","em"
```

For roaming configuration u-blox modules utilize a vendor specific `AT+UDCONF` command.
This enables automatic search in case the device cannot attach to a specific network.

```console
AT+UDCONF=20,2
```

Check your u-Blox module AT command guide for more information.

## General cellular IoT modules

*Applies to a cellular module vendors: Fibocom, Telit, Sierra Wireless, SIMcom, Cinterion, Gemalto, Thales, Sequans*

The commands for configuring the APN settings are 3GPP standardized and all major cellular module manufacturer support the commands.

The AT+CGDCONT command needs to be utilized to set the APN.

```console
AT+CGDCONT=1,"IP","em",,
```

Check your AT command guide for further information or read [3GPP Technical Specification 27.007](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1515).
