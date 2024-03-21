---
description: Assign a device to a service policy or coverage policy in the emnify Portal
last_update:
  date: 01-09-2024
slug: /how-tos/assign-devices-to-policies
---

# Assign devices to a policy

[Device policies](/portal/device-policies) only become useful after you start assigning devices to them.
You can assign single or multiple devices to a policy in the [emnify Portal](https://portal.emnify.com/).

:::tip
Develop a strategy for grouping your devices according to specific use cases, deployment regions, product lines, or services.
Choose policy names and device tags related to these criteria.
This helps with selections when performing bulk assignments.
:::

:::warning
Devices don't automatically reset if you change the service or coverage policy.
Due to caching, it can also take up to 24 hours before changes are applied to a device.

Be sure to [reset its connectivity](/portal/connected-devices#reset-connectivity) for the change to take effect sooner.
:::

## Single device assignment

1. Navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices).
1. Find the device you wish to assign to a policy, then click **Details**.
1. When viewing the device details, select **Edit** for either **Service Policy** or **Coverage Policy** to show a dropdown list of available policies.
1. Select your policy from the list.

You should see a real-time notification confirming the change.

## Bulk assignments

1. Navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices).
2. Search for the devices you wish to assign to a policy and select the checkbox next to every relevant device.

:::tip
You can filter by tag or any other property to show only the devices to be assigned.
If the filtered list looks good, select the top checkbox in the table heading to select them all.
:::

3. A new menu at the top of the page provides bulk operations.
Select **More** and then either **Change Service Policy** or **Change Coverage Policy**.
4. Choose your policy from the presented dropdown list and then select **Save**.

The devices you selected are assigned to their new policy, and you should see a real-time notification confirming the change.

<details className="details details--example">
  <summary>Show an example</summary>
  <img
    className="img"
    src={require('./assets/portal-connected-devices-bulk-policy-change.png').default}
    alt=""
  />
</details>

## Next steps

After you've created and assigned policies, you can also update existing policies in the [emnify Portal](https://portal.emnify.com/).
For more information, see [Update existing device policies](/how-tos/update-existing-device-policies).
