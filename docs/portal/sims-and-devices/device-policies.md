---
description: Configure service and coverage policies for your devices on the emnify Portal
slug: /portal/device-policies
---

# Device policies

You can use [**Device Policies**](https://portal.emnify.com/device-policies) to create unique coverage and network configurations that can be assigned to devices.
There are two types of policies, **Service Policies** and **Coverage Policies**.

## Service policies

Service policies allow you to set usage limits on data or SMS.
They can also be used to restrict types of networks or services.
By default, a new policy has no restrictions.
However, by creating a service policy, you can control the following:

- **Breakout Region** (automatic or manual selection)
- **Data**
  - Usage limit
  - Service type (for example, 2G, 3G, 4G, NB-IoT)
- **SMS**
  - SMS MO (Devices may send SMS)
    - Sending limit
  - SMS MT (Devices may receive SMS)
    - Receiving limit
  - Allow/deny the exchange of SMS between devices
  - Allow/deny the exchange of SMS with external parties
- **SMS Interface**
  - [Web Portal](/portal/sms#send-sms-using-the-emnify-portal) (default)
  - [Webhook](#webhook-sms-interface)
  - [SMPP](/portal/sms#sms-via-smpp)

### Create a new service policy

To create a new service policy, follow these steps:

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to **Device Policies**.
   **Service policies** is the top section on the page.
1. Select **New service policy**.
1. Replace **New service policy** with the name of your policy, then add a **Description** and edit the **Configuration**.

Changes save automatically.
To remove a service policy, click the trash bin icon next to **Details**.

:::tip
Creating one policy per use case or device type helps you adjust and save your device settings based on the demands of a particular use case.
:::

### Webhook SMS interface

When selecting **Webhook** as your **SMS Interface**, you need to provide the URL for your webhook.
Optionally, you can provide a secret key to prevent unauthorized access.

<details className="custom-details-troubleshooting">
  <summary>Show how to configure a webhook</summary>

  Select **Configure Webhook**.  

  <img
    src={require('./assets/sms-interface-configure-webhook.png').default}
    alt=""
  />

  Provide the URL, optional secret key, and select **Add Webhook**.  

  <img
    src={require('./assets/sms-interface-add-webhook.png').default}
    alt=""
  />
</details>

### SMPP SMS interface

When selecting **SMPP** as your **SMS Interface**, you are provided a **System ID** and **Password** for accessing the emnify **SMPP Server**.

<details className="custom-details-troubleshooting">
  <summary>Show where this happens in the Portal</summary>
  <img
    src={require('./assets/device-policies-sms-interface-smpp.png').default}
    alt=""
  />
</details>

## Coverage policies

A coverage policy lets you choose which pricing plan and regions to operate in.
Policies comprise of the **Coverage** (data plan) and one or more **Coverage areas**.
The default coverage policy depends on your current subscription package.

### Create a new coverage policy

To create a new coverage policy, follow these steps:

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to the [**Coverage Policies**](https://portal.emnify.com/device-policies#coverage-policies) section of **Device Policies**.
1. Select **New coverage policy**.
1. Replace **New coverage policy** with the name of your policy and add a **Description**.
   Then, choose the **Coverage** and an **Data allowance** from the available options.
1. Finally, click **Create**.

By default, connectivity is disabled, and any devices assigned to this coverage policy are blocked from all networks.
You need to enable at least one **Coverage area** for your devices to connect.

Changes save automatically.
To remove a coverage policy, click the trash bin icon next to **Details**.

:::tip
Creating multiple coverage policies lets you differentiate between device types based on their coverage needs and the associated costs.
:::

### Coverage

The **Coverage** dropdown shows a list of data plan names with **Regional Pro** selected by default.

### Coverage areas

The list of **Coverage areas** varies depending on which **Coverage** you selected.

The **Coverage map** is a global map that shows the coverage you have based on your selections.
You can browse the entire list of countries in the **Coverage list** or search for a specific country where you plan to deploy your devices.
This list provides the names and number of networks per country.
Each country's listing can be expanded to reveal the network, coverage area, data rates, and SMS sending and receiving rates.

## Assign devices to a policy

Service policies only become useful after you start assigning devices to them.

:::tip
Develop a strategy for grouping your devices according to certain criteria related to your use cases, deployment regions, product lines, or services.
Choose service policy names and device tags related to these criteria.
This helps with selections when performing bulk assignments to service policies.
:::

:::caution Warning
Devices don't automatically reset if you change the service or coverage policy.
Due to caching, it can also take up to 24 hours before changes are applied to a device.

Be sure to [reset its connectivity](/portal/connected-devices#reset-connectivity) for the change to take effect sooner.
:::

### Single device assignment

When viewing **Device Details**, select **Edit** for either **Service Policy** or **Coverage Policy** to show a dropdown list of available policies.
Select your policy from the list.
You should see a real-time notification confirming the change.

### Bulk assignments

Navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices) and search for the devices you wish to assign to a policy.
Select the checkbox next to every relevant device.

:::tip
If you followed the previous tip, you can filter by tag to show only the devices to be assigned.
If the filtered list looks good, select the top checkbox in the table heading to select them all.
:::

A new menu appears at the top of the page that provides bulk operations.
Select **More** and then either **Change Service Policy** or **Change Coverage Policy**.
Choose your policy from the presented dropdown list and then select **Save**.
The devices you selected are assigned to their new policy, and you should see a real-time notification confirming the change.

<details className="custom-details-example">
  <summary>Show an example</summary>
  <img
    src={require('./assets/bulk-policy-change.png').default}
    style={{width:900}}
    alt=""
  />
</details>

## Device policy changes

In addition to creating device group policies and assigning devices to them, you can also update existing policies using the same interface you used when creating them.

### Update policies

When several devices are deployed and assigned to the same policies, your changes to the policy are automatically pushed to devices in the group.
For instance, you might want to increase the data usage limits for a service policy that has 100 devices assigned to it.
As soon as you change the service policy, it's pushed to all 100 devices.

### Change a device's policy assignments

Another way to change a device's group policy is to switch from its current policy to another one.

For a single device, you can select its new policy from a dropdown list when viewing the **Device Details** by selecting **Edit** as described in this document's [Single device assignment](#single-device-assignment) section.
For changing a group of devices to a new policy, see [Bulk assignments](#bulk-assignments).

### Make sure the changes take effect immediately

Resetting connectivity is also available as a bulk option.
Once you have chosen multiple devices, select **Reset**.

<details className="custom-details-troubleshooting">
  <summary>Show where to confirm the changes</summary>
  <img
    src={require('./assets/connected-devices-bulk-reset.png').default}
    style={{width:900}}
    alt=""
  />
</details>
