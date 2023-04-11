/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startApp\": () => (/* binding */ startApp)\n/* harmony export */ });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/app/header.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/app/footer.js\");\n/* harmony import */ var _index_strc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-strc.js */ \"./src/app/index-strc.js\");\n/* harmony import */ var _nuevos_strc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevos-strc.js */ \"./src/app/nuevos-strc.js\");\n/* harmony import */ var _populares_strc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./populares-strc.js */ \"./src/app/populares-strc.js\");\n/* harmony import */ var _pagina1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagina1.js */ \"./src/app/pagina1.js\");\n/* harmony import */ var _pagina2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagina2.js */ \"./src/app/pagina2.js\");\n/* harmony import */ var _pagina3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagina3.js */ \"./src/app/pagina3.js\");\n\n\n\n\n\n\n\n\nvar startApp = function startApp() {\n  document.getElementById(\"header\").appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.Header)());\n  if (document.getElementById(\"index-strc\") != null) {\n    document.getElementById(\"index-strc\").appendChild((0,_index_strc_js__WEBPACK_IMPORTED_MODULE_2__.Index)());\n  }\n  if (document.getElementById(\"nuevos-strc\") != null) {\n    document.getElementById(\"nuevos-strc\").appendChild((0,_nuevos_strc_js__WEBPACK_IMPORTED_MODULE_3__.Nuevos)());\n  }\n  if (document.getElementById(\"footer\") != null) {\n    document.getElementById(\"footer\").appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.Footer)());\n  }\n  if (document.getElementById(\"populares-strc\") != null) {\n    document.getElementById(\"populares-strc\").appendChild((0,_populares_strc_js__WEBPACK_IMPORTED_MODULE_4__.Populares)());\n  }\n  if (document.getElementById(\"pagina1\") != null) {\n    document.getElementById(\"pagina1\").appendChild((0,_pagina1_js__WEBPACK_IMPORTED_MODULE_5__.Pagina1)());\n  }\n  if (document.getElementById(\"pagina2\") != null) {\n    document.getElementById(\"pagina2\").appendChild((0,_pagina2_js__WEBPACK_IMPORTED_MODULE_6__.Pagina2)());\n  }\n  if (document.getElementById(\"pagina3\") != null) {\n    document.getElementById(\"pagina3\").appendChild((0,_pagina3_js__WEBPACK_IMPORTED_MODULE_7__.Pagina3)());\n  }\n};\n\n//# sourceURL=webpack://labsiete/./src/app/app.js?");

/***/ }),

/***/ "./src/app/footer.js":
/*!***************************!*\
  !*** ./src/app/footer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\n//Footer using Bootstrap\nvar Footer = function Footer() {\n  var footer = document.createElement(\"div\");\n  footer.classList.add(\"container-fluid\");\n  footer.classList.add(\"bg-dark\");\n  footer.classList.add(\"text-white\");\n  footer.classList.add(\"text-center\");\n  footer.classList.add(\"p-3\");\n  footer.classList.add(\"mt-5\");\n  footer.innerHTML = \"Biblioteca del Conocimiento\\n© 2023 Copyright\";\n  return footer;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/footer.js?");

/***/ }),

