import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1';

axios.get(`${API}/products`)
    .then((products) => {
        console.log(products.data[0]);
        return axios.get(`${API}/products/${products.data[0].id}`);
    })
    .then((product) => {
        console.log(product.data.title);
        console.log(product.data.price);
        return axios.get(`${API}/categories/${product.data.category.id}`);
    })
    .then((category) => console.log(category.data.name))
    .catch((err) => console.error(err));


