---
description: Manually configure the APN for an Android device
last_update: 
  date: 01-07-2023
slug: /apn-configuration/android
---

# Configuring the APN on Android Devices

EMnify's network is engineered to support IoT/M2M data traffic, but EMnify SIMs can also be utilized in standard Android devices, like smartphones or Android-operated IoT gadgets such as POS devices.  
To ensure seamless connectivity, it's essential to configure the APN settings correctly.  
Here's how you can set up your Android device with an EMnify SIM:

1. **Insert the EMnify SIM**: Ensure your phone is unlocked and insert the EMnify SIM card into the SIM slot.

2. **Access Network Settings**:
    - Navigate to your phone's main **Settings**.  
    - Proceed to **Connections** > **Mobile Networks**. In some cases, you might need to select **More Networks** first.  
    - Make sure both **Mobile Data** and **Data Roaming** are enabled.

3. **Set Up the APN**:
    - Go to **Access Point Names** and tap on **Menu**.  
    - Choose **New APN** or tap on the **+** sign.  
    - Enter "EMnify" for the name and "em" for the APN field. Leave other fields blank or as **Not Set**.  
    - Save these settings. If there are multiple APNs, select the one you've just created as the active APN.

4. **Restart & Verify Connection**:
    - Restart your Android device.  
    - Once the device is back on, look for signal bars indicating a network connection.  
    - To confirm the connection's success, open a web browser and visit `https://www.emnify.com`.  
    - Additionally, the EMnify User Interface (EUI) should display the endpoint status as "Online".

**Troubleshooting**: If the APN settings vanish after being correctly set, remember that EMnify SIM cards can house up to 6 IMSIs, with each having a different APN associated based on the country of use.  
Android devices often link an APN with a specific IMSI.  
To maintain the correct APN settings, match the APN with the Mobile Country Code (MCC) and Mobile Network Code (MNC) corresponding to one of the available IMSIs on the EMnify SIM.

| APN | MCC | MNC |
| --- | --- | --- |
| em  | 295 | 05  |
| em  | 295 | 09  |
| em  | 901 | 43  |
| em  | 206 | 01  |
| em  | 234 | 50  |
| em  | 724 | 51  |

*For a visual guide on configuring the APN settings on an Android device, please refer to the provided screenshot.*
TODO: INSERT IMAGE
