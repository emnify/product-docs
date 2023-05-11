// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    "iot-supernetwork",
    {
      type: "category",
      label: "User guide",
      link: {
        type: "generated-index",
        title: "User guide",
        slug: "userguide",
        description: "Using the emnify Portal to manage your assets",
      },
      items: [
        {
          type: "category",
          label: "Quickstart",
          link: {
            type: "generated-index",
            title: "Quickstart guide",
            slug: "quickstart",
            description:
              "Resources for your successful IoT cellular deployment with emnify",
          },
          items: [
            "userguide/quickstart/getting-started",
            {
              type: "doc",
              label: "Ordering SIMs",
              id: "userguide/quickstart/ordering-sims",
            },
            "userguide/quickstart/registering-sims",
            {
              type: "category",
              label: "Devices",
              link: {
                type: "generated-index",
                title: "Devices",
                slug: "devices",
                description:
                  "How to create and configure various types of devices.",
              },
              items: [
                "userguide/quickstart/devices/creating-a-device",
                {
                  type: "category",
                  label: "Getting the device online",
                  link: {
                    type: "generated-index",
                    title: "Getting the first device online",
                    slug: "userguide/quickstart/devices/apn-configuration",
                    description:
                      "Configuring SIM-equipped devices with an Access Point Name (APN)",
                  },
                  items: [
                    "userguide/quickstart/devices/android",
                    "userguide/quickstart/devices/ios-devices",
                    "userguide/quickstart/devices/cellular-modules",
                    "userguide/quickstart/devices/gps-trackers",
                    "userguide/quickstart/devices/industrial-routers",
                  ],
                },
              ],
            },
            "userguide/quickstart/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Managing SIMs and devices",
          link: {
            type: "generated-index",
            title: "Managing SIMs and devices",
            slug: "sims-and-devices",
            description:
              "Lifecycle management, device groups, and troubleshooting",
          },
          items: [
            "userguide/sims-and-devices/lifecycle-management",
            "userguide/sims-and-devices/device-group-policies",
            "userguide/sims-and-devices/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Organization management",
          link: {
            type: "generated-index",
            title: "Organization management",
            slug: "organization",
            description: "Manage your users, security, billing, and more",
          },
          items: [
            "userguide/organization/settings",
            "userguide/organization/data",
            "userguide/organization/users",
            "userguide/organization/subscription",
            "userguide/organization/billing",
            "userguide/organization/sso",
            "userguide/organization/workspaces",
          ],
        },
        "userguide/sim-orders",
        "userguide/sms",
        "userguide/dashboards",
        {
          type: "category",
          label: "Integrations",
          link: {
            type: "generated-index",
            title: "Integrations",
            slug: "integrations",
            description: "Integrating with other applications and APIs",
          },
          items: [
            "userguide/integrations/no-code-workflows",
            "userguide/integrations/data-streams",
            "userguide/integrations/secure-connection",
            "userguide/integrations/application-tokens",
            "userguide/integrations/ip-address-space-management",
          ],
        },
        "userguide/user-settings",
      ],
    },
    {
      type: "category",
      label: "emnify Portal",
      link: {
        type: "generated-index",
        title: "emnify Portal",
        slug: "/portal",
        description:
          "Track and explore costs, network activity, critical events, geographic distribution, and more with the emnify Portal web application",
      },
      items: [
        {
          type: "category",
          label: "How-tos",
          link: {
            type: "doc",
            id: "how-tos/index",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "how-tos/index",
            },
            "how-tos/multi-inclusive-volumes",
            "how-tos/two-factor-authentication",
            {
              type: "category",
              label: "Single Sign-On",
              link: {
                type: "doc",
                id: "how-tos/sso/microsoft-active-directory",
              },
              items: [
                {
                  type: "doc",
                  label: "Microsoft Active Directory",
                  id: "how-tos/sso/microsoft-active-directory",
                },
                {
                  type: "doc",
                  label: "Google Cloud Platform",
                  id: "how-tos/sso/google-cloud-platform",
                },
                "how-tos/sso/troubleshooting",
              ],
            },
            {
              type: "category",
              label: "Workspaces",
              link: {
                type: "doc",
                id: "how-tos/workspaces/create",
              },
              items: [
                // Labels need to be manually entered because of the beta badge
                {
                  type: "doc",
                  label: "Create a new workspace",
                  id: "how-tos/workspaces/create",
                },
                {
                  type: "doc",
                  label: "Link an existing workspace",
                  id: "how-tos/workspaces/link",
                },
                {
                  type: "doc",
                  label: "Switch between workspaces",
                  id: "how-tos/workspaces/switch",
                },
              ],
            },
          ],
        },
        {
          type: "doc",
          label: "Reports",
          id: "portal/reports",
        },
        {
          type: "doc",
          label: "Group policies",
          id: "portal/group-policies",
        },
        {
          type: "doc",
          label: "No-code automation",
          id: "portal/no-code-automation",
        },
        "portal/user-management",
      ],
    },
    {
      type: "category",
      label: "Connectivity services",
      link: {
        type: "doc",
        id: "services/connectivity/global-iot-sim",
      },
      items: [
        "services/connectivity/global-iot-sim",
        "services/connectivity/sim-lifecycle-management",
        "services/connectivity/sms",
      ],
    },
    {
      type: "category",
      label: "Platform services",
      link: {
        type: "doc",
        id: "services/platform/integration-guides/index",
      },
      items: [
        "services/platform/integration-guides/index",
        {
          type: "category",
          label: "Data Streamer",
          link: {
            type: "doc",
            id: "services/platform/data-streamer/index",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "services/platform/data-streamer/index",
            },
            "services/platform/data-streamer/connection-types",
            "services/platform/data-streamer/stream-types",
            "services/platform/data-streamer/data-streams",
            {
              type: "doc",
              label: "Usage",
              id: "services/platform/data-streamer/usage",
            },
            "services/platform/data-streamer/integrations",
          ],
        },
        {
          type: "category",
          label: "Events",
          link: {
            type: "doc",
            id: "services/platform/events/index",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "services/platform/events/index",
            },
            "services/platform/events/event-types",
            {
              type: "doc",
              label: "Usage",
              id: "services/platform/events/usage",
            },
          ],
        },
        "services/platform/security",
      ],
    },
    {
      type: "category",
      label: "Network services",
      link: {
        type: "doc",
        id: "services/network/global-iot-network",
      },
      items: [
        "services/network/global-iot-network",
        {
          type: "doc",
          label: "IoT communication platform",
          id: "services/network/iot-cloud-communication-platform",
        },
        "services/network/cloud-connect",
        "services/network/openvpn",
      ],
    },
    "glossary",
    "support",
  ],
  devResourcesSidebar: [
    {
      type: "category",
      label: "REST API",
      link: {
        type: "doc",
        id: "rest/index",
      },
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "rest/index",
        },
        "rest/authentication",
        "rest/sms-operations",
        {
          type: "link",
          label: "API reference",
          href: "https://cdn.emnify.net/api/doc/index.html",
        },
      ],
    },
    {
      type: "category",
      label: "GraphQL API",
      link: {
        type: "doc",
        id: "graphql/preview",
      },
      items: [
        {
          type: "doc",
          label: "Preview the GraphQL API",
          id: "graphql/preview",
        },
        "graphql/graphiql-ide",
      ],
    },
    {
      type: "category",
      label: "SDKs",
      link: {
        type: "doc",
        id: "sdks/index",
      },
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "sdks/index",
        },
        "sdks/concepts",
        {
          type: "category",
          label: "Python",
          link: {
            type: "doc",
            id: "sdks/python/quickstart",
          },
          items: [
            {
              type: "doc",
              label: "Getting started",
              id: "sdks/python/quickstart",
            },
            "sdks/python/examples",
            {
              type: "link",
              label: "API Reference",
              href: "https://emnify.github.io/emnify-sdk-python/autoapi/index.html",
            },
          ],
        },
        {
          type: "category",
          label: "Java",
          link: {
            type: "doc",
            id: "sdks/java/quickstart",
          },
          items: [
            {
              type: "doc",
              label: "Getting started",
              id: "sdks/java/quickstart",
            },
            "sdks/java/examples",
            {
              type: "link",
              label: "API Reference",
              href: "https://emnify.github.io/emnify-sdk-java/",
            },
          ],
        },
        "sdks/support",
      ],
    },
  ],
};

module.exports = sidebars;
