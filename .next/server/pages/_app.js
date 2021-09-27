"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./default-theme.ts":
/*!**************************!*\
  !*** ./default-theme.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultTheme\": () => (/* binding */ defaultTheme)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n\nconst defaultThemeOptions = {\n  palette: {\n    primary: {\n      main: '#1DA1F2',\n      contrastText: '#FFFFFF'\n    }\n  }\n};\nconst defaultTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createTheme)(defaultThemeOptions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZWZhdWx0LXRoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsbUJBQWlDLEdBQUc7QUFDeENDLEVBQUFBLE9BQU8sRUFBRTtBQUFFQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUFBLFlBQVksRUFBRTtBQUFqQztBQUFYO0FBRCtCLENBQTFDO0FBR08sTUFBTUMsWUFBWSxHQUFHTiw4REFBVyxDQUFDQyxtQkFBRCxDQUFoQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RlZmF1bHQtdGhlbWUudHM/NGFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVPcHRpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmNvbnN0IGRlZmF1bHRUaGVtZU9wdGlvbnM6IFRoZW1lT3B0aW9ucyA9IHtcbiAgcGFsZXR0ZTogeyBwcmltYXJ5OiB7IG1haW46ICcjMURBMUYyJywgY29udHJhc3RUZXh0OiAnI0ZGRkZGRicgfSB9LFxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKGRlZmF1bHRUaGVtZU9wdGlvbnMpXG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJkZWZhdWx0VGhlbWVPcHRpb25zIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUZXh0IiwiZGVmYXVsdFRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./default-theme.ts\n");

/***/ }),

/***/ "./graphql/apollo-client.ts":
/*!**********************************!*\
  !*** ./graphql/apollo-client.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apolloClient\": () => (/* binding */ apolloClient)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiRoot = process.env.NEXT_PUBLIC_API_ROOT;\nconst apolloClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  uri: `${apiRoot}/api/graphql`,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2Fwb2xsby1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxvQkFBNUI7QUFFTyxNQUFNQyxZQUFZLEdBQUcsSUFBSU4sd0RBQUosQ0FBaUI7QUFDM0NPLEVBQUFBLEdBQUcsRUFBRyxHQUFFTCxPQUFRLGNBRDJCO0FBRTNDTSxFQUFBQSxLQUFLLEVBQUUsSUFBSVAseURBQUo7QUFGb0MsQ0FBakIsQ0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncmFwaHFsL2Fwb2xsby1jbGllbnQudHM/NzkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuY29uc3QgYXBpUm9vdCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ST09UXG5cbmV4cG9ydCBjb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiBgJHthcGlSb290fS9hcGkvZ3JhcGhxbGAsXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSlcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiYXBpUm9vdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfUk9PVCIsImFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/apollo-client.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var default_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! default-theme */ \"./default-theme.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _gql_apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gql/apollo-client */ \"./graphql/apollo-client.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/user/ReactProject/helloworld-app/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n // @see https://next.material-ui.com/guides/server-rendering/\n\n\nconst cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_2___default()({\n  key: 'css',\n  prepend: true\n});\ncache.compat = true;\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {\n    client: _gql_apollo_client__WEBPACK_IMPORTED_MODULE_6__.apolloClient,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {\n      value: cache,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: default_theme__WEBPACK_IMPORTED_MODULE_4__.defaultTheme,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CssBaseline, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOzs7QUFDQSxNQUFNUSxLQUFLLEdBQUdMLHFEQUFXLENBQUM7QUFBRU0sRUFBQUEsR0FBRyxFQUFFLEtBQVA7QUFBY0MsRUFBQUEsT0FBTyxFQUFFO0FBQXZCLENBQUQsQ0FBekI7QUFDQUYsS0FBSyxDQUFDRyxNQUFOLEdBQWUsSUFBZjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBRCxLQUFxRDtBQUNqRSxzQkFDRSw4REFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVQLDREQUF4QjtBQUFBLDJCQUNFLDhEQUFDLHlEQUFEO0FBQWUsV0FBSyxFQUFFQyxLQUF0QjtBQUFBLDZCQUNFLDhEQUFDLDREQUFEO0FBQWUsYUFBSyxFQUFFSCx1REFBdEI7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsU0FBRCxvQkFBZVMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQVhEOztBQVlBLGlFQUFlRixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBDc3NCYXNlbGluZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJ1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSAnZGVmYXVsdC10aGVtZSdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBhcG9sbG9DbGllbnQgfSBmcm9tICdAZ3FsL2Fwb2xsby1jbGllbnQnXG5cbi8vIEBzZWUgaHR0cHM6Ly9uZXh0Lm1hdGVyaWFsLXVpLmNvbS9ndWlkZXMvc2VydmVyLXJlbmRlcmluZy9cbmNvbnN0IGNhY2hlID0gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnLCBwcmVwZW5kOiB0cnVlIH0pXG5jYWNoZS5jb21wYXQgPSB0cnVlXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkZWZhdWx0VGhlbWV9PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9DYWNoZVByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVDYWNoZSIsIkNhY2hlUHJvdmlkZXIiLCJkZWZhdWx0VGhlbWUiLCJBcG9sbG9Qcm92aWRlciIsImFwb2xsb0NsaWVudCIsImNhY2hlIiwia2V5IiwicHJlcGVuZCIsImNvbXBhdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();