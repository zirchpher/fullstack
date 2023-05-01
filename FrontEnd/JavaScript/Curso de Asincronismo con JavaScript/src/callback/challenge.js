/* 
    * Callback Hell: Es un problema que se presenta cuando tenemos muchos callbacks anidados,
    * lo que hace que nuestro código sea difícil de leer y de mantener.
*/

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

// fetchData -> Nos trae todos los datos de la API
function fetchData(urlApi, callback) {
    //instanciar un objeto de tipo XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    // Abrimos una conexión con la API
    // Tipo: GET
    // Para habilitarlo : true
    xhttp.open('GET', urlApi, true);

    xhttp.onreadystatechange = function (event) {
        // 0 => No inicializado
        // 1 => Loading
        // 2 => Ya se ejecutó el proceso
        // 3 => interactuando, está trabajando con la solicitud
        // 4 => Cuando se ha completado la llamada
        if (xhttp.readyState === 4) {
            // 200 significa que no hubo problemas con el servidor
            // 400 significa que hubo problemas con el servido
            if (xhttp.status === 200) {
                // JSON.parse() lo que hace es transformar cualquier texto a código JSON
                callback(null, JSON.parse(xhttp.responseText));
            }

            else {
                const error = new Error('Error en :' + urlApi);
                return callback(error, null);
            }
        }
    }
    // Se usa para ejecutar toda la lógica anterior
    xhttp.send();
}

// Aquí ya hacemos uso de los datos que nos trae la API
fetchData(`${API}/products`, function (thereSomethingInError, datas) {
    if (thereSomethingInError) return console.error(error);

    console.log("Element 0: ", datas[0]);
    console.log("Element 0 title: ", datas[0].title);
    console.log("Element 0 category: ", datas[0]?.category?.name);
});

// fetchData(`${API}/products`, (error1, data1) => {
//     // data1 ya me está trayendo toda la información de la API
//     if (error1 != null) return console.error(error1);

//     fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
//         // `${API}/products/${data1[0].id}` retorna -> https://api.escuelajs.co/api/v1/products/1
//         // Es como si le dijera que me lleve al producto 1 y a su id
//         if (error2 != null) return console.error(error2);

//         fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
//             if (error3 != null) return console.error(error3);

//             console.log(data1[0]);
//             console.log(data2.title);
//             console.log(data3.name);
//         });
//     });
// });
