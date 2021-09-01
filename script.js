const TEC = L.latLng({ lat: -23.9618, lng: -46.3322 });
const AC = L.latLng({ lat: -8.774923453234832, lng: -70.7924176887652 });
const AL = L.latLng({ lat: -9.670012731362664, lng: -36.61240787146648 });
const AP = L.latLng({ lat: 0.041642998897892525, lng: -51.055836918225644 });
const AM = L.latLng({ lat: -3.0802121245764984, lng: -60.032562581423356 });
const BA = L.latLng({ lat: -12.977575946740012, lng: -38.50196897959748 });
const CE = L.latLng({ lat: -3.728212294433311, lng: -38.525117309581205 });
const ES = L.latLng({ lat: -20.27863519798479, lng: -40.292915546998934 });
const GO = L.latLng({ lat: -16.685647532204754, lng: -49.26616338770563 });
const MA = L.latLng({ lat: -2.5313031893117364, lng: -44.29520115699613 });
const MT = L.latLng({ lat: -15.59305374235488, lng: -56.107300612569745 });
const MS = L.latLng({ lat: -20.477827428370965, lng: -54.61494299514637 });
const MG = L.latLng({ lat: -19.90987764455913, lng: -43.93814666397501 });
const PA = L.latLng({ lat: -1.4578061219139558, lng: -48.503625350164214 });
const PB = L.latLng({ lat: -7.120168680307714, lng: -34.88110963204021 });
const PR = L.latLng({ lat: -25.43801663226879, lng: -49.27058010993872 });
const PE = L.latLng({ lat: -8.059826650209363, lng: -34.8863593088734 });
const PI = L.latLng({ lat: -5.094408389062396, lng: -42.80082518788616 });
const RJ = L.latLng({ lat: -22.90743315129049, lng: -43.174347366545625 });
const RN = L.latLng({ lat: -5.783071221978675, lng: -35.20081945185408 });
const RS = L.latLng({ lat: -30.039867784821368, lng: -51.20392875164791 });
const RO = L.latLng({ lat: -8.740384737276411, lng: -63.845651329994865 });
const RR = L.latLng({ lat: 2.8195137628013964, lng: -60.71131961246784 });
const SC = L.latLng({ lat: -27.59169568182629, lng: -48.534505282003984 });
const SP = L.latLng({ lat: -23.5253466704275, lng: -46.653260364514196 });
const SE = L.latLng({ lat: -10.926937202132311, lng: -37.065818770249415 });
const TO = L.latLng({ lat: -10.250592736260634, lng: -48.32526386846129 });
const DF = L.latLng({ lat: -15.75467391238458, lng: -47.89675639486514 });

function pegarCoords(estados) {
  let coordsPontos = [TEC];
  if (estados.includes("AC")) coordsPontos.push(AC);
  if (estados.includes("AL")) coordsPontos.push(AL);
  if (estados.includes("AP")) coordsPontos.push(AP);
  if (estados.includes("AM")) coordsPontos.push(AM);
  if (estados.includes("BA")) coordsPontos.push(BA);
  if (estados.includes("CE")) coordsPontos.push(CE);
  if (estados.includes("ES")) coordsPontos.push(ES);
  if (estados.includes("GO")) coordsPontos.push(GO);
  if (estados.includes("MA")) coordsPontos.push(MA);
  if (estados.includes("MT")) coordsPontos.push(MT);
  if (estados.includes("MS")) coordsPontos.push(MS);
  if (estados.includes("MG")) coordsPontos.push(MG);
  if (estados.includes("PA")) coordsPontos.push(PA);
  if (estados.includes("PB")) coordsPontos.push(PB);
  if (estados.includes("PR")) coordsPontos.push(PR);
  if (estados.includes("PE")) coordsPontos.push(PE);
  if (estados.includes("PI")) coordsPontos.push(PI);
  if (estados.includes("RJ")) coordsPontos.push(RJ);
  if (estados.includes("RN")) coordsPontos.push(RN);
  if (estados.includes("RS")) coordsPontos.push(RS);
  if (estados.includes("RO")) coordsPontos.push(RO);
  if (estados.includes("RR")) coordsPontos.push(RR);
  if (estados.includes("SC")) coordsPontos.push(SC);
  if (estados.includes("AM")) coordsPontos.push(AM);
  if (estados.includes("SP")) coordsPontos.push(SP);
  if (estados.includes("SE")) coordsPontos.push(SE);
  if (estados.includes("TO")) coordsPontos.push(TO);
  if (estados.includes("DF")) coordsPontos.push(DF);
  return coordsPontos;
}

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

