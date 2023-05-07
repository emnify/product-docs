# emnify connectivity platform

emnify's connectivity platform provides solutions for configuring, deploying, maintaining and monitoring your IoT assets globally.
It it comprised of the following set of of tools.

## emnify Portal

THe web-based [emnify Portal]( https://portal.emnify.com) is the Operation Center for the IoT SuperNetwork.
The Portal allows Enterprise customers to monitor and manage all aspects of device communication – from viewing real-time volume and costs, managing the SIM lifecycle and defining service policies to troubleshooting connectivity issues and executing and managing integrations. 
The web portal provides a fully responsive design, supporting Desktop, Mobile phones and Tablets.


### Operation Center

The emnify Portal serves as an operation center to monitor, manage and troubleshoot the device connectivity.

#### Dashboards
The Portal provides detailed reports about data and SMS traffic, costs for individual devices or the full organization, and in which networks the service has been used.

#### Device Details 
The portal provides an overview of all relevant information, such as real-time connection status, statistics, and detailed connectivity events which include location updates and PDP session creation logs for each device.

#### Device Policies
An Enterprise can define multiple service polices and coverage polices.
Devices can then be assigned to their respective policies thus creating groups which can simplify device management when large numbers of devices are deployed.
Each device group's access, traffic limits, and data plan only needs to be configured once for it to be applied to all devices in the group.

#### Location Information
Based on the location of the cell tower to which the device is connected, the emnify Portal displays map indicating the device's location.  

### SIM management

  - Ordering SIMs
  - SIM lifecycle management

### User and Account Management

  - Single-Sign On
  - Multi-Factor Authentication
  - User Roles
  - Workspaces

## emnify APIs

### REST API

REST APIs are one way to integrate external services into your application.
The emnify API provides a variety of HTTP requests to integrate several emnify services into your application.

The emnify API is based on the OpenAPI Specification OAS3.

### GraphQL

GraphQL is a query language that enables you to define API call responses to match your use case and technical needs.

The emnify GraphQL API was initially developed internally to improve performance on the Portal.
In early 2023, we decided to release a preview version to customers.
We hope to collect feedback and continue adding features so that the functionality more closely matches our REST API.

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

- **Triggers for custom business processes** (e.g., authentication or custom usage limitations configured on the [emnify Portal](usage#emnify-portal))
- **Monitoring** (e.g., SIM or data connection lifecycles)
- **Input for custom billing systems** (i.e., updating billing configuration, processing invoices, etc.)

Events are often used as triggers for custom business processes, for monitoring, and as input for custom billing systems.
They provide information about lifecycle transitions and configuration changes.
