---
description: Review the emnify account permissions for various roles
last_update: 
  date: 09-07-2023
slug: /portal/roles
---

# Roles and permissions

import Check from './assets/check.svg';
import Close from './assets/close.svg';

The [emnify Portal](https://portal.emnify.com/) is a powerful application to control the connectivity of devices of a production system.

Employees across your organization may use the Portal, from operations and finance to development and product.
That's why emnify offers three levels of access (referred to as **Roles**) to use and manage Portal features:

- **Administrator** (has access to all services and user management)
- **Observer** (has access to limited services)
- **User** (has access to all services)

To view and edit these roles, go to **Workspace settings**&nbsp;<span aria-label="and then">></span> [**Employees**](https://portal.emnify.com/organisation-settings/users).

The following tables describe the permissions for different roles.

## Device management

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve a device by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update or delete a device by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Retrieve the blocked networks for a device | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Add or remove networks from the device blocklist by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| List all devices | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create a new device | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Retrieve connectivity information for a device | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## SIM management

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve SIMs by ID | <Check alt="✓" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update or delete SIMs by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| List available SIM statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List available SIMs | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## Service profile

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve a list of available countries | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve a list of available currencies | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve single currency details by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve a list of available services | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List available traffic limits for a service by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve service profiles | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create service profiles | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" />
| Retrieve service profiles by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update or delete service profiles by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Add or delete services from service profiles | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Add or delete traffic limit from a service | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| Retrieve the ESME interface types | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |

## Coverage policy

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| List of available coverage area statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List of available data plan statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve data plan details by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve data plans | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve list of data plan statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create coverage policies | <Check alt="Yes" /> | <Close alt="No" /> | <Check alt="Yes" /> |
| List coverage policies | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve coverage area of a coverage policy | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve country details by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List networks | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve my currently active data plan | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## User management

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Create support token to assume permissions of a user by ID | <Close alt="No" /> | <Close alt="No" /> | <Close alt="No" /> |
| Update or delete users | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Retrieve my user role permissions | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Update user password | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Create or list users | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Add or delete role from a user | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Delete or list trusted devices for a given user | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Create or retrieve an application token | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Edit an application token | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |

## Alerts

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Retrieve organization or device alerts | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Retrieve user events by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| Retrieve IMSI and SIM events | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |

## MFA keys

| Action | Administrator | Observer | User |
| ------ | :---: | :------: | :--: |
| Generate user shared secret key for MFA | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Activate user shared secret key for MFA | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List available MFA key statuses | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Delete shared secret key for MFA of a user by ID | <Check alt="Yes" /> | <Close alt="No" /> | <Close alt="No" /> |
| List your trusted devices | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Delete a trusted device from your list by ID | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| List available MFA key types | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
| Delete my shared secret for MFA | <Check alt="Yes" /> | <Check alt="Yes" /> | <Check alt="Yes" /> |