// Adiciona o Marker inicial para technopolis
var iconePreto = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
}); // Seta o icone para preto
let techMarker = L.marker(TEC, { icon: iconePreto }).addTo(map);
techMarker.bindPopup("<h3>Technópolis</h3>").openPopup();

// Quando o 'testeBotao' for clicado, executa a função fazerLinha()
document.getElementById("testeBotao").onclick = function () {
  pegarEstados();
};

function pegarEstados() {
  let selecEstados = document.getElementById("selecEstados");
  let selecEstadosSim = [...selecEstados.selectedOptions].map(
    (option) => option.value
  );
  let pontosLinhasEstados = pegarCoords(selecEstadosSim);
  console.log(pontosLinhasEstados);
  
  var linhaEstados = new L.Polyline(pontosLinhasEstados, {
    color: "blue",
    weight: 3,
    opacity: 0.6,
    smoothFactor: 10,
  }).addTo(map);
}

function fazerLinha() {
  // Criação de variaveis do tipo LatLong de PR e SP
  var origem = document.getElementById("origem").value;
  var destino = document.getElementById("destino").value;
  //console.log(origem);

  switch (origem) {
    case "AC":
      origem = AC;
      origemPopup = "Rio Branco - Acre";
      break;
    case "AL":
      origem = AL;
      origemPopup = "Maceió - Alagoas";
      break;
    case "AP":
      origem = AP;
      origemPopup = "Macapá - Amapá";
      break;
    case "AM":
      origem = AM;
      origemPopup = "Manaus - Amazonas";
      break;
    case "BA":
      origem = BA;
      origemPopup = "Salvador - Bahia";
      break;
    case "CE":
      origem = CE;
      origemPopup = "Fortaleza - Ceará";
      break;
    case "ES":
      origem = ES;
      origemPopup = "Vitória - Espírito Santo";
      break;
    case "GO":
      origem = GO;
      origemPopup = "Goiânia - Goiás";
      break;
    case "MA":
      origem = MA;
      origemPopup = "São Luís - Maranhão";
      break;
    case "MT":
      origem = MT;
      origemPopup = "Cuiabá - Mato Grosso";
      break;
    case "MS":
      origem = MS;
      origemPopup = "Campo Grande - Mato Grosso do Sul";
      break;
    case "MG":
      origem = MG;
      origemPopup = "Belo Horizonte - Minas Gerais";
      break;
    case "PA":
      origem = PA;
      origemPopup = "Belém - Pará";
      break;
    case "PB":
      origem = PB;
      origemPopup = "João Pessoa - Paraíba";
      break;
    case "PR":
      origem = PR;
      origemPopup = "Curitiba - Paraná";
      break;
    case "PE":
      origem = PE;
      origemPopup = "Recife - Pernambuco";
      break;
    case "PI":
      origem = PI;
      origemPopup = "Teresina - Piauí";
      break;
    case "RJ":
      origem = RJ;
      origemPopup = "Rio de Janeiro - Rio de Janeiro";
      break;
    case "RN":
      origem = RN;
      origemPopup = "Natal - Rio Grande do Norte";
      break;
    case "RS":
      origem = RS;
      origemPopup = "Porto Alegre - Rio Grande do Sul";
      break;
    case "RO":
      origem = RO;
      origemPopup = "Porto Velho - Rondônia";
      break;
    case "RR":
      origem = RR;
      origemPopup = "Boa Vista - Roraima";
      break;
    case "SC":
      origem = SC;
      origemPopup = "Florianópolis - Santa Catarina";
      break;
    case "SP":
      origem = SP;
      origemPopup = "São Paulo - São Paulo";
      break;
    case "SE":
      origem = SE;
      origemPopup = "Aracaju - Sergipe";
      break;
    case "TO":
      origem = TO;
      origemPopup = "Palmas - Tocantins";
      break;
    case "DF":
      origem = DF;
      origemPopup = "Brasília - Distrito Federal";
      break;

    default:
      break;
  }
  switch (destino) {
    case "AC":
      destino = PR;
      destinoPopup = "Rio Branco - Acre";
      break;
    case "AL":
      destino = AL;
      destinoPopup = "Maceió - Alagoas";
      break;
    case "AP":
      destino = AP;
      destinoPopup = "Macapá - Amapá";
      break;
    case "AM":
      destino = AM;
      destinoPopup = "Manaus - Amazonas";
      break;
    case "BA":
      destino = BA;
      destinoPopup = "Salvador - Bahia";
      break;
    case "CE":
      destino = CE;
      destinoPopup = "Fortaleza - Ceará";
      break;
    case "ES":
      destino = ES;
      destinoPopup = "Vitória - Espírito Santo";
      break;
    case "GO":
      destino = GO;
      destinoPopup = "Goiânia - Goiás";
      break;
    case "MA":
      destino = MA;
      destinoPopup = "São Luís - Maranhão";
      break;
    case "MT":
      destino = MT;
      destinoPopup = "Cuiabá - Mato Grosso";
      break;
    case "MS":
      destino = MS;
      destinoPopup = "Campo Grande - Mato Grosso do Sul";
      break;
    case "MG":
      destino = MG;
      destinoPopup = "Belo Horizonte - Minas Gerais";
      break;
    case "PA":
      destino = PA;
      destinoPopup = "Belém - Pará";
      break;
    case "PB":
      destino = PB;
      destinoPopup = "João Pessoa - Paraíba";
      break;
    case "PR":
      destino = PR;
      destinoPopup = "Curitiba - Paraná";
      break;
    case "PE":
      destino = PE;
      destinoPopup = "Recife - Pernambuco";
      break;
    case "PI":
      destino = PI;
      destinoPopup = "Teresina - Piauí";
      break;
    case "RJ":
      destino = RJ;
      destinoPopup = "Rio de Janeiro - Rio de Janeiro";
      break;
    case "RN":
      destino = RN;
      destinoPopup = "Natal - Rio Grande do Norte";
      break;
    case "RS":
      destino = RS;
      destinoPopup = "Porto Alegre - Rio Grande do Sul";
      break;
    case "RO":
      destino = RO;
      destinoPopup = "Porto Velho - Rondônia";
      break;
    case "RR":
      destino = RR;
      destinoPopup = "Boa Vista - Roraima";
      break;
    case "SC":
      destino = SC;
      destinoPopup = "Florianópolis - Santa Catarina";
      break;
    case "SP":
      destino = SP;
      destinoPopup = "São Paulo - São Paulo";
      break;
    case "SE":
      destino = SE;
      destinoPopup = "Aracaju - Sergipe";
      break;
    case "TO":
      destino = TO;
      destinoPopup = "Palmas - Tocantins";
      break;
    case "DF":
      destino = DF;
      destinoPopup = "Brasília - Distrito Federal";
      break;

    default:
      break;
  }

  var pointList = [origem, destino];

  // Teste da função de crianção de linhas no mapa
  var primeiraLinha = new L.Polyline(pointList, {
    color: "blue",
    weight: 3,
    opacity: 0.6,
    smoothFactor: 10,
  });

  // Teste da função de distancia
  let distancia = origem.distanceTo(destino);
  let distanciaPopUp =
    "<h4>A distância entre " +
    origemPopup +
    " e " +
    destinoPopup +
    " é de: " +
    parseFloat((distancia / 1000).toFixed(1)) +
    " quilômetros.</h4>";

  primeiraLinha.addTo(map);
  primeiraLinha.bindPopup(distanciaPopUp);

  let origemPopUpText = "<h3>" + origemPopup + "</h3>"; // Aparece como heading no PopUp
  let destinoPopUpText = "<h3>" + destinoPopup + "</h3>";
  L.marker(origem).addTo(map).bindPopup(origemPopUpText);
  L.marker(destino).addTo(map).bindPopup(destinoPopUpText);

  // Seta o mapa para focar nas linhas
  map.setView(primeiraLinha.getCenter(), 6);
}
