---
description: Functionality and limitations of emnify's quota management for data and SMS
last_update: 
  date: 03-11-2024
slug: /services/quota-management
---

# Quota management

emnify provides data and SMS quota management for devices.
These quotas are defined in the service policy.

Quotas allow you to restrict daily usage and define the permitted consumption on individual devices and the time frame in which the quota is active.
You can also use quotas to customize settings like refill behavior, automatic expiry, and alerts.

You can apply quotas for data and SMS services, which are defined within a configurable time range (for example, 50 MB per month or 10 SMS per day).
emnify sends a warning threshold event when a device's quota limit is about to be reached and another event after the quota limit is reached.
You can also configure the device behavior when your device reaches the quota (for example, blocking or throttling to configurable speeds).

## Manage quotas in the emnify Portal

You can configure data or SMS quotas directly in the [**Service Policies**](https://portal.emnify.com/device-policies#service-policies) section of the emnify Portal.
For more information, see [Manage data or SMS quotas](/how-tos/manage-data-sms-quotas).

## Limits

- Each quota can have an expiration date (that is, as soon as the expiry date is reached, the service is denied).
- It's possible to define an action to be carried out on the expiry date.
The device can be blocked for data services, or the connection can be throttled.
- The daily limit is automatically replenished every day at midnight UTC until the expiration date is reached.

## Enforcement

When quota limits are reached, the system can execute several actions.

| Action       | Description  |
|--------------|--------------|
| Block        | Blocks service availability until the next time range starts. |
| Throttle     | Throttles service up to a defined peak. |
| Auto-refill  | Refills the quota with the last added value daily. |
| Expiry date  | Sets an expiration date for a quota. Service is denied once the date is reached. |

:::tip
You can integrate the emnify APIs with third-party software, such as Zapier or Automate.io, to receive real-time notifications from the Portal.
:::
