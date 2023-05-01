const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

// Cambiar texto de una etiqueta
// innerHTML: reemplaza el texto con código html.
h1.innerHTML = "Esto lo hice usando <br> el innerHTML!";

// innerTEXT: reemplaza el texto con texto normal.
h1.innerText = "Esto lo hice usando <br> el innerText!";

// Obtenemos los atributos de una etiqueta.
h1.getAttribute("class");
// Modificamos los atributos de una etiqueta.
h1.setAttribute("class", "burrito");

// Funciones buenísimas para las CLASES
//Agrega una nueva clase a una etiqueta
h1.classList.add("RAAAA");

//Elimina una clase a una etiqueta
h1.classList.remove("burrito");

// Reemplaza una clase por otra
h1.classList.replace("RAAAA", "socio");

// Verifica si una clase contiene un valor o no
console.log(h1.classList.contains("socio"));

// Cambiar el valor de un input
input.value = "gatito";

// Crear un nuevo elemento
let img = document.createElement("img");

// Agregamos atributos a ese elemento creado
img.setAttribute("src", "https://static.platzi.com/static/images/conf/logo_black@2x.png");

// append o appendChild agrega un elemento html debajo de otro
// pid.append(img);
// pid.appendChild(img);

// Agreguemos la imagen eliminando el párrafo
pid.innerHTML = "";
pid.append(img);
