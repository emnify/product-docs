---
description: Configuring the APN for the most common GPS vendors
---
# GPS trackers

For other GPS vendors, please consult the manual and configure the APN to be `em` or `emnify`.

## Teltonika GPS APN configuration

[Source Teltonika GPS documentation](https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide_V3.2)

*Applies to FMB110, FMB120, FM130, FMB140, FMC001, FMM001, FMC125, FMC130, FMC640, FMM125, FMM130, FMM640, FMP100, FMB001, FMB002, FMB003, FMB010*

Configuring the APN for Teltonika GPS trackers can be done through:

1. Teltonika Configurator over a USB, Bluetooth connection
1. Via the SMS console through the emnify Portal
1. Via the emnify SMS API or Zapier Integration (when automating the configuration)

Newer Teltonika GPS versions automatically detect the emnify APN setting

When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status **Attached** in the emnify Portal.
At this point, the device can receive SMS but not establish a data session unless the APN is set up or detected.

The SMS command to set the APN is:

```
  setparam 2001:em
```

:::caution
The two leading spaces are required.
:::

## Ruptela GPS APN configuration

*Applies to HCV5, LCV5, Pro5, Trace5/NA, FM-Tco4 HCV/HCV 3G, FM-Tco4 LCV/LCV 3G, FM-Pro4/Pro4 3G, FM-Eco4/4+, FM-Eco4 light/light+/3G, FM-Eco4 S Series, FM-Eco4 T Series, FM-Plug4*

[Source Ruptela Documentation](https://doc.ruptela.lt/display/AB/Tracking+devices)

Configuring the APN for Ruptela GPS trackers can be done through

1. Ruptela Device Center over a USB, Bluetooth connection
1. Via the SMS console through the emnify Portal (most simple)
1. via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup or detected.

The SMS command to set the APN for Ruptela GPS trackers is:

```
[SMSpassword] setconnection em
```

The \[SMSpassword\] can be setup in the Ruptela device center.
If it is not set then the SMSpassword can be omitted and the command is only

```
setconnection em
```

## Concox GPS APN configuration

*Applies to JM-VL01, JM-VL02, JM-BL11, JM-VL03, JM-VL04, JM-LL01,
JM-LL02, JM-LL301, X3,Wetrack140, Wetrack2, Wetrack lite, Bl10, GT06N, OB22, ET25, HVT001, EG02, JM-VG01U, JM-VG02U, JM-VG04Q, AT1-AT6, CT10, JM-LG01, JM-LG05, TBT100*

Configuring the APN for Concox GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
1. via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup.

The SMS command to set the APN for Concox GPS trackers is:

```
APN em#
```

For some Concox models (e.g. TR02) the password (default 666666) needs to be send with the command

```
APN,666666,em#
```

## Coban GPS APN configuration

*Applies to Coban TK104, GPS303X, GPS103X, GPS306X, LK209, …*

Configuring the APN for Coban GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
1. via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup and the GPRS service is activated.

To turn on GPSR

```
gprs[your_password]
```

The SMS command to set the APN for Coban GPS trackers is:

```
APN[your_password] em
```

The default password is 123456. There are no spaces between gprs/APN and the password.

## Meitrack GPS APN configuration

*Applies to P88L, P99, MT90, T663L, T333, T366, T399, TS299L, TC68L, TC68SG, T622, K211G, T355G* Configuring the APN for Meitrack GPS trackers can be done

1. Via the Meitrack manager when
1. Via the SMS console through the emnify Portal (most simple)
1. via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup.

The SMS command to set the APN for Meitrack GPS trackers is:

```
0000,A81,em,,
```

Where `0000` is the default SMS password.

On other devices the APN setting is done via the A21 command

```
666888,A21,1,server.meigps.com,8800,em,,
```

Where `666888` is the default superpassword (not the SMS password).

Both SMS and Superpassword can be changed and would then need to be replaced in the SMS command.

## Elinz GPS APN configuration

Configuring the APN for Elinz GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
1. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup.

The SMS command to set the APN for Elinz GPS trackers is:

```
APN,em#
```

On other models the APN configuration is a little different

```
apn[password] em
```

Default password `123456`.

## Reachfar GPS APN configuration

Configuring the APN for Reachfar GPS trackers can be done

When the GPS tracker is turned on for the first time after the SIM is
installed it is showing the status `Attached` in the emnify portal. At
this point the device can receive SMS but not establish a data session
unless the APN is setup.

*Applies to RF-V6+, RF-V8, RF-V8S, RF-V13, RF-V16, RF-V18, RF-V20*

The following two SMS commands need to send

```
123456,sos1,[yourphonenumber]# // Bind the tracker to a specific phone number e.g. 49173871878 (instead of +49173871878). 123456 is the default SMS password.
apn,em,plmn,90143#  // Send this SMS from the phone
```

`123456` is the default password.
After setting the APN the GPS tracker needs to be rebooted.

*Applies to RF-V26, RF-V26+, RF-V28, RF-V30, RF-V32, RF-V34, RF-V36,
RF-V36, RF-V38, RF-V40, RF-V42, RF-V43，RF-V44, RF-V46*

The following two SMS commands need to send

```
pw,123456,center,[yourphonenumber]# // Bind tracker to specific phone. 123456 is the default password.
apn,em# // Send this SMS from the phone
```

## Queclink GPS APN configuration

Configuring the APN for Queclink GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
1. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup.

The SMS command to set the APN for Queclink GPS trackers is:

```
AT+GTBSI=[password],em,,,,,,,0002$ // The password default is device model,e.g. gl200
```

## Bitrek GPS APN configuration

Configuring the APN for Bitrek GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
1. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup.

The SMS command to set the APN for Bitrek GPS trackers is:

``` 
setparam 0242 em
```

The Bitrek GPS tracker also utilize a roaming command (setparam 0917) together with a list of enabled networks (setparam 0020-0099).
The following SMS commands need to be send

```
setparam 0917 1 // enable romaing in all networks as defined in the next SMS
setparam 0020 <MNC> // MNC is the mobile network code on which the device shall roam
setparam 0021 <MNC>
....
setparam 0099 <MNC>
```

All commands can be concatenated into one SMS (max. 160 characters) by using the ; as a delimiter.

```
setparam 0242 em; setparam 0917 1; setparam 0020 <MNC>; .....
```
