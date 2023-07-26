---
description: Review the emnify account permissions for various roles
slug: /portal/roles
---

import Check from './assets/check-mark-3-24.png';
import Uncheck from './assets/x-mark-24.png';

# Roles and permissions

The [emnify Portal](https://portal.emnify.com/) is a powerful application to control the connectivity of devices of a production system.

Employees across your organization may use the Portal, from operations and finance to development and product.
That's why emnify offers three levels of access (referred to as **Roles**) to use and manage Portal features:

1. Admin (has access to all services and user management)
1. Observer (has access to limited services)
1. User (has access to all services)

You can view and edit these roles on the [**Employees** page](https://portal.emnify.com/organisation-settings/users) under your **Organization settings**. 

The following tables describe the permissions for different roles.

## Endpoint management

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve an endpoint by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Update, Delete an endpoint by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| Retrieve the blacklisted Operators for an Endpoint | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Add, Remove Operator from Blacklist of Endpoint by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| List all Endpoints | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Create new endpoint | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| Retrieve connectivity information of an Endpoint | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |

## SIM management

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve SIMs by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Update, Delete SIMs by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| List available SIM Statuses | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List of available SIMs | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |

## Service profile

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
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

## Tariff profile

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| List of available Ratezone Statuses | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List of available Tariff Statuses | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve Tariff details by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve Tariffs | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve list of tariff plan statuses | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Create Tariff Profiles | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Check} alt="✓" /> |
| List Tariff Profiles | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve Coverage of a Tariff Profile | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve single Country details by ID | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List Operators | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve my currently active tariff plan | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |

## User management

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| Create Support Token to assume permissions of a User by ID | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |
| Update, Delete Users | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |
| Retrieve my user role permissions | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Update User password | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Create, List Users | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |
| Add, Delete Role from a User | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |
| Delete, List trusted devices for a given user | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |
| Create, Retrieve Application Token | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Edit an Application Token | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |

## Alerts

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve Organization/Endpoint Alerts | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Retrieve events of a User by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |
| Retrieve events of an IMSI/SIM | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |

## MFA keys

| Action | Admin | Observer | User |
| ------ | :---: | :------: | :--: |
| Generate user shared secret key for MFA | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Activate user shared secret key for MFA | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List available MFA Key Statuses | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Delete shared secret key for MFA of a user by ID | <img src={Check} alt="✓" /> | <img src={Uncheck} alt="×" /> | <img src={Uncheck} alt="×" /> |
| List of trusted devices for own user | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Delete a trusted device by ID for own user | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List of available MFA Key Types | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Delete my shared secret for MFA | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| List of trusted devices for own user | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
| Delete a trusted device for own user | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> | <img src={Check} alt="✓" /> |
