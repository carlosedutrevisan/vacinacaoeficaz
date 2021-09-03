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
    "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=hKsUwUx2YBOu2Scruilx", {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
        crossOrigin: true,
    }
).addTo(map);

// Adiciona o Marker inicial para technopolis
var iconePreto = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
}); // Seta o icone para preto
let techMarker = L.marker(TEC, { icon: iconePreto }).addTo(map);
techMarker.bindPopup("<h3>Technópolis</h3>").openPopup();

function organizarOrdem(arrayDesor) {
    // nearest neighbour (NN) algorithm
    console.log(arrayDesor);
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

// Essa função faz as linhas no mapa
function fazerLinha(origem, destino) {
    // Ela pega a origem e destino (cordenadas) e manda bala (ver docuemntação do leaflet)
    var polyline = L.polyline([origem, destino], {
        color: "rgb(18, 110, 130)",
        weight: 4,
        opacity: 0.8,
        smoothFactor: 10,
    }).addTo(map);
}

// Essa função faz os cards das origens e destinos dela
function fazerCard(origem, destino) {
    const divDasCards = document.getElementById("rotasLista"); // Pega esse div vazio, de baixo do mapa
    var cartaDaVez = document.createElement("div"); // Cria um novo card para colocar as coisas
    var distanciaDosDoisPontos = origem.distanceTo(destino) / 1000; // Calcula a distancia, só para colocar no card
    cartaDaVez.className = "card"; // Coloca o card como classe card, que tá no css
    cartaDaVez.style = "width: 40%;"; // style do card
    var origemStrign =
        "<p>De " +
        verLugar(origem) +
        " até " +
        verLugar(destino) +
        "<br /></p>" +
        "<p>A distância entre esse dois pontos é de " +
        distanciaDosDoisPontos.toFixed(0) +
        " quilômetros.</p>"; // Testinho do card
    cartaDaVez.innerHTML = origemStrign; // Coloca esse testinho que acabamos de fazer no nosso card
    divDasCards.append(cartaDaVez); // Coloca o card na nossa div vazia
}

// Essa função funciona assim: você dá uma cordenada para ela e ela devolve uma string com a cidade e estado da cordenada
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


// Essa função remove as cordenadas dos estados de uma array
function removerEstadoDaArray(arr, estadoApagar) {
    var i = 0;
    while (i < arr.length) { // Ele meio que ve todas as vezes que tem o estado na array e tira sempre que tiver
        if (arr[i] === estadoApagar) arr.splice(i, 1);
        else i++;
    }
    return arr;
}

// Cria o array que vai ter todas as cordenadas selecionadas
let pontosLinhasEstados = [];
// Aciona a função de pegar estados que vai *pegar os estados* de todos os botões de estados selecionados
pegarEstados();

// Função de pegar estados que vê todos os botões do site
function pegarEstados() {
    // Como é seleção ele pode estar selecionado ou não
    let ACSelect = false; // Ele vai começar como não selecionado
    ACSelectID = document.getElementById("ACSelect"); // Se for clicado ele pode selecionar ou deselecionar
    ACSelectID.onclick = function() {
        if (ACSelect == false) ACSelect = true; // Se ele não tava selecionado ainda, ele seleciona
        else ACSelect = false; // O inverso
        if (ACSelect) { // Como ele tá selecionando, ele vai fazer o push da cordenada do estado no array pontosLinhasEstados
            ACSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(AC);
        } else { // Como ele tá deselecionando, ele vai tirar as cordenadas do estado da array pela função removerEstadoDaArray
            ACSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, AC);
        }
    };

    let ALSelect = false;
    ALSelectID = document.getElementById("ALSelect");
    ALSelectID.onclick = function() {
        if (ALSelect == false) ALSelect = true;
        else ALSelect = false;
        if (ALSelect) {
            ALSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(AL);
        } else {
            ALSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, AL);
        }
    };

    let APSelect = false;
    APSelectID = document.getElementById("APSelect");
    APSelectID.onclick = function() {
        if (APSelect == false) APSelect = true;
        else APSelect = false;
        if (APSelect) {
            APSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(AP);
        } else {
            APSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, AP);
        }
    };

    let AMSelect = false;
    AMSelectID = document.getElementById("AMSelect");
    AMSelectID.onclick = function() {
        if (AMSelect == false) AMSelect = true;
        else AMSelect = false;
        if (AMSelect) {
            AMSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(AM);
        } else {
            AMSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, AM);
        }
    };

    let BASelect = false;
    BASelectID = document.getElementById("BASelect");
    BASelectID.onclick = function() {
        if (BASelect == false) BASelect = true;
        else BASelect = false;
        if (BASelect) {
            BASelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(BA);
        } else {
            BASelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, BA);
        }
    };

    let CESelect = false;
    CESelectID = document.getElementById("CESelect");
    CESelectID.onclick = function() {
        if (CESelect == false) CESelect = true;
        else CESelect = false;
        if (CESelect) {
            CESelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(CE);
        } else {
            CESelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, CE);
        }
    };

    let DFSelect = false;
    DFSelectID = document.getElementById("DFSelect");
    DFSelectID.onclick = function() {
        if (DFSelect == false) DFSelect = true;
        else DFSelect = false;
        if (DFSelect) {
            DFSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(DF);
        } else {
            DFSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, DF);
        }
    };

    let ESSelect = false;
    ESSelectID = document.getElementById("ESSelect");
    ESSelectID.onclick = function() {
        if (ESSelect == false) ESSelect = true;
        else ESSelect = false;
        if (ESSelect) {
            ESSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(ES);
        } else {
            ESSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, ES);
        }
    };

    let GOSelect = false;
    GOSelectID = document.getElementById("GOSelect");
    GOSelectID.onclick = function() {
        if (GOSelect == false) GOSelect = true;
        else GOSelect = false;
        if (GOSelect) {
            GOSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(GO);
        } else {
            GOSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, GO);
        }
    };

    let MASelect = false;
    MASelectID = document.getElementById("MASelect");
    MASelectID.onclick = function() {
        if (MASelect == false) MASelect = true;
        else MASelect = false;
        if (MASelect) {
            MASelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(MA);
        } else {
            MASelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, MA);
        }
    };

    let MTSelect = false;
    MTSelectID = document.getElementById("MTSelect");
    MTSelectID.onclick = function() {
        if (MTSelect == false) MTSelect = true;
        else MTSelect = false;
        if (MTSelect) {
            MTSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(MT);
        } else {
            MTSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, MT);
        }
    };

    let MSSelect = false;
    MSSelectID = document.getElementById("MSSelect");
    MSSelectID.onclick = function() {
        if (MSSelect == false) MSSelect = true;
        else MSSelect = false;
        if (MSSelect) {
            MSSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(MS);
        } else {
            MSSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, MS);
        }
    };

    let MGSelect = false;
    MGSelectID = document.getElementById("MGSelect");
    MGSelectID.onclick = function() {
        if (MGSelect == false) MGSelect = true;
        else MGSelect = false;
        if (MGSelect) {
            MGSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(MG);
        } else {
            MGSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, MG);
        }
    };

    let PASelect = false;
    PASelectID = document.getElementById("PASelect");
    PASelectID.onclick = function() {
        if (PASelect == false) PASelect = true;
        else PASelect = false;
        if (PASelect) {
            PASelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(PA);
        } else {
            PASelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, PA);
        }
    };

    let PBSelect = false;
    PBSelectID = document.getElementById("PBSelect");
    PBSelectID.onclick = function() {
        if (PBSelect == false) PBSelect = true;
        else PBSelect = false;
        if (PBSelect) {
            PBSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(PB);
        } else {
            PBSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, PB);
        }
    };

    let PRSelect = false;
    PRSelectID = document.getElementById("PRSelect");
    PRSelectID.onclick = function() {
        if (PRSelect == false) PRSelect = true;
        else PRSelect = false;
        if (PRSelect) {
            PRSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(PR);
        } else {
            PRSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, PR);
        }
    };

    let PESelect = false;
    PESelectID = document.getElementById("PESelect");
    PESelectID.onclick = function() {
        if (PESelect == false) PESelect = true;
        else PESelect = false;
        if (PESelect) {
            PESelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(PE);
        } else {
            PESelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, PE);
        }
    };

    let PISelect = false;
    PISelectID = document.getElementById("PISelect");
    PISelectID.onclick = function() {
        if (PISelect == false) PISelect = true;
        else PISelect = false;
        if (PISelect) {
            PISelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(PI);
        } else {
            PISelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, PI);
        }
    };

    let RJSelect = false;
    RJSelectID = document.getElementById("RJSelect");
    RJSelectID.onclick = function() {
        if (RJSelect == false) RJSelect = true;
        else RJSelect = false;
        if (RJSelect) {
            RJSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(RJ);
        } else {
            RJSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, RJ);
        }
    };

    let RNSelect = false;
    RNSelectID = document.getElementById("RNSelect");
    RNSelectID.onclick = function() {
        if (RNSelect == false) RNSelect = true;
        else RNSelect = false;
        if (RNSelect) {
            RNSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(RN);
        } else {
            RNSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, RN);
        }
    };

    let RSSelect = false;
    RSSelectID = document.getElementById("RSSelect");
    RSSelectID.onclick = function() {
        if (RSSelect == false) RSSelect = true;
        else RSSelect = false;
        if (RSSelect) {
            RSSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(RS);
        } else {
            RSSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, RS);
        }
    };

    let ROSelect = false;
    ROSelectID = document.getElementById("ROSelect");
    ROSelectID.onclick = function() {
        if (ROSelect == false) ROSelect = true;
        else ROSelect = false;
        if (ROSelect) {
            ROSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(RO);
        } else {
            ROSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, RO);
        }
    };

    let RRSelect = false;
    RRSelectID = document.getElementById("RRSelect");
    RRSelectID.onclick = function() {
        if (RRSelect == false) RRSelect = true;
        else RRSelect = false;
        if (RRSelect) {
            RRSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(RR);
        } else {
            RRSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, RR);
        }
    };

    let SCSelect = false;
    SCSelectID = document.getElementById("SCSelect");
    SCSelectID.onclick = function() {
        if (SCSelect == false) SCSelect = true;
        else SCSelect = false;
        if (SCSelect) {
            SCSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(SC);
        } else {
            SCSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, SC);
        }
    };

    let SPSelect = false;
    SPSelectID = document.getElementById("SPSelect");
    SPSelectID.onclick = function() {
        if (SPSelect == false) SPSelect = true;
        else SPSelect = false;
        if (SPSelect) {
            SPSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(SP);
        } else {
            SPSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, SP);
        }
    };

    let SESelect = false;
    SESelectID = document.getElementById("SESelect");
    SESelectID.onclick = function() {
        if (SESelect == false) SESelect = true;
        else SESelect = false;
        if (SESelect) {
            SESelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(SE);
        } else {
            SESelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, SE);
        }
    };

    let TOSelect = false;
    TOSelectID = document.getElementById("TOSelect");
    TOSelectID.onclick = function() {
        if (TOSelect == false) TOSelect = true;
        else TOSelect = false;
        if (TOSelect) {
            TOSelectID.className = "cardBotaoSimClick";
            pontosLinhasEstados.push(TO);
        } else {
            TOSelectID.className = "cardBotaoNaoClick";
            removerEstadoDaArray(pontosLinhasEstados, TO);
        }
    };

}

document.getElementById("botaoanimado").onclick = function() {
    organizarOrdem(pontosLinhasEstados);
};