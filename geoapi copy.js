const axios = require('axios');

function fetchData(city) {
  const params = {
    auth: '31727618108010456649x17679',
    locate: city,
    json: '1'
  }
  
  axios.get('https://geocode.xyz', {params})
    .then(response => {
      // console.log(`Latitude: ${response.data.latt}`);
      // console.log(`Longitude: ${response.data.longt}`);
      console.log(`Tudo: ${response.data}`);
      //return response.data;
    }).catch(error => {
      console.log(error);
    });
}

//fetchData('Curitiba')


  // const params = {
  //   auth: '31727618108010456649x17679',
  //   locate: 'Stora Torget 1, 582 19 Linkoping',
  //   json: '1'
  // }
  
  // axios.get('https://geocode.xyz', {params})
  //   .then(response => {
  //     console.log(response.data);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  