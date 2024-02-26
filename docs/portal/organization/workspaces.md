---
description: Multiple workspaces is designed to help organizations with complex business structures manage entities in the emnify Portal
last_update:
  date: 02-26-2024
slug: /workspaces
---

# Multiple workspaces

A workspace is where you manage the IoT cellular connectivity for your devices.
Every emnify customer has free access to a single workspace.

When you need more than one workspace to manage independent aspects of your business, you can use multiple workspaces.
This feature is designed to address the needs of organizations with complex business structures, particularly those with entities that should remain independent in functionality but may have users managing both aspects.

Potential use cases for multiple workspaces include:

- Entities that require independent billing
- Diverse product lines within the same company with varying technical requirements
- Separating sandbox and live systems
- Entities that need independent contracts

:::info
Multiple workspaces come with the **Pro Package**.
You can have up to three workspaces.
:::

## Useful terms

The following terms are commonly used when discussing the workspaces feature.
Each listed term includes a link to its associated glossary entry:

- [Default workspace](/glossary#default-workspace)
- [Linked workspaces](/glossary#linked-workspaces)
- [Main organization](/glossary#main-organization)
- [SuperAdmin](#superadmin-user-role)
- [Workspace switcher](/glossary#workspace-switcher)

## Features

Implementing multiple workspaces reduces operational costs and management complexity for organizations that meet the specified criteria.
Administrators with privileges to manage linked workspaces only need one set of login credentials to administer them all.

Multiple workspaces can provide other benefits and solutions, but these vary depending on need.

### Partition of business units

Using multiple workspaces to partition business units helps facilitate requirements for supporting fundamental differences in the following:

- IoT businesses
- Services or product lines
- Billing conditions
- Currencies
- Tax requirements

### Partition access and visibility

- **Users** in a workspace see only the IoT assets they need to manage.
- **Administrators** manage only the users in their workspace.

For more information, see [user management roles and permissions](/portal/roles#user-management).

### Single sign-on

Users with the **Administrator** role can set single sign-on (SSO) for their default workspace.
Once SSO is enabled for the workspace, subsequent users with this workspace as their default must use SSO to log in to all invited workspaces.
If SSO is enabled in a workspace that isn't your default, you continue to use your email and password.

:::note
For most people, the default workspace is the first one you were invited to and is always shown at the top of the list.
:::

For the available SSO providers and implementation guides, see [Single sign-on](/sso).

## SuperAdmin user role

The **SuperAdmin** role is provided when emnify sets up your multiple workspace architecture.
By default, this role is assigned to the longest-standing **Administrator** in the main organization.

The SuperAdmin can see all linked workspaces in the workspace switcher and has administrator permissions in each workspace.
They also automatically receive access to any new workspaces linked to the main organization.
This role can manage other users across multiple accounts in the **Users** tab of the **Workspace settings** in the emnify Portal.

There is only one SuperAdmin, and users with this role can't be removed from any workspace linked to the main organization, as they are the assumed owner.
However, a user can be a SuperAdmin in one organization but hold another role (for example, **Observer**) in a workspace associated with a different organization.
In those workspaces, this user can be updated or deleted as usual.
For more information, see [user management roles and permissions](/portal/roles#user-management).

:::info
Reassigning the SuperAdmin role can only be done by the emnify team on request.
:::

If you unlink your workspaces, the SuperAdmin role is removed as it's no longer needed.
By default, the former SuperAdmin becomes an administrator of any workspace they already had access to before the workspaces were linked and lose access to the others.

:::note
Unlinked workspaces only affect the SuperAdmin's role and access.
There are no visual differences or permission changes for other users.
:::

## Available guides

The following guides offer step-by-step guidance for configuring workspaces:

- [Create a new workspace](/workspaces/create)
- [Link an existing workspace](/workspaces/link)
- [Switch between workspaces](/workspaces/switch)

:::info[API reference]
Many operations are also executable using the emnify REST API.
Available endpoints are listed under the [Workspaces tag in the OpenAPI specification](https://cdn.emnify.net/api/doc/swagger.html#/Workspaces).
:::
