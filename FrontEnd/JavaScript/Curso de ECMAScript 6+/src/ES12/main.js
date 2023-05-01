"use strict";

// NUMERIC SEPARATORS
// El número sigue siendo el mismo, solo sirve para mi legibilidad.
// 1 162 342
const sueldo = 1_162_342;


const string = "JavaScript es Maravilloso, con JavaScript puedo hacer una AppWeb increíble";
// replace: Reemplaza la primera coincidencia de un string
const methodReplace = string.replace("JavaScript", "Python");

// replaceAll: Reemplaza todas las coincidencias de un string
const methodReplaceAll = string.replaceAll("JavaScript", "Python");


// Volver privado un método dentro de una clase
// si le ponemos un "#" antes del nombre, esta no podrá ser accedida
class Message {
    #showMessage(value) {
        console.log(value);
    }
}
const myMessage = new Message();
// console.log(myMessage.showMessage("RAAA"));


// Promise any
// Me retorna el valor de la "primera promesa que se resuelva"
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => reject("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

const PromisesList = [promise1, promise2, promise3];

Promise.any(PromisesList)
    .then((response) => console.log(response));


// WeakRef
// Un objeto WeakRef consiste en mantener una referencia débil a otro objeto, para evitar que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.
class Clase {
    constructor(valor) {
        this.ref = new WeakRef(valor);
    }
}

const objetoGrande = new WeakRef({
    name: "Mecanismo de control de caché",
    type: "caché",
    implementation: "WeakRef",
});

console.log(objetoGrande.deref()); // Retorna toda la referencia
console.log(objetoGrande.deref().name); // Retorna el nombre de la referencia
console.log(objetoGrande.deref().type); // Retorna el tipo de la referencia


// Asignación AND
let saludo = true;
saludo ??= "Hola";
// console.log(saludo);// "Hola"

// Asignación OR
let saludo2 = true;
saludo ||= "Hola";
// console.log(saludo2) // true

// Asignación Nullish
let saludo3 = undefined;
saludo ??= "Hola";
// console.log(saludo2) // "Hola"