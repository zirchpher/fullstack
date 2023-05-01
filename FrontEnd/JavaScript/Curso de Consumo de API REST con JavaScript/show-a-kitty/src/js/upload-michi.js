const API_KEY = "live_ha5rFVUqOh66aksRc962tvCKQ94MDBqSBSjGIgzQWUfCGjmY25KHqLKggmBFSVjm";
const API_URL_UPLOAD = "https://api.thecatapi.com/v1/images/upload";
const API_URL_FAVOURITES = "https://api.thecatapi.com/v1/favourites";

// OWN INSTED OF AXIOS
const http = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: { 'x-api-key': API_KEY }
});

// USING AXIOS
async function sendMichiPhoto() {
    const formUploadMichi = document.getElementById("form-upload-michi");
    const formData = new FormData(formUploadMichi);

    const { data, statusText, status } = await http.post("/images/upload", formData);

    if (statusText !== "Created") {
        alert(`Hubo un error al guardar michi: ${status} ${data.message}`)
    }
    else {
        alert("Foto de michi cargada :)");
        saveFavoriteCat(data.id);
    }
}

async function saveFavoriteCat(idImageCat) {
    const { data, status } = await http.post("/favourites", {
        image_id: idImageCat,
    });

    (data.message !== "SUCCESS")
        ? alert(`Hubo un error al guardar michi: ${status} ${data.message}`)
        : alert("Michi guardado en favoritos :)");
}

// USING FETCH

// async function sendMichiPhoto() {
//     const formUploadMichi = document.getElementById("form-upload-michi");
//     const formData = new FormData(formUploadMichi);

//     const response = await fetch(API_URL_UPLOAD, {
//         method: "POST",
//         headers: {
//             "x-api-key": API_KEY,
//         },
//         body: formData, // formData es un objeto que contiene los datos del formulario
//     });

//     const data = await response.json();

//     if (response.status !== 201) {
//         console.error(`Hubo un error al subir michi: ${response.status} ${data.message}`);
//     }
//     else {
//         console.log("Foto de michi cargada :)");
//         console.log(data.url);
//         saveFavoriteCat(data.id);
//     }
// }



// async function saveFavoriteCat(idImageCat) {
//     try {
//         console.log("idImageCat dentro de saveFavoriteCat es :", idImageCat);
//         const response = await fetch(`${API_URL_FAVOURITES}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "x-api-key": API_KEY,
//             },
//             // Lee estamos mandando un objeto pero se tiene que convertir a JSON porque así lo pide la API
//             body: JSON.stringify({ image_id: idImageCat }),
//         });

//         const allGood = response.ok;
//         (allGood)
//             ? alert("Se guardó el michi en favoritos")
//             : alert("No se pudo guardar el michi en favoritos");
//     }
//     catch (error) {
//         console.error(`Error in ${error}`)
//     }
// }






