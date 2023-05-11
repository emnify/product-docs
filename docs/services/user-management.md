---
description: Access control of endpoint, SIM, and service profile management 
---
import Check from './assets/check-mark-3-24.png';
import Uncheck from './assets/x-mark-24.png';

# User management

The [emnify Portal](https://portal.emnify.com/) is a powerful application to control the connectivity of devices of a production system.

Employees across your organization may use the Portal, from operations and finance to development and product.
That's why emnify offers 3 levels of access (referred to as **Roles**) to use and manage Portal features and functionality:

1. Admin (has access to all services and user management)
1. Observer (has access to limited services)
1. User (has access to all services)

You can view and edit these roles on the [**Employees** page](https://portal.emnify.com/organisation-settings/users) under your **Organization settings**. 

The following table describes the permissions for different roles.

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| **Endpoint management** ||||
| Retrieve an endpoint by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Update, Delete an endpoint by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| Retrieve the blacklisted Operators for an Endpoint | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Add, Remove Operator from Blacklist of Endpoint by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| List all Endpoints | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Create new endpoint | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| Retrieve connectivity information of an Endpoint | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| **SIM management** ||||
| Retrieve SIMs by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Update, Delete SIMs by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| List available SIM Statuses | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List of available SIMs | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| **Service profile** ||||
| Retrieve list of available Countries | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve list of available Currencies | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve single Currency details by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve List of available Services | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List available Traffic Limits for a Service by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve Service Profiles | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Create Service Profiles | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" />
| Retrieve Service Profiles by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Update, Delete Service Profiles by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| Add, Delete services from Service Profiles | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| Add, Delete Traffic Limit from Service | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| Retrieve the ESME interface types | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
