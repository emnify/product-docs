---
description: Learn how to manage your devices via the Connected Devices page in the emnify Portal
last_update: 
  date: 08-31-2023
slug: /portal/connected-devices
---

# Connected devices

import Check from '../assets/check.svg';
import Close from '../assets/close.svg';

 [**Connected Devices**](https://portal.emnify.com/connected-devices) is where you manage your devices.

## Create a new device

As part of the SIM registration process, you can [create a new device](/quickstart/register-sims#create-a-new-device) for the newly registered SIM while still in the SIM registration dialog.

To create a new device to be used with an unattached SIM, navigate to **Connected Devices** and select **Add Device**.
After providing a name for the new device and selecting device policies, you can select a SIM from the list of registered, unassigned SIMs or search for a specific SIM under **Assign SIM (optional)**.

## Get your device online

For information about configuring a device for network connectivity, see [Get a device online](/apn-configuration).

## Filter devices

Filters are available for both the **Extensive** and **Plain** view of the **Connected Devices** table.
These filters allow you to query devices based on one or more properties (for example, assigned tags or the device ID).

Select the filter you want to edit, enter a value, then press the `Tab` or `Enter` key.
Once you've entered all the values you want to filter by, click **Apply**.

To remove a filter or value, click the corresponding **X**.

<img
  src={require('./assets/portal-connected-devices-filters.png').default}
  alt=""
  style={{ height:450 }}
/>

Filters can be combined or used together with the [search bar](#search-devices).
Filtered values are saved in the URL as a query parameter (for example, after filtering for devices with the `Zapier` tag, the URL includes `&tags=Zapier` at the end).

:::caution
Your selected filters remain active when you visit a device's **Details** page.
However, the filters reset if you go to another page in the Portal.
:::

### Available filters

| Property        | Value      | [Wildcard support](#wildcard-support) | Description        |
|:----------------|:-----------|:--------------------------------------:|:-------------------|
| Name            | String     | <Check alt="Yes" />         | Name of a device. |
| ICCID           | String     | <Check alt="Yes" />         | Integrated circuit card identifier including the final Luhn checksum digit. |
| Tag             | String     | <Check alt="Yes" />         | Name of a tag you've assigned to a device.  |
| Device ID       | String     | <Close alt="No" />       | Unique identifier for a device.  |
| Status          | Predefined | <Close alt="No" />        | List of possible device statuses, specifically: **Enabled** or **Disabled**.  |
| EID             | String     | <Check alt="Yes" />         | Unique global serial number for an eUICC.  |
| IMEI            | String     | <Check alt="Yes" />         | International mobile equipment identity, used to identify cellular modems.  |
| IP address      | String     | <Check alt="Yes" />         | Unique address that identifies a device on the internet or a local network (for example, `10.1.1.9`).   |
| Coverage policy | Predefined | <Close alt="No" />        | List of your configured [coverage policies](/portal/device-policies#coverage-policies).  |
| Service policy  | Predefined | <Close alt="No" />        | List of your configured [service policies](/portal/device-policies#service-policies).   |

### Wildcard support

A wildcard filter lets you find various value forms based on a partial match.
You can also use character matching with an asterisk `*`.

This is especially useful if a term has multiple spellings or you're unsure of the exact value.

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
  style={{ height: 400 }}
/>

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

Unlike filters, where the results are focused on one property, the search simultaneously looks for matches across multiple properties.
For example, if you enter the number `2`, the search results would show any device with `2` in its name (like `WalkieTalkie 2.0`), any assigned tags, or one or more of its numeric values (**ICCID**, **EID**, etc.).

The search is case insensitive, meaning `GPS Tracker` and `gps tracker` would produce the same results.
You can also combine the search with filters, but searched values aren't saved in the URL.

:::caution
Wildcards using an asterisk `*` aren't supported in the search bar.

For example, if your device's **Name** is `My iPhone`, searching `phone` would show results, but searching `*phone` wouldn't.
:::

## Get device information

To view all information about a device, navigate to **Connected Devices**, find it in the list, and select **Details**.

The **General** view shows the following properties:

| Property          | Description                                      |
|:------------------|:-------------------------------------------------|
| Status            | Current state of the device (in this document, see [Device status](#device-status)). |
| Services          | Indicates whether the following services are active or disabled: <ul><li>Data</li><li>SMS MT</li><li>SMS MO</li></ul> |
| Connection        | [Connectivity status](/glossary#connectivity-status) and available PDP context, with an option to reset the connectivity. <br /><br /> If the device is **Online**, click the `i` icon to show all connectivity information—breakout IP, MSC, VLR, etc. |
| Blocked networks | Names of any operators on the device's networks blocklist (often used for [troubleshooting](/quickstart/troubleshooting#other-general-troubleshooting-tips)). |
| Device            | Identifiers for the device, including: <ul><li>Device ID (referred to as `endpoint_id` when working with the [REST API](https://cdn.emnify.net/api/doc/endpoint.html))</li><li>Configured IP address</li><li>IMEI and a toggle to indicate whether [IMEI lock](/services/security#imei-lock) is turned on</li></ul> |
| Policies          | Names of the assigned [service policy](/portal/device-policies#service-policies) and [coverage policy](/portal/device-policies#coverage-policies). |
| SIM               | Properties of the assigned SIM, including: <ul><li>IMSI</li><li>MSISDN</li><li>ICCID</li></ul> Also includes an option to release the SIM. If there's no assigned SIM, this section is empty and shows an option to assign a SIM. |
| Usage             | Data and SMS traffic based on a selected time period: <ul><li>Last hour</li><li>Current month</li><li>Last month</li></ul> |

:::tip
For definitions of any unfamiliar terms or acronyms, see the [Glossary](/glossary).
:::

## Device status

| State            | Description                                      |
|:-----------------|:-------------------------------------------------|
| **Enabled**       | A SIM is assigned to the device and activated. The device must be enabled to connect to a network. |
| **Disabled**    | No SIM assigned, or the assigned SIM is suspended. |
| **Deleted**    | Permanently removed from your **Connected Devices**. |

### Configure the device status

A device has only two configurable states, **Enabled** or **Disabled**.
You can toggle one or more devices between these states to control their data usage.

:::caution Warning for API users
If you're using the [emnify REST API](https://cdn.emnify.net/api/doc/index.html) to configure devices, it's possible to have a **Disabled** endpoint with an **Activated** assigned SIM.
In this case, you'll continue to accrue costs as emnify charges for activated SIMs.
Be sure to suspend the assigned SIM to avoid unexpected charges.

You can also check the **Dashboard** to see if you have unused but charged SIMs.
<img
  src={require('./assets/portal-dashboard-unused-sim-warning.png').default}
  alt="Warning banner displayed for unused SIMs displayed on the emnify Portal Dashboard. It reads, '2 unused but charged SIM cards detected. We found active SIMs not connected to any device. In this case we may still charge for them, but they won't be of any use for you.' Next to this text, there's a link to the SIM Inventory and a button reading 'Deactivate SIMs now.'"
/>

Reference: [Endpoint Object](https://cdn.emnify.net/api/doc/endpoint.html) and [Endpoint API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint)
:::

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
    src={require('./assets/portal-connected-devices-bulk-enable-disable.png').default}
    alt=""
  />
</details>

:::caution
Devices can't be deleted.
You can rename or repurpose unwanted devices for use with unassigned SIMs.
:::

## Reset connectivity

You can reset a device's connectivity by selecting its **Reset connectivity** icon while viewing it in the list of **Connected Devices** or by selecting the **Reset Connectivity** link for **Connection** located in the **Status** column of the **General** view of the device's **Details** modal.

<details className="custom-details-troubleshooting">
  <summary>Show where this happens in the Portal</summary>
  <img
    src={require('./assets/portal-connected-devices-reset-connectivity.png').default}
    style={{ width: 900 }}
    alt=""
  />
  <img
    src={require('./assets/portal-device-details-reset-connectivity.png').default}
    style={{ width: 325 }}
    alt=""
  />
</details>
