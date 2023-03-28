import { Header } from "./header.js";
import { Footer } from "./footer.js";
import { Nuevos } from "./nuevos-strc.js";
import { Structure2 } from "./structure2.js";

export const startApp = () => {
  if (document.getElementById("header") != null) {
    document.getElementById("header").appendChild(Header());
  }
  if (document.getElementById("nuevos-strc") != null) {
    document.getElementById("nuevos-strc").appendChild(Nuevos());
  }
  if (document.getElementById("footer") != null) {
    document.getElementById("footer").appendChild(Footer());
  }
  if (document.getElementById("populares-strc") != null) {
    document.getElementById("populares-strc").appendChild(Structure2());
  }
};