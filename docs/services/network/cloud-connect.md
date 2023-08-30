---
description: AWS Intra-Cloud Connect, IPsec
slug: /services/cloud-connect
---

# Cloud Connect

The data usage of regular SIM cards is secured within the mobile network—but traverses the public internet between the mobile network and the application, which makes the device and application susceptible to attacks and prohibits establishing a remote device session.

With emnify Cloud Connect your devices and application servers can communicate through a secure private network—with a secure tunnel being established between the emnify platform and your cloud or on-premises application.

By eliminating the use of the public internet, Cloud Connect helps you better protect your application infrastructure against attacks like DDoS, port scanning while giving you the possibility to remotely access the devices.

## AWS Intra-Cloud Connect

emnify’s communication platform is deployed on AWS, which simplifies integrations for customers using AWS as an infrastructure.
Without having to use the public internet, the integration is directly done with AWS services.
To establish a secure private network between your devices and your application you only need to attach your VPC to emnify’s Transit Gateway.

![emnify Cloud Connect with AWS Transit gateway](assets/tgw.png)

For step-by-step instructions, see the [emnify Cloud Connect integration into AWS Transit Gateway](https://www.emnify.com/en/developer-hub/emnify-cloud-connect-into-aws-transit-gateway) guide or follow the [emnify Cloud Connect with AWS Transit Gateway video](https://www.youtube.com/watch?v=Orb3Kvd9pZg) video.

## IPsec

If your application isn't on AWS but on any other cloud services or on-premise, you can utilize Cloud Connect for establishing an IPsec VPN connection.

With emnify you can set up an IPsec tunnel to securely transfer your data into your application server.

For step-by-step instructions, see [How to setup an IPsec using emnify Cloud Connect](https://www.emnify.com/en/developer-hub/how-to-setup-an-ipsec-using-emnify-cloudconnect).
You can also find guides to set up IPsec for Azure and Google Cloud in the [Integration guides](/integration-guides).
