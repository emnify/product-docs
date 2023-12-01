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
You can apply the same security standards across all your devices independent of the location.
Moreover, you can integrate security features in your solutions right from the beginning.

Some of the features that [SASE](/glossary#sase) for IoT architecture includes are as follows:

- Dynamic Data Routing with Software-Defined Wide Area Network (SD-WAN)  
emnify utilizes a SD-WAN to route data to the closest cloud region using the [Regional Breakout](iot-cloud-communication-platform#regional-breakout) concept.
In this way, latency and data stability is improved, and the end customer can be sure that data doesn't leave the continent and jurisdiction.
- Cloud Access Security Broker (CASB)  
emnify allows centrally defining policies for the devices such as: networks that can be accessed, allowed IP addresses through which authorized users can remotely access devices.
All configuration is done in the central platform and applied wherever the device is.

The following sections discuss some of the security features offered by emnify.

## DNS

When a device establishes a connection, it uses a Domain Name Service (DNS) server to resolve a hostname to an IP address to which it can send data.
For example, a hostname such as `iot.example.com` is mapped to an IP address like `192.0.2.1`.

Cellular providers typically provide a DNS service.
By default, emnify routes all DNS queries over Google’s public DNS `8.8.8.8`.

For some devices and modules, it's possible to configure the DNS service.
For example, Quectel uses the `AT+QIDNSCFG` command, SIMCom `AT+CDNSCFG` command.
This is useful to be able to use your own or private DNS servers to secure and have better control over the solution.

Customers can also configure to use their own DNS, no matter if it's a public or a private one.
The DNS settings can be changed in the [emnify Portal](https://portal.emnify.com/).
Go to [**Device Policies**](https://portal.emnify.com/device-policies) and click **New service policy**.
Then, select the **More options** tab to find the **Custom DNS** section.

<!-- TODO: Recreate dns_setting.png (Custom DNS setting configuration) -->

Utilizing a private DNS server which isn't reachable via the public Internet requires to set up a private network with the machine or a network where the private DNS server is located.
This can be done using Cloud Connect either with Amazon Transit Gateway or IPsec.
A tutorial on how to set up a DNS firewall based on a private DNS using Amazon Route 53 is available [here](https://www.emnify.com/en/developer-hub/dns-filtering).

## IMEI lock

For device manufacturers, SIM card theft is an issue because pluggable SIM cards can be removed from a device and then used to gain free internet access.
The [IMEI lock](/glossary#imei-lock)  feature prevents the use of SIM card in any other device by bounding the SIM to an IMEI.
The [IMEI](/glossary#imei) is a unique device identifier.
When the automatic IMEI lock is configured, the emnify platform binds the SIM cards to the first device that establishes a data connection.
All future device connections are only allowed from this device.

## Multi-factor authentication

Starting January 2024, multi-factor authentication (MFA) will be mandatory for all emnify Portal accounts.
This enforcement allows us to proactively safeguard our IoT ecosystem, follow best practices, and meet regulatory security compliance.

For more information, see [Set up multi-factor authentication](/how-tos/multi-factor-authentication).