/***/ "./src/app/header.js":
/*!***************************!*\
  !*** ./src/app/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\nvar Header = function Header() {\n  var main = document.createElement(\"div\");\n  main.classList.add(\"main\");\n  main.setAttribute(\"id\", \"main\");\n  main.style.backgroundColor = \"rgb(9, 43, 76)\";\n  main.style.width = \"100%\";\n  main.style.height = \"150px\";\n  main.style.display = \"flex\";\n  main.style.flexDirection = \"row\";\n  main.style.justifyContent = \"center\";\n  main.style.alignItems = \"center\";\n  main.style.alignContent = \"center\";\n  main.style.alignSelf = \"center\";\n  var img = document.createElement(\"img\");\n  img.src = \"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19ec22d-32d9-4ab9-b4d1-0ab18c26e625/devnf5b-551b1daa-7890-4c48-8f9a-93fd3c122113.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWVjMjJkLTMyZDktNGFiOS1iNGQxLTBhYjE4YzI2ZTYyNVwvZGV2bmY1Yi01NTFiMWRhYS03ODkwLTRjNDgtOGY5YS05M2ZkM2MxMjIxMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IOjqtlrmblJLkxbnU1gMaB-qsJMvv4dhoh_dYFflJI8\";\n  img.style.width = \"10%\";\n  img.style.height = \"100%\";\n  img.style.margin = \"auto\";\n  img.style.display = \"block\";\n  main.appendChild(img);\n  var header = document.createElement(\"div\");\n  header.classList.add(\"enc\");\n  header.setAttribute(\"id\", \"enc\");\n  header.style.backgroundColor = \"rgb(9, 43, 76)\";\n  header.style.width = \"80%\";\n  header.style.height = \"100%\";\n  header.style.display = \"flex\";\n  header.style.flexDirection = \"column\";\n  header.style.justifyContent = \"center\";\n  header.style.alignItems = \"center\";\n  header.style.alignContent = \"center\";\n  header.style.alignSelf = \"center\";\n  var brr = document.createElement(\"br\");\n  header.appendChild(brr);\n  var headerText = document.createElement(\"h1\");\n  headerText.textContent = \"BIBLIOTECA DEL CONOCIMIENTO\";\n  header.appendChild(headerText);\n  header.appendChild(brr);\n  var nav = document.createElement(\"div\");\n  nav.style.alignContent = \"center\";\n  nav.style.alignItems = \"center\";\n  nav.style.alignSelf = \"center\";\n  nav.style.justifyContent = \"center\";\n  nav.style.display = 'flex';\n  var ul = document.createElement(\"ul\");\n  var indexli = document.createElement(\"li\");\n  var indexLink = document.createElement(\"a\");\n  indexLink.href = \"index.html\";\n  indexLink.textContent = \"INDEX\";\n  indexli.appendChild(indexLink);\n  ul.appendChild(indexli);\n  var popularli = document.createElement(\"li\");\n  var popularLink = document.createElement(\"a\");\n  popularLink.href = \"populares.html\";\n  popularLink.textContent = \"POPULARES\";\n  popularli.appendChild(popularLink);\n  ul.appendChild(popularli);\n  var newli = document.createElement(\"li\");\n  var newLink = document.createElement(\"a\");\n  newLink.href = \"nuevos.html\";\n  newLink.textContent = \"NUEVOS LANZAMIENTOS\";\n  newli.appendChild(newLink);\n  ul.appendChild(newli);\n  nav.appendChild(ul);\n  header.appendChild(nav);\n  header.appendChild(brr);\n  main.appendChild(header);\n  var img2 = document.createElement(\"img\");\n  img2.src = \"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19ec22d-32d9-4ab9-b4d1-0ab18c26e625/devnf5b-551b1daa-7890-4c48-8f9a-93fd3c122113.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWVjMjJkLTMyZDktNGFiOS1iNGQxLTBhYjE4YzI2ZTYyNVwvZGV2bmY1Yi01NTFiMWRhYS03ODkwLTRjNDgtOGY5YS05M2ZkM2MxMjIxMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IOjqtlrmblJLkxbnU1gMaB-qsJMvv4dhoh_dYFflJI8\";\n  img2.style.width = \"10%\";\n  img2.style.height = \"100%\";\n  img2.style.margin = \"auto\";\n  img2.style.display = \"block\";\n  main.appendChild(img2);\n  return main;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/header.js?");

/***/ }),

