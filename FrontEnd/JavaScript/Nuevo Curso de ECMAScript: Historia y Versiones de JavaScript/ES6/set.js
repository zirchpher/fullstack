const conjunto = new Set();

conjunto.add("item 2");
conjunto.add("item 1");
conjunto.add("item 2");
conjunto.add("item 3");
conjunto.add("item 2");

// Eliminar elementos repetidos usando set
const animales = ["Cat", "Dog", "Cat", "Dog", "Cat", "Dog", "Cat", "Dog"];
const animalesSinRepetir = [... new Set(animales)];
console.log(animales);
console.log(animalesSinRepetir);