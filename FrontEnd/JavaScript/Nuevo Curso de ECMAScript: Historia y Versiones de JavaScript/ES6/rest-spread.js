// Desectruturación de Arrays y Objectos
// Array
const frutas = ["Banana", "Apple", "Orange", "Melón", "Sandía"];
const [firstFruit, secondFruit] = frutas;
// console.log(firstFruit);
// console.log(secondFruit);

// Object
const user = {
    username: 'Remix',
    age: 20,
    country: "PE",
    favoriteFood: "Caldo de Gallina",
};

const { username, ...all } = user;
// console.log(username);
// console.log(all);



// Spread Operator
const personInObject = {
    name: "Remix",
    age: 20
};
const personInArray = Object.entries(personInObject);
const country = "PE";

const datasInObject = { ...personInObject, country };
const datasInArray = [...personInArray, country];
console.log(datasInObject);
console.log(datasInArray);