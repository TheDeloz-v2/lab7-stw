export const Pagina2 = () => {
    var main = document.createElement("div");
    main.style.width = "100%";
    main.style.height = "100%";

    var title = document.createElement("h2");
    title.textContent = "El Ciclo";
    title.style.textAlign = "center";
    title.style.color = "black";
    title.style.textShadow = "2px 2px 5px white";
    title.style.marginTop = "20px";
    title.style.marginBottom = "20px";
    main.appendChild(title);
    
    var pagina = document.createElement("div");
    pagina.style.backgroundColor = "white";
    pagina.style.width = "60%";
    pagina.style.height = "100%";
    pagina.style.display = "flex";
    pagina.style.flexDirection = "column";
    pagina.style.justifyContent = "center";
    pagina.style.alignItems = "center";
    pagina.style.alignContent = "center";
    pagina.style.alignSelf = "center";
    pagina.style.margin = "auto";
    pagina.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    pagina.style.borderRadius = "10px";
    pagina.style.padding = "10px";
    
    var brr = document.createElement("br");
    pagina.appendChild(brr);

    var pagetitle = document.createElement("h3");
    pagetitle.textContent = "Pagina 2";
    pagina.appendChild(pagetitle);

    pagina.appendChild(brr);
    pagina.appendChild(brr);

    var pagebody = document.createElement("p");
    pagebody.textContent = "El destello se va, tienes la oprtunidad de ver a tu alrededor, no sabes en dónde estás. Hay dos puertas, son idénticas. Al lado tuya hay una llave, parece ser de las puertas. No hay nada más, tienes que entrar a una puerta ¿Cuál eliges?";
    pagina.appendChild(pagebody);

    pagina.appendChild(brr);

    var pageimg = document.createElement("img");
    pageimg.src = "https://st2.depositphotos.com/1663997/5332/v/600/depositphotos_53325493-stock-illustration-the-wood-door-icon.jpg";
    pageimg.style.width = "70%";
    pageimg.style.height = "250px";
    pageimg.style.objectFit = "cover";
    pagina.appendChild(pageimg);

    var brr1 = document.createElement("br");
    pagina.appendChild(brr1);

    var linkdiv = document.createElement("div");
    linkdiv.style.alignContent = "center";
    linkdiv.style.alignItems = "center";
    linkdiv.style.alignSelf = "center";
    linkdiv.style.justifyContent = "center";
    linkdiv.style.backgroundColor = "rgb(9, 43, 76)";
    linkdiv.style.display = 'flex';
    linkdiv.style.marginTop = "30px";

    var ul = document.createElement("ul");

    var prevpage = document.createElement("li");
    var prevpagelink = document.createElement("a");
    prevpagelink.href = "pagina1.html";
    prevpagelink.textContent = "Anterior";
    prevpage.appendChild(prevpagelink);
    ul.appendChild(prevpage);

    var nextpage = document.createElement("li");
    var nextpagelink = document.createElement("a");
    nextpagelink.href = "pagina3.html";
    nextpagelink.textContent = "Siguiente";
    nextpage.appendChild(nextpagelink);
    ul.appendChild(nextpage);

    linkdiv.appendChild(ul);

    pagina.appendChild(linkdiv);

    main.appendChild(pagina);
    
    return main;
}