console.log("teste");
var map = L.map("map").setView([-15, -55], 5);
L.tileLayer(
  "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=hKsUwUx2YBOu2Scruilx",
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution:
      '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
    crossOrigin: true,
  }
).addTo(map);

var curitiba = L.latLng(-25.4284,-49.2733);
var sp = L.latLng(-23.5489,-46.6388);
var pointList = [curitiba, sp];

let distancia = sp.distanceTo(curitiba);
console.log(distancia);

var firstpolyline = new L.Polyline(pointList, {
  color: 'red',
  weight: 3,
  opacity: 0.5,
  smoothFactor: 1
});
firstpolyline.addTo(map);