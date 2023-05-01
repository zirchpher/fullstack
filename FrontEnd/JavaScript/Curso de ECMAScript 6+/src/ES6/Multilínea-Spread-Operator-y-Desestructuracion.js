// "use strict";

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit\n" + "otra frase épica que necesitamos."

// ES6
let lorem2 = `Otra frase épica que necesitamos
ahora es otra frase épica `;

// console.log(lorem);
// console.log(lorem2);


// Desectruturación
const person = {
    name: "Remix",
    age: 20,
    country: "PE",
}
// console.log(person.name, person.age);

//ES6
let { name, country } = person;
// console.log(name, country);


// Spread Operator
let team1 = ["Fabiana", "Teresa", "Miguel", "Rosa"];
let team2 = ["Kerly", "Ricardo", "Wilson", "Yesenia"];

let education = ["David", "Irene", ...team1, "Flavia", ...team2];
// console.log(education);



// let y var
{
    var globalVar = "Se imprimió la variable con var";
}

{
    let globalLet = "Se imprimió la variable con let";
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet);