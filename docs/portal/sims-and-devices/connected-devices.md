---
description: Learn how to manage your devices via the Connected Devices page in the emnify Portal
slug: /portal/connected-devices
---

import Check from '../assets/check-mark-3-24.png';
import Uncheck from '../assets/x-mark-24.png';

# Connected devices

 [**Connected Devices**](https://portal.emnify.com/connected-devices) is where you manage your devices.

## Create a new device 

As part of the SIM registration process, you can [create a new device](/quickstart/register-sims#create-a-new-device) for the newly registered SIM while still in the SIM registration dialog.

To create a new device to be used with an unattached SIM, navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices) and select **Add Device**.
After providing a name for the new device and selecting device policies, you can select a SIM from the list of registered, unassigned SIMs or search for a specific SIM under **Assign SIM (optional)**.

## Get your device online

If this is your first time configuring a device for network connectivity, see the [instructions for how to get your first device online](/apn-configuration).

## Filter devices

Filters are available for both the **Extensive** and **Plain** view of the **Connected Devices** table.
These filters allow you to query devices based on one or more properties (for example, tags or the device ID).

Select the filter you want to edit, enter a value, then press the `Enter` key.
Once you've entered all the values you want to filter by, click **Apply**.

To remove a filter or value, click the corresponding **X**.

<!-- Screenshot -->

Filters can be combined or used together with the [search bar](#search-devices).
Filtered values are saved in the URL as a query parameter (for example, after filtering for devices with the `Zapier` tag, the URL includes `&tags=Zapier` at the end).

:::caution
Your selected filters remain active when you visit a device's **Details** page.
However, the filters reset if you go to another page in the Portal.
:::

### Available filters

| Property        | Value      | [Wildcard support](#wildcard-support) | Description        |
|:----------------|:-----------|:--------------------------------------|:-------------------|
| Name            | String     | <img src={Check} alt="Yes" />         | Name of a device |
| ICCID           | String     | <img src={Check} alt="Yes" />         | [Integrated circuit card identifier (ICCID)](/glossary#iccid) including the final [Luhn checksum digit](/glossary#luhn-checksum-digit) |
| Tag             | String     | <img src={Check} alt="Yes" />         | Name of a tag you've assigned to a device  |
| Device ID       | String     | <img src={Uncheck} alt="Yes" />       | Unique identifier for a device  |
| Status          | Predefined | <img src={Uncheck} alt="No" />        | List of possible [device statuses](/glossary#endpoint-status), specifically: **Enabled** or **Disabled**  |
| EID             | String     | <img src={Check} alt="Yes" />         | Unique global serial number for an eUICC ([learn more about the EID](/glossary#eid))  |
| IMEI            | String     | <img src={Check} alt="Yes" />         | [International mobile equipment identity (IMEI)](/glossary#imei), used to identify cellular modems  |
| IP address      | String     | <img src={Check} alt="Yes" />         | Unique address that identifies a device on the internet or a local network (for example, `10.1.1.9`)   |
| Coverage policy | Predefined | <img src={Uncheck} alt="No" />        | List of your configured [coverage policies](/portal/device-policies#coverage-policies)  |
| Service policy  | Predefined | <img src={Uncheck} alt="No" />        | List of your configured [service policies](/portal/device-policies#service-policies)   |

### Enter a list of values

You can also enter a list of values to search for multiple ones simultaneously.
This works for any property that accepts string values.

Lists must be plain text with every value on its own line.
Write the values exactly as they appear in the Portal.

For example, if you enter the following into the **Tag** filter, each value is parsed, and the table shows any devices with the `test`, `v1`, and `beta` tags.

```txt
test
v1
beta
```

### Wildcard support

A wildcard filter lets you find various value forms based on a partial match.
You can also use character matching with an asterisk `*`.

This is especially useful if a term has multiple spellings or you're unsure of the exact value.

For example, if you have two devices named `Phase modem` and `My iPhone`, filtering for `ph` or `ph*e` shows both devices in the results.
Another example is filtering names using `organi*ation` shows all results regardless of whether the device name uses American (organization) or British (organisation) spelling.

## Search devices

The **Connected Devices** search bar is next to the **Add device** button.
It's visible on both the **Extensive** and **Plain** table view.

<!-- Add screenshot -->

To search your devices, type a value in the text field, then press the `Enter` key.
The search is case insensitive, meaning `GPS Tracker` and `gps tracker` will have the same results, for example.

You can also combine search values with [filters](#filter-devices). 
Unlike filters, search results aren't saved in the URL. 

:::info
All the [Available filter properties](#available-filters) are searchable except **Status**, **Coverage policy**, and **Service policy**. 
:::

:::caution
Wildcards using an asterisk `*` aren't supported in the search bar.

For example, if your device's **Name** is `My iPhone`, searching `phone` shows results, but searching `*phone` doesn't.
:::

## Get device information 

To view all information about a device, navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices), find it in the list, and select **Details**.

<details className="custom-details-example">
  <summary>Show an example of Device Details</summary>
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

A device has only two states, **Enabled** or **Disabled**.

You can toggle one or more devices between these states to control their data usage.
A disabled device doesn't incur any charges.

When you want a device to connect to a network, change its status to **Enabled**.
To do this, use the **Status** toggle from the **Connected Devices** list or the device's **Details** page.

### Bulk actions

You can also perform a bulk Enable/Disable operation on a group of devices.

Use a filter to display a list of the targeted devices.
Once their checkboxes indicate that they have been selected, the bulk actions menu bar appears at the top of the screen.
Select **Device** and then one of the actions:

<!-- vale Google.OptionalPlurals = NO -->
<!-- Action names are written the same as they're shown in the Portal -->
- Enable Device(s)
- Disable Device(s)
<!-- vale Google.OptionalPlurals = YES -->

<details className="custom-details-troubleshooting">
  <summary>Show where this happens in the Portal</summary>
  <img
    src={require('./assets/bulk-enable-disable.png').default}
    alt=""
  />
</details>

:::caution
Devices can't be deleted.
You can rename/repurpose unwanted devices for use with unassigned SIMs.
:::

## Reset connectivity

You can reset a device's connectivity by selecting its **Reset connectivity** icon while viewing it in the list of [**Connected Devices**](https://portal.emnify.com/connected-devices) or by selecting the **Reset Connectivity** link for **Connection** located in the **Status** column of the **General** view of the device's **Details** modal.

<details className="custom-details-troubleshooting">
  <summary>Show where this happens in the Portal</summary>
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
