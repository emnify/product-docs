---
description: Define the device to be used with the SIM
last_update: 
  date: 01-03-2023
slug: /quickstart/create-device
---

# Create a device

After [registering SIMs](/quickstart/register-sims), you need to create a virtual representation of the device associated with the SIM.

## Add a device in the emnify Portal

1. [Log in to your emnify account](https://portal.emnify.com/sign).
2. Navigate to **Connected Devices** and click **Add device**.
3. Name your device and assign a service policy and coverage policy.
Optionally, add tags, indicate the IP address, [lock the IMEI](/services/security#imei-lock), or assign a SIM.

:::note
Assigning a SIM to the device is a necessary step for getting your device online.
:::

4. Review your device details, then click **Create device**.

Once created, you're prompted to [configure the APN](/apn-configuration).
Skip this step if you didn't assign a SIM to your device.

## Create devices with the emnify REST API

You can create one device or multiple devices in bulk using the emnify REST API.
For step-by-step instructions, see [Create Endpoints](https://cdn.emnify.net/api/doc/create-endpoints.html) in the emnify System Documentation.

## Insert the assigned SIM

:::info
Skip this step if your device already has an embedded SIM.
:::

Before you can [get your device online](/apn-configuration), insert the SIM that's [registered and assigned](/quickstart/register-sims) to the device and turn it on.
