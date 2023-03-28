//Footer using Bootstrap
export const Footer = () => {
    var footer = document.createElement("div");
    footer.classList.add("container-fluid");
    footer.classList.add("bg-dark");
    footer.classList.add("text-white");
    footer.classList.add("text-center");
    footer.classList.add("p-3");
    footer.classList.add("mt-5");
    footer.innerHTML = "Biblioteca del Conocimiento\n© 2023 Copyright";
    return footer;
}