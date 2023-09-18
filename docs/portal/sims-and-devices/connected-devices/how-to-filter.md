---
description: Learn how to filter your devices
slug: /portal/connected-devices/how-tos
---

import Check from '../assets/check-simple.svg';
import Close from '../assets/close.svg';

# How to filter
  
## Add/edit filter
Select the filter you want to edit, enter a value, then press the `Tab` or `Enter` key.
Once you've entered all the values you want to filter by, click **Apply**.

## Remove filter
To remove a filter or value, click the corresponding **X**.

<img
  src={require('../assets/portal-connected-devices-filters.png').default}
  alt=""
  style={{ height:450 }}
/>

https://github.com/emnify/product-docs/blob/redo-portal-connected-devices/docs/portal/sims-and-devices/assets/portal-connected-devices-filters.png

## Combine filters
Filters can be combined or used together with the [search bar](#search-devices).
Filtered values are saved in the URL as a query parameter (for example, after filtering for devices with the `Zapier` tag, the URL includes `&tags=Zapier` at the end).

:::caution
Your selected filters remain active when you visit a device's **Details** page.
However, the filters reset if you go to another page in the Portal.
:::

## Available filters

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

## Wildcard filters

For example, if you have two devices named `Phase modem` and `My iPhone`, filtering for `ph` or `ph*e` shows both devices in the results.
Another example is filtering names using `organi*ation` shows all results regardless of whether the device name uses American (organization) or British (organisation) spelling.

## Filter for multiple values

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
