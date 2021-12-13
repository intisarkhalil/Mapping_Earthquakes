// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30.1975, -97.6664], 5);
// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664], 
  [43.6777, -79.6248],
  [40.6413, -73.7781]
  
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: '5, 5', 
  dashOffset: '0',
  weight:4,
  opasity:0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.6532, -79.3832],
  zoom: 2,
  layers: [dark]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/intisarkhalil/Mapping_Earthquakes/main/torontoRoutes.json";
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  style: myStyle,
  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup("<h3>Airport:" + feature.properties.airline + 
    "</h3><h3> Destination:" + feature.properties.dst + "</h3>")
  }
}
).addTo(map)
});
