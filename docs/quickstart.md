---
sidebar_position: 2
---

# Quickstart

To begin developing your IoT solutions with emnify, you will need an emnify account.
[Sign up](https://portal.emnify.com/sign/up?utm_source=dev-hub) for free to a 60-day trial to use all functionalities.

## Order a free evaluation SIM package

You can order your free Evaluation SIM package on the emnify Portal with which you can test all emnify services.
Currently, the 3 physical SIM cards can be delivered to many destinations at no charge.
For other destinations, we do charge a small shipping fee.

To get started immediately, you can download the eSIM for your smartphone or eSIM enabled tablet for free.

Log into your [emnify account](https://portal.emnify.com) and follow these steps:

1. On the dashboard, click on order on **Get your FREE SIMs**
![Order SIMs](./assets/order-SIM_step1.png)
**Order SIMSs**
2. Select the SIM cards of your choice.
![Select SIM type](assets/order-SIM_step2.png)
If you select physical SIM cards, you can further choose between 3in1 (no nano SIM) or 4in1 (with nano SIM).
![Select SIM form](assets/order-SIM_step2.1.png)
If you select the eSIM, you can directly download it into your eSIM compatible phone.
You can find the instructions to do so in this [blog post](https://www.emnify.com/en/developer-hub/emnify-developer-esim).
3. For the physical SIM cards, proceed to fill in your shipping details.
![Shipping details](assets/order-SIM_step3.png)
4. Proceed to pay the shipping charges and you will be notified when the SIM cards will be shipped.
![Payment details](assets/order-SIM_step4.png)

## Registering SIMs

Once you get your emnify SIMs, you need to register them before you can start using them.

1. If you have ordered the 3 orange evaluation SIM cards, you will have to register them one by one.
Scan the QR code printed on the SIM card with your QR code scanner app and follow the link to associate the SIM with your account.
The link includes the **BIC** (Batch Identification Code) of the card.
![Scan QR Code](assets/QRScan.png)
2. If you do not have a QR reader or want to do this on a desktop PC without a camera, register by manually entering the BIC.
Login to your [emnify account](https://portal.emnify.com?utm_source=dev-hub).
On the dashboard, click the [REGISTER](https://portal.emnify.com/sim-registration/single) link in the "Register your SIM cards" section.
![Register SIM](assets/register_sims.png)
![Register single SIM](assets/register_single_sim.png)
3. Enter the Batch Identification Code (**BIC** 1) in the prompt. You can find the BIC1 on the back of your SIM card.
![BIC1](assets/BIC.png)
4. If you have ordered more than 5 SIM cards, you need to batch register them using the **BIC2**.
![BIC2](assets/register_batch_sim.png)
![Registration complete](assets/register_sim_complete.png)

If you have a developer eSIM, the downloading process of an eSIM
automatically registers it in our portal.

## Creating a Device

After you register a SIM, you need to create a virtual representation of the device associated with the SIM.
To create a device, give it a name and assign a service and coverage policy.
![Create new device](assets/create_device.png)

If you plan on using your device right away, activate it. If you do not plan on using the device right away, select "leave disabled".

## Getting the first device online

Any device equipped with a SIM card requires an APN (Access Point Name) configuration to establish a data session.
Some devices and networks auto-detect the APN but for most cases you need to configure it.

[APN](#APN): `em` (or alternatively use `emnify`)

Further, some Android / iOS-based devices and cellular modules also need to be configured to allow for roaming.

Select your device type and model below, to see how to configure the
APN.

| [Android](#android) | [iOS devices](#ios-devices) | 
| [Cellular modules](#cellular-modules) | [GPS tracker](#gps-tracker) | [Industrial Routers](#industrial-routers) |

### Cellular modules

#### Quectel cellular IoT modules

*Applies to all Quectel modules: BG95, BG96, EG25, EG91, EG95, EC21,
EC25, M65, M66, M95, MC60, BG77, BG600L*

With Quectel modules the APN can be set with the 3GPP standard command `AT+CGDCONT`

`AT+CGDCONT=1,"IP","em",,`

Quectel also utilizes a vendor specific Command `AT+QICSGP`

`AT+QICSGP=1,1,"em","","",1`

According to [Quectel](https://www.quectel.com/faqs/12-8-what-is-the-difference-between-cgdcont-and-qicsgp/) the command `AT+QICSGP` should be used when the internal TCP/UDP stack is used.
It also lets you configure which bearer (CSD or
GPRS) is used.
GPRS must be used.

For managing roaming, Quectel also introduced the `AT+QCFG` command.
The suggested setting is:

`AT+QCFG="roamservice",2,1`

:::note
Check your Quectel module AT command guide for more information.
:::

#### u-Blox cellular IoT modules

u-Blox supports the standard 3GPP command to set APNs via `AT+CGDCONT`

`AT+CGDCONT=1,"IP","em",,`

u-Blox also supports a vendor specific command to configure the APN for the initial EPS bearer.

`AT+UCGDFLT=1,"IP","em"`

For roaming configuration u-blox modules utilize a vendor specific `AT+UDCONF` command.
This enables automatic search in case the device cannot attach to a specific network.

`AT+UDCONF=20,2`

:::note
Check your u-Blox module AT command guide for more information.
:::

#### General cellular IoT modules

*Applies to a cellular module vendors: Fibocom, Telit, Sierra Wireless, SIMcom, Cinterion, Gemalto, Thales, Sequans*

The commands for configuring the APN settings are 3GPP standardized and all major cellular module manufacturer support the commands.
The `AT+CGDCONT` command needs to be utilized to set the APN.

`AT+CGDCONT=1,"IP","em",,`

:::note
Check your AT command guide for further information or read [3GPP Technical Specification 27.007](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1515).
:::

### GPS tracker

For other GPS vendors please consult the manual and configure the APN to be `em` or `emnify`.

#### Teltonika GPS APN configuration

[Source Teltonika GPS documentation](https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide_V3.2)

*Applies to FMB110, FMB120, FM130, FMB140, FMC001, FMM001, FMC125,
FMC130, FMC640, FMM125, FMM130, FMM640, FMP100, FMB001, FMB002, FMB003,
FMB010*

Configuring the APN for Teltonika GPS trackers can be done through

1. Teltonika Configurator over a USB, Bluetooth connection
2. Via the SMS console through the emnify Portal (most simple)
3. via the emnify SMS API or Zapier Integration (when automating the configuration)

Newer Teltonika GPS versions automatically detect the emnify APN setting

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is setup or detected.

The SMS command to set the APN is:

```
  setparam 2001:em
```
:::note
This command contains two leading spaces.
:::

#### Ruptela GPS APN configuration

*Applies to HCV5, LCV5, Pro5, Trace5/NA, FM-Tco4 HCV/HCV 3G, FM-Tco4 LCV/LCV 3G, FM-Pro4/Pro4 3G, FM-Eco4/4+, FM-Eco4 light/light+/3G, FM-Eco4 S Series, FM-Eco4 T Series, FM-Plug4*

[Source Ruptela Documentation](https://doc.ruptela.lt/display/AB/Tracking+devices)

Configuring the APN for Ruptela GPS trackers can be done through

1. Ruptela Device Center over a USB, Bluetooth connection
2. Via the SMS console through the emnify Portal (most simple)
3. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point, the device can receive SMS but not establish a data session unless the APN is set up or detected.

The SMS command to set the APN for Ruptela GPS trackers is:

```
[SMSpassword] setconnection em
```

The \[SMSpassword\] can be setup in the Ruptela device center.
If it is not set, then the SMSpassword can be omitted and the command is only:

```
setconnection em
```

#### Concox GPS APN configuration

*Applies to JM-VL01, JM-VL02, JM-BL11, JM-VL03, JM-VL04, JM-LL01,
JM-LL02, JM-LL301, X3,Wetrack140, Wetrack2, Wetrack lite, Bl10, GT06N, OB22, ET25, HVT001, EG02, JM-VG01U, JM-VG02U, JM-VG04Q, AT1-AT6, CT10, JM-LG01, JM-LG05, TBT100*

Configuring the APN for Concox GPS trackers can be accomplished

1. Via the SMS console through the emnify Portal (most simple)
2. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point, the device can receive SMS but not establish a data session unless the APN is setup.

The SMS command to set the APN for Concox GPS trackers is:

```
APN em#
```
:::note
For some Concox models (e.g., TR02) the default password is `666666` and needs to be send with the command.
:::

```
APN,666666,em#
```

#### Coban GPS APN configuration

*Applies to Coban TK104, GPS303X, GPS103X, GPS306X, LK209, …*

Configuring the APN for Coban GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
2. via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point, the device can receive SMS but not establish a data session unless the APN is setup and the GPRS service is activated.

To turn on GPSR

```
gprs[your_password]
```

The SMS command to set the APN for Coban GPS trackers is:

```
APN[your_password] em
```
:::note
The default password is `123456`.
There are no spaces between gprs/APN and the password.
:::

#### Meitrack GPS APN configuration

*Applies to P88L, P99, MT90, T663L, T333, T366, T399, TS299L, TC68L, TC68SG, T622, K211G, T355G* Configuring the APN for Meitrack GPS trackers can be done

1. Via the Meitrack manager when
2. Via the SMS console through the emnify Portal (most simple)
3. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it shows the status **Attached** in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is set up.

The SMS command to set the APN for Meitrack GPS trackers is:

```
0000,A81,em,,
```
:::note
The default SMS password is `0000`.
:::


On other devices the APN setting is done via the `A21` command

```
666888,A21,1,server.meigps.com,8800,em,,
```
:::note
In this example, `666888` is the default superpassword, not the SMS password.
:::


Both SMS and Superpassword can be changed and would then need to be replaced in the SMS command.

#### Elinz GPS APN configuration

Configuring the APN for Elinz GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
2. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status `Attached` in the emnify portal.
At this point, the device can receive SMS but not establish a data session unless the APN is set up.

The SMS command to set the APN for Elinz GPS trackers is:

```
APN,em#
```

On other models the APN configuration is a little different:

```
apn[password] em
```

:::note
The default SMS password is `123456`.
:::


#### Reachfar GPS APN configuration

It is possible to configure the APN for Reachfar GPS trackers.

When the GPS tracker is turned on for the first time after the SIM is
installed, the emnify portal will show its status as **Attached**.
In this state, the device can receive SMS but cannot establish a data session until the APN is set up.

*Applies to RF-V6+, RF-V8, RF-V8S, RF-V13, RF-V16, RF-V18, RF-V20*

You will need to send two SMS commands:

```
123456,sos1,[yourphonenumber]#
```
This binds the tracker to a specific phone number, e.g., `49173871878`.

:::caution
Do not preifix a `+` to the phone number.
For instance, the example above should not be entered as `+49173871878`).
:::

:::note
The default SMS password is `123456`.
:::

```
apn,em,plmn,90143#  // Send this SMS from the phone
```

:::note
The default SMS password is `123456`.
:::

After setting the APN the GPS tracker needs to be rebooted.

*Applies to RF-V26, RF-V26+, RF-V28, RF-V30, RF-V32, RF-V34, RF-V36,
RF-V36, RF-V38, RF-V40, RF-V42, RF-V43，RF-V44, RF-V46*

The following two SMS commands need to send

```
pw,123456,center,[yourphonenumber]#
```
This binds the tracker to the phone number you specify.

:::note
The default SMS password is `123456`.
:::

```
apn,em# // Send this SMS from the phone
```

#### Queclink GPS APN configuration

Configuring the APN for Queclink GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
2. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed, the emnify portal will show its status as **Attached**.
In this state, the device can receive SMS but cannot establish a data session until the APN is set up.

The SMS command to set the APN for Queclink GPS trackers is:

```
AT+GTBSI=[password],em,,,,,,,0002$ // The password default is device model,e.g. gl200
```

#### Bitrek GPS APN configuration

Configuring the APN for Bitrek GPS trackers can be done

1. Via the SMS console through the emnify Portal (most simple)
2. Via the emnify SMS API or Zapier Integration (when automating the configuration)

When the GPS tracker is turned on for the first time after the SIM is installed it is showing the status **Attached** in the emnify portal.
At this point the device can receive SMS but not establish a data session unless the APN is set up.

The SMS command to set the APN for Bitrek GPS trackers is:

``` 
setparam 0242 em
```

The Bitrek GPS tracker also utilize a roaming command (setparam 0917) together with a list of enabled networks (setparam 0020-0099).
The following SMS commands need to be send

```
setparam 0917 1
```
This enables roaming in all networks as defined in the next SMS command:

```
setparam 0020 <MNC>
```
where `<MNC>` represents the mobile network code on which the device will roam.

```
setparam 0021 <MNC>
....
setparam 0099 <MNC>
```

Multiple commands can be concatenated into a single SMS (max. 160 characters) by using semicolons (`;`) to delimit them.

```
setparam 0242 em; setparam 0917 1; setparam 0020 <MNC>; .....
```

### Industrial Routers

*Applies to RUT240, RUT950, RUT955, RUTX09, RUTX11, RUTX12, RUTX14,
RUTXR1, RUT360*

Newer firmware version of the Teltonika Routers should automatically detect the emnify APN.
Nevertheless, in case the APN is not correctly detected it can be configured with 3 methods

1. With the Teltonika WebUI over Wifi, Ethernet
2. Via the SMS console through the emnify Portal (most simple)
3. via the emnify SMS API or Zapier Integration (when automating the configuration)
4. APN configuration through the Teltonika Router WebUI
Connect your PC through the routers Wi-Fi using the credentials provided on the device.
Open the Teltonika WebUI <http://192.168.1.1> and go to the Mobile configuration.
Type in `em` in APN – there is no PIN configured on the SIM and no APN username or password required.
5. Teltonika Networks Router APN configuration via SMS console / API or Zapier [Teltonika Documentation Source](https://wiki.teltonika-networks.com/view/SMS_Commands)

Make sure that the Router is powered on and the SIM card is inserted and activated.
In the emnify portal the device should show as **Attached**.

The following SMS command need to be send to the device:

```
cellular apn=em
```

### Android

When setting up an Android device with an emnify SIM you need to follow these 5 steps:

1. Go to **Settings** → **Mobile Network**.
2. Go to **Mobile Data**.
3. Enable roaming and go to **APN** (Access Point Names).
4. Create a new APN with any name and configure the APN with `em`.

![Android\_01\_Settings.jpg](./assets/Android_01_Settings.jpg)

![Android\_02\_Mobile\_Network.jpg](./assets/Android_02_Mobile_Network.jpg)

![Android\_03\_Mobile\_Data.jpg](./assets/Android_03_Mobile_Data.jpg)

![Android\_04\_Create\_Access\_Point\_name.jpg](./assets/Android_04_Create_Access_Point_name.jpg)

![Android\_05\_Configure\_APN.jpg](./assets/Android_05_Configure_APN.jpg)

### iOS devices

When setting up an iOS device with an emnify IoT SIM you need to follow 4 steps:

1. Go to **Settings** → **Mobile Data**.
2. Click the emnify **Data Plan** (first one if regular SIM or secondary in case of eSIM).
3. Enable Roaming and click **Mobile Data Network**.
4. Set APN to `em` but leave everything else blank.

![iOS\_01\_Settings.png](./assets/iOS_01_Settings.png)

![iOS\_02\_Mobile\_Data.png](./assets/iOS_02_Mobile_Data.png)

![iOS\_03\_Mobile\_Network.png](./assets/iOS_03_Mobile_Network.png)

![iOS\_04\_APN.png](./assets/iOS_04_APN.png)

## Troubleshooting

When you experience issues while connecting your device for the first time there are several common patterns that can be identified by looking at the connected device section in the portal.
If you do not have any entry in the connected devices, go back to [Creating a Device](#creating-a-device) and assign the SIM.

The device will show different icons that indicate the status: **Offline**, **Attached**, **Online**, or **Blocked**.
If no icon is visible, assign a SIM to the device.

To troubleshoot most cases, a look at **Details** → **Events** is necessary.
A typical event flow should look like this:

1. Update Location - the SIM card is (re)authenticating with a different network element.
If successful the device will show as **Attached** and can already receive SMS.
2. Update GPRS location - the SIM card has successfully registered for data sessions with a different network element.
3. Create PDP context - the device has started a data transfer.
The device will show **Online** as long is there is no delete PDP context event.
4. Delete PDP context - the device has ended a data transfer.
The event details will also show the data transmitted and the device status will be set to **Offline**.

![event\_flow.png](./assets/event_flow.png)

There can be many update locations before or in between the data session.

![offline.png](./assets/offline.png) **The device is offline**

- Click **Details** and make sure the device is enabled.
- Click **Details** → **Events**.
Validate if there is any location update event created and rejected.
The reasoning should indicate the resolution to the problem.
If there is no location update event:
- Make sure the device is powered on and is searching for a network.
- Make sure the device is has reception of any supported network.

![attached.png](./assets/attached.png) **The device shows attached but does not transmit data**

- Make sure the APN is correctly set to `em` or use alternatively `emnify` since some devices do not support two-character APNs.
Guides for different devices can be found [here].(#getting-the-first-device-online)
- In case you changed policy settings, make sure the radio types (2G,3G,4G) and data access is activated
- Make sure mobile data is enabled and that international roaming is allowed.
- Click **Details** → **Events**.
Validate if there is any PDP create event and rejected.
The reason and resolution is given in the event description.

The **Attached** status does not necessarily mean that the device is powered on.
If the device attaches to a network and then powers off, there is no information towards the emnify network that would allow to detect this.

![online.png](./assets/online.png) **The device shows online but does not transmit data**\*

- Make sure mobile data is enabled and that international roaming is allowed.
- Validate under **Details** → **Events** if any **Warn** or **Error** is detected.
- For NB-IoT and LTE-M this behaviour can happen when the device automatically connects to a network.
Specify the desired network using the `AT+COPS` command.
Also verify that the network is on emnify’s [NB-IoTcoverage](https://www.emnify.com/nb-iot-coverage) or [LTE-M network coverage](https://www.emnify.com/lte-m-coverage) list.
- Make sure your data destination and DNS server (default emnify uses googles 8.8.8.8 DNS if your device does not specify a DNS server) is not blocked for the device.

### Other general troubleshooting tips
- After configuration changes, make sure they are correctly applied on the device (e.g., with a reboot).
- Clicking the reset connectivity icon ![](./assets/reset_connectivity.png) on **Connected Devices** can also reset the network state and allow your device to freshly reattach.
- The issue may only be present with one network or in the specific location (e.g., due to high interference for this network).
You can use the **Operator Blacklist** to block the network and force the change to a different network.
