const productContainer = document.querySelector('#product-container');

const products = [
    { name: "Laptop", price: 2500 },
    { name: "PC", price: 3500 },
    { name: "iPhone 14 Pro Max", price: 1500 },
    { name: "Samsung Galaxy S21", price: 1500 },
    { name: "Camera Canon", price: 1000 },
];

products.forEach((product) => {
    productContainer.innerHTML += `<li>${product.name} - ${product.price}</li>`;
});

const solution = [2, 4, 5, 6];
solution.forEach(number => console.log(number * 2));