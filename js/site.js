/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 11 November
 * License: Public Domain
 */

//popup
window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        500
    )
});
document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

//map bounds
var southWest = L.latLng(36.94, -122.11),
    northEast = L.latLng(37.04, -121.96),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    center: [36.99, -122.06],
    zoom: 15,
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 14
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// mapmarkers
var blueLightIcon = L.icon({
    iconUrl: "img/emergency.png"
})
var bl0 = L.marker([36.98139, -122.05201], {icon: blueLightIcon}).bindPopup('bl0.'), 
    bl1 = L.marker([36.988608, -122.064765], {icon: blueLightIcon}).bindPopup('bl1.'),
    bl2 = L.marker([36.988592, -122.065555], {icon: blueLightIcon}).bindPopup('bl2.'),
    bl3 = L.marker([36.988687, -122.066831], {icon: blueLightIcon}).bindPopup('bl3.'),
    bl4 = L.marker([36.990685, -122.066054], {icon: blueLightIcon}).bindPopup('bl4.'),
    bl5 = L.marker([36.985384, -122.055216], {icon: blueLightIcon}).bindPopup('bl5.'),
    bl6 = L.marker([36.995588, -122.065152], {icon: blueLightIcon}).bindPopup('bl6.'),
    bl7 = L.marker([36.996308, -122.065093], {icon: blueLightIcon}).bindPopup('bl7.'),
    bl8 = L.marker([36.996603, -122.065662], {icon: blueLightIcon}).bindPopup('bl8.'),
    bl9 = L.marker([36.991451, -122.054735], {icon: blueLightIcon}).bindPopup('bl9.'),
    bl10 = L.marker([36.991130, -122.053412], {icon: blueLightIcon}).bindPopup('bl10.'),
    bl11 = L.marker([36.990742, -122.052096], {icon: blueLightIcon}).bindPopup('bl11.'),
    bl12 = L.marker([36.99482, -122.05417], {icon: blueLightIcon}).bindPopup('bl12.'),
    bl13 = L.marker([36.995568, -122.058387], {icon: blueLightIcon}).bindPopup('bl13.'),
    bl14 = L.marker([36.995511, -122.057028], {icon: blueLightIcon}).bindPopup('bl14.'),
    bl15 = L.marker([36.9992, -122.0638], {icon: blueLightIcon}).bindPopup('bl15.'),
    bl16 = L.marker([36.999368, -122.064501], {icon: blueLightIcon}).bindPopup('bl16.'),
    bl17 = L.marker([37.000032, -122.062300], {icon: blueLightIcon}).bindPopup('bl17.'),
    bl18 = L.marker([37.003232, -122.066063], {icon: blueLightIcon}).bindPopup('bl18.'),
    bl19 = L.marker([36.998855, -122.060201], {icon: blueLightIcon}).bindPopup('bl19.'),
    bl20 = L.marker([36.997850, -122.061555], {icon: blueLightIcon}).bindPopup('bl20.'),
    bl21 = L.marker([36.996338, -122.053821], {icon: blueLightIcon}).bindPopup('bl21.'),
    bl22 = L.marker([36.996663, -122.052516], {icon: blueLightIcon}).bindPopup('bl22.'),
    bl23 = L.marker([36.996241, -122.059241], {icon: blueLightIcon}).bindPopup('bl23.'),
    bl24 = L.marker([36.990334, -122.063126], {icon: blueLightIcon}).bindPopup('bl24.'),
    bl25 = L.marker([36.992869, -122.060908], {icon: blueLightIcon}).bindPopup('bl25.'),
    bl26 = L.marker([36.994242, -122.059605], {icon: blueLightIcon}).bindPopup('bl26.'),
    bl27 = L.marker([36.996649, -122.063819], {icon: blueLightIcon}).bindPopup('bl27.'),
    bl28 = L.marker([37.000228, -122.055203], {icon: blueLightIcon}).bindPopup('bl28.'),
    bl29 = L.marker([37.003347, -122.058889], {icon: blueLightIcon}).bindPopup('bl29.'),
    bl30 = L.marker([36.999617, -122.054556], {icon: blueLightIcon}).bindPopup('bl30.'),
    bl31 = L.marker([37.002219, -122.055082], {icon: blueLightIcon}).bindPopup('bl31.'),
    bl32 = L.marker([37.002151, -122.053474], {icon: blueLightIcon}).bindPopup('bl32.'),
    bl33 = L.marker([36.997547, -122.055057], {icon: blueLightIcon}).bindPopup('bl33.'),
    bl34 = L.marker([36.996310, -122.054155], {icon: blueLightIcon}).bindPopup('bl34.'),
    bl35 = L.marker([37.001994, -122.065408], {icon: blueLightIcon}).bindPopup('bl35.'),
    bl36 = L.marker([36.995724, -122.056823], {icon: blueLightIcon}).bindPopup('bl36.'),
    bl37 = L.marker([37.002631, -122.066153], {icon: blueLightIcon}).bindPopup('bl37.'),
    bl38 = L.marker([36.997742, -122.055979], {icon: blueLightIcon}).bindPopup('bl38.'),
    bl39 = L.marker([36.999575, -122.057836], {icon: blueLightIcon}).bindPopup('bl39.'),
    bl40 = L.marker([36.994763, -122.057214], {icon: blueLightIcon}).bindPopup('bl40.'),
    bl41 = L.marker([36.985632, -122.053617], {icon: blueLightIcon}).bindPopup('bl41.'),
    bl42 = L.marker([37.001550, -122.064847], {icon: blueLightIcon}).bindPopup('bl42.'),
    bl43 = L.marker([37.001550, -122.064847], {icon: blueLightIcon}).bindPopup('bl43.'),
    bl44 = L.marker([36.99909373706478, -122.064], {icon: blueLightIcon}).bindPopup('bl44.'),
    bl45 = L.marker([36.99919, -122.0633  ], {icon: blueLightIcon}).bindPopup('bl45.');

var blueLights = L.layerGroup([bl0,bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9,bl10,bl11,bl12,bl13,bl14,bl15,bl16,bl17,bl18,bl19,bl20,bl21,bl22,bl23,bl24,bl25,bl26,bl27,bl28,bl29,bl30,bl31,bl32,bl33,bl34,bl35,bl36,bl37,bl38,bl39,bl40,bl41,bl42,bl43,bl44,bl45]);

var zenZoneIcon = L.icon({
    iconUrl: "img/zen.png"
})
var zenZoneTest = L.marker([37, -122.06], {icon: zenZoneIcon}).bindPopup('This is a test for a Zen Zone.');
var zenZones = L.layerGroup([zenZoneTest]);

var stuSpotIcon = L.icon({
    iconUrl: "img/slug.png"
})
var stuSpotTest = L.marker([36.98, -122.06], {icon: stuSpotIcon}).bindPopup('This is a test for a Student-Named Spot.');
var stuSpots = L.layerGroup([stuSpotTest]);

var overlayMaps = {
    "Emergency Callboxes": blueLights,
    "Zen Zones": zenZones,
    "Student-Named Spots": stuSpots
};

var layerControl = L.control.layers(null, overlayMaps).addTo(map);
