---
description: Define the device to be used with the SIM
last_update: 
  date: 08-24-2023
slug: /quickstart/create-device
---

# Create a device

After [registering SIMs](/quickstart/register-sims), you need to create a virtual representation of the device associated with the SIM.
To create a device, give it a name and assign a service and coverage policy.

If you plan on using your device right away, select **Activate**.
Otherwise, select **Leave Disabled**.

## Create devices with the emnify REST API

You can create one device or multiple devices in bulk using the emnify REST API.
For step-by-step instructions, see [Create Endpoints](https://cdn.emnify.net/api/doc/create-endpoints.html) in the emnify System Documentation.

## Insert the assigned SIM

:::note
Skip this step if your device already has an embedded SIM.
:::

Before you can [get your device online](/apn-configuration), insert the SIM that's [registered and assigned](/quickstart/register-sims) to the device and turn it on.
