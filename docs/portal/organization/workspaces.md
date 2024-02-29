---
description: Implementing multiple Workspaces helps organizations with complex business structures manage entities in the emnify Portal
last_update:
  date: 02-28-2024
slug: /workspaces
---

# Multiple Workspaces

A Workspace is where you manage the IoT cellular connectivity for your devices.
Every emnify customer has free access to a single Workspace.

When you need more than one Workspace to manage independent aspects of your business, you can use multiple Workspaces.
This feature is designed to address the needs of organizations with complex business structures, particularly those with entities that should remain independent in functionality but may have users managing both aspects.

Potential use cases for having multiple Workspaces include:

- Entities that require independent billing
- Diverse product lines within the same company with varying technical requirements
- Separating sandbox and live systems
- Entities that need independent contracts

:::info
By default, you can have up to three Workspaces with the **Pro Package**.
:::

## Useful terms

The following terms are commonly used when discussing Workspaces.
Each listed term includes a link to its associated glossary entry:

- [Default Workspace](/glossary#default-workspace)
- [Linked Workspaces](/glossary#linked-workspaces)
- [Main organization](/glossary#main-organization)
- [SuperAdmin](#superadmin-user-role)
- [Workspace switcher](/glossary#workspace-switcher)

## Features

Implementing multiple Workspaces reduces operational costs and management complexity for organizations that meet the specified criteria.
Administrators with privileges to manage linked Workspaces only need one set of login credentials to administer them all.

Multiple Workspaces can provide other benefits and solutions, but these vary depending on need.

### Partition of business units

Using multiple Workspaces to partition business units helps facilitate requirements for supporting fundamental differences in the following:

- IoT businesses
- Services or product lines
- Billing conditions
- Currencies
- Tax requirements

### Partition access and visibility

- **Users** in a Workspace see only the IoT assets they need to manage.
- **Administrators** manage only the users in their Workspace.

For more information, see [user management roles and permissions](/portal/roles#user-management).

### Single sign-on

Users with the **Administrator** role can set single sign-on (SSO) for their default Workspace.
Once SSO is enabled for the Workspace, subsequent users with this Workspace as their default must use SSO to log in to the emnify Portal.
If SSO is enabled in a Workspace that isn't your default, you continue to use your email and password.

:::note
For most people, the default Workspace is the first one you were invited to and is always shown at the top of the list.
:::

For the available SSO providers and implementation guides, see [Single sign-on](/sso).

## SuperAdmin user role

The **SuperAdmin** role is provided when emnify sets up your multiple Workspace architecture.
By default, this role is assigned to the longest-standing **Administrator** in the main organization.

The SuperAdmin automatically receives access to all existing and any new Workspaces linked to the main organization.
In the Workspace switcher, they can see all of these Workspaces, plus any other Workspaces they have access to.
This role can manage other users like administrators across multiple Workspaces in the [**Users**](https://portal.emnify.com/organisation-settings/users) tab of the **Workspace settings** in the emnify Portal.

There is only one SuperAdmin per main organization, and users with this role can't be removed from any Workspace linked to that organization, as they are the assumed owner.
However, a user can be a SuperAdmin in one main organization but hold another role (for example, **Observer**) in an unrelated Workspace with a different main organization.
In those Workspaces, this user can be updated or deleted as usual.
For more information, see [user management roles and permissions](/portal/roles#user-management).

:::info
Reassigning the SuperAdmin role can only be done by the emnify team on request.
:::

If you unlink your Workspaces, the SuperAdmin role is removed as it's no longer needed.
By default, the former SuperAdmin becomes an administrator of any Workspace they already had access to before the Workspaces were linked and lose access to the others.

:::note
Unlinked Workspaces only affect the SuperAdmin's role and access.
There are no visual differences or permission changes for other users.
:::

## Available guides

The following guides offer step-by-step guidance for configuring Workspaces:

- [Create a new Workspace](/workspaces/create)
- [Link existing Workspaces](/workspaces/link)
- [Switch between Workspaces](/workspaces/switch)

:::info[API reference]
Many operations are also executable using the emnify REST API.
Available endpoints are listed under the [Workspaces tag in the OpenAPI specification](https://cdn.emnify.net/api/doc/swagger.html#/Workspaces).
:::
