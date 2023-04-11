"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newCard = void 0;
var newCard = function newCard(img, ref, title, subtitle, description, container) {
  var card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mb-3");
  card.style.width = "350px";
  card.style.backgroundColor = "#DEB887";
  card.style.margin = "auto";
  card.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  var cardimg = document.createElement("img");
  var a = document.createElement("a");
  a.href = ref;
  cardimg.classList.add("card-img-top");
  cardimg.src = img;
  cardimg.innerHTML = "<a href='test.html'></a>";
  cardimg.style.width = "100%";
  cardimg.style.height = "350px";
  cardimg.style.objectFit = "cover";
  a.appendChild(cardimg);
  var brr = document.createElement("br");
  cardBody.appendChild(brr);
  var cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  var cardSubtitle = document.createElement("h5");
  cardSubtitle.classList.add("card-subtitle");
  cardSubtitle.innerHTML = subtitle;
  var cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = description;
  cardBody.appendChild(a);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(brr);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);
  container.appendChild(card);
};
exports.newCard = newCard;