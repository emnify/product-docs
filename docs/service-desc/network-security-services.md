# Network security services

Given the globally distributed nature of the devices, smaller footprints and lack of resources, it can get difficult to individually secure IoT devices.

emnify uses a SASE approach to simplify securing devices – using several services specifically to protect customer data, filtering malicious content and preventing unauthorized access.

## SASE overview

Secure Access Service Edge ([SASE](/glossary#sase---secure-access-service-edge)) introduces a new architecture where networking and security functions are bundled in a cloud-delivered service.
You can apply the same security standards across all your devices independent of the location.
Moreover, you can integrate security features in your solutions right from the beginning.

Some of the features that [SASE](/glossary#sase---secure-access-service-edge) for IoT architecture includes are as follows:

- Dynamic Data Routing with Software-Defined Wide Area Network (SD-WAN)  
emnify utilizes a SD-WAN to route data to the closest cloud region using the [Regional Breakout](/services/iot-cloud-communication-platform#regional-breakout) concept.
In this way, latency and data stability is improved, and the end customer can be sure that data does not leave the continent and jurisdiction.
- Cloud Access Security Broker (CASB)  
emnify allows centrally defining policies for the devices such as: networks that can be accessed, allowed IP addresses through which authorized users can remotely access devices.
All configuration is done in the central platform and applied wherever the device is.


## Virtual Private Network options

A Virtual Private Network (VPN) enables encrypted, targeted transmission of data over public networks such as the internet.
It establishes protected and self-contained networks with various devices.
A common use case is the connection of home offices or mobile employees.

### Private static IP

Assigning a device a private static IP address prevents computers or other devices outside the local network from directly connecting to it.

### Cloud Connect – secure data transport

**AWS Transit Gateway**

Connect devices securely to AWS VPC without using public Internet.
Some of the features and benefits are:

- Devices and the application infrastructure reside within the same private network.
- Remotely access devices from AWS infrastructure via telnet / SSH.
- Device data does not traverse public internet.
- VPC / EC2 instances do not need public IP addresses.
- Fully scalable and managed AWS service.

**IPsec**

If your application is not on AWS but on any other cloud services or on-premise, you can utilize Cloud Connect for establishing an IPsec VPN connection.

With emnify you can set up an IPsec tunnel to securely transfer your data into your application server.

### OpenVPN – remote access

OpenVPN is provided as a self-service for enterprise customers to get remote access to their devices from any OpenVPN client.
Customer VPN clients are authenticated with the credentials and application tokens of their emnify account to get remote access to devices.
OpenVPN establishes a single tunnel to the VPN gateways which are delivered in active-passive redundancy with automatic failover in case one VPN gateway becomes unavailable.

## Custom DNS

When a device establishes a connection, it uses a Domain Name Service (DNS) server to resolve a hostname to an IP address to which it can send data.
For example, a hostname such as `iot.example.com` will be mapped to an IP address like `192.0.2.1`.

Cellular providers typically provide a DNS service.
By default, emnify routes all DNS queries over Google’s public DNS `8.8.8.8`.

For some devices and modules, it is possible to configure the DNS service.
For example, Quectel uses the `AT+QIDNSCFG` command, SIMcom `AT+CDNSCFG` command.
This is useful to be able to use your own or private DNS servers to secure and have better control over the solution.

Customers can also configure to use their own DNS, no matter if it is a public or a private one.
The DNS settings can be changed in the [emnify Portal](https://portal.emnify.com/) → [**Device Policies**](https://portal.emnify.com/device-policies) → **New service policy** → **More options**

Utilizing a private DNS server which is not reachable via the public internet requires to set up a private network with the machine or a network where the private DNS server is located.
This can be done using Cloud Connect either with Amazon Transit Gateway or IPsec.
A tutorial on how to set up a DNS firewall based on a private DNS using Amazon Route 53 is available [here](https://www.emnify.com/en/developer-hub/dns-filtering).

## IMEI lock

For device manufacturers, SIM card theft is an issue because pluggable SIM cards can be removed from a device and then used to gain free internet access.
The [IMEI lock](/glossary#imei-lock)  feature prevents the use of SIM card in any other device by bounding the SIM to an IMEI.
The [IMEI](/glossary#imei---international-mobile-equipment-identity) is a unique device identifier.
When the automatic IMEI lock is configured, the emnify platform will bind the SIM cards to the first device that establishes a data connection.
All future device connections will only be allowed from this device.

## Centralized policies

Within the emnify platform, there is a separation between SIM card and the device, also referred to as "endpoint".
This allows you to configure policies on the device level rather than SIM level.
The device policies can be applied on a device group as well as at an individual level.

### Service policies

Service policies define which services are available for a group of devices. These policies include:

- Available radio access types (2G, 3G, 4G, NB-IoT)
- Monthly data and SMS limit
- SMS API configuration
- Custom DNS
- Breakout Region
- Available SMS service (MO/MT/P2P/A2P)
- Activation of Quota and Prepaid Management

### Coverage policies

Coverage policies define which tariff and network coverage is available for a group of devices.
This enables you to optimize the tariff based on the intended coverage.

The coverage policies include:

- The applied tariff for the group of devices
- The available networks organized in rate zones