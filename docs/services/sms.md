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

For sending SMS messages to a single device, select **Details**:

import DetailsButton from './assets/portal-connected-devices-details-button.png';

<div class="medium-zoom-image">
   <img src={DetailsButton} style={{width:1027}} alt="" />
</div>


An SMS/Message icon will appear to the right of the device name.

import OpenSms from './assets/portal-connected-devices-details-open-sms-console.png';

<img src={OpenSms} style={{width:350}} alt="" />

The SMS history and input field at the bottom of the SMS console is similiar to the layout and functionality found in most mobile messaging apps.

import SmsConsole from './assets/portal-connected-devices-details-sms-console.png';

<img src={SmsConsole} style={{width:575}} alt="" />

When you select (check) one or more devices in the list of connected devices, a group of menu items will appear that includes **SMS**.

import SMS from './assets/portal-connected-devices-sms.png';



<div class="medium-zoom-image">
   <img src={SMS} style={{width:1027}} alt="" />
</div>

This SMS interface does not show a history of messages.

import SmsMessage from './assets/portal-send-sms-message-text.png';

<img src={SmsMessage} style={{width:496}} alt="" />

However, you will receive a brief notification regarding the status of the SMS sent to the selected devices.

import SmsSent from './assets/portal-sms-sent.png';

<img src={SmsSent} style={{width:762}} alt="" />


## emnify SMS REST API and webhook

For sending SMS through the REST API, check out the [Sending and receiving SMS](#_sending_and_receiving_sms) section.

For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook which can be configured under **Device Policies** → **Service Policies** → **SMS Interface**.
Select Webhook and configure the URL and optionally, secret token to where you want the SMS to be delivered.

import SmsInterface from './assets/portal-device-policies-sms-interface-webhook.png';
import ConfigureWebhook from './assets/portal-device-policies-configure-webhook.png';
import AddWebhook from './assets/portal-device-policies-add-webhook.png';

<div class="medium-zoom-image">
   <img src={SmsInterface} style={{width:800}} alt="" />
</div>
<img src={ConfigureWebhook} style={{width:399}} alt="" />
<img src={AddWebhook} style={{width:856}} alt="" />


When you want to send an SMS from the device to your application, your device should send the SMS to an invalid [MSISDN](#msisdn) with 8 digits or less.
The SMS will then be delivered over the webhook.

import SmsDeliveryNotification from './assets/delivery-notification.png';

<img src={SmsDeliveryNotification} style={{width:400}} alt="SMS delivery notification" />

*Delivery notification as received in Integromat webhook for SMS with ID: 46638644*


import MoSms from './assets/mosms.png';

<img src={MoSms} style={{width:400}} alt="MO SMS" />

*Mobile originated SMS from the device as received in Integromat webhook*

## Zapier SMS integration

Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.
Zapier has a concept of triggers and actions – when a trigger happens multiple actions can be based on it – taking content from previous steps.
Sending SMS to your devices is available as an action in Zapier.
In the **No-Code-Workflows** list of [Portal Integrations](https://portal.emnify.com/integrations), select the following:

import ZapierSmsWebhooks from './assets/portal-integrations-sms-webhooks-zapier.png';

<img src={ZapierSmsWebhooks} style={{width:1145}} alt="" />

There you will find a predefined Zap consisting of a 3 steps with interactive instructions on how to configure it or modify the steps for your specific needs:

1. Catch Hook in Webhooks by Zapier (Trigger)
1. Enable a Device in emnify (Action)
1. Send an SMS in emnify (Action)

See also Zapier's [How to connect emnify + SMS by Zapier](https://zapier.com/apps/emnify/integrations/sms) guide.
