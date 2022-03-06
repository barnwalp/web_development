/*
const request = new XMLHttpRequest();

let url = 'https://api.genderize.io/';
let params = 'name=binni';

request.open('GET', url+'?'+params, true);

request.onload = function() {
  if (request.status != 200) {
    console.log(`Error ${request.status} : ${request.statusText}`);
  } else {
    // console.log(request.response);
    let data = JSON.parse(request.response);
    console.log(data);
  }
}

request.send();
*/

const request = new XMLHttpRequest();

let url = 'https://geo.ipify.org/api/v2/country,city';
let api_key = 'at_hhw6rSdaSl7lRXarSjrGYNOOi4D2D';
let ip_address = '192.133.23.43';

let final_url = url + "?apiKey=" + api_key + "&ipAddress=" + ip_address;
request.open('GET', final_url, true);

request.onload = function() {
  if (request.status != 200) {
    console.log(`Error ${request.status} : ${request.statusText}`);
  } else {
    // console.log(request.response);
    let data = JSON.parse(request.response);
    console.log(data);
  }
}

request.send();