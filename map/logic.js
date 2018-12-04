// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        document.write( "Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat=position.coords.latitude ;
    let longi=position.coords.longitude;

let pos=[lat,longi];
const myMap = L.map("map", {
  center: pos,
  zoom: 13
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
const marker = L.marker(pos, {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);
myMap.on('load', function(e) {
  // Add the data to your map as a layer
  myMap.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: hospitals
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
});
}
// Binding a pop-up to our marker
// marker.bindPopup("Hello There!");
