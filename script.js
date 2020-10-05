// __________Requisição da Localização__________
async function fetchData(address) {
  const editedAddress = (address) ? address.replace(' ', '+') : null;
  const params = {
    auth: '31727618108010456649x17679',
    locate: address,
    json: '1'
  }

  const fetchGeocode =  await fetch(`https://geocode.xyz/Hauptstr.,+${editedAddress}?json=1`, { params });
  const response = await fetchGeocode.json();
  let latt = response.latt;
  let longt = response.longt;
  return { latt, longt };
}

// __________Rederização dos Satellites__________

function satAround(latt, longt) {
  const rangeLatt = 20.00;
  const rangeLongt = 50.00;
  const satellites = [{ name: 'name01', latt: -35.2227398, longt: -39.2302285 }, { name: 'name02', latt: 15.2227398, longt: 129.2302285 }, { name: 'name03', latt: -15.7727398, longt: -30.8302285 }];

  const satellitesFilter = satellites.filter((satellite) => {
    return satellite.latt < (latt + rangeLatt)
    && satellite.latt > (latt - rangeLatt)
    && satellite.longt < (longt + rangeLongt)
    && satellite.longt > (longt - rangeLongt) 
  });
  return satellitesFilter;
}

// __________Rederização do Mapa__________
async function renderMap(address) {
  document.getElementById('weathermap').innerHTML = "<div id='map' class='map'></div>";
  let { latt, longt } = await fetchData(address);
  const map = await L.map('map');
  const lattNumber = parseFloat(latt);
  const longtNumber = parseFloat(longt);
  //console.log(latt, longt);

  // if (lattNumber !== 26.22510 && longtNumber !== -98.17523) {
  //   map.setView([lattNumber, longtNumber], 5);
  // }

  const arrSatellites = satAround(lattNumber, longtNumber);
  console.log(arrSatellites);
  arrSatellites.forEach((sat) => {
    console.log(sat);
    //L.marker([sat.latt, sat.longt]).addTo(map);

    var imageUrl = 'images/satellite.svg',
    imageBounds = [[sat.latt, sat.longt], [sat.latt + 5, sat.longt + 5]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);


  })

  L.marker([lattNumber, longtNumber]).addTo(map);
  map.setView([lattNumber, longtNumber], 4);

  L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=29nSLs65L7utfzxqP33a', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }).addTo(map);
}



// __________Variáveis e Eventos__________
async function updateMapState() {
  const address = await document.querySelector('#input-address').value;
  await renderMap(address)
}

const btFind = document.querySelector('.bt-find');
btFind.addEventListener('click', () => updateMapState());
const inputFind = document.querySelector('#input-address');
inputFind.addEventListener('keydown', (e) => { if (e.keyCode === 13) updateMapState() });

// __________Execução do Script__________
window.onload = () => {
  renderMap();
}
