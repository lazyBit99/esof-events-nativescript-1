const MapViewModel = require("./map-view-model");
const mapsModule = require("nativescript-google-maps-sdk");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

function onMapReady(args) {
    console.log("onMapReady", args);
    const mapView = args.object;
    const marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(
        45.649268385921395,
        13.762092590332031
    );
    marker.title = "Colazione";
    marker.color = "green";
    marker.userData = {index: 1};
    mapView.addMarker(marker);

    const marker2 = new mapsModule.Marker();
    marker2.position = mapsModule.Position.positionFromLatLng(
        45.646283314737836,
        13.759925365447998
    );
    marker2.title = "Colazione";
    marker2.color = "green";
    marker2.userData = {index: 1};
    mapView.addMarker(marker2);

}

exports.onMapReady = onMapReady;
exports.onNavigatingTo = onNavigatingTo;
