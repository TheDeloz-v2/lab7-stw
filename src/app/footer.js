//Footer using Bootstrap
export const Footer = () => {
    var footer = document.createElement("div");
    footer.classList.add("container-fluid");
    footer.classList.add("bg-dark");
    footer.classList.add("text-white");
    footer.classList.add("text-center");
    footer.classList.add("p-3");
    footer.classList.add("mt-5");
    footer.innerHTML = "Biblioteca del Conocimiento";
    return footer;
    
    /*<footer class="bg-light text-center text-lg-start">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>*/
}