/***/ "./src/app/index-strc.js":
/*!*******************************!*\
  !*** ./src/app/index-strc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Index\": () => (/* binding */ Index)\n/* harmony export */ });\nvar Index = function Index() {\n  var row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n  row.style.width = \"100%\";\n  var title = document.createElement(\"h2\");\n  title.textContent = \"¡Bienvenido a la Biblioteca del Conocimiento!\";\n  title.style.textAlign = \"center\";\n  title.style.color = \"black\";\n  title.style.textShadow = \"2px 2px 5px white\";\n  title.style.marginTop = \"20px\";\n  title.style.marginBottom = \"40px\";\n  row.appendChild(title);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-3\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  col4.style.margin = \"auto\";\n  var dec1 = document.createElement(\"img\");\n  dec1.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\n  dec1.style.width = \"120px\";\n  dec1.style.height = \"350px\";\n  col4.appendChild(dec1);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-6\");\n  var imgindex = document.createElement(\"img\");\n  imgindex.src = \"http://www.penumbria.mx/wp-content/uploads/2016/08/bibliobab.jpg\";\n  imgindex.style.width = \"100%\";\n  imgindex.style.height = \"100%\";\n  col4.appendChild(imgindex);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-3\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  col4.style.margin = \"auto\";\n  var dec2 = document.createElement(\"img\");\n  dec2.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\n  dec2.style.width = \"120px\";\n  dec2.style.height = \"350px\";\n  col4.appendChild(dec2);\n  row.appendChild(col4);\n  return row;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/index-strc.js?");

/***/ }),

/***/ "./src/app/newCard.js":
/*!****************************!*\
  !*** ./src/app/newCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newCard\": () => (/* binding */ newCard)\n/* harmony export */ });\nvar newCard = function newCard(img, ref, title, subtitle, description, container) {\n  var card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n  card.classList.add(\"mb-3\");\n  card.style.width = \"350px\";\n  card.style.backgroundColor = \"#DEB887\";\n  card.style.margin = \"auto\";\n  card.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\n  var cardBody = document.createElement(\"div\");\n  cardBody.classList.add(\"card-body\");\n  var cardimg = document.createElement(\"img\");\n  var a = document.createElement(\"a\");\n  a.href = ref;\n  cardimg.classList.add(\"card-img-top\");\n  cardimg.src = img;\n  cardimg.innerHTML = \"<a href='test.html'></a>\";\n  cardimg.style.width = \"100%\";\n  cardimg.style.height = \"350px\";\n  cardimg.style.objectFit = \"cover\";\n  a.appendChild(cardimg);\n  var brr = document.createElement(\"br\");\n  cardBody.appendChild(brr);\n  var cardTitle = document.createElement(\"h3\");\n  cardTitle.classList.add(\"card-title\");\n  cardTitle.innerHTML = title;\n  var cardSubtitle = document.createElement(\"h5\");\n  cardSubtitle.classList.add(\"card-subtitle\");\n  cardSubtitle.innerHTML = subtitle;\n  var cardText = document.createElement(\"p\");\n  cardText.classList.add(\"card-text\");\n  cardText.innerHTML = description;\n  cardBody.appendChild(a);\n  cardBody.appendChild(cardTitle);\n  cardBody.appendChild(cardSubtitle);\n  cardBody.appendChild(brr);\n  cardBody.appendChild(cardText);\n  card.appendChild(cardBody);\n  container.appendChild(card);\n};\n\n//# sourceURL=webpack://labsiete/./src/app/newCard.js?");

/***/ }),

