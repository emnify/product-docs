---
description: Ensuring your success with emnify products and services
last_update: 
  date: 04-13-2023
---

# Support

emnify provides various support services to ensure that your devices operate reliably in our network.
In addition to email and phone support, emnify’s operations team proactively monitors worldwide traffic on our cellular networks to identify risks before they become issues.

## Support levels

emnify offers three levels of support: **Standard**, **Business**, and **Enterprise**.

**Standard** support is included for all customers at no additional cost.
It's the default service level when registering through the [emnify Portal](https://portal.emnify.com/).
For a detailed description of the standard services, please refer to the [Terms of Service](https://www.emnify.com/hubfs/20211001_terms_of_service_and_standard_service_level_obligations.pdf).

The **Business** and **Enterprise** levels offer premium customer service and can be bundled with your emnify subscription.
They're designed to reduce operational costs by detecting issues before they disrupt your business operations and resolving [incidents](#incident-management) faster.

:::info
[Support types comparison](https://www.emnify.com/premium-support)
:::

## Incident management

emnify's network operation center (NOC) monitors the health of all cellular networks and services emnify offers 24/7.
The NOC proactively identifies any service degradation.
As soon as an issue is detected, it starts the incident management process that alerts a team of on-call engineers to begin an investigation.

When an incident is triggered due to network-related events, the responding team diagnoses the fault and escalates the incident to emnify’s carrier and roaming partners as needed.
If necessary, any network causing a service disruption is blocked so your devices can connect to an alternate network.

If an incident impacts customers and involves service degradation, emnify reports it in real-time on the [Status page](https://status.emnify.com/).
It also provides an overview of all operational systems.
You can subscribe to the Status page to receive alerts on emerging incidents and when they’ve been resolved.
Past incidents are kept for at least one year for review.

With Business or Enterprise support, emnify notifies you immediately if large-scale issues are detected (for example, an increase in PDP context because your application server isn’t responding).

For critical and operational incidents, emnify conducts a root cause analysis (RCA).
Furthermore, emnify also issues postmortems for critical incidents that detail the issue, the applied changes, and the measures to guard against future incidents.
Postmortems for operational incidents are provided if you have Enterprise support.

The incident management process is reviewed annually and certified by a third party as part of emnify’s SOC2 audit.

:::info
[How to contact emnify Support and choose the severity of your issue](https://support.emnify.com/hc/en-us/articles/4414999111698-How-to-contact-EMnify-Support)
:::

### Critical incidents

A critical incident is an outage, interruption, or critical degradation of emnify's service that renders it unavailable.
For example:

- A complete breakdown or total outage of emnify's services
- Data service degradation affecting a minimum of 1,000 devices
- Total interruption or critical degradation of the VPN
- emnify Portal isn’t available
- emnify REST API isn’t available

### Operational incidents

An operational incident is characterized by emnify's service having partial functionality.
Performance is degraded or limited, but regular services are still available.
Immediate attention might be required if quality levels can't be fully achieved.
For example:

- Data service degradation affecting a minimum of 25 connected devices
- SMS total outage or interruption affecting a minimum of 25 connected devices
- VPN service degradation affecting a minimum of 25 devices
- Requests for BIC2 codes or invalid BIC code-related issues
- Regional internet breakouts aren’t available
- Data Streamer interruption or delay of five minutes

### General issues

:::note
For customers with Standard support, any ticket is considered a general issue.
:::

If the issue doesn’t qualify as a critical or operational incident, it’s considered a general issue.
For example:

- Data service degradation affecting less than 25 devices
- SMS-related issues affecting less than 25 SIM cards
- Problems with VPN setup or configuration
- Requests for PIN/PUK codes
- MSISDN changes
- General questions regarding the UI or API

## Roaming

Unlike traditional [mobile network operators (MNOs)](https://www.emnify.com/iot-glossary/mno), emnify also provides 24/7 support when your device is roaming.
The emnify NOC has visibility of all networks worldwide and can detect network service degradation.

Based on the direct and IoT/M2M specific roaming relationships with network operators, emnify has service level obligations (SLOs) to resolve critical and operational incidents within specific timelines.
You never need to worry about roaming when your IoT devices are moved to another location, even another country or continent.

Support for the global deployment of IoT devices is a key feature of emnify's [Global IoT Network](/services/global-iot-network).

## Network traces

With Business or Enterprise support, you can request a network trace to better understand what's going wrong during an incident.

Once requested, network traces capture and record any traffic and device data sent over emnify’s network.
You can open these traces in [Wireshark](https://www.wireshark.org/), a free and open source packet analyzer used for network troubleshooting and analysis.
It helps you understand if the device, for example, sends malformed data, the maximum transmission unit (MTU) is wrong, or if there’s a lot of packet fragmentation.

## Customer success managers

If your organization’s actual or committed monthly recurring revenue (MRR) is €5,000 or more, emnify assigns you to a Customer Success Manager (CSM).

CSMs comprise a globally distributed team with local working hours.
They're fluent in emnify's main supported languages: English, French, German, Italian, and Spanish.
The CSM team proactively engages with you to help you get value from the product and guide you through your journey.
They also conduct onboarding sessions to acquaint you with the platform and help set up integrations.

An Executive Business Review (EBR) is also conducted with key accounts regularly.
