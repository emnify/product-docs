---
description: Invite, assign a role, suspend, and delete employees within your organization on the emnify Portal
last_update: 
  date: 07-20-2023
slug: /portal/org/employees
---

# Employees

You can view and administer your organization's employees by navigating to [**Employees**](https://portal.emnify.com/organisation-settings/users).

:::info
Only users with the **Administrator** role have visibility to the list of employees within their organization.
:::

## View employees

The paged list of employees shows the following information for each employee:

| State            | Description                                      |
|:-----------------|:-------------------------------------------------|
| **ID**      | A unique numeric value that can be used for finding a specific employee.  |
| **Name**      | Names can be first names only and aren't required to be unique.  |
| **Status**      | A check mark if the account is active. A circle with a diagonal bar if the account is suspended.  |
| **Email**      | The email address used for sending the invitation.  |
| **Role**      | Either **Administrator**, **Observer**, or **User**.  |
| **MFA**      | Either **Activated** or **Not configured**.  |
| **Activate** or **Suspend** button     | For activating/suspending the employee's account.  |
| **Trash bin** icon  | For deleting the employee's account.  |

## Add a new employee

Select the **Invite** button.
Provide the employees' name, email address, and [role](/portal/roles).
Then, select the **Send Invite** button.

<details className="custom-details-example">
  <summary>Show an example</summary>
    <img
        src={require('./assets/portal-organization-employees-invite.png').default}
        alt=""
    />
</details>

## Find employees

The **Filter by** dropdown offers three options:

| Option           | Description                                             |
|:-----------------|:--------------------------------------------------------|
| **User ID**      | A single number that must match exactly.                |
| **Name**         | Matches can be partial. This is the only filter that can return multiple results.  |
| **Email**        | Only an exact match returns the employee's account. |

## Update an employee's account

The only employee account attributes that an **Administrator** can change are:

- **Name**: You can edit an employee's name directly in the **Organization Employees** list.
- **Status**: You can suspend an active account or activate a suspended account.
