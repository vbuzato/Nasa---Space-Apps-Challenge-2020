import { fetchData } from './geoapi';

const latitude = '-29.3458742';
const longitude = '-15.6940431';
const baseURL = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14726403.993844409!2d${latitude}!3d${longitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1601728945839!5m2!1spt-BR!2sbr`

const btFind = document.querySelector('.bt-find');
btFind.addEventListener('click', async () => {
  const city = document.querySelector('#input-city').value;
  const result = fetchData(city);
  console.log(result);
  // const map = document.querySelector('iframe');
  // map.src = baseURL;
});

//  setTimeout(() => {
//   document.querySelector('iframe > ').style.display = 'none';
// //   document.querySelector('.gm-inset').style.display = 'none';
//  }, 1000)
 