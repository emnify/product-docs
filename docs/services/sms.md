---
description: Send/receive SMS via the emnify Portal, SMS APIs, or Zapier
---
# SMS

Short Message Services (SMS) were one of the first cellular services made available after voice.
SMS is still very relevant for IoT use cases – as SMS provides a simple, inexpensive way to configure the device remotely without the need for a data connection.
A typical use case is the configuration of the APN setting via SMS.

The emnify platform supports:

- Mobile originated (MO) SMS – SMS sent from the device with the emnify SIM
- Mobile terminated (MT) SMS – SMS that are destined for a device with the emnify SIM
- Peer-to-Peer (P2P) SMS – SMS sent from a device with any SIM to a device with the emnify SIM
- Application- to-peer (A2P) SMS – The SMS is sent and received on an application

The scenarios above can be activated and deactivated in the device policies to prevent misuse (e.g., P2P SMS).

You can send and receive SMSs of your devices through 3 different interfaces Portal, SMS APIs, and Zapier.

<!--  
![sms options](assets/sms_options.png)  
*SMS interfaces*
-->

## emnify Portal

In the [Portal](https://portal.emnify.com/) → **Connected Devices** you can access the SMS console and directly send SMS to the devices. 
The sender can be configured as well as the console will show if the SMS is delivered or not.
You will see all SMSs that the device receives sends out.

import SMS from './assets/portal-connected-devices-sms.png';
import SmsMessage from './assets/portal-send-sms-message-text.png';
import SmsSent from './assets/portal-sms-sent.png';

<div class="medium-zoom-image">
   <img src={SMS} style={{width:1027}} alt="" />
   <img src={SmsMessage} style={{width:496}} alt="" />
   <img src={SmsSent} style={{width:762}} alt="" />
</div>

## emnify SMS REST API and webhook

For sending SMS through the REST API, check out the [Sending and receiving SMS](#_sending_and_receiving_sms) section.

For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook which can be configured under **Device Policies** → **Service Policies** → **SMS Interface**.
Select Webhook and configure the URL and optionally, secret token to where you want the SMS to be delivered.

<!-- TODO: Recreate sms_webhook.png (SMS Webhook) -->

<!--  TODO: Recreate delivery_notification.png (Delivery notification as received in Integromat webhook for SMS with ID: 46638644) -->

When you want to send an SMS from the device to your application, your device should send the SMS to an invalid [MSISDN](#msisdn) with 8 digits or less.
The SMS will then be delivered over the webhook.

<!-- 
![Mobile originated SMS](assets/mosms.png)  
*Mobile originated SMS from the device as received in Integromat webhook*
-->

import mosms from './assets/mosms.png';

<img src={mosms} style={{width:400}}
   alt="Mobile originated SMS from the device as received in Integromat webhook" />

*Mobile originated SMS from the device as received in Integromat webhook*

## Zapier SMS integration

Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.
Zapier has a concept of triggers and actions – when a trigger happens multiple actions can be based on it – taking content from previous steps.
Sending SMS to your devices is available as an action in Zapier.

<!--  TODO: Recreate sms_zap.png (SMS with Zapier) -->

For acting upon SMS delivery notification or SMSs that are sent from a device, you need to set up a webhook in Zapier.
Create a zap using "Webhook by Zapier" and select "Catch Hook" as trigger event.
You will get a custom webhook URL which will be used in the next step.

<!--  TODO: Recreate catch_hook.png (Catch Hook as a trigger) -->

Now you need to enter this webhook URL in the [emnify Portal](https://portal.emnify.com/) → **Device Policies** → **Choose SMS interface**, select **Webhook**, click **Configure Webhook**, enter the URL, then **Add Webhook**.
All SMS delivery notification and device originated SMS with this service policy will then be delivered over the webhook.

<!--  TODO: Recreate zap_webhook.png (emnify Webhook as SMS interface) -->

