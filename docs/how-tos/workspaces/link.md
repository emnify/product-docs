---
title: Link an existing workspace
description: If you already have two or more workspaces created
pagination_label: Link an existing workspace
slug: /workspaces/link
---

# Link an existing workspace <span className="theme-doc-version-badge badge badge--primary beta">beta</span>

If you already have two or more [workspaces](/glossary#workspace) created, you can link these to a shared [main organization](/glossary#main-organization).
These [linked workspaces](/glossary#linked-workspaces) can be centrally or individually managed.

This guide shows you how to submit a request to link existing workspaces via the emnify Portal.
Alternatively, you can also [create a new workspace](/workspaces/create).

:::info
Only **Administrator** [user accounts](/glossary#user-account) of customers on the **Pro** plan can link existing workspaces.
:::

1. [Log in to your emnify account](https://portal.emnify.com/sign).
You should see your organization's name at the top of the primary sidebar.

<img
  src={require('./assets/portal-sidebar-workspaces.png').default}
  alt=""
/>

2. Click your organization's name (or the corresponding icons) to reveal the **Workspaces** modal.
3. Select **Link existing workspace**.

<img
  src={require('./assets/portal-sidebar-workspaces-link.png').default}
  alt=""
  style={{ height:450 }}
/>

4. Once the **Request for linking a workspace** modal appears, enter your **Contact email** and provide any details about the workspace you want to link.
5. Click **Send Request**.

If you see the **Request Sent** modal, your request has been submitted successfully. 🎉

From there, the emnify team processes your request and contacts you to link your existing workspaces.
They can also work with you to customize them.

:::note
The process may take time, as each new workspace requires a new contract.
It usually takes 2-7 days for your workspaces to be linked.
:::

Once linked, **Administrator** user accounts of the main organization are able to [switch between workspaces](/workspaces/switch).

:::tip Feature requests
Workspaces are new to emnify, so feedback and suggestions are very welcome.
Please [open a ticket on Canny](https://emnify.canny.io/).
:::
