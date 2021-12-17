# Mapping Earthquakes
In this project we used Leaflet and GeoJSON to visually display Earthquake data on three maps: Street Map, Satellite Map and, Dark Map.
## Purpose:
The purpose of this project is to visually show the earthquake data all over the world for the last 7days, in relation to the tectonic plates’ location on the earth, and all the earthquakes with a magnitude greater than 4.5 on the map. 
## Methodology:
To complete this project, we used a GeoJSON earthquake data [Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson) from the USGS website and retrieved geographical coordinates and the magnitudes of earthquakes for the last seven days. And then:
1.	Add Tectonic Plate Data.
2.	Add Major Earthquake Data
    -	Pass the tectonic plate data to the ```geoJSON()``` layer.
    -	```Style``` the lines with a color and ```weight``` that will make it stand out on all maps.
    -	Add the tectonic layer group variable you created in Step 1 to the map, i.e., ```.addTo(tectonicPlates)``` and close the ``` geoJSON() ``` layer.
    -	Next, add the tectonic layer group variable to the map, i.e, ``` tectonicPlates.addTo(map) ```. 
    -	Finally, close the ```cd3.json()``` callback.

3.	Add an Additional Map.
We add a Dark map using MapBox styles Map (```dark-v10```).
## Results and Summary:
When you load the page, it defaults to the Streets view with both the Earthquakes and Tectonic Plate overlays engaged. The legend shows you the color coding for various magnitudes.
### Dark Map:

![Screenshot (449)](https://user-images.githubusercontent.com/62036983/146492424-ea9b2527-0eb4-472d-9d74-926c20093e23.png)

### Streets Map:

![Screenshot (448)](https://user-images.githubusercontent.com/62036983/146492451-9c27cb48-53bc-4515-b3a3-8cc59d950672.png)

### Satellite Map:

![Screenshot (447)](https://user-images.githubusercontent.com/62036983/146492484-08d548b0-2fab-4cb1-8400-969b661e06cc.png)
