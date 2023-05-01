import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors', // mode cors es para que el navegador no bloquee la petición 
        credentials: 'same-origin', // optional
        // in headers we have to specify the type of data we are sending
        headers: {
            'Content-Type': 'application/json',
        },
        // Json.stringify() method converts a JavaScript object or value to a JSON string
        body: JSON.stringify(data),
    });

    return response;
}

const data = {
    "title": "iPhone 14 Pro Max",
    "price": 1599,
    "description": "iPhone 14 Pro Max feature 6GB of faster RAM, which helps make overall device performance faster and more efficient compared to last year's iPhone 13 Pro.",
    "categoryId": 1,
    "images": ["https://www.teknoburada.net/wp-content/uploads/2022/09/iPhone-14-Pro-Max-4.jpeg"]
};


postData(`${API}/products`, data)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));