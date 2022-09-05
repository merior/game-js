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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const move = __webpack_require__(/*! ./modules/move */ \"./src/modules/move.js\")\r\nconst timer = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\")\r\nconst point = __webpack_require__(/*! ./modules/point */ \"./src/modules/point.js\")\r\nconst stop = __webpack_require__(/*! ./modules/stop */ \"./src/modules/stop.js\")\r\n\r\nmove()\r\n// timer()\r\n// point()\r\nstop()\n\n//# sourceURL=webpack://game/./src/index.js?");

/***/ }),

/***/ "./src/modules/move.js":
/*!*****************************!*\
  !*** ./src/modules/move.js ***!
  \*****************************/
/***/ ((module) => {

eval("const move = () => {\r\n\r\n\r\n    const box5Move = document.querySelector('.guy');\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n  let lastTopCoords = parseFloat(box5Move.style.top);\r\n  let lastLeftCoords = parseFloat(box5Move.style.left);\r\n\r\n  if (isNaN(lastTopCoords)) lastTopCoords = 50;\r\n  if (isNaN(lastLeftCoords)) lastLeftCoords = 0;\r\n\r\n  switch(e.keyCode) {\r\n    case 40: {\r\n      box5Move.style.top = `${lastTopCoords + 5}px`;\r\n      break;\r\n    }\r\n    case 38: {\r\n      box5Move.style.top = `${lastTopCoords - 5}px`;\r\n      break;\r\n    }\r\n    case 37: {\r\n      box5Move.style.left = `${lastLeftCoords - 5}px`;\r\n      break;\r\n    }\r\n    case 39: {\r\n      box5Move.style.left = `${lastLeftCoords + 5}px`;\r\n      break;\r\n    }\r\n    default: break;\r\n  }\r\n});\r\n}\r\n\r\nmodule.exports = move\r\n\n\n//# sourceURL=webpack://game/./src/modules/move.js?");

/***/ }),

/***/ "./src/modules/point.js":
/*!******************************!*\
  !*** ./src/modules/point.js ***!
  \******************************/
/***/ ((module) => {

eval("const point = () => {\r\n \r\n    let timer;\r\n    let x =0; \r\n    countdown(); \r\n    function countdown(){ \r\n      document.getElementById('point').innerHTML = x;\r\n      x = x+10; \r\n     \r\n    \r\n        timer = setTimeout(countdown, 5000);\r\n      \r\n    }\r\n\r\n}\r\n\r\nmodule.exports = point\n\n//# sourceURL=webpack://game/./src/modules/point.js?");

/***/ }),

/***/ "./src/modules/stop.js":
/*!*****************************!*\
  !*** ./src/modules/stop.js ***!
  \*****************************/
/***/ ((module) => {

eval("const stop = () => {\r\n  \r\n    const stopBtn = document.querySelectorAll('.stop')\r\n    const startBtn = document.querySelectorAll('.wid__btn')\r\n    const modal = document.querySelectorAll('.modal')\r\n    const modalOverlay = document.querySelectorAll('.modal__overlay')\r\n\r\n    console.log(stopBtn)\r\n    console.log(startBtn)\r\n    console.log(modal)\r\n    console.log(modalOverlay)\r\n\r\n    // stopBtn.addEventListener(\"click\", function(){\r\n    //     modal.classList.toggle(\"closed\");\r\n    //     modalOverlay.classList.toggle(\"closed\");\r\n    //  });\r\n\r\n     startBtn.addEventListener(\"click\", function(){\r\n        // modal.classList.toggle(\"closed\");\r\n        // modalOverlay.classList.toggle(\"closed\");\r\n        console.log('click')\r\n     });\r\n}\r\n\r\nmodule.exports = stop\n\n//# sourceURL=webpack://game/./src/modules/stop.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((module) => {

eval("\r\nconst timer = () => {\r\n    let timer;\r\n    let x =60; \r\n    countdown(); \r\n    function countdown(){ \r\n      document.getElementById('rocket').innerHTML = x;\r\n      x--; \r\n      if (x<0){\r\n        clearTimeout(timer); \r\n        alert('вы выйграли треш!!');\r\n      }\r\n      else {\r\n        timer = setTimeout(countdown, 1000);\r\n      }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = timer\n\n//# sourceURL=webpack://game/./src/modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;