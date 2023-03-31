/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./homePage/homePageElements.js":
/*!**************************************!*\
  !*** ./homePage/homePageElements.js ***!
  \**************************************/
/***/ (function() {

eval("const body = document.querySelector(\"body\");\nconst navbar = document.querySelector(\".navbar\")\nconst menu = document.querySelector(\".menu-list\");\nconst menuBtn = document.querySelector(\".menu-btn\");\nconst cancelBtn = document.querySelector(\".cancel-btn\");\nvar resources = \"resources\"\nmenuBtn.onclick = ()=> {\n    menu.classList.add(\"active\");\n    menuBtn.classList.add(\"hide\");\n    body.classList.add(\"disabledScroll\");\n}\ncancelBtn.onclick = ()=> {\n    menu.classList.remove(\"active\");\n    menuBtn.classList.remove(\"hide\");\n    body.classList.remove(\"disabledScroll\");\n}\n\nwindow.onscroll = ()=> {\n    this.scrollY > 20 ? navbar.classList.add(\"sticky\") : navbar.classList.remove(\"sticky\");\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob21lUGFnZS9ob21lUGFnZUVsZW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvbWVQYWdlL2hvbWVQYWdlRWxlbWVudHMuanM/MzNkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1idG5cIik7XG52YXIgcmVzb3VyY2VzID0gXCJyZXNvdXJjZXNcIlxubWVudUJ0bi5vbmNsaWNrID0gKCk9PiB7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRTY3JvbGxcIik7XG59XG5jYW5jZWxCdG4ub25jbGljayA9ICgpPT4ge1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkU2Nyb2xsXCIpO1xufVxuXG53aW5kb3cub25zY3JvbGwgPSAoKT0+IHtcbiAgICB0aGlzLnNjcm9sbFkgPiAyMCA/IG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpIDogbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./homePage/homePageElements.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./homePage/homePageElements.js"]();
/******/ 	
/******/ })()
;