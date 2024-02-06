---
description: Manually configure the emnify APN for an Android-powered device
last_update: 
  date: 08-09-2023
sidebar_label: Android
slug: /apn-configuration/android
---

# Configure the APN on Android-powered devices

While emnify's network is engineered to support IoT/M2M data traffic, it's possible to use emnify SIMs in a consumer device like an Android mobile phone to verify if connectivity is available.
You can also use emnify SIMs in Android-powered IoT devices, such as point of sale (POS) hardware.

:::warning
Before configuring the APN on a mobile phone, make sure your device is unlocked (that is, not locked or limited to a specific operator).
:::

It's essential to configure the APN settings correctly to ensure seamless connectivity.
Here's how you can set up your Android-powered device with an emnify SIM:

1. **Insert the emnify SIM**  
Ensure your phone is unlocked and insert the emnify SIM card into the SIM slot.

2. **Manage network settings**
    1. Navigate to your device's main **Settings**.
    1. Proceed to **Connections**&nbsp;<span aria-label="and then">></span> **Mobile Networks**.
    In some cases, you might need to select **More Networks** first.
    1. Select both the **Mobile Data** and **Data Roaming** checkboxes.

3. **Set up the APN**
    1. Go to **Access Point Names**. 
    1. Tap **Menu**, then either **+** or **New APN**.
    1. Enter `emnify` as the name and `em` as the APN.
    Leave other fields blank or **Not set**.
    1. Save these settings.
    If there are multiple APNs, select the one you've created named `emnify` as the active APN.

4. **Restart and verify your connection**
    1. Restart your device.  
    1. Once the device is back on, look for signal bars indicating a network connection.  
    1. To confirm a successful connection, open a web browser and visit `https://www.emnify.com`.
    1. Additionally, you can monitor the connectivity in the [emnify Portal](https://portal.emnify.com/).
    If your APN settings configuration was successful, your device's status should show as **Online**.

## Troubleshooting

The configuration may disappear on your device, even if you set up the APN correctly.

Android-powered devices match an APN to a specific [International Mobile Subscriber Identity (IMSI)](/glossary#imsi).
emnify SIM cards can have up to six IMSIs, and different IMSIs can be selected depending on the country where you use the SIMs.

To maintain the correct APN settings, match the APN to the Mobile Country Code (**MCC**) and Mobile Network Code (**MNC**) of the five available IMSIs an emnify SIM can select.

| APN | MCC | MNC |
| --- | --- | --- |
| em  | 295 | 05  |
| em  | 295 | 09  |
| em  | 901 | 43  |
| em  | 206 | 01  |
| em  | 234 | 50  |
| em  | 724 | 51  |
