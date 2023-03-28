export const Pagina3 = () => {
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

    var pagetitle = document.createElement("h2");
    pagetitle.textContent = "Pagina 3";
    pagina.appendChild(pagetitle);

    pagina.appendChild(brr);
    pagina.appendChild(brr);

    var pagebody = document.createElement("p");
    pagebody.textContent = "Al entrar te das cuenta que es un salón totalmente vacío, de alguna extraña forma sientes algún tipo de nostalgia, no has dado un paso y sientes que el ambiente te absorbe ¿Quieres caminar hasta encontrar algo o regresar?";
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
    prevpagelink.href = "pagina2.html";
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
    
    return pagina;
}