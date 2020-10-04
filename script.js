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

// __________Rederização do Mapa__________
async function renderMap(address) {
  document.getElementById('weathermap').innerHTML = "<div id='map' class='map'></div>";
  let { latt, longt } = await fetchData(address);
  const map = await L.map('map');
  const lattNumber = parseFloat(latt);
  const longtNumber = parseFloat(longt);
  console.log(latt, longt);
  if (lattNumber !== 26.22510 && longtNumber !== -98.17523) {
    map.setView([lattNumber, longtNumber], 5);
  }

  L.marker([lattNumber, longtNumber]).addTo(map);
  map.setView([lattNumber, longtNumber], 3);

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
