---
description: List of event types exclusively for MNO and resellers
toc_max_heading_level: 2
---

# MNO and reseller events

The following event types are only available for [MNOs](https://www.emnify.com/iot-glossary/mno) and resellers using emnify. 

:::info
All other event types are also available for MNO and reseller accounts. 
You can find those events on the [Event types](event-types) page.
:::

## Authentication 

| ID | Description                                                 |
|:---|:------------------------------------------------------------|
| 37 | [Password reset requested](#password-reset-requested)       |
| 40 | [User verification requested](#user-verification-requested) |

### Password reset requested

Reset password email is requested for a specific email address.

<details>
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T00:00:43.000Z",
  "alert": false,
  "description": "Password reset requested",
  "id": 213045251604518,
  "event_type": {
    "id": 37,
    "description": "Password reset requested"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 654321,
    "name": "Sample Corp"
  },
  "user": {
    "id": 123456,
    "name": "Sample User",
    "username": "abc@cde.com"
  },
  "detail": {
    "id": 123456,
    "username": "abc@cde.com",
    "name": "Sample User",
    "organisationId": 654321,
    "activationKey": "JWT for resetting the password",
    "sourceIp": "192.168.1.1",
    "userAgent": "Chrome"
  }
}
```
</details>

### User verification requested

User signed up or requested another verification email. 

:::note
This event is only needed when customers use [self-signup](#self-signup). 
Manually invited users already verified their email.
:::

<details>
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T00:08:10.000Z",
  "alert": false,
  "description": "Verification requested for user 'pooled.15mb-americas@m2mtelecom.com'",
  "id": 213052601483453,
  "event_type": {
    "id": 40,
    "description": "User verification requested"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 2,
    "name": "EMnify GmbH"
  },
  "user": {
    "id": 123456,
    "name": "Sample User",
    "username": "abc@cde.com"
  },
  "detail": {
    "token": "JWT token to add to the link in the email for verification"
  }
}
```
</details>

## Organization and billing

| ID | Description                   |
|:---|:------------------------------|
| 17 | [Self-Signup](#self-signup)   |
| 36 | [User invited](#user-invited) |

### Self-Signup

Customer used self-signup to create their account.

<details>
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-11-04T12:53:47.000Z",
    "alert": false,
    "description": "John Doe (john.doe@company.com) has signed up with organisation name Test Org 3.",
    "id": 148688626139183,
    "event_type": {
        "id": 17,
        "description": "Self-Signup"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 14210,
        "name": "Test Org 3"
    },
    "user": {
        "id": 214099,
        "name": "John Doe",
        "username": "john.doe@company.com"
    }
}
```
</details>

### User invited

New user is invited to an organization.

<details>
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T08:02:06.000Z",
  "alert": false,
  "description": "User invited",
  "id": 213518499823660,
  "event_type": {
    "id": 36,
    "description": "User invited"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 654321,
    "name": "Sample Corp"
  },
  "user": {
    "id": 123456,
    "name": "Sample User",
    "username": "abc@cde.com"
  },
  "detail": {
    "id": 123457,
    "username": "nelyInvitedUser@cde.com",
    "name": "New Users Name",
    "organisationId": 654321,
    "activationKey": "JWT Token for user registration",
    "userFederated": false
  }
}
```
</details>

## Usage tariff and tariff plan

| ID | Description                                   |
|:---|:----------------------------------------------|
| 33 | [Tariff plan updated](#tariff-plan-updated)   |
| 34 | [Usage tariff updated](#usage-tariff-updated) |

### Tariff plan updated

Tariff plan changed after a contract change or self-service tariff upgrade. 

**Example**: A tariff plan changes from **Evaluation EUR** to **Evaluation USD** or from **Standard EUR** to **Enterprise EUR**.

<details>
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T12:27:56.000Z",
  "alert": false,
  "description": "Tariff plan 'Standard EUR' has been assigned.",
  "id": 213779836256315,
  "event_type": {
    "id": 33,
    "description": "Tariff plan updated"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 654321,
    "name": "Sample Corp"
  },
  "user": {
    "id": 123456,
    "name": "Sample User",
    "username": "abc@cde.com"
  },
  "detail": {
    "tariff_plan": {
      "id": 301,
      "name": "Standard EUR",
      "start_date": "2021-12-20 12:27:56",
      "end_date": null,
      "evaluation": false,
      "expiry_time": 0,
      "price": {
        "sim_activated_rate": [
          {
            "scale_start": 1,
            "rate": 0.75
          },
          {
            "scale_start": 100,
            "rate": 0.65
          },
          {
            "scale_start": 250,
            "rate": 0.55
          },
          {
            "scale_start": 500,
            "rate": 0.45
          },
          {
            "scale_start": 1000,
            "rate": 0.4
          },
          {
            "scale_start": 2500,
            "rate": 0.3
          },
          {
            "scale_start": 5000,
            "rate": 0.28
          }
        ]
      },
      "rate": 0,
      "yearly_rate": 0,
      "currency": {
        "id": 1
      },
      "service_level": {
        "id": 1
      }
    }
  }
}
```
</details>

### Usage tariff updated

Usage tariff is assigned or removed.

**Example**: Adding or removing **Regional Pro**, **Global Basic**, or **Global Extended**.

<details>
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T12:27:57.000Z",
  "alert": false,
  "description": "A new inclusive volume has been booked in ratezone 'EU28'.",
  "id": 213779836977183,
  "event_type": {
    "id": 34,
    "description": "Usage tariff updated"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 654321,
    "name": "Sample Corp"
  },
  "user": {
    "id": 123456,
    "name": "Sample User",
    "username": "abc@cde.com"
  },
  "detail": {
    "inclusive_volume": {
      "ratezone_inclusive_volume_id": "145",
      "volume": 0.25,
      "cost": "0.020000",
      "excess_traffic": 0.1,
      "pooled": true,
      "rate": 0.02,
      "id": 3540,
      "start_date": "2021-12-01 00:00:00",
      "end_date": null,
      "currency_id": 1,
      "ratezone": {
        "id": 3398,
        "name": "EU28"
      }
    }
  }
}
```
</details>

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

<details>
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T12:23:51.000Z",
  "alert": false,
  "description": "New SIM order has been submitted",
  "id": 213775802007594,
  "event_type": {
    "id": 38,
    "description": "Order submitted"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 654321,
    "name": "Sampe Corp"
  },
  "user": {
    "id": 123456,
    "name": "Sample User",
    "username": "abc@cde.com"
  },
  "detail": {
    "id": 16235491,
    "location": "/api/v1/order/16235491"
  }
}
```
</details>

### Order updated

SIM order has been updated.

**Possible updates**:
- Status **Paid** (if previously unpaid)
- Status **Shipped** (including the shipping provider ID)
  ```json
  "ext_shipping_reference": "TRACKING CODE",
  "shipped_with_provider_id": 1,
  "shipped_date": "2021-12-20T08:00:27.571Z"
  ```
- Status **Canceled**

<details>
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T08:00:28.000Z",
  "alert": false,
  "description": "SIM order has been updated",
  "id": 213516899172361,
  "event_type": {
    "id": 39,
    "description": "Order updated"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 1,
    "name": "EMnify GmbH"
  },
  "user": {
    "id": 123,
    "name": "Sample Admin",
    "username": "sample@emnify.com"
  },
  "detail": {
    "id": 16235491,
    "status": {
      "id": 2
    },
    "ext_shipping_reference": "TRACKING CODE",
    "shipped_with_provider_id": 1,
    "shipped_date": "2021-12-20T08:00:27.571Z"
  }
}
```
</details>
