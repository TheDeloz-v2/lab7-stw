"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startApp = void 0;
var _header = require("./header.js");
var _footer = require("./footer.js");
var _indexStrc = require("./index-strc.js");
var _nuevosStrc = require("./nuevos-strc.js");
var _popularesStrc = require("./populares-strc.js");
var _pagina = require("./pagina1.js");
var _pagina2 = require("./pagina2.js");
var _pagina3 = require("./pagina3.js");
var startApp = function startApp() {
  document.getElementById("header").appendChild((0, _header.Header)());
  if (document.getElementById("index-strc") != null) {
    document.getElementById("index-strc").appendChild((0, _indexStrc.Index)());
  }
  if (document.getElementById("nuevos-strc") != null) {
    document.getElementById("nuevos-strc").appendChild((0, _nuevosStrc.Nuevos)());
  }
  if (document.getElementById("footer") != null) {
    document.getElementById("footer").appendChild((0, _footer.Footer)());
  }
  if (document.getElementById("populares-strc") != null) {
    document.getElementById("populares-strc").appendChild((0, _popularesStrc.Populares)());
  }
  if (document.getElementById("pagina1") != null) {
    document.getElementById("pagina1").appendChild((0, _pagina.Pagina1)());
  }
  if (document.getElementById("pagina2") != null) {
    document.getElementById("pagina2").appendChild((0, _pagina2.Pagina2)());
  }
  if (document.getElementById("pagina3") != null) {
    document.getElementById("pagina3").appendChild((0, _pagina3.Pagina3)());
  }
};
exports.startApp = startApp;