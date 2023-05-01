"use strict";
const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Contamos la cantidad de números repetidos
const repeatedNumbers = numbers.reduce((accValue, currValue) => {
    (accValue[currValue] === undefined)
        ? accValue[currValue] = 1
        : accValue[currValue] += 1
    return accValue;
}, {});


/* 
    *Reto: poner los números repetidos pero con respecto a un rango;
*/
const repeatingNumberRange = numbers.reduce((accValue, currValue) => {
    if (currValue <= 5) accValue["1-5"] += 1;
    else if (currValue <= 8) accValue["6-8"] += 1;
    else if (currValue <= 10) accValue["9-10"] += 1;

    return accValue;
}, {
    ["1-5"]: 0,
    ["6-8"]: 0,
    ["9-10"]: 0,
});
