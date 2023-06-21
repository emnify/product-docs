// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    {
      type: "category",
      label: "Get started with emnify",
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
        "quickstart/apn-configuration/create-device",
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
        type: "generated-index",
        title: "emnify Portal",
        slug: "/portal",
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
                type: "generated-index",
                description:
                  "With Single Sign-On (SSO) enabled, your organization can access the emnify Portal using your existing account credentials",
                slug: "/sso",
                title: "Single Sign-On",
              },
              items: [
                {
                  type: "doc",
                  label: "Microsoft Active Directory",
                  id: "sso/microsoft-active-directory",
                },
                {
                  type: "doc",
                  label: "Google Cloud Platform",
                  id: "sso/google-cloud-platform",
                },
                {
                  type: "doc",
                  label: "Troubleshooting",
                  id: "sso/troubleshooting",
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
        id: "cellular-iot",
      },
      items: [
        "cellular-iot",
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
        id: "integration-guides/index",
      },
      items: [
        "integration-guides/index",
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
            "services/data-streamer/managing-data-streams",
            "services/data-streamer/usage",
            "services/data-streamer/available-integrations",
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
            "services/events/usage",
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
    {
      type: "category",
      label: "REST API",
      link: {
        type: "doc",
        id: "rest/getting-started",
      },
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "rest/getting-started",
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
        "graphql/using-graphiql",
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
            type: "generated-index",
            title: "emnify Python SDK",
            description:
              "The emnify Python software development kit (SDK) for SIM state management and device connectivity operations",
            slug: "/sdks/python",
          },
          items: [
            {
              type: "doc",
              label: "Get started",
              id: "sdks/python/getting-started",
            },
            "sdks/python/examples",
            "sdks/python/help",
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
            type: "generated-index",
            title: "emnify Java SDK",
            description:
              "The emnify Java software development kit (SDK) for SIM state management and device connectivity operations",
            slug: "/sdks/java",
          },
          items: [
            {
              type: "doc",
              label: "Get started",
              id: "sdks/java/getting-started",
            },
            "sdks/java/examples",
            "sdks/java/help",
            {
              type: "link",
              label: "API Reference",
              href: "https://emnify.github.io/emnify-sdk-java/",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
