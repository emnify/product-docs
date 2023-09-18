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


## Search devices

The **Connected Devices** search bar is next to the **Add device** button.
It's visible on both the **Extensive** and **Plain** table view.

:::info
All the [Available filter properties](#available-filters) are searchable except **Status**, **Coverage policy**, and **Service policy**. 
:::

Unlike [filters](#filter-devices), where the results are focused on one property, the search simultaneously looks for matches across multiple properties.
For example, if you enter the number `2`, the search results would show any device with `2` in its name (like `WalkieTalkie 2.0`), any assigned tags, or one or more of its numeric values (**ICCID**, **EID**, etc.).

The search is case insensitive, meaning `GPS Tracker` and `gps tracker` would produce the same results.
You can also combine the search with filters, but searched values aren't saved in the URL. 

## Get device information 

To view all information about a device, navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices), find it in the list, and select **Details**.

### Useful terms

The following terms are particularly useful to know when looking at the **Device Details**.
Each listed term includes a link to its associated [Glossary](/glossary) entry:

- [IMSI](/glossary#imsi)
- [MSISDN](/glossary#msisdn)
- [IMEI](/glossary#imei)


## Get device status

A device has only two states, **Enabled** or **Disabled**.

You can toggle one or more devices between these states to control their data usage.
A disabled device doesn't incur any charges.

When you want a device to connect to a network, change its status to **Enabled**.
To do this, use the **Status** toggle from the **Connected Devices** list or the device's **Details** page.

## Enable / Disable a device

You can also perform a bulk Enable/Disable operation on a group of devices.

Use a filter to display a list of the targeted devices.
Once their checkboxes indicate that they have been selected, the bulk actions menu bar appears at the top of the screen.

<details>
  <summary>NEEDS TO BE MOVED AWAY into e.g. "How to evable/disable device" </summary>

  (rendered wrong locally, but just because of "details" element)
## How to evable/disable device
Select **Device** and then one of the actions:

<!-- vale Google.OptionalPlurals = NO -->
<!-- Action names are written the same as they're shown in the Portal -->
- Enable Device(s)
- Disable Device(s)
<!-- vale Google.OptionalPlurals = YES -->

</details>

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
