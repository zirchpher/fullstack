let frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

// Saber la longitud de un Array
console.log(frutas.length);

// Llamar a un determinado elemento de un Array
console.log(frutas[0]);

// Acceder al último elemento
let lastElement = frutas[frutas.length - 1];

// Agregar un elemento al final
let masFrutas = frutas.push("Uvas");

// Agregar un elemento al inicio
let nuevaLongitud = frutas.unshift("Guanabana");

// Elimina un elemento al final
let ultimo = frutas.pop();

// Elimina un elemento al inicio
let borrarPrimerElemento = frutas.shift();

// Buscar el index de un elemento
let index = frutas.indexOf("Cereza");

/* Más métodos para el Array */

// Invertir los elementos
let invertir = frutas.reverse();

// Ordenar alfabeticamente A - Z o 1 - oo
let sort = frutas.sort();

// Obtener datos de un Array, desde tal index hasta tal index
let slice = frutas.slice(1, 3);

// Verificar si un elemento existe dentro de un Array
let isInside = frutas.includes("Plátano"); //True
let isInside2 = frutas.includes("Melón"); //False

/* Eliminar Múltiplos elementos
    Si el número es negativo: Elimina esa cantidad de items
    empezando desde el final.

    Si el número es positivo: Elimina items hasta ese index.

    Si lleva 2 parámetros: 
    1er parámetros: Es el index donde empieza.
    2do parámtro: Es la cantidad de items que queremos eliminar.

    let frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];
*/

let itemsEliminados = frutas.splice(-1); // [ "Fresa" ]

let itemsEliminados2 = frutas.splice(1); // [ "Plátano", "Cereza", "Fresa" ]

let itemsEliminados3 = frutas.splice(1, 2); // [ "Plátano", "Cereza" ]
