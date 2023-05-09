# emnify connectivity platform

emnify's connectivity platform allows you to manage and monitor the connectivity services provided by emnify's IoT eSIMs via its web-based portal and APIs.
Additionally, the platform provides network security services to protect devices against misuse and integration with cloud services.

## emnify Portal

THe web-based [emnify Portal]( https://portal.emnify.com) is the Operation Center for the IoT SuperNetwork.
The Portal allows Enterprise customers to monitor and manage all aspects of device communication – from viewing real-time volume and costs, managing the SIM lifecycle and defining service policies to troubleshooting connectivity issues and executing and managing integrations. 
The web portal provides a fully responsive design, supporting Desktop, Mobile phones and Tablets.

### Dashboards

The Portal provides detailed reports about data and SMS traffic, costs for individual devices or the full organization, and in which networks the service has been used.

<div className="medium-zoom-image">
 <img
    src={require('./assets/portal-dashboard.png').default}
    style={{width:900}}
    alt=""
/>
</div>

### Device Details 

The portal provides an overview of all relevant information, such as real-time connection status, statistics, and detailed connectivity events which include location updates and PDP session creation logs for each device.

### Device Policies

An Enterprise can define multiple service policies and coverage policies.
When devices are assigned to their respective policies each policy functions as a device group.
Configuring a device group's access, traffic limits, and data plan applies the settings to all devices in the group, which reduces the burden of device management for large deployments.

### Location Information

Based on the location of the cell tower to which the device is connected, the emnify Portal displays a map indicating the device's location.  

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

- **Observer** can see all the information but cannot  change configurations
- **User** can see and change configurations, except adding IP address ranges and adding/deleting users 
- **Admin** can manage users and IP address ranges

**Multi-Factor Authentication**

The default login method is the username/password login.
For increased security, each user can enable and disable the use of Multi-Factor Authentication (MFA).
When chosen, an additional one-time passcode must be provided which can be retrieved using an authenticator app. 

**Single Sign-On** 

The emnify Portal supports signing on with a single ID which is also used for other SSO supporting applications. 
The following authentication providers are supported: Microsoft Azure, Google OIDC.
Additional authentication providers can be offered on request. 

**Workspaces**

Workspaces is available for PRO package Enterprises.
It is well-suited for Enterprises with complex business structures or those with a diverse set of products and services.

<div className="medium-zoom-image">
 <img
    src={require('./assets/workspaces.png').default}
    style={{width:900}}
    alt=""
/>
</div>

With the Workspaces service enabled, Enterprises can create multiple workspaces that are linked to their organization.
Workspaces might be created based on markets (different countries/currencies), individual product lines /service types, or business units, e.g., subsidiaries.
Each workspace functions as an independent entity that can be independently managed, or if linked, be centrally managed while being separately billed and inaccessible to regular users from other linked workspaces.

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

The emnify platform provides a real-time event-based feed for ingestion into cloud services, business intelligence applications, and billing platforms.
Enterprise customers can get real-time usage and cost records, detailed signaling, as well as policy events and alerts.
This connectivity data provides a comprehensive view of an Enterprise's devices, network, and application data.

### SDK

The emnify software development kits (SDKs) allow developers to manage their IoT devices using an intuitive set of APIs, including SIM state management and device connectivity operations.
emnify SDKs are Open Source and currently available for Java and Python.
For other languages, developers can use the REST API and GraphQL for creating custom applications.

### No-Code

[Zapier](https://zapier.com/) is a service that allows you to connect more than 4,000 applications - including emnify - to automate workflows without needing any software development skills.
With the available integrations you can automate tasks based on triggers.
All Data Streamer events are available as triggers.
For instance, a specific event might be defined as a trigger for sending an SMS.
Another type of event might be chosen as the trigger for either activating or deactivating a SIM card.

### Events

The emnify system generates several types of events.
These events allow you to track notable system occurrences based on behavior.
Events are often used as triggers for custom business processes, for monitoring, and as input for custom billing systems.
They provide information about lifecycle transitions and configuration changes.
