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
    'quickstart',
    'service-stack-overview',
    'services',
    'rest-api',
    {
      type: 'category',
      label: 'Data Streamer',
      link: {type: 'doc', id: 'data-streamer/introduction'},
      items: [
        {
          type: 'doc',
          label: 'Getting Started',
          id: 'data-streamer/introduction'
        },
        {
          type: 'doc',
          label: 'Connection Types',
          id: 'data-streamer/connection-types'
        },
        {
          type: 'doc',
          label: 'Stream Types',
          id: 'data-streamer/stream-types'
        },
        {
          type: 'doc',
          label: 'Managing Data Streams',
          id: 'data-streamer/managing-data-streams'
        },
        {
          type: 'doc',
          label: 'Using the Data Streamer',
          id: 'data-streamer/using-the-data-streamer'
        },
        {
          type: 'doc',
          label: 'Available Integrations',
          id: 'data-streamer/available-integrations'
        }
      ],
    },
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
