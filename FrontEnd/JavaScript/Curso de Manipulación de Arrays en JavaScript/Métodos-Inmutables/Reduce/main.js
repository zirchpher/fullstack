"use strict";
const totals = [1, 2, 3, 4];

// ForOf Method
let accumulator = 0;
for (const item of totals) {
    accumulator += item;
}
console.log("ForOF Method: " + accumulator);

// Reduce() Method
//                                 Accumulator                            Valor inicial 
//                                          Current Value               de Accumulator = 0
const reduceMethod = totals.reduce((accValue, currValue) => accValue + currValue, 0);
console.log("Reduce Method: " + reduceMethod);



// EJERCICIOS

// 1.- Multiplicar todos los elementos X2
const numbers = [2, 4, 5, 6];
const numbersX2 = numbers.map((number) => number * 2);
console.log(numbersX2);

// 2.- Retornar solo los nombres de la lista
const people = [
    {
        name: 'Nicolas',
        lastName: 'Molina',
        age: 28
    },
    {
        name: 'Valentina',
        lastName: 'Molina',
        age: 19
    },
];

const justNames = people.map(person => person.name);
console.log(justNames);


// 3.- Añadir al final el impuesto en el array
const orders = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
];

const ordersWithTaxes = orders.map((order) => {
    const taxes = order.price * 0.19;
    return {
        ...order,
        taxes,
    }
});

console.log(ordersWithTaxes);