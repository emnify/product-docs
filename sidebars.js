// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    "iot-supernetwork",
    {
      type: "category",
      label: "Getting started with emnify",
      link: {
        type: "doc",
        id: "quickstart/index",
      },
      items: [
        {
          type: "doc",
          label: "Create an account",
          id: "quickstart/index",
        },
        {
          type: "doc",
          label: "Order SIMs",
          id: "quickstart/order-sims",
        },
        {
          type: "doc",
          label: "Register SIMs",
          id: "quickstart/register-sims",
        },
        "quickstart/create-device",
        {
          type: "category",
          label: "Get the device online",
          link: {
            type: "doc",
            id: "quickstart/apn-configuration/index",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "quickstart/apn-configuration/index",
            },
            "quickstart/apn-configuration/android",
            "quickstart/apn-configuration/ios",
            "quickstart/apn-configuration/cellular-modules",
            "quickstart/apn-configuration/gps-trackers",
            "quickstart/apn-configuration/industrial-routers",
          ],
        },
        "quickstart/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "User guide",
      link: {
        type: "doc",
        id: "portal/sims-and-devices/sim-inventory",
      },
      items: [
        {
          type: "category",
          label: "Manage SIMs and devices",
          link: {
            type: "doc",
            id: "portal/sims-and-devices/sim-inventory",
          },
          items: [
            "portal/sims-and-devices/sim-inventory",
            "portal/sims-and-devices/connected-devices",
            {
              type: "doc",
              id: "portal/sims-and-devices/device-group-policies",
              label: "Group policies",
            },
            "portal/sims-and-devices/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Organization management",
          link: {
            type: "doc",
            id: "portal/organization/settings",
          },
          items: [
            "portal/organization/settings",
            "portal/organization/data",
            "portal/organization/employees",
            "portal/organization/subscription",
            "portal/organization/billing",
            "portal/organization/sso",
            "portal/organization/workspaces",
          ],
        },
        "portal/sms",
        "portal/dashboards",
        {
          type: "category",
          label: "Integrations",
          link: {
            type: "doc",
            id: "portal/integrations/no-code-workflows",
          },
          items: [
            "portal/integrations/no-code-workflows",
            "portal/integrations/data-streams",
            "portal/integrations/secure-connection",
            "portal/integrations/application-tokens",
            "portal/integrations/ip-address-space-management",
          ],
        },
        "portal/user-settings",
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
          label: "How-to guides",
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
              label: "Single sign-on",
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
