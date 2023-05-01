// Tuples
// Crear una tupla quiere decir definir un arreglo con un número fijo de elementos y de tipos. Es decir, si definimos una tupla que tenga SOLO 2 elementos, y que estos elementos sean de tipos string y number, sus características serían:
// 1) El arreglo solo puede tener 2 elementos.
// 2) El primer elemento debe ser un string y el segundo un number obligatoriamente.

// El tercer valor que está allí es opcional
let person: [string, number, string?];
person = ["Remix", 20]; // Correcto
// person = [20, "Remix"]; // Incorrecto
// person = ["Remix", 20, "Developer"]; // Incorrecto

// Se puede enviar un nuevo valor a la tupla, pero eso es una mala práctica, ya que no se debería modificar el tipo de dato de la tupla.
// person.push("Bebeloper");

// También podemos destructurar una tupla, es decir, asignar cada elemento de la tupla a una variable.
let [userName, userAge] = person;
console.log(`Name: ${userName}, Age: ${userAge}`);