/***/ "./src/app/nuevos-strc.js":
/*!********************************!*\
  !*** ./src/app/nuevos-strc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nuevos\": () => (/* binding */ Nuevos)\n/* harmony export */ });\n/* harmony import */ var _newCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newCard */ \"./src/app/newCard.js\");\n\nvar Nuevos = function Nuevos() {\n  var row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n  row.style.width = \"100%\";\n  var title = document.createElement(\"h2\");\n  title.textContent = \"Nuevos Lanzamientos\";\n  title.style.textAlign = \"center\";\n  title.style.color = \"black\";\n  title.style.textShadow = \"2px 2px 5px white\";\n  title.style.marginTop = \"20px\";\n  title.style.marginBottom = \"40px\";\n  row.appendChild(title);\n\n  // Adding small cards\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-2\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  var dec1 = document.createElement(\"img\");\n  dec1.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\n  dec1.style.width = \"150px\";\n  dec1.style.height = \"580px\";\n  col4.appendChild(dec1);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-1\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  col4.style.margin = \"auto\";\n  var dec1 = document.createElement(\"img\");\n  dec1.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\n  dec1.style.width = \"120px\";\n  dec1.style.height = \"350px\";\n  col4.appendChild(dec1);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-6\");\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://us.123rf.com/450wm/gatordawg/gatordawg1504/gatordawg150400051/39441697-ilustraci%C3%B3n-de-un-dise%C3%B1o-del-s%C3%ADmbolo-m%C3%A1gico-en-el-fondo-del-papel-de-pergamino-en-una-relaci%C3%B3n-de-as.jpg?ver=6\", \"pagina1.html\", \"El Ciclo\", \"Diego Lemus\", \"Adéntrate en esta nueva historia...\", col4);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-1\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  col4.style.margin = \"auto\";\n  var dec2 = document.createElement(\"img\");\n  dec2.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\n  dec2.style.width = \"120px\";\n  dec2.style.height = \"350px\";\n  col4.appendChild(dec2);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-2\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  var dec2 = document.createElement(\"img\");\n  dec2.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\n  dec2.style.width = \"150px\";\n  dec2.style.height = \"580px\";\n  col4.appendChild(dec2);\n  row.appendChild(col4);\n  return row;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/nuevos-strc.js?");

/***/ }),

/***/ "./src/app/pagina1.js":
/*!****************************!*\
  !*** ./src/app/pagina1.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagina1\": () => (/* binding */ Pagina1)\n/* harmony export */ });\nvar Pagina1 = function Pagina1() {\n  var main = document.createElement(\"div\");\n  main.style.width = \"100%\";\n  main.style.height = \"100%\";\n  var title = document.createElement(\"h2\");\n  title.textContent = \"El Ciclo\";\n  title.style.textAlign = \"center\";\n  title.style.color = \"black\";\n  title.style.textShadow = \"2px 2px 5px white\";\n  title.style.marginTop = \"20px\";\n  title.style.marginBottom = \"20px\";\n  main.appendChild(title);\n  var pagina = document.createElement(\"div\");\n  pagina.style.backgroundColor = \"white\";\n  pagina.style.width = \"60%\";\n  pagina.style.height = \"100%\";\n  pagina.style.display = \"flex\";\n  pagina.style.flexDirection = \"column\";\n  pagina.style.justifyContent = \"center\";\n  pagina.style.alignItems = \"center\";\n  pagina.style.alignContent = \"center\";\n  pagina.style.alignSelf = \"center\";\n  pagina.style.margin = \"auto\";\n  pagina.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\n  pagina.style.borderRadius = \"10px\";\n  pagina.style.padding = \"10px\";\n  var brr = document.createElement(\"br\");\n  pagina.appendChild(brr);\n  var pagetitle = document.createElement(\"h3\");\n  pagetitle.textContent = \"Pagina 1\";\n  pagina.appendChild(pagetitle);\n  pagina.appendChild(brr);\n  pagina.appendChild(brr);\n  var pagebody = document.createElement(\"p\");\n  pagebody.textContent = \"Te sientes confundido, tu cuerpo no responde, lo unico que ves es un destello brillante ¿Dónde estás? ¿Has muerto? No recuerdas nada de tu pasado, simplemente te encuentras en el presente ¿Esta es la realidad? Tienes mucha curiosidad por saber qué sucede.\";\n  pagina.appendChild(pagebody);\n  pagina.appendChild(brr);\n  var pageimg = document.createElement(\"img\");\n  pageimg.src = \"https://www.seekpng.com/png/small/437-4371096_destello-de-limpieza-png.png\";\n  pageimg.style.width = \"70%\";\n  pageimg.style.height = \"250px\";\n  pageimg.style.objectFit = \"cover\";\n  pagina.appendChild(pageimg);\n  var brr1 = document.createElement(\"br\");\n  pagina.appendChild(brr1);\n  var linkdiv = document.createElement(\"div\");\n  linkdiv.style.alignContent = \"center\";\n  linkdiv.style.alignItems = \"center\";\n  linkdiv.style.alignSelf = \"center\";\n  linkdiv.style.justifyContent = \"center\";\n  linkdiv.style.backgroundColor = \"rgb(9, 43, 76)\";\n  linkdiv.style.display = 'flex';\n  linkdiv.style.marginTop = \"30px\";\n  var ul = document.createElement(\"ul\");\n  var prevpage = document.createElement(\"li\");\n  var prevpagelink = document.createElement(\"a\");\n  prevpagelink.href = \"nuevos.html\";\n  prevpagelink.textContent = \"Volver\";\n  prevpage.appendChild(prevpagelink);\n  ul.appendChild(prevpage);\n  var nextpage = document.createElement(\"li\");\n  var nextpagelink = document.createElement(\"a\");\n  nextpagelink.href = \"pagina2.html\";\n  nextpagelink.textContent = \"Siguiente\";\n  nextpage.appendChild(nextpagelink);\n  ul.appendChild(nextpage);\n  linkdiv.appendChild(ul);\n  pagina.appendChild(linkdiv);\n  main.appendChild(pagina);\n  return main;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/pagina1.js?");

/***/ }),

