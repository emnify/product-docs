# Glossary

### Active SIM  
When a SIM is in the active state, the charges for the SIM are applied.
The device can send and receive data and SMS.

### APN - Access point name  
A gateway between a GSM, GPRS, 3G or 4G mobile network and another computer network, usually the Public Internet.
The APN needs to be configured on the device. For EMnify it is `em` or `emnify`.

### Application Token  
A unique identification key used to authenticate EMnify’s APIs.
Also used when authenticating the OpenVPN service.

### A2P SMS - Application–to–peer SMS  
SMS between an application and a device or vice-a-versa.

### Assigned SIM  
SIM that has been assigned to an Endpoint.

### AT+CREG AT command: gives information about
The registration status and access technology of the serving cell.

### AuC - Authentication center  
A part of GSM infrastructure, validates any SIM card attempting network connection when a phone has a live network signal.

### BIC - Batch Identification Code  
A unique code for ordered SIM cards, used to register the SIM cards on the Portal.

### Callback URL  
URL that will be called by a service to send and receive data related to an event that caused this action.

### Carrier-agnostic network  
A network that does not limit or prefer any specific network in a country and establishes a connection over any network transparent to the device.

### Connectivity status  
This is the connectivity status of an [endpoint](#endpoint) which can be set to online, attached, offline:

- Online: Device is transmitting or is able to transmit data through a data tunnel.
- Attached: Device is attached to a network has not established a data tunnel.
- Offline: Device isn’t attached to a network.
- Blocked


### Data RX  
Data received by the device.

### Data session  
A session between opening and closing a data connection to the network.

### Data TX  
Data transmitted by the device.

### Data Usage (volume)  
The data that has been used by an endpoint, both transmitted and received.

### DDoS  
Distributed Denial of Service attack - an attack where the attacker sends multiple requests to a web resource with the aim of exceeding the website’s capacity to handle multiple requests and prevent the website from functioning correctly.

### DNS Domain Name System  
A hierarchical decentralized naming system for computers, services, or any resource connected to the Internet or a private network to map a hostname to an IP address.

### Dynamic IP  
An IP that changes over time.

### eDRX  
Extended Discontinuous Reception is a device configuration that allows to specify the periodicity in which the device listens for incoming data on the radio.
Instead of using a periodicity of 2.56ms (DRX) it can be increased up to 40mins, thus reducing power consumption.

### Endpoint  
A representation of the device which has a SIM installed.

### Endpoint Status  
The current state of the endpoint: Enabled/Disabled.

### eUICC  
Embedded Universal Integrated Circuit Card, allows hosting multiple mobile network profiles on the SIM.

### Event log  
A log that stores all Endpoint events.

### Form factor  
Form factor of a SIM card represents the SIM card format (SIM cards vary in size (Mini vs Micro vs Nano), function (embedded vs standard) and quality (industrial grade vs standard)):

- 2FF : Mini SIM card
- 3FF : Micro SIM card
- 4FF : Nano SIM card

### GGSN - Gateway GPRS Support node  
Part of the GSM infrastructure, the GGSN is responsible for the interworking between the GPRS network and external packet switched networks.

### Globally–distributed infrastructure  
Cloud infrastructure which is distributed globally, with several local breakout points for better traffic handling.

### GSM (Global System for Mobile communications)  
A standard developed by the European Telecommunications Standards Institute to describe the protocols for second-generation digital cellular networks used by mobile devices.

### HLR - Home location register  
A part of GSM infrastructure, a database from a mobile network in which information from all mobile subscribers is stored.

### HTTP POST request  
A request method supported by the HTTP protocol which typically includes data in the request body.

### ICCID - Integrated Circuit Card Identifier  
A unique number used to identify a SIM card.

### IMEI - International Mobile Equipment Identification number  
A unique number used to identify cellular modems.

### IMEI lock  
The practice of strictly associating a SIM to the device with a certain IMEI number.

### IMSI - International mobile subscriber identity  
A unique number used to identify a GSM subscriber.

### IPsec  
A protocol suite for Secure Internet Protocol (IP) communications that works by authenticating and encrypting each IP packet of a communication session.

### IP subnet  
A logical subdivision of an IP network.

### JSON - JavaScript Object Notation  
A lightweight data-interchange format.
It is easier for humans to read and write compared to other formats.
It is easy for machines to parse and generate.

### LAC - Location Area Code  
A unique 16-digit fixed length location area identity code that identifies a phone number’s location area.

### MFA Key  
A combination generated by external device or a service which is used to authenticate the user.

### MSISDN - Mobile Station International Subscriber Directory Number  
A unique number used to identify a mobile phone number internationally.

### MSC Mobile Switching Center  
A part of GSM architecture which controls the network switching subsystem elements.

### OTA Over–the–air  
A method of wireless distribution of the software, configuration settings or encryption keys.

### OTA Provisioning  
A technology which allows making changes to the SIM memory over–the–air.

### OpenVPN  
An open–source software application that implements virtual private network (VPN) techniques for creating secure point–to–point or site–to–site connections in routed or bridged configurations and remote access facilities.

### P2P SMS Peer–to–Peer SMS  
SMS exchanged between devices.

### PDP context  
Data structure present on both the serving GPRS support node (SGSN) and the gateway GPRS support node (GGSN) which contains the subscriber’s session information when the subscriber has an active session.

### Private IP  
An IP address that is not reachable from the public internet but only through a local or virtual network.
Dynamic private IPs keep changing whereas static private IP addresses do not change.

### PSM  
While in the Power Saving Mode (PSM) the device tells the network that it will power off for a specific time and will send periodic updates in longer-than-usual intervals.
When the device comes back online, it does not need to reattach to a network but can use an already created PDP context, thus saving power.

### Public IP  
The IP address which is accessible from the public Internet.

### RESTful API  
The Representational State Transfer Application programming interface, which allows you to integrate services with your applications.

### SASE Secure Access Service Edge  
SASE is a term coined by Gartner which combines Software Defined Networking ([SDN](#sdn)) and Security as serves it as cloud-based Security-as-a-Service.

### SDN Software–Defined Networking  
An approach that allows network administrators to programmatically initialize, control, change, and manage network behavior dynamically via open interfaces.

### Service profile  
A profile which defines the services and functionality of a device managed through the EMnify platform.

### SIM batch  
A collection of SIM cards that can be registered with a single BIC code.

### SMS Firewall  
A firewall that controls the SMS flow.

### SIM hosting fee  
Monthly fee for an active SIM.

### SIM Profile  
The MNO’s ID information which is stored in the SIM’s memory.

### SIM repository  
All SIMs assigned to your organization.

### SMPP - Short Message Peer–to–Peer  
A protocol used by the telecommunications industry for exchanging SMS messages between Short Message Service Centers (SMSC) and/or External Short Messaging Entities (ESME).

### SMS console  
An interface to send A2P SMS from the platform to the SIM card.

### SMS MO  
SMS originating from the device.

### SMS MT  
SMS terminated (received) by the device.

### Source Address  
The address of the SMS sender as displayed on the receiving device.

### Static IP  
An IP that doesn’t change over time.

### Tariff profile  
A profile which defines which networks or countries SIM should operate in.

### Traffic pooling  
A term which is used to describe the service model when various endpoints utilize the same data pool.

### Unassigned SIM  
SIM that had been unassigned from an Endpoint.

### Usage limit  
User–defined limit of consumption of a certain service (data, SMS) per endpoint.

### User–defined coverage  
An ability to select which operator customer’s SIM connects to.

### User–Defined Networking  
An approach which enables user to create his own virtual mobile network, define service and security policies and provision tariff profiles and data packages.

### USSD - Unstructured Supplementary Service Data  
A protocol used to communicate with the service provider’s computers.

### USSD gateway  
The collection of hardware and software required to interconnect two or more disparate networks, including performing protocol conversion.

### VPC  
Virtual Private Cloud - A secure private cloud hosted within a public cloud where you can host websites, store data, run application etc.

### VPN  
Virtual Private Network.