import "./style.css";
import axios from "axios";
import IAvocado from "./app/model/avocados.model";

const API = {
    BASE_URL: "https://platzi-avo.vercel.app",
    URL_PRODUCTS: "https://platzi-avo.vercel.app/api/avo",
};

// Hacemos uso de la API de la internacionalización de JavaScript para formatear el precio de las paltas. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function formatPrice(price: number) {
    const formattedPrice = new window.Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
    }).format(price);

    return formattedPrice;
}

// web api
async function getData(): Promise<IAvocado[]> {
    const { data } = await axios.get(API.URL_PRODUCTS);
    const response: IAvocado[] = data?.data;
    return response;
}

function mapProductsToDOM(list: IAvocado[]) {
    const itemList: HTMLDivElement[] = [];

    list.map((item) => {
        // crear la imagen
        const image = document.createElement("img");
        image.src = `${API.BASE_URL}${item.image}`; // add the URL to the image
        // adding classes to the image
        image.className = "avocado-card__img";

        // crear título
        const title = document.createElement("h2");
        title.textContent = item.name; // set the title
        title.className = "avocado-card__title";

        // crear precio
        const price = document.createElement("span");
        price.textContent = `${formatPrice(item.price)}`; // set the price
        price.className = "avocado-card__price";

        // crear contenedor
        const container = document.createElement("div");
        container.append(image, title, price);
        container.className = "avocado-card"; // add the class to the container

        itemList.push(container); // add the container to the array
    });

    return itemList; // return the array
}

async function renderProducts() {
    try {
        const avocados = await getData(); // get the data from the API
        const productList = mapProductsToDOM(avocados); // array of containers

        const $app: HTMLDivElement = document.querySelector("#app")!; // container to render the products
        $app.append(...productList); // add the array to the DOM
    } catch (error) {
        console.log(error);
    }
}

renderProducts();
