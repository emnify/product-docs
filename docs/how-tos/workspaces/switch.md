---
description: Move between and manage multiple workspaces
pagination_label: Switching between workspaces
slug: /workspaces/switch
---

# Switching between workspaces <span className="theme-doc-version-badge badge badge--primary beta">Beta</span>

One benefit of having [linked workspaces](/glossary#linked-workspaces) is that you can manage multiple [organizations](/glossary#organization) using one emnify account.

This guide shows you how to switch between your organizations via the [workspace switcher](/glossary#workspace-switcher) in the [emnify Portal](https://portal.emnify.com/).

:::info
Only **Admin** [user accounts](/glossary#user-account) of the [main organization](/glossary#main-organization) can switch between workspaces.
:::

1. [Log in to your emnify account](https://portal.emnify.com/sign).
You should see your organization's name at the top of the primary sidebar.

<img
  src={require('./assets/portal-sidebar-workspaces-first-org.png').default}
  alt=""
/>

2. Click your organization's name (or the corresponding icons) to reveal the **Workspaces** modal.
This displays a list of all the workspaces linked to your organization, as well as [**Link existing workspace**](/how-tos/workspaces/link-existing) and [**Create a new workspace**](/how-tos/workspaces/create-new) options.
3. Select another [organization](/glossary#organization) name to navigate to that workspace.

In the following example, we're starting from the main **AG General inc.** workspace and selecting the **AG EV-charging** workspace.

<img
  src={require('./assets/portal-sidebar-workspaces-org-list.png').default}
  alt=""
  style={{ height:500 }}
/>

:::note
The main organization workspace will be indicated with a building icon.

<img
  src={require('./assets/portal-sidebar-workspaces-main-org-icon.png').default}
  alt=""
  style={{ width:300 }}
/>

The workspace you're currently in will be indicated with a green checkmark.

<img
  src={require('./assets/portal-sidebar-workspaces-current-org-icon.png').default}
  alt=""
  style={{ width:300 }}
/>
:::

Now you should be in another workspace. 🎉

<img
  src={require('./assets/portal-sidebar-workspaces-second-org.png').default}
  alt=""
/>

:::tip Feature requests
Workspaces are new to emnify, so feedback and suggestions are very welcome.
Please [open a ticket on Canny](https://emnify.canny.io/).
:::