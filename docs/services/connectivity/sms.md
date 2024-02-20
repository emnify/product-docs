---
description: Available SMS services offered by the emnify IoT SuperNetwork, including SMS MO, SMS MT, A2P, P2P, and more
last_update:
  date: 02-14-2024
slug: /services/sms
---

# SMS

SMS are highly relevant for IoT applications because SMS only use the signaling channel.
This means that devices can exchange SMS even under poor radio conditions or without a data session (for example, before you configure the APN).

A device that isn’t constantly connected receives the SMS on the next attachment, and the SMS provider sends a delivery receipt, which allows you to track the communication.
SMS also allow an IoT device to send commands via short codes to the application or other device peers to exchange information.

SMS are inexpensive, limited to 160 characters, and supported in all networks except NB-IoT.

## Classifications and support

The emnify IoT SuperNetwork includes a short message service center (SMSC) that supports:

- Mobile originated (MO) SMS - Sent from the device with an emnify SIM (for example, to send sensor data).
- Mobile terminated (MT) SMS - Destined for a device with an emnify SIM (for example, to change a device configuration).
- Peer-to-peer (P2P) SMS - Sent from a device with any SIM to a device with an emnify SIM.
- Application-to-peer (A2P) SMS - Sent and received on an application.

To prevent misuse, you can activate and deactivate these classifications in the device policies.

## A2P SMS communication

A2P SMS provides a powerful way to interact with IoT devices, with two distinguished scenarios:

1. Forward information from applications through SMS to the device (for example, to trigger a specific command).
1. Retrieve the SMS information sent from the device (for example, so that the device can trigger a particular action on the application side).

You can manage A2P SMS communication through five different interfaces:

- **Web portal** - The emnify Portal provides an SMS console that allows you to send SMS to the device with a configurable source address.
The console also lists SMS received and sent by the device.
- **SMS console** - emnify's [SMS console](https://sms.emnify.com) allows individuals without direct access to the emnify Portal to interact with a device using SMS.
This functionality is particularly interesting for third parties installing and managing devices for manufacturers.
- **REST API** - Through the REST API, you can send SMS with a POST request and receive SMS via a webhook.
Information about SMS delivery is also available.
- **SMPP** - Several IoT platforms (for example, in telematics) provide a short message peer-to-peer protocol (SMPP) interface to send SMS to a connected device.
When connecting the third-party platform via SMPP, the SMS delivers through the emnify SMSC with higher reliability and lower cost.
- **Zapier** - Instead of implementing the APIs in your application, emnify and Zapier provides a no-code alternative to automate SMS workflows.
You can send SMS on specific triggers (for example, email or Slack message) or use the SMS webhook to define an automated flow after receiving an SMS from the device.

## Short codes

SMS short codes are often associated with emergency or television quiz services, where you send SMS to a short, alphanumeric address, which then triggers an automated process.
The emnify IoT SuperNetwork supports alphanumeric short codes with up to seven digits.
All SMS are then delivered over the REST API and processed programmatically.
No SMS short code configuration is required per customer or service, which means you can use your own short codes and customize them based on the use case.

## Firewall

SMS comes with risks, such as increased device power consumption, attacker infiltration, and additional costs.
That’s why emnify allows you to configure SMS MO and SMS MT limits on an individual or a group of devices or switch them off completely.
You can also turn on or off internal P2P SMS (that is, devices managed by the emnify IoT SuperNetwork) or external P2P SMS (external communication from and to any other devices).
