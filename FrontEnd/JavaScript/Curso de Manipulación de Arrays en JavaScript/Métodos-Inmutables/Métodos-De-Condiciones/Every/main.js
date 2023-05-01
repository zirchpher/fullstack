"use strict";
// *Every():
// *Retorna "true" or "false" si es que "Todos" los elementos cumplen la condición

const ages = [45, 43, 23, 62, 26, 45, 33];

// let everyoneAreAdults = true;
// for (const age of ages) {
//     if (age < 18) {
//         everyoneAreAdults = false;
//         break;
//     }
// }

const everyoneAreAdults = ages.every(age => age > 18);

// Ejecicio
// Ver si alguno de la lista teams es mayor 15 años

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 14,
    },
];

const everyoneIsUnder15 = team.every(person => person.age < 15);
console.log(everyoneIsUnder15);