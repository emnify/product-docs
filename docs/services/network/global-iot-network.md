---
description: Network aggregation supporting all radio types
last_update: 
  date: 08-24-2021
pagination_next: services/network/iot-cloud-communication-platform
slug: /services/global-iot-network
---

# Global IoT Network

<!-- markdownlint-disable MD040 -->

Even when IoT devices are primarily deployed at a single location and remain stationary, it's essential for a vendor serving multiple countries to adopt a global connectivity solution. This approach eliminates the need to maintain different SIM cards in stock or manage multiple contracts and data plans.

<!-- TODO: Find place for service_stack.png -->

## Mobile network aggregation

emnify uses an approach to aggregate the roaming footprint of multiple operators with the goal of providing access to every network worldwide.

Mobile operators utilize roaming services in foreign countries to ensure their subscribers can stay connected when traveling.
However, these operators often lack roaming agreements with all countries or may only have an agreement with only one network, which is suitable for roaming travelers but not ideal for devices that could be located anywhere within the country.

emnify collaborates with multiple partner operators worldwide  to expand its network coverage at a commercially viable rate.
The emnify [multi-IMSI applet](/services/global-iot-sim#multi-imsi-applet) enables devices to identify which roaming agreement with which operator is currently in use, ensuring transparent connectivity.

## Radio access types

The emnify IoT SIM and platform supports all devices and modules using the following radio access technologies:

<div align="center">
  
| Type  | Details                |
| ----- | ---------------------- |
| [2G](/services/global-iot-network/2g)  | GSM/GPRS/EDGE          |
| [3G](/services/global-iot-network/3g)  | UMTS/WCDMA/HPSA/HSDPA  |
| [4G](/services/global-iot-network/4g)  | LTE/LTE-A/LTE-CATXX     |
| [5G](/services/global-iot-network/5g)  | New Radio               |
| [LTE-M](/services/global-iot-network/lpwan)  | CAT-M1                 |
| [NB-IoT](/services/global-iot-network/lpwan)  | CAT-NB1, CAT-NB2       |

</div>

For a device to establish a connection with any of these radio technologies, two essential conditions must be met:

1.  The network must support the specific radio technology.
2.  The device must be compatible with the network-specific frequency band associated with this technology.

These conditions are crucial for enabling seamless communication between devices and networks across various radio technologies.
