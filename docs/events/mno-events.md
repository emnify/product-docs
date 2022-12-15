---
toc_max_heading_level: 2
---

# MNO and Reseller Events

The following event types are only available for [MNOs](https://www.emnify.com/iot-glossary/mno) and Resellers using emnify. 

## Authentication 

| ID   | Description  |
| ---- | ------------ |
| 37   | Password reset requested |
| 40   | User verification requested |

#### Password reset requested
Requests a reset password email for a specific email address.

#### User verification requested
Requests a verification email when a user signs up or requests another verification email afterward. 

**Note**: This event is only needed when customers use self-signup. Manually invited users already verified their email.

## Organization and Billing

| ID   | Description  |
| ---- | ------------ |
| 17   | Self-Signup |
| 36   | User invited |

#### Self-Signup
Indicates that a customer used self-signup to create their account.

#### User invited
Invites a new user to an organization.

## Usage Tariff and Tariff Plan

| ID   | Description  |
| ---- | ------------ |
| 33   | Tariff plan updated |
| 34   | Usage tariff updated |

#### Tariff plan updated
Updates a tariff plan after a contract change or self-service tariff upgrade. 

**Example**: A tariff plan changes from “Evaluation EUR” to “Evaluation USD” or from “Standard EUR” to “Enterprise EUR.”

#### Usage tariff updated
Assigns or removes a usage tariff. 

**Example**: Adding or removing “Regional Pro,” “Global Basic,” or “Global Extended.”

## SIM Order  
<!-- https://cdn.emnify.net/api/doc/event.html#sim-object -->

:::caution Warning
The following events are only available if you're using the [Embedded SIM Shop](https://cdn.emnify.net/api/doc/swagger.html?urls.primaryName=MNO#/Shop%20Inventory%20Management).
:::

| ID   | Description  |
| ---- | ------------ |
| 38   | Order submitted |
| 39   | Order updated |

#### Order submitted
User submits a SIM order.

#### Order updated
Updates a SIM order.

**Possible updates**:
- Status "Paid" (if previously unpaid)
- Status "Shipped" (including the shipping provider ID) <!-- TODO: Add sample data -->
- Status "Canceled"