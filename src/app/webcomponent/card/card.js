fetch('card/indexCard.html')
    .then(response => response.text())
    .then(templateHtml => start(templateHtml));

function start(templateHtml) {
    class miCarta extends HTMLElement {
        constructor() {
            super();
            let shadownDOM = this.attachShadow({ mode: 'open' });
            shadownDOM.innerHTML = templateHtml;

            let estilos = document.createElement('link');
            estilos.setAttribute('rel', 'stylesheet');
            estilos.setAttribute('href', 'card/stylesCard.css');
            shadownDOM.appendChild(estilos);


        }

        connectedCallback() {
            console.log('Custom component element added to page.');
            const { shadowRoot } = this;
            let elemento = shadowRoot.getElementById('micarta');
            console.log(this.hasAttribute("color-name"));
            if (this.hasAttribute("color-name")) {
                let color = this.getAttribute("color-name");
                elemento.style.backgroundColor = color;
            } else {
                elemento.style.backgroundColor = 'red';
            }

            if (this.hasAttribute("image")) {
                let imagen = this.getAttribute("image");
                let imagenElement = shadowRoot.getElementById('image1');
                imagenElement.src = imagen;
            }
        }


    }

    customElements.define('mi-carta', miCarta);
}

