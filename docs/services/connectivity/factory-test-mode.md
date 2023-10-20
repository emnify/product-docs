---
last_update: 
  date: 06-10-2023
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
Then, the SIM is automatically activated once your customers use the quotas. There's no additional configuration required.

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

SIMs in FTM are also activated in any of the following scenarios:

- SIM cards that never reached any threshold but are in FTM longer than the designated test period.
For organizations created after July 23, 2023, the default test period is 180 days.
- If the status of the device in the **Factory test** state is altered.
- Running a reset connectivity.

## Patch a SIM to FTM

It isn't possible to enable FTM from the emnify Portal.
For more information about patching SIM cards via the REST API, see [Factory Test Mode on the emnify System Documentation](https://cdn.emnify.net/api/doc/factory-test-mode.html).

:::caution
Suppose you cancel or switch to a different package that doesn't support FTM when SIMs are in the **Factory test** status.
In that case, those SIMs are activated to ensure reliability and coverage.
:::
