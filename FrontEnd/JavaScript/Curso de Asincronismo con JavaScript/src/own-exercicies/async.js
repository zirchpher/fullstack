import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchDatas(urlApi) {
    // Si quieres usar sus métodos GET, POST, PUT O DELETE
    // fetch(urlApi, options) => ahí está la respuesta mi king
    const response = await fetch(urlApi);
    const datas = response.json();
    return datas;
}

async function showData(urlApi) {
    try {
        const products = await fetchDatas(`${urlApi}/products`);
        console.log(products[0]);
    }
    catch (error) {
        console.error(error);
    }
}

showData(API);