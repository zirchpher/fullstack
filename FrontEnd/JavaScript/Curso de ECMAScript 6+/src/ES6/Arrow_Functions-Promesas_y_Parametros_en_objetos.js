"use strict";

// Parámetros en Objetos
let name = "Remix";
let age = 20;

let obj1 = { name: name, age: age };

// ES6
let obj2 = { name, age };



// Arrow Functions
const square = (number) => number ** 2;
const ra = square(9);
// console.log(ra);



// PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) resolve("Hey!!, todo ok");
        else reject("Ups!! Algo salió mal");
    });
};

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));