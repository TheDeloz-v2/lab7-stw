
fetch('./slot/index.html')
    .then(response => response.text())
    .then(templateHtml => startSlotElement(templateHtml));

function startSlotElement(templateHtml) {
    class MiSlot extends HTMLElement {

        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: 'open' });

            //Creamos un div para poder agregar el template
            let template = document.createElement('div');
            template.innerHTML = templateHtml;
            //Obtenemos el template
            let templateContent = template.querySelector('template');
            //Agregamos el Template a nuestro innerHTML
            this._shadowRoot.appendChild(templateContent.content.cloneNode(true));
        }


    }

    customElements.define('mi-slot', MiSlot);
}

