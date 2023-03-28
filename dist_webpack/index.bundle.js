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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://labsiete/./node_modules/bootstrap/dist/css/bootstrap.css?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://labsiete/./src/styles/styles.css?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startApp\": () => (/* binding */ startApp)\n/* harmony export */ });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/app/header.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/app/footer.js\");\n/* harmony import */ var _index_strc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-strc.js */ \"./src/app/index-strc.js\");\n/* harmony import */ var _nuevos_strc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevos-strc.js */ \"./src/app/nuevos-strc.js\");\n/* harmony import */ var _structure2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./structure2.js */ \"./src/app/structure2.js\");\n/* harmony import */ var _pagina1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagina1.js */ \"./src/app/pagina1.js\");\n/* harmony import */ var _pagina2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagina2.js */ \"./src/app/pagina2.js\");\n/* harmony import */ var _pagina3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagina3.js */ \"./src/app/pagina3.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst startApp = () => {\r\n  document.getElementById(\"header\").appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.Header)());\r\n  \r\n  if (document.getElementById(\"index-strc\") != null) {\r\n    document.getElementById(\"index-strc\").appendChild((0,_index_strc_js__WEBPACK_IMPORTED_MODULE_2__.Index)());\r\n  }\r\n\r\n  if (document.getElementById(\"nuevos-strc\") != null) {\r\n    document.getElementById(\"nuevos-strc\").appendChild((0,_nuevos_strc_js__WEBPACK_IMPORTED_MODULE_3__.Nuevos)());\r\n  }\r\n  if (document.getElementById(\"footer\") != null) {\r\n    document.getElementById(\"footer\").appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.Footer)());\r\n  }\r\n  if (document.getElementById(\"populares-strc\") != null) {\r\n    document.getElementById(\"populares-strc\").appendChild((0,_structure2_js__WEBPACK_IMPORTED_MODULE_4__.Structure2)());\r\n  }\r\n  if (document.getElementById(\"pagina1\") != null) {\r\n    document.getElementById(\"pagina1\").appendChild((0,_pagina1_js__WEBPACK_IMPORTED_MODULE_5__.Pagina1)());\r\n  }\r\n\r\n  if (document.getElementById(\"pagina2\") != null) {\r\n    document.getElementById(\"pagina2\").appendChild((0,_pagina2_js__WEBPACK_IMPORTED_MODULE_6__.Pagina2)());\r\n  }\r\n\r\n  if (document.getElementById(\"pagina3\") != null) {\r\n    document.getElementById(\"pagina3\").appendChild((0,_pagina3_js__WEBPACK_IMPORTED_MODULE_7__.Pagina3)());\r\n  }\r\n};\n\n//# sourceURL=webpack://labsiete/./src/app/app.js?");

/***/ }),

/***/ "./src/app/footer.js":
/*!***************************!*\
  !*** ./src/app/footer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\n//Footer using Bootstrap\r\nconst Footer = () => {\r\n    var footer = document.createElement(\"div\");\r\n    footer.classList.add(\"container-fluid\");\r\n    footer.classList.add(\"bg-dark\");\r\n    footer.classList.add(\"text-white\");\r\n    footer.classList.add(\"text-center\");\r\n    footer.classList.add(\"p-3\");\r\n    footer.classList.add(\"mt-5\");\r\n    footer.innerHTML = \"Biblioteca del Conocimiento\\n© 2023 Copyright\";\r\n    return footer;\r\n}\n\n//# sourceURL=webpack://labsiete/./src/app/footer.js?");

/***/ }),

