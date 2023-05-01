class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        console.log("constructor");
    }

    connectedCallback() {
        console.log("connectedCallback");
    }

    disconnectedCallback() {
        console.log("disconnectedCallback");
    }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();
