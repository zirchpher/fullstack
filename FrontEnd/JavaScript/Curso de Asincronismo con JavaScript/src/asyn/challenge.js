import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

async function fetchDatas(urlApi) {
    // await is used to wait for a Promise.
    const response = await fetch(urlApi);
    const datas = await response.json();
    return datas;
}

async function workinOnDatas(urlApi) {
    try {
        const products = await fetchDatas(`${urlApi}/products`);
        const firstProduct = await fetchDatas(`${urlApi}/products/${products[0]?.id}`);
        const categories = await fetchDatas(`${urlApi}/categories`);
        const firstProductCategory = await fetchDatas(`${urlApi}/categories/${firstProduct.category.id}`);

        // console.log(categories);
        // console.log(firstProduct);
        console.log(firstProductCategory);
    }
    catch (error) {
        console.log(error);
    }
}

workinOnDatas(API);