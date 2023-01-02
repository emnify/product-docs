---
description: List of event types exclusively for MNO and Resellers.
toc_max_heading_level: 2
---

# MNO and Reseller events

The following event types are only available for [MNOs](https://www.emnify.com/iot-glossary/mno) and Resellers using emnify. 

:::info
All other event types are also available for MNO and Reseller accounts. 
You can find those events on the [Event types](event-types) page.
:::

## Authentication 

| ID | Description                                                 |
|:---|:------------------------------------------------------------|
| 37 | [Password reset requested](#password-reset-requested)       |
| 40 | [User verification requested](#user-verification-requested) |

### Password reset requested

Reset password email is requested for a specific email address.

### User verification requested

User signed up or requested another verification email. 

:::note
This event is only needed when customers use [self-signup](#self-signup). 
Manually invited users already verified their email.
:::

## Organization and billing

| ID | Description                   |
|:---|:------------------------------|
| 17 | [Self-Signup](#self-signup)   |
| 36 | [User invited](#user-invited) |

### Self-Signup

Customer used self-signup to create their account.

### User invited

New user is invited to an organization.

## Usage tariff and tariff plan

| ID | Description                                   |
|:---|:----------------------------------------------|
| 33 | [Tariff plan updated](#tariff-plan-updated)   |
| 34 | [Usage tariff updated](#usage-tariff-updated) |

### Tariff plan updated

Tariff plan changed after a contract change or self-service tariff upgrade. 

**Example**: A tariff plan changes from **Evaluation EUR** to **Evaluation USD** or from **Standard EUR** to **Enterprise EUR**.

### Usage tariff updated

Usage tariff is assigned or removed.

**Example**: Adding or removing **Regional Pro**, **Global Basic**, or **Global Extended**.

## SIM order  

:::caution
The following events are only available if you're using the [Embedded SIM Shop](https://cdn.emnify.net/api/doc/swagger.html?urls.primaryName=MNO#/Shop%20Inventory%20Management).
:::

| ID | Description                         |
|:---|:------------------------------------|
| 38 | [Order submitted](#order-submitted) |
| 39 | [Order updated](#order-updated)     |

### Order submitted

A user submitted a SIM order.

### Order updated

SIM order has been updated.

**Possible updates**:
- Status **Paid** (if previously unpaid)
- Status **Shipped** (including the shipping provider ID) <!-- TODO: Add sample data -->
- Status **Canceled**