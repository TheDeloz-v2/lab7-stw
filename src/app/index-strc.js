export const Index = () => {
    var row = document.createElement("div");
    row.classList.add("row");
    row.style.width = "100%";
  
    var title = document.createElement("h2");
    title.textContent = "¡Bienvenido a la Biblioteca del Conocimiento!";
    title.style.textAlign = "center";
    title.style.color = "black";
    title.style.textShadow = "2px 2px 5px white";
    title.style.marginTop = "20px";
    title.style.marginBottom = "40px";
    row.appendChild(title);
  
    var col4 = document.createElement("div");
    col4.classList.add("col-3");
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
    var imgindex = document.createElement("img");
    imgindex.src = "http://www.penumbria.mx/wp-content/uploads/2016/08/bibliobab.jpg";
    imgindex.style.width = "100%";
    imgindex.style.height = "100%";
    col4.appendChild(imgindex);
    row.appendChild(col4);
  
    var col4 = document.createElement("div");
    col4.classList.add("col-3");
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
  
    return row;
  };