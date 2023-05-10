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

emnify's communication platform hosts an OpenVPN service that allows an Enterprise to establish a private network between a device and any remote client location.
The remote client can be on the application server or any machine that wants to access the device remotely (such as operational staff).

Your IoT device doesn't need a private APN, OpenVPN software, or dynamic DNS resolution to use the OpenVPN service.
Through the emnify IoT eSIM, each device will have a static private IP address that you can use to identify and address the device.

At the same time, the IoT device can send data through the private tunnel to the IP address of the remote machine.

**Cloud Connect**

The data traffic of regular SIM cards is secured within the mobile network but traverses the public internet between the mobile network and the application.
With this network topology, the device and application are not only susceptible to attacks but it also makes it extremely difficult to establish remote device sessions.

emnify's Cloud Connect offers two distinct solutions to overcome these challenges:

- Amazon AWS Transit Gateway
- Internet Protocol Security (IPsec) VPN for other cloud providers like Microsoft Azure, Google Cloud, etc., or for on-premises applications 

<div className="medium-zoom-image">
 <img
    src={require('./assets/vpn-options-and-public-breakout.png').default}
    style={{width:500}}
    alt="VPN options and public breakout"
/>
</div>

**Amazon AWS Transit Gateway** can be used by Enterprise customers who have their infrastructure on Amazon Web Services.
AWS Transit Gateway provides a secure channel from the emnify AWS VPC to the Enterprise's VPC.
Data stays within AWS networks and does not require any public internet breakout to connect devices to the application in AWS.

The **IPsec** VPN solution provides a channel between an Enterprise's devices and their application infrastructure on Microsoft Azure, Google Cloud, or on-premises servers, for secure data exchange and remote access.
The IPsec VPN connection is provided through a managed AWS service (AWS Transit Gateway with VPN gateway) using two redundant VPN tunnels as the standard setup to ensure high availability of the IPsec VPN connection.
Static and dynamic VPNs using BGP are supported.
The IPsec VPN connection can be established via the emnify Portal or REST API within a matter of minutes.

### Inter-device communication

Devices using the emnify IoT eSIM are connected to the emnify IoT SuperNetwork.
As an optional service, devices registered within the same account can communicate with each other using their private static IP addresses.
The inter-device communication service is possible for devices within the same group and IP address range without the need of an overlay network over the public Internet.
For information about this service, please [contact us](https://www.emnify.com/talk-to-us).

### Regional breakout

With traditional operator SIM cards device data is always routed back to the country of the operator, even when it entails routing between continents.
By definition, "home routing" makes the deployment of a *distributed* IoT solution impossible because the operator network already centralizes the traffic. 

The emnify IoT SuperNetwork supports building a distributed IoT application service based on regional breakouts.
These breakouts are available in major Amazon Web Services (AWS) regions:

- US East (N. Virginia) us-east-1
- Canada (Central) ca-central-1
- Asia Pacific (Singapore) ap-southeast-1
- Europe (Ireland) eu-west-1

In the default dynamic configuration, data is sent to the region closest to the device.
Or, the Enterprise can manually select a region that a specific group of devices will have their data sent to.  

The public internet breakout and VPN / Cloud Connect service are available in each region.
The use of regional breakouts allows Enterprises to keep data local to their devices, ensuring not only lower latency and packet loss, but also to comply with end customer data processing agreements or local regulations. 

## SMS

The emnify platform includes a Short Message Servicing Center (SMSC) that manages all SMS communication and interfaces. 

SMS messages can play a pivotal role in remote IoT device management and automation.
Since SMS works without a data connection, it's a reliable way to communicate with remote IoT devices.

By designing devices to accept SMS parameters, most manufacturers have eased the burden of configuring a fleet of devices, both for the initial connectivity configuration as well as for post-deployment configuration changes.

By leveraging SMS for specific tasks that would overwise require power-hungry data connections, devices can operate more efficiently by conserving battery power.

With SMS in place for your remote configuration, you can also use it to trigger additional actions on a device.
For example, if you wanted to perform an update, you could use SMS to trigger a firmware OTA update.

### SMS MO/MT

The emnify platform supports: 

- SMS Mobile Originating (MO):  messages sent / originating from a device
- SMS Mobile Terminating (MT): messages received / terminating at a device

Mobile Terminating SMS can be sent from another device (P2P SMS), via the emnify Portal or via the REST API (see A2P SMS).

Mobile Originated SMS are visible in the emnify Portal or via the REST API (see A2P SMS)

### P2P SMS

P2P stands for Peer-to-Peer messaging.
For example, an SMS sent from a phone to a device with an emnify SIM or vice versa would be P2P SMS.

The emnify IoT SuperNetwork supports P2P SMS over an international phone number (MSISDN) that is assigned to each SIM.

emnify allows MO and MT SMS from external SMS devices.
Devices can be reached over the assigned MSISDN number from any regular mobile phone.

### A2P SMS

Application-to-Person (A2P) Short Message Service (SMS) refers to text messages sent from a software program to person or a SMS sent from a person to an application. Messages from an application are often automated and trigger based on a set of rules or conditions.
Messages to an application involve a request or command.

The emnify IoT SuperNetwork also supports Application-2-Peer (A2P) SMS.
This means SMS messages can be sent or received via an API or the emnify Portal.

The emnify platform supports the following methods to send and receive A2P SMS: SMPP, emnify Portal, REST API, and Zapier.

In the Internet of Things (IoT), end users and manufacturers rely on A2P SMS to do things like remotely set the Access Point Name (APN), reconfigure devices, "wake up" a device to go online, or send small measurement data to the application.

**SMPP**

The emnify platform supports the Short Message Peer-to-Peer protocol v3.4.
An external application - also referred to as an External Short Message Entity (ESME) - can connect to the emnify SMS center and then send and receive SMS directly to/from the device.
Most GPS platforms that support SMS offer SMPP as an integration option.
Any communication then goes directly over the emnify platform via A2P SMS avoids the more costly P2P SMS over-the-top solutions. 

**SMS via the emnify REST API**

Besides the SMPP interface, the emnify platform also provides a simple to use REST API that supports sending and receiving SMS messages programmatically. 

Mobile terminating SMS:  
For SMS MT the source address can be freely specified.
Additionally, multiple SMS messages can be concatenated.
There is also support for different data coding schemes.

Mobile originated SMS:  
SMS MO can be retrieved by an application via an SMS webhook that forwards every SMS sent from the device.
The webhook provides SMS MO sent by the device and SMS MT delivery receipts.

**SMS console in the emnify Portal** 

The emnify Portal also provides an SMS console which allows an SMS to be sent to the device with a configurable source address.
In addition, the UI lists all SMSs that are received and sent by the device.

### SMS short codes

The emnify platform supports SMS Short codes for automating processes.
In a consumer world, SMS short codes are used for sending marketing messages, or for example to top off a data plan via SMS. 
On the emnify platform, SMS short codes are supported with up to 7 digits or alphanumeric addresses from which the application or IoT device can create a specific response, independent of the actual SMS payload.
