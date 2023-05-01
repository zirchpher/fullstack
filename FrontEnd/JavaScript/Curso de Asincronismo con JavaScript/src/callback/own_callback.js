// Cómo funciona un CallBack
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);

    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
            else {
                const error = new Error('Error en: ' + urlApi);
                return callback(error, null);
            }
        }
    };
    xhttp.send();
};

fetchData(`${API}/products`, (thereIsError, datas) => {
    if (thereIsError) return console.error(thereIsError);

    console.log(datas[1]);
});