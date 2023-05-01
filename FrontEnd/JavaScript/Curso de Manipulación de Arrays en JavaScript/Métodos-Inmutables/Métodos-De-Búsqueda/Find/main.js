"use strict";
/* 
    * Find() => Retorna la primera coincidencia que encuentre
    * FindIndex => Retorna el "índice" de la primera coincidencia que encuentre
*/

const numbers = [2, 4, 3, 56, 2, 45, 234, 56, 12];

// For Method
// let searchedNumber = undefined;
// for (const number of numbers) {
//     if (number === 234) searchedNumber = number;
// }

// Find Method
const searchedNumber = numbers.find(number => number === 234);
console.log("Find Method: ", searchedNumber);

// Ejercicio
// Buscar un elemento por su id
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

// Find()
const searchHotCakes = products.find(product => product.id === "🥞");
console.log(searchHotCakes);

// FindIndex()
const searchHotCakesIndex = products.findIndex(product => product.id === "🥞");
console.log(searchHotCakesIndex);