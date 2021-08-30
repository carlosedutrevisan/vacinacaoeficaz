// Criação do mapa setando para o Brasil em um zoom que pega tudo
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

// Verifica se o botao foi clicado, se sim ele vai na função fazerLinha()
document.getElementById('testeBotao').onclick = function () { fazerLinha() };

function fazerLinha() {

  // Criação de variaveis do tipo LatLong de Curitiba e SP
  var curitiba = L.latLng(-25.4284, -49.2733);
  var sp = L.latLng(-23.5489, -46.6388);
  var floripa = L.latLng(-27.5969, -48.5495);
  var pointList = [floripa, curitiba, sp];

  // Teste da função de distancia
  let distancia = sp.distanceTo(curitiba);
  console.log(distancia);

  // Teste da função de crianção de linhas no mapa
  var primeiraLinha = new L.Polyline(pointList, {
    color: 'blue',
    weight: 3,
    opacity: 0.6,
    smoothFactor: 10
  });
  primeiraLinha.addTo(map);

  // Seta o mapa para focar nas linhas
  map.setView(primeiraLinha.getCenter(), 6);
}