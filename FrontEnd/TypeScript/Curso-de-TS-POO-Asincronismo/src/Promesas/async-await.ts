import axios from 'axios';

async function fetchData() {
    const { data } = await axios.get(
        'https://api.escuelajs.co/api/v1/products'
    );
    return data;
}

async function printProducts() {
    const products = await fetchData();
    console.log(products);
}

printProducts();

// (async () => {
// const products = await fetchData();
// console.log(products);
// })();