/***/ "./src/app/header.js":
/*!***************************!*\
  !*** ./src/app/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\nconst Header = () => {\r\n\r\n    var main = document.createElement(\"div\");\r\n    main.classList.add(\"main\");\r\n    main.setAttribute(\"id\", \"main\");\r\n    main.style.backgroundColor = \"rgb(9, 43, 76)\";\r\n    main.style.width = \"100%\";\r\n    main.style.height = \"150px\";\r\n    main.style.display = \"flex\";\r\n    main.style.flexDirection = \"row\";\r\n    main.style.justifyContent = \"center\";\r\n    main.style.alignItems = \"center\";\r\n    main.style.alignContent = \"center\";\r\n    main.style.alignSelf = \"center\";\r\n\r\n    var img = document.createElement(\"img\");\r\n    img.src = \"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19ec22d-32d9-4ab9-b4d1-0ab18c26e625/devnf5b-551b1daa-7890-4c48-8f9a-93fd3c122113.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWVjMjJkLTMyZDktNGFiOS1iNGQxLTBhYjE4YzI2ZTYyNVwvZGV2bmY1Yi01NTFiMWRhYS03ODkwLTRjNDgtOGY5YS05M2ZkM2MxMjIxMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IOjqtlrmblJLkxbnU1gMaB-qsJMvv4dhoh_dYFflJI8\";\r\n    img.style.width = \"10%\";\r\n    img.style.height = \"100%\";\r\n    img.style.margin = \"auto\";\r\n    img.style.display = \"block\";\r\n    main.appendChild(img);\r\n\r\n    var header = document.createElement(\"div\");\r\n    header.classList.add(\"enc\");\r\n    header.setAttribute(\"id\", \"enc\");\r\n    header.style.backgroundColor = \"rgb(9, 43, 76)\";\r\n    header.style.width = \"80%\";\r\n    header.style.height = \"100%\";\r\n    header.style.display = \"flex\";\r\n    header.style.flexDirection = \"column\";\r\n    header.style.justifyContent = \"center\";\r\n    header.style.alignItems = \"center\";\r\n    header.style.alignContent = \"center\";\r\n    header.style.alignSelf = \"center\";\r\n    \r\n    var brr = document.createElement(\"br\");\r\n    header.appendChild(brr);\r\n\r\n    var headerText = document.createElement(\"h1\");\r\n    headerText.textContent = \"BIBLIOTECA DEL CONOCIMIENTO\";\r\n    header.appendChild(headerText);\r\n\r\n    header.appendChild(brr);\r\n    var nav = document.createElement(\"div\");\r\n    nav.style.alignContent = \"center\";\r\n    nav.style.alignItems = \"center\";\r\n    nav.style.alignSelf = \"center\";\r\n    nav.style.justifyContent = \"center\";\r\n    nav.style.display = 'flex';\r\n\r\n    var ul = document.createElement(\"ul\");\r\n\r\n    var indexli = document.createElement(\"li\");\r\n    var indexLink = document.createElement(\"a\");\r\n    indexLink.href = \"index.html\";\r\n    indexLink.textContent = \"INDEX\";\r\n    indexli.appendChild(indexLink);\r\n    ul.appendChild(indexli);\r\n\r\n    var popularli = document.createElement(\"li\");\r\n    var popularLink = document.createElement(\"a\");\r\n    popularLink.href = \"populares.html\";\r\n    popularLink.textContent = \"POPULARES\";\r\n    popularli.appendChild(popularLink);\r\n    ul.appendChild(popularli);\r\n\r\n    var newli = document.createElement(\"li\");\r\n    var newLink = document.createElement(\"a\");\r\n    newLink.href = \"nuevos.html\";\r\n    newLink.textContent = \"NUEVOS LANZAMIENTOS\";\r\n    newli.appendChild(newLink);\r\n    ul.appendChild(newli);\r\n\r\n\r\n    nav.appendChild(ul);\r\n\r\n    header.appendChild(nav);\r\n\r\n    header.appendChild(brr);\r\n    main.appendChild(header);\r\n\r\n    var img2 = document.createElement(\"img\");\r\n    img2.src = \"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19ec22d-32d9-4ab9-b4d1-0ab18c26e625/devnf5b-551b1daa-7890-4c48-8f9a-93fd3c122113.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWVjMjJkLTMyZDktNGFiOS1iNGQxLTBhYjE4YzI2ZTYyNVwvZGV2bmY1Yi01NTFiMWRhYS03ODkwLTRjNDgtOGY5YS05M2ZkM2MxMjIxMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IOjqtlrmblJLkxbnU1gMaB-qsJMvv4dhoh_dYFflJI8\";\r\n    img2.style.width = \"10%\";\r\n    img2.style.height = \"100%\";\r\n    img2.style.margin = \"auto\";\r\n    img2.style.display = \"block\";\r\n    main.appendChild(img2);\r\n    \r\n  return main;\r\n}\n\n//# sourceURL=webpack://labsiete/./src/app/header.js?");

/***/ }),

