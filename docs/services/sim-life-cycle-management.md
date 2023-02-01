---
description: Configure SIM state to minimize costs
---
# SIM life cycle management

When selling connected devices, it is difficult to determine when devices will be in use and when not. 
Using SIM cards that cannot align with the device lifecycle incur unnecessary costs.

emnify SIM cards do not incur any costs unless activated.
The SIMs have 4 different states that can be configured via the [**SIM Inventory** page of the emnify Portal](https://portal.emnify.com/sim-inventory) or the [emnify SIM REST API](https://cdn.emnify.net/api/doc/swagger.html#/SIM):

- **Issued** – the SIM is in the initial state and is not usable.
It will not generate any traffic nor incur any charges. 
- **Factory-Test** – the SIM is enabled and can be used for a defined limit of data and SMS without charge before it automatically goes into active state.
The SIM can stay in this state until it is used by the end customer.
- **Active** – the SIM is enabled, and the monthly charge is applied.
- **Suspended** – an active SIM can be suspended when it is not used to save additional charges.
The SIM can be activated anytime afterwards.
