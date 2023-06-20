---
description: Single/group device policy configuration of service and coverage
---
# Endpoint management and group policies

Within the emnify platform, there is a separation between SIM card and the device, also referred to as "endpoint".
This allows you to configure policies on the device level rather than SIM level.
The device policies can be applied on a device group as well as at an individual level.

## Service policies

Service policies define which services are available for a group of devices. These policies include:

- Available radio access types (2G, 3G, 4G, NB-IoT)
- Monthly data and SMS limit
- SMS API configuration
- Custom DNS
- Breakout Region
- Available SMS service (MO/MT/P2P/A2P)
- Activation of Quota and Prepaid Management

## Coverage policies

Coverage policies define which tariff and network coverage is available for a group of devices.
This enables you to optimize the tariff based on the intended coverage.

The coverage policies include:

- The applied tariff for the group of devices
- The available networks organized in rate zones

## Individual device policies

On a device level additional policies can be defined:

- IMEI Lock
- Network Blacklist
- IP address

If the individual device policies are to be applied across multiple devices, a bulk action is also available in the [**Device Policies** page of the emnify Portal](https://portal.emnify.com/device-policies).