/***/ "./src/app/index-strc.js":
/*!*******************************!*\
  !*** ./src/app/index-strc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Index\": () => (/* binding */ Index)\n/* harmony export */ });\nconst Index = () => {\r\n    var row = document.createElement(\"div\");\r\n    row.classList.add(\"row\");\r\n    row.style.width = \"100%\";\r\n  \r\n    var title = document.createElement(\"h2\");\r\n    title.textContent = \"¡Bienvenido a la Biblioteca del Conocimiento!\";\r\n    title.style.textAlign = \"center\";\r\n    title.style.color = \"black\";\r\n    title.style.textShadow = \"2px 2px 5px white\";\r\n    title.style.marginTop = \"20px\";\r\n    title.style.marginBottom = \"40px\";\r\n    row.appendChild(title);\r\n  \r\n    var col4 = document.createElement(\"div\");\r\n    col4.classList.add(\"col-3\");\r\n    col4.style.alignContent = \"center\";\r\n    col4.style.alignItems = \"center\";\r\n    col4.style.justifyContent = \"center\";\r\n    col4.style.margin = \"auto\";\r\n    var dec1 = document.createElement(\"img\");\r\n    dec1.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\r\n    dec1.style.width = \"120px\";\r\n    dec1.style.height = \"350px\";\r\n    col4.appendChild(dec1);\r\n    row.appendChild(col4);\r\n  \r\n    var col4 = document.createElement(\"div\");\r\n    col4.classList.add(\"col-6\");\r\n    var imgindex = document.createElement(\"img\");\r\n    imgindex.src = \"http://www.penumbria.mx/wp-content/uploads/2016/08/bibliobab.jpg\";\r\n    imgindex.style.width = \"100%\";\r\n    imgindex.style.height = \"100%\";\r\n    col4.appendChild(imgindex);\r\n    row.appendChild(col4);\r\n  \r\n    var col4 = document.createElement(\"div\");\r\n    col4.classList.add(\"col-3\");\r\n    col4.style.alignContent = \"center\";\r\n    col4.style.alignItems = \"center\";\r\n    col4.style.justifyContent = \"center\";\r\n    col4.style.margin = \"auto\";\r\n    var dec2 = document.createElement(\"img\");\r\n    dec2.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\r\n    dec2.style.width = \"120px\";\r\n    dec2.style.height = \"350px\";\r\n    col4.appendChild(dec2);\r\n    row.appendChild(col4);\r\n  \r\n    return row;\r\n  };\n\n//# sourceURL=webpack://labsiete/./src/app/index-strc.js?");

/***/ }),

/***/ "./src/app/newCard.js":
/*!****************************!*\
  !*** ./src/app/newCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newCard\": () => (/* binding */ newCard)\n/* harmony export */ });\nconst newCard = (img, ref, title, subtitle, description, container) => {\n  var card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n  card.classList.add(\"mb-3\");\n  card.style.width = \"350px\";\n  card.style.backgroundColor = \"#DEB887\";\n  card.style.margin = \"auto\";\n  card.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\n\n  var cardBody = document.createElement(\"div\");\n  cardBody.classList.add(\"card-body\");\n\n  var cardimg = document.createElement(\"img\");\n  var a = document.createElement(\"a\");\n  a.href = ref;\n  cardimg.classList.add(\"card-img-top\");\n  cardimg.src = img;\n  cardimg.innerHTML = \"<a href='test.html'></a>\";\n  cardimg.style.width = \"100%\";\n  cardimg.style.height = \"350px\";\n  cardimg.style.objectFit = \"cover\";\n  a.appendChild(cardimg);\n\n  var brr = document.createElement(\"br\");\n  cardBody.appendChild(brr);\n\n  var cardTitle = document.createElement(\"h3\");\n  cardTitle.classList.add(\"card-title\");\n  cardTitle.innerHTML = title;\n\n  var cardSubtitle = document.createElement(\"h5\");\n  cardSubtitle.classList.add(\"card-subtitle\");\n  cardSubtitle.innerHTML = subtitle;\n\n  var cardText = document.createElement(\"p\");\n  cardText.classList.add(\"card-text\");\n  cardText.innerHTML = description;\n\n  cardBody.appendChild(a);\n  cardBody.appendChild(cardTitle);\n  cardBody.appendChild(cardSubtitle);\n  cardBody.appendChild(brr);\n  cardBody.appendChild(cardText);\n  card.appendChild(cardBody);\n\n  container.appendChild(card);\n};\n\n\n//# sourceURL=webpack://labsiete/./src/app/newCard.js?");

/***/ }),

