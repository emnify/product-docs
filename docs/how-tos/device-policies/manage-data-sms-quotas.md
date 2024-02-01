---
description: How to configure or turn off data or SMS quotas for your devices on the emnify Portal
last_update:
  date: 01-31-2024
slug: /how-tos/manage-data-sms-quotas
---

# Manage data or SMS quotas

Quota management is available through the [**Service Policies**](https://portal.emnify.com/device-policies#service-policies) in the emnify Portal.

**Prerequisites:**

1. [Create a new service policy](/how-tos/create-service-policies).
1. [Assign your devices to the service policy](/how-tos/assign-devices-to-policies).

:::tip
See [Quota management](/services/quota-management) to learn more about quota limits and enforcement.
:::

## Turn on data or SMS quotas

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to the [**Service Policies**](https://portal.emnify.com/device-policies#service-policies) section of **Device Policies**.
1. Find the service policy where you want to turn on quota management and click **Details**.
1. Select the **More options** tab to find the **Quota management** section.
1. Click the **Data Quota** or **SMS Quota** toggle to the on position.
1. Read the prompt about setting up a specific contingent per device, then click **Confirm**.

## Set a quota for your devices

After you turn on quota management in the service policy, you must assign a quota to each device that uses this service policy.
Otherwise, these devices are blocked from creating PDP activation sessions because there's no defined quota.

1. Navigate to your [**Connected Devices**](https://portal.emnify.com/connected-devices).
1. Click **+ Add Filter**, then **Service Policy**.
1. Select the service policy where you turned on quota management, then click **Apply**.
1. Choose a device you want to set a quota on and click **Details**.
1. The **Quota** section should be visible under **Usage**, warning that a quota is enabled in the service policy but not configured for this device.
Click **Configure quota**.
1. Fill in your desired quota settings, then click **Add**.
The following example shows the default configuration for an activated **Data Quota** and a disabled **SMS Quota**.

Now, you can view your quota information in two places on **Device Details**:

- **General** tab&nbsp;<span aria-label="and then">></span> **Usage**&nbsp;<span aria-label="and then">></span> **Quota**
- **Quota** tab&nbsp;<span aria-label="and then">></span> **Quota**

## Turn off data or SMS quotas

1. Navigate to the [**Service Policies**](https://portal.emnify.com/device-policies#service-policies) section of **Device Policies**.
1. Find the service policy where you want to turn on quota management and click **Details**.
1. Select the **More options** tab to find the **Quota management** section.
1. Click the **Data Quota** or **SMS Quota** toggle to the off position.
1. Read the prompt about deleting the quota for your devices, then click **Confirm**.
