module.exports = function (context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { heapio } = themeConfig || {};

  if (!heapio) {
    throw new Error(
      `You need to specify 'heapio' object in 'themeConfig' with 'appId' field`
    );
  }

  var appId = heapio.appId;
  if (!appId) {
    throw new Error("You must specify the `appId` field for `heapio`.");
  }

  const devId = heapio.devId;
  if (process.env.NODE_ENV !== "production") {
    if (!devId) {
      throw new Error(
        "You are not in production so you must specify the `devId` field for `heapio`."
      );
    }
  }
  return {
    name: "heap-analytics",

    injectHtmlTags() {
      const envID = process.env.NODE_ENV === "production" ? appId : devId;
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `window.heap=window.heap || [], window.heap.load = function (e, t) { window.heap.appid = e, window.heap.config = t = t || {}; var r = document.createElement("script"); r.type = "text/javascript", r.async = !0, r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js"; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(r, a); for (var n = function (e) { return function () { heap.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "resetIdentity", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], o = 0; o < p.length; o++)heap[p[o]] = n(p[o]) };
            window.heap.load("${envID}"); `,
          },
        ],
      };
    },
  };
};