/***/ "./src/app/nuevos-strc.js":
/*!********************************!*\
  !*** ./src/app/nuevos-strc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nuevos\": () => (/* binding */ Nuevos)\n/* harmony export */ });\n/* harmony import */ var _newCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newCard */ \"./src/app/newCard.js\");\n\r\n\r\nconst Nuevos = () => {\r\n    \r\n  var row = document.createElement(\"div\");\r\n  row.classList.add(\"row\");\r\n  row.style.width = \"100%\";\r\n\r\n  var title = document.createElement(\"h2\");\r\n  title.textContent = \"Nuevos Lanzamientos\";\r\n  title.style.textAlign = \"center\";\r\n  title.style.color = \"black\";\r\n  title.style.textShadow = \"2px 2px 5px white\";\r\n  title.style.marginTop = \"20px\";\r\n  title.style.marginBottom = \"40px\";\r\n  row.appendChild(title);\r\n\r\n  // Adding small cards\r\n  var col4 = document.createElement(\"div\");\r\n  col4.classList.add(\"col-2\");\r\n  col4.style.alignContent = \"center\";\r\n  col4.style.alignItems = \"center\";\r\n  col4.style.justifyContent = \"center\";\r\n  var dec1 = document.createElement(\"img\");\r\n  dec1.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\r\n  dec1.style.width = \"150px\";\r\n  dec1.style.height = \"580px\";\r\n  col4.appendChild(dec1);\r\n  row.appendChild(col4);\r\n\r\n  var col4 = document.createElement(\"div\");\r\n  col4.classList.add(\"col-1\");\r\n  col4.style.alignContent = \"center\";\r\n  col4.style.alignItems = \"center\";\r\n  col4.style.justifyContent = \"center\";\r\n  col4.style.margin = \"auto\";\r\n  var dec1 = document.createElement(\"img\");\r\n  dec1.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\r\n  dec1.style.width = \"120px\";\r\n  dec1.style.height = \"350px\";\r\n  col4.appendChild(dec1);\r\n  row.appendChild(col4);\r\n\r\n  var col4 = document.createElement(\"div\");\r\n  col4.classList.add(\"col-6\");\r\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://us.123rf.com/450wm/gatordawg/gatordawg1504/gatordawg150400051/39441697-ilustraci%C3%B3n-de-un-dise%C3%B1o-del-s%C3%ADmbolo-m%C3%A1gico-en-el-fondo-del-papel-de-pergamino-en-una-relaci%C3%B3n-de-as.jpg?ver=6\",\"pagina1.html\", \"El Ciclo\", \"Diego Lemus\", \"Adéntrate en esta nueva historia...\", col4);\r\n  row.appendChild(col4);\r\n\r\n  var col4 = document.createElement(\"div\");\r\n  col4.classList.add(\"col-1\");\r\n  col4.style.alignContent = \"center\";\r\n  col4.style.alignItems = \"center\";\r\n  col4.style.justifyContent = \"center\";\r\n  col4.style.margin = \"auto\";\r\n  var dec2 = document.createElement(\"img\");\r\n  dec2.src = \"https://www.gifss.com/fuego/antorchas/images/antorch-15.gif\";\r\n  dec2.style.width = \"120px\";\r\n  dec2.style.height = \"350px\";\r\n  col4.appendChild(dec2);\r\n  row.appendChild(col4);\r\n\r\n  var col4 = document.createElement(\"div\");\r\n  col4.classList.add(\"col-2\");\r\n  col4.style.alignContent = \"center\";\r\n  col4.style.alignItems = \"center\";\r\n  col4.style.justifyContent = \"center\";\r\n  var dec2 = document.createElement(\"img\");\r\n  dec2.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\r\n  dec2.style.width = \"150px\";\r\n  dec2.style.height = \"580px\";\r\n  col4.appendChild(dec2);\r\n  row.appendChild(col4);\r\n\r\n  return row;\r\n};\r\n\n\n//# sourceURL=webpack://labsiete/./src/app/nuevos-strc.js?");

