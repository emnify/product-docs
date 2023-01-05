---
description: Configure SIM state to minimize costs
---
# SIM life cycle management

When selling connected devices, it is difficult to determine when devices will be in use and when not. 
Using SIM cards that cannot align with the device lifecycle incur unnecessary costs.

emnify SIM cards do not incur any costs unless activated.
The SIMs have 4 different states that can be configured via the emnify Portal or [REST API](https://cdn.emnify.net/api/doc/swagger.html?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670424207784.1670429175064.6&__hssc=115846617.2.1670429175064&__hsfp=3017379904#/SIMs):

- **Issued** – the SIM is not yet installed nor usable - no monthly charge is applied.
- **Factory-Test** – the SIM is enabled and can be used for a defined limit of data and SMS without charge before it automatically goes into active state. The SIM can stay in this state until it is used by the end customer.
- **Active** – the SIM is enabled, and the monthly charge is applied
- **Suspended** – an active SIM can be suspended when it is not used to save additional charges. The SIM can be activated anytime afterwards.
