// Importamos fetch
import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

// Nos traemos los datos de la API
function fetchDatas(urlApi) {
    const datas = fetch(urlApi);
    return datas;
}

// Aquí ya hacemos uso de los datos que nos trae la API
const APIProducts = `${API}/products`;
fetchDatas(APIProducts)
    .then((response) => response.json())
    .then((data) => console.log(data[0]))
    .catch((error) => console.log(error));