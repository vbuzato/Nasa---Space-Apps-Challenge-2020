// __________Requisições NASA__________
async function fetchSatellites() {
  const url = `https://data.ivanstanojevic.me/api/tle?page=20`
  const fetchSat = await fetch(`${url}`)
  const response = await fetchSat.json()
  const satellite = response.member
  const nameId = satellite.map(each => each.line2.slice(2, 7))
  const latLongt = satellite.map(each => each.line2.slice(9, 25))
  const latitude = latLongt.map(each => each.slice(0, 7))
  const longitude = latLongt.map(each => {
    const long = each.slice(8, 16);
    if(long > 180) {
      let longtNumber = long - 360
      return longtNumber.toFixed(7);
    }
    return long;
  })
  let arraySat = [] 
  for(let i = 0; i < nameId.length; i++) {
    arraySat.push({ name:nameId[i], latt: parseFloat(latitude[i]), longt: parseFloat(longitude[i]) })
  }
  return arraySat;
}

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

async function satAround(latt, longt) {
  const rangeLatt = 50.00;
  const rangeLongt = 100.00;
  const satellites = await fetchSatellites();

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
  const arrSatellites = await satAround(lattNumber, longtNumber);
  console.log(arrSatellites);
  arrSatellites.forEach((sat) => {
    console.log(sat);
    var imageUrl = 'images/satellite.svg',
    imageBounds = [[sat.latt, sat.longt], [sat.latt + 5, sat.longt + 5]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
  })
  L.marker([74.0044, -64.6653]).addTo(map);
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
