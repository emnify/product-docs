---
title: Workspaces
description: Organizations with complex business structures or diverse product lines can benefit from Workspaces in the emnify Portal
last_update: 
  date: 02-23-2024
slug: /workspaces
---

# Workspaces

A workspace is where you manage the IoT cellular connectivity for your devices.
Every emnify customer has free access to a single workspace.

When you need more than one workspace to manage independent aspects of your business, you can use multiple workspaces.
This feature is designed to address the needs of organizations with complex business structures, particularly those with entities that should remain independent in functionality but may have users managing both aspects.

Potential use cases for workspaces include:

- Entities that require independent billing
- Diverse product lines within the same company with varying technical requirements
- Separating sandbox and live systems
- Entities that need independent contracts

:::info
Multiple workspaces comes with the **Pro Package**.
:::

## Useful terms

The following terms are commonly used when discussing the workspaces feature.
Each listed term includes a link to its associated glossary entry:

- [Workspaces](/glossary#workspace)
- [Linked workspaces](/glossary#linked-workspaces)
- [Main organization](/glossary#main-organization)
- [Workspace switcher](/glossary#workspace-switcher)
- [SuperAdmin](#superadmin-user-role)

## Features

Implementing **Workspaces** reduces operational costs and management complexity for organizations that meet the specified criteria.
Administrators with privileges to manage linked workspaces only need one set of login credentials to administer them all.

There are other benefits and solutions that **Workspaces** can provide, but these vary depending on the organization, such as:

### Partition of business units

This helps facilitate requirements for supporting fundamental differences in the following:

- IoT businesses
- Services or product lines
- Billing conditions
- Currencies
- Tax requirements

### Partition access and visibility

- Workspace users see only the IoT assets they need to manage.
- Administrators manage only the users in their business unit.

### Single sign-on

Users with the **Administrator** role can set single sign-on (SSO) for their default workspace.
Once SSO is enabled for the workspace, subsequent users with this workspace as their default use SSO to log in to all invited workspaces.
If SSO is enabled in a workspace that isn't your default, you continue to use your email and password.

:::note
For most people, the default workspace is the first one you were invited to and is always shown at the top of the list.
:::

For the available SSO providers and implementation guides, see [Single sign-on](/sso).

## SuperAdmin user role

A **SuperAdmin** is a role created when multiple workspaces are linked.
This role is automatically assigned to the longest-standing **Administrator** in the main organization.

The SuperAdmin can see all linked workspaces in the workspace switcher and has administrator permissions in each workspace.
They also automatically receive access to any newly linked workspace.
This role can manage other users across multiple accounts in the **Users** tab of the **Workspace settings** in the emnify Portal.

There is only one SuperAdmin and users with this role can't be removed from any linked workspace, as they are the assumed owner.

:::info
Reassigning the SuperAdmin role can only be done by the emnify team.
:::

## Available guides

The following guides offer step-by-step guidance for configuring Workspaces for your organization:

- [Create a new workspace](/workspaces/create)
- [Link an existing workspace](/workspaces/link)
- [Switch between workspaces](/workspaces/switch)

:::info[API reference]
Many operations are also executable using the emnify REST API.
Available endpoints are listed under the [Workspaces tag in the OpenAPI specification](https://cdn.emnify.net/api/doc/swagger.html#/Workspaces).
:::
