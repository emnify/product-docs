---
description: Learn how to manage your devices via the Connected Devices page in the emnify Portal
slug: /portal/connected-devices
---

# Connected devices

 [**Connected Devices**](https://portal.emnify.com/connected-devices) is where you manage your devices.

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

### Useful terms

The following terms are particularly useful to know when looking at the **Device Details**.
Each listed term includes a link to its associated [Glossary](/glossary) entry:

- [IMSI](/glossary#imsi)
- [MSISDN](/glossary#msisdn)
- [IMEI](/glossary#imei)

## Device status

A device has only two states: **Enabled** or **Disabled**.

You can toggle one or more devices between these states to control their data usage.
A disabled device doesn't incur any charges.

When you want a device to connect to a network, change its status to **Enabled**.
To do this, use the **Status** toggle from the **Connected Devices** list or the device's **Details** page.

### Bulk actions

You can also perform a bulk Enable/Disable operation on a group of devices.

Use a filter to display a list of the targeted devices.
Once their checkboxes indicate that they have been selected, the bulk actions menu bar appears at the top of the screen.
Select **Device** and then one of the actions:

- Enable Device(s)
- Disable Device(s)

<details className="custom-details-troubleshooting">
  <summary>Show me where this happens in the Portal</summary>
  <img
    src={require('./assets/bulk-enable-disable.png').default}
    alt=""
  />
</details>

:::caution
Devices cannot be deleted.
You can rename/repurpose unwanted devices for use with unassigned SIMs.
:::

## Reset connectivity

You can reset a device's connectivity by selecting its **Reset connectivity** icon while viewing it in the list of [**Connected Devices**](https://portal.emnify.com/connected-devices) or by selecting the **Reset Connectivity** link for **Connection** located in the **Status** column of the **General** view of the device's **Details** modal.

<details className="custom-details-troubleshooting">
  <summary>Show me where this happens in the Portal</summary>
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
