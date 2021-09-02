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
  let coordsPontos = [];
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
  organizarOrdem(pontosLinhasEstados);
}

function organizarOrdem(arrayDesor) {
  let arrayOrgan = [TEC];
  let counter = arrayDesor.length;
  for (let i = 0; i < counter; i++) {
    let menorDist, menorDistID;
    for (let j = 0; j < arrayDesor.length; j++) {
      let davezOrg = arrayOrgan[arrayOrgan.length - 1];
      let davezDesorg = arrayDesor[j];
      let tmpDist = davezOrg.distanceTo(davezDesorg);
      if (j == 0) {
        menorDist = tmpDist;
        menorDistID = j;
      } else if (tmpDist < menorDist) {
        menorDist = tmpDist;
        menorDistID = j;
      }
    }
    arrayOrgan.push(arrayDesor[menorDistID]);
    arrayDesor.splice(menorDistID, 1);

    let coords = [
      arrayOrgan[arrayOrgan.length - 2],
      arrayOrgan[arrayOrgan.length - 1],
    ];

    fazerLinha(coords[0], coords[1]);
    fazerCard(coords[0], coords[1]);
  }
}

function fazerLinha(origem, destino) {
  var polyline = L.polyline([origem, destino], {
    color: "rgb(18, 110, 130)",
    weight: 4,
    opacity: 0.8,
    smoothFactor: 10,
  }).addTo(map);
}

function fazerCard(origem, destino) {
  const divDasCards = document.getElementById("rotasLista");
  var cartaDaVez = document.createElement("div");
  cartaDaVez.className = "card";
  cartaDaVez.style = "width: 40%;";

  var origemStrign =
    "De " + verLugar(origem) + " até " + verLugar(destino);

  cartaDaVez.innerText = origemStrign;
  divDasCards.append(cartaDaVez);
}

function verLugar(lugar) {
  if (lugar == TEC) return "Technópolis";
  if (lugar == SP) return "São Paulo - São Paulo";
  if (lugar == AC) return "Rio Branco - Acre";
  if (lugar == AL) return "Maceió - Alagoas";
  if (lugar == AP) return "Macapá - Amapá";
  if (lugar == AM) return "Manaus - Amazonas";
  if (lugar == BA) return "Salvador - Bahia";
  if (lugar == CE) return "Fortaleza - Ceará";
  if (lugar == ES) return "Vitória - Espírito Santo";
  if (lugar == GO) return "Goiânia - Goiás";
  if (lugar == MA) return "São Luís - Maranhão";
  if (lugar == MT) return "Cuiabá - Mato Grosso";
  if (lugar == MS) return "Campo Grande - Mato Grosso do Sul";
  if (lugar == MG) return "Belo Horizonte - Minas Gerais";
  if (lugar == PA) return "Belém - Pará";
  if (lugar == PB) return "João Pessoa - Paraíba";
  if (lugar == PR) return "Curitiba - Paraná";
  if (lugar == PE) return "Recife - Pernambuco";
  if (lugar == PI) return "Teresina - Piauí";
  if (lugar == RJ) return "Rio de Janeiro - Rio de Janeiro";
  if (lugar == RN) return "Natal - Rio Grande do Norte";
  if (lugar == RS) return "Porto Alegre - Rio Grande do Sul";
  if (lugar == RO) return "Porto Velho - Rondônia";
  if (lugar == RR) return "Boa Vista - Roraima";
  if (lugar == SC) return "Florianópolis - Santa Catarina";
  if (lugar == SP) return "São Paulo - São Paulo";
  if (lugar == SE) return "Aracaju - Sergipe";
  if (lugar == TO) return "Palmas - Tocantins";
  if (lugar == DF) return "Brasília - Distrito Federal";
}