/***/ }),

/***/ "./src/app/pagina1.js":
/*!****************************!*\
  !*** ./src/app/pagina1.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagina1\": () => (/* binding */ Pagina1)\n/* harmony export */ });\n\r\nconst Pagina1 = () => {\r\n    var main = document.createElement(\"div\");\r\n    main.style.width = \"100%\";\r\n    main.style.height = \"100%\";\r\n\r\n    var title = document.createElement(\"h2\");\r\n    title.textContent = \"El Ciclo\";\r\n    title.style.textAlign = \"center\";\r\n    title.style.color = \"black\";\r\n    title.style.textShadow = \"2px 2px 5px white\";\r\n    title.style.marginTop = \"20px\";\r\n    title.style.marginBottom = \"20px\";\r\n    main.appendChild(title);\r\n    \r\n    var pagina = document.createElement(\"div\");\r\n    pagina.style.backgroundColor = \"white\";\r\n    pagina.style.width = \"60%\";\r\n    pagina.style.height = \"100%\";\r\n    pagina.style.display = \"flex\";\r\n    pagina.style.flexDirection = \"column\";\r\n    pagina.style.justifyContent = \"center\";\r\n    pagina.style.alignItems = \"center\";\r\n    pagina.style.alignContent = \"center\";\r\n    pagina.style.alignSelf = \"center\";\r\n    pagina.style.margin = \"auto\";\r\n    pagina.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\r\n    pagina.style.borderRadius = \"10px\";\r\n    pagina.style.padding = \"10px\";\r\n    \r\n    var brr = document.createElement(\"br\");\r\n    pagina.appendChild(brr);\r\n\r\n    var pagetitle = document.createElement(\"h3\");\r\n    pagetitle.textContent = \"Pagina 1\";\r\n    pagina.appendChild(pagetitle);\r\n\r\n    pagina.appendChild(brr);\r\n    pagina.appendChild(brr);\r\n\r\n    var pagebody = document.createElement(\"p\");\r\n    pagebody.textContent = \"Te sientes confundido, tu cuerpo no responde, lo unico que ves es un destello brillante ¿Dónde estás? ¿Has muerto? No recuerdas nada de tu pasado, simplemente te encuentras en el presente ¿Esta es la realidad? Tienes mucha curiosidad por saber qué sucede.\";\r\n\r\n    pagina.appendChild(pagebody);\r\n\r\n    pagina.appendChild(brr);\r\n\r\n    var pageimg = document.createElement(\"img\");\r\n    pageimg.src = \"https://www.seekpng.com/png/small/437-4371096_destello-de-limpieza-png.png\";\r\n    pageimg.style.width = \"70%\";\r\n    pageimg.style.height = \"250px\";\r\n    pageimg.style.objectFit = \"cover\";\r\n    pagina.appendChild(pageimg);\r\n\r\n    var brr1 = document.createElement(\"br\");\r\n    pagina.appendChild(brr1);\r\n\r\n    var linkdiv = document.createElement(\"div\");\r\n    linkdiv.style.alignContent = \"center\";\r\n    linkdiv.style.alignItems = \"center\";\r\n    linkdiv.style.alignSelf = \"center\";\r\n    linkdiv.style.justifyContent = \"center\";\r\n    linkdiv.style.backgroundColor = \"rgb(9, 43, 76)\";\r\n    linkdiv.style.display = 'flex';\r\n    linkdiv.style.marginTop = \"30px\";\r\n\r\n    var ul = document.createElement(\"ul\");\r\n\r\n    var prevpage = document.createElement(\"li\");\r\n    var prevpagelink = document.createElement(\"a\");\r\n    prevpagelink.href = \"nuevos.html\";\r\n    prevpagelink.textContent = \"Volver\";\r\n    prevpage.appendChild(prevpagelink);\r\n    ul.appendChild(prevpage);\r\n\r\n    var nextpage = document.createElement(\"li\");\r\n    var nextpagelink = document.createElement(\"a\");\r\n    nextpagelink.href = \"pagina2.html\";\r\n    nextpagelink.textContent = \"Siguiente\";\r\n    nextpage.appendChild(nextpagelink);\r\n    ul.appendChild(nextpage);\r\n\r\n    linkdiv.appendChild(ul);\r\n    pagina.appendChild(linkdiv);\r\n\r\n    main.appendChild(pagina);\r\n    \r\n    return main;\r\n}\r\n\n\n//# sourceURL=webpack://labsiete/./src/app/pagina1.js?");

/***/ }),

