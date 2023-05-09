# Communication services

## Data

### Public internet breakout

An internet breakout is where data passes from a private network to the public internet.
For cellular networks, the internet breakout is the home operator's central location - the one that sold the SIM card.

The default data service on the emnify IoT SuperNetwork uses a public internet breakout which means devices can connect to services using public IPs.
However, a Carrier-Grade NAT protects devices by making them inaccessible from the public internet.
Whenever a device opens a data session, it is assigned a temporary public IP address that the destination uses for responding to the device.
Consequently, public internet breakout IP addresses can change between data sessions.

### Virtual Private Network

**Private APN**

In legacy telecommunications infrastructure, devices need to provide a private Access Point Name (APN) to be assigned a static IP address for connecting to a secure virtual private network (VPN) on which it can communicate with the application server.

The emnify IoT SuperNetwork doesn't require private APNs for connecting to a secure VPN.
Devices can use the same standard "em" APN for both regular or secure VPN connectivity. 
Optionally, emnify offers customized subdomain APN names to reflect Enterprise branding. 

**Private static IP**

Every device using an emnify IoT eSIM receives a private static IP address from an IP address range allocated solely to that specific organization and never shared.
By definition, private static IP addresses are inaccessible from the public internet.
However, the organization can use OpenVPN or emnify Cloud Connect to remotely access its devices on the virtual private network (VPN) or to send data downstream to them.

**OpenVPN**

emnify's communication platform hosts an OpenVPN service that allows you to establish a private network between a device and any remote client location.
The remote client can be on the application server or any machine that wants to access the device remotely (such as operational staff).

<div className="medium-zoom-image">
 <img
    src={require('./assets/vpn-options-and-public-breakout.png').default}
    style={{width:500}}
    alt="VPN options and public breakout"
/>
</div>

Your IoT device doesn't need a private APN, OpenVPN software, or dynamic DNS resolution to use the OpenVPN service.
Through the emnify IoT eSIM, each device will have a static private IP address that you can use to identify and address the device.

At the same time, the IoT device can send data through the private tunnel to the IP address of the remote machine.

**Cloud Connect**

The data traffic of regular SIM cards is secured within the mobile network – but traverses the public internet between the mobile network and the application, which makes the device and application susceptible to attacks and prohibits to easily establish a remote device session.



With emnify Cloud Connect your devices and application servers can communicate through a secure private network – with a secure tunnel being established between the emnify platform and your cloud or on-premises application.

By eliminating the use of the public internet, Cloud Connect helps you better protect your application infrastructure against attacks like DDoS, port scanning while giving you the possibility to remotely access the devices.

### Inter-device communication

Traditionally, short message service center (SMSC) facilitates short message service (SMS) communications between devices on the network.
Text messaging and many Internet of Things applications depend on SMSCs to relay communications from one device to another.
In order to communicate with a network’s SMSC, you’ll need to enable your application to use Short Message Peer-to-Peer Protocol (SMPP).
This is a complex protocol that can be difficult to work with. 

At emnify, we simplify SMS communication with our RESTful API.
This enables your devices to communicate over SMS using JavaScript Object Notation (JSON), and you don’t have to worry about SMPP.

### Regional breakout

A regional internet breakout is when a distributed network routes data through regional data centers, typically through cloud service providers like Amazon AWS, Microsoft Azure, or Google Cloud.

emnify uses AWS to facilitate dynamic regional internet breakout to dynamically select the closest breakout region based on a device’s location while using other availability zones as backups to prevent downtime.

## SMS

SMS messages can play a pivotal role in remote IoT device management and automation.
Since SMS works without a data connection, it's a reliable way to communicate with remote IoT devices.

By designing devices to accept SMS parameters, most manufacturers have eased the burden of configuring a fleet of devices, both for the initial connectivity configuration as well as for post-deployment configuration changes.

By leveraging SMS for specific tasks that would overwise require power-hungry data connections, devices can operate more efficiently by conserving battery power.

With SMS in place for your remote configuration, you can also use it to trigger additional actions on a device.
For example, if you wanted to perform an update, you could use SMS to trigger a firmware OTA update.

### SMS MO/MT

The ability to send and receive point-to-pont (P2P) SMS messages is often abbreviated as follows:

- **MO** Mobile-Originated, i.e., messages can originate (be sent) from this device
- **MT** Mobile-Terminated, i.e., messages can terminate (be received) at this device

### P2P SMS

Some countries implement a strict interpretation regarding what constitutes person-to-person (P2P) SMS communication.
In such cases, any application-mediated messaging is considered A2P instead, even if the originator and recipient are both non-commercial, individual consumers.

emnnify allows MO and MT SMS from external SMS devices.
Devices can be reached over the assigned MSISDN number from any regular mobile phone.

### A2P SMS

Application-to-Person (A2P) Short Message Service (SMS) refers to text messages sent from a software program to person or a SMS sent from a person to an application. Messages from an application are often automated and trigger based on a set of rules or conditions.
Messages to an application involve a request or command.

In the Internet of Things (IoT), end users and manufacturers rely on A2P SMS to do things like remotely set the Access Point Name (APN), reconfigure devices, "wake up" a device to go online, or send small measurement data to the application.

:::info
**A2P / P2P Routing**

emnify distinguishes A2P SMS (application-to-person) from P2P SMS (person-to-person) based on the length of the source (MO SMS) or the destination (MT SMS) address.

If there are 8 digits or less (i.e. an invalid MSISDN), an SMS will be considered A2P.

If there are 9 digits or more, an SMS will be processed as MSISDN and will be considered P2P.

To dispatch SMS MO to your application (A2P) and at the same time have P2P SMS enabled, the destination number (dest_address) must be limited to 8 digits or less.
:::

**SMPP**

Short Message Peer-to-Peer Protocol (SMPP) is the system of rules that lets devices and software applications send and receive text messages over the internet.
Cellular Internet of Things (IoT) devices such as smart meters use the SMPP to transmit updates about resource consumption and location status.
When an event like a break-in or fire triggers a smart alarm system, it uses the SMPP to message the building owner, potentially with a link that allows them to access a camera feed.

**SMS via the emnify REST API**

If you’re an IoT manufacturer, your device may rely on SMS communication.
In these cases, emnify can automate your SMS data exchange between device and application through the REST-API.
The REST-API does not only allow to programmatically send SMS to the device but also to retrieve the SMS data the device sends.

**SMS console in the emnify Portal** 

The emnify Portal also provides an SMS console which allows an SMS to be sent to the device with a configurable source address.
In addition, the UI lists all SMSs that are received and sent by the device.

### SMS short codes

SMS short codes are often associated with automated services, each of which is assigned a unique short code and phone number.
Within the emnify core network, there is no SMS short code configuration required per specific customer or service.
All SMS messages that are sent and received from a specific customer will be forwarded through the API or SMPP.
This means each customer can use their own short codes and customize them based on their use cases.