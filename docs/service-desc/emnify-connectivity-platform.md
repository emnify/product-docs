# emnify connectivity platform

emnify's connectivity platform allows you to manage and monitor the connectivity services provided by emnify's IoT eSIMs via its web-based portal and APIs.
Additionally, the platform provides network security services to protect devices against misuse and integration with cloud services.

## emnify Portal

THe web-based [emnify Portal]( https://portal.emnify.com) is the Operation Center for the IoT SuperNetwork.
The Portal allows Enterprise customers to monitor and manage all aspects of device communication – from viewing real-time volume and costs, managing the SIM lifecycle and defining service policies to troubleshooting connectivity issues and executing and managing integrations. 
The web portal provides a fully responsive design, supporting Desktop, Mobile phones and Tablets.

### Dashboards

The Portal provides detailed reports about data and SMS traffic, costs for individual devices or the full organization, and in which networks the service has been used.

### Device Details 

The portal provides an overview of all relevant information, such as real-time connection status, statistics, and detailed connectivity events which include location updates and PDP session creation logs for each device.

### Device Policies

An Enterprise can define multiple service polices and coverage polices.
Devices can then be assigned to their respective policies thus creating groups which can simplify device management when large numbers of devices are deployed.
Each device group's access, traffic limits, and data plan only needs to be configured once for it to be applied to all devices in the group.

### Location Information

Based on the location of the cell tower to which the device is connected, the emnify Portal displays map indicating the device's location.  

### SIM orders

With the emnify Portal's self-service feature, an Enterprise can order emnify IoT eSIMs in any form factor with worldwide shipping destinations.
When expedited shipping is chosen, SIM cards usually ship within the next business day. 

### SIM lifecycle management

When emnify IoT eSIM cards are shipped they are in an inactive state which means no fees are incurred.
An Enterprise can either change an eSIM's status to active, which will start the billing process for that eSIM, or put it in factory test mode.
In factory test mode, the device can used without incurring any charges until a certain threshold of data usage is reached.
Once the free data usage limit is reached, the eSIM automatically transitions to the active state.
All subsequent data usage will be included in the current billing cycle. 
SIMs can be suspended any time in order to eliminate charges for future billing cycles. 

### User management

The emnify Portal provides the following user management functionality. 

**User roles**

Each user can be assigned one of three different roles: Observer, User, or Admin. 

- **Observer** is able to see all the information but not do any configuration changes
- **User** is able to see and change configuration except adding IP address ranges and adding, deleting users 
- **Admin** can manage users and IP address ranges

**Multi-Factor Authentication**

The default login method is the username/password login.
For increased security, each user can enable and disable the use of Multi-Factor Authentication (MFA).
When chosen, an additional one-time passcode must be provided which can be retrieved using an authenticator app. 

**Single Sign-On** 

The emnify Portal supports signing on with a single ID which is also used for other SSO supporting applications. 
The following authentication providers are supported: Microsoft Azure, Google OIDC.
Additional authentication providers can be offered on request. 

**Multi-Level Account Hierarchy**

(Awaiting information from Pasha)

## emnify APIs

### REST API

All communication management capabilities available in the emnify Portal are exposed via a REST API.
One typical use case for integrating the REST API is synchronizing the SIM activation and deactivation with the lifecycle of devices in the field.
Another use case is enabling end-customers to see which network is in use and allow them to block specific networks.

The [emnify REST API](https://cdn.emnify.net/api/doc/index.html) is based on the OpenAPI Specification OAS3.

### GraphQL

GraphQL is a query language that enables you to define API call responses to match your use case and technical needs.

While the REST API returns the entire parameter set for a specific API endpoint, GraphQL returns only the parameters needed with a single request, even when the REST API would require requests to multiple endpoints to deliver the same results.
Using the GraphQL API can speed up response times significantly.
It also ensures predictable results when the API evolves with additional parameters in the future. 

### Data Streamer

With the emnify Data Streamer, enterprises can integrate real-time connectivity data directly into their third-party cloud services or business systems to build operational dashboards that visualize device, network, and application information side-by-side.
With this comprehensive view of their IoT solution and infrastructure connectivity data, they can quickly triage and resolve issues or create business reports.

### SDK

The emnify software development kits (SDKs) allow developers to manage their IoT devices using an intuitive set of APIs, including SIM state management and device connectivity operations.
emnify SDKs are currently available for Java and Python.

### No-Code

Zapier is a service that allows you to connect more than 4,000 applications - including emnify - to automate workflows.
With the available integrations you can automate device provisioning between emnify and your application.
For example, you can send configuration SMS to set the proper APN, when the device connects for the first time.
Other use cases are scheduled or application-triggered SIM activations/deactivations so that the SIM contract starts and ends with the device subscription of your customers.
The following events are available as triggers:

- All events in the Data Streamer
- Device enabled (SIM activated)
- Device disabled (SIM deactivated)
- Usage Limit Reached

The following actions are available:

- Send SMS to device
- Create a device (SIM configuration)
- Enable a device (SIM activation)
- Block current network (blacklist the last tried network)

Using the Zapier webhook, you can also use triggers from:

- SMS delivered notification
- Mobile originated (MO) SMS

### Events

The emnify system generates several types of events.
These events allow you to track notable system occurrences based on behavior.

Some common use cases for events on emnify include:

- **Triggers for custom business processes** (e.g., authentication or custom usage limitations configured on the [emnify Portal](/services/events/usage#emnify-portal))
- **Monitoring** (e.g., SIM or data connection lifecycles)
- **Input for custom billing systems** (i.e., updating billing configuration, processing invoices, etc.)

Events are often used as triggers for custom business processes, for monitoring, and as input for custom billing systems.
They provide information about lifecycle transitions and configuration changes.
