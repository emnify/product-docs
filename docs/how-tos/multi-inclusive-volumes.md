# How to set up multi-inclusive volumes

We introduced a multi-inclusive volumes feature, allowing you to manage different tariffs and data plans from a single account. 
These volumes are managed within [coverage policies](/services/endpoint-management-and-group-policies#coverage-policies).

Once multi-inclusive volumes have been enabled on your emnify account, please ensure that your coverage policies have been adjusted correctly to take advantage of this setup.

## Viewing your coverage policies

Log in to your [emnify account](https://portal.emnify.com/sign) and navigate to the [**Device Policies**](https://portal.emnify.com/device-policies) page.

<img
  src={require('./assets/portal-device-policies.png').default}
  alt=""
/>

Then, scroll down to your **Coverage Policies**.

<img
  src={require('./assets/portal-device-policies-coverage-policies.png').default}
  alt=""
/>

You can either adjust your existing policies under **Details** or create new ones by clicking **New coverage policy**. 

The following example shows the details of the coverage policy named **Europe 500 MB**. 
This coverage policy **500 MB** in **Europe Basic (Main zone)** included on our **Regional Pro EUR** tariff.

<img
  src={require('./assets/portal-device-policies-coverage-policies-details-inclusive-volume.png').default}
  alt=""
/>

:::info
Once enabled, you need to configure an inclusive volume for your coverage policies to use them with devices.
:::

## Adjusting a device's coverage policy

### Individual device

1. Navigate to the **Connected Devices** page

<img
  src={require('./assets/portal-connected-devices.png').default}
  alt=""
/>

2. Decide which device you want to adjust and click **Details**

<img
  src={require('./assets/portal-connected-devices-details-button.png').default}
  alt=""
/>

3. Find your device's coverage policy information under **General** → **Device** → **Policies** → **Coverage Policy**
4. Click **Edit** and select the corresponding inclusive volume you want the device to use

<img
  src={require('./assets/portal-connected-devices-details-device-policies-coverage-policy-edit-button.png').default}
  alt=""
/>

:::tip
Your changes will be saved automatically.
:::

### Multiple devices in bulk 

1. Navigate to the **Connected Devices** page.

<img
  src={require('./assets/portal-connected-devices.png').default}
  alt=""
/>

2. Select multiple devices by clicking the checkboxes to the left of the device **Name**.

<img
  src={require('./assets/portal-connected-devices-select-multiple-devices.png').default}
  alt=""
/>

3. Locate the **More** dropdown menu on the banner at the top of the page and select **Change Coverage Policy**.

<img
  src={require('./assets/portal-connected-devices-bulk-actions-more-change-coverage-policy.png').default}
  alt=""
/>

4. Once the **Change Coverage Policy** modal appears, use the **Coverage Policy** dropdown to choose the policy you want to assign to the selected devices and click **Save**.

<img
  src={require('./assets/portal-connected-devices-bulk-actions-change-coverage-policy-modal.png').default}
  alt=""
/>

In the preceding example, the two selected devices (**Walking Mobile** and **TravelSpot**) will now be assigned our **New coverage policy**.

## Updating a device's assigned rate

When multi-inclusive volumes are configured on your account, you can update the rate assigned to a device within the month. 

:::caution
These changes will have an impact on your monthly bill.
:::

### Changing the inclusive volume

If you notice that one of your devices uses more (or less) data than expected, you can update its assigned inclusive volume any time during the month. 
Any changes will be reflected on your invoice at the end of the month.

In the following example, we're switching the device from **Europe 1 MB** included to **Europe 500 MB** included.

<img
  src={require('./assets/portal-connected-devices-details-device-policies-coverage-policy-dropdown-example.png').default}
  alt=""
/>

### Changing the tariff

You can also change the tariff (e.g., switching from **Global Basic Zone A** to **Regional Pro Americas**) anytime during the month. 
When creating the invoice, we check which tariff the device is assigned to and bill your account accordingly.

To change a coverage policy's tariff, follow these steps:

1. Navigate to the [**Device Policies**](https://portal.emnify.com/device-policies) page.

<img
  src={require('./assets/portal-device-policies.png').default}
  alt=""
/>

2. Scroll down to your **Coverage Policies**
3. Find the coverage policy you want to update and click **Details**

<img
  src={require('./assets/portal-device-policies-coverage-policies-details-button.png').default}
  alt=""
/>

4. Use the **Tariff** dropdown to select a new tariff or use the toggles to adjust the region

<img
  src={require('./assets/portal-device-policies-coverage-policies-details-tariff.png').default}
  alt=""
/>
