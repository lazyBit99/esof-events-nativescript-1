const application = require("tns-core-modules/application");

// Google Maps SDK API KEY
if(application.ios) {
    GMSServices.provideAPIKey("AIzaSyCPsksKb67hdxuVZJXyzcsPwcRHPzFyrJ4");
}


application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