/***/ "./src/app/pagina2.js":
/*!****************************!*\
  !*** ./src/app/pagina2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagina2\": () => (/* binding */ Pagina2)\n/* harmony export */ });\nconst Pagina2 = () => {\r\n    var main = document.createElement(\"div\");\r\n    main.style.width = \"100%\";\r\n    main.style.height = \"100%\";\r\n\r\n    var title = document.createElement(\"h2\");\r\n    title.textContent = \"El Ciclo\";\r\n    title.style.textAlign = \"center\";\r\n    title.style.color = \"black\";\r\n    title.style.textShadow = \"2px 2px 5px white\";\r\n    title.style.marginTop = \"20px\";\r\n    title.style.marginBottom = \"20px\";\r\n    main.appendChild(title);\r\n    \r\n    var pagina = document.createElement(\"div\");\r\n    pagina.style.backgroundColor = \"white\";\r\n    pagina.style.width = \"60%\";\r\n    pagina.style.height = \"100%\";\r\n    pagina.style.display = \"flex\";\r\n    pagina.style.flexDirection = \"column\";\r\n    pagina.style.justifyContent = \"center\";\r\n    pagina.style.alignItems = \"center\";\r\n    pagina.style.alignContent = \"center\";\r\n    pagina.style.alignSelf = \"center\";\r\n    pagina.style.margin = \"auto\";\r\n    pagina.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\r\n    pagina.style.borderRadius = \"10px\";\r\n    pagina.style.padding = \"10px\";\r\n    \r\n    var brr = document.createElement(\"br\");\r\n    pagina.appendChild(brr);\r\n\r\n    var pagetitle = document.createElement(\"h3\");\r\n    pagetitle.textContent = \"Pagina 2\";\r\n    pagina.appendChild(pagetitle);\r\n\r\n    pagina.appendChild(brr);\r\n    pagina.appendChild(brr);\r\n\r\n    var pagebody = document.createElement(\"p\");\r\n    pagebody.textContent = \"El destello se va, tienes la oprtunidad de ver a tu alrededor, no sabes en dónde estás. Hay dos puertas, son idénticas. Al lado tuya hay una llave, parece ser de las puertas. No hay nada más, tienes que entrar a una puerta ¿Cuál eliges?\";\r\n    pagina.appendChild(pagebody);\r\n\r\n    pagina.appendChild(brr);\r\n\r\n    var pageimg = document.createElement(\"img\");\r\n    pageimg.src = \"https://st2.depositphotos.com/1663997/5332/v/600/depositphotos_53325493-stock-illustration-the-wood-door-icon.jpg\";\r\n    pageimg.style.width = \"70%\";\r\n    pageimg.style.height = \"250px\";\r\n    pageimg.style.objectFit = \"cover\";\r\n    pagina.appendChild(pageimg);\r\n\r\n    var brr1 = document.createElement(\"br\");\r\n    pagina.appendChild(brr1);\r\n\r\n    var linkdiv = document.createElement(\"div\");\r\n    linkdiv.style.alignContent = \"center\";\r\n    linkdiv.style.alignItems = \"center\";\r\n    linkdiv.style.alignSelf = \"center\";\r\n    linkdiv.style.justifyContent = \"center\";\r\n    linkdiv.style.backgroundColor = \"rgb(9, 43, 76)\";\r\n    linkdiv.style.display = 'flex';\r\n    linkdiv.style.marginTop = \"30px\";\r\n\r\n    var ul = document.createElement(\"ul\");\r\n\r\n    var prevpage = document.createElement(\"li\");\r\n    var prevpagelink = document.createElement(\"a\");\r\n    prevpagelink.href = \"pagina1.html\";\r\n    prevpagelink.textContent = \"Anterior\";\r\n    prevpage.appendChild(prevpagelink);\r\n    ul.appendChild(prevpage);\r\n\r\n    var nextpage = document.createElement(\"li\");\r\n    var nextpagelink = document.createElement(\"a\");\r\n    nextpagelink.href = \"pagina3.html\";\r\n    nextpagelink.textContent = \"Siguiente\";\r\n    nextpage.appendChild(nextpagelink);\r\n    ul.appendChild(nextpage);\r\n\r\n    linkdiv.appendChild(ul);\r\n\r\n    pagina.appendChild(linkdiv);\r\n\r\n    main.appendChild(pagina);\r\n    \r\n    return main;\r\n}\n\n//# sourceURL=webpack://labsiete/./src/app/pagina2.js?");

/***/ }),

