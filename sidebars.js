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
        "quickstart/index",
        "quickstart/order-sims",
        "quickstart/register-sims",
        "quickstart/create-device",
        {
          type: "category",
          label: "Get the device online",
          link: {
            type: "doc",
            id: "quickstart/apn-configuration/index",
          },
          items: [
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
        id: "portal/dashboard",
      },
      items: [
        "portal/dashboard",
        {
          type: "category",
          label: "Manage SIMs and devices",
          items: [
            "portal/sims-and-devices/sim-inventory",
            "portal/sims-and-devices/connected-devices",
            "portal/sims-and-devices/device-policies",
            {
              type: "link",
              label: "Orders",
              href: "/quickstart/order-sims",
            },
            "portal/sims-and-devices/troubleshooting",
          ],
        },
        "portal/sms",
        {
          type: "category",
          label: "Integrations",
          items: [
            "portal/integrations/no-code",
            "portal/integrations/application-tokens",
          ],
        },
        "portal/reports",
        {
          type: "category",
          label: "Organization management",
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
        "portal/user-settings",
        "portal/roles",
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
        "services/connectivity/factory-test-mode",
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
            "services/platform/data-streamer/connection-types",
            "services/platform/data-streamer/stream-types",
            "services/platform/data-streamer/data-streams",
            "services/platform/data-streamer/usage",
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
            "services/platform/events/event-types",
            "services/platform/events/usage",
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
        "services/network/iot-cloud-communication-platform",
        "services/network/cloud-connect",
        "services/network/openvpn",
      ],
    },
    {
      type: "category",
      label: "Developer resources",
      items: [
        {
          type: "category",
          label: "REST API",
          link: {
            type: "doc",
            id: "rest/index",
          },
          items: [
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
          items: ["graphql/graphiql-ide"],
        },
        {
          type: "category",
          label: "SDKs",
          link: {
            type: "doc",
            id: "sdks/index",
          },
          items: [
            "sdks/concepts",
            {
              type: "category",
              label: "Python",
              items: [
                "sdks/python/quickstart",
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
              items: [
                "sdks/java/quickstart",
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
    },
    {
      type: "category",
      label: "How-to guides",
      link: {
        type: "doc",
        id: "how-tos/index",
      },
      items: [
        "how-tos/data-allowances",
        "how-tos/two-factor-authentication",
        {
          type: "category",
          label: "Single sign-on",
          items: [
            "how-tos/sso/microsoft-active-directory",
            "how-tos/sso/google-cloud-platform",
            "how-tos/sso/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Workspaces",
          items: [
            "how-tos/workspaces/create",
            "how-tos/workspaces/link",
            "how-tos/workspaces/switch",
          ],
        },
      ],
    },
    "glossary",
    "support",
  ],
};

module.exports = sidebars;
