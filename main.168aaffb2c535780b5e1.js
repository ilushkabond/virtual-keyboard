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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    min-width: 1024px;\\r\\n    font-family: 'Cutive Mono', monospace;\\r\\n}\\r\\n\\r\\n.button {\\r\\n    cursor: pointer;\\r\\n    width: 60px;\\r\\n    height: 60px;\\r\\n    background-color: #999;\\r\\n    border-radius: 5px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nalert('Не успел доделать до дедлайна, извиняюсь, пожалуйста, не проверяйте мою работу до четверга, если что, напишите в discord: ILUSHKABOND#1580');\r\n\r\n\r\n\r\nconst KEYBOARD = [['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete'],['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'],['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight']];\r\nconst ENG_MAP = {\"Backquote\":{\"lower\":\"`\",\"upper\":\"`\",\"shift\":\"~\",\"shiftCaps\":\"~\"},\"Digit1\":{\"lower\":\"1\",\"upper\":\"1\",\"shift\":\"!\",\"shiftCaps\":\"!\"},\"Digit2\":{\"lower\":\"2\",\"upper\":\"2\",\"shift\":\"@\",\"shiftCaps\":\"@\"},\"Digit3\":{\"lower\":\"3\",\"upper\":\"3\",\"shift\":\"#\",\"shiftCaps\":\"#\"},\"Digit4\":{\"lower\":\"4\",\"upper\":\"4\",\"shift\":\"$\",\"shiftCaps\":\"$\"},\"Digit5\":{\"lower\":\"5\",\"upper\":\"5\",\"shift\":\"%\",\"shiftCaps\":\"%\"},\"Digit6\":{\"lower\":\"6\",\"upper\":\"6\",\"shift\":\"^\",\"shiftCaps\":\"^\"},\"Digit7\":{\"lower\":\"7\",\"upper\":\"7\",\"shift\":\"&\",\"shiftCaps\":\"&\"},\"Digit8\":{\"lower\":\"8\",\"upper\":\"8\",\"shift\":\"*\",\"shiftCaps\":\"*\"},\"Digit9\":{\"lower\":\"9\",\"upper\":\"9\",\"shift\":\"(\",\"shiftCaps\":\"(\"},\"Digit0\":{\"lower\":\"0\",\"upper\":\"0\",\"shift\":\")\",\"shiftCaps\":\")\"},\"Minus\":{\"lower\":\"-\",\"upper\":\"-\",\"shift\":\"_\",\"shiftCaps\":\"_\"},\"Equal\":{\"lower\":\"=\",\"upper\":\"=\",\"shift\":\"+\",\"shiftCaps\":\"+\"},\"Backspace\":{\"lower\":\"Backspace\",\"upper\":\"Backspace\",\"shift\":\"Backspace\",\"shiftCaps\":\"Backspace\"},\"Tab\":{\"lower\":\"Tab\",\"upper\":\"Tab\",\"shift\":\"Tab\",\"shiftCaps\":\"Tab\"},\"KeyQ\":{\"lower\":\"q\",\"upper\":\"Q\",\"shift\":\"Q\",\"shiftCaps\":\"q\"},\"KeyW\":{\"lower\":\"w\",\"upper\":\"W\",\"shift\":\"W\",\"shiftCaps\":\"w\"},\"KeyE\":{\"lower\":\"e\",\"upper\":\"E\",\"shift\":\"E\",\"shiftCaps\":\"e\"},\"KeyR\":{\"lower\":\"r\",\"upper\":\"R\",\"shift\":\"R\",\"shiftCaps\":\"r\"},\"KeyT\":{\"lower\":\"t\",\"upper\":\"T\",\"shift\":\"T\",\"shiftCaps\":\"t\"},\"KeyY\":{\"lower\":\"y\",\"upper\":\"Y\",\"shift\":\"Y\",\"shiftCaps\":\"y\"},\"KeyU\":{\"lower\":\"u\",\"upper\":\"U\",\"shift\":\"U\",\"shiftCaps\":\"u\"},\"KeyI\":{\"lower\":\"i\",\"upper\":\"I\",\"shift\":\"I\",\"shiftCaps\":\"i\"},\"KeyO\":{\"lower\":\"o\",\"upper\":\"O\",\"shift\":\"O\",\"shiftCaps\":\"o\"},\"KeyP\":{\"lower\":\"p\",\"upper\":\"P\",\"shift\":\"P\",\"shiftCaps\":\"p\"},\"BracketLeft\":{\"lower\":\"[\",\"upper\":\"{\",\"shift\":\"{\",\"shiftCaps\":\"[\"},\"BracketRight\":{\"lower\":\"]\",\"upper\":\"}\",\"shift\":\"}\",\"shiftCaps\":\"]\"},\"Backslash\":{\"lower\":\"\\\\\",\"upper\":\"|\",\"shift\":\"|\",\"shiftCaps\":\"\\\\\"},\"Delete\":{\"lower\":\"Del\",\"upper\":\"Del\",\"shift\":\"Del\",\"shiftCaps\":\"Del\"},\"CapsLock\":{\"lower\":\"Caps Lock\",\"upper\":\"Caps Lock\",\"shift\":\"Caps Lock\",\"shiftCaps\":\"Caps Lock\"},\"KeyA\":{\"lower\":\"a\",\"upper\":\"A\",\"shift\":\"A\",\"shiftCaps\":\"a\"},\"KeyS\":{\"lower\":\"s\",\"upper\":\"S\",\"shift\":\"S\",\"shiftCaps\":\"s\"},\"KeyD\":{\"lower\":\"d\",\"upper\":\"D\",\"shift\":\"D\",\"shiftCaps\":\"d\"},\"KeyF\":{\"lower\":\"f\",\"upper\":\"F\",\"shift\":\"F\",\"shiftCaps\":\"f\"},\"KeyG\":{\"lower\":\"g\",\"upper\":\"G\",\"shift\":\"G\",\"shiftCaps\":\"g\"},\"KeyH\":{\"lower\":\"h\",\"upper\":\"H\",\"shift\":\"H\",\"shiftCaps\":\"h\"},\"KeyJ\":{\"lower\":\"j\",\"upper\":\"J\",\"shift\":\"J\",\"shiftCaps\":\"j\"},\"KeyK\":{\"lower\":\"k\",\"upper\":\"K\",\"shift\":\"K\",\"shiftCaps\":\"k\"},\"KeyL\":{\"lower\":\"l\",\"upper\":\"L\",\"shift\":\"L\",\"shiftCaps\":\"l\"},\"Semicolon\":{\"lower\":\";\",\"upper\":\":\",\"shift\":\":\",\"shiftCaps\":\";\"},\"Quote\":{\"lower\":\"'\",\"upper\":\"\\\"\",\"shift\":\"\\\"\",\"shiftCaps\":\"'\"},\"Enter\":{\"lower\":\"Enter\",\"upper\":\"Enter\",\"shift\":\"Enter\",\"shiftCaps\":\"Enter\"},\"ShiftLeft\":{\"lower\":\"Shift\",\"upper\":\"Shift\",\"shift\":\"Shift\",\"shiftCaps\":\"Shift\"},\"KeyZ\":{\"lower\":\"z\",\"upper\":\"Z\",\"shift\":\"Z\",\"shiftCaps\":\"z\"},\"KeyX\":{\"lower\":\"x\",\"upper\":\"X\",\"shift\":\"X\",\"shiftCaps\":\"x\"},\"KeyC\":{\"lower\":\"c\",\"upper\":\"C\",\"shift\":\"C\",\"shiftCaps\":\"c\"},\"KeyV\":{\"lower\":\"v\",\"upper\":\"V\",\"shift\":\"V\",\"shiftCaps\":\"v\"},\"KeyB\":{\"lower\":\"b\",\"upper\":\"B\",\"shift\":\"B\",\"shiftCaps\":\"b\"},\"KeyN\":{\"lower\":\"n\",\"upper\":\"N\",\"shift\":\"N\",\"shiftCaps\":\"n\"},\"KeyM\":{\"lower\":\"m\",\"upper\":\"M\",\"shift\":\"M\",\"shiftCaps\":\"m\"},\"Comma\":{\"lower\":\",\",\"upper\":\"<\",\"shift\":\"<\",\"shiftCaps\":\",\"},\"Period\":{\"lower\":\".\",\"upper\":\">\",\"shift\":\">\",\"shiftCaps\":\".\"},\"Slash\":{\"lower\":\"/\",\"upper\":\"?\",\"shift\":\"?\",\"shiftCaps\":\"/\"},\"ArrowUp\":{\"lower\":\"⬆\",\"upper\":\"⬆\",\"shift\":\"⬆\",\"shiftCaps\":\"⬆\"},\"ShiftRight\":{\"lower\":\"Shift\",\"upper\":\"Shift\",\"shift\":\"Shift\",\"shiftCaps\":\"Shift\"},\"ControlLeft\":{\"lower\":\"Ctrl\",\"upper\":\"Ctrl\",\"shift\":\"Ctrl\",\"shiftCaps\":\"Ctrl\"},\"MetaLeft\":{\"lower\":\"Win\",\"upper\":\"Win\",\"shift\":\"Win\",\"shiftCaps\":\"Win\"},\"AltLeft\":{\"lower\":\"Alt\",\"upper\":\"Alt\",\"shift\":\"Alt\",\"shiftCaps\":\"Alt\"},\"Space\":{\"lower\":\"Space\",\"upper\":\"Space\",\"shift\":\"Space\",\"shiftCaps\":\"Space\"},\"AltRight\":{\"lower\":\"Alt\",\"upper\":\"Alt\",\"shift\":\"Alt\",\"shiftCaps\":\"Alt\"},\"ArrowLeft\":{\"lower\":\"⬅\",\"upper\":\"⬅\",\"shift\":\"⬅\",\"shiftCaps\":\"⬅\"},\"ArrowDown\":{\"lower\":\"⬇\",\"upper\":\"⬇\",\"shift\":\"⬇\",\"shiftCaps\":\"⬇\"},\"ArrowRight\":{\"lower\":\"➡\",\"upper\":\"➡\",\"shift\":\"➡\",\"shiftCaps\":\"➡\"},\"ControlRight\":{\"lower\":\"Ctrl\",\"upper\":\"Ctrl\",\"shift\":\"Ctrl\",\"shiftCaps\":\"Ctrl\"}};\r\nconst RUS_MAP = {\"Backquote\":{\"lower\":\"ё\",\"upper\":\"Ё\",\"shift\":\"Ё\",\"shiftCaps\":\"ё\"},\"Digit1\":{\"lower\":\"1\",\"upper\":\"1\",\"shift\":\"!\",\"shiftCaps\":\"!\"},\"Digit2\":{\"lower\":\"2\",\"upper\":\"2\",\"shift\":\"\\\"\",\"shiftCaps\":\"@\"},\"Digit3\":{\"lower\":\"3\",\"upper\":\"3\",\"shift\":\"№\",\"shiftCaps\":\"#\"},\"Digit4\":{\"lower\":\"4\",\"upper\":\"4\",\"shift\":\";\",\"shiftCaps\":\"$\"},\"Digit5\":{\"lower\":\"5\",\"upper\":\"5\",\"shift\":\"%\",\"shiftCaps\":\"%\"},\"Digit6\":{\"lower\":\"6\",\"upper\":\"6\",\"shift\":\":\",\"shiftCaps\":\"^\"},\"Digit7\":{\"lower\":\"7\",\"upper\":\"7\",\"shift\":\"?\",\"shiftCaps\":\"&\"},\"Digit8\":{\"lower\":\"8\",\"upper\":\"8\",\"shift\":\"*\",\"shiftCaps\":\"*\"},\"Digit9\":{\"lower\":\"9\",\"upper\":\"9\",\"shift\":\"(\",\"shiftCaps\":\"(\"},\"Digit0\":{\"lower\":\"0\",\"upper\":\"0\",\"shift\":\")\",\"shiftCaps\":\")\"},\"Minus\":{\"lower\":\"-\",\"upper\":\"-\",\"shift\":\"_\",\"shiftCaps\":\"_\"},\"Equal\":{\"lower\":\"=\",\"upper\":\"=\",\"shift\":\"+\",\"shiftCaps\":\"+\"},\"Backspace\":{\"lower\":\"Backspace\",\"upper\":\"Backspace\",\"shift\":\"Backspace\",\"shiftCaps\":\"Backspace\"},\"Tab\":{\"lower\":\"Tab\",\"upper\":\"Tab\",\"shift\":\"Tab\",\"shiftCaps\":\"Tab\"},\"KeyQ\":{\"lower\":\"й\",\"upper\":\"Й\",\"shift\":\"Й\",\"shiftCaps\":\"й\"},\"KeyW\":{\"lower\":\"ц\",\"upper\":\"Ц\",\"shift\":\"Ц\",\"shiftCaps\":\"ц\"},\"KeyE\":{\"lower\":\"у\",\"upper\":\"У\",\"shift\":\"У\",\"shiftCaps\":\"у\"},\"KeyR\":{\"lower\":\"к\",\"upper\":\"К\",\"shift\":\"К\",\"shiftCaps\":\"к\"},\"KeyT\":{\"lower\":\"е\",\"upper\":\"Е\",\"shift\":\"Е\",\"shiftCaps\":\"е\"},\"KeyY\":{\"lower\":\"н\",\"upper\":\"Н\",\"shift\":\"Н\",\"shiftCaps\":\"н\"},\"KeyU\":{\"lower\":\"г\",\"upper\":\"Г\",\"shift\":\"Г\",\"shiftCaps\":\"г\"},\"KeyI\":{\"lower\":\"ш\",\"upper\":\"Ш\",\"shift\":\"Ш\",\"shiftCaps\":\"ш\"},\"KeyO\":{\"lower\":\"щ\",\"upper\":\"Щ\",\"shift\":\"Щ\",\"shiftCaps\":\"щ\"},\"KeyP\":{\"lower\":\"з\",\"upper\":\"З\",\"shift\":\"З\",\"shiftCaps\":\"з\"},\"BracketLeft\":{\"lower\":\"х\",\"upper\":\"Х\",\"shift\":\"Х\",\"shiftCaps\":\"х\"},\"BracketRight\":{\"lower\":\"ъ\",\"upper\":\"Ъ\",\"shift\":\"Ъ\",\"shiftCaps\":\"ъ\"},\"Backslash\":{\"lower\":\"\\\\\",\"upper\":\"/\",\"shift\":\"/\",\"shiftCaps\":\"\\\\\"},\"Delete\":{\"lower\":\"Del\",\"upper\":\"Del\",\"shift\":\"Del\",\"shiftCaps\":\"Del\"},\"CapsLock\":{\"lower\":\"Caps Lock\",\"upper\":\"Caps Lock\",\"shift\":\"Caps Lock\",\"shiftCaps\":\"Caps Lock\"},\"KeyA\":{\"lower\":\"ф\",\"upper\":\"Ф\",\"shift\":\"Ф\",\"shiftCaps\":\"ф\"},\"KeyS\":{\"lower\":\"ы\",\"upper\":\"Ы\",\"shift\":\"Ы\",\"shiftCaps\":\"ы\"},\"KeyD\":{\"lower\":\"в\",\"upper\":\"В\",\"shift\":\"В\",\"shiftCaps\":\"в\"},\"KeyF\":{\"lower\":\"а\",\"upper\":\"А\",\"shift\":\"А\",\"shiftCaps\":\"а\"},\"KeyG\":{\"lower\":\"п\",\"upper\":\"П\",\"shift\":\"П\",\"shiftCaps\":\"п\"},\"KeyH\":{\"lower\":\"р\",\"upper\":\"Р\",\"shift\":\"Р\",\"shiftCaps\":\"р\"},\"KeyJ\":{\"lower\":\"о\",\"upper\":\"О\",\"shift\":\"О\",\"shiftCaps\":\"о\"},\"KeyK\":{\"lower\":\"л\",\"upper\":\"Л\",\"shift\":\"Л\",\"shiftCaps\":\"л\"},\"KeyL\":{\"lower\":\"д\",\"upper\":\"Д\",\"shift\":\"Д\",\"shiftCaps\":\"д\"},\"Semicolon\":{\"lower\":\"ж\",\"upper\":\"Ж\",\"shift\":\"Ж\",\"shiftCaps\":\"ж\"},\"Quote\":{\"lower\":\"э\",\"upper\":\"Э\",\"shift\":\"Э\",\"shiftCaps\":\"э\"},\"Enter\":{\"lower\":\"Enter\",\"upper\":\"Enter\",\"shift\":\"Enter\",\"shiftCaps\":\"Enter\"},\"ShiftLeft\":{\"lower\":\"Shift\",\"upper\":\"Shift\",\"shift\":\"Shift\",\"shiftCaps\":\"Shift\"},\"KeyZ\":{\"lower\":\"я\",\"upper\":\"Я\",\"shift\":\"Я\",\"shiftCaps\":\"я\"},\"KeyX\":{\"lower\":\"ч\",\"upper\":\"Ч\",\"shift\":\"Ч\",\"shiftCaps\":\"ч\"},\"KeyC\":{\"lower\":\"с\",\"upper\":\"С\",\"shift\":\"С\",\"shiftCaps\":\"с\"},\"KeyV\":{\"lower\":\"м\",\"upper\":\"М\",\"shift\":\"М\",\"shiftCaps\":\"м\"},\"KeyB\":{\"lower\":\"и\",\"upper\":\"И\",\"shift\":\"И\",\"shiftCaps\":\"и\"},\"KeyN\":{\"lower\":\"т\",\"upper\":\"Т\",\"shift\":\"Т\",\"shiftCaps\":\"т\"},\"KeyM\":{\"lower\":\"ь\",\"upper\":\"Ь\",\"shift\":\"Ь\",\"shiftCaps\":\"ь\"},\"Comma\":{\"lower\":\"б\",\"upper\":\"Б\",\"shift\":\"Б\",\"shiftCaps\":\"б\"},\"Period\":{\"lower\":\"ю\",\"upper\":\"Ю\",\"shift\":\"Ю\",\"shiftCaps\":\"ю\"},\"Slash\":{\"lower\":\"/\",\"upper\":\"/\",\"shift\":\"/\",\"shiftCaps\":\"/\"},\"ArrowUp\":{\"lower\":\"⬆\",\"upper\":\"⬆\",\"shift\":\"⬆\",\"shiftCaps\":\"⬆\"},\"ShiftRight\":{\"lower\":\"Shift\",\"upper\":\"Shift\",\"shift\":\"Shift\",\"shiftCaps\":\"Shift\"},\"ControlLeft\":{\"lower\":\"Ctrl\",\"upper\":\"Ctrl\",\"shift\":\"Ctrl\",\"shiftCaps\":\"Ctrl\"},\"MetaLeft\":{\"lower\":\"Win\",\"upper\":\"Win\",\"shift\":\"Win\",\"shiftCaps\":\"Win\"},\"AltLeft\":{\"lower\":\"Alt\",\"upper\":\"Alt\",\"shift\":\"Alt\",\"shiftCaps\":\"Alt\"},\"Space\":{\"lower\":\"Space\",\"upper\":\"Space\",\"shift\":\"Space\",\"shiftCaps\":\"Space\"},\"AltRight\":{\"lower\":\"Alt\",\"upper\":\"Alt\",\"shift\":\"Alt\",\"shiftCaps\":\"Alt\"},\"ArrowLeft\":{\"lower\":\"⬅\",\"upper\":\"⬅\",\"shift\":\"⬅\",\"shiftCaps\":\"⬅\"},\"ArrowDown\":{\"lower\":\"⬇\",\"upper\":\"⬇\",\"shift\":\"⬇\",\"shiftCaps\":\"⬇\"},\"ArrowRight\":{\"lower\":\"➡\",\"upper\":\"➡\",\"shift\":\"➡\",\"shiftCaps\":\"➡\"},\"ControlRight\":{\"lower\":\"Ctrl\",\"upper\":\"Ctrl\",\"shift\":\"Ctrl\",\"shiftCaps\":\"Ctrl\"}};\r\n\r\nclass Element {\r\n    constructor(parentNode, tagName = 'div', content = null, className = null) {\r\n        const element = document.createElement(tagName);\r\n        element.textContent = content;\r\n        element.className = className;\r\n        parentNode.appendChild(element);\r\n        this.node = element;\r\n    }\r\n}\r\n\r\nfunction load() {\r\n    const LANG = 'en';\r\n    const keyMap = LANG === 'en' ? ENG_MAP : RUS_MAP;\r\n    const container = new Element(document.body, 'div', '', 'container');\r\n    \r\n    KEYBOARD.forEach(row => {\r\n        const rowContainer = new Element(container.node, 'div', '', 'row');\r\n        row.forEach(key => {\r\n            const textContent = keyMap[key].lower\r\n            const keyboardButton = new Element(rowContainer.node, 'button', textContent, 'button');\r\n        })\r\n    })\r\n}\r\n\r\nload();\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;