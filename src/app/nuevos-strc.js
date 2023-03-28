import { newCard } from "./newCard";

export const Nuevos = () => {
    
  var row = document.createElement("div");
  row.classList.add("row");
  row.style.width = "100%";

  var title = document.createElement("h2");
  title.textContent = "Nuevos Lanzamientos";
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
  dec1.style.width = "150px";
  dec1.style.height = "580px";
  col4.appendChild(dec1);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-1");
  col4.style.alignContent = "center";
  col4.style.alignItems = "center";
  col4.style.justifyContent = "center";
  col4.style.margin = "auto";
  var dec1 = document.createElement("img");
  dec1.src = "https://www.gifss.com/fuego/antorchas/images/antorch-15.gif";
  dec1.style.width = "120px";
  dec1.style.height = "350px";
  col4.appendChild(dec1);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-6");
  newCard("https://us.123rf.com/450wm/gatordawg/gatordawg1504/gatordawg150400051/39441697-ilustraci%C3%B3n-de-un-dise%C3%B1o-del-s%C3%ADmbolo-m%C3%A1gico-en-el-fondo-del-papel-de-pergamino-en-una-relaci%C3%B3n-de-as.jpg?ver=6","pagina1.html", "El Ciclo", "Diego Lemus", "Adéntrate en esta nueva historia...", col4);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-1");
  col4.style.alignContent = "center";
  col4.style.alignItems = "center";
  col4.style.justifyContent = "center";
  col4.style.margin = "auto";
  var dec2 = document.createElement("img");
  dec2.src = "https://www.gifss.com/fuego/antorchas/images/antorch-15.gif";
  dec2.style.width = "120px";
  dec2.style.height = "350px";
  col4.appendChild(dec2);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-2");
  col4.style.alignContent = "center";
  col4.style.alignItems = "center";
  col4.style.justifyContent = "center";
  var dec2 = document.createElement("img");
  dec2.src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png";
  dec2.style.width = "150px";
  dec2.style.height = "580px";
  col4.appendChild(dec2);
  row.appendChild(col4);

  return row;
};
