mapboxgl.accessToken = 'pk.eyJ1IjoibWFwaW50aGVib3giLCJhIjoiY2t1azJsOG4yMzNlbTJvbzM2OTJqb2JzNyJ9.PRAgiMZbC9k3-uoD4eoO3g';

// Create the mapbox map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapinthebox/ckvdytz1m0lcv16qryv703ste',
  center: [-100, 40],
  zoom: 3
});