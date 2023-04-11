"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Populares = void 0;
var _newCard = require("./newCard");
var Populares = function Populares() {
  var row = document.createElement("div");
  row.classList.add("row");
  row.style.width = "100%";
  var title = document.createElement("h2");
  title.textContent = "Libros Populares";
  title.style.textAlign = "center";
  title.style.color = "black";
  title.style.textShadow = "2px 2px 5px white";
  title.style.marginTop = "20px";
  title.style.marginBottom = "40px";
  row.appendChild(title);

  // Adding small cards
  var col4 = document.createElement("div");
  col4.classList.add("col-2");
  col4.style.alignContent = "center";
  col4.style.alignItems = "center";
  col4.style.justifyContent = "center";
  var dec1 = document.createElement("img");
  dec1.src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png";
  dec1.style.width = "180px";
  dec1.style.height = "950px";
  col4.appendChild(dec1);
  row.appendChild(col4);
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  (0, _newCard.newCard)("https://tienda.sophosenlinea.com/imagenes/9788417/978841739957.GIF", "https://tienda.sophosenlinea.com/", "La Física de Dios", "Joseph Selbie", "Más allá de la concepción material de la ciencia...", col4);
  (0, _newCard.newCard)("https://tienda.sophosenlinea.com/imagenes/9788491/978849105357.GIF", "https://tienda.sophosenlinea.com/", "Biográfico Sherlock", "Viv Croot", "La colección Biográfico ofrece una mirada completamente nueva...", col4);
  row.appendChild(col4);
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin = "auto";
  (0, _newCard.newCard)("https://tienda.sophosenlinea.com/imagenes/9786073/978607381208.GIF", "https://tienda.sophosenlinea.com/", "Roma Soy Yo", "Santiago Posteguillo", "Después de Julio César el mundo no volvió a ser el mismo...", col4);
  (0, _newCard.newCard)("https://tienda.sophosenlinea.com/imagenes/9788446/978844602434.GIF", "https://tienda.sophosenlinea.com/", "Historia de Egipto", "Aafaf Luffi Val-Sayyid", "Esta historia de Egipto, desde la conquista árabe en el año 639 hasta hoy...", col4);
  row.appendChild(col4);
  var col4 = document.createElement("div");
  col4.classList.add("col-2");
  col4.style.alignContent = "center";
  col4.style.alignItems = "center";
  col4.style.justifyContent = "center";
  var dec2 = document.createElement("img");
  dec2.src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png";
  dec2.style.width = "180px";
  dec2.style.height = "950px";
  col4.appendChild(dec2);
  row.appendChild(col4);
  return row;
};
exports.Populares = Populares;