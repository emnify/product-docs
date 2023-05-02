# Communication Services

## Data

### Public Internet Breakout

### Virtual Private Network

**Private APN**

A private Access Point Name (APN) is a solution that was developed to simply identify a gateway having specific policies for accessing a network that assigns static IP addresses to devices through which they can be remotely accessed.
The private APN was then used as an concentrated endpoint to help secure connectivity through policies like blocking public Internet access.
Private APNs are often used in conjunction with a VPN.
However, emnify doesn't require a private APN for using a VPN.


**OpenVPN**

emnify's communication platform hosts an OpenVPN service that allows you to establish a private network between a device and any remote client location.
The remote client can be on the application server or any machine that wants to access the device remotely (such as operational staff).

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

### Regional Breakout

## SMS

SMS messages can play a pivotal role in remote IoT device management and automation.
Since SMS works without a data connection, it's a reliable way to communicate with remote IoT devices.

By designing devices to accept SMS parameters, most manufacturers have eased the burden of configuring a fleet of devices, both for the initial connectivity configuration as well as for post-deployment configuration changes.

By leveraging SMS for specific tasks that would overwise require power-hungry data connections, devices can operate more efficiently by conserving battery power.

With SMS in place for your remote configuration, you can also use it to trigger additional actions on a device.
For example, if you wanted to perform an update, you could use SMS to trigger a firmware OTA update.

### SMS MO/MT

### P2P SMS

### A2P SMS

- REST API
- SMPP

### SMS shortcodes
