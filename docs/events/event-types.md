---
description: List of all available event types.
toc_max_heading_level: 2
---

# Event types

The following is a list of available event types, including their corresponding IDs and descriptions. 

:::note API Reference 
[Event Type Object - Event API Reference Documentation](https://cdn.emnify.net/api/doc/event.html#event-type-object)
:::

## Generic events

| ID | Description         |
|:---|:--------------------|
| 0  | [Generic](#generic) |

### Generic

Data session disconnected while applying the updated actions on the connectivity ([PDP sessions](#data-connection-lifecycle)) or while applying the [updated quota information](#data-quota-management).

:::info
Other generic event triggers are possible. 

We're in the process of adding more specific event types that will replace these. 
We'll update this list as new event types are created.
:::

## Network attachment and location

| ID | Description                                   |
|:---|:----------------------------------------------|
| 1  | [Update location](#update-location)           |
| 2  | [Update GPRS location](#update-gprs-location) |
| 15 | [Purge location](#purge-location)             |
| 16 | [Purge GPRS location](#purge-gprs-location)   |

### Update location

Device attached to a network when first switched on or moved to a new location. 
It can also periodically inform the network of the device's location.

**Example**: A SIM card has (re)authenticated with a different network element. 
If successful, the device will appear as **Attached** in the [emnify Portal](usage#emnify-portal) and will be ready to receive SMS.


### Update GPRS location

Used by the serving GPRS support node (SGSN) to update the device's location. 
The SGSN then uses that information to provide functionality switching, security, and authentication.

**Example**: A SIM card has successfully registered for data sessions with a different network element.

### Purge location

Device is unreachable or switched off, and the network doesn't know its location.
The device status will appear as **Offline** in the [emnify Portal](usage#emnify-portal).

**Example**: The network deletes the routing information for a mobile-terminated call or mobile-terminated short message and marks the device not reachable.

### Purge GPRS location

Device is inactive and doesn't send or receive any packets.

## Data connection lifecycle  

| ID | Description                               |
|:---|:------------------------------------------|
| 3  | [Create PDP Context](#create-pdp-context) |
| 5  | [Delete PDP Context](#delete-pdp-context) |

### Create PDP Context

Activation (or rejection) of data connectivity. 

**Example**: A device has established a data session and started transferring data. 
This device will appear as **Online** in the [emnify Portal](usage#emnify-portal) as long as there hasn't been a subsequent [Delete PDP Context](#delete-pdp-context) event.


### Delete PDP Context

Data session between the device and the network is deleted. 

**Example**: A device disconnected and ended a data transfer. 
The event details will also show the data transmitted, and the device will appear as **Attached** in the [emnify Portal](usage#emnify-portal).

## Application and user authentication 

| ID | Description                                                             |
|:---|:------------------------------------------------------------------------|
| 6  | [User authentication failed](#user-authentication-failed)               |
| 7  | [Application authentication failed](#application-authentication-failed) |
| 13 | [Support Access](#support-access)                                       |
| 14 | [Multi-factor Authentication](#multi-factor-authentication)             |

### User authentication failed

Someone tried (and failed) to authenticate using an email from your organization.

### Application authentication failed

Application token failed to authenticate.

### Support Access

emnify team accessed your organization on behalf of one of your users for service or support purposes.

### Multi-factor Authentication

User removed multi-factor authentication (MFA) from their account.

## User management 

| ID | Description                     |
|:---|:--------------------------------|
| 41 | [User verified](#user-verified) |
| 46 | [User deleted](#user-deleted)   |

### User verified

User successfully verified their email.

### User deleted

A user deleted another user's account.

## Device status management

| ID | Description                             |
|:---|:----------------------------------------|
| 8  | [SIM activation](#sim-activation)       |
| 9  | [SIM suspension](#sim-suspension)       |
| 10 | [SIM deletion](#sim-deletion)           |
| 42 | [Endpoint enabled](#endpoint-enabled)   |
| 43 | [Endpoint disabled](#endpoint-disabled) |
| 45 | [SIM factory test](#sim-factory-test)   |
| 48 | [SIM registration](#sim-registration)   |
| 50 | [SIM Released](#sim-registration)       |
| 51 | [SIM Assigned](#sim-assigned)           |

### SIM activation

The SIM is patched to the **Activated** status after previously holding one of the following statuses: 
**Issued**, **Suspended**, or **Factory Test**.

You can manually trigger this event by using the [emnify Portal or REST API](usage). 
Or, it will be automatically triggered when the factory test mode threshold (data or SMS) is reached.

:::note
Activated SIMs can use network services.
:::

### SIM suspension

The SIM is patched to the **Suspended** status, temporarily suspending and blocking it from network access. 
Starting from the first day of the next month, the suspended SIM will not accrue any charges.

:::tip
Activating a SIM with the **Suspended** status again is possible at any time.
:::

### SIM deletion

The SIM is deleted and permanently removed from the SIM repository.

:::caution
Once deleted, the SIM cannot be restored for network access.
:::

### Endpoint enabled

Device is enabled.

### Endpoint disabled

Device is disabled.

### SIM factory test

SIM is patched from **Issued** to **Factory Test** status (for SIM testing).

### SIM registration

SIM or SIM batch is registered to an organization via a [Batch Identification Code (BIC)](https://www.emnify.com/developers/documentation#_glossary). 

:::note
This event doesn't trigger when the emnify team assigns SIMs to an organization. 
It also doesn't trigger for every SIM of a SIM batch, so the event log will only be visible on the individual SIM when registering single SIM batches.
:::

### SIM Released

SIM is released from a device. 

:::info
Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-EMnify-User-Interface-EUI-) or [REST API](usage#event-api).
:::

### SIM Assigned

SIM is assigned to a device. 

:::info
Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-EMnify-User-Interface-EUI-) or while [creating an endpoint using the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/CreateEndpoint).
:::

## Limit enforcement 

| ID | Description                                   |
|:---|:----------------------------------------------|
| 11 | [Endpoint blocked](#endpoint-blocked)         |
| 12 | [Organisation blocked](#organisation-blocked) |

### Endpoint blocked

Device is blocked from all services after exceeding device policies (e.g., reaching its traffic limit). 

:::tip
Changing the policies will unblock the device.
:::

### Organisation blocked

The organization is blocked after exceeding the monthly cost limit (defined by emnify) or exceeding their prepaid balance (if not set up to be postpaid).

## Data quota management

| ID | Description                                         |
|:---|:----------------------------------------------------|
| 18 | [Quota threshold reached](#quota-threshold-reached) |
| 19 | [Quota used up](#quota-used-up)                     |
| 52 | [Data quota enabled](#data-quota-enabled)           |
| 53 | [Data quota disabled](#data-quota-disabled)         |
| 56 | [Data quota assigned](#data-quota-assigned)         |
| 57 | [Data quota deleted](#data-quota-deleted)           |
| 60 | [Data quota expired](#data-quota-expired)           |

:::note API Reference
Quota information is in the [detail object](https://cdn.emnify.net/api/doc/event.html#detail-object) of the event.
:::

### Quota threshold reached

Remaining data quota volume fell below the configured threshold percentage. 
Exclusively for devices with enabled data quota management and a configured quota threshold percentage. 

:::note
The threshold percentage can be submitted when the data quota is assigned to the device.
:::

**Example**: If the device's data quota volume is set to 100 MB and the threshold percentage to 15%, the system will generate an event when the remaining volume falls below 15 MB.

### Quota used up

Data quota volume is completely depleted. 
Exclusively for devices with data quota management enabled. 

:::caution
Once this happens, the data quota status updates from **Active** to **Exhausted**, and the device won't be able to consume from the data service. 
Established connections for that device will disconnect within seconds, and new connection requests will be denied until a new data quota is assigned or data quota management is disabled in the service profile.
:::

### Data quota enabled

Data quota management is enabled in a service profile. 

:::caution
All devices using this service profile need to have an active data quota assigned to use the data service. 
Devices without active data quotas will disconnect within seconds. 
New connection requests will be denied until a new data quota is assigned or data quota management is disabled in the service profile.
:::

### Data quota disabled

Data quota management is disabled in a service profile. 

:::caution
There will no longer be data service restrictions for devices using this service profile.
:::

### Data quota assigned

New data quota is assigned to a device. 

:::tip
Assigning a new data quota to a device is possible at any time. 
[Data quota management must be enabled](#data-quota-enabled) in the service profile.
:::

**Example**: A device has a quota volume of 50 MB with daily auto-refill enabled, valid until May 27, 2025, and action on exhaustion set to block. 
The event description will read: 
"Data quota got assigned with a volume of 50.000000 MB with daily refill till 2025-05-27T22:56:17Z. 
On exhaustion, the data service will be blocked.”

### Data quota deleted

Data quota is deleted from a device. 

:::caution
Once deleted, devices on this service profile with data quota management enabled won't be able to use the data service. 
Potential data connections of this device will disconnect within seconds. 
New connection requests will be denied until an active data quota is assigned or data quota management is disabled in the service profile.
:::

### Data quota expired

Active data quota of a device expired (and the quota status changed to **Expired**).

:::caution
Once expired, devices on this service profile (with data quota management enabled) won't be able to use the data service. 
Potential data connections of this device will disconnect within seconds. 
New connection requests will be denied until an active data quota is assigned or data quota management is disabled in the service profile.
:::

## SMS quota management

| ID | Description                                                 |
|:---|:------------------------------------------------------------|
| 20 | [SMS quota threshold reached](#sms-quota-threshold-reached) |
| 21 | [SMS quota used up](#sms-quota-used-up)                     |
| 54 | [SMS quota enabled](#sms-quota-enabled)                     |
| 55 | [SMS quota disabled](#sms-quota-disabled)                   |
| 58 | [SMS quota assigned](#sms-quota-assigned)                   |
| 59 | [SMS quota deleted](#sms-quota-deleted)                     |

:::note API Reference
Quota information is in the event's [detail object](https://cdn.emnify.net/api/doc/event.html#detail-object).
:::

### SMS quota threshold reached

Remaining SMS quota volume fell below the configured threshold percentage. 
Exclusively for devices with enabled SMS quota management and a configured quota threshold percentage.

:::note
The threshold percentage can be submitted when the SMS quota is assigned to the device.
:::

**Example**: If the device's SMS quota volume is set to 10 SMS and the threshold percentage to 50%, the system will generate an event when the remaining volume falls below 5 MB.

### SMS quota used up

SMS quota volume is completely depleted. 
Exclusively for devices with enabled SMS quota management. 

:::caution
Once this happens, the SMS quota status updates from **Active** to **Exhausted**, and the device won't be able to consume from the SMS service. 
Established connections for that device will disconnect within seconds, and new connection requests will be denied until a new SMS quota is assigned or SMS quota management is disabled in the service profile.
:::

### SMS quota enabled

SMS quota management is enabled in a service profile. 

:::caution
All devices using this service profile need to have an active SMS quota assigned to use the SMS service. 
Devices without active SMS quotas will disconnect within seconds. 
New connection requests will be denied until a new SMS quota is assigned or SMS quota management is disabled in the service profile. 
:::

### SMS quota disabled

SMS quota management is disabled in a service profile. 

:::caution
There will no longer be SMS service restrictions for devices using this service profile.
:::

### SMS quota assigned

New SMS quota is assigned to a device.

:::tip
Assigning a new SMS quota to a device is possible at any time. 
[SMS quota management must be enabled](#sms-quota-enabled) in the service profile.
:::

### SMS quota deleted

SMS quota is deleted from a device. 

:::caution
Once deleted, devices on this service profile (with SMS quota management enabled) won't be able to use the SMS service until an active SMS quota is assigned, or SMS quota management is disabled in the service profile.
:::

## CloudConnect lifecycle 

| ID | Description                                                                         |
|:---|:------------------------------------------------------------------------------------|
| 22 | [CloudConnect TGW Resource Share created](#cloudconnect-tgw-resource-share-created) |
| 23 | [CloudConnect TGW available](#cloudconnect-tgw-available)                           |
| 25 | [CloudConnect TGW breakout terminated](#cloudconnect-tgw-breakout-terminated)       |

### CloudConnect TGW Resource Share created

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) resource share is created.

### CloudConnect TGW available

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) is available.

### CloudConnect TGW breakout terminated

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) breakout is terminated.

## OpenVPN lifecycle 

| ID | Description                                       |
|:---|:--------------------------------------------------|
| 30 | [OpenVPN authentication](#openvpn-authentication) |

### OpenVPN authentication

Client is successfully authenticated on [OpenVPN](https://www.emnify.com/iot-glossary/open-vpn).

## Organization and billing

| ID | Description                                                     |
|:---|:----------------------------------------------------------------|
| 31 | [Organisation updated](#organisation-updated)                   |
| 32 | [Billing configuration updated](#billing-configuration-updated) |

### Organisation updated

Organization's country, name, or verification data changed.

### Billing configuration updated

Organization's billing configuration changed.
