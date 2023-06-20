// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    {
      type: "category",
      label: "Get started with emnify",
      link: {
        type: "doc",
        id: "quickstart/getting-started",
      },
      items: [
        {
          type: "doc",
          label: "Create an account",
          id: "quickstart/getting-started",
        },
        {
          type: "doc",
          label: "Order SIMs",
          id: "quickstart/ordering-sims",
        },
        {
          type: "doc",
          label: "Register SIMs",
          id: "quickstart/registering-sims",
        },
        "quickstart/devices/creating-a-device",
        {
          type: "category",
          label: "Get the device online",
          link: {
            type: "generated-index",
            title: "Get the device online",
            slug: "apn-configuration",
            description:
              "Configure SIM-equipped devices with an Access Point Name (APN)",
          },
          items: [
            "quickstart/devices/android",
            "quickstart/devices/ios-devices",
            "quickstart/devices/cellular-modules",
            "quickstart/devices/gps-trackers",
            "quickstart/devices/industrial-routers",
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
        type: "generated-index",
        slug: "connectivity",
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
        type: "generated-index",
        slug: "platform",
      },
      items: [
        "integration-guides/index",
        {
          type: "category",
          label: "Data Streamer",
          link: {
            type: "generated-index",
            title: "emnify multicloud Data Streamer",
            slug: "services/data-streamer",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "services/data-streamer/getting-started",
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
            type: "generated-index",
            title: "emnify system events",
            slug: "services/events",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "services/events/getting-started",
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
        type: "generated-index",
        slug: "network",
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