/***/ "./src/app/pagina2.js":
/*!****************************!*\
  !*** ./src/app/pagina2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagina2\": () => (/* binding */ Pagina2)\n/* harmony export */ });\nvar Pagina2 = function Pagina2() {\n  var main = document.createElement(\"div\");\n  main.style.width = \"100%\";\n  main.style.height = \"100%\";\n  var title = document.createElement(\"h2\");\n  title.textContent = \"El Ciclo\";\n  title.style.textAlign = \"center\";\n  title.style.color = \"black\";\n  title.style.textShadow = \"2px 2px 5px white\";\n  title.style.marginTop = \"20px\";\n  title.style.marginBottom = \"20px\";\n  main.appendChild(title);\n  var pagina = document.createElement(\"div\");\n  pagina.style.backgroundColor = \"white\";\n  pagina.style.width = \"60%\";\n  pagina.style.height = \"100%\";\n  pagina.style.display = \"flex\";\n  pagina.style.flexDirection = \"column\";\n  pagina.style.justifyContent = \"center\";\n  pagina.style.alignItems = \"center\";\n  pagina.style.alignContent = \"center\";\n  pagina.style.alignSelf = \"center\";\n  pagina.style.margin = \"auto\";\n  pagina.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\n  pagina.style.borderRadius = \"10px\";\n  pagina.style.padding = \"10px\";\n  var brr = document.createElement(\"br\");\n  pagina.appendChild(brr);\n  var pagetitle = document.createElement(\"h3\");\n  pagetitle.textContent = \"Pagina 2\";\n  pagina.appendChild(pagetitle);\n  pagina.appendChild(brr);\n  pagina.appendChild(brr);\n  var pagebody = document.createElement(\"p\");\n  pagebody.textContent = \"El destello se va, tienes la oprtunidad de ver a tu alrededor, no sabes en dónde estás. Hay dos puertas, son idénticas. Al lado tuya hay una llave, parece ser de las puertas. No hay nada más, tienes que entrar a una puerta ¿Cuál eliges?\";\n  pagina.appendChild(pagebody);\n  pagina.appendChild(brr);\n  var pageimg = document.createElement(\"img\");\n  pageimg.src = \"https://st2.depositphotos.com/1663997/5332/v/600/depositphotos_53325493-stock-illustration-the-wood-door-icon.jpg\";\n  pageimg.style.width = \"70%\";\n  pageimg.style.height = \"250px\";\n  pageimg.style.objectFit = \"cover\";\n  pagina.appendChild(pageimg);\n  var brr1 = document.createElement(\"br\");\n  pagina.appendChild(brr1);\n  var linkdiv = document.createElement(\"div\");\n  linkdiv.style.alignContent = \"center\";\n  linkdiv.style.alignItems = \"center\";\n  linkdiv.style.alignSelf = \"center\";\n  linkdiv.style.justifyContent = \"center\";\n  linkdiv.style.backgroundColor = \"rgb(9, 43, 76)\";\n  linkdiv.style.display = 'flex';\n  linkdiv.style.marginTop = \"30px\";\n  var ul = document.createElement(\"ul\");\n  var prevpage = document.createElement(\"li\");\n  var prevpagelink = document.createElement(\"a\");\n  prevpagelink.href = \"pagina1.html\";\n  prevpagelink.textContent = \"Anterior\";\n  prevpage.appendChild(prevpagelink);\n  ul.appendChild(prevpage);\n  var nextpage = document.createElement(\"li\");\n  var nextpagelink = document.createElement(\"a\");\n  nextpagelink.href = \"pagina3.html\";\n  nextpagelink.textContent = \"Siguiente\";\n  nextpage.appendChild(nextpagelink);\n  ul.appendChild(nextpage);\n  linkdiv.appendChild(ul);\n  pagina.appendChild(linkdiv);\n  main.appendChild(pagina);\n  return main;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/pagina2.js?");

/***/ }),

