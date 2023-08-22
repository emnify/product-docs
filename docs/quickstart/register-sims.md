---
description: Use your emnify account to register your SIMs
slug: /quickstart/register-sims
---

# Register emnify SIMs

Once you [get your emnify SIMs](/quickstart/order-sims), the next step is to register them.
When you register a new SIM or [SIM batch](/glossary#sim-batch), you can automatically activate the SIM and create connected devices using the default configuration.

:::info
If you [ordered the free Evaluation SIM package](/quickstart), you must register each of the three SIMs separately.
:::

## Locate the BIC

### Individual SIMs

The 16-digit [batch identification code (BIC)](/glossary#bic) is on the card's upper right corner and marked as **BIC1**.
It's used to register single SIMs.

<!-- TODO in PGR-489: Add updated image -->

### SIM batches

The 16-digit BIC is located on the packaging label and marked as **BIC2**.

<!-- TODO in PGR-489: Add updated image -->

## Register SIMs in the emnify Portal

1. [Log in to your emnify account](https://portal.emnify.com/sign).  
1. Navigate to the **SIM Inventory** and click [**Register SIMs**](https://portal.emnify.com/sim-registration).
1. Select **Single-SIM** to register individual SIM cards or select 
1. Enter the **BIC1** for individual SIMs or the **BIC2** for batches.
1. After confirming your BIC is correct, select **Register SIM card**.
<img
  src={require('./assets/sim-enter-bic1-register-sim-card.png').default}
  style={{width:370}} alt=""
/>

Once the SIM is registered, you can assign it to an existing device or [create a new device](#create-a-new-device).

:::tip
Assigning your SIM to a device is a necessary step for getting your device online.
We'd recommended activating the SIM and creating a connected device during registration.
:::

## Create a new device

You can create a new device for the newly registered SIM while still in the SIM registration process.

<!-- markdownlint-disable MD029 -->
<details className="custom-details-example">
  <summary>Step-by-step instructions</summary>

  1. After your SIM is registered, select **Create device**.

  <img
    src={require('./assets/sim-registered-create-device.png').default}
    style={{width:575}} alt=""
  />

  2. In **Create a new device**, replace **Add Device name** with an appropriate name for the new device and assign a **Service policy** and **Coverage policy**.

  <img
    src={require('./assets/sim-create-new-device.png').default}
    style={{width:475}} alt=""
  />

  3. Inspect your choices for device name and tags, then select **Create device**.

  <img
    src={require('./assets/sim-create-new-device-with-name-tags.png').default}
    style={{width:475}} alt=""
  />

  4. If you plan on using your device right away, select **Activate**. 
  Otherwise, select **Leave disabled**.

  :::caution
  A monthly cost is charged for each connected device.
  :::

  <img
    src={require('./assets/sim-create-and-activate.png').default}
    style={{width:475}} alt=""
  />

  5. Once created, your device should be ready to go online if it's [configured with the correct APN](/apn-configuration) and data roaming is enabled.

  <img
    src={require('./assets/sim-apn-setup.png').default}
    style={{width:610}} alt=""
  />

</details>
