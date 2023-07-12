---
description: Learn how to manage your devices via the Connected Devices page in the emnify Portal
slug: /portal/connected-devices
---

# Connected Devices

You can manage your devices from the [**Connected Devices**](https://portal.emnify.com/connected-devices) page.

## Create a new device 

As part of the SIM registration process, you can [create a new device](/quickstart/register-sims#create-a-new-device) for the newly registered SIM while still in the SIM registration dialog.

To create a new device to be used with an unattached SIM, navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices) and select **Add Device**.
After providing a name for the new device and selecting device policies, you can select a SIM from the list of registered, unassigned SIMs or search for a specific SIM under **Assign SIM (optional)**.

## Get your device online

If this is your first time configuring a device for network connectivity, see the [instructions for how to get your first device online](/apn-configuration).

## Get device information 

To view all information about a device, navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices), find it in the list, and select **Details**.

<details className="custom-details-example">
  <summary>Show me an example of Device Details</summary>
  <img
    src={require('./assets/device-details.png').default}
    alt=""
  />
</details>

### IMSI

The international mobile subscriber identity (IMSI) is a unique number used to identify a GSM subscriber. 
Therefore it will change if a device connects to a different operator while roaming.

<details className="custom-details-tip">
  <summary>See how the IMSI is constructed</summary>
  An IMSI is usually a 15-digit number but can be 14 digits in some cases.   
  
  It comprises three components: MCC, MNC, and MSIN.

  MCC: 3-digit country identifier  
  MNC: Operator identifier (2 or 3 digits)  
  MSIN: Identifier for the connected device (9 or 10 digits)  

  <img
    src={require('./assets/imsi-components-table.png').default}
    style={{width:300}}
    alt=""
  />
</details> 

### MSISDN

The mobile station international subscriber directory number (MSISDN) is essentially the telephone number assigned to each SIM.
For an emnify IoT eSIM, this number is needed for its ability to receive SMS messages (i.e., [SMS MT](/glossary#sms-mt)).

### IMEI

The international mobile equipment identity (IMEI) is a unique number used to identify cellular modems.

<details className="custom-details-tip">
  <summary>Learn more about IMEIs</summary>
  An IMEI has 15 digits (14 digits plus a check digit).

  An IMEISV has 16 digits (14 digits plus two software version digits).

  For more detailed information, see emnify's IoT Glossary article: [What is an IMEI number?](https://www.emnify.com/iot-glossary/imei-number)
</details>

## Device status

A device has only two states: **Enabled** or **Disabled**.

You can toggle one or more devices between these states to control their data usage.
A disabled device doesn't incur any charges.

When you are ready to deploy a device and want it to connect to a network, change its status to **Enabled**.

To change a device's status, use the **Status** toggle from the **Connected Devices** list or the device's **Details** page.

You can also perform a bulk Enable/Disable operation on a group of devices.
Use a filter to display a list of the targeted devices.
Once their checkboxes indicate that they have been selected, the bulk actions menu bar appears at the top of the screen.
Select **Device** and then one of the actions:

- Enable Device(s)
- Disable Device(s)

<details className="custom-details-troubleshooting">
  <summary>Show me how to enable/disable multiple devices</summary>
  <img
    src={require('./assets/bulk-enable-disable.png').default}
    alt=""
  />
</details>

:::info
Devices cannot be deleted.
You can rename/repurpose unwanted devices for use with unassigned SIMs.
:::

## Reset connectivity

You can reset a device's connectivity by selecting its **Reset connectivity** icon while viewing it in the list of [**Connected Devices**](https://portal.emnify.com/connected-devices) or by selecting the **Reset Connectivity** link for **Connection** located in the **Status** column of the **General** view of the device's **Details** modal.

<details className="custom-details-troubleshooting">
  <summary>Show me where I can reset a device's connectivity</summary>
  <img
    src={require('./assets/connected-devices-reset-connectivity.png').default}
    style={{width:900}}
    alt=""
  />
  <img
    src={require('./assets/device-details-reset-connectivity.png').default}
    style={{width:325}}
    alt=""
  />
</details>
