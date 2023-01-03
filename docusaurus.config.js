// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "emnify Documentation",
  tagline: "Developer resources and documentation for the emnify SuperNetwork.",
  url: "https://docs.emnify.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "emnify",
  projectName: "product-docs",

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
          editUrl:
            "https://github.com/EMnify/product-docs/blob/main/",
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
      navbar: {
        title: "Developers",
        logo: {
          alt: "emnify Documentation – Home",
          src: 'img/logo-word-blue-295x80.png',
          srcDark: 'img/logo-word-white-295x80.png',
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "emnify website",
                to: "https://www.emnify.com/",
              },
              {
                label: "Integration guides",
                href: "https://www.emnify.com/integration-guides"
              },
              {
                label: "REST API reference",
                href: "https://cdn.emnify.net/api/doc/index.html"
              }
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Open a ticket",
                href: "https://support.emnify.com/hc/en-us"
              },
              {
                label: "Request a feature",
                href: "https://emnify.canny.io/"
              },
              {
                label: "System status",
                href: "https://status.emnify.com/"
              }
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "GitHub",
                to: "https://github.com/emnify/",
              },
              {
                label: "Developer blog",
                href: "https://www.emnify.com/developer-blog"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/emnify",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} emnify GmbH. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
