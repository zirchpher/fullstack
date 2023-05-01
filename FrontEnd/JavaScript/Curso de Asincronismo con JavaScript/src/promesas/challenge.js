// importing fetch module
import fetch from 'node-fetch';

const API = "https://api.escuelajs.co/api/v1";

// short version
// fetch(`${API}/products`)
//     .then(datas => datas.json())
//     .then(datas => console.log(datas[0]));

// Long version
function fetchData(urlApi) {
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then(datas => datas.json())
    .then(datas => console.log(datas[0]))
    .catch(error => console.log(error));