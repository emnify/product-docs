---
description: SASE approach, DNS, IMEI lock
last_update: 
  date: 11-16-2023
slug: /services/security
---

# Security

Given the globally distributed nature of the devices, smaller footprints and lack of resources, it can get difficult to individually secure IoT devices.

emnify uses a SASE approach to simplify securing devices—using several services specifically to protect customer data, filtering malicious content and preventing unauthorized access.

## Why does IoT require SASE?

![IoT security threats](assets/security-threats.png)

Secure Access Service Edge ([SASE](/glossary#sase)) introduces a new architecture where networking and security functions are bundled in a cloud-delivered service.
This approach allows you to apply consistent security standards to all your devices independent of the location.
Additionally, it enables the integration of security features right from the start.

Key features of [SASE](/glossary#sase) for IoT architecture includes are:

- **Dynamic Data Routing with Software-Defined Wide Area Network (SD-WAN):**  
  emnify utilizes a SD-WAN to route data to the closest cloud region using the [Regional Breakout](iot-cloud-communication-platform#regional-breakout) concept.
This enhances latency and data stability, ensuring that data remains within the designated continent and jurisdiction.
- **Cloud Access Security Broker (CASB):**
  emnify offers centralized policy definition for devices, including networks that can be accessed and authorized IP addresses for remote device access. All configurations are managed through the central platform and applied wherever the device is.

The following sections will delve into some of the security features offered by emnify.

## DNS

When a device establishes a connection, it uses a Domain Name Service (DNS) server to resolve a hostname to an IP address for data transmission.
For example, a hostname like `iot.example.com` is mapped to an IP address like `192.0.2.1`.

Cellular providers typically provide DNS services, and by default, emnify routes all DNS queries over Google’s public DNS `8.8.8.8`.

Some devices and modules allow you to configure the DNS service.
For example, Quectel uses the `AT+QIDNSCFG` command, while SIMCom uses the `AT+CDNSCFG` command.
Configuring thr DNS service in this way is beneficial for using your own or private DNS servers, enhancing security and control.

Customers also have the option to configure their own DNS settings, no matter if it's a public or a private DNS server.
These changes can be applied in the [emnify Portal](https://portal.emnify.com/).
Navigate to [**Device Policies**](https://portal.emnify.com/device-policies) and click **New service policy**.
Then, select the **More options** tab to locate the **Custom DNS** section.

<!-- TODO: Recreate dns_setting.png (Custom DNS setting configuration) -->

Utilizing a private DNS server not accessible via the public internet requires establishing a private network with the device or a network where the private DNS server is situated.
This can be accomplished using Cloud Connect through Amazon Transit Gateway or IPsec.
A tutorial on how to set up a DNS firewall based on a private DNS using Amazon Route 53 is available [here](https://www.emnify.com/en/developer-hub/dns-filtering).

## IMEI lock

Device manufacturers often face issues related to SIM card theft, as pluggable SIM cards can be removed from a device and then used to gain free internet access.
The [IMEI lock](/glossary#imei-lock)  feature prevents the use of SIM card in any other device by binding the SIM to a specific [IMEI](/glossary#imei) (International Mobile Equipment Identity), which serves as a unique device identifier.

When the automatic IMEI lock is configured, the emnify platform associates the SIM cards to the first device that establishes a data connection.
All future device connections are restricted to this specific device.

## Multi-factor authentication

Starting January 2024, multi-factor authentication (MFA) will be mandatory for all emnify Portal accounts.
This enforcement allows us to proactively safeguard our IoT ecosystem, follow best practices, and meet regulatory security compliance.

For more information, see [Set up multi-factor authentication](/how-tos/multi-factor-authentication).
