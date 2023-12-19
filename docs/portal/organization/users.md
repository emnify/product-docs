---
description: Invite, assign a role, suspend, and delete users within your organization on the emnify Portal
last_update: 
  date: 12-14-2023
slug: /portal/org/employees
---

# Users

import Check from '../assets/check.svg';
import Close from '../assets/close.svg';

You can view and administer your Workspace users by navigating to [**Users**](https://portal.emnify.com/organisation-settings/users).

:::info
Only users with the **Administrator** role have visibility to the list of Workspace users.
:::

## View Workspace users

The paged list shows the following information for each user:

| Property         | Description                                      |
|:-----------------|:-------------------------------------------------|
| **User ID**      | A unique numeric value associated with a user.  |
| **Name**      | Names can be first names only and aren't required to be unique.  |
| **Email**      | The email address used for sending the invitation.  |
| **Created**      | Date the users' emnify account was created.  |
| **User role**      | Either **Administrator**, **Observer**, or **User**.  |
| **Workspace access**      | Number of workspaces the user has access to. Workspace names are listed under the user details, along with the associated role and invitation status (either **Active**, **Invite pending**, or **Invite expired**). |
| **Account security**      | Multi-factor authentication (MFA) status, either **Active** or **Disable**.  |
| **Delete user**     | For deleting the user's account.  |

## Add a new user

Select the **Invite user** button.
Provide the users' email address and [role](/portal/roles).
Then, select **Invite user**.

## Filter users

Three filters are available for the **Workspace users** list.
These filters allow you to query users based on one or more properties (for example, name or email).

Select the filter you want to edit, enter a value, then press the `Tab` or `Enter` key.
Once you've entered all the values you want to filter by, click **Apply**.

To remove a filter or value, click the corresponding **X**.

Filters can be combined or used together with the search bar.
Filtered values are saved in the URL as a query parameter (for example, after filtering for users named `Dana`, the URL includes `&name=Dana` at the end).

### Available filters

| Property        | Value      | [Wildcard support](#wildcard-support) | Description        |
|:----------------|:-----------|:--------------------------------------:|:-------------------|
| Name            | String     | <Check alt="Yes" />         | Name of a user. |
| Email           | String     | <Check alt="Yes" />         | Email address associated with the users' emnify account. |
| Workspaces          | Predefined | <Close alt="No" />        | List of workspaces the users belong to.  |

### Wildcard support

A wildcard filter lets you find various value forms based on a partial match.
You can also use character matching with an asterisk `*`.

This is especially useful if a term has multiple spellings or you're unsure of the exact value.

For example, if you have two users named `Raha` and `Sasha`, filtering for `ha` or `*ha` shows both users in the results.
Another example is filtering emails using `@example.*` shows all results regardless of whether the email address ends in `example.com` or `example.org`.

### Upload a CSV file

You can use a comma-separated values (CSV) file to apply multiple values to any filter that accepts string values.

This feature is especially useful if you have dozens of values (for example, 100 names).
Importing values through a CSV file lets you skip the tedious task of entering each value individually.

To upload a CSV file, follow these steps:

1. On [**Users**](https://portal.emnify.com/organisation-settings/users), choose the corresponding filter for the property in your CSV file (for example, **Name**).
1. Click **Import a CSV file**.
1. Drag and drop the file or select **Browse file** to find the file you want to import.
1. Verify the file name and line count are correct, then click **Confirm**.

Each value is parsed, and the table shows any devices with the corresponding values.

:::note
Uploading a CSV file won't overwrite any existing filters.
To add or remove any values, select the filter again.
:::

Please note the following limits:

- You can only upload one `.csv` or `.txt` file at a time
- Maximum rows: 10,000
- Maximum row length: 100 characters
- The CSV file size can't exceed 400 KB in total

:::tip
You can download and view a sample CSV file to use as a template.
Choose the filter, select **Import a CSV file**, then click **Download example of right format CSV**.
:::

### Enter a list of values

You can also enter a list of values to filter for multiple ones simultaneously.
This works for any property that accepts string values.

Lists must be plain text with every value on its own line.
Write the values exactly as they appear in the Portal.

To demonstrate, if you enter the following in the **Email** filter and press the `Enter` key:

```txt
example.com
example.org
example.net
```

Each value is parsed, and the table shows any emails that use `example.com`, `example.org`, and `example.net`.

## Update a user's account

The only user account attribute that an **Administrator** can change is the **User role**.
Administrators can also remove a users' account from the workspace.