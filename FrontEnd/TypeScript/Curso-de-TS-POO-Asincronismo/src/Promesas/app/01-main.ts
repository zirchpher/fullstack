// Para darle tipado a las promesas, debemos unir las respuestas de las promesas "Promise<type>" con una interfaz

import axios from 'axios';
import { Product } from './model/product.model';

// Acá está la magia, le decimos que la función retorna una promesa de tipo Array de Productos
async function fetchData(): Promise<Product[]> {
    // Para aprovechar al máximo ese tipado, también tipeemos la respuesta de axios
    const { data } = await axios.get<Product[]>(
        'https://api.escuelajs.co/api/v1/products'
    );
    return data;
}

// Si la librería no soporta tipado, hagamos magía para hacerlo funcionar como tipado(Método no recomendable, es mejor la forma anterior).
async function fetchDataV2() {
    // Para aprovechar al máximo ese tipado, también tipeemos la respuesta de axios
    const response = await axios.get(
        'https://api.escuelajs.co/api/v1/products'
    );
    const data = response.data as Product[];
    data.map((product) => {
        product.price;
    });
    return data;
}

async function printProducts() {
    const products = await fetchData();
    console.log(
        products.map((product) => `${product.title} : ${product.price}`)
    );
}

printProducts();
