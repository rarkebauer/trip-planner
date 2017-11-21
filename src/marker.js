const mapBox = require('mapbox-gl');

const buildMarker = function(type, coordinateArr) {
    markerDomEl = document.createElement("div");
    // console.log(type);
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

    if (type === "Activity") {
        markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
    } else if (type === "Hotel") {
        markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
    } else {
        markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
    }

    
    return new mapBox.Marker(markerDomEl).setLngLat(coordinateArr);
}

module.exports = buildMarker; 