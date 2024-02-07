---
description: Configure the emnify APN for the most common GPS tracker vendors
last_update:
  date: 08-09-2023
sidebar_label: GPS trackers
slug: /apn-configuration/gps-trackers
---

# Configure the APN on GPS trackers

<!-- markdownlint-disable MD040 -->
<!-- vale emnify.Headings = NO -->

:::info
For GPS vendors that aren't listed, please consult their respective manuals and configure the APN to be `em` or `emnify`.
:::

## Teltonika

> Applies to FMB110, FMB120, FM130, FMB140, FMC001, FMM001, FMC125, FMC130, FMC640, FMM125, FMM130, FMM640, FMP100, FMB001, FMB002, FMB003, FMB010

You have three options for configuring the APN on Teltonika GPS trackers:

- With the [Teltonika Configurator](#teltonika-configurator) over a USB or Bluetooth connection
- Through the [emnify Portal SMS console](#sms-console-teltonika) (recommended)
- Via SMS through the [emnify REST API](#rest-api-teltonika) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

:::note[reference]
[Source Teltonika GPS documentation](https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide_V3.2)
:::

### Teltonika Configurator

Teltonika offers the Teltonika Configurator, a graphical user interface, to set device-specific parameters via USB or Bluetooth (for example, the APN and telematics server).
For usage instructions, see [Teltonika's Universal Device Test Guide](https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide).

### emnify Portal SMS console \{#sms-console-teltonika}

:::note
Newer Teltonika GPS versions automatically detect the emnify APN setting.
:::

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Teltonika GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the command corresponding to your device settings.

If you've set a username and password for the device, use the following SMS command to set the APN:

```
USERNAME PASSWORD setparam 2001:em
```

Replace _`USERNAME`_ and _`PASSWORD`_ with your credentials.

Otherwise, if there's no username or password configured, use the following:

```
  setparam 2001:em
```

:::warning
The two leading spaces are required.
:::

:::info
Refer to the [Teltonika FMB Device Family Parameter list](https://wiki.teltonika-gps.com/view/Template:FMB_Device_Family_Parameter_list) for all available parameters.
:::

### emnify REST API \{#rest-api-teltonika}

You can use the [SMS calls in the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) to automate the device configuration.

To send SMS to a device, use [**POST** `/api/v1/endpoint/{endpoint_id}/sms`](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost) with the following request body:

```json
{ 
  "source_address": "123456789",
  "payload": "  setparam 2001:em" 
}
```

Replace _`123456789`_ with your chosen source address.  

:::tip
Follow the [Getting started](https://cdn.emnify.net/api/doc/getting-started.html) guide in the emnify System Documentation to learn how to authenticate and use the API.
:::

## Ruptela

> Applies to HCV5, LCV5, Pro5, Trace5/NA, FM-Tco4 HCV/HCV 3G, FM-Tco4 LCV/LCV 3G, FM-Pro4/Pro4 3G, FM-Eco4/4+, FM-Eco4 light/light+/3G, FM-Eco4 S Series, FM-Eco4 T Series, FM-Plug4

You have three options for configuring the APN on Ruptela GPS trackers:

- With the [Ruptela Device Center](#ruptela-device-center) over a USB or Bluetooth connection
- Through the [emnify Portal SMS console](#sms-console-ruptela) (recommended)
- Via SMS through the [emnify REST API](#rest-api-ruptela) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

:::note[reference]
[Source Ruptela Documentation](https://doc.ruptela.lt/display/AB/Tracking+devices)
:::

### Ruptela Device Center

The Ruptela Device Center allows you to set device-specific parameters via USB or Bluetooth.

Under **APN**, enter `em` as the **Name**.
Leave the **Username** and **Password** blank.

### emnify Portal SMS console \{#sms-console-ruptela}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Ruptela GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the following SMS command:

```shell
[SMSpassword] setconnection em
```

Replace _`[SMSpassword]`_ with your `SMSpassword`.

:::note
You can set up the `SMSpassword` in the Ruptela Device Center.
If you haven't set the `SMSpassword`, the command is:

```shell
setconnection em
```

:::

### emnify REST API \{#rest-api-ruptela}

You can use the [SMS calls in the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) to automate the device configuration.

To send SMS to a device, use [**POST** `/api/v1/endpoint/{endpoint_id}/sms`](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost) with the following request body:

```json
{ 
  "source_address": "123456789",
  "payload": "setconnection em" 
}
```

Replace _`123456789`_ with your chosen source address.  

:::tip
Follow the [Getting started](https://cdn.emnify.net/api/doc/getting-started.html) guide in the emnify System Documentation to learn how to authenticate and use the API.
:::

## Concox

> Applies to JM-VL01, JM-VL02, JM-BL11, JM-VL03, JM-VL04, JM-LL01, JM-LL02, JM-LL301, X3, WeTrack140, WeTrack2, WeTrack lite, Bl10, GT06N, OB22, ET25, HVT001, EG02, JM-VG01U, JM-VG02U, JM-VG04Q, AT1-AT6, CT10, JM-LG01, JM-LG05, TBT100

You have two options for configuring the APN on Concox GPS trackers:

- Through the [emnify Portal SMS console](#sms-console-concox) (recommended)
- Via SMS through the [emnify REST API](#rest-api-concox) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

### emnify Portal SMS console \{#sms-console-concox}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Concox GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the following command:

```shell
APN em#
```

For some Concox models, like TR02, you need to send the password with the command:

```shell
APN,666666,em#
```

:::note
The default password is `666666`.
:::

### emnify REST API \{#rest-api-concox}

You can use the [SMS calls in the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) to automate the device provisioning.

To send SMS to a device, use [**POST** `/api/v1/endpoint/{endpoint_id}/sms`](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost) with the following request body:

```json
{ 
  "source_address": "123456789",
  "payload": "APN,666666,em#" 
}
```

Replace _`123456789`_ with your chosen source address and _`666666`_ with your password if it varies from the default.

:::tip
Follow the [Getting started](https://cdn.emnify.net/api/doc/getting-started.html) guide in the emnify System Documentation to learn how to authenticate and use the API.
:::

## Coban

> Applies to Coban TK104, GPS303X, GPS103X, GPS306X, LK209, etc.

You have two options for configuring the APN on Coban GPS trackers:

- Through the [emnify Portal SMS console](#sms-console-coban) (recommended)
- Via SMS through the [emnify REST API](#rest-api-coban) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

### emnify Portal SMS console \{#sms-console-coban}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Coban GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the following commands.
You can specify the source address in the **Source** field.

To turn on GPSR:

```
gprs[PASSWORD]
```

Replace _`[PASSWORD]`_ with your password.

To set the APN:

```
APN[PASSWORD] em
```

Replace _`[PASSWORD]`_ with your password.

:::note
The default password is `123456`.
:::

:::warning
There are no spaces between `gprs`/`APN` and the password.
:::

### emnify REST API \{#rest-api-coban}

You can use the [SMS calls in the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) to automate the device provisioning.

To send SMS to a device, use [**POST** `/api/v1/endpoint/{endpoint_id}/sms`](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost) with the following request body:

```json
{ 
  "source_address": "7890",
  "payload": "APN123456 em" 
}
```

Replace _`7890`_ with your chosen source address and _`123456`_ with your password if it varies from the default.  

:::tip
Follow the [Getting started](https://cdn.emnify.net/api/doc/getting-started.html) guide in the emnify System Documentation to learn how to authenticate and use the API.
:::

## Meitrack

> Applies to P88L, P99, MT90, T663L, T333, T366, T399, TS299L, TC68L, TC68SG, T622, K211G, T355G

You have three options for configuring the APN on Meitrack GPS trackers:

- With the [Meitrack Manager](#meitrack-manager) over a USB connection
- Through the [emnify Portal SMS console](#sms-console-meitrack) (recommended)
- Via SMS through the [emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

### Meitrack Manager

Meitrack offers the Meitrack Manager, a graphical user interface, to set device-specific parameters via USB (for example, the APN or user credentials).
For usage instructions, see the [Meitrack Manager User Guide](https://www.meitrack.com/cd-download/Aided_Software/MEITRACK_Manager_User_Guide_(New_Version).pdf).

### emnify Portal SMS console \{#sms-console-meitrack}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Meitrack GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the following command:

```shell
0000,A81,em,,
```

:::note
`0000` is the default SMS password.
:::

On other devices, use the `A21` command:

```shell
666888,A21,1,server.meigps.com,8800,em,,
```

:::note
`666888` is the default super password, not the SMS password.
:::

:::info
You can change both the SMS and super password.
In that case, you need to replace those values in the SMS command.
:::

## Elinz

You have two options for configuring the APN on Elinz GPS trackers:

- Through the [emnify Portal SMS console](#sms-console-elinz) (recommended)
- Via SMS through the [emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

### emnify Portal SMS console \{#sms-console-elinz}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Elinz GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the command corresponding to your device model.

For Elinz GPS trackers:

```shell
APN,em#
```

For other models:

```shell
apnPASSWORD em
```

Replace _`PASSWORD`_ with your password.

:::note
The default password is `123456`.
:::

## ReachFar

You have two options for configuring the APN on ReachFar GPS trackers:

- Through the [emnify Portal SMS console](#sms-console-reachfar) (recommended)
- Via SMS through the [emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

### emnify Portal SMS console \{#sms-console-reachfar}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your ReachFar GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the command corresponding to your device model.

> Applies to RF-V6+, RF-V8, RF-V8S, RF-V13, RF-V16, RF-V18, RF-V20

You need to send two SMS commands.
First, to bind the tracker to a specific phone number:

```shell
PASSWORD,sos1,PHONE_NUMBER#
```

Replace _`PASSWORD`_ with your password and _`PHONE_NUMBER`_ with the correctly formatted phone number (for example, `49173871878` instead of `+49173871878`).

:::note
`123456` is the default SMS password.
:::

Next, to send this SMS from the phone:

```shell
apn,em,plmn,90143#
```

:::info
After setting the APN, you need to reboot the GPS tracker.
:::

> Applies to RF-V26, RF-V26+, RF-V28, RF-V30, RF-V32, RF-V34, RF-V36, RF-V36, RF-V38, RF-V40, RF-V42, RF-V43，RF-V44, RF-V46

You need to send two SMS commands.
First, to bind the tracker to a specific phone:

```shell
pw,123456,center,PHONE_NUMBER#
```

Replace _`123456`_ with your password and _`PHONE_NUMBER`_ with the phone number.

:::note
`123456` is the default password.
:::

Next, to send this SMS from the phone:

```shell
apn,em#
```

## Queclink

You have two options for configuring the APN on Queclink GPS trackers:

- Through the [emnify Portal SMS console](#sms-console-queclink) (recommended)
- Via SMS through the [emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

### emnify Portal SMS console \{#sms-console-queclink}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Queclink GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the following command:

```shell
AT+GTBSI=PASSWORD,em,,,,,,,0002$
```

Replace _`PASSWORD`_ with your password.

:::note
The default password is the device model (for example, `gl200`).
:::

## Bitrek

You have two options for configuring the APN on Bitrek GPS trackers:

- Through the [emnify Portal SMS console](#sms-console-bitrek) (recommended)
- Via SMS through the [emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint) or [Zapier Integration](https://zapier.com/apps/emnify/integrations/sms) (best option when automating the configuration)

### emnify Portal SMS console \{#sms-console-bitrek}

First, turn on your device and ensure the device and emnify SIM card are activated.
If you still need to do this, follow the [Create device](/quickstart/create-device) guide.

Then, follow these steps to set up the APN:

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and find your Bitrek GPS tracker.
Turning on the GPS tracker for the first time after installing the SIM shows the status as **Attached**.
The device can receive SMS at this point but only establish a data session if the APN is set up or detected.
3. [Open the SMS console](/portal/sms#open-the-sms-console) and send the following command:

```shell
setparam 0242 em
```

The Bitrek GPS tracker also utilizes a roaming command (`setparam 0917`) together with a list of enabled networks (`setparam 0020-0099`).
The following SMS command enables roaming in all networks defined by subsequent SMS:

```shell
setparam 0917 1
```

Examples of subsequent SMS to define the networks:

```shell
setparam 0020 MNC
setparam 0021 MNC
...
setparam 0099 MNC
```

Replace _`MNC`_ with the mobile network code (MNC) the device should roam on.

You can concatenate all commands into one SMS (maximum 160 characters) by using the `;` as a delimiter:

```shell
setparam 0242 em; setparam 0917 1; setparam 0020 MNC; ...
```

Replace _`MNC`_ with the MNC the device should roam on.

:::note
In this example, `em` represents emnify's network.
:::
