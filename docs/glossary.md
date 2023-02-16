# Glossary

## Active SIM  
When a SIM is in the active state, the charges for the SIM are applied.
The device can send and receive data and SMS.

## APN - Access point name  
A gateway between a [GSM](#gsm---global-system-for-mobile-communications), GPRS, 3G, or 4G mobile network and another computer network, usually the public Internet.
The APN needs to be configured on the device. For emnify, it is `em` or `emnify`.

## Application token  
A unique identification key used to authenticate emnify's APIs.
Also used when authenticating the [OpenVPN](#openvpn) service.

## A2P SMS - Application–to–peer SMS  
SMS between an application and a device or vice-versa.

## Assigned SIM  
SIM that has been assigned to an [endpoint](#endpoint).

## AT+CREG AT command 
Gives information about the registration status and access technology of the serving cell.

## AuC - Authentication center  
A part of [GSM](#gsm---global-system-for-mobile-communications) infrastructure, validates any SIM card attempting network connection when a phone has a live network signal.

## BIC - Batch identification code  
A unique code for ordered SIM cards used to register the SIM cards on the [**SIM Inventory** page of the emnify Portal](https://portal.emnify.com/sim-inventory).

## Callback URL  
URL that will be called by a service to send and receive data related to an event that caused this action.

## Carrier-agnostic network  
A network that does not limit or prefer any specific network in a country and establishes a connection over any network that is transparent to the device.

## Connectivity status  
This is the connectivity status of an [endpoint](#endpoint). 
It can be set to:

- **Online**: Device is transmitting or can transmit data through a data tunnel.
- **Attached**: Device is attached to a network but has not established a data tunnel.
- **Offline**: Device isn’t attached to a network.
- **Blocked**

## Data RX  
Data received by the device.

## Data session  
A session between opening and closing a data connection to the network.

## Data TX  
Data transmitted by the device.

## Data usage (volume)  
The data that has been used by an endpoint, both transmitted and received.

## DDoS - Distributed denial of service attack  
An attack where the attacker sends multiple requests to a web resource with the aim of exceeding the website’s capacity to handle multiple requests and prevent the website from functioning correctly.

## DNS - Domain name system  
A hierarchical decentralized naming system for computers, services, or any resource connected to the Internet or a private network to map a hostname to an IP address.

## Dynamic IP  
An IP that changes over time.

## eDRX - Extended discontinuous reception  
A device configuration that specifies the periodicity in which the device listens for incoming data on the radio.
Instead of using a periodicity of 2.56ms (DRX) it can be increased up to 40mins, thus reducing power consumption.

## EID - eUICC Identifier
The eUICC Identifier (EID) provides a unique global serial number for an [eUICC](#euicc---embedded-universal-integrated-circuit-card).
It has a fixed length of 32 digits, as indicated in the following diagram:

![A 32-digit EID number: "89049011803455664400046832584675". The first 18 digits are the EUM Identification Number (EIN). Within those 18 digits, the first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (GER in this example). The next three digits are the eUICC Manufacturer. The final 10 digits of the EIN contain information about the chip, OS, and its version. After the EIN, the following 11 digits are the EUM Specific Identification Number (ESIN). This value is also the eUICC Individual Identification Number. The final two digits of the EID are the Check Digits.](assets/infographic-eid-digits.png)

:::note
The EUM specific identification number (ESIN) and check digits are for example purposes only, and the values aren't real.
:::

Unlike the [ICCID](#iccid---integrated-circuit-card-identifier), the EID remains the same throughout the life of the eSIM.
Therefore, you can use it as a permanent identifier to keep track of your SIM cards.

## Endpoint  
A representation of the device which has a SIM installed.

## Endpoint status  
The current state of the [endpoint](#endpoint): **Enabled** or **Disabled**.

## eUICC - Embedded universal integrated circuit card  
The embedded universal integrated circuit card (eUICC) is a component of a SIM card.
It allows consumers and IoT manufacturers to provision the SIM with a new [operator profile](https://www.emnify.com/iot-glossary/mno) [over-the-air](#ota---over–the–air).

:::tip Deep dive
Learn more about the eUICC in our blog post: [What is an eUICC and why does it matter?](https://www.emnify.com/iot-glossary/what-is-an-euicc)
:::

## Event log  
A log that stores all [endpoint](#endpoint) events.

## Form factor  
The form factor of a SIM card represents the SIM card format. 
SIM cards vary in size (Mini vs. Micro vs. Nano), function (embedded vs. standard), and quality (industrial grade vs. standard):

- **2FF**: Mini SIM card
- **3FF**: Micro SIM card
- **4FF**: Nano SIM card

## GGSN - Gateway GPRS support node  
Part of the [GSM](#gsm---global-system-for-mobile-communications) infrastructure, the [GGSN](#ggsn---gateway-gprs-support-node) is responsible for the interworking between the GPRS network and external packet switched networks.

## Globally–distributed infrastructure  
Cloud infrastructure that is distributed globally, with several local breakout points for better traffic handling.

## GSM - Global system for mobile communications  
A standard developed by the European Telecommunications Standards Institute to describe the protocols for second-generation digital cellular networks used by mobile devices.

## HLR - Home location register  
A database from a mobile network in which information from all mobile subscribers is stored.
Part of [GSM](#gsm---global-system-for-mobile-communications) infrastructure. 

## HTTP POST request  
A request method supported by the HTTP protocol, which typically includes data in the request body.

## ICCID - Integrated circuit card identifier  
The integrated circuit card identifier (ICCID) is a 20-digit code used to identify a SIM card. 
It includes a SIM card's country, home network, and identification number, as indicated in the following diagram:

![A 20-digit ICCID number: "89883030000080139311". The first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (non-terrestrial). The following two digits are the Issuer Identifier (emnify). After that, the next 11 digits are the Individual Account Identification. The final digit is the Check Digit.](assets/infographic-iccid-digits.png)

:::note
Following the introduction of [eUICC](#euicc---embedded-universal-integrated-circuit-card) SIM cards in 2021, there are situations where the ICCID can no longer be unique. 
For example, the ICCID value can change when a different [SIM profile](#sim-profile) is provisioned on the eSIM.
:::

## IMEI - International mobile equipment identification number  
A unique number used to identify cellular modems.

## IMEI lock  
The practice of strictly associating a SIM to the device with a certain IMEI number.

## IMSI - International mobile subscriber identity  
A unique number used to identify a [GSM](#gsm---global-system-for-mobile-communications) subscriber.

## IPsec  
A protocol suite for Secure Internet Protocol (IP) communications that works by authenticating and encrypting each IP packet of a communication session.

## IP subnet  
A logical subdivision of an IP network.

## JSON - JavaScript object notation  
A lightweight data-interchange format.
It is easier for humans to read and write compared to other formats.
It is easy for machines to parse and generate.

## LAC - Location area code  
A unique 16-digit fixed-length location area identity code that identifies a phone number’s location area.

## MFA Key  
A combination generated by an external device or a service that is used to authenticate the user.

## MSISDN - Mobile station international subscriber directory number  
A unique number used to identify a mobile phone number internationally.

## MSC - Mobile Switching Center  
The part of [GSM](#gsm---global-system-for-mobile-communications) architecture that controls the network switching subsystem elements.

## OTA - Over–the–air  
A method of wireless distribution of the software, configuration settings, or encryption keys.

## OTA Provisioning  
A technology that allows changes to the SIM memory [over–the–air](#ota---over–the–air).

## OpenVPN  
An open-source software application that implements [virtual private network (VPN)](#vpn) techniques for creating secure point–to–point or site–to–site connections in routed or bridged configurations and remote access facilities.

## P2P SMS - Peer–to–Peer SMS  
SMS exchanged between devices.

## PDP context  
Data structure present on both the serving GPRS support node (SGSN) and the [gateway GPRS support node (GGSN)](#ggsn---gateway-gprs-support-node), which contains the subscriber’s session information when the subscriber has an active session.

## Private IP  
An IP address that is not reachable from the public Internet but only through a local or virtual network.
[Dynamic private IPs](#dynamic-ip) keep changing, whereas static private IP addresses don't change.

## PSM - Power saving mode  
While in PSM, the device tells the network that it will power off for a specific time and will send periodic updates in longer-than-usual intervals.
When the device comes back online, it does not need to reattach to a network but can use an already-created PDP context, thus saving power.

## Public IP  
An IP address accessible from the public Internet.

## RESTful API
The representational state transfer application programming interface allows you to integrate services with your applications.

## SASE - Secure access service edge  
SASE is a term coined by Gartner which combines software-defined networking ([SDN](#sdn)) and security and serves it as cloud-based Security-as-a-Service.

## SDN - Software–defined networking  
An approach that allows network administrators to programmatically initialize, control, change and manage network behavior dynamically via open interfaces.

## Service profile  
A profile that defines the services and functionality of a device managed through the emnify platform.

## SIM batch  
A collection of SIM cards that can be registered with a single [BIC](#bic---batch-identification-code) code.

## SMS firewall  
A firewall that controls the SMS flow.

## SIM hosting fee  
Monthly fee for an active SIM.

## SIM profile  
The [mobile network operator (MNO)](https://www.emnify.com/iot-glossary/mno) ID information stored in the SIM’s memory.

## SIM repository  
All SIMs assigned to your organization.

## SMPP - Short Message Peer–to–Peer  
A protocol used by the telecommunications industry for exchanging SMS messages between short message service centers (SMSC) and/or external short messaging entities (ESME).

## SMS console  
An interface to send [A2P SMS](#a2p-sms---application–to–peer-sms) from the platform to the SIM card.

## SMS MO  
SMS originating from the device.

## SMS MT  
SMS terminated (received) by the device.

## Source address  
The address of the SMS sender as displayed on the receiving device.

## Static IP  
An IP that doesn’t change over time.

## Tariff profile  
A profile that defines which networks or countries SIM should operate in.

## Traffic pooling  
A term used to describe the service model when various [endpoints](#endpoint) utilize the same data pool.

## Unassigned SIM  
SIM that had been unassigned from an [endpoint](#endpoint).

## Usage limit  
User–defined limit of consumption of a certain service (data, SMS) per endpoint.

## User–defined coverage  
An ability to select which operator the customer’s SIM connects to.

## User–defined networking  
An approach that enables users to create their own virtual mobile network, define service and security policies and provision [tariff profiles](#tariff-profile) and data packages.

## USSD - Unstructured supplementary service data  
A protocol used to communicate with the service provider’s computers.

## USSD gateway  
The collection of hardware and software required to interconnect two or more disparate networks, including performing protocol conversion.

## VPC - Virtual private cloud
A secure private cloud hosted within a public cloud where you can host websites, store data, run applications, etc.

## VPN - Virtual private network
A service that protects your internet connection and privacy online.
