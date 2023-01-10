// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/vsLight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "emnify Documentation",
  tagline: "Developer resources and documentation for the emnify SuperNetwork.",
  url: "https://emnify.github.io",
  baseUrl: "/product-docs/",
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
          editUrl: "https://github.com/EMnify/product-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'description', 
          content: 'Check our documentation for emnify API and Services including Data Streamer, Cloud Connect, Security, SIM management.'
        },
        {
          property: 'og:title',
          content: 'Documentation for Developers | emnify'
        },
        {
          property: 'og:description',
          content: 'Check our documentation for emnify API and Services including Data Streamer, Cloud Connect, Security, SIM management.'
        },
        {
          name: 'twitter:title',
          content: 'Documentation for Developers | emnify'
        },
        {
          name: 'twitter:description',
          content: 'Check our documentation for emnify API and Services including Data Streamer, Cloud Connect, Security, SIM management.'
        },
        {

        }
      ],
      colorMode: {
        disableSwitch: true
      },
      navbar: {
        title: "Developers",
        logo: {
          alt: "emnify Documentation – Home",
          src: "img/logo-word-blue-295x80.png",
        },
      },
      footer: {
        logo: {
          alt: "",
          src: "img/logo-icon-only-dark.svg",
          style: { "margin-top": "1.5rem" },
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
                href: "https://www.emnify.com/imprint-disclaimer"
              },
              {
                label: "Privacy policy",
                href: "https://www.emnify.com/privacy-policy"
              }
            ]
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} emnify GmbH. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme
      },
    }),
};

module.exports = config;
