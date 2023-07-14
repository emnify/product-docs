---
description: The dashboard on the emnify Portal shows a summary of your usage for the current billing cycle
pagination_next: portal/sims-and-devices/sim-inventory
slug: /portal
---

# Dashboard

The first page you'll see in the emnify Portal is the [**Dashboard**](https://portal.emnify.com/).
It summarizes your usage during the current billing cycle and provides a log of recent events. 

:::info
Any changes will be reflected in each chart within a few hours.
:::

## Usage summary 

<details className="custom-details-example">
  <summary>Show an example of the current usage summary</summary>
  <img
    src={require('./assets/dashboard-usage.png').default}
    style={{width:695}}
    alt=""
  />
</details>

**Current Month Data Volume**
  - Uploaded volume
  - Downloaded volume

**Inclusive Volume (per active device)**  
This is the data volume based on (the [Main zone](/portal/device-policies#zones)) you chose for your [Coverage Policy](/portal/device-policies#coverage-policies).

:::note
This section is only shown if you've [set up multi-inclusive volumes](/how-tos/multi-inclusive-volumes).
:::

**Prepaid Balance**  
The remaining balance of your prepaid credit.

:::note
This section is only shown if you're on the [Evaluation Plan](/quickstart#emnifys-evaluation-plan).
:::

**Current Data/SMS Cost**  
The running balance of total costs in your currency.

**Active (charged) devices** (count)
  - **SMS** (current usage costs in your currency)
  - **SMS fee** (in your currency))

**Device Traffic**  
A chart showing the last 4 hours of upload/download volumes.

[**Devices Status**](/glossary#endpoint-status)
  - **Online** (count)
  - **Disabled** (count)
  - **Offline** (count)

## Events

The **Dashboard** also shows recent events for all your devices in reverse chronological order, which you can download as a CSV file.

<details className="custom-details-example">
  <summary>Show an example of Events</summary>
  <img
    src={require('./assets/dashboard-events.png').default}
    alt=""
  />
</details>

:::info
For more detailed information about events, see [**emnify system events**](/system-events).
:::
