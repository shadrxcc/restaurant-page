/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/avatar.jpg */ "./src/assets/avatar.jpg");


function contactTab() {
  var content = document.querySelector('#content');
  var section = document.createElement('div');
  var h1 = document.createElement('h1');
  h1.textContent = "Contact Us";
  h1.classList.add('contact');
  section.appendChild(h1);
  var av = document.createElement('img');
  av.src = _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__;
  av.classList.add('profile');
  section.appendChild(av);

  var contactDetails = function contactDetails(tag, link, anchorText) {
    var div = document.createElement('div');
    div.classList.add('contact-box');
    div.textContent = "".concat(tag, ":");
    var a = document.createElement('a');
    a.classList.add('contact-link');
    a.href = link;
    a.textContent = anchorText;
    div.appendChild(a);
    section.appendChild(div);
  };

  contactDetails('Email', 'mailto:akaadesm@gmail.com', 'akaadesm@gmail.com');
  contactDetails('Github', 'connectto:github.com/shadrxcc', 'github.com/shadrxcc');
  contactDetails('Twitter', 'twitter.com/shadrxcc', 'twitter.com/shadrxcc');
  content.appendChild(section);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactTab);

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant.jpg */ "./src/assets/restaurant.jpg");


function homeTab() {
  var content = document.querySelector('#content');
  content.replaceChildren();
  var section = document.createElement('div');
  section.classList.add('home');
  var h1 = document.createElement('h1');
  h1.textContent = 'EasyChow';
  h1.classList.add('main');
  section.appendChild(h1);
  var landpage = document.createElement('img');
  landpage.classList.add('home-img');
  landpage.src = _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
  section.appendChild(landpage);
  var h3 = document.createElement('h3');
  h3.textContent = 'Your spicy and yummy meals the way you have never had it before!';
  h3.classList.add('p');
  section.appendChild(h3);
  content.appendChild(section);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeTab);

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_metallica_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/metallica.jpg */ "./src/assets/metallica.jpg");
/* harmony import */ var _assets_jollof_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/jollof.jpg */ "./src/assets/jollof.jpg");
/* harmony import */ var _assets_pancake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pancake.jpg */ "./src/assets/pancake.jpg");
/* harmony import */ var _assets_grilledchicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/grilledchicken.jpg */ "./src/assets/grilledchicken.jpg");





