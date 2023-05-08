# Glossary

## Active SIM  
When a SIM is in the active state, the charges for the SIM are applied.
The device can send and receive data and SMS.

## APN
_Access Point Name_

A gateway between a [GSM](#gsm), GPRS, 3G, or 4G mobile network and another computer network, usually the public Internet.
The APN needs to be configured on the device. For emnify, it is `em` or `emnify`.

## Application token  
A unique identification key used to authenticate emnify's APIs.
Also used when authenticating the [OpenVPN](#openvpn) service.

## A2P SMS
_Application–to–Peer SMS_

SMS between an application and a device or vice-versa.

## Assigned SIM  
SIM that has been assigned to an [endpoint](#endpoint).

## AT+CREG AT command 
Gives information about the registration status and access technology of the serving cell.

## AuC
_Authentication Center_

A part of [GSM](#gsm) infrastructure, validates any SIM card attempting network connection when a phone has a live network signal.

## BIC
_Batch Identification Code_

A unique code for ordered SIM cards used to register the SIM cards on the [**SIM Inventory** page of the emnify Portal](https://portal.emnify.com/sim-inventory).

## Callback URL  
URL that will be called by a service to send and receive data related to an event that caused this action.

## Carrier-agnostic network  
A network that does not limit or prefer any specific network in a country and establishes a connection over any network that is transparent to the device.

## Company account
A company's emnify account (i.e., an [**Organization**](#organization) in the [emnify Portal](https://portal.emnify.com/)).

:::note
Every company account on the [**Pro** plan](https://portal.emnify.com/organisation-settings/subscription#plans) is a [workspace](#workspace) by default.
:::

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

## DDoS
_Distributed Denial of Service Attack_

An attack where the attacker sends multiple requests to a web resource with the aim of exceeding the website’s capacity to handle multiple requests and prevent the website from functioning correctly.

## DNS
_Domain Name System_

A hierarchical decentralized naming system for computers, services, or any resource connected to the Internet or a private network to map a hostname to an IP address.

## Dynamic IP  
An IP that changes over time.

## eDRX
_Extended Discontinuous Reception_

A device configuration that specifies the periodicity in which the device listens for incoming data on the radio.
Instead of using a periodicity of 2.56ms (DRX) it can be increased up to 40mins, thus reducing power consumption.

## EID
_eUICC Identifier_

The eUICC Identifier (EID) provides a unique global serial number for an [eUICC](#euicc).
It has a fixed length of 32 digits, as indicated in the following diagram:

![A 32-digit EID number: "89049011803455664400046832584675". The first 18 digits are the EUM Identification Number (EIN). Within those 18 digits, the first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (GER in this example). The next three digits are the eUICC Manufacturer. The final 10 digits of the EIN contain information about the chip, OS, and its version. After the EIN, the following 11 digits are the EUM Specific Identification Number (ESIN). This value is also the eUICC Individual Identification Number. The final two digits of the EID are the Check Digits.](assets/infographic-eid-digits.png)

:::note
The EUM specific identification number (ESIN) and check digits are for example purposes only, and the values aren't real.
:::

Unlike the [ICCID](#iccid), the EID remains the same throughout the life of the eSIM.
Therefore, you can use it as a permanent identifier to keep track of your SIM cards.

## Endpoint  
A representation of the device which has a SIM installed.

## Endpoint status  
The current state of the [endpoint](#endpoint): **Enabled** or **Disabled**.

## eSIM
_Embedded SIM_

Because of the "e" (for *embedded*) in its name, *eSIM* is sometimes incorrectly used for referring to the MFF2 physical form factor of an [eUICC](#euicc) chip that is designed to be permanently surface-mounted inside a device.
Within the IoT industry, *eSIM* refers to the entire solution that is comprised of an eUICC-equipped [SIM](#sim) along with the software platform for [OTA provisioning](#ota-provisioning).
Although eSIMs can be embedded directly in a device, they are also manufactured as pluggable SIM cards.
The [emnify eSIM](/services/global-iot-sim) has capabilities not available with other eSIMs.

## eUICC
_Embedded Universal Integrated Circuit Card_  
The embedded universal integrated circuit card (eUICC) is a component of a [SIM](#sim) card.
It allows consumers and IoT manufacturers to provision the SIM with a new [operator profile](https://www.emnify.com/iot-glossary/mno) [over-the-air](#ota).

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

## GGSN
_Gateway GPRS Support Node_  
Part of the [GSM](#gsm) infrastructure, the [GGSN](#ggsn) is responsible for the interworking between the GPRS network and external packet switched networks.

## Globally–distributed infrastructure  
Cloud infrastructure that is distributed globally, with several local breakout points for better traffic handling.

## GSM
_Global System for Mobile Communications_ 
A standard developed by the European Telecommunications Standards Institute to describe the protocols for second-generation digital cellular networks used by mobile devices.

## HLR
_Home Location Register_

A database from a mobile network in which information from all mobile subscribers is stored.
Part of [GSM](#gsm) infrastructure. 

## HTTP POST request  
A request method supported by the HTTP protocol, which typically includes data in the request body.

## IC
_Integrated Circuit_

A semiconductor chip containing a large number of extremely small electronic components, e.g., a CPU, the chips on computer memory cards, the electronic part of a [SIM](#sim) card, an [eUICC](#euicc), etc.

## ICCID
_Integrated Circuit Card Identifier_

The integrated circuit card identifier (ICCID) is a 20-digit code used to identify a SIM card. 
It includes a SIM card's country, home network, and identification number, as indicated in the following diagram:

![A 20-digit ICCID number: "89883030000080139311". The first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (non-terrestrial). The following two digits are the Issuer Identifier (emnify). After that, the next 11 digits are the Individual Account Identification. The final digit is the Check Digit.](assets/infographic-iccid-digits.png)

:::note
Following the introduction of [eUICC](#euicc) SIM cards in 2021, there are situations where the ICCID can no longer be unique. 
For example, the ICCID value can change when a different [SIM profile](#sim-profile) is provisioned on the eSIM.
:::

## IMEI
_International Mobile Equipment Identity_

A unique number used to identify cellular modems.

## IMEI lock  
The practice of strictly associating a SIM to the device with a certain [IMEI](#imei) number.

## IMSI
_International Mobile Subscriber Identity_

A unique number used to identify a [GSM](#gsm) subscriber.

## IPsec  
A protocol suite for Secure Internet Protocol (IP) communications that works by authenticating and encrypting each IP packet of a communication session.

## IP subnet  
A logical subdivision of an IP network.

## JSON
_JavaScript Object Notation_

A lightweight data-interchange format.
It is easier for humans to read and write compared to other formats.
It is easy for machines to parse and generate.

## LAC
_Location Area Code_

A unique 16-digit fixed-length location area identity code that identifies a phone number’s location area.

## Linked workspaces
[Workspaces](#workspace) linked together by a [main organization](#main-organization).
Linked workspaces can be centrally or individually managed.

:::tip Step-by-step guide
[Link an existing workspace](/how-tos/workspaces/link-existing)
:::

## Main organization
The [organization](#organization) that has permission to manage multiple [workspaces](#workspace).

## MFA Key  
A combination generated by an external device or a service that is used to authenticate the user.

## MSISDN
_Mobile Station International Subscriber Directory Number_

A unique number used to identify a mobile phone number internationally.

## MSC
_Mobile Switching Center_

The part of [GSM](#gsm) architecture that controls the network switching subsystem elements.

## Organization
The [company](#company-account) (or subsidiary, branch, division, department, etc.) associated with a [workspace](#workspace).

:::info
Information on your organization, employees, subscriptions, and more are available in the [emnify Portal under **Organization Settings**](https://portal.emnify.com/organisation-settings/).
:::

## OTA
_Over–the–Air_

A method of wireless distribution of the software, configuration settings, or encryption keys.

## OTA Provisioning  
A technology that allows changes to the SIM memory [over–the–air](#ota).

## OpenVPN  
An open-source software application that implements [virtual private network (VPN)](#vpn) techniques for creating secure point–to–point or site–to–site connections in routed or bridged configurations and remote access facilities.

:::tip
[emnify hosts an OpenVPN service](/services/openvpn) that allows you to establish a private network between a device and any remote client location.
:::

## P2P SMS
_Peer–to–Peer SMS_

SMS exchanged between devices.

## PDP context  
Data structure present on both the serving GPRS support node (SGSN) and the [gateway GPRS support node (GGSN)](#ggsn), which contains the subscriber’s session information when the subscriber has an active session.

## Private IP  
An IP address that is not reachable from the public Internet but only through a local or virtual network.
[Dynamic private IPs](#dynamic-ip) keep changing, whereas static private IP addresses don't change.

## PSM
_Power Saving Mode_

While in PSM, the device tells the network that it will power off for a specific time and will send periodic updates in longer-than-usual intervals.
When the device comes back online, it does not need to reattach to a network but can use an already-created PDP context, thus saving power.

## Public IP  
An IP address accessible from the public Internet.

## RESTful API
The representational state transfer application programming interface allows you to integrate services with your applications.

## SASE
_Secure Access Service Edge_

SASE is a term coined by Gartner which combines software-defined networking ([SDN](#sdn)) and security and serves it as cloud-based Security-as-a-Service.

## SDN
_Software–Defined Networking_

An approach that allows network administrators to programmatically initialize, control, change and manage network behavior dynamically via open interfaces.

## Service profile  
A profile that defines the services and functionality of a device managed through the emnify platform.

## SIM
_Subscriber Identification Module_

A subscriber identification module (SIM) contains an integrated circuit ([IC](#ic)) that is often mounted on a plastic card.
Pluggable SIMs mounted on plastic cards are offered in various form factors.
A SIM stores data used to identify a subscriber ([IMSI](#imsi)) along with other network information for connecting and authenticating with a [mobile network operator (MNO)](https://www.emnify.com/iot-glossary/mno).
See also [eSIM - Embedded SIM](#esim).


## SIM batch  
A collection of SIM cards that can be registered with a single [BIC](#bic) code.

## SMS firewall  
A firewall that controls the SMS flow.

## SIM hosting fee  
Monthly fee for an active SIM.

## SIM profile  
The [mobile network operator (MNO)](https://www.emnify.com/iot-glossary/mno) ID information stored in the SIM’s memory.

## SIM repository  
All SIMs assigned to your organization.

## SMPP
_Short Message Peer–to–Peer_

A protocol used by the telecommunications industry for exchanging SMS messages between short message service centers (SMSC) and/or external short messaging entities (ESME).

## SMS console  
An interface to send [A2P SMS](#a2p-sms) from the platform to the SIM card.

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

## User account
An account associated with a specific person and used to log in to one or more [workspaces](#workspace).
User accounts can be assigned a role (e.g., **Admin**).

## User–defined coverage  
An ability to select which operator the customer’s SIM connects to.

## User–defined networking  
An approach that enables users to create their own virtual mobile network, define service and security policies and provision [tariff profiles](#tariff-profile) and data packages.

## USSD
_Unstructured Supplementary Service Data_

A protocol used to communicate with the service provider’s computers.

## USSD gateway  
The collection of hardware and software required to interconnect two or more disparate networks, including performing protocol conversion.

## VPC
_Virtual Private Cloud_

A secure private cloud hosted within a public cloud where you can host websites, store data, run applications, etc.

## VPN
_Virtual Private Network_

A service that protects your internet connection and privacy online.

:::tip
IPSec and [OpenVPN](#openvpn) are both protocols for securing data transmission through a VPN.

Learn more: [IPSec vs OpenVPN: What's the difference?](https://www.emnify.com/iot-glossary/ipsec-vs-openvpn)
:::

## Workspace
An independent entity in the [emnify Portal](https://portal.emnify.com/) associated with an [organization](#organization).
Workspaces can be managed individually or, if [linked](#linked-workspaces), centrally by the [main organization](#main-organization) while being billed and accessed separately. 

:::note
Every [company account](#company-account) on the [**Pro** plan](https://portal.emnify.com/organisation-settings/subscription#plans) is a workspace by default.
:::

:::tip Step-by-step guide
[Create a new workspace](/how-tos/workspaces/create-new)
:::

## Workspace switcher
The feature in the [emnify Portal](https://portal.emnify.com/) allowing **Admin** [user accounts](#user-account) to switch between workspaces.

:::tip Step-by-step guide
[Switching between workspaces](/how-tos/workspaces/switching-between)
:::
