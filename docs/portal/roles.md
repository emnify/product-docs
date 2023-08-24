---
description: Review the emnify account permissions for various roles
slug: /portal/roles
---

# Roles and permissions

<!-- markdownlint-disable MD041 -->
import Check from './assets/check.svg';
import Close from './assets/close.svg';

The [emnify Portal](https://portal.emnify.com/) is a powerful application to control the connectivity of devices of a production system.

Employees across your organization may use the Portal, from operations and finance to development and product.
That's why emnify offers three levels of access (referred to as **Roles**) to use and manage Portal features:

- **Administrator** (has access to all services and user management)
- **Observer** (has access to limited services)
- **User** (has access to all services)

To view and edit these roles, go to **Organization settings**&nbsp;<span aria-label="and then">></span> [**Employees**](https://portal.emnify.com/organisation-settings/users).

The following tables describe the permissions for different roles.

## Endpoint management

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve an endpoint by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update, Delete an endpoint by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Retrieve the blacklisted Operators for an Endpoint | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Add, Remove Operator from Blacklist of Endpoint by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| List all Endpoints | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create new endpoint | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Retrieve connectivity information of an Endpoint | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## SIM management

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve SIMs by ID | <Check alt="✓" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update, Delete SIMs by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| List available SIM Statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List of available SIMs | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## Service profile

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve list of available Countries | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve list of available Currencies | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve single Currency details by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve List of available Services | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List available Traffic Limits for a Service by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve Service Profiles | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create Service Profiles | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" />
| Retrieve Service Profiles by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update, Delete Service Profiles by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Add, Delete services from Service Profiles | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Add, Delete Traffic Limit from Service | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Retrieve the ESME interface types | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |

## Tariff profile

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| List of available Ratezone Statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List of available Tariff Statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve Tariff details by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve Tariffs | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve list of tariff plan statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create Tariff Profiles | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| List Tariff Profiles | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve Coverage of a Tariff Profile | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve single Country details by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List Operators | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve my currently active tariff plan | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## User management

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Create Support Token to assume permissions of a User by ID | <Close alt="No" /> | <Close alt="No" /> | <Close alt="No" /> |
| Update, Delete Users | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Retrieve my user role permissions | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update User password | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create, List Users | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Add, Delete Role from a User | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Delete, List trusted devices for a given user | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Create, Retrieve Application Token | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Edit an Application Token | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |

## Alerts

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve Organization/Endpoint Alerts | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve events of a User by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Retrieve events of an IMSI/SIM | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## MFA keys

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Generate user shared secret key for MFA | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Activate user shared secret key for MFA | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List available MFA Key Statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Delete shared secret key for MFA of a user by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| List of trusted devices for own user | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Delete a trusted device by ID for own user | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List of available MFA Key Types | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Delete my shared secret for MFA | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List of trusted devices for own user | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Delete a trusted device for own user | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