function menuTab() {
  var content = document.querySelector('#content');
  var section = document.createElement('div');
  section.classList.add('menu-tab');
  var menu1 = document.createElement('div');
  var jollofRice = document.createElement('img');
  jollofRice.classList.add('menu-img');
  jollofRice.src = _assets_jollof_jpg__WEBPACK_IMPORTED_MODULE_1__;
  section.appendChild(jollofRice);
  var para = document.createElement('h3');
  para.textContent = 'Nigerian Jollof Rice';
  section.appendChild(para);
  var sub = document.createElement('h3');
  sub.textContent = 'N2,500';
  section.appendChild(sub);
  var grilledChicken = document.createElement('img');
  grilledChicken.classList.add('menu-img');
  grilledChicken.src = _assets_grilledchicken_jpg__WEBPACK_IMPORTED_MODULE_3__;
  section.appendChild(grilledChicken);
  var para1 = document.createElement('h3');
  para1.textContent = 'Spicy Grilled Chicken';
  section.appendChild(para1);
  var sub1 = document.createElement('h3');
  sub1.textContent = 'N4,500';
  section.appendChild(sub1);
  var panCake = document.createElement('img');
  panCake.classList.add('menu-img');
  panCake.src = _assets_pancake_jpg__WEBPACK_IMPORTED_MODULE_2__;
  section.appendChild(panCake);
  var para2 = document.createElement('h3');
  para2.textContent = 'Spicy Grilled Chicken';
  section.appendChild(para2);
  var sub2 = document.createElement('h3');
  sub2.textContent = 'N4,500';
  section.appendChild(sub2);
  content.appendChild(section);
  content.appendChild(section);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuTab);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/grilledchicken.jpg */ "./src/assets/grilledchicken.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: Montserrat, sans-serif;\n  color: #333;\n  font-size: 16px;\n  line-height: 22px;\n  background-color: aqua;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nheader {\n  background-color: #fff;\n  color: black;\n  padding: 10px;\n  margin-bottom: 40px;\n  z-index: 1;\n  border-radius: 20px;\n}\n\n.main {\n  color: black;\n  font-family: \"Abril Fatface\", cursive;\n}\n\n.home {\n  margin: auto;\n  width: auto;\n  text-align: center;\n  background-color: #fff;\n  padding-top: 50px;\n  padding-bottom: 30px;\n  border-radius: 20px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-around;\n}\n\n.content-box {\n  width: 80%;\n  background-color: #fff;\n  text-align: center;\n}\n\n.contact-box {\n  background-color: #fff;\n  width: auto;\n  margin: auto;\n  margin-left: 80px;\n  margin-right: 80px;\n  text-align: center;\n  border-radius: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-bottom: 10px;\n}\n\n.wrap {\n  margin: auto;\n  width: auto;\n}\n\n.profile {\n  border-radius: 250px;\n  width: 20%;\n  height: 20%;\n  margin: auto;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.contact {\n  text-align: center;\n  color: #fff;\n}\n\n.menu-tab {\n  background-color: #fff;\n  width: auto;\n  margin: auto;\n  margin-left: 80px;\n  margin-right: 80px;\n  text-align: center;\n  border-radius: 20px;\n  padding-top: 50px;\n  padding-bottom: 30px;\n}\n\n.menu-img {\n  border-radius: 10px;\n}\n\n.contact-items {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.image {\n  width: 600px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\na:hover {\n  color: aqua;\n}\n\n@media screen and (max-width: 767px) {\n  .menu-img {\n    width: 80%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACE,mCAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,yDAAA;AACF;;AAEA;EACE,sBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,qCAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,oBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,6BAAA;AACF;;AAEA;EACE,UAAA;EACA,sBAAA;EACA,kBAAA;AACF;;AAEA;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;AACF;;AAEA;EACE,oBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;AACF;;AAEA;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,iBAAA;EACA,oBAAA;AACF;;AAEA;EACE,YAAA;AACF;;AAEA;EACE,qBAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE;IACE,UAAA;EACF;AACF","sourcesContent":["body {\r\n  font-family: Montserrat, sans-serif;\r\n  color: #333;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  background-color: aqua;\r\n  background-image: url(/src/assets/grilledchicken.jpg);\r\n}\r\n\r\nheader {\r\n  background-color: #fff;\r\n  color: black;\r\n  padding: 10px;\r\n  margin-bottom: 40px;\r\n  z-index: 1;\r\n  border-radius: 20px;\r\n}\r\n\r\n.main {\r\n  color: black;\r\n  font-family: 'Abril Fatface', cursive;\r\n}\r\n\r\n.home {\r\n  margin: auto;\r\n  width: auto;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  padding-top: 50px;\r\n  padding-bottom: 30px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.content-box {\r\n  width: 80%;\r\n  background-color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.contact-box {\r\n  background-color: #fff;\r\n  width: auto;\r\n  margin: auto;\r\n  margin-left: 80px;\r\n  margin-right: 80px;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.wrap {\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n.profile {\r\n  border-radius: 250px;\r\n  width: 20%;\r\n  height: 20%;\r\n  margin: auto;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contact {\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.menu-tab {\r\n  background-color: #fff;\r\n  width: auto;\r\n  margin: auto;\r\n  margin-left: 80px;\r\n  margin-right: 80px;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n  padding-top: 50px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.menu-img {\r\n  border-radius: 10px;\r\n}\r\n\r\n.contact-items {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.image {\r\n  width: 600px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\na:hover {\r\n  color: aqua;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .menu-img {\r\n    width: 80%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/avatar.jpg":
/*!*******************************!*\
  !*** ./src/assets/avatar.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "avatar [ext ]";

/***/ }),

/***/ "./src/assets/grilledchicken.jpg":
/*!***************************************!*\
  !*** ./src/assets/grilledchicken.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grilledchicken [ext ]";

/***/ }),

/***/ "./src/assets/jollof.jpg":
/*!*******************************!*\
  !*** ./src/assets/jollof.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "jollof [ext ]";

/***/ }),

/***/ "./src/assets/metallica.jpg":
/*!**********************************!*\
  !*** ./src/assets/metallica.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "metallica [ext ]";

/***/ }),

/***/ "./src/assets/pancake.jpg":
/*!********************************!*\
  !*** ./src/assets/pancake.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pancake [ext ]";

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurant [ext ]";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_metallica_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/metallica.jpg */ "./src/assets/metallica.jpg");
/* harmony import */ var _assets_jollof_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/jollof.jpg */ "./src/assets/jollof.jpg");
/* harmony import */ var _assets_pancake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pancake.jpg */ "./src/assets/pancake.jpg");
/* harmony import */ var _assets_grilledchicken_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/grilledchicken.jpg */ "./src/assets/grilledchicken.jpg");
/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/restaurant.jpg */ "./src/assets/restaurant.jpg");
/* harmony import */ var _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/avatar.jpg */ "./src/assets/avatar.jpg");
/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homeTab */ "./src/homeTab.js");
/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactTab */ "./src/contactTab.js");
/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menuTab */ "./src/menuTab.js");










(0,_homeTab__WEBPACK_IMPORTED_MODULE_7__["default"])();

function clearContent() {
  content.innerHTML = '';
}

var content = document.querySelector('#content');
var homeBtn = document.querySelector('#home-btn');
var menuBtn = document.querySelector('#menu-btn');
var contactBtn = document.querySelector('#contact-btn');
homeBtn.addEventListener('click', function () {
  clearContent();
  (0,_homeTab__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
menuBtn.addEventListener('click', function () {
  clearContent();
  (0,_menuTab__WEBPACK_IMPORTED_MODULE_9__["default"])();
});
contactBtn.addEventListener('click', function () {
  clearContent();
  (0,_contactTab__WEBPACK_IMPORTED_MODULE_8__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map