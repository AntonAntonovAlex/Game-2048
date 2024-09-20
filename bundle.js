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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: darkgray;\r\n}\r\n\r\n.game-board {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 40px;\r\n    align-items: center;\r\n}\r\n\r\n.canvas {\r\n    border-radius: 2px;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.score {\r\n    margin-bottom: 15px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n}\r\n\r\n.canvas-board {\r\n    border: 1px solid rgb(0, 0, 0);\r\n    border-radius: 4px;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 70px);\r\n    grid-template-rows: repeat(4, 70px);\r\n    gap: 4px;\r\n    padding: 4px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://2048/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://2048/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://2048/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://2048/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.js */ \"./src/cell.js\");\n\r\n\r\nconst COLUMNS_COUNT = 4;\r\nconst CELLS_COUNT = COLUMNS_COUNT * COLUMNS_COUNT;\r\nconst INITIAL_VALUE = 2;\r\nconst scoreValue = document.getElementById(\"score-value\");\r\n\r\nclass Board {\r\n    constructor(canvasBoard) {\r\n        this.cells = [];\r\n        this.isMovedCell = false;\r\n        this.scoreValue = scoreValue;\r\n        this.scoreValue.textContent = 0;\r\n        this.greatestValue = 0;\r\n\r\n        for (let i = 0; i < CELLS_COUNT; i++) {\r\n            this.cells.push(\r\n                new _cell_js__WEBPACK_IMPORTED_MODULE_0__.Cell(canvasBoard, i)\r\n            );\r\n        };\r\n    };\r\n\r\n    getInitialRandomFilledCell() {\r\n        const randomIndex = Math.floor(Math.random() * this.cells.length);\r\n\r\n        if (this.cells[randomIndex].getIsEmptyCell()) {\r\n            this.cells[randomIndex].setColorCell(INITIAL_VALUE);\r\n            this.cells[randomIndex].setValueCell(INITIAL_VALUE);\r\n        } else {\r\n            this.getInitialRandomFilledCell();\r\n        };\r\n    };\r\n\r\n    getRandomFilledCell() {\r\n        if (this.isMovedCell) {\r\n            const randomIndex = Math.floor(Math.random() * this.cells.length);\r\n\r\n                if (this.cells[randomIndex].getIsEmptyCell()) {\r\n                    const randomValue = (Math.random() > 0.1 ? 2 : 4);\r\n                    this.cells[randomIndex].setColorCell(randomValue);\r\n                    this.cells[randomIndex].setValueCell(randomValue);\r\n                } else {\r\n                    this.getRandomFilledCell();\r\n                };\r\n\r\n                this.isMovedCell = false;\r\n        };\r\n    };\r\n\r\n    moveCellsUp() {\r\n        for (let i = 0; i < 4; i++) {\r\n            for (let j = 1; j < 4; j++) {\r\n                if (!this.cells[(j * 4 + i)].isEmpty) {\r\n                    let s = j - 1;\r\n                    let emptyCell = null;\r\n\r\n                    if (!this.cells[(s * 4 + i)].isEmpty) {\r\n                        if (this.cells[(s * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell() && !this.cells[(s * 4 + i)].getIsMergeCell()) {\r\n                            this.moveCellWithMergeVertically(i, j, s);\r\n                        }\r\n                    } else {\r\n                        if (j <= 2) {\r\n                            if (this.cells[((j + 1) * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell()) {\r\n                            this.moveCellWithMergeVertically(i, j + 1, s + 1);\r\n                            }\r\n                        }\r\n                        emptyCell = s;\r\n                        s--;\r\n                        while (s >= 0) {\r\n                            if (this.cells[(s * 4 + i)].isEmpty) {\r\n                                emptyCell = s;\r\n                                s--;\r\n                            } else break;\r\n                        }\r\n                    }\r\n                    if (emptyCell !== null) {\r\n                        this.moveCellVertically(j, i, emptyCell);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        this.resetIsMergeCell();\r\n    };\r\n\r\n    moveCellsDown() {\r\n        for (let i = 0; i < 4; i++) {\r\n            for (let j = 2; j >= 0; j--) {\r\n                if (!this.cells[(j * 4 + i)].isEmpty) {\r\n                    let s = j + 1;\r\n                    let emptyCell = null;\r\n\r\n                    if (!this.cells[(s * 4 + i)].isEmpty) {\r\n                        if (this.cells[(s * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell() && !this.cells[(s * 4 + i)].getIsMergeCell()) {\r\n                            this.moveCellWithMergeVertically(i, j, s);\r\n                        }\r\n                    } else {\r\n                        if (j >= 1) {\r\n                            if (this.cells[((j - 1) * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell()) {\r\n                            this.moveCellWithMergeVertically(i, j - 1, s - 1);\r\n                            }\r\n                        }\r\n                        emptyCell = s;\r\n                        s++;\r\n                        while (s <= 3) {\r\n                            if (this.cells[(s * 4 + i)].isEmpty) {\r\n                                emptyCell = s;\r\n                                s++;\r\n                            } else break;\r\n                        }\r\n                    }\r\n                    if (emptyCell !== null) {\r\n                        this.moveCellVertically(j, i, emptyCell);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        this.resetIsMergeCell();\r\n    };\r\n\r\n    moveCellsLeft() {\r\n        for (let i = 0; i < 4; i++) {\r\n            for (let j = 1; j < 4; j++) {\r\n                if (!this.cells[(i * 4 + j)].isEmpty) {\r\n                    let s = j - 1;\r\n                    let emptyCell = null;\r\n\r\n                    if (!this.cells[(i * 4 + s)].isEmpty) {\r\n                        if (this.cells[(i * 4 + s)].getValueCell() === this.cells[(i * 4 + j)].getValueCell() && !this.cells[(i * 4 + s)].getIsMergeCell()) {\r\n                            this.moveCellWithMergeHorizontally(i, j, s);\r\n                        }\r\n                    } else {\r\n                        if (j <= 2) {\r\n                            if (this.cells[(i * 4 + j + 1)].getValueCell() === this.cells[(i * 4 + j)].getValueCell()) {\r\n                            this.moveCellWithMergeHorizontally(i, j + 1, s + 1);\r\n                            }\r\n                        }\r\n                        emptyCell = s;\r\n                        s--;\r\n                        while (s >= 0) {\r\n                            if (this.cells[(i * 4 + s)].isEmpty) {\r\n                                emptyCell = s;\r\n                                s--;\r\n                            } else break;\r\n                        }\r\n                    }\r\n                    if (emptyCell !== null) {\r\n                        this.moveCellHorizontally(j, i, emptyCell);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        this.resetIsMergeCell();\r\n    };\r\n\r\n    moveCellsRight() {\r\n        for (let i = 0; i < 4; i++) {\r\n            for (let j = 2; j >= 0; j--) {\r\n                if (!this.cells[(i * 4 + j)].isEmpty) {\r\n                    let s = j + 1;\r\n                    let emptyCell = null;\r\n\r\n                    if (!this.cells[(i * 4 + s)].isEmpty) {\r\n                        if (this.cells[(i * 4 + s)].getValueCell() === this.cells[(i * 4 + j)].getValueCell() && !this.cells[(i * 4 + s)].getIsMergeCell()) {\r\n                            this.moveCellWithMergeHorizontally(i, j, s);\r\n                        }\r\n                    } else {\r\n                        if (j >= 1) {\r\n                            if (this.cells[(i * 4 + j - 1)].getValueCell() === this.cells[(i * 4 + j)].getValueCell()) {\r\n                            this.moveCellWithMergeHorizontally(i, j - 1, s - 1);\r\n                            }\r\n                        }\r\n                        emptyCell = s;\r\n                        s++;\r\n                        while (s < 4) {\r\n                            if (this.cells[(i * 4 + s)].isEmpty) {\r\n                                emptyCell = s;\r\n                                s++;\r\n                            } else break;\r\n                        }\r\n                    }\r\n                    if (emptyCell !== null) {\r\n                        this.moveCellHorizontally(j, i, emptyCell);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        this.resetIsMergeCell();\r\n    };\r\n\r\n    moveCellHorizontally(cellValue, columnValue, emptyCell) {\r\n        let value = this.cells[(columnValue * 4 + cellValue)].getValueCell();\r\n        this.cells[(columnValue * COLUMNS_COUNT + cellValue)].setClearCell();\r\n        this.cells[columnValue * COLUMNS_COUNT + emptyCell].setColorCell(value);\r\n        this.cells[columnValue * COLUMNS_COUNT + emptyCell].setValueCell(value);\r\n        this.isMovedCell = true;\r\n    };\r\n\r\n    moveCellVertically(cellValue, columnValue, emptyCell) {\r\n        let value = this.cells[(cellValue * COLUMNS_COUNT + columnValue)].getValueCell();\r\n        this.cells[(cellValue * COLUMNS_COUNT + columnValue)].setClearCell();\r\n        this.cells[emptyCell * COLUMNS_COUNT + columnValue].setColorCell(value);\r\n        this.cells[emptyCell * COLUMNS_COUNT + columnValue].setValueCell(value);\r\n        this.isMovedCell = true;\r\n    };\r\n\r\n    moveCellWithMergeHorizontally(columnValue, cellValue, emptyCell) {\r\n        let value = (this.cells[(columnValue * COLUMNS_COUNT + cellValue)].getValueCell()) * 2;\r\n        this.cells[(columnValue * COLUMNS_COUNT + cellValue)].setClearCell();\r\n        this.cells[(columnValue * COLUMNS_COUNT + emptyCell)].setColorCell(value);\r\n        this.cells[(columnValue * COLUMNS_COUNT + emptyCell)].setValueCell(value);\r\n        this.cells[(columnValue * COLUMNS_COUNT + emptyCell)].setIsMergeCell();\r\n        this.isMovedCell = true;\r\n        this.greatestValue = this.greatestValue > value ? this.greatestValue : value;\r\n        this.scoreValue.textContent = +this.scoreValue.textContent + value;\r\n    };\r\n\r\n    moveCellWithMergeVertically(columnValue, cellValue, emptyCell) {\r\n        let value = (this.cells[(cellValue * COLUMNS_COUNT + columnValue)].getValueCell()) * 2;\r\n        this.cells[(cellValue * COLUMNS_COUNT + columnValue)].setClearCell();\r\n        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setColorCell(value);\r\n        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setValueCell(value);\r\n        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setIsMergeCell();\r\n        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setIsMovedCell();\r\n        this.greatestValue = this.greatestValue > value ? this.greatestValue : value;\r\n        this.isMovedCell = true;\r\n        this.scoreValue.textContent = +this.scoreValue.textContent + value;\r\n    };\r\n\r\n    resetIsMergeCell() {\r\n        this.cells.forEach((cell) => {\r\n            cell.isMerge = false;\r\n            cell.isMoved = false;\r\n            }\r\n        );\r\n    };\r\n\r\n    getGreatestValue() {\r\n        return this.greatestValue;\r\n    };\r\n\r\n    isCellAlive(cell, index) {\r\n        const cellCurrent = cell.value;\r\n\r\n        if (!cellCurrent) {\r\n            return true;\r\n        };\r\n\r\n        const cellBottom = this.cells[index + COLUMNS_COUNT];\r\n\r\n        if (cellBottom && cellBottom.value === cellCurrent) {\r\n            return true;\r\n        };\r\n\r\n        const cellTop = this.cells[index - COLUMNS_COUNT];\r\n\r\n        if (cellTop && cellTop.value === cellCurrent) {\r\n            return true;\r\n        };\r\n\r\n        const cellLeft = (index % COLUMNS_COUNT) && this.cells[index - 1];\r\n\r\n        if (cellLeft && cellLeft.value === cellCurrent) {\r\n            return true;\r\n        };\r\n\r\n        const cellRight = ((index + 1) % COLUMNS_COUNT) && this.cells[index + 1];\r\n\r\n        if (cellRight && cellRight.value === cellCurrent) {\r\n            return true;\r\n        };\r\n    };\r\n\r\n    canContinueGame() {\r\n        return this.cells.some((cell, index) => this.isCellAlive(cell, index));\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://2048/./src/board.js?");

/***/ }),

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cell: () => (/* binding */ Cell)\n/* harmony export */ });\nconst COLORS = {\r\n    2: '#fcefca',\r\n    4: '#fae3a2',\r\n    8: '#fad773',\r\n    16: '#faca3e',\r\n    32: '#fabf11',\r\n    64: '#c99806',\r\n    128: '#997405',\r\n    256: '#806104',\r\n    512: '#664f09',\r\n    1024: '#784904',\r\n    2028: '#783e04',\r\n};\r\n\r\nclass Cell {\r\n    constructor(canvasBoard, elementNumber) {\r\n        this.elementNumber = elementNumber;\r\n        const cell = document.createElement(\"canvas\");\r\n        this.cell = cell;\r\n        this.value = null;\r\n        this.isEmpty = true;\r\n        this.isMerge = false;\r\n        this.isMoved = false;\r\n        cell.classList.add(\"canvas\");\r\n        cell.setAttribute('id', `canvas-${this.elementNumber}`);\r\n        this.ctx = cell.getContext(\"2d\");\r\n        canvasBoard.append(cell);\r\n    };\r\n\r\n    getIsMovedCell() {\r\n        return this.isMoved;\r\n    };\r\n\r\n    setIsMovedCell() {\r\n        this.isMoved = true;\r\n    };\r\n\r\n    getIsEmptyCell() {\r\n        return this.isEmpty;\r\n    };\r\n\r\n    getIsMergeCell() {\r\n        return this.isMerge;\r\n    };\r\n\r\n    setIsMergeCell() {\r\n        this.isMerge = true;\r\n    };\r\n\r\n    getValueCell() {\r\n        return this.value;\r\n    };\r\n\r\n    setColorCell(value) {\r\n        this.ctx.fillStyle = COLORS[value];\r\n        this.ctx.fillRect(0, 0, 300, 150);\r\n    };\r\n\r\n    setValueCell(value) {\r\n        this.ctx.fillStyle = \"black\";\r\n        this.ctx.font = \"bold 60px sans-serif\";\r\n        this.ctx.textAlign = \"center\";\r\n        this.ctx.textBaseline = \"middle\";\r\n        this.ctx.fillText(value, this.cell.height, this.cell.width/4)\r\n        this.value = value;\r\n        this.isEmpty = false;\r\n    };\r\n\r\n    setClearCell() {\r\n        this.ctx.clearRect(0, 0, 300, 150);\r\n        this.value = null;\r\n        this.isEmpty = true;\r\n        this.isMerge = false;\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://2048/./src/cell.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n\r\n\r\n\r\nconst MIN_DIFF_X_Y = 50;\r\nconst MAX_GREATEST_VALUE = 2048;\r\nconst canvasBoard = document.getElementById(\"canvas\");\r\nlet board = new _board_js__WEBPACK_IMPORTED_MODULE_1__.Board(canvasBoard);\r\nlet mouseDownClickX;\r\nlet mouseDownClickY;\r\n\r\nboard.getInitialRandomFilledCell();\r\nboard.getInitialRandomFilledCell();\r\nsetupButtonClick();\r\nsetupMouseDownClick();\r\nsetupMouseUpClick();\r\n\r\nfunction setupButtonClick() {\r\n    window.addEventListener(\"keydown\", handleButtonClick, {once: true});\r\n};\r\n\r\nfunction setupMouseDownClick() {\r\n    window.addEventListener(\"mousedown\", handleMouseDownClick);\r\n};\r\n\r\nfunction handleMouseDownClick(event) {\r\n    mouseDownClickX = event.clientX;\r\n    mouseDownClickY = event.clientY;\r\n};\r\n\r\nfunction setupMouseUpClick() {\r\n    window.addEventListener(\"mouseup\", handleMouseUpClick);\r\n};\r\n\r\nfunction handleMouseUpClick(event) {\r\n    let mouseUpClickX = event.clientX;\r\n    let mouseUpClickY = event.clientY;\r\n    if ((Math.abs(mouseDownClickX - mouseUpClickX)) > MIN_DIFF_X_Y || (Math.abs(mouseDownClickY - mouseUpClickY)) > MIN_DIFF_X_Y) {\r\n        if ((Math.abs(mouseDownClickX - mouseUpClickX)) > (Math.abs(mouseDownClickY - mouseUpClickY))) {\r\n            if (mouseDownClickX > mouseUpClickX) {\r\n                moveLeft();\r\n                board.getRandomFilledCell();\r\n                return;\r\n            }\r\n            moveRight();\r\n            board.getRandomFilledCell();\r\n            return;\r\n        }\r\n        if (mouseDownClickY > mouseUpClickY) {\r\n            moveUp();\r\n            board.getRandomFilledCell();\r\n            return;\r\n        }\r\n        moveDown();\r\n        board.getRandomFilledCell();\r\n    };\r\n\r\n};\r\n\r\nfunction handleButtonClick(event) {\r\n    switch (event.key) {\r\n        case \"ArrowUp\":\r\n            moveUp();\r\n            break;\r\n        \r\n        case \"ArrowDown\":\r\n            moveDown();\r\n            break;\r\n        \r\n        case \"ArrowLeft\":\r\n            moveLeft();\r\n            break;\r\n\r\n        case \"ArrowRight\":\r\n            moveRight();\r\n            break;\r\n\r\n        default:\r\n            setupButtonClick();\r\n            return;\r\n    };\r\n\r\n    if (board.getGreatestValue() >= MAX_GREATEST_VALUE) {\r\n        alert('Уровень пройден!');\r\n        restartGame();\r\n    };\r\n\r\n    board.getRandomFilledCell();\r\n\r\n    if (!board.canContinueGame()) {\r\n        alert('Нельзя сделать ход');\r\n        restartGame();\r\n    };\r\n\r\n    setupButtonClick();\r\n};\r\n\r\nfunction moveUp() {\r\n    board.moveCellsUp();\r\n};\r\n\r\nfunction moveDown() {\r\n    board.moveCellsDown();\r\n};\r\n\r\nfunction moveLeft() {\r\n    board.moveCellsLeft();\r\n};\r\n\r\nfunction moveRight() {\r\n    board.moveCellsRight();\r\n};\r\n\r\nfunction restartGame() {\r\n    canvasBoard.replaceChildren();\r\n    board = new _board_js__WEBPACK_IMPORTED_MODULE_1__.Board(canvasBoard);\r\n    board.getInitialRandomFilledCell();\r\n    board.getInitialRandomFilledCell();\r\n};\r\n\n\n//# sourceURL=webpack://2048/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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