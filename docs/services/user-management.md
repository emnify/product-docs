---
description: Access control of endpoint, SIM, and service profile management 
---
# User management

The emnify platform is a powerful application to control the connectivity of devices of a production system.
As different types of personas (operations, finance, development, product) use the portal, emnify offers 3 levels of access to the use and manage emnify features and functionality.

1. Admin (has access to all services and user management)
1. Observer (has access to limited services)
1. User (has access to limited services)

Below is a table that describes the permissions for different users.

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| **Endpoint management** ||||
| Retrieve an endpoint by ID | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Update, Delete an endpoint by ID | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
| Retrieve the blacklisted Operators for an Endpoint | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Add, Remove Operator from Blacklist of Endpoint by ID | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
| List all Endpoints | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Create new endpoint | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
| Retrieve connectivity information of an Endpoint | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| **SIM management** ||||
| Retrieve SIMs by ID | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Update, Delete SIMs by ID | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
| List available SIM Statuses | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| List of available SIMs | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| **Service profile** ||||
| Retrieve list of available Countries | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Retrieve list of available Currencies | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Retrieve single Currency details by ID | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Retrieve List of available Services | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| List available Traffic Limits for a Service by ID | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Retrieve Service Profiles | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Create Service Profiles | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png)
| Retrieve Service Profiles by ID | ![check](./assets/check.png) | ![check](./assets/check.png) | ![check](./assets/check.png) |
| Update, Delete Service Profiles by ID | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
| Add, Delete services from Service Profiles | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
| Add, Delete Traffic Limit from Service | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
| Retrieve the ESME interface types | ![check](./assets/check.png) | ![uncheck](./assets/uncheck.png) | ![check](./assets/check.png) |
