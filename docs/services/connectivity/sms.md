---
description: Send/receive SMS via the emnify Portal, SMS APIs, or Zapier
slug: /services/sms
---

# SMS

Short Message Services (SMS) were one of the first cellular services made available after voice.
SMS is still very relevant for IoT use cases—as SMS provides an inexpensive way to configure the device remotely without the need for a data connection.
A typical use case is the configuration of the APN setting via SMS.

The emnify platform supports:

- Mobile originated (MO) SMS - SMS sent from the device with the emnify SIM
- Mobile terminated (MT) SMS - SMS that are destined for a device with the emnify SIM
- Peer-to-Peer (P2P) SMS - SMS sent from a device with any SIM to a device with the emnify SIM
- Application- to-peer (A2P) SMS - The SMS is sent and received on an application

The preceding scenarios can be activated and deactivated in the device policies to prevent misuse (for example, P2P SMS).

You can send and receive SMS of your devices through three different interfaces:

- [emnify Portal](#emnify-portal)
- [emnify SMS API and webhook](#emnify-sms-rest-api-and-webhook)
- [Zapier SMS integration](#zapier-sms-integration)

<!--  
![sms options](assets/sms_options.png)  
*SMS interfaces*
-->

## emnify Portal

On the [**Connected Devices**](https://portal.emnify.com/connected-devices) page of the emnify Portal, you can access the SMS console and directly send SMS to the devices. 
The sender can be configured as well as the console shows if the SMS is delivered or not.
You'll see all SMS that the device receives sends out.

For sending SMS messages to a single device, select **Details**:

![Portal screenshot of the Connected Devices page showing the extensive device list. There is a Details button available for each device listed.](assets/portal-connected-devices-details-button.png)


An SMS/Message icon appears to the right of the device name.

<img
  src={require('./assets/portal-connected-devices-details-open-sms-console.png').default}
  alt=""
  style={{ width: 350 }}
/>

The SMS history and input field at the bottom of the SMS console is similar to the layout and features found in most mobile messaging apps.

<img
  src={require('./assets/portal-connected-devices-details-sms-console.png').default}
  alt=""
  style={{ width: 575 }}
/>

When you select one or more devices in the list of [**Connected Devices**](https://portal.emnify.com/connected-devices), a group of menu items appear that includes **SMS**.

![Portal screenshot of the Connected Devices page. A top-level banner shows the number of devices selected and a list of options. Options from left to right: Reset, SMS, Device, IMEI Lock, More. SMS is selected.](assets/portal-connected-devices-sms.png)

This SMS interface doesn't show a history of messages.

<img
  src={require('./assets/portal-send-sms-message-text.png').default}
  alt=""
  style={{ width: 496 }}
/>

However, you receive a brief notification regarding the status of the SMS sent to the selected devices.

<img
  src={require('./assets/portal-sms-sent.png').default}
  alt=""
  style={{ width: 762 }}
/>


## emnify SMS REST API and webhook

For sending SMS through the REST API, check out the [Sending and receiving SMS](#_sending_and_receiving_sms) section.

For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook.
To configure the webhook, go to the [**Device Policies**](https://portal.emnify.com/device-policies) page. 
Under **Service Policies**, choose the policy you want to update and click **Details**. 
Then, find the **SMS Interface** section.

<img
  src={require('./assets/portal-device-policies-sms-interface-webhook.png').default}
  alt=""
  style={{ width: 800 }}
/>

Select **Webhook**, then select **Configure Webhook**:

<img
  src={require('./assets/portal-device-policies-configure-webhook.png').default}
  alt=""
  style={{ width: 399 }}
/>

In the **Add Webhook** dialog, provide the webhook URL and an optional secret key: 

<img
  src={require('./assets/portal-device-policies-add-webhook.png').default}
  alt=""
  style={{ width: 856 }}
/>

When you want to send an SMS from the device to your application, your device should send the SMS to an invalid [MSISDN](#msisdn) with eight digits or less.
The SMS is then delivered over the webhook.

<!-- TODO: Write proper alt text -->
<img
  src={require('./assets/delivery-notification.png').default}
  alt=""
  style={{ width: 400 }}
/>

*Delivery notification as received in Make (Integromat) webhook for SMS with ID: 46638644*

<!-- TODO: Write proper alt text -->
<img
  src={require('./assets/mosms.png').default}
  alt=""
  style={{ width: 400 }}
/>

*Mobile originated SMS from the device as received in Integromat webhook*

## Zapier SMS integration

Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.
Zapier has a concept of triggers and actions—when a trigger happens multiple actions can be based on it—taking content from previous steps.
Sending SMS to your devices is available as an action in Zapier.
In the [**No-Code-Workflows**](https://portal.emnify.com/integrations#no-code-workflows) list on the emnify Portal **Integrations** page, select the following:

![Portal screenshot from the Integrations page. The featured integration reads, "Enable devices and send SMS via emnify from newly caught webhooks. emnify + Webhooks by Zapier". Next to the text, there's a "Use this Zap" button.](assets/portal-integrations-sms-webhooks-zapier.png)

There you'll find a predefined Zap consisting of three steps with interactive instructions on how to configure it or modify the steps for your specific needs:

1. Catch Hook in Webhooks by Zapier (Trigger)
1. Enable a Device in emnify (Action)
1. Send an SMS in emnify (Action)

See also Zapier's [How to connect emnify + SMS by Zapier](https://zapier.com/apps/emnify/integrations/sms) guide.
