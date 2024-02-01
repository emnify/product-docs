---
description: Functionality and limitations of emnify's quota management for data and SMS
last_update: 
  date: 12-31-2021
slug: /services/quota-management
---

# Quota management

The emnify service core provides quota management on an individual device basis.
Data quotas offer the possibility to limit your devices individually and define the permitted data consumption per device and the time frame in which the data quota is active.

This function enables the configuration of the device behavior when the quota is reached (blocking or throttling to configurable speeds), the refill behavior, the automatic sequence, and the alerting options via emnify's event stream when the configured alarm threshold is reached.

The quota limit can be applied to SMS and data services and is defined per a configurable time range (for example, 50 MB per month or 10 SMS per day).
The platform sends a warning threshold event when the quota limit is about to be reached for a specific device and sends an event when the quota limit is reached.

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
