const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

// Se Puede Usar Métodos De Array en Objetos que están dentro de un array [{}] ?
const productsTitles = products.map(product => product.title);
// Respuesta: Síííííí, sí se puede!!!

// Métodos mutables
const ages = [2, 67, 35, 36, 72, 20];

// Método pop()
const lastElement = ages.pop();
console.log("ages", ages);
console.log("lastElement", lastElement);

// Método splice()
const penultimateAge = ages.splice(-2, 1);
console.log("ages", ages);
console.log("penultimateAge", penultimateAge.join());