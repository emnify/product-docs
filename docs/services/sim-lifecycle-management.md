---
description: Configure SIM state to minimize costs
---
# SIM lifecycle management

When selling connected devices, it is difficult to determine when devices will be in use and when not. 
Using SIM cards that cannot align with the device lifecycle incur unnecessary costs.

emnify SIM cards do not incur any costs unless activated.
The SIMs have 5 different states that can be configured via the [**SIM Inventory** page of the emnify Portal](https://portal.emnify.com/sim-inventory) or the [emnify SIM REST API](https://cdn.emnify.net/api/doc/swagger.html#/SIM):

- **Issued**: Initial state after the SIM has been registered to an account.
The SIM isn't usable in this state, so it won't generate traffic or incur charges.
Issued SIMs can be tested by patching them to the _Factory Test_ state.
- **Activated**: The SIM is enabled and can use network services. 
The monthly charge is applied.
- **Suspended**: Temporarily blocks the SIM from network access.
Starting from the first day of the next month, the suspended SIM will not accrue any charges, so suspending an unused activated SIM can help save on costs.
The SIM can be activated anytime afterward.
- **Factory Test**: The SIM is enabled and can generate traffic. 
It can be used for a defined data or SMS limit without incurring charges.
Once this limit is reached, the SIM will automatically move to the _Activated_ state.
- **Deleted**: Permanently removes the SIM from the SIM Inventory.
Once deleted, it cannot be restored for network access.