/***/ "./src/app/pagina3.js":
/*!****************************!*\
  !*** ./src/app/pagina3.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagina3\": () => (/* binding */ Pagina3)\n/* harmony export */ });\nvar Pagina3 = function Pagina3() {\n  var main = document.createElement(\"div\");\n  main.style.width = \"100%\";\n  main.style.height = \"100%\";\n  var title = document.createElement(\"h2\");\n  title.textContent = \"El Ciclo\";\n  title.style.textAlign = \"center\";\n  title.style.color = \"black\";\n  title.style.textShadow = \"2px 2px 5px white\";\n  title.style.marginTop = \"20px\";\n  title.style.marginBottom = \"20px\";\n  main.appendChild(title);\n  var pagina = document.createElement(\"div\");\n  pagina.style.backgroundColor = \"white\";\n  pagina.style.width = \"60%\";\n  pagina.style.height = \"100%\";\n  pagina.style.display = \"flex\";\n  pagina.style.flexDirection = \"column\";\n  pagina.style.justifyContent = \"center\";\n  pagina.style.alignItems = \"center\";\n  pagina.style.alignContent = \"center\";\n  pagina.style.alignSelf = \"center\";\n  pagina.style.margin = \"auto\";\n  pagina.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\n  pagina.style.borderRadius = \"10px\";\n  pagina.style.padding = \"10px\";\n  var brr = document.createElement(\"br\");\n  pagina.appendChild(brr);\n  var pagetitle = document.createElement(\"h3\");\n  pagetitle.textContent = \"Pagina 3\";\n  pagina.appendChild(pagetitle);\n  pagina.appendChild(brr);\n  pagina.appendChild(brr);\n  var pagebody = document.createElement(\"p\");\n  pagebody.textContent = \"Al entrar te das cuenta que es un salón totalmente vacío, de alguna extraña forma sientes algún tipo de nostalgia, no has dado un paso y sientes que el ambiente te absorbe ¿Quieres caminar hasta encontrar algo o regresar?\";\n  pagina.appendChild(pagebody);\n  pagina.appendChild(brr);\n  var pageimg = document.createElement(\"img\");\n  pageimg.src = \"https://media-cdn.tripadvisor.com/media/photo-s/06/1b/9f/a0/aldea-el-lugar-de-los.jpg\";\n  pageimg.style.width = \"70%\";\n  pageimg.style.height = \"250px\";\n  pageimg.style.objectFit = \"cover\";\n  pagina.appendChild(pageimg);\n  var brr1 = document.createElement(\"br\");\n  pagina.appendChild(brr1);\n  var linkdiv = document.createElement(\"div\");\n  linkdiv.style.alignContent = \"center\";\n  linkdiv.style.alignItems = \"center\";\n  linkdiv.style.alignSelf = \"center\";\n  linkdiv.style.justifyContent = \"center\";\n  linkdiv.style.backgroundColor = \"rgb(9, 43, 76)\";\n  linkdiv.style.display = 'flex';\n  linkdiv.style.marginTop = \"30px\";\n  var ul = document.createElement(\"ul\");\n  var prevpage = document.createElement(\"li\");\n  var prevpagelink = document.createElement(\"a\");\n  prevpagelink.href = \"pagina2.html\";\n  prevpagelink.textContent = \"Anterior\";\n  prevpage.appendChild(prevpagelink);\n  ul.appendChild(prevpage);\n  var nextpage = document.createElement(\"li\");\n  var nextpagelink = document.createElement(\"a\");\n  nextpagelink.href = \"pagina3.html\";\n  nextpagelink.textContent = \"Siguiente\";\n  nextpage.appendChild(nextpagelink);\n  ul.appendChild(nextpage);\n  linkdiv.appendChild(ul);\n  pagina.appendChild(linkdiv);\n  main.appendChild(pagina);\n  return main;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/pagina3.js?");

/***/ }),

