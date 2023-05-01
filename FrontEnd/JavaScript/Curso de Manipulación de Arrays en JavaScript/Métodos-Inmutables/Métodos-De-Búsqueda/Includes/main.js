"use strict";
// INCLUDES
// * Me dice si un "elemento o Char("a") está incluído dentro de de un Array o String

const pets = ["Cat", "Dog", "Pig", "Lion", "Penguin"];

// For Method
// let isThereCatsInArray = false;
// for (const pet of pets) {
//     if (pet === "Cat") {
//         isThereCatsInArray = true;
//         break;
//     }
// }

// Includes Method
const isThereCatsInArray = pets.includes("Cat");
// console.log("Includes Method :", isThereCatsInArray);

// Using String
const epicPhrase = "Uno de los lenguajes más maravillosos que existen es, JavaScript o JS";
const isJSWordInString = epicPhrase.includes("JavaScript");
// console.log("Includes Method in String :", isJSWordInString);



// Desafío
const words = [
    ["ana", "santi", "nico", "anastasia"],
    "an",
];

const allWords = words.flat(Infinity);
const keyWord = allWords.splice(-1);

const result = allWords.filter(word => {
    return word.includes(keyWord);
});

console.log(result);
// output = [ 'ana', 'santi', 'anastasia' ]

// allWords.forEach(word => {
//     if 
// });