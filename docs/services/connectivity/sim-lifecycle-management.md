---
description: Configure SIM state to minimize costs
slug: /services/sim-lifecycle-management
---

# SIM lifecycle management

When selling connected devices, it's difficult to determine when devices are in use and when not. 
Using SIM cards that can't align with the device lifecycle incur unnecessary costs.

emnify SIM cards don't incur any costs unless activated.
The SIMs have five different states that can be configured via the [**SIM Inventory** page of the emnify Portal](https://portal.emnify.com/sim-inventory) or the [emnify SIM REST API](https://cdn.emnify.net/api/doc/swagger.html#/SIM):

| State            | Description                                      |
|:-----------------|:-------------------------------------------------|
| **Issued**       | Initial state after the SIM has been registered to an account. The SIM isn't usable in this state, so it won't generate traffic or incur charges. Issued SIMs can be tested by patching them to the _Factory Test_ state.  |
| **Activated**    | The SIM is enabled and can use network services if connected to a device with configured policies. Regardless, the SIM is chargeable if activated anytime during the month. |
| **Suspended**    | Temporarily blocks an _Activated_ SIM from network access. Starting from the first day of the next month, the suspended SIM doesn't accrue any charges. The SIM can be reactivated and suspended again at any time. |
| **Factory Test** | The SIM is enabled and can generate traffic. It can be used up to defined data and SMS thresholds without incurring charges. Once either threshold is crossed or the test period has elapsed, the SIM automatically moves to the _Activated_ state. By default, the test period is 180 days with data and SMS thresholds of 100 kB and 5 SMS. These limits can be customized per organization. |
| **Deleted**      | Permanently removes the SIM from the SIM Inventory. Once deleted, it can't be restored for network access. |
