---
description: Learn how to manage your SIMs via the SIM Inventory in the emnify Portal
last_update: 
  date: 08-30-2023
slug: /portal/sim-inventory
---

# SIM inventory

The [**SIM Inventory**](https://portal.emnify.com/sim-inventory) provides a complete list of your registered SIMs.

## SIM states

A SIM can transition through five states during its lifecycle: **Issued**, **Activated**, **Suspended**, **Factory Test**, and **Deleted**.
These states are sometimes referred to as the SIM status.

:::info
For more information about each SIM state, see [SIM lifecycle management](/services/sim-lifecycle-management).
:::

## Manage SIMs

The **Details** view shows all identifiers and properties for an individual SIM, including:

| Property            | Description                                      |
|:--------------------|:-------------------------------------------------|
| **Assigned device** | Name of the device that the SIM is attached to, linked to the respective **Device Details** page. |
| **SIM ID**          | Unique identifier of the SIM (referred to as the `sim_id` when working with the [REST API](https://cdn.emnify.net/api/doc/sim.html)). |
| **ICCID**           | Integrated circuit card identifier including the final Luhn checksum digit. |
| **MSISDN**          | Mobile Station International Subscriber Directory Number of the SIM. |
| **IMSI**            | International Mobile Subscriber Identity of the SIM. |
| **Vendor**          | Name of the manufacturer. |
| **Memory**          | Memory size in kilobytes (KB). |
| **Produced**        | Date and time in Coordinated Universal Time (UTC) the SIM was produced, formatted based on your language settings. |
| **Model**           | Description of the SIM model (for example, **Classic**). |
| **SIM Type**        | Diagram and description of the SIM type, including the [quality grade](/services/global-iot-sim#quality-grades) and [form factors](/services/global-iot-sim#form-factors). |

:::tip
For definitions of any unfamiliar terms or acronyms, see the [Glossary](/glossary).
:::

### Additional views

**Events** and **Statistics** are additional views that provide logs and aggregated usage, respectively, if the SIM has been assigned to a device and is **Active**.

## Search SIMs

You can search by various attributes, including ICCID, IMSI, and device ID, to name a few.

<img
  src={require('./assets/portal-sim-inventory-search-bar-attributes.png').default}
  alt=""
/>

## Order or register SIMs

To expand your SIM inventory, follow the appropriate link at the top of the page:

- To visit the SIM Shop, select **Order SIMs**.
- To register SIMs, either individually or in batches, select **Register SIMs**.

:::tip
Step-by-step guides are available for [ordering SIMs from the SIM Shop](/quickstart/order-sims) and [registering SIMs](/quickstart/register-sims).
:::
