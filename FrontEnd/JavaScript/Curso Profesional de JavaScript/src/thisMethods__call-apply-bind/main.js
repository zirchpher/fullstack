/**
 * Los métodos call(), apply() y bind() son métodos de los objetos y Function.
 * Estos métodos permiten cambiar el valor de this en una función.
 */

// Objetos y métodos globales
const person = {
  name: "Remix",
  hobbie: "Programar",
};

function sayHi() {
  console.log(`Hola, soy ${this.name} y me gusta ${this.hobbie}`);
}

function animar(actividad, minutos) {
  console.log(
    `Hey capo!, soy ${this.name}, y yo ${actividad} ${minutos} minutos diarios`
  );
}

// * call()
// call => la c de call es de coma
sayHi.call(person); // Hola, soy Remix y me gusta Programar
animar.call(person, "corro", 30); // Hey capo!, soy Remix, y yo corro por 30 minutos

// * apply()
// Apply es lo mismo que call, pero en ves de pasar los argumentos por coma, se pasan por un array
// apply => la a de apply es de array
const data = ["corro", 30];
animar.apply(person, data); // Hey capo!, soy Remix, y yo corro por 30 minutos

// * bind()
// bind lo que hace es crear una nueva función con el valor de this que le pasemos
const franchesa = {
  name: "Fran",
  hobbie: "Dormir",
};

const newFunction = sayHi.bind(franchesa);
newFunction(); // Hola, soy Fran y me gusta Dormir

const newFunction2 = animar.bind(franchesa, "salto", 20);
newFunction2(); // Hey capo!, soy Fran, y yo corro por 30 minutos

const newFunction3 = animar.bind(franchesa, "corro");
newFunction3(30); // Hey capo!, soy Fran, y yo corro por 30 minutos

// Dándonde funcionalidad a los botones
// Tradicional
// const buttonsNeverStop = document.querySelectorAll(".call-to-action");

// Convertiendo una nodeList a un array
const buttonsNeverStop = Array.from(
  document.querySelectorAll(".call-to-action")
);

// * Forma 1
buttonsNeverStop.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Nunca Pares de Aprender");
  });
});

// * Forma 2
// Array.prototype.forEach.call(buttonsNeverStop, button => {
//     button.onclick = () => alert("Nunca Pares de Aprender");
// });

class Hero {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hey!, I'm ${this.name}`);
  }
}

const zelda = new Hero("Zelda");
const link = new Hero("Link");
zelda.sayHi(); // Hey!, I'm Zelda
link.sayHi(); // Hey!, I'm Link
