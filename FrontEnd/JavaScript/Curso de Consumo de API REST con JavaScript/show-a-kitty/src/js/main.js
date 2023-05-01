/*
    ------------------ URL_API ----------------- |---Endpoint---| Query Params 
    ? Una api url = https://api.thecatapi.com/v1 /images/search ?limit=4
    * End Points:
    * En end point es una parte de la url que nos permite acceder a un recurso
    * de una api. En este caso, el recurso es una imagen de un gato.
    * 
    * Query Parameters:
    * El parámetro limit es opcional, si no se envía, por defecto es 1.
    * En este caso, le hemos dicho que nos traiga como máximo 4 imágenes de gatos.
*/

async function fetchKittyData(urlApi) {
    try {
        // console.log(response.status); // Me muestra el código de estado de la respuesta
        const response = await fetch(urlApi);
        const status = response.status;
        if (status >= 299) errorMessage.innerHTML = `Error de petición HTTP: ERROR ${status}`;

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error.message);
        const errorNode = document.querySelector('#error');
        errorNode.innerText = `Error: ${error.message}`;
    }
}

async function loadRandomCats() {
    try {
        const kittyData = await fetchKittyData(`${API_URL}?limit=2&api_key=${API_KEY}`);
        // imgKitty recive una NodeList porque usamos un querySelectorAll
        // El parámetro item es cada uno de los elementos de la NodeList
        // El parámetro index es el índice de cada uno de los elementos de la NodeList
        const imgKitty = document.querySelectorAll('#image-kitty');
        imgKitty.forEach((item, index) => {
            item.src = kittyData[index].url;
            const idImageCat = kittyData[index].id;
            item.parentElement.setAttribute('data-id', idImageCat);
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function saveFavoriteCat(idImageCat) {
    try {
        console.log("Entraste a saveFavoriteCat");
        console.log("idImageCat dentro de saveFavoriteCat es :", idImageCat);
        const response = await fetch(`${API_URL_FAVOURITES}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Lee estamos mandando un objeto pero se tiene que convertir a JSON porque así lo pide la API
            body: JSON.stringify({ image_id: idImageCat }),
        });

        const allGood = response.ok;
        (allGood)
            ? alert("Se guardó el michi en favoritos")
            : alert("No se pudo guardar el michi en favoritos");
    }
    catch (error) {
        console.error(`Error in ${error}`)
    }
}

const btnShowOtherKitty = document.querySelector('#btn-show-other-kitty');
const btnAddFavoriteCats = document.querySelectorAll('#add-favorite-cats');
const errorMessage = document.querySelector('#error-message');


const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = "live_ha5rFVUqOh66aksRc962tvCKQ94MDBqSBSjGIgzQWUfCGjmY25KHqLKggmBFSVjm";

// API Paths
const API_URL_FAVOURITES = [
    "https://api.thecatapi.com/v1/favourites",
    `?api_key=${API_KEY}`,
].join("");

const API_URL_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=${API_KEY}`;

// MEthod Options
// const postOptions = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "x-api-key": API_KEY,
//     },
//     body: JSON.stringify({
//         image_id: idImageCate,
//     }),
// };

// Mostrar un gatito al cargar la página
document.addEventListener('DOMContentLoaded', loadRandomCats);

// Mostrar un mensaje al añadir un gatito a favoritos
btnAddFavoriteCats.forEach((item) => {
    item.addEventListener('click', (el) => {
        // data me el id de la imagen del gato
        const idImageCat = item.parentElement.parentNode.getAttribute('data-id');
        saveFavoriteCat(idImageCat);
    });
});

// Mostrar un gatito al hacer click en el botón
btnShowOtherKitty.addEventListener('click', loadRandomCats);

// deleteFavoriteCats(100073662);
async function deleteFavoriteCats(id) {
    try {
        console.log("Entraste a deleteFavoriteCats");
        const response = await fetch(API_URL_FAVOURITES_DELETE(id), {
            method: "DELETE",
        });

        console.log("Eliminando michis favoritos", response);
    }
    catch (error) {
        console.error(`Error in ${error}`)
    }
}