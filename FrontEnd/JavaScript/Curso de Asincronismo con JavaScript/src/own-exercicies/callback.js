// Nos traemos el xmlHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

// Nos traemos los datos de la API
function fetchDatas(urlApi, callback) {
    // Instanciamos un objeto de tipo XMLHttpRequest
    const xhttp = new XMLHttpRequest();
    // Abrimos una nueva conexión de tipo GET en la API
    // xhttp.open( tipo de petición, urlApi, true );
    xhttp.open("GET", urlApi, true);

    // Nos conectamos con la API
    xhttp.onreadystatechange = function (event) {
        // Verificamos que la conexión se haya realizado correctamente
        if (xhttp.readyState === 4) {
            // Verficamos el estado de la conexión
            if (xhttp.status === 200) {
                // Si llegamos hasta aquí es porque la conexión fue exitosa
                // Transformamos el texto a código JSON
                const datas = JSON.parse(xhttp.responseText);
                // Retornamos el callback con el error en null y los datos
                callback(null, datas);
            }

            else {
                const error = new Error('Error en :' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

// Aquí ya hacemos uso de los datos que nos trae la API
const APIProducts = `${API}/products`;
fetchDatas(APIProducts, (error, datas) => {
    if (error != null) return console.error(error); // Si hay un error lo retornamos

    // Si no hay error, retornamos los datos
    console.log(datas);
});