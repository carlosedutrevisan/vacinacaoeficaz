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

// Quando o 'testeBotao' for clicado, executa a função fazerLinha()
document.getElementById('testeBotao').onclick = function () { fazerLinha() };

function fazerLinha() {

  // Criação de variaveis do tipo LatLong de PR e SP
  const AC = L.latLng(-8.774923453234832, -70.7924176887652);
  const AL = L.latLng(-9.670012731362664, -36.61240787146648);
  const AP = L.latLng(0.041642998897892525, -51.055836918225644);
  const AM = L.latLng(-3.0802121245764984, -60.032562581423356);
  const BA = L.latLng(-12.977575946740012, -38.50196897959748);
  const CE = L.latLng(-3.728212294433311, -38.525117309581205);
  const ES = L.latLng(-20.27863519798479, -40.292915546998934);
  const GO = L.latLng(-16.685647532204754, -49.26616338770563)
  const MA = L.latLng(-2.5313031893117364, -44.29520115699613);
  const MT = L.latLng(-15.59305374235488, -56.107300612569745);
  const MS = L.latLng(-20.477827428370965, -54.61494299514637);
  const MG = L.latLng(-19.90987764455913, -43.93814666397501);
  const PA = L.latLng(-1.4578061219139558, -48.503625350164214);
  const PB = L.latLng(-7.120168680307714, -34.88110963204021);
  const PR = L.latLng(-25.43801663226879, -49.27058010993872);
  const PE = L.latLng(-8.059826650209363, -34.8863593088734);
  const PI = L.latLng(-5.094408389062396, -42.80082518788616);
  const RJ = L.latLng(-22.90743315129049, -43.174347366545625);
  const RN = L.latLng(-5.783071221978675, -35.20081945185408);
  const RS = L.latLng(-30.039867784821368, -51.20392875164791);
  const RO = L.latLng(-8.740384737276411, -63.845651329994865);
  const RR = L.latLng(2.8195137628013964, -60.71131961246784);
  const SC = L.latLng(-27.59169568182629, -48.534505282003984);
  const SP = L.latLng(-23.5253466704275, -46.653260364514196);
  const SE = L.latLng(-10.926937202132311, -37.065818770249415);
  const TO = L.latLng(-10.250592736260634, -48.32526386846129);
  const DF = L.latLng(-15.75467391238458, -47.89675639486514);

  var origem = document.getElementById("origem").value;
  var destino = document.getElementById("destino").value;
  console.log(origem)

  switch (origem) {
    case "AC":
      origem = PR;
      break;
    case "AL":
      origem = AL;
      break;
    case "AP":
      origem = AP;
      break;
    case "AM":
      origem = AM;
      break;
    case "BA":
      origem = BA;
      break;
    case "CE":
      origem = CE;
      break;
    case "ES":
      origem = ES;
      break;
    case "GO":
      origem = GO;
      break;
    case "MA":
      origem = MA;
      break;
    case "MT":
      origem = MT;
      break;
    case "MS":
      origem = MS;
      break;
    case "MG":
      origem = MG;
      break;
    case "PA":
      origem = PA;
      break;
    case "PB":
      origem = PB;
      break;
    case "PR":
      origem = PR;
      break;
    case "PE":
      origem = PE;
      break;
    case "PI":
      origem = PI;
      break;
    case "RJ":
      origem = RJ;
      break;
    case "RN":
      origem = RN;
      break;
    case "RS":
      origem = RS;
      break;
    case "RO":
      origem = RO;
      break;
    case "RR":
      origem = RR;
      break;
    case "SC":
      origem = SC;
      break;
    case "SP":
      origem = SP;
      break;
    case "SE":
      origem = SE;
      break;
    case "TO":
      origem = TO;
      break;
    case "DF":
      origem = DF;
      break;

    default:
      break;
  }
  switch (destino) {
    case "AC":
      destino = PR;
      break;
    case "AL":
      destino = AL;
      break;
    case "AP":
      destino = AP;
      break;
    case "AM":
      destino = AM;
      break;
    case "BA":
      destino = BA;
      break;
    case "CE":
      destino = CE;
      break;
    case "ES":
      destino = ES;
      break;
    case "GO":
      destino = GO;
      break;
    case "MA":
      destino = MA;
      break;
    case "MT":
      destino = MT;
      break;
    case "MS":
      destino = MS;
      break;
    case "MG":
      destino = MG;
      break;
    case "PA":
      destino = PA;
      break;
    case "PB":
      destino = PB;
      break;
    case "PR":
      destino = PR;
      break;
    case "PE":
      destino = PE;
      break;
    case "PI":
      destino = PI;
      break;
    case "RJ":
      destino = RJ;
      break;
    case "RN":
      destino = RN;
      break;
    case "RS":
      destino = RS;
      break;
    case "RO":
      destino = RO;
      break;
    case "RR":
      destino = RR;
      break;
    case "SC":
      destino = SC;
      break;
    case "SP":
      destino = SP;
      break;
    case "SE":
      destino = SE;
      break;
    case "TO":
      destino = TO;
      break;
    case "DF":
      destino = DF;
      break;

    default:
      break;
  }

  var pointList = [origem, destino];

  // Teste da função de distancia
  let distancia = origem.distanceTo(destino);
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