const MapViewModel = require("./map-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
