let latt = 0;
let longt = 0;
let init = 0;

async function fetchData(address) {
  const editedAddress = address.replace(' ', '+');
  const params = {
    auth: '31727618108010456649x17679',
    locate: address,
    json: '1'
  }
  
  const fetchGeocode =  await fetch(`https://geocode.xyz/Hauptstr.,+${editedAddress}?json=1`, { params });
  const response = await fetchGeocode.json();
  latt = response.latt;
  longt = response.longt;
  // console.log(`Latitude: ${response.latt}`);
  // console.log(`Longitude: ${response.longt}`);
  console.log(`Tudo: ${JSON.stringify(response)}`);
  //const map = L.map('map').panTo([latt, longt], 3);
  renderMap()
}
function updateMapState() {
  const address = document.querySelector('#input-address').value;
  fetchData(address);
}

const btFind = document.querySelector('.bt-find');
btFind.addEventListener('click', () => updateMapState());
const inputFind = document.querySelector('#input-address');
inputFind.addEventListener('keydown', (e) => { if (e.keyCode === 13) updateMapState() });

function renderMap() {
  const map = L.map('map');
  (init === 0) ? map.setView([latt, longt], 3) : map.viewreset([latt, longt], 3);
  init += 1;
  let marker;
  if (latt !== 0 && longt !== 0) {
    //const mapContent = document.querySelector('#map').innerHTML = '';
    marker = L.marker([latt, longt]).addTo(map);
  }

  // https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=29nSLs65L7utfzxqP33a
  // https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=29nSLs65L7utfzxqP33a

  L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=29nSLs65L7utfzxqP33a', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }).addTo(map);
}
renderMap();
