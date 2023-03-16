// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    "cellular-iot",
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
        "quickstart/getting-started",
        "quickstart/registering-sims",
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
            "quickstart/devices/creating-a-device",
            {
              type: "category",
              label: "Getting the device online",
              link: {
                type: "generated-index",
                title: "Getting the first device online",
                slug: "quickstart/devices/apn-configuration",
                description:
                  "Configuring SIM-equipped devices with an Access Point Name (APN)",
              },
              items: [
                "quickstart/devices/android",
                "quickstart/devices/ios-devices",
                "quickstart/devices/cellular-modules",
                "quickstart/devices/gps-trackers",
                "quickstart/devices/industrial-routers",
              ],
            },
          ],
        },
        "quickstart/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Services",
      link: {
        type: "generated-index",
        description:
          "emnify offers the following high-level products and services:",
        slug: "services",
      },
      items: [
        "services/global-iot-sim",
        "services/global-iot-network",
        "services/iot-cloud-communication-platform",
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
              label: "Getting started",
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
              label: "Getting started",
              id: "services/events/getting-started",
            },
            "services/events/event-types",
            "services/events/usage",
          ],
        },
        "services/security",
        "services/cloud-connect",
        "services/openvpn",
        "services/sms",
        "services/user-management",
        "services/business-intelligence-and-analytics-reports",
        "services/no-code-workflow-automation",
        "services/sim-lifecycle-management",
        "services/endpoint-management-and-group-policies",
      ],
    },
    {
      type: "category",
      label: "Software Development Kits",
      link: {
        type: "generated-index",
        title: "emnify SDKs",
        description:
          "The emnify software development kits (SDKs) allow developers to manage their IoT devices using an intuitive set of APIs, including SIM state management and device connectivity operations",
        slug: "/sdks",
      },
      items: [
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
              label: "Getting started",
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
              label: "Getting started",
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
        {
          type: "doc",
          label: "Multi-inclusive volumes",
          id: "how-tos/multi-inclusive-volumes",
        },
      ],
    },
    "integration-guides/index",
    "glossary",
  ],
  restSidebar: [
    {
      type: "doc",
      label: "Getting started",
      id: "rest-api/getting-started",
    },
    "rest-api/authentication",
    "rest-api/sms-operations",
    {
      type: "link",
      label: "API reference",
      href: "https://cdn.emnify.net/api/doc/index.html",
    },
  ],
  graphqlSidebar: [
    {
      type: "doc",
      label: "Preview the GraphQL API",
      id: "graphql/preview",
    },
    "graphql/using-graphiql",
  ],
};

module.exports = sidebars;
