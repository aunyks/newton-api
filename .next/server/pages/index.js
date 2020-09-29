module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/aunyks/dev/newton-api/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction Index({}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width\",\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }), __jsx(\"title\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"newton\"), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Open+Sans\",\n    rel: \"stylesheet\",\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1046429868\",\n    __self: this\n  }, \"html,body{width:100%;height:100%;padding:0;margin:0;font-family:'Open Sans',sans-serif;background-color:black;color:white;overflow:scroll;}#center{width:100%;text-align:center;margin-top:10vh;}#center>h1{font-size:35px;}#center>p{font-size:25px;}.code{width:42ex;margin:40px auto;text-align:left;}.code>p{padding-top:40px;text-align:center;}.code>p>a{color:white;}.code>p>a:visited{color:white;}pre{text-align:left;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdW55a3MvZGV2L25ld3Rvbi1hcGkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYVUsQUFHc0IsQUFXQSxBQU1JLEFBSUEsQUFJSixBQU1NLEFBS0wsQUFJQSxBQUlJLFdBM0NKLEFBV00sQUFjRCxDQVduQixBQUlBLEdBdkJBLEFBSUEsQ0F1QkEsQ0Fib0IsTUE5QlIsS0F5Qk0sQ0FkQSxJQVZQLEVBOEJYLE9BN0JzQyxFQXdCdEMsQ0FkQSxnQ0FUeUIsdUJBQ1gsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2F1bnlrcy9kZXYvbmV3dG9uLWFwaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDx0aXRsZT5uZXd0b248L3RpdGxlPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtcblxuICAgICAgICAgIGAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgICNjZW50ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NlbnRlcj5oMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2NlbnRlcj5wIHtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29kZSB7XG4gICAgICAgICAgd2lkdGg6IDQyZXg7XG4gICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2RlPnAge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2RlPnA+YSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvZGU+cD5hOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhcnRpY2xlIGlkPVwiY2VudGVyXCI+XG4gICAgICAgIDxoMT5uZXd0b248L2gxPlxuICAgICAgICA8cD5BIHJlYWxseSBtaWNybyBtaWNyby1zZXJ2aWNlIGZvciBhZHZhbmNlZCBtYXRoLjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlXCI+XG4gICAgICAgICAgU2VuZCB0aGlzOjxiciAvPlxuICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXd0b24ubm93LnNoL2FwaS92Mi9mYWN0b3IveF4yLTFcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgJ3RleHREZWNvcmF0aW9uJzogJ25vbmUnIH19IHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vbmV3dG9uLm5vdy5zaC9hcGkvdjIvZmFjdG9yL3heMi0xPC9hPlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgR2V0IHRoaXM6XG4gICAgICA8cHJlPntgXG4gICAgICAgIHtcbiAgICAgICAgICBcIm9wZXJhdGlvblwiOlwiZmFjdG9yXCIsXG4gICAgICAgICAgXCJleHByZXNzaW9uXCI6XCJ4XjIgLSAxXCIsXG4gICAgICAgICAgXCJyZXN1bHRcIjpcIih4IC0gMSkgKHggKyAxKVwiXG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8cD48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F1bnlrcy9uZXd0b24tYXBpXCI+U2VlIE1vcmU8L2E+PC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgU3VwcG9ydGVkIEJ5OlxuICAgICAgPGhyIC8+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWV6Y2xhLnh5elwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMi41ZW0nLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19Pk1FWkNMQTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/aunyks/dev/newton-api/pages/index.js */\"), __jsx(\"article\", {\n    id: \"center\",\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"newton\"), __jsx(\"p\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"A really micro micro-service for advanced math.\"), __jsx(\"div\", {\n    className: \"jsx-1046429868\" + \" \" + \"code\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"Send this:\", __jsx(\"br\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 21\n    }\n  }), __jsx(\"pre\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"https://newton.now.sh/api/v2/factor/x^2-1\",\n    style: {\n      color: 'white',\n      'textDecoration': 'none'\n    },\n    target: \"_blank\",\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, \"https://newton.now.sh/api/v2/factor/x^2-1\")), \"Get this:\", __jsx(\"pre\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, `\n        {\n          \"operation\":\"factor\",\n          \"expression\":\"x^2 - 1\",\n          \"result\":\"(x - 1) (x + 1)\"\n        }\n        `), __jsx(\"p\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"https://github.com/aunyks/newton-api\",\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 14\n    }\n  }, \"See More\")), __jsx(\"br\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }), \"Supported By:\", __jsx(\"hr\", {\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }), __jsx(\"a\", {\n    href: \"https://mezcla.xyz\",\n    style: {\n      fontWeight: 'bold',\n      color: 'white',\n      fontSize: '2.5em',\n      textDecoration: 'none'\n    },\n    className: \"jsx-1046429868\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"MEZCLA\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxLQUFULENBQWUsRUFBZixFQUFvQjtBQUNqQyxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxvQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixFQUlFO0FBQU0sUUFBSSxFQUFDLG1EQUFYO0FBQStELE9BQUcsRUFBQyxZQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBQUE7QUFBQTtBQUFBLHE3SEE0REU7QUFBUyxNQUFFLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFGRixFQUdFO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURaLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsMkNBQVI7QUFBb0QsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxPQUFUO0FBQWtCLHdCQUFrQjtBQUFwQyxLQUEzRDtBQUF5RyxVQUFNLEVBQUMsUUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGLENBRkYsZUFNRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzs7Ozs7O1NBQVAsQ0FORSxFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUcsUUFBSSxFQUFDLHNDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxDQWRGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsbUJBaUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRSxFQWtCRTtBQUFHLFFBQUksRUFBQyxvQkFBUjtBQUE2QixTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxNQUFkO0FBQXNCRCxXQUFLLEVBQUUsT0FBN0I7QUFBc0NFLGNBQVEsRUFBRSxPQUFoRDtBQUF5REMsb0JBQWMsRUFBRTtBQUF6RSxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsQ0FIRixDQTVERixDQURGO0FBdUZEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8dGl0bGU+bmV3dG9uPC90aXRsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICB7XG5cbiAgICAgICAgICBgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICAjY2VudGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgICNjZW50ZXI+aDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNjZW50ZXI+cCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvZGUge1xuICAgICAgICAgIHdpZHRoOiA0MmV4O1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29kZT5wIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29kZT5wPmEge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2RlPnA+YTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBwcmUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXJ0aWNsZSBpZD1cImNlbnRlclwiPlxuICAgICAgICA8aDE+bmV3dG9uPC9oMT5cbiAgICAgICAgPHA+QSByZWFsbHkgbWljcm8gbWljcm8tc2VydmljZSBmb3IgYWR2YW5jZWQgbWF0aC48L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZVwiPlxuICAgICAgICAgIFNlbmQgdGhpczo8YnIgLz5cbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV3dG9uLm5vdy5zaC9hcGkvdjIvZmFjdG9yL3heMi0xXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsICd0ZXh0RGVjb3JhdGlvbic6ICdub25lJyB9fSB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL25ld3Rvbi5ub3cuc2gvYXBpL3YyL2ZhY3Rvci94XjItMTwvYT5cbiAgICAgICAgICA8L3ByZT5cbiAgICAgIEdldCB0aGlzOlxuICAgICAgPHByZT57YFxuICAgICAgICB7XG4gICAgICAgICAgXCJvcGVyYXRpb25cIjpcImZhY3RvclwiLFxuICAgICAgICAgIFwiZXhwcmVzc2lvblwiOlwieF4yIC0gMVwiLFxuICAgICAgICAgIFwicmVzdWx0XCI6XCIoeCAtIDEpICh4ICsgMSlcIlxuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdW55a3MvbmV3dG9uLWFwaVwiPlNlZSBNb3JlPC9hPjwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgIFN1cHBvcnRlZCBCeTpcbiAgICAgIDxociAvPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL21lemNsYS54eXpcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzIuNWVtJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5NRVpDTEE8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });