import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi, id) {
    const response = fetch(`${urlApi}/products/${id}`, {
        method: 'DELETE',
        // in headers we have to specify the type of data we are sending
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response;
}

deleteData(API, 201)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));