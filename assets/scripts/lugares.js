
var lugaresMap = L.map('lugaresmap').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(lugaresMap);

lugares.forEach(lugar => {
    L.marker(lugar.latlong).addTo(lugaresMap)
        .bindPopup(lugar.name);
});

var bounds = new L.LatLngBounds(lugares.map((x) => x.latlong));
lugaresMap.fitBounds(bounds);
