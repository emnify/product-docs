---
description: Invite, assign a role, suspend, and delete users
---

# User management

You can view and administer your organization's users by navigating to [**Employees**](https://portal.emnify.com/organisation-settings/users).

:::info
Only users with the **Administrator** role have visibility to the list of users within their organization.
:::

## View users

The paged list of users shows the following information for each user:

- **ID**: A unique numeric value that can be used for finding a specific user
- **Name**: Names can be first name only and are not required to be unique.
- **Status**: A check mark if the account is active. A circle with diagonal bar if the account is suspended.
- **Email**: The email address used for sending the invitation
- **Role**: Either **Administrator**, **Observer**, or **User**
- **MFA**: can be either **Activated** or **Not configured**
- **Activate** or **Suspend** button: For activating/suspending the user's account
- **Trash bin** icon: For deleting the user's account

<details>
  <summary>Show me an example</summary>
    <img
        src={require('./assets/org-user-list.png').default}
        alt=""
    />
</details>

## Add a new user

Select the **Invite** button, provide the user's name, email address, and role.
Then, select the **Send Invite** button. 

<details>
  <summary>Show me an example</summary>
    <img
        src={require('./assets/org-invite-a-colleague.png').default}
        alt=""
    />
</details>

## Find users

The **Filter by** dropdown offers three options:

- **User ID**: a single number that must match exactly
- **Name**: Matches can be partial. This is the only filter that can return multiple results.
- **Email**: Only an exact match will return the user's account.

## Update a user's account

The only user account attributes that an **Administrator** can change are:

- **Name**: You can edit a user's name directly in the **Organization Employees** list.
- **Status**: You can suspend an active account or activate a suspended account.
