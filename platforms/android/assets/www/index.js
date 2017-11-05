"use strict";

window.SupermarketLoser = window.SupermarketLoser || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    document.addEventListener("deviceready", function() { navigator.splashscreen.hide(); });

    SupermarketLoser.app = new DevExpress.framework.html.HtmlApplication({
        namespace: SupermarketLoser,
        navigationType: SupermarketLoser.config.navigationType
    });

    SupermarketLoser.app.router.register(":view", { view: "home" });
    SupermarketLoser.app.navigate();   
});

Globalize.culture(navigator.language || navigator.browserLanguage);
//Globalize.culture("fr");