/***/ "./src/app/pagina3.js":
/*!****************************!*\
  !*** ./src/app/pagina3.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagina3\": () => (/* binding */ Pagina3)\n/* harmony export */ });\nconst Pagina3 = () => {\r\n    var main = document.createElement(\"div\");\r\n    main.style.width = \"100%\";\r\n    main.style.height = \"100%\";\r\n\r\n    var title = document.createElement(\"h2\");\r\n    title.textContent = \"El Ciclo\";\r\n    title.style.textAlign = \"center\";\r\n    title.style.color = \"black\";\r\n    title.style.textShadow = \"2px 2px 5px white\";\r\n    title.style.marginTop = \"20px\";\r\n    title.style.marginBottom = \"20px\";\r\n    main.appendChild(title);\r\n    \r\n    var pagina = document.createElement(\"div\");\r\n    pagina.style.backgroundColor = \"white\";\r\n    pagina.style.width = \"60%\";\r\n    pagina.style.height = \"100%\";\r\n    pagina.style.display = \"flex\";\r\n    pagina.style.flexDirection = \"column\";\r\n    pagina.style.justifyContent = \"center\";\r\n    pagina.style.alignItems = \"center\";\r\n    pagina.style.alignContent = \"center\";\r\n    pagina.style.alignSelf = \"center\";\r\n    pagina.style.margin = \"auto\";\r\n    pagina.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\r\n    pagina.style.borderRadius = \"10px\";\r\n    pagina.style.padding = \"10px\";\r\n    \r\n    var brr = document.createElement(\"br\");\r\n    pagina.appendChild(brr);\r\n\r\n    var pagetitle = document.createElement(\"h3\");\r\n    pagetitle.textContent = \"Pagina 3\";\r\n    pagina.appendChild(pagetitle);\r\n\r\n    pagina.appendChild(brr);\r\n    pagina.appendChild(brr);\r\n\r\n    var pagebody = document.createElement(\"p\");\r\n    pagebody.textContent = \"Al entrar te das cuenta que es un salón totalmente vacío, de alguna extraña forma sientes algún tipo de nostalgia, no has dado un paso y sientes que el ambiente te absorbe ¿Quieres caminar hasta encontrar algo o regresar?\";\r\n    pagina.appendChild(pagebody);\r\n\r\n    pagina.appendChild(brr);\r\n\r\n    var pageimg = document.createElement(\"img\");\r\n    pageimg.src = \"https://media-cdn.tripadvisor.com/media/photo-s/06/1b/9f/a0/aldea-el-lugar-de-los.jpg\";\r\n    pageimg.style.width = \"70%\";\r\n    pageimg.style.height = \"250px\";\r\n    pageimg.style.objectFit = \"cover\";\r\n    pagina.appendChild(pageimg);\r\n\r\n    var brr1 = document.createElement(\"br\");\r\n    pagina.appendChild(brr1);\r\n\r\n    var linkdiv = document.createElement(\"div\");\r\n    linkdiv.style.alignContent = \"center\";\r\n    linkdiv.style.alignItems = \"center\";\r\n    linkdiv.style.alignSelf = \"center\";\r\n    linkdiv.style.justifyContent = \"center\";\r\n    linkdiv.style.backgroundColor = \"rgb(9, 43, 76)\";\r\n    linkdiv.style.display = 'flex';\r\n    linkdiv.style.marginTop = \"30px\";\r\n\r\n    var ul = document.createElement(\"ul\");\r\n\r\n    var prevpage = document.createElement(\"li\");\r\n    var prevpagelink = document.createElement(\"a\");\r\n    prevpagelink.href = \"pagina2.html\";\r\n    prevpagelink.textContent = \"Anterior\";\r\n    prevpage.appendChild(prevpagelink);\r\n    ul.appendChild(prevpage);\r\n\r\n    var nextpage = document.createElement(\"li\");\r\n    var nextpagelink = document.createElement(\"a\");\r\n    nextpagelink.href = \"pagina3.html\";\r\n    nextpagelink.textContent = \"Siguiente\";\r\n    nextpage.appendChild(nextpagelink);\r\n    ul.appendChild(nextpage);\r\n\r\n    linkdiv.appendChild(ul);\r\n\r\n    pagina.appendChild(linkdiv);\r\n\r\n    main.appendChild(pagina);\r\n    \r\n    return main;\r\n}\n\n//# sourceURL=webpack://labsiete/./src/app/pagina3.js?");

/***/ }),

