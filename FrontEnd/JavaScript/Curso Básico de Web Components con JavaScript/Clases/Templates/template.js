// hacemos uso de la etiqueta <template> para crear elementos fragmentados y renderizarlos 1 vez en el DOM

class RemixElCrack extends HTMLElement {
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2 class="title">Title</h2>
                <div>
                    <p>SubTitle</p>
                </div>
            </section>
            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        return `
            <style>
                .title {
                    color: red;
                }
            </style>
        `;
    }

    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("remix-elcrack", RemixElCrack);
