---
last_update: 
  date: 06-10-2023
slug: /services/factory-test-mode
---

# Factory test mode

The factory test mode (FTM) feature allows you to test SIM cards prior to their deployment in a production environment.
SIM cards in FTM provide 100 KB of data usage and 10 SMS MT/MO free of charge.

In this state, you won't be charged the monthly SIM hosting fees and the data consumed won't affect the pooled allowance.

:::info
FTM is only available for customers with the **Plus Package** or **Pro Package**.
:::

## Available networks

You can use FTM for networks in the assigned coverage policy.
Please be sure that the networks where you are planning to use this feature is part of an activated coverage area.

## Limits

SIMs in FTM are allowed to consume 100 KB of data and 10 SMS (either in its totality or a combination of SMS MT or MO) free of charge for testing purposes.

SIMs in FTM change to the **Activated** state in any of the following scenarios:

- After the consumption of the allowed data/SMS limit in FTM.  
_Note: the 10th SMS executes the SIM activation._
- SIM cards that never reached any threshold (either 10 SMS or 100 KB of data), but are in FTM longer than 180 days.
- If the status of the device with the **Factory test** status is altered.
- Running a reset connectivity.

## Patch a SIM to FTM

It isn't possible to enable FTM from the emnify Portal.
For more information about patching SIM cards via the REST API, see [Factory Test Mode on the emnify System Documentation](https://cdn.emnify.net/api/doc/factory-test-mode.html).
