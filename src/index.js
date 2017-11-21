const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker')


mapboxgl.accessToken = 'pk.eyJ1IjoiZXdlaWw1MDUiLCJhIjoiY2phOXV6ejA4MGw0djJ3cTlueXk2ZmN2YSJ9.BtM-8_ccNMBf7ZMgiVhqIw';


const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.795],
    zoom: 12,
    style: 'mapbox://styles/mapbox/streets-v10'
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("Hotel", [-74.009, 40.705]);
marker.addTo(map);



