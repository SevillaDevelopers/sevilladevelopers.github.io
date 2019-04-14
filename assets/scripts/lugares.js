
var lugaresMap = L.map('lugaresmap').setView([51.505, -0.09], 13);

var trabajoIcon = L.icon({
	// attribution: https://es.wikipedia.org/wiki/Archivo:Map_pin_icon.svg
	iconUrl: 'assets/img/blue_pin.svg',
	iconSize: [30,40],
	iconAnchor: [12,40],
    popupAnchor: [3,-39]
});


var eventosIcon = L.icon({
	// attribution: https://es.wikipedia.org/wiki/Archivo:Map_pin_icon.svg
	iconUrl: 'assets/img/red_pin.svg',
	iconSize: [30,40],
	iconAnchor: [12,40],
    popupAnchor: [3,-39]
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(lugaresMap);

lugares_trabajo.forEach(lugar => {
	L.marker(lugar.latlong, {icon: trabajoIcon}).addTo(lugaresMap)
        .bindPopup(lugar.name);
});

lugares_eventos.forEach(lugar => {
    L.marker(lugar.latlong, {icon: eventosIcon}).addTo(lugaresMap)
        .bindPopup(lugar.name + '<br/><a href="mailto:'+lugar.email+'">'+lugar.email+'</a>');
});

var bounds_trabajo = new L.LatLngBounds(lugares_trabajo.map((x) => x.latlong));
var bounds_eventos = new L.LatLngBounds(lugares_eventos.map((x) => x.latlong));
lugaresMap.fitBounds(bounds_trabajo);
lugaresMap.fitBounds(bounds_eventos);
