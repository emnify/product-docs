---
description: Configure eSIM state to minimize costs
---
# eSIM lifecycle management

When selling connected devices, it is difficult to determine when devices will be in use and when not. 
Using eSIM cards that cannot align with the device lifecycle incur unnecessary costs.

emnify eSIM cards do not incur any costs unless activated.
The eSIMs have 4 different states that can be configured via the [**eSIM Inventory** page of the emnify Portal](https://portal.emnify.com/sim-inventory) or the [emnify eSIM REST API](https://cdn.emnify.net/api/doc/swagger.html#/SIM):

- **Issued** – the eSIM is in the initial state and is not usable.
It will not generate any traffic nor incur any charges. 
- **Factory-Test** – the eSIM is enabled and can be used for a defined limit of data and SMS without charge before it automatically goes into active state.
The eSIM can stay in this state until it is used by the end customer.
- **Active** – the eSIM is enabled, and the monthly charge is applied.
- **Suspended** – an active eSIM can be suspended when it is not used to save additional charges.
The eSIM can be activated anytime afterwards.
