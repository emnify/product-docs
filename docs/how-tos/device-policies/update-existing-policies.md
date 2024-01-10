---
description: Update or change the service policy or coverage policy assigned to your devices in the emnify Portal
last_update:
  date: 01-09-2024
sidebar_label: Update existing policies
slug: /how-tos/update-existing-device-policies
---

# Update existing device policies

In addition to creating [device policies](/portal/device-policies) and assigning devices to them, you can also update existing policies using the same interface in the [emnify Portal](https://portal.emnify.com/).

When several devices are deployed and assigned to the same policies, your changes to the policy are automatically pushed to devices in the group.
For instance, you might want to increase the data usage limits for a service policy that has 100 devices assigned to it.
As soon as you change the service policy, it's pushed to all 100 devices.

## Change a device's policy assignments

Another way to change a device's policy is to switch from its current policy to another one.

For a single device, you can select its new policy from a dropdown list when viewing the **Device Details** as described in [Single device assignment](/how-tos/assign-devices-to-policies#single-device-assignment).
See [Bulk assignments](/how-tos/assign-devices-to-policies#bulk-assignments) for changing a group of devices to a new policy.

:::warning
Devices don't automatically reset if you change the service or coverage policy.
Due to caching, it can also take up to 24 hours before changes are applied to a device.

Be sure to [reset its connectivity](/portal/connected-devices#reset-connectivity) for the change to take effect sooner.
:::

## Bulk reset connectivity

Resetting connectivity is also available as a bulk option.

1. Navigate to [**Connected Devices**](https://portal.emnify.com/connected-devices).
1. Search for the devices you wish to reset connectivity for and select the checkbox next to every relevant device.
1. A new menu at the top of the page provides bulk operations.
Select **Reset**.
1. Finally, click **Confirm**.
:::danger
Once you confirm, the network detaches your device and waits for the modem to connect again.
:::
