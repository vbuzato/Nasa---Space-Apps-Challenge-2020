let latt;
let longt;

async function fetchData(address) {
  const editedAddress = address.replace(' ', '+');
  const params = {
    auth: '31727618108010456649x17679',
    locate: address,
    json: '1'
  }
  
  const fetchGeocode =  await fetch(`https://geocode.xyz/Hauptstr.,+${editedAddress}?json=1`, { params });
  const response = await fetchGeocode.json();
  console.log(`Latitude: ${response.latt}`);
  console.log(`Longitude: ${response.longt}`);
  console.log(`Tudo: ${JSON.stringify(response)}`);
}

const btFind = document.querySelector('.bt-find');
btFind.addEventListener('click', async () => {
  
  const address = document.querySelector('#input-city').value;
  fetchData(address);

  const baseURL = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14726403.993844409!2d${latt}!3d${longt}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1601728945839!5m2!1spt-BR!2sbr`
  const map = document.querySelector('iframe');
  map.src = baseURL;
});
