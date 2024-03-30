/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bill.js":
/*!*********************!*\
  !*** ./src/bill.js ***!
  \*********************/
/***/ (() => {

eval("document.querySelector('.invoice-btn').onclick = function(){\r\n    print();\r\n}\r\n\r\ndocument.querySelector(\".main-window .bar .funct .add-booking\").addEventListener(\"click\", () =>{\r\n\r\n    document.querySelector(\".invoice-wrapper\").classList.add(\"active\");\r\n    document.querySelector(\".main-window\").classList.add(\"active\");\r\n    document.querySelector(\".sidebar\").classList.add(\"active\");\r\n});\r\n\r\ndocument.querySelector(\".invoice-wrapper .close-btn\").addEventListener(\"click\", () =>{\r\n\r\n    document.querySelector(\".invoice-wrapper\").classList.remove(\"active\");\r\n    document.querySelector(\".main-window\").classList.remove(\"active\");\r\n    document.querySelector(\".sidebar\").classList.remove(\"active\");\r\n});\r\n\r\nWindow.onload = function() {\r\n    document.getElementById(\"download\")\r\n    .addEventListener(\"click\", () => {\r\n        const invoice = this.document.getElementById(\"print-area\");\r\n        html2pdf().from(invoice).save();\r\n    })\r\n}\r\n\r\nfetch(`./json/data.json`) \r\n    .then(function(response) {\r\n        return response.json();\r\n    })\r\n    .then (function(data) {\r\n        let placeholder = document.querySelector(\"#table-body\");\r\n        let out = \"\";\r\n        for (let product of data) {\r\n            out += `\r\n            <tr>\r\n                <td>${product.med_Id}</td>\r\n                <td>${product.med_name}</td>\r\n                <td>${product.price}</td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n        `;\r\n        }\r\n\r\n        placeholder.innerHTML = out;\r\n    });\n\n//# sourceURL=webpack://nurse-app/./src/bill.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/bill.js"]();
/******/ 	
/******/ })()
;