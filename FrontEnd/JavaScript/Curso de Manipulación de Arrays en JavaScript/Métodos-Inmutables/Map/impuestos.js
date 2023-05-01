const productsWithoutTaxes = [
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


// const productWithTaxes = productsWithoutTaxes.map(product => {
//     // Le sacamos el 19%
//     const taxes = product.price * 0.19;
//     return {
//         ...product,
//         taxes,
//     };
// });

// Me regresa solo el nombre del producto y su stock
const productWithTaxes = productsWithoutTaxes.map(product => {
    const name = product.name;
    const stock = product.stock;
    return {
        name,
        stock,
    };
});

// const productWithTaxes = productsWithoutTaxes.map(product => {
//     // Le sacamos el 19%
//     const taxes = product.price * 0.19;
//     return {
//         ...product,
//         price: taxes,
//     };
// });

console.log(productsWithoutTaxes);
console.log(productWithTaxes);
console.log(productsWithoutTaxes);