---
description: Single/group device policy configuration of service and coverage
slug: /portal/device-policies
---

# Device Policies

You can use [**Device Policies**](https://portal.emnify.com/device-policies) to create device groups to ease the management of large deployments.
There are two types of policies, **Service Policies** and **Coverage Policies**.

## Service policies

Service policies allow you to set usage limits on data or SMS.
They can also be used to restrict types of networks or services.
By default, a new policy has no restrictions.
However, by creating a service policy, you can control the following:

- **Breakout Region** (automatic or manual selection)
- **Data**
  - Usage limit
  - Service type, e.g., 2G, 3G, 4G, NB-IoT
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

To create a new **Service Policy**, navigate to [**Device Policies**](https://portal.emnify.com/device-policies) and select **New Service Policy**.

### Webhook SMS interface

When selecting **Webhook** as your **SMS Interface**, you need to provide the URL for your webhook.
Optionally, you can provide a secret key to prevent unauthorized access.

<details className="custom-details-troubleshooting">
  <summary>Show me how to configure a webhook</summary>

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
  <summary>Show me where this happens in the Portal</summary>
  <img
    src={require('./assets/device-policies-sms-interface-smpp.png').default}
    alt=""
  />
</details>

## Coverage policies

A coverage policy lets you choose which pricing plan and regions to operate in.
Policies comprise a **Tariff** (pricing plan) and one or more **Zones**.
The default coverage policy depends on your current subscription plan.

To create a new **Coverage Policy**, collapse the **Service Policies** list and select **New Coverage Policy**.

<details className="custom-details-troubleshooting">
  <summary>Show me where to create a new Coverage Policy</summary>
  <img
    src={require('./assets/coverage-policies.png').default}
    style={{width:650}}
    alt=""
  />
</details>

### Tariff

The **Tariff** dropdown shows a list of plan names with a **Global** plan selected by default.

### Zones

The list of zones varies depending on which **Tariff** (global, regional, etc.) you selected.

The **Tariff Coverage Map** is a global map that shows the coverage you will have based on your selections.
You can browse the entire list of countries in the **Coverage List** or search for a specific country where you plan to deploy your devices.

<details className="custom-details-example">
  <summary>Show me the default coverage on the Tariff Coverage Map</summary>

  <img
    src={require('./assets/tariff-coverage-map.png').default}
    style={{width:900}}
    alt=""
  />

  The **Coverage List** provides the names and number of operators per country.
  Each country's listing can be expanded to reveal the rate zone, plan coverage, data rates, and SMS sending and receiving rates.

  <img
    src={require('./assets/coverage-list-no-om-pk.png').default}
    style={{width:900}}
    alt=""
  />
</details>

## Assigning devices to a device group policy

Device group policies only become useful after you start assigning devices to them.

:::tip
Develop a strategy for grouping your devices according to certain criteria related to your use cases, deployment regions, product lines, or services.
Choose device group policy names and device tags related to these criteria.
This will make device selections easier when performing bulk assignments to device group policies.
:::

:::caution Warning
If you change a device's policy, be sure to [reset its connectivity](/portal/connected-devices#reset-connectivity) for the change to take effect.
:::

### Single device assignment

When viewing [Device Details](/portal/connected-devices#get-device-information), you can select **Edit** for either **Service Policy** or **Coverage Policy**.
You'll be presented with a dropdown list to choose from.
Select your policy from the list.
You should see a real-time notification confirming the change.

### Bulk assignments 

Navigate to [Connected Devices](https://portal.emnify.com/connected-devices) and search for the devices you wish to assign to a policy.
If you followed the previous tip, you might be able to use only one or two tags to filter only the devices to be assigned.

If the filtered list looks good, select the top checkbox in the table heading to select them all.
A new menu will appear at the top of the page that provides bulk operations.
Select **More** and then either **Change Service Policy** or **Change Coverage Policy**.
You'll be presented a with dropdown list to choose from.
Select your policy from the list and then select **Save**.
The devices you selected will be assigned to their new policy, and you will see a real-time notification confirming the change.

<details className="custom-details-example">
  <summary>Show me an example</summary>
  <img
    src={require('./assets/bulk-policy-change.png').default}
    style={{width:900}}
    alt=""
  />
</details>

## Device policy changes

In addition to creating device group policies and assigning devices to them, you can also update existing policies using the same interface you used when creating them.

### Update policies

When several devices are deployed and assigned to the same policies, your changes to the policy will be automatically pushed to devices in the group.
For instance, you might want to increase the data usage limits for a service policy that has 100 devices assigned to it.
As soon as you change the service policy, it is pushed to all 100 devices.

### Change a device's policy assignments

Another way to change a device's group policy is to switch from its current policy to another one.
For a single device, you can select its new policy from a dropdown list when viewing the [Device Details](/portal/connected-devices#get-device-information) by selecting **Edit**  as described earlier in [Single device assignment](#single-device-assignment).

For changing a group of devices to a new policy, follow the procedure described for [bulk assignments](#bulk-assignments). 

### Make sure the changes take effect immediately

Resetting connectivity is also available as a bulk option.
Once you have selected the devices using the [bulk assignments](#bulk-assignments) procedure described above, select **Reset**.

<details className="custom-details-troubleshooting">
  <summary>Show me where to check my changes</summary>
  <img
    src={require('./assets/connected-devices-bulk-reset.png').default}
    style={{width:900}}
    alt=""
  />
</details>
