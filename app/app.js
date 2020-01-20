const application = require("tns-core-modules/application");
const config = require("./config");
const firebase = require("nativescript-plugin-firebase");
const MapAPI = config.google.map.provideAPIKey || "AIzaSyCPsksKb67hdxuVZJXyzcsPwcRHPzFyrJ4";
// Google Maps SDK API KEY
if(application.ios) {
    GMSServices.provideAPIKey(MapAPI);
}

firebase.init({
    iOSEmulatorFlush: true,
    persist: false,
    onAuthStateChanged: function(data) {
        console.log(data.loggedIn ? 'Logged' : 'Logged out')
        if (data.loggedIn) {
            console.log(' INIT USER', data)
        }
    }
}).then(
    function () {
        console.log("Firebase.init done");
    },
    function (error) {
        console.log("firebase.init error: " + error);
    }
);


application.run({ moduleName: "app-root" });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
