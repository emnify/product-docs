---
last_update: 
  date: 01-03-2024
slug: /services/factory-test-mode
---

# Factory test mode

The factory test mode (FTM) feature allows you to test SIM cards before deploying to a production environment.
You can use SIMs in FTM up to defined data and SMS thresholds without incurring charges.

In this state, you won't be charged the monthly SIM hosting fees, and the data consumed won't affect the pooled allowance.

:::info
By default, FTM is only available for customers with the **Plus Package** or **Pro Package**.
If you're on a different package but interested in FTM, contact [emnify support](/support).
:::

## Deploy devices from FTM

A popular use case for FTM is automating deployments.
You can store devices with the assigned SIMs in FTM free of charge.
Then, the SIM is automatically activated once your customers use the quotas.
There's no additional configuration required.

## Available networks

You can use FTM for networks in the assigned coverage policy.
Please be sure that the networks where you are planning to use this feature are part of an activated coverage area.

## Limits

The default thresholds for SIMs in FTM are 100 KB of data and 10 SMS (either in its totality or a combination of SMS MT or MO).
These limits can be customized per organization.
Once either threshold is crossed, the SIM automatically moves to the **Activated** state and accrues charges.

:::note
The tenth SMS executes the SIM activation.
:::

SIMs in FTM are also activated in any of the following scenarios to ensure reliability and coverage:

- If the device's status is altered while the SIM is in **Factory test**.
- Running a reset connectivity.
- Cancelling or switching to a different package that doesn't support FTM.

## Activate FTM in the emnify Portal

You can enable FTM while registering SIMs in the emnify Portal.

1. Follow the steps to [register a new SIM or SIM batch](/quickstart/register-sims#register-sims-in-the-emnify-portal).
1. After your SIM is registered, select **Create device**.
1. In **Create a new device**, fill in your device details.
Under **Select Device Mode**, choose **Factory Test**.
1. Review, then click **Create device**.
1. [Configure the APN](/apn-configuration), then click **APN is set up**.

Once created, your device should be ready to go online if configured with the correct APN, and data roaming is enabled.

:::note
You can follow the same steps while registering a SIM batch.
:::

## Patch a SIM to Factory Test with the emnify REST API

For more information about patching SIM cards via the REST API, see [Factory Test Mode on the emnify System Documentation](https://cdn.emnify.net/api/doc/factory-test-mode.html).
