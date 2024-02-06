---
description: Configure the emnify APN on Quectel, u-blox, and several other cellular module vendors
last_update:
  date: 08-09-2023
sidebar_label: Cellular modules
slug: /apn-configuration/cellular-modules
---

# Configure the APN on cellular modules

<!-- markdownlint-disable MD040 -->

:::note
See [General cellular IoT modules](#general-cellular-iot-modules) for Telit, Sierra Wireless, Cinterion, Gemalto, Thales, SIMCom, or Sequans.
:::

## Quectel cellular IoT modules

> Applies to all Quectel modules: BG95, BG96, EG25, EG91, EG95, EC21, EC25, M65, M66, M95, MC60, BG77, BG600L

With Quectel modules, you can set the APN with the 3GPP standard command `AT+CGDCONT`:

```shell
AT+CGDCONT=1,"IP","em",,
```

Quectel also utilizes a vendor-specific command `AT+QICSGP`:

```shell
AT+QICSGP=1,1,"em","","",1
```

According to [Quectel](https://www.quectel.com/faqs/12-8-what-is-the-difference-between-cgdcont-and-qicsgp/), use the command `AT+QICSGP` when the internal TCP/UDP stack is needed.
It also allows you to configure which bearer (CSD or GPRS) is used.

To manage roaming, Quectel also introduced the `AT+QCFG` command.
The suggested setting is:

```shell
AT+QCFG="roamservice",2,1 # roaming enabled
```

Check your Quectel module AT command guide for more information.

## u-blox cellular IoT modules

u-blox supports the standard 3GPP command to set APNs via `AT+CGDCONT`:

```shell
AT+CGDCONT=1,"IP","em",,
```

u-blox also supports a vendor-specific command to configure the APN for the initial EPS bearer:

```shell
AT+UCGDFLT=1,"IP","em"
```

For roaming configuration, u-blox modules utilize a vendor-specific `AT+UDCONF` command.
This command enables automatic search if the device can't attach to a specific network.

```shell
AT+UDCONF=20,2
```

Check your u-blox module AT command guide for more information.

## General cellular IoT modules

> Applies to the following cellular module vendors: Fibocom, Telit, Sierra Wireless, SIMCom, Cinterion, Gemalto, Thales, Sequans

The commands for configuring the APN settings are 3GPP standardized, and all major cellular module manufacturers support the commands.

You must use the `AT+CGDCONT` command to set the APN:

```shell
AT+CGDCONT=1,"IP","em",,
```

Check your AT command guide for further information, or read [3GPP Technical Specification 27.007](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1515).
