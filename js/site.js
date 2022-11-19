var southWest = L.latLng(36.94, -122.11),
    northEast = L.latLng(37.04, -121.96),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    center: [36.99, -122.06],
    zoom: 15,
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 13
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// mapmarkers
var blueLightTest = L.marker([36.99, -122.05]).bindPopup('This is a test for an Blue Light Emergency Callbox marker.');
var blueLights = L.layerGroup([blueLightTest]);

var zenZoneTest = L.marker([37, -122.06]).bindPopup('This is a test for a Zen Zone.');
var zenZones = L.layerGroup([zenZoneTest]);

var stuSpotTest = L.marker([36.98, -122.06]).bindPopup('This is a test for a Student-Named Spot.');
var stuSpots = L.layerGroup([stuSpotTest]);

var overlayMaps = {
    "Emergency Callboxes": blueLights,
    "Zen Zones": zenZones,
    "Student-Named Spots": stuSpots
};

var layerControl = L.control.layers(null, overlayMaps).addTo(map);
