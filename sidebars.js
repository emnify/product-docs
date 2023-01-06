/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  */
  ourSidebar: [
    'cellular-iot',
    {
      type: 'category',
      label: 'Quickstart',
      link: {
        type: 'generated-index',
        title: 'Quickstart guide',
        slug: 'quickstart',
        description: 'Resources for your successful IoT cellular deployment with emnify',
      },
      items: [
        'quickstart/getting-started',
        'quickstart/registering-sims',
        {
          type: 'category',
          label: 'Devices',
          link: {
            type: 'generated-index',
            title: 'Devices',
            slug: 'devices',
            description: 'How to create and configure various types of devices.',
          },
          items: [
            'quickstart/devices/creating-a-device',
            'quickstart/devices/getting-the-first-device-online',
            'quickstart/devices/android',
            'quickstart/devices/ios-devices',
            'quickstart/devices/cellular-modules',
            'quickstart/devices/gps-trackers',
            'quickstart/devices/industrial-routers',
          ],
        },
        'quickstart/troubleshooting',
      ],
    },
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
      link: { type: 'doc', id: 'sso/overview' },
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
