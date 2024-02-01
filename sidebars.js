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
          label: "APN configuration",
          link: {
            type: "doc",
            id: "quickstart/apn-configuration/index",
          },
          items: [
            "quickstart/apn-configuration/index",
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
          link: {
            type: "doc",
            id: "portal/sims-and-devices/sim-inventory",
          },
          items: [
            "portal/sims-and-devices/sim-inventory",
            "portal/sims-and-devices/connected-devices",
            "portal/sims-and-devices/device-policies",
            "portal/sims-and-devices/troubleshooting",
          ],
        },
        "portal/sms",
        {
          type: "category",
          label: "Integrations",
          link: {
            type: "doc",
            id: "portal/integrations/no-code",
          },
          items: [
            "portal/integrations/no-code",
            "portal/integrations/application-tokens",
          ],
        },
        "portal/reports",
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
            "portal/organization/users",
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
        "services/connectivity/quota-management",
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
        {
          type: "category",
          label: "Integration guides",
          link: {
            type: "doc",
            id: "services/platform/integration-guides/index",
          },
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "services/platform/integration-guides/index",
            },
            {
              type: "category",
              label: "OpenVPN",
              link: {
                type: "doc",
                id: "services/platform/integration-guides/openvpn/linux",
              },
              items: [
                "services/platform/integration-guides/openvpn/linux",
                "services/platform/integration-guides/openvpn/macos",
                "services/platform/integration-guides/openvpn/windows",
              ],
            },
          ],
        },
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
              label: "Getting started",
              id: "services/platform/data-streamer/index",
            },
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
            {
              type: "doc",
              label: "Getting started",
              id: "services/platform/events/index",
            },
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
      link: {
        type: "doc",
        id: "rest/index",
      },
      items: [
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
              label: "Getting started",
              id: "rest/index",
            },
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
          items: ["graphql/preview", "graphql/graphiql-ide"],
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
              link: {
                type: "doc",
                id: "sdks/java/quickstart",
              },
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
        {
          type: "doc",
          label: "Overview",
          id: "how-tos/index",
        },
        "how-tos/add-ip-address-spaces",
        "how-tos/block-operators",
        {
          type: "category",
          label: "Device policies",
          link: {
            type: "doc",
            id: "how-tos/device-policies/create-service-policies",
          },
          items: [
            "how-tos/device-policies/create-service-policies",
            "how-tos/device-policies/create-coverage-policies",
            "how-tos/device-policies/assign-devices-to-policies",
            "how-tos/device-policies/update-existing-policies",
            "how-tos/device-policies/data-allowances",
            "how-tos/device-policies/configure-data-sms-limits",
            "how-tos/device-policies/configure-dns-settings",
            "how-tos/device-policies/manage-data-sms-quotas",
          ],
        },
        "how-tos/multi-factor-authentication",
        {
          type: "category",
          label: "Single sign-on",
          link: {
            type: "doc",
            id: "how-tos/sso/microsoft-active-directory",
          },
          items: [
            "how-tos/sso/microsoft-active-directory",
            "how-tos/sso/google-cloud-platform",
            "how-tos/sso/troubleshooting",
          ],
        },
        "how-tos/update-company-details",
        "how-tos/upgrade-trial-plan",
        {
          type: "category",
          label: "Workspaces",
          link: {
            type: "doc",
            id: "how-tos/workspaces/create",
          },
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
