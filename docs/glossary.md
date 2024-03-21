---
last_update:
  date: 02-28-2024
---

# Glossary

<!-- markdownlint-disable MD036 -->

## APN

_Access Point Name_

A gateway between a [GSM](#gsm), GPRS, 3G, or 4G mobile network and another computer network, usually the public Internet.
The APN needs to be configured on the device. For emnify, it's `em` or `emnify`.

## Application token

A unique identification key used to authenticate emnify's APIs.
Also used when authenticating the [OpenVPN](#openvpn) service.

## A2P SMS

_Application-to-Peer SMS_

The SMS sent and received between an application and a device (or vice versa).

:::info
Learn more about the [SMS types supported by the emnify platform](/services/sms) and how to [Receive MO SMS via API callback](https://cdn.emnify.net/api/doc/sms-callback.html).
:::

## Assigned SIM

SIM that has been assigned to a device.

## AT+CREG AT command

Gives information about the registration status and access technology of the serving cell.

## AuC

_Authentication Center_

A part of [GSM](#gsm) infrastructure, validates any SIM card attempting network connection when a phone has a live network signal.

## BIC

_Batch Identification Code_

A unique code for ordered SIM cards used to register the SIM cards in the [**SIM Inventory**](https://portal.emnify.com/sim-inventory).

## Callback URL

URL that will be called by a service to send and receive data related to an event that caused this action.

## Carrier-agnostic network

A network that doesn't limit or prefer any specific network in a country and establishes a connection over any network that's transparent to the device.

## Check digit

A checksum appended to identification data (for example, [IMEI](#imei), [EID](#eid), or [ICCID](#iccid)) representing the preceding digits and calculated using an algorithm.

Check digits are used to validate the identifier, verify data integrity, and help prevent errors in equipment databases.

:::tip
Several identifiers have a check digits but can be calculated differently and have different names.
For example, [ICCID](#iccid) numbers use a [_Luhn checksum digit_](#luhn-checksum-digit), while the last digits of the [EID](#eid) are called _check digits_.
:::

## Connectivity status

This is the connectivity status of a device.
It can be set to:

- **Online**: Device is transmitting or can transmit data through a data tunnel.
- **Attached**: Device is attached to a network but hasn't established a data tunnel.
- **Offline**: Device isn’t attached to a network.
- **Blocked**

## Coverage policy

_Referred to as [**Tariff Profile**](https://cdn.emnify.net/api/doc/tariff-profile.html) in the API_

A policy that defines which networks or countries SIM should operate in.

## CSM

_Customer success manager_

A member of emnify’s team dedicated to helping you grow and achieve your goals.
For a full explanation of the role, see [Support](/support).

## Data RX

Data received by the device.

## Data session

A session between opening and closing a data connection to the network.

## Data TX

Data transmitted by the device.

## Data usage

The data that has been used by a device, both transmitted and received.

## DDoS

_Distributed Denial of Service Attack_

An attack where the attacker sends multiple requests to a web resource with the aim of exceeding the website’s capacity to handle multiple requests and prevent the website from functioning correctly.

## Default Workspace

The [Workspace](#workspace) you log into when you visit the [emnify Portal](https://portal.emnify.com/).
This value is independent and defined on a per-user basis.

:::note
You can't log in directly to a Workspace that isn't your default.
For most people, the first Workspace you were invited to is your default.
:::

## Device status

_Referred to as [**Endpoint status**](https://cdn.emnify.net/api/doc/endpoint.html#endpoint-status-object) in the API_

Reflects the current state of the device and determines whether a device can connect to a network or incur charges.

:::info
Learn more about [the different device statuses](/portal/connected-devices#device-status) and [how to configure them in the emnify Portal](/portal/connected-devices#configure-the-device-status).
:::

:::note[API reference]
[Endpoint status object](https://cdn.emnify.net/api/doc/endpoint.html#endpoint-status-object)
:::

## DNS

_Domain Name System_

A hierarchical decentralized naming system for computers, services, or any resource connected to the Internet or a private network to map a hostname to an IP address.

## Dynamic IP

An IP that changes over time.

## eDRX

_Extended Discontinuous Reception_

A device configuration that specifies the periodicity in which the device listens for incoming data on the radio.
Instead of using a periodicity of 2.56 ms (DRX) it can be increased up to 40 minutes, thus reducing power consumption.

## EID

_eUICC Identifier_

The eUICC Identifier (EID) provides a unique global serial number for an [eUICC](#euicc).
It has a fixed length of 32 digits, as indicated in the following diagram:

<img
  className="img"
  src={require('./assets/infographic-eid-digits.png').default}
  alt="A 32-digit EID number: '89049011803455664400046832584675' The first 18 digits are the EUM Identification Number (EIN). Within those 18 digits, the first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (GER in this example). The next three digits are the eUICC Manufacturer. The final 10 digits of the EIN contain information about the chip, OS, and its version. After the EIN, the following 11 digits are the EUM Specific Identification Number (ESIN). This value is also the eUICC Individual Identification Number. The final two digits of the EID are the Check Digits."
/>

:::note
The EUM specific identification number (ESIN) and [check digits](#check-digit) are for example purposes only, and the values aren't real.
:::

Unlike the [ICCID](#iccid), the EID remains the same throughout the life of the eSIM.
Therefore, you can use it as a permanent identifier to keep track of your SIM cards.

## Endpoint

A representation of the device which has a SIM installed.
Often used as a legacy term for a **device**, particularly in the [REST API](https://cdn.emnify.net/api/doc/endpoint.html).

## eSIM

_Embedded SIM_

Because of the "e" (for _embedded_) in its name, _eSIM_ is sometimes incorrectly used for referring to the MFF2 physical form factor of an [eUICC](#euicc) chip that's designed to be permanently surface-mounted inside a device.
Within the IoT industry, _eSIM_ refers to the entire solution that's comprised of an eUICC-equipped [SIM](#sim) along with the software platform for [OTA provisioning](#ota-provisioning).
Although eSIMs can be embedded directly in a device, they're also manufactured as pluggable SIM cards.
The [emnify eSIM](/services/global-iot-sim) has capabilities not available with other eSIMs.

## eUICC

_Embedded Universal Integrated Circuit Card_

The embedded universal integrated circuit card (eUICC) is a component of a [SIM](#sim) card.
It allows consumers and IoT manufacturers to provision the SIM with a new [mobile network operator (MNO)](https://www.emnify.com/iot-glossary/mno) profile [over-the-air](#ota).

:::tip
Learn more about the eUICC in the blog post: [What is an eUICC and why does it matter?](https://www.emnify.com/iot-glossary/what-is-an-euicc)
:::

## Event log

A log that stores all device events.

## Form factor

The form factor of a SIM card represents the SIM card format.
SIM cards vary in size (Mini vs. Micro vs. Nano), function (embedded vs. standard), and quality (industrial grade vs. standard):

- **2FF**: Mini SIM card
- **3FF**: Micro SIM card
- **4FF**: Nano SIM card

## GGSN

_Gateway GPRS Support Node_

Part of the [GSM](#gsm) infrastructure, the [GGSN](#ggsn) is responsible for the interworkings between the GPRS network and external packet switched networks.

## Globally-distributed infrastructure

Cloud infrastructure that's distributed globally, with several local breakout points for better traffic handling.

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

A semiconductor chip containing a large number of extremely small electronic components.
For example, a CPU, the chips on computer memory cards, the electronic part of a [SIM](#sim) card, an [eUICC](#euicc), etc.

## ICCID

_Integrated Circuit Card Identifier_

The integrated circuit card identifier (ICCID) is a 20-digit code used to identify a SIM card.
It includes a SIM card's country, home network, and identification number, as indicated in the following diagram:

<img
  className="img"
  src={require('./assets/infographic-iccid-digits.png').default}
  alt="A 20-digit ICCID number: '89883030000080139311' The first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (non-terrestrial). The following two digits are the Issuer Identifier (emnify). After that, the next 11 digits are the Individual Account Identification. The final digit is the Check Digit."
/>

:::info
Following the introduction of [eUICC](#euicc) SIM cards in 2021, there are situations where the ICCID can no longer be unique.
For example, the ICCID value can change when a different [SIM profile](#sim-profile) is provisioned on the eSIM.
:::

:::note
The emnify REST API returns two ICCID values: `iccid` and `iccid_with_luhn`.
The `iccid_with_luhn` value _includes_ the final [Luhn checksum digit](#luhn-checksum-digit), while the `iccid` value doesn't.

API references: [SIM object](https://cdn.emnify.net/api/doc/sim.html#sim-object) and [Endpoint object](https://cdn.emnify.net/api/doc/endpoint.html#sim-object)
:::

## IMEI

_International Mobile Equipment Identity_

A unique number used to identify cellular modems.

<details className="details details--example">
  <summary>Learn more about how IMEIs are constructed</summary>
  <p>An IMEI has 15 digits (14 digits plus a check digit). An IMEISV has 16 digits (14 digits plus two software version digits).</p>
  <p>For more detailed information, see emnify's IoT Glossary article: <a href="https://www.emnify.com/iot-glossary/imei-number">What is an IMEI number?</a></p>
</details>

:::info
There are also "software versions" of IMEIs, referred to as _IMEISVs_.
In an IMEISV, there is no [check digit](#check-digit), and the last two digits represent the Software Version Number (SVN).
:::

## IMEI lock

The practice of strictly associating a SIM to the device with a certain [IMEI](#imei) number.

## IMSI

_International Mobile Subscriber Identity_

A unique number used to identify a [GSM](#gsm) subscriber.
Therefore it changes if a device connects to a different operator while roaming.

<details className="details details--example">
  <summary>See how the IMSI is constructed</summary>
  <p>An IMSI is usually a 15-digit number but can be 14 digits in some cases. It comprises three components: MCC, MNC, and MSIN.</p>
  <p>MCC: 3-digit country identifier<br />MNC: operator identifier (two or three digits)<br />MSIN: identifier for the connected device (nine or 10 digits)</p>
  <img
    className="img img--width-300"
    src={require('./assets/imsi-components-table.png').default}
    alt=""
  />
</details>

## IPsec

A protocol suite for Secure Internet Protocol (IP) communications that works by authenticating and encrypting each IP packet of a communication session.

## IP subnet

A logical subdivision of an IP network.

## JSON

_JavaScript Object Notation_

A lightweight format for storing and transporting data.
It's often used when data is sent from a server to a web page.

## LAC

_Location Area Code_

A unique 16-digit fixed-length location area identity code that identifies a phone number’s location area.

## Luhn checksum digit

A [check digit](#check-digit) calculated from the previous digits using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

:::tip
Luhn checksum digits are most notably used to validate [ICCID](#iccid) and [IMEI](#imei) numbers.
:::

## Linked Workspaces

Two or more [Workspaces](/workspaces) in the emnify Portal linked together by a [main organization](#main-organization).

:::tip[step-by-step guide]
[Link existing Workspaces](/workspaces/link)
:::

## Main organization

The [organization](#organization) that determines the [**SuperAdmin** user role](/workspaces#superadmin-user-role) when managing [multiple Workspaces](/workspaces).
Typically, this is the organization that has the initial contract with emnify.

:::note
Unlike a traditional sub-account structure, the main organization doesn't inherit any additional roles or permissions in [linked Workspaces](#linked-workspaces) besides the **SuperAdmin**.
:::

## MFA

_Multi-Factor Authentication_

Multi-factor authentication (MFA) is a security process that requires you to provide two or more pieces of evidence (also known as factors) to verify your identity before accessing a website or application.
MFA is sometimes called two-factor authentication (2FA) and has historically been at emnify.

:::tip
To learn more about MFA and how it's enforced at emnify, see the [Set up multi-factor authentication](/how-tos/multi-factor-authentication) guide.
:::

## MFA key

_Multi-Factor Authentication key_

A combination generated by an external device or a service that's used to authenticate the user during the [multi-factor authentication (MFA)](#mfa) process.
These keys are sometimes referred to as "codes" or "tokens."

## MSISDN

_Mobile Station International Subscriber Directory Number_

A unique number used to identify a mobile phone number internationally—essentially the telephone number assigned to each SIM.
For an emnify IoT eSIM, this number is needed for its ability to receive SMS messages (that is, [SMS MT](/glossary#sms-mt)).

## MSC

_Mobile Switching Center_

The part of [GSM](#gsm) architecture that controls the network switching subsystem elements.

## NOC

_Network operations center_

A centralized location where administrators supervise, monitor, and maintain a telecommunication or satellite network.
The emnify NOC is used primarily for [incident management](/support#incident-management).

## Organization

The billable entity (company, subsidiary, branch, division, department, etc.) associated with a [Workspace](#workspace).

:::info
Information on your organization, users, subscriptions, and more are available in the emnify Portal under [**Workspace settings**](https://portal.emnify.com/organisation-settings/).
:::

## OTA

_Over-the-Air_

A method of wireless distribution of the software, configuration settings, or encryption keys.

## OTA provisioning

A technology that allows changes to the SIM memory [over-the-air](#ota).

## OpenVPN

An open source software application that implements [virtual private network (VPN)](#vpn) techniques for creating secure point-to-point or site-to-site connections in routed or bridged configurations and remote access facilities.

:::tip
[emnify hosts an OpenVPN service](/services/openvpn) that allows you to establish a private network between a device and any remote client location.
:::

## P2P SMS

_Peer-to-Peer SMS_

SMS sent from a device with any SIM to a device with the emnify SIM.

:::info
Learn more about the [SMS types supported by the emnify platform](/services/sms) and [P2P routing via the emnify REST API](https://cdn.emnify.net/api/doc/sms-callback.html).
:::

## PDP context

Data structure present on both the serving GPRS support node (SGSN) and the [gateway GPRS support node (GGSN)](#ggsn), which contains the subscriber’s session information when the subscriber has an active session.

## Private IP

An IP address that's not reachable from the public Internet but only through a local or virtual network.
[Dynamic private IPs](#dynamic-ip) keep changing, whereas static private IP addresses don't change.

## PSM

_Power Saving Mode_

While in power saving mode (PSM), the device tells the network that it's powering off for a specific time and sending periodic updates in longer-than-usual intervals.
When the device comes back online, it doesn't need to reattach to a network but can use an already-created PDP context, thus saving power.

## Public IP

An IP address accessible from the public Internet.

## RESTful API

The representational state transfer application programming interface allows you to integrate services with your applications.

## SASE

_Secure Access Service Edge_

SASE is a term coined by Gartner which combines software-defined networking ([SDN](#sdn)) and security and serves it as cloud-based Security-as-a-Service.

## SDN

_Software-Defined Networking_

An approach that allows network administrators to programmatically initialize, control, change, and manage network behavior dynamically via open interfaces.

## Service profile

A profile that defines the services and capabilities of a device managed through the emnify platform.

## SIM

_Subscriber Identification Module_

A subscriber identification module (SIM) contains an integrated circuit ([IC](#ic)) that's often mounted on a plastic card.
Pluggable SIMs mounted on plastic cards are offered in various form factors.
A SIM stores data used to identify a subscriber ([IMSI](#imsi)) along with other network information for connecting and authenticating with a [mobile network operator (MNO)](https://www.emnify.com/iot-glossary/mno).
See also [eSIM - Embedded SIM](#esim).

## SIM batch

A collection of SIM cards that can be registered with a single [BIC](#bic) code.

## SIM hosting fee

Monthly fee for an activated SIM.

## SIM profile

The [mobile network operator (MNO)](https://www.emnify.com/iot-glossary/mno) ID information stored in the SIM’s memory.

## SIM registration

A process to allow your SIM cards to be registered within your Workspace and visible in the [**SIM Inventory**](https://portal.emnify.com/sim-inventory).

:::tip[step-by-step guide]
[Register emnify SIMs](/quickstart/register-sims)
:::

## SIM status

Reflects the current state of the [SIM](#sim) in the [SIM lifecycle](/services/sim-lifecycle-management).

:::note[API reference]
[SIM status object](https://cdn.emnify.net/api/doc/sim.html#status-object)
:::

## SMPP

_Short Message Peer-to-Peer_

A protocol used by the telecommunications industry for exchanging SMS messages between short message service centers (SMSC) and/or external short messaging entities (ESME).

## SMS console

An interface to send [A2P SMS](#a2p-sms) from the platform to the SIM card.

## SMS firewall

A firewall that controls the SMS flow.

## SMS MO

_Mobile originated SMS_

SMS sent from the device with the emnify SIM.

:::info
Learn more about the [SMS types supported by the emnify platform](/services/sms).
:::

:::tip
Using the emnify REST API, you can dispatch MO SMS from devices as HTTP `POST` requests toward a user-configurable URL.

For more information, see [Receive MO SMS via API callback](https://cdn.emnify.net/api/doc/sms-callback.html)
:::

## SMS MT

_Mobile terminated SMS_

SMS that are received by a device with an emnify SIM.

:::info
Learn more about the [SMS types supported by the emnify platform](/services/sms).
:::

## Source address

The address of the SMS sender as displayed on the receiving device.

## Static IP

An IP that doesn’t change over time.

## Traffic pooling

A term used to describe the service model when various devices utilize the same data pool.

## Unassigned SIM

SIM that has been unassigned from a device.

## Usage limit

User-defined limit of consumption for a certain service (data, SMS) per device.

## User account

An account associated with a specific person and used to log in to one or more [Workspaces](#workspace).
User accounts can be assigned a role (for example, **Administrator**) per Workspace.

:::info
A user can have different roles in different Workspaces.
For more information, see [Roles and permissions](/portal/roles).
:::

## User-defined coverage

An ability to select which network the customer’s SIM connects to.

## User-defined networking

An approach that enables users to create their own virtual mobile network, define service and security policies, and provision [coverage policies](#coverage-policy) and data packages.

## VPC

_Virtual Private Cloud_

A secure private cloud hosted within a public cloud where you can host websites, store data, run applications, etc.

## VPN

_Virtual Private Network_

A service that protects your internet connection and privacy online.

:::tip
IPsec and [OpenVPN](#openvpn) are both protocols for securing data transmission through a VPN.

For more information, see [IPsec vs OpenVPN: What's the difference?](https://www.emnify.com/iot-glossary/ipsec-vs-openvpn)
:::

## Workspace

An independent entity in the emnify Portal associated with an [organization](#organization).
Workspaces can be managed individually or centrally (if [linked](#linked-workspaces)) while billed and accessed separately.

:::note
Every emnify customer has free access to a single Workspace.
By default, accounts with the **Pro Package** can have up to three Workspaces.

For more information, see [Multiple Workspaces](/workspaces).
:::

## Workspace switcher

The feature in the emnify Portal that allows [specific user roles](/portal/roles#user-management) to switch between Workspaces.

:::tip[step-by-step guide]
[Switch between Workspaces](/workspaces/switch)
:::
