import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors', // mode cors es para que el navegador no bloquee la petición 
        credentials: 'same-origin', // optional
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return response;
}

const data = {
    "title": "iPhone 14 Pro Max",
    "description": "iPhone 14 Pro Max feature 6GB of faster RAM, which helps make overall device performance faster and more efficient compared to last year's iPhone 13 Pro.",
    "categoryId": 2,
};

postData(`${API}/products/205`, data)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));