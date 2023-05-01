// CSS
import "./style.css";
import buttonStyle from './src/styles/button.module.css'

// IMAGES
import barrio from './src/images/barrio.jpg'

// JSON
import { skills } from './src/json/user.json'

// JS
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

// TS
import sumar from './src/ts/magic.ts'
console.log(`La suma de 3 + 5 = ${sumar(3, 5)}`);

// JS Modules
const modulos = import.meta.glob("./src/modules/*.js");

for (const path in modulos) {
    modulos[path]().then((module) => {
        module.load();
    })
}

document.querySelector("#app").innerHTML = `
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>

        <h1>Hello Remmian!</h1>
        <div class="card">
            <button id="counter" type="button"></button>
            <button id="btn" type="button">Click me!</button>
        </div>

        <p class="read-the-docs">
            Click on the Vite logo to learn more
        </p>

        <pre> ${JSON.stringify(skills.Web)} </pre>
    </div>
`;

const btn = document.querySelector("#btn");
btn.className = buttonStyle.btn;
btn.addEventListener("click", () => {
    console.log("RAAA");
})

setupCounter(document.querySelector("#counter"));

const image = document.querySelector("#image");
image.src = barrio;