---
description: View your current plan or learn about others on the Subscription page in the emnify Portal
slug: /portal/org/subscription
---

# Subscription

The **Subscription** page lets you view your current plan's details or learn about the other plans.

## Current plan details

If your plan is active, you will see the following information.

- **Plan** (Standard, Plus, or Pro)
- **Price**
- **Billing type** (e.g., Monthly billing)
- **Additional features**

## Choose a plan

Visit your [**Subscription**](https://portal.emnify.com/organisation-settings/subscription) page to compare the differences in features, services, and pricing between the plans:

- Standard (Select **Upgrade**)
- Plus (Select **Contact Us**)
- Pro (Select **Contact Us**)

## Pricing

If you select **Upgrade**, you'll be taken to the **Pricing** page.
To finalize your payment plan, you need to provide some estimates regarding your deployment plans, the geographical coverage you will need, and which price model you prefer.

### Deployment

In this section, your estimates of how many devices you plan to deploy and their average monthly data consumption will be used to assess the resource requirements of your deployment.

#### Active device

Select the **number of active devices** you plan to have.
The slider provides a range from 1 to 1,000,000 devices.

:::info
If you want to specify an exact number of devices that the slider is not providing, you can select the current number in the input field next to **Active device** and type in the desired value.
:::

#### Average device consumption per month

Select a value between 0.25 MB and 2 GB using the slider.

#### Deployment option

If the default selection **Global** is not your preference, select *one* from more than a dozen other regions, e.g., **Africa Extended**, **Americas**, **APAC**, **Europe Basic**, **Middle East**, **USA**, etc.

### Coverage

Choose between **Basic** and **Extended** coverage.

### Price model

Choose between **Pay as you go** and **Inclusive volume** *(your estimated monthly MB/device)* **pooled**.

## Tariff coverage map

The **Tariff Coverage Map** is a global map that shows the coverage you will have based on your selections.

<details className="custom-details-example">
  <summary>Show me the Tariff Coverage Map with Basic coverage</summary>
  <img
    src={require('./assets/tariff-coverage-map-basic.png').default}
    alt=""
  />
  <img
    src={require('./assets/tariff-coverage-map-legend.png').default}
    style={{width:615}}
    alt=""
  />

  **Note**: The Basic coverage shown here includes **Zone D** and **Zone E**.
</details>

## Coverage list

The **Coverage List** provides the names and number of operators per country.
Each country's listing can be expanded to reveal the rate zone, plan coverage, data rates, and SMS sending and receiving rates.
You can search the list by country name or select **By Rate Zones** to see which countries and their respective operators belong to each rate zone.

<details className="custom-details-example">
  <summary>Show me some of the countries in rate Zone C</summary>
  <img
    src={require('./assets/coverage-list-rate-zone-c.png').default}
    alt=""
  />
</details>

## Finalize your plan selection

After you have reviewed your plan selections, select **Get Started**.
You'll then be directed to the **Tariff upgrade** page.

## Tariff upgrade

On the **Tariff upgrade** page, you'll have an opportunity to confirm the following:

1. [**Organization details**](https://portal.emnify.com/organisation-settings/details)
1. [**Contact information**](/portal/org/data#contact-information)
1. **Payment details** (choose an option)
    - Card
    - PayPal

When finished, select **Save**.
