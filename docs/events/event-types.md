---
toc_max_heading_level: 2
---

# Event Types

The following is a list of available event types, including the corresponding IDs and descriptions. 

:::info
Some event types are only available for [MNO](https://www.emnify.com/iot-glossary/mno) and Reseller accounts, as they require additional authentication. You can find those events on the [MNO and Reseller Events](mno-events) page.
:::

:::note API Reference 
[Event Type Object - Event API Reference Documentation](https://cdn.emnify.net/api/doc/event.html#event-type-object)
:::

## Generic Events

| ID   | Description  |
| ---- | ------------ |
| 0    | [Generic](#generic) |

### Generic
Data session disconnects while applying the updated actions on the connectivity ([PDP sessions](#data-connection-lifecycle)) or the [updated quota information](#quota-management).


## Network Attachment and Location

| ID   | Description  |
| ---- | ------------ |
| 1    | Update location |
| 2    | Update GPRS location |
| 15   | Purge location |
| 16   | Purge GPRS location |

### Update location

Registers the device location when it's first switched on and attaches to a network or updates the device location when it moves to a new location area. It can also periodically inform the network of the device's location.

**Example**: A SIM card has (re)authenticated with a different network element. If successful, the device will show as `Attached` in the [emnify Portal](usage#the-emnify-portal) and can already receive SMS.


### Update GPRS location
Registers or updates the device's GRPS location on the data network. The serving GPRS support node (SGSN) then uses that information to provide functionality switching, security, and authentication. 

**Example**: A SIM card has successfully registered for data sessions with a different network element.


### Purge location
Purges the device location when the device is unreachable or switched off, and the network doesn't know its location. 

**Example**: The network deletes the routing information for a mobile-terminated call or mobile-terminated short message and marks the device not reachable.

### Purge GPRS location
Purges the device's GPRS location after the device is inactive and doesn't send or receive any packets.

## Data Connection Lifecycle  
<!-- https://cdn.emnify.net/api/doc/event.html#pdp-context-object -->

| ID   | Description  |
| ---- | ------------ |
| 3    | Create PDP Context |
| 5    | Delete PDP Context |
| 49   | Device offline |

### Create PDP Context
Indicates the activation or rejection of data connectivity. 

**Example**: A device has established a data session and started transferring data. This device will show as `Online` in the [emnify Portal](usage#the-emnify-portal) (as long as there hasn't been a subsequent 'Delete PDP Context' event).


### Delete PDP Context
Deletes the data session between the device and the network. 

**Example**: A device disconnected and ended a data transfer. The event details will also show the data transmitted, and the device status will show as `Offline` in the [emnify Portal](usage#the-emnify-portal).

### Device offline
Device deletes a PDP context and doesn't create a new PDP context within 5 minutes. 

**Example**: A device is no longer attached to a network and hasn't tried to connect to a network for 24-48 hours.

## Authentication 

| ID   | Description  |
| ---- | ------------ |
| 6    | User authentication failed |
| 7    | Application authentication failed |
| 13   | Support Access |
| 14   | Multi-factor Authentication |

### User authentication failed
Fails to authenticate someone attempting to use an email from the organization.

### Application authentication failed
Fails to authenticate an application token.

### Support Access
emnify team accesses the organization on behalf of a user for service or support purposes.

### Multi-factor Authentication
User removes multi-factor authentication (MFA) from their user account.


## User Management 

| ID   | Description  |
| ---- | ------------ |
| 41   | User verified |
| 46   | User deleted |

### User verified
User successfully verifies their email.

### User deleted
User gets deleted by another user.

## Device Status Management
<!-- https://cdn.emnify.net/api/doc/event.html#sim-object -->
<!-- https://www.emnify.com/developers/documentation#_sim_life_cycle_management -->

| ID   | Description  |
| ---- | ------------ |
| 8    | SIM activation | 
| 9    | SIM suspension |
| 10   | SIM deletion | 
| 42   | Endpoint enabled | 
| 43   | Endpoint disabled |
| 44   | SIM issued | 
| 45   | SIM factory | 
| 48   | SIM registration | 
| 50   | SIM Released | 
| 51   | SIM Assigned | 

### SIM activation
Patches a SIM to the "Activated" status (meaning it's able to use network services) after previously holding one of the following statuses: "Issued," "Suspended," or "Factory Test." 

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### SIM suspension
Patches a SIM to the "Suspended" status (meaning it's temporarily suspended and blocked from network access). 

It's possible to activate a SIM with the "Suspended" status again at any time.

### SIM deletion
Deletes a SIM, permanently removing it from the SIM repository. Once deleted, the SIM cannot be restored for network access. 

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### Endpoint enabled
Enables a device.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### Endpoint disabled
Disables a device.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### SIM issued
Patches a SIM to the "Activated" or "Suspended" status. 

**Note**: Only the emnify team can patch a SIM to the "Issued" status.

### SIM factory
Patches a SIM to the "Factory Test" status (for SIM testing).

### SIM registration
Indicates that a SIM or SIM batch is registered to an organization via a [Batch Identification Code (BIC)](https://www.emnify.com/developers/documentation#_glossary). 

**Note**: This event doesn't trigger when the emnify team assigns SIMs to an organization. It also doesn't trigger for every SIM of a SIM batch, so the event log will only be visible on the individual SIM when registering single SIM batches.

### SIM Released
Releases a SIM from a device. 

Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-EMnify-User-Interface-EUI-).

### SIM Assigned
Assigns a SIM to a device. 

Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-EMnify-User-Interface-EUI-) or while [creating an endpoint using the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/CreateEndpoint).

## Limit Enforcement 

| ID   | Description  |     
| ---- | ------------ |
| 11   | Endpoint blocked |
| 12   | Organization blocked |

### Endpoint blocked
Blocks the device from all services after exceeding device policies (e.g., reaching the volume limit). 

**Note**: Changing the policies will unblock the device.

### Organization blocked
Blocks an organization after exceeding the monthly cost limit (defined by emnify ) or exceeding their prepaid balance (if not set up to be postpaid).

## Data Quota Management
<!-- The quota object is included in the details of the event. -->
<!-- In any point in time, one can assign a new data quota to an endpoint via portal/API. -->
<!-- The event description contains a summary of the data quota configuration for this endpoint. -->

| ID   | Description  |     
| ---- | ------------ |
| 18   | Quota threshold reached |
| 19   | Quota used up |
| 52   | Data quota enabled |
| 53   | Data quota disabled |
| 56   | Data quota assigned |
| 57   | Data quota deleted |
| 60   | Data quota expired |

### Quota threshold reached
Remaining data quota volume falls below the configured threshold percentage. Exclusively for devices with enabled data quota management. 

**Example**: If the device's data quota volume is set to 100 MB and the threshold percentage to 15%, the system will generate an event when the remaining volume falls below 15 MB.

### Quota used up
Data quota volume is completely depleted. Exclusively for devices with enabled data quota management. 

**Note**: Once this happens, the data quota status updates from "Active" to "Exhausted," and the device won't be able to consume from the data service. Established connections for that device will disconnect within seconds, and new connection requests will be denied until a new data quota is assigned or data quota management is disabled on the service profile.

### Data quota enabled
Enables data quota management on a service profile. 

**Note**: All devices using this service profile need to have an active data quota assigned to use the data service. Devices without active data quotas will disconnect within seconds. New connection requests will be denied until a new data quota is assigned or data quota management is disabled on the service profile.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### Data quota disabled
Disables data quota management on a service profile. 

**Note**: There will no longer be data service restrictions for devices using this service profile.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### Data quota assigned
Assigns a new data quota to a device. 

**Example**: A device has a quota volume of 50 MB with daily auto-refill enabled, valid until May 27, 2025, and action on exhaustion set to block. The event description will read: "Data quota got assigned with a volume of 50.000000 MB with daily refill till 2025-05-27T22:56:17Z. On exhaustion, the data service will be blocked.”

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### Data quota deleted
Deletes a data quota from a device. 

**Note**: Once deleted, devices on this service profile (with data quota management enabled) won't be able to use the data service. Potential data connections of this device will disconnect within seconds. New connection requests will be denied until an active data quota is assigned or data quota management is disabled on the service profile.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### Data quota expired
Active data quota of a device expires (and the quota status changes to "Expired").

**Note**: Once expired, devices on this service profile (with data quota management enabled) won't be able to use the data service. Potential data connections of this device will disconnect within seconds. New connection requests will be denied until an active data quota is assigned or data quota management is disabled on the service profile.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

## SMS Quota Management
<!-- The quota object is included in the details of the event. -->

| ID   | Description  | 
| ---- | ------------ | 
| 20   | SMS quota threshold reached |
| 21   | SMS quota used up |
| 54   | SMS quota enabled |
| 55   | SMS quota disabled |
| 58   | SMS quota assigned |
| 59   | SMS quota deleted |

### SMS quota threshold reached
Remaining SMS quota volume falls below the configured threshold percentage. Exclusively for devices with enabled SMS quota management.

**Example**: If the device's SMS quota volume is set to 10 SMS and the threshold percentage to 50%, the system will generate an event when the remaining volume falls below 5 MB.

### SMS quota used up
SMS quota volume is completely depleted. Exclusively for devices with enabled SMS quota management. 

**Note**: Once this happens, the SMS quota status updates from "Active" to "Exhausted," and the device won't be able to consume from the SMS service. Established connections for that device will disconnect within seconds, and new connection requests will be denied until a new SMS quota is assigned or SMS quota management is disabled on the service profile.

### SMS quota enabled
Enables SMS quota management on a service profile. 

**Note**: All devices using this service profile need to have an active SMS quota assigned to use the SMS service. Devices without active SMS quotas will disconnect within seconds. New connection requests will be denied until a new SMS quota is assigned or SMS quota management is disabled on the service profile. 

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### SMS quota disabled
Disables an SMS quota management on a service profile. 

**Note**: There will no longer be SMS service restrictions for devices using this service profile.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### SMS quota assigned
Assigns a new SMS quota to a device.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

### SMS quota deleted
Deletes an SMS quota from a device. 

**Note**: Once deleted, devices on this service profile (with SMS quota management enabled) won't be able to use the SMS service until an active SMS quota is assigned, or SMS quota management is disabled on the service profile.

Triggered through the [emnify REST API](usage#emnify-rest-api) or the [emnify Portal](usage#emnify-portal).

## CloudConnect Lifecycle 

| ID   | Description  | 
| ---- | ------------ |
| 22   | CloudConnect TGW Resource Share created |
| 23   | CloudConnect TGW available | 
| 25   | CloudConnect TGW breakout terminated | 
| 26   | CloudConnect VPN breakout terminated | 
| 27   | CloudConnect Connection State Changed |  

### CloudConnect TGW Resource Share created
Creates a [CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) resource share 

### CloudConnect TGW available
Indicates when a [CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) is available.

### CloudConnect TGW breakout terminated
Terminates a [CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) breakout.

### CloudConnect VPN breakout terminated
Terminates a [CloudConnect VPN](https://www.emnify.com/integration-guides/how-to-setup-an-ipsec-using-emnify-cloudconnect) breakout.

### CloudConnect Connection State Changed
Changes the CloudConnect connection state. 

**Example**: The state of the CloudConnect attachment initially shows as "Setting Up" then changes to "Not Connected" while [configuring a device](https://www.emnify.com/integration-guides/emnify-cloudconnect-integration-to-google-cloud-platform)).

## OpenVPN Lifecycle 

| ID   | Description  |
| ---- | ------------ |
| 28   | OpenVPN connect |
| 29   | OpenVPN disconnect |
| 30   | OpenVPN authentication |

### OpenVPN connect
Connects an application or user to [OpenVPN](https://www.emnify.com/iot-glossary/open-vpn).

### OpenVPN disconnect
Disconnects an application or user from [OpenVPN](https://www.emnify.com/iot-glossary/open-vpn).

### OpenVPN authentication
Indicates success when authenticating a client on [OpenVPN](https://www.emnify.com/iot-glossary/open-vpn).

## Organization and Billing

| ID   | Description  |
| ---- | ------------ |
| 31   | Organisation updated |
| 32   | Billing configuration updated |

### Organisation updated
Updates an organization's country, name, or verification data.

### Billing configuration updated
Updates an organization's billing configuration.