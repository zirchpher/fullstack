class RemixElCrack extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2 class="title">
                    <slot></slot>
                </h2>
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
                h2{
                    color: blue;
                }
            </style>
        `;
    }

    render() {
        const template = this.getTemplate().content.cloneNode(true);
        this.shadowRoot.appendChild(template);
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("remix-elcrack", RemixElCrack);
