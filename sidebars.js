// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
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
      label: "emnify Portal",
      link: {
        type: "doc",
        id: "portal/index",
      },
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "portal/index",
        },
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
                {
                  type: "doc",
                  label: "Troubleshooting",
                  id: "how-tos/sso/troubleshooting",
                },
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
          id: "services/business-intelligence-and-analytics-reports",
        },
        {
          type: "doc",
          label: "Group policies",
          id: "services/endpoint-management-and-group-policies",
        },
        {
          type: "doc",
          label: "No-code automation",
          id: "services/no-code-workflow-automation",
        },
        "services/user-management",
      ],
    },
    {
      type: "category",
      label: "Connectivity services",
      link: {
        type: "doc",
        id: "services/cellular-iot",
      },
      items: [
        "services/cellular-iot",
        "services/global-iot-sim",
        "services/sim-lifecycle-management",
        "services/sms",
      ],
    },
    {
      type: "category",
      label: "Platform services",
      link: {
        type: "doc",
        id: "services/integration-guides/index",
      },
      items: [
        "services/integration-guides/index",
        {
          type: "category",
          label: "Data Streamer",
          link: {
            type: "doc",
            id: "services/data-streamer/index",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "services/data-streamer/index",
            },
            "services/data-streamer/connection-types",
            "services/data-streamer/stream-types",
            "services/data-streamer/data-streams",
            {
              type: "doc",
              label: "Usage",
              id: "services/data-streamer/usage",
            },
            "services/data-streamer/integrations",
          ],
        },
        {
          type: "category",
          label: "Events",
          link: {
            type: "doc",
            id: "services/events/index",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "services/events/index",
            },
            "services/events/event-types",
            {
              type: "doc",
              label: "Usage",
              id: "services/events/usage",
            },
          ],
        },
        "services/security",
      ],
    },
    {
      type: "category",
      label: "Network services",
      link: {
        type: "doc",
        id: "services/global-iot-network",
      },
      items: [
        "services/global-iot-network",
        {
          type: "doc",
          label: "IoT communication platform",
          id: "services/iot-cloud-communication-platform",
        },
        "services/cloud-connect",
        "services/openvpn",
      ],
    },
    "glossary",
    "support",
  ],
  devResourcesSidebar: [
    "developer-resources/index",
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
