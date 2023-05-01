/**
 * Pasos para crear un elemento personalizado:
 * 1. Crear una clase y extenderlo de HTMLElement
 * 2. Definir un constructor
 * 3. Definimos el nombre del web component
 * 4. Creamos el método connectedCallback() que se ejecutará cuando el componente se conecte al DOM
 */

class RemixElCrack extends HTMLElement {
    constructor() {
        super();

        this.p = document.createElement('p');
    }

    connectedCallback() {
        this.p.textContent = 'Remix el crack';
        this.appendChild(this.p);
    }
}

customElements.define('remix-elcrack', RemixElCrack);


// Creamos el constructor del web component
// class MyElement extends HTMLElement {
//     constructor() {
//         super();

//         // Creamos elementos para usar como template
//         this.p = document.createElement('p');
//     }

//     // Creamos el método que se ejecutará cuando el componente se conecte al DOM
//     connectedCallback() {
//         // Añadimos texto al elemento p
//         this.p.textContent = 'Hola mundo';
//         this.p.style = 'font-size: 24px; color: red;';

//         // Añadimos el elemento p al componente
//         this.appendChild(this.p);
//     }
// }

// // Definimos el nombre del web component
// customElements.define("my-element", MyElement);