/***/ "./src/app/populares-strc.js":
/*!***********************************!*\
  !*** ./src/app/populares-strc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Populares\": () => (/* binding */ Populares)\n/* harmony export */ });\n/* harmony import */ var _newCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newCard */ \"./src/app/newCard.js\");\n\nvar Populares = function Populares() {\n  var row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n  row.style.width = \"100%\";\n  var title = document.createElement(\"h2\");\n  title.textContent = \"Libros Populares\";\n  title.style.textAlign = \"center\";\n  title.style.color = \"black\";\n  title.style.textShadow = \"2px 2px 5px white\";\n  title.style.marginTop = \"20px\";\n  title.style.marginBottom = \"40px\";\n  row.appendChild(title);\n\n  // Adding small cards\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-2\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  var dec1 = document.createElement(\"img\");\n  dec1.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\n  dec1.style.width = \"180px\";\n  dec1.style.height = \"950px\";\n  col4.appendChild(dec1);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9788417/978841739957.GIF\", \"https://tienda.sophosenlinea.com/\", \"La Física de Dios\", \"Joseph Selbie\", \"Más allá de la concepción material de la ciencia...\", col4);\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9788491/978849105357.GIF\", \"https://tienda.sophosenlinea.com/\", \"Biográfico Sherlock\", \"Viv Croot\", \"La colección Biográfico ofrece una mirada completamente nueva...\", col4);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  col4.style.margin = \"auto\";\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9786073/978607381208.GIF\", \"https://tienda.sophosenlinea.com/\", \"Roma Soy Yo\", \"Santiago Posteguillo\", \"Después de Julio César el mundo no volvió a ser el mismo...\", col4);\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9788446/978844602434.GIF\", \"https://tienda.sophosenlinea.com/\", \"Historia de Egipto\", \"Aafaf Luffi Val-Sayyid\", \"Esta historia de Egipto, desde la conquista árabe en el año 639 hasta hoy...\", col4);\n  row.appendChild(col4);\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-2\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  var dec2 = document.createElement(\"img\");\n  dec2.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\n  dec2.style.width = \"180px\";\n  dec2.style.height = \"950px\";\n  col4.appendChild(dec2);\n  row.appendChild(col4);\n  return row;\n};\n\n//# sourceURL=webpack://labsiete/./src/app/populares-strc.js?");

/***/ }),

/***/ "./src/app/styles.js":
/*!***************************!*\
  !*** ./src/app/styles.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n\n\n\n//# sourceURL=webpack://labsiete/./src/app/styles.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.js */ \"./src/app/app.js\");\n/* harmony import */ var _src_app_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/app/styles.js */ \"./src/app/styles.js\");\n\n\n(0,_app_app_js__WEBPACK_IMPORTED_MODULE_0__.startApp)();\n\n//# sourceURL=webpack://labsiete/./src/index.js?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://labsiete/./node_modules/bootstrap/dist/css/bootstrap.css?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://labsiete/./src/styles/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;