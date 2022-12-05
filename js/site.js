/*
 * Author: Jacquelyn Meek, Ganzorig Gantushig, Eric Ramirez, Hannah Hodor, Alex Jones, and Emma Radichkova
 * Created: 4 December
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
var bl0 = L.marker([36.98139, -122.05201], {icon: blueLightIcon}),
    bl1 = L.marker([36.988608, -122.064765], {icon: blueLightIcon}),
    bl2 = L.marker([36.988592, -122.065555], {icon: blueLightIcon}),
    bl3 = L.marker([36.988687, -122.066831], {icon: blueLightIcon}),
    bl4 = L.marker([36.990685, -122.066054], {icon: blueLightIcon}),
    bl5 = L.marker([36.985384, -122.055216], {icon: blueLightIcon}),
    bl6 = L.marker([36.995588, -122.065152], {icon: blueLightIcon}),
    bl7 = L.marker([36.996308, -122.065093], {icon: blueLightIcon}),
    bl8 = L.marker([36.996603, -122.065662], {icon: blueLightIcon}),
    bl9 = L.marker([36.991451, -122.054735], {icon: blueLightIcon}),
    bl10 = L.marker([36.991130, -122.053412], {icon: blueLightIcon}),
    bl11 = L.marker([36.990742, -122.052096], {icon: blueLightIcon}),
    bl12 = L.marker([36.99482, -122.05417], {icon: blueLightIcon}),
    bl13 = L.marker([36.995568, -122.058387], {icon: blueLightIcon}),
    bl14 = L.marker([36.995511, -122.057028], {icon: blueLightIcon}),
    bl15 = L.marker([36.9992, -122.0638], {icon: blueLightIcon}),
    bl16 = L.marker([36.999368, -122.064501], {icon: blueLightIcon}),
    bl17 = L.marker([37.000032, -122.062300], {icon: blueLightIcon}),
    bl18 = L.marker([37.003232, -122.066063], {icon: blueLightIcon}),
    bl19 = L.marker([36.998855, -122.060201], {icon: blueLightIcon}),
    bl20 = L.marker([36.997850, -122.061555], {icon: blueLightIcon}),
    bl21 = L.marker([36.996338, -122.053821], {icon: blueLightIcon}),
    bl22 = L.marker([36.996663, -122.052516], {icon: blueLightIcon}),
    bl23 = L.marker([36.996241, -122.059241], {icon: blueLightIcon}),
    bl24 = L.marker([36.990334, -122.063126], {icon: blueLightIcon}),
    bl25 = L.marker([36.992869, -122.060908], {icon: blueLightIcon}),
    bl26 = L.marker([36.994242, -122.059605], {icon: blueLightIcon}),
    bl27 = L.marker([36.996749, -122.063819], {icon: blueLightIcon}),
    bl28 = L.marker([37.000228, -122.055203], {icon: blueLightIcon}),
    bl29 = L.marker([37.003347, -122.058889], {icon: blueLightIcon}),
    bl30 = L.marker([36.999617, -122.054556], {icon: blueLightIcon}),
    bl31 = L.marker([37.002219, -122.055082], {icon: blueLightIcon}),
    bl32 = L.marker([37.002151, -122.053174], {icon: blueLightIcon}),
    bl33 = L.marker([36.997547, -122.055057], {icon: blueLightIcon}),
    bl34 = L.marker([36.996310, -122.054155], {icon: blueLightIcon}),
    bl35 = L.marker([37.001994, -122.065408], {icon: blueLightIcon}),
    bl36 = L.marker([36.995724, -122.056823], {icon: blueLightIcon}),
    bl37 = L.marker([37.002631, -122.066153], {icon: blueLightIcon}),
    bl38 = L.marker([36.997742, -122.055979], {icon: blueLightIcon}),
    bl39 = L.marker([36.999575, -122.057836], {icon: blueLightIcon}),
    bl40 = L.marker([36.994763, -122.057214], {icon: blueLightIcon}),
    bl41 = L.marker([36.985632, -122.053617], {icon: blueLightIcon}),
    bl42 = L.marker([37.001650, -122.065047], {icon: blueLightIcon}),
    bl43 = L.marker([36.99909373706478, -122.064], {icon: blueLightIcon}),
    bl44 = L.marker([36.99919, -122.0633  ], {icon: blueLightIcon});

var blueLights = L.layerGroup([bl0,bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9,bl10,bl11,bl12,bl13,bl14,bl15,bl16,bl17,bl18,bl19,bl20,bl21,bl22,bl23,bl24,bl25,bl26,bl27,bl28,bl29,bl30,bl31,bl32,bl33,bl34,bl35,bl36,bl37,bl38,bl39,bl40,bl41,bl42,bl43,bl44]);

var zenZoneIcon = L.icon({
    iconUrl: "img/zen.png"
})
var zz0 = L.marker([36.99647, -122.05102], {icon: zenZoneIcon}),
    zz1 = L.marker([36.99128, -122.06062], {icon: zenZoneIcon}).bindPopup('Meadow Chair View'),
    zz2 = L.marker([36.98882, -122.06278], {icon: zenZoneIcon}).bindPopup('Oakes Garden'),
    zz3 = L.marker([36.98230, -122.06008], {icon: zenZoneIcon}).bindPopup('UCSC Arboretum'),
    zz4 = L.marker([36.99436, -122.06081], {icon: zenZoneIcon}).bindPopup('Arts Area'),
    zz5 = L.marker([36.99488, -122.06681], {icon: zenZoneIcon}).bindPopup('Porter Meadow'),
    zz6 = L.marker([36.98819, -122.06472], {icon: zenZoneIcon}).bindPopup('Oakes Meadow'),
    zz7 = L.marker([37.00158, -122.05136], {icon: zenZoneIcon}).bindPopup('Chuck Beebe Scenic Bench'),
    zz8 = L.marker([36.99911, -122.05158], {icon: zenZoneIcon}).bindPopup('Merrill Garden');
var zenZones = L.layerGroup([zz0,zz1,zz2,zz3,zz4,zz5,zz6,zz7,zz8]);

var slugSpotIcon = L.icon({
    iconUrl: "img/slug.png"
})
var ss0 = L.marker([37.00032503935382, -122.04825623161635], {icon: slugSpotIcon}).bindPopup('Koi Pond'),
    ss1 = L.marker([37.00121337261763, -122.04950633103583], {icon: slugSpotIcon}).bindPopup('Rock Garden'),
    ss2 = L.marker([36.99483434090599, -122.0678131282766], {icon: slugSpotIcon}).bindPopup('Porter Meadow'),
    ss3 = L.marker([37.00489117336368, -122.06002121569239], {icon: slugSpotIcon}).bindPopup('Tree Nine'),
    ss4 = L.marker([37.00480866077326, -122.05698968608996], {icon: slugSpotIcon}).bindPopup('Merrill Meadow'),
    ss5 = L.marker([36.988265578422265, -122.06568671861666], {icon: slugSpotIcon}).bindPopup('Oakes Meadow'),
    ss6 = L.marker([37.02527947008107, -122.05748618155012], {icon: slugSpotIcon}).bindPopup('Garden of Eden'),
    ss7 = L.marker([36.9952687894609, -122.04433433436452], {icon: slugSpotIcon}).bindPopup('Pogonip'),
    ss8 = L.marker([36.98854682026975, -122.06890435799833], {icon: slugSpotIcon}).bindPopup('Porter Caves (Cave Gulch Trailhead)'),
    ss9 = L.marker([37.00808462775966, -122.06123490219979], {icon: slugSpotIcon}).bindPopup('The Tuck');
var stuSpots = L.layerGroup([ss0,ss1,ss2,ss3,ss4,ss5,ss6,ss7,ss8,ss9]); 

var overlayMaps = {
    "Emergency Callboxes": blueLights,
    "Zen Zones": zenZones,
    "Student-Named Spots": stuSpots
};

var layerControl = L.control.layers(null, overlayMaps).addTo(map);
