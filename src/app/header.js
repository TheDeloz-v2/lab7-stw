export const Header = () => {

    var main = document.createElement("div");
    main.classList.add("main");
    main.setAttribute("id", "main");
    main.style.backgroundColor = "rgb(9, 43, 76)";
    main.style.width = "100%";
    main.style.height = "150px";
    main.style.display = "flex";
    main.style.flexDirection = "row";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    main.style.alignContent = "center";
    main.style.alignSelf = "center";

    var img = document.createElement("img");
    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19ec22d-32d9-4ab9-b4d1-0ab18c26e625/devnf5b-551b1daa-7890-4c48-8f9a-93fd3c122113.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWVjMjJkLTMyZDktNGFiOS1iNGQxLTBhYjE4YzI2ZTYyNVwvZGV2bmY1Yi01NTFiMWRhYS03ODkwLTRjNDgtOGY5YS05M2ZkM2MxMjIxMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IOjqtlrmblJLkxbnU1gMaB-qsJMvv4dhoh_dYFflJI8";
    img.style.width = "10%";
    img.style.height = "100%";
    img.style.margin = "auto";
    img.style.display = "block";
    main.appendChild(img);

    var header = document.createElement("div");
    header.classList.add("enc");
    header.setAttribute("id", "enc");
    header.style.backgroundColor = "rgb(9, 43, 76)";
    header.style.width = "80%";
    header.style.height = "100%";
    header.style.display = "flex";
    header.style.flexDirection = "column";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.alignContent = "center";
    header.style.alignSelf = "center";
    
    var brr = document.createElement("br");
    header.appendChild(brr);

    var headerText = document.createElement("h1");
    headerText.textContent = "BIBLIOTECA DEL CONOCIMIENTO";
    header.appendChild(headerText);

    header.appendChild(brr);
    var nav = document.createElement("div");
    nav.style.alignContent = "center";
    nav.style.alignItems = "center";
    nav.style.alignSelf = "center";
    nav.style.justifyContent = "center";
    nav.style.display = 'flex';

    var ul = document.createElement("ul");

    var indexli = document.createElement("li");
    var indexLink = document.createElement("a");
    indexLink.href = "index.html";
    indexLink.textContent = "INDEX";
    indexli.appendChild(indexLink);
    ul.appendChild(indexli);

    var popularli = document.createElement("li");
    var popularLink = document.createElement("a");
    popularLink.href = "populares.html";
    popularLink.textContent = "POPULARES";
    popularli.appendChild(popularLink);
    ul.appendChild(popularli);

    var newli = document.createElement("li");
    var newLink = document.createElement("a");
    newLink.href = "nuevos.html";
    newLink.textContent = "NUEVOS LANZAMIENTOS";
    newli.appendChild(newLink);
    ul.appendChild(newli);


    nav.appendChild(ul);

    header.appendChild(nav);

    header.appendChild(brr);
    main.appendChild(header);

    var img2 = document.createElement("img");
    img2.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19ec22d-32d9-4ab9-b4d1-0ab18c26e625/devnf5b-551b1daa-7890-4c48-8f9a-93fd3c122113.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWVjMjJkLTMyZDktNGFiOS1iNGQxLTBhYjE4YzI2ZTYyNVwvZGV2bmY1Yi01NTFiMWRhYS03ODkwLTRjNDgtOGY5YS05M2ZkM2MxMjIxMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IOjqtlrmblJLkxbnU1gMaB-qsJMvv4dhoh_dYFflJI8";
    img2.style.width = "10%";
    img2.style.height = "100%";
    img2.style.margin = "auto";
    img2.style.display = "block";
    main.appendChild(img2);
    
  return main;
}