import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");

// El "response" es un archivo .json y lo Transformamos a un objeto usable para JS
const products = await response.json();

export { products, response };