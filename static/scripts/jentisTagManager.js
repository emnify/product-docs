(function (sCDN,sCDNProject,sCDNWorkspace,sCDNVers) {
    if(
        window.localStorage !== null &&
        typeof window.localStorage === "object" &&
        typeof window.localStorage.getItem === "function" &&
        window.sessionStorage !== null &&
        typeof window.sessionStorage === "object" &&
        typeof window.sessionStorage.getItem === "function" )
    {
        sCDNVers = window.sessionStorage.getItem('jts_preview_version') || window.localStorage.getItem('jts_preview_version') || sCDNVers;
    }
    window.jentis = window.jentis || {};
    window.jentis.config = window.jentis.config || {};
    window.jentis.config.frontend = window.jentis.config.frontend || {};
    window.jentis.config.frontend.cdnhost = sCDN+"/get/"+sCDNWorkspace+"/web/"+sCDNVers+"/";
    window.jentis.config.frontend.vers = sCDNVers;
    window.jentis.config.frontend.env = sCDNWorkspace;
    window.jentis.config.frontend.project = sCDNProject;
    window._jts = window._jts || [];
    var f   = document.getElementsByTagName("script")[0];
    var j = document.createElement("script");
    j.async = true;
    j.src   = window.jentis.config.frontend.cdnhost+"v1mf8j.js";
    f.parentNode.insertBefore(j, f)
})("https://fuuaay.emnify.com","emnify","live","_");
