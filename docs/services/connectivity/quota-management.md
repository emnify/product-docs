---
description: Quota Management FAQ
last_update: 
  date: 20-11-2023
slug: /services/quota-management
---

# Quota management FAQ

The EMnify Service Core provides quota management on an individual Connected Device basis.
Data quota offers the possibility to limit your devices individually and define the permitted data consumption per device as well as the time frame in which the data quota is active.


This function enables the configuration of the device behaviour when the quota is reached (blocking or throttling to configurable speeds), the refill behaviour, the automatic sequence, and the alerting options via our event stream when the configured alarm threshold is reached.

The quota limit can be applied to SMS and Data services and is defined per a configurable time range (e.g. 50MB per month, or 10 SMS per day).
The platform sends a warning threshold event when the quota limit is about to be reached for a specific Connected Device, as well as send an event when the quota limit is reached.

TODO: INSERT IMAGE

## Enable quota management

The quota management is enabled through the Service Policies.
If you want to use quota for a specific number of devices, you need to.

1. create a new Service Policy,
1. assign the Service Policy to these devices,
1. enable the quota management in the Service Policy,
1. assign a quota to each Connected Device.

When quota management is enabled in the Service Policy, you must assign a quota to each Connected Device that uses this Service Policy, otherwise these Connected Devices will be blocked in creating PDP activation sessions because there is no defined quota.

TODO: INSERT IMAGE

## Important notes:

- Each quota can have an expiration date. i.e., as soon as the expiry date is reached, the service is denied.
- It is possible to define an action to be carried out on the expiry date.
The Connected Device can be blocked for data services, or the connection can be throttled.
- The daily limit is automatically replenished every day at midnight UTC until the expiration date is reached.
 
To summarize, when quota limits are reached, the system can execute several actions:

1. Block – the availability of the service is blocked until the next time range starts
1. Throttle – the service is throttled to a defined peak
1. Auto-refill – refill the quota with the last added value on a daily basis
1. Expiry date – each quota can also have an expiry date. i.e. once the expiry date is reached the service is denied.
 

**Recommendation:**

To receive real-time notifications from the portal, for example, via email we recommend to integrate the EMnify APIs with 3rd party software, such as Zap (Zapier), a Flow (Integromat) or a bot (in Automate.io).
