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

In the Portal → Connected Devices you can access the SMS console and directly send SMS to the devices. 
The sender can be configured as well as the console will show if the SMS is delivered or not.
You will see all SMSs that the device receives sends out.

<!--  To be recreated
![SMS Console](assets/sms_console.png)
-->

## emnify SMS REST API and webhook

For sending SMS through the REST API, check out the [Sending and receiving SMS](#_sending_and_receiving_sms) section.

For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook which can be configured under Device Policies → Service Policies → SMS Interface.
Select Webhook and configure the URL and optionally, secret token to where you want the SMS to be delivered.

<!--  To be recreated
![SMS Webhook](assets/sms_webhook.png)
-->

<!--  To be recreated
![Delivery notification](assets/delivery_notification.png)  
*Delivery notification as received in Integromat webhook for SMS with ID: 46638644*
-->

When you want to send an SMS from the device to your application, your device should send the SMS to an invalid [MSISDN](#msisdn) with 8 digits or less.
The SMS will then be delivered over the webhook.

![Mobile originated SMS](assets/mosms.png)  
*Mobile originated SMS from the device as received in Integromat webhook*

## Zapier SMS integration

Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.
Zapier has a concept of triggers and actions – when a trigger happens multiple actions can be based on it – taking content from previous steps.
Sending SMS to your devices is available as an action in Zapier.

<!--  To be recreated
![SMS with Zapier](assets/sms_zap.png)
-->

For acting upon SMS delivery notification or SMSs that are sent from a device, you need to set up a webhook in Zapier.
Create a zap using "Webhook by Zapier" and select "Catch Hook" as trigger event.
You will get a custom webhook URL which will be used in the next step.

<!--  To be recreated
![Catch Hook as a trigger](assets/catch_hook.png)
-->

Now you need to enter this webhook URL in the emnify Portal → Device Policies → Choose SMS interface as webhook and create a webhook with the URL.
All SMS delivery notification and device originated SMS with this service policy will then be delivered over the webhook.

<!--  To be recreated
![emnify Webhook as SMS interface](assets/zap_webhook.png)
-->

