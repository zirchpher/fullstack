// importing the fetch module
import fetch from 'node-fetch';
// API URL
const API = 'https://api.escuelajs.co/api/v1';

// function to get data from the API
function fetchData(urlApi) {
    const response = fetch(urlApi, {
        method: 'GET',
    });
    return response;
}

fetchData(`${API}/products`)
    .then((response) => response.json())
    .then((data) => console.log(data.slice(-1)))
    .catch((error) => console.log(error));