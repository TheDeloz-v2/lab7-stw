import { newCard } from "./newCard";

export const Structure2 = () => {
  var row = document.createElement("div");
  row.classList.add("row");
  row.style.width = "100%";

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
  newCard("https://tienda.sophosenlinea.com/imagenes/9788417/978841739957.GIF", "google.com", "La Física de Dios", "Joseph Selbie", "Más allá de la concepción material de la ciencia...", col4);
  newCard("https://tienda.sophosenlinea.com/imagenes/9788491/978849105357.GIF", "google.com", "Biográfico Sherlock", "Viv Croot", "La colección Biográfico ofrece una mirada completamente nueva...", col4);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin = "auto";
  newCard("https://tienda.sophosenlinea.com/imagenes/9786073/978607381208.GIF", "google.com", "Roma Soy Yo", "Santiago Posteguillo", "Después de Julio César el mundo no volvió a ser el mismo...", col4);
  newCard("https://tienda.sophosenlinea.com/imagenes/9788446/978844602434.GIF","google.com", "Historia de Egipto", "Aafaf Luffi Val-Sayyid", "Esta historia de Egipto, desde la conquista árabe en el año 639 hasta hoy...", col4);
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
