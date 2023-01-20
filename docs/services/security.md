---
description: SASE approach, DNS, IMEI lock
---
# Security

Given the globally distributed nature of the devices, smaller footprints and lack of resources, it can get difficult to individually secure IoT devices.

emnify uses a SASE approach to simplify securing devices – using several services specifically to protect customer data, filtering malicious content and preventing unauthorized access.

## Why does IoT require SASE?

![IoT security threats](assets/security-threats.png)

Secure Access Service Edge ([SASE](/glossary#sase-secure-access-service-edge)) introduces a new architecture where networking and security functions are bundled in a cloud-delivered service.
You can apply the same security standards across all your devices independent of the location.
Moreover, you can integrate security features in your solutions right from the beginning.

Some of the features that [SASE](/glossary#sase-secure-access-service-edge) for IoT architecture includes are as follows:

- Dynamic Data Routing with Software-Defined Wide Area Network (SD-WAN)  
emnify utilizes a SD-WAN to route data to the closest cloud region using the [Regional Breakout](iot-cloud-communication-platform#regional-breakout) concept.
In this way, latency and data stability is improved, and the end customer can be sure that data does not leave the continent and jurisdiction.
- Cloud Access Security Broker (CASB)  
emnify allows centrally defining policies for the devices such as: networks that can be accessed, allowed IP addresses through which authorized users can remotely access devices.
All configuration is done in the central platform and applied wherever the device is.

In the following sections we will discuss some of the security features offered by emnify.

## DNS

When a device establishes a connection, it uses a Domain Name Service (DNS) server to resolve a hostname to an IP address to which it can send data.
For example, a hostname such as `iot.example.com` will be mapped to an IP address like `192.0.2.1`.

Cellular providers typically provide a DNS service.
By default, emnify routes all DNS queries over Google’s public DNS `8.8.8.8`.

For some devices and modules, it is possible to configure the DNS service.
For example, Quectel uses the `AT+QIDNSCFG` command, SIMcom `AT+CDNSCFG` command.
This is useful to be able to use your own or private DNS servers to secure and have better control over the solution.

Customers can also configure to use their own DNS, no matter if it is a public or a private one.
The DNS settings can be changed in the Portal → Device Policies → Service Policies → More Options → DNS.

<!-- TODO: Recreate dns_setting.png (Custom DNS setting configuration) -->

Utilizing a private DNS server which is not reachable via the public Internet requires to set up a private network with the machine or a network where the private DNS server is located.
This can be done using Cloud Connect either with Amazon Transit Gateway or IPsec.
A tutorial on how to set up a DNS firewall based on a private DNS using Amazon Route 53 is available [here](https://www.emnify.com/en/developer-hub/dns-filtering).

## IMEI lock

For device manufacturers, SIM card theft is an issue because pluggable SIM cards can be removed from a device and then used to gain free internet access.
The [IMEI lock](/glossary#imei-lock)  feature prevents the use of SIM card in any other device by bounding the SIM to an IMEI.
The [IMEI](/glossary#imei---international-mobile-equipment-identification-number) is a unique device identifier.
When the automatic IMEI lock is configured, the emnify platform will bind the SIM cards to the first device that establishes a data connection.
All future device connections will only be allowed from this device.
