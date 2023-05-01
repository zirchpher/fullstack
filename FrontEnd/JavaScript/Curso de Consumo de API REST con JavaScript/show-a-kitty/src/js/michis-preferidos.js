async function deleteFavoriteCat(id) {
    try {
        console.log("Entraste a deleteFavoriteCats");
        const response = await fetch(API_URL_FAVOURITES_DELETE(id), {
            method: "DELETE",
            headers: {
                'x-api-key': API_KEY
            }
        });

        if (response.status <= 299) {
            alert("Se eliminó el gatito de tus favoritos con éxito");
            // Recargamos la página
            showFavoritesMichis();
            // location.reload();
        }
    }
    catch (error) {
        console.error(`Error in ${error}`)
    }
}

async function fetchKittyData(urlApi) {
    try {
        const response = await fetch(urlApi, {
            method: "GET",
            headers: {
                'x-api-key': API_KEY
            }
        });
        const status = response.status;
        if (status >= 299) console.log("Error: " + status);
        else {
            const data = await response.json();
            return data;
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function showFavoritesMichis() {
    const data = await fetchKittyData(API_URL_FAVOURITES);

    const favoritesCatsContainer = document.querySelector('#favorites-michis-container');
    favoritesCatsContainer.innerHTML = '';


    data.map((michi) => {
        // Creamos un template para pintar los datos
        // etiquetas necesarias
        const catContainer = document.createElement('div');
        const imageCat = document.createElement('img');

        const addFavorteCatContainer = document.createElement('div');
        const btnDeleteFavoriteCat = document.createElement('button');
        const iconBreackHeart = document.createElement('i');

        // Añadimos clases a los elementos
        catContainer.classList.add('cat-image-container');
        imageCat.classList.add('image-container__img');

        addFavorteCatContainer.classList.add('add-favorite-cats');
        btnDeleteFavoriteCat.classList.add('add-favorite-cats__btn');
        iconBreackHeart.classList.add('fa-solid');
        iconBreackHeart.classList.add('fa-heart-crack');
        iconBreackHeart.classList.add('add-favorite-cats__icon');

        // Añadimos atributos a los elementos
        imageCat.src = michi.image.url;
        imageCat.setAttribute('id', "image-kitty");

        btnDeleteFavoriteCat.onclick = () => deleteFavoriteCat(michi.id);
        btnDeleteFavoriteCat.setAttribute('id', "delete-favorite-cats");

        // Agregamos cada elemento hijo a su padre
        btnDeleteFavoriteCat.appendChild(iconBreackHeart);
        addFavorteCatContainer.appendChild(btnDeleteFavoriteCat);
        catContainer.appendChild(addFavorteCatContainer);
        catContainer.appendChild(imageCat);

        favoritesCatsContainer.appendChild(catContainer);
    });

    // Creamos un template para pintar los datos
    // let view = `
    // ${data.map((michi) => `
    //     <div class="cat-image-container">
    //         <div class="add-favorite-cats">
    //             <button id="delete-favorite-cats" class="add-favorite-cats__btn" >
    //                 <i class="fa-solid fa-heart-crack add-favorite-cats__icon"></i>
    //             </button>
    //         </div>
    //         <img id="image-kitty" class="image-container__img" src="${michi.image.url}" alt="A cute kitten">
    //     </div>
    // `).join('')}
    // `;
    // // Pintamos los datos en el HTML
    // favoritesCatsContainer.innerHTML = view;
}

const API_KEY = "live_ha5rFVUqOh66aksRc962tvCKQ94MDBqSBSjGIgzQWUfCGjmY25KHqLKggmBFSVjm";
const API_URL_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

const API_URL_FAVOURITES = "https://api.thecatapi.com/v1/favourites";

const btnDeleteFavoriteCats = document.querySelectorAll('#delete-favorite-cats');

showFavoritesMichis();


// PAPELERA DE CÓDIGO

// const API_URL_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=${API_KEY}`;

// const API_URL_FAVOURITES = [
//     "https://api.thecatapi.com/v1/favourites",
//     // `?api_key=${API_KEY}`,
// ].join("");

// const favoritesCatsContainer = document.querySelector('#favorites-michis-container');