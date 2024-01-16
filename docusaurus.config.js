// @ts-check
require("dotenv").config();

import { themes as prismThemes } from "prism-react-renderer";

let baseUrl = "/";
if (process.env.PREVIEW_PATH) baseUrl += process.env.PREVIEW_PATH;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "emnify Documentation",
  tagline: "Developer resources and documentation for the emnify SuperNetwork.",
  url: "https://docs.emnify.com",
  baseUrl: baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "emnify",
  projectName: "product-docs",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/emnify/product-docs/blob/main/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  scripts: [
    {
      type: "text/javascript",
      src: "https://cdn.cookielaw.org/consent/0c5a33bc-8e12-407d-937d-4e4c9f6e86a0/OtAutoBlock.js",
      defer: true,
    },
    {
      src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
      "data-document-language": true,
      type: "text/javascript",
      charset: "UTF-8",
      "data-domain-script": "0c5a33bc-8e12-407d-937d-4e4c9f6e86a0",
      defer: true,
    },
    {
      type: "text/javascript",
      src: "/scripts/optanonWrapper.js",
      defer: true,
    },
    {
      src: "/scripts/googleTagManager.js",
      async: true,
    },
    {
      src: "/scripts/jentisTagManager.js",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        indexName: "emnify",
        contextualSearch: true,
      },
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: "Documentation",
        logo: {
          alt: "emnify Documentation – Home",
          href: "/",
          src: "img/logo-dark.svg",
        },
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        logo: {
          alt: "",
          src: "img/logo-icon-only-dark.svg",
        },
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "emnify website",
                href: "https://www.emnify.com/",
              },
              {
                label: "Developer blog",
                href: "https://www.emnify.com/developer-blog",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Open a ticket",
                href: "https://support.emnify.com/hc/en-us",
              },
              {
                label: "Request a feature",
                href: "https://emnify.canny.io/",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/emnify/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/emnify",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Imprint",
                href: "https://www.emnify.com/imprint-disclaimer",
              },
              {
                label: "Privacy policy",
                href: "https://www.emnify.com/privacy-policy",
              },
              {
                html: `
                <button style="visibility:hidden;" id="ot-sdk-btn" class="ot-sdk-show-settings">
                  Cookie Settings
                </button>
              `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} emnify GmbH. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.vsLight,
        additionalLanguages: ["bash", "javascript", "json", "python"],
      },
      zoom: {
        // selector: '.markdown :not(em) > img',
        config: {
          // Options you can specify via https://github.com/francoischalifour/medium-zoom#options
          background: {
            light: "rgb(255, 255, 255)",
          },
        },
      },
    }),

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Getting started with emnify
          {
            to: "/quickstart",
            from: "/quickstart/getting-started",
          },
          {
            to: "/quickstart/order-sims",
            from: "/quickstart/ordering-sims",
          },
          {
            to: "/quickstart/register-sims",
            from: "/quickstart/registering-sims",
          },
          {
            to: "/quickstart/create-device",
            from: "/quickstart/devices/creating-a-device",
          },
          {
            to: "/apn-configuration",
            from: [
              "/quickstart/devices/apn-configuration",
              "/quickstart/devices",
            ],
          },
          {
            to: "/apn-configuration/android",
            from: "/quickstart/devices/android",
          },
          {
            to: "/apn-configuration/ios",
            from: "/quickstart/devices/ios-devices",
          },
          {
            to: "/apn-configuration/cellular-modules",
            from: "/quickstart/devices/cellular-modules",
          },
          {
            to: "/apn-configuration/gps-trackers",
            from: "/quickstart/devices/gps-trackers",
          },
          {
            to: "/apn-configuration/industrial-routers",
            from: "/quickstart/devices/industrial-routers",
          },
          // emnify Portal
          {
            to: "/portal/reports",
            from: "/services/business-intelligence-and-analytics-reports",
          },
          {
            to: "/portal/device-policies",
            from: [
              "/services/endpoint-management-and-group-policies",
              "/portal/group-policies",
            ],
          },
          {
            to: "/portal/no-code",
            from: [
              "/services/no-code-workflow-automation",
              "/portal/no-code-automation",
            ],
          },
          {
            to: "/portal/roles",
            from: ["/services/user-management", "/portal/user-management"],
          },
          // Connectivity services
          {
            to: "/services/global-iot-sim",
            from: "/services",
          },
          // Platform services
          {
            to: "/multicloud-data-streamer",
            from: "/services/data-streamer",
          },
          {
            to: "/multicloud-data-streamer/connection-types",
            from: "/services/data-streamer/connection-types",
          },
          {
            to: "/multicloud-data-streamer/stream-types",
            from: "/services/data-streamer/stream-types",
          },
          {
            to: "/multicloud-data-streamer/manage-data-streams",
            from: "/services/data-streamer/managing-data-streams",
          },
          {
            to: "/multicloud-data-streamer/usage",
            from: "/services/data-streamer/usage",
          },
          {
            to: "/multicloud-data-streamer/integrations",
            from: "/services/data-streamer/available-integrations",
          },
          {
            to: "/system-events",
            from: "/services/events",
          },
          {
            to: "/system-events/event-types",
            from: "/services/events/event-types",
          },
          {
            to: "/system-events/usage",
            from: "/services/events/usage",
          },
          // Developer Resources
          {
            to: "/rest",
            from: "/rest-api",
          },
          {
            to: "/rest",
            from: "/rest-api/authentication",
          },
          {
            to: "/rest",
            from: "/rest/authentication",
          },
          {
            to: "/rest/sms-operations",
            from: "/rest-api/sms-operations",
          },
          {
            to: "/graphql",
            from: "/graphql/preview",
          },
          {
            to: "/graphql/graphiql-ide",
            from: "/graphql/using-graphiql",
          },
          {
            to: "/sdks/python/quickstart",
            from: ["/sdks/python", "/sdks/python/getting-started"],
          },
          {
            to: "/sdks/java/quickstart",
            from: ["/sdks/java", "/sdks/java/getting-started"],
          },
          {
            to: "/sdks/support",
            from: ["/sdks/java/help", "/sdks/python/help"],
          },
          // How-tos
          {
            to: "/how-tos/data-allowances",
            from: "/how-tos/multi-inclusive-volumes",
          },
          {
            to: "/how-tos/multi-factor-authentication",
            from: "/how-tos/two-factor-authentication",
          },
          // Support
          {
            to: "/support",
            from: "/services/support",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
