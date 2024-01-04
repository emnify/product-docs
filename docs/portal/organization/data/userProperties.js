const workspaceUserProperties = [
  {
    property: 'User ID',
    description: 'A unique numeric value associated with a user.'
  },
  {
    property: 'Name',
    description: 'Names can be first names only and aren\'t required to be unique.'
  },
  {
    property: 'Email',
    description: 'The email address used for sending the invitation.'
  },
  {
    property: 'Created',
    description: 'Date the users\' emnify account was created.'
  },
  {
    property: 'User role',
    description: 'Either **Administrator**, **Observer**, or **User**.'
  },
  {
    property: 'Workspace access',
    description: 'Number of workspaces the user has access to. Workspace names are listed under the user details, along with the associated role and invitation status (either **Active**, **Invite pending**, or **Invite expired**).'
  },
  {
    property: 'Account security',
    description: 'Multi-factor authentication (MFA) status, either **Active** or **Disable**.'
  },
  {
    property: 'Delete user',
    description: 'For deleting the user\'s account.'
  },
]

export default workspaceUserProperties