/***/ "./src/app/structure2.js":
/*!*******************************!*\
  !*** ./src/app/structure2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Structure2\": () => (/* binding */ Structure2)\n/* harmony export */ });\n/* harmony import */ var _newCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newCard */ \"./src/app/newCard.js\");\n\n\nconst Structure2 = () => {\n  var row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n  row.style.width = \"100%\";\n\n  var title = document.createElement(\"h2\");\n  title.textContent = \"Libros Populares\";\n  title.style.textAlign = \"center\";\n  title.style.color = \"black\";\n  title.style.textShadow = \"2px 2px 5px white\";\n  title.style.marginTop = \"20px\";\n  title.style.marginBottom = \"40px\";\n  row.appendChild(title);\n\n  // Adding small cards\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-2\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  var dec1 = document.createElement(\"img\");\n  dec1.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\n  dec1.style.width = \"180px\";\n  dec1.style.height = \"950px\";\n  col4.appendChild(dec1);\n  row.appendChild(col4);\n\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9788417/978841739957.GIF\", \"google.com\", \"La Física de Dios\", \"Joseph Selbie\", \"Más allá de la concepción material de la ciencia...\", col4);\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9788491/978849105357.GIF\", \"google.com\", \"Biográfico Sherlock\", \"Viv Croot\", \"La colección Biográfico ofrece una mirada completamente nueva...\", col4);\n  row.appendChild(col4);\n\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  col4.style.margin = \"auto\";\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9786073/978607381208.GIF\", \"google.com\", \"Roma Soy Yo\", \"Santiago Posteguillo\", \"Después de Julio César el mundo no volvió a ser el mismo...\", col4);\n  (0,_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"https://tienda.sophosenlinea.com/imagenes/9788446/978844602434.GIF\",\"google.com\", \"Historia de Egipto\", \"Aafaf Luffi Val-Sayyid\", \"Esta historia de Egipto, desde la conquista árabe en el año 639 hasta hoy...\", col4);\n  row.appendChild(col4);\n\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-2\");\n  col4.style.alignContent = \"center\";\n  col4.style.alignItems = \"center\";\n  col4.style.justifyContent = \"center\";\n  var dec2 = document.createElement(\"img\");\n  dec2.src = \"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/34a7acecbcd4795.png\";\n  dec2.style.width = \"180px\";\n  dec2.style.height = \"950px\";\n  col4.appendChild(dec2);\n  row.appendChild(col4);\n\n  return row;\n};\n\n\n//# sourceURL=webpack://labsiete/./src/app/structure2.js?");

/***/ }),

/***/ "./src/app/styles.js":
/*!***************************!*\
  !*** ./src/app/styles.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\n\r\n\n\n//# sourceURL=webpack://labsiete/./src/app/styles.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.js */ \"./src/app/app.js\");\n/* harmony import */ var _src_app_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/app/styles.js */ \"./src/app/styles.js\");\n\r\n\r\n(0,_app_app_js__WEBPACK_IMPORTED_MODULE_0__.startApp)()\n\n//# sourceURL=webpack://labsiete/./src/index.js?");

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