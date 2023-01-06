// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    'cellular-iot',
    'quickstart',
    {
      type: 'category',
      label: 'Services',
      link: { 
        type: 'generated-index', 
        description: 'emnify offers the following high-level products and services:',
        slug: 'services'
      },
      items: [
        'services/global-iot-sim',
        'services/global-iot-network',
        'services/iot-cloud-communication-platform',
        {
          type: 'category',
          label: 'Data Streamer',
          link: { 
            type: 'generated-index', 
            title: 'emnify multicloud Data Streamer',
            slug: 'services/data-streamer'
          },
      items: [
        'services/data-streamer/getting-started',
        'services/data-streamer/connection-types',
        'services/data-streamer/stream-types',
        'services/data-streamer/managing-data-streams',
        'services/data-streamer/usage',
        'services/data-streamer/available-integrations'
      ],
        },
        {
          type: 'category',
          label: 'Events',
          link: {
            type: 'generated-index', 
            title: 'emnify system events',
            slug: 'services/events'
          },
          items: [
            'services/events/getting-started',
            'services/events/event-types',
            'services/events/mno-events',
            'services/events/usage'
          ],
        },
        'services/security',
        'services/cloud-connect',
        'services/openvpn',
        'services/sms',
        'services/user-management',
        'services/business-intelligence-and-analytics-reports',
        'services/no-code-workflow-automation',
        'services/sim-life-cycle-management',
        'services/endpoint-management-and-group-policies',
      ],
    },
    'rest-api',
    {
      type: 'category',
      label: 'Single Sign-On',
      link: { 
        type: 'generated-index', 
        description: 'With Single Sign-On (SSO) enabled, your organization can access the emnify Portal using your existing account credentials.',
        slug: '/sso',
        title: 'Single Sign-On'
      },
      items: [
        {
          type: 'doc',
          label: 'Microsoft Active Directory',
          id: 'sso/microsoft-active-directory'
        },
        {
          type: 'doc',
          label: 'Google Cloud Platform',
          id: 'sso/google-cloud-platform'
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'sso/troubleshooting'
        }
      ],
    },
    'glossary',
  ]
};

module.exports = sidebars;
