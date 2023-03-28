import { Header } from "./header.js";
import { Footer } from "./footer.js";
import { Nuevos } from "./nuevos-strc.js";
import { Structure2 } from "./structure2.js";
import { Pagina1 } from "./pagina1.js";
import { Pagina2 } from "./pagina2.js";
import { Pagina3 } from "./pagina3.js";

export const startApp = () => {
  document.getElementById("header").appendChild(Header());
  
  if (document.getElementById("nuevos-strc") != null) {
    document.getElementById("nuevos-strc").appendChild(Nuevos());
  }
  if (document.getElementById("footer") != null) {
    document.getElementById("footer").appendChild(Footer());
  }
  if (document.getElementById("populares-strc") != null) {
    document.getElementById("populares-strc").appendChild(Structure2());
  }
  if (document.getElementById("pagina1") != null) {
    document.getElementById("pagina1").appendChild(Pagina1());
  }

  if (document.getElementById("pagina2") != null) {
    document.getElementById("pagina2").appendChild(Pagina2());
  }

  if (document.getElementById("pagina3") != null) {
    document.getElementById("pagina3").appendChild(Pagina3());
  }
};