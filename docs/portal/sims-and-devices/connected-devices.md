---
description: Learn how to manage your devices via the Connected Devices page in the emnify Portal
slug: /portal/connected-devices
---

import Check from '../assets/check-simple.svg';
import Close from '../assets/close.svg';

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
These filters allow you to query devices based on one or more properties (for example, assigned tags or the device ID).

There are also **wildcard filters**, that let you find various value forms based on a partial match.
You can also use character matching with an asterisk `*`.
This is especially useful if a term has multiple spellings or you're unsure of the exact value.

You can find some [examples on how to implement such filters](*insert link here*) here.

<details>
  <summary>NEEDS TO BE MOVED AWAY into e.g. "How to filter" </summary>

  (rendered wrong locally, but just because of "details" element)
## How to filter
  
#### Add/edit filter
Select the filter you want to edit, enter a value, then press the `Tab` or `Enter` key.
Once you've entered all the values you want to filter by, click **Apply**.

#### Remove filter
To remove a filter or value, click the corresponding **X**.

<img
  src={require('./assets/portal-connected-devices-filters.png').default}
  alt=""
  style={{ height:450 }}
/>

#### Combine filters
Filters can be combined or used together with the [search bar](#search-devices).
Filtered values are saved in the URL as a query parameter (for example, after filtering for devices with the `Zapier` tag, the URL includes `&tags=Zapier` at the end).

:::caution
Your selected filters remain active when you visit a device's **Details** page.
However, the filters reset if you go to another page in the Portal.
:::

#### Available filters

| Property        | Value      | [Wildcard support](#wildcard-support) | Description        |
|:----------------|:-----------|:--------------------------------------:|:-------------------|
| Name            | String     | <Check alt="Yes" />         | Name of a device |
| ICCID           | String     | <Check alt="Yes" />         | [Integrated circuit card identifier (ICCID)](/glossary#iccid) including the final [Luhn checksum digit](/glossary#luhn-checksum-digit) |
| Tag             | String     | <Check alt="Yes" />         | Name of a tag you've assigned to a device  |
| Device ID       | String     | <Close alt="No" />       | Unique identifier for a device  |
| Status          | Predefined | <Close alt="No" />        | List of possible [device statuses](/glossary#endpoint-status), specifically: **Enabled** or **Disabled**  |
| EID             | String     | <Check alt="Yes" />         | Unique global serial number for an eUICC ([learn more about the EID](/glossary#eid))  |
| IMEI            | String     | <Check alt="Yes" />         | [International mobile equipment identity (IMEI)](/glossary#imei), used to identify cellular modems  |
| IP address      | String     | <Check alt="Yes" />         | Unique address that identifies a device on the internet or a local network (for example, `10.1.1.9`)   |
| Coverage policy | Predefined | <Close alt="No" />        | List of your configured [coverage policies](/portal/device-policies#coverage-policies)  |
| Service policy  | Predefined | <Close alt="No" />        | List of your configured [service policies](/portal/device-policies#service-policies)   |

#### Wildcard support

For example, if you have two devices named `Phase modem` and `My iPhone`, filtering for `ph` or `ph*e` shows both devices in the results.
Another example is filtering names using `organi*ation` shows all results regardless of whether the device name uses American (organization) or British (organisation) spelling.

### Enter a list of values

You can also enter a list of values to filter for multiple ones simultaneously.
This works for any property that accepts string values.

Lists must be plain text with every value on its own line.
Write the values exactly as they appear in the Portal.

:::tip
This feature is especially useful if you have an Excel file with dozens of values (for example, 100 ICCIDs).
If you copy and paste the entire list into the filter, you can skip the tedious task of entering each value individually.
:::

To demonstrate, if you enter the following in the **Tag** filter and press the `Enter` key:

```txt
test
v1
beta
```

Each value is parsed, and the table shows any devices with the `test`, `v1`, and `beta` tags.

<img
  src={require('./assets/portal-connected-devices-filters-tag.png').default}
  alt=""
  style={{ height:400 }}
/>

</details>

## Search devices

The **Connected Devices** search bar is next to the **Add device** button.
It's visible on both the **Extensive** and **Plain** table view.

To search your devices, type a value in the text field, then press the `Enter` key.
To reset, click the corresponding **X**.

<img
  src={require('./assets/portal-connected-devices-search.png').default}
  alt=""
/>

:::info
All the [Available filter properties](#available-filters) are searchable except **Status**, **Coverage policy**, and **Service policy**. 
:::

Unlike [filters](#filter-devices), where the results are focused on one property, the search simultaneously looks for matches across multiple properties.
For example, if you enter the number `2`, the search results would show any device with `2` in its name (like `WalkieTalkie 2.0`), any assigned tags, or one or more of its numeric values (**ICCID**, **EID**, etc.).

The search is case insensitive, meaning `GPS Tracker` and `gps tracker` would produce the same results.
You can also combine the search with filters, but searched values aren't saved in the URL. 

:::caution
Wildcards using an asterisk `*` aren't supported in the search bar.

For example, if your device's **Name** is `My iPhone`, searching `phone` would show results, but searching `*phone` wouldn't.
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
