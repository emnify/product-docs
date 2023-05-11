# Workspaces

This feature is only available to [**Pro**](https://portal.emnify.com/organisation-settings/subscription) plan subscribers.
It is designed to address the needs of organizations with complex business structures as well as those with diverse product lines.

## Concepts

### Workspace

A workspace is an independent [emnify Portal](https://portal.emnify.com/) entity associated with an organization.
Each workspace operates independently from other workspaces, i.e., it is accessed, managed, and billed separately.

### Linked Workspaces

Linked workspaces are those that have been linked together by their main organization.
Linked workspaces can be centrally or individually managed.

### Main Organization

The main organization is the organization that has permissions to manage multiple workspaces.

### Workspace Switcher

The workspace switcher is the user interface that enables an administrator to switch between linked workspaces.

## Features

Implementing **Workspaces** will reduce operational costs and management complexity for organizations that meet the specified criteria.
The administrators who have privileges to manage linked workspaces will only need one set of login credentials to administer them all.

There are other benefits and solutions that **Workspaces** can provide but these will vary depending on the organization, such as:

### Partitioning of business units to facilitate requirements for supporting fundamental differences in:

- IoT businesses
- Services or product lines
- Billing conditions
- Currencies
- Tax requirements

### Partitioning access and visibility

- Workspace users see only the IoT assets they need to manage.
- Administrators manage only the users in their business unit.

## Workspaces UI

### No workspaces present

<img
  src={require('./assets/workspaces-create.png').default}
  style={{width:300}}
  alt=""
/>

### Created multiple workspaces

<img
  src={require('./assets/workspaces-created.png').default}
  style={{width:300}}
  alt=""
/>