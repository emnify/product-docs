---
description: Use your emnify account to register your SIMs
last_update: 
  date: 08-30-2023
sidebar_label: Register SIMs
slug: /quickstart/register-sims
---

# Register emnify SIMs

Once you get your emnify SIMs, the next step is to register them.
When you register a new SIM or [SIM batch](/glossary#sim-batch), you can automatically activate the SIM and create connected devices using the default configuration.

:::info
If you [ordered free trial SIMs](/quickstart#order-free-trial-sims), you must register each SIM separately.
:::

## Locate the BIC

### Individual SIMs

The 16-digit batch identification code (BIC) is on the card's upper right corner and marked as **BIC1**.
It's used to register single SIMs.

<img
  className="no-border"
  src={require('!!url-loader!./assets/sim-registration-bic1.svg').default}
  alt=""
/>

### SIM batches

The 16-digit BIC is located on the packaging label and marked as **BIC2**.

<img
  className="no-border"
  src={require('!!url-loader!./assets/sim-registration-bic2.svg').default}
  alt=""
/>

:::tip
For more information about locating your BIC, see [I cannot register my SIM cards](https://support.emnify.com/hc/en-us/articles/360019254640-I-cannot-register-my-SIM-cards-The-BIC-code-is-invalid-or-I-do-not-have-a-BIC-code) on the Knowledge Base.
:::

## Register SIMs in the emnify Portal

1. [Log in to your emnify account](https://portal.emnify.com/sign).  
1. Navigate to the **SIM Inventory** and click **Register SIMs**.
1. Select **Single-SIM** to register individual SIM cards or select **SIM Batch** for batches.
1. Enter the **BIC1** for individual SIMs or the **BIC2** for batches.
1. After confirming your BIC is correct, select **Register SIM card**.

Once the SIM is registered, you can assign it to an existing device or create a new device.

:::note
Assigning your SIM to a device is a necessary step for getting your device online.
We'd recommended activating the SIM and creating a connected device during registration.
:::

## Register SIMs with the emnify REST API

The emnify REST API is an efficient approach, especially when dealing with a large number of devices and registering SIM cards in bulk.
For step-by-step instructions, see [Register SIMs in the emnify System Documentation](https://cdn.emnify.net/api/doc/register-sims.html).

## Create a new device

You can create a new device for the newly registered SIM while still in the SIM registration process.

<!-- markdownlint-disable MD029 -->
<details className="custom-details-example">
  <summary>Step-by-step instructions</summary>

  1. After your SIM is registered, select **Create device**.
  2. In **Create a new device**, replace **Add Device name** with an appropriate name for the new device and assign a **Service policy** and **Coverage policy**.
  3. Inspect your choices for device name and tags, then select **Create device**.
  4. If you plan on using your device right away, select **Activate**. 
  Otherwise, select **Leave disabled**.

  :::caution
  A monthly cost is charged for each connected device.
  :::

  5. Once created, your device should be ready to go online if it's [configured with the correct APN](/apn-configuration) and data roaming is enabled.

</details>
