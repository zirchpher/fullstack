'use strict';
const schoolNotes = [10, 2];

const edad = 2;
const esMayorDeEdad = (edad) => edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad(edad));

const totalSum = schoolNotes.reduce((accValue, currValue) => accValue + currValue);
const perro = {
    nombre: "firulais",
    edad: 12,
    ladrar() {
        console.log("wouf wouf con normal function");
    },
    // ladrar: () => console.log("wouf wouf con arrow function"),

    // ladrar: function () {
    //     console.log("wouf wouf con function anónima");
    // },
}

/*
    * Diferencias entre una función normal y una arrow function:
    Una función normal: This hace referencia al propio objeto(en este caso normalFunction).

    Una arrow funcion: This hace referencia al objeto padre(En este caso Window).
*/
const miFunc = {
    nombre: "Remix",
    propioObjeto: function () {
        console.log(this);
    },
    objetoWindow: () => console.log(this),
}