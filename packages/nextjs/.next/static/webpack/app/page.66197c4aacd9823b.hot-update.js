"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/MintWindow.tsx":
/*!***********************************!*\
  !*** ./components/MintWindow.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MintWindow = ()=>{\n    _s();\n    const wwindow = document.querySelectorAll(\".window\")[0];\n    const windoww = document.querySelectorAll(\".desktop\")[0].offsetWidth - 1;\n    const windowh = document.querySelectorAll(\".desktop\")[0].offsetHeight - 45;\n    const dragrd = wwindow.querySelectorAll(\".drag-rd\")[0];\n    const dragru = wwindow.querySelectorAll(\".drag-ru\")[0];\n    const draglu = wwindow.querySelectorAll(\".drag-lu\")[0];\n    const dragld = wwindow.querySelectorAll(\".drag-ld\")[0];\n    const dragwindow = wwindow.querySelectorAll(\".title\")[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const shiftX = event.clientX - wwindow.getBoundingClientRect().left;\n        let shiftY = event.clientY - wwindow.getBoundingClientRect().top;\n        function moveAt(pageX, pageY) {\n            wwindow.style.left = pageX - shiftX + \"px\";\n            wwindow.style.top = pageY - shiftY + \"px\";\n        }\n        const onMouseMove = (event1)=>{\n            if (event1.pageY < windowh && event1.pageY > 1 && event1.pageX < windoww && event1.pageX > 1) moveAt(event1.pageX, event1.pageY);\n            else {\n                document.removeEventListener(\"mousemove\", onMouseMove);\n                wwindow.onmouseup = null;\n            }\n        };\n        dragwindow.onmousedown = (event1)=>{\n        // Your existing onmousedown logic\n        };\n        dragrd.onmousedown = (event1)=>{\n        // Your existing onmousedown logic\n        };\n        dragru.onmousedown = (event1)=>{\n        // Your existing onmousedown logic\n        };\n        draglu.onmousedown = (event1)=>{\n        // Your existing onmousedown logic\n        };\n        dragld.onmousedown = (event1)=>{\n        // Your existing onmousedown logic\n        };\n        window.addEventListener(\"click\", (e)=>{\n        // Your existing click event logic\n        });\n        return ()=>{\n        // Cleanup logic, remove event listeners if needed\n        };\n    }, []); // Empty dependency array ensures the useEffect runs once on component mount\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"desktop\",\n        className: \"bg desktop\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"window\",\n            className: \"window\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title no-select\",\n                    id: \"windowTitle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"img\",\n                            src: \"public/Internet_Explorer_6_logo.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Enjoy Explorer\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-rd\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ru\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-lu\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ld\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Gm Enjoyers\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"Mint here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MintWindow, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MintWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintWindow);\nvar _c;\n$RefreshReg$(_c, \"MintWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWludFdpbmRvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7O0lBQ2pCLE1BQU1DLFVBQVVDLFNBQVNDLGdCQUFnQixDQUFpQixVQUFVLENBQUMsRUFBRTtJQUN2RSxNQUFNQyxVQUFVRixTQUFTQyxnQkFBZ0IsQ0FBaUIsV0FBVyxDQUFDLEVBQUUsQ0FBQ0UsV0FBVyxHQUFHO0lBQ3ZGLE1BQU1DLFVBQVVKLFNBQVNDLGdCQUFnQixDQUFpQixXQUFXLENBQUMsRUFBRSxDQUFDSSxZQUFZLEdBQUc7SUFDeEYsTUFBTUMsU0FBU1AsUUFBUUUsZ0JBQWdCLENBQWlCLFdBQVcsQ0FBQyxFQUFFO0lBQ3RFLE1BQU1NLFNBQVNSLFFBQVFFLGdCQUFnQixDQUFpQixXQUFXLENBQUMsRUFBRTtJQUN0RSxNQUFNTyxTQUFTVCxRQUFRRSxnQkFBZ0IsQ0FBaUIsV0FBVyxDQUFDLEVBQUU7SUFDdEUsTUFBTVEsU0FBU1YsUUFBUUUsZ0JBQWdCLENBQWlCLFdBQVcsQ0FBQyxFQUFFO0lBRXRFLE1BQU1TLGFBQWFYLFFBQVFFLGdCQUFnQixDQUFpQixTQUFTLENBQUMsRUFBRTtJQUV4RUosZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxTQUFTQyxNQUFNQyxPQUFPLEdBQUdkLFFBQVFlLHFCQUFxQixHQUFHQyxJQUFJO1FBQ3JFLElBQUlDLFNBQVNKLE1BQU1LLE9BQU8sR0FBR2xCLFFBQVFlLHFCQUFxQixHQUFHSSxHQUFHO1FBQzlELFNBQVNDLE9BQU9DLEtBQWEsRUFBRUMsS0FBYTtZQUMxQ3RCLFFBQVF1QixLQUFLLENBQUNQLElBQUksR0FBR0ssUUFBUVQsU0FBUztZQUN0Q1osUUFBUXVCLEtBQUssQ0FBQ0osR0FBRyxHQUFHRyxRQUFRTCxTQUFTO1FBQ3ZDO1FBRUEsTUFBTU8sY0FBYyxDQUFDWDtZQUNuQixJQUFJQSxPQUFNUyxLQUFLLEdBQUdqQixXQUFXUSxPQUFNUyxLQUFLLEdBQUcsS0FBS1QsT0FBTVEsS0FBSyxHQUFHbEIsV0FBV1UsT0FBTVEsS0FBSyxHQUFHLEdBQ3JGRCxPQUFPUCxPQUFNUSxLQUFLLEVBQUVSLE9BQU1TLEtBQUs7aUJBQzVCO2dCQUNIckIsU0FBU3dCLG1CQUFtQixDQUFDLGFBQWFEO2dCQUMxQ3hCLFFBQVEwQixTQUFTLEdBQUc7WUFDdEI7UUFDRjtRQUVBZixXQUFXZ0IsV0FBVyxHQUFHZCxDQUFBQTtRQUN2QixrQ0FBa0M7UUFDcEM7UUFFQU4sT0FBT29CLFdBQVcsR0FBR2QsQ0FBQUE7UUFDbkIsa0NBQWtDO1FBQ3BDO1FBRUFMLE9BQU9tQixXQUFXLEdBQUdkLENBQUFBO1FBQ25CLGtDQUFrQztRQUNwQztRQUVBSixPQUFPa0IsV0FBVyxHQUFHZCxDQUFBQTtRQUNuQixrQ0FBa0M7UUFDcEM7UUFFQUgsT0FBT2lCLFdBQVcsR0FBR2QsQ0FBQUE7UUFDbkIsa0NBQWtDO1FBQ3BDO1FBRUFlLE9BQU9DLGdCQUFnQixDQUFDLFNBQVNDLENBQUFBO1FBQy9CLGtDQUFrQztRQUNwQztRQUVBLE9BQU87UUFDTCxrREFBa0Q7UUFDcEQ7SUFDRixHQUFHLEVBQUUsR0FBRyw0RUFBNEU7SUFFcEYscUJBQ0UsOERBQUNDO1FBQUlDLElBQUc7UUFBVUMsV0FBVTtrQkFDMUIsNEVBQUNGO1lBQUlDLElBQUc7WUFBU0MsV0FBVTs7OEJBQ3pCLDhEQUFDRjtvQkFBSUUsV0FBVTtvQkFBa0JELElBQUc7O3NDQUNsQyw4REFBQ0U7NEJBQUlELFdBQVU7NEJBQU1FLEtBQUk7NEJBQXNDQyxLQUFJOzs7Ozs7d0JBQUs7Ozs7Ozs7OEJBRzFFLDhEQUFDTDtvQkFBSUUsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRjtvQkFBSUUsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRjtvQkFBSUUsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRjtvQkFBSUUsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNJOzs7Ozt3QkFBSztzQ0FFTiw4REFBQ0E7Ozs7O3NDQUNELDhEQUFDQzs0QkFBRUMsTUFBSztzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0E3RU14QztLQUFBQTtBQStFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01pbnRXaW5kb3cudHN4PzA0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNaW50V2luZG93ID0gKCkgPT4ge1xuICBjb25zdCB3d2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oXCIud2luZG93XCIpWzBdO1xuICBjb25zdCB3aW5kb3d3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oXCIuZGVza3RvcFwiKVswXS5vZmZzZXRXaWR0aCAtIDE7XG4gIGNvbnN0IHdpbmRvd2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihcIi5kZXNrdG9wXCIpWzBdLm9mZnNldEhlaWdodCAtIDQ1O1xuICBjb25zdCBkcmFncmQgPSB3d2luZG93LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KFwiLmRyYWctcmRcIilbMF07XG4gIGNvbnN0IGRyYWdydSA9IHd3aW5kb3cucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oXCIuZHJhZy1ydVwiKVswXTtcbiAgY29uc3QgZHJhZ2x1ID0gd3dpbmRvdy5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihcIi5kcmFnLWx1XCIpWzBdO1xuICBjb25zdCBkcmFnbGQgPSB3d2luZG93LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KFwiLmRyYWctbGRcIilbMF07XG5cbiAgY29uc3QgZHJhZ3dpbmRvdyA9IHd3aW5kb3cucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oXCIudGl0bGVcIilbMF07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gd3dpbmRvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICBsZXQgc2hpZnRZID0gZXZlbnQuY2xpZW50WSAtIHd3aW5kb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyKSB7XG4gICAgICB3d2luZG93LnN0eWxlLmxlZnQgPSBwYWdlWCAtIHNoaWZ0WCArIFwicHhcIjtcbiAgICAgIHd3aW5kb3cuc3R5bGUudG9wID0gcGFnZVkgLSBzaGlmdFkgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5wYWdlWSA8IHdpbmRvd2ggJiYgZXZlbnQucGFnZVkgPiAxICYmIGV2ZW50LnBhZ2VYIDwgd2luZG93dyAmJiBldmVudC5wYWdlWCA+IDEpXG4gICAgICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICB3d2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRyYWd3aW5kb3cub25tb3VzZWRvd24gPSBldmVudCA9PiB7XG4gICAgICAvLyBZb3VyIGV4aXN0aW5nIG9ubW91c2Vkb3duIGxvZ2ljXG4gICAgfTtcblxuICAgIGRyYWdyZC5vbm1vdXNlZG93biA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIFlvdXIgZXhpc3Rpbmcgb25tb3VzZWRvd24gbG9naWNcbiAgICB9O1xuXG4gICAgZHJhZ3J1Lm9ubW91c2Vkb3duID0gZXZlbnQgPT4ge1xuICAgICAgLy8gWW91ciBleGlzdGluZyBvbm1vdXNlZG93biBsb2dpY1xuICAgIH07XG5cbiAgICBkcmFnbHUub25tb3VzZWRvd24gPSBldmVudCA9PiB7XG4gICAgICAvLyBZb3VyIGV4aXN0aW5nIG9ubW91c2Vkb3duIGxvZ2ljXG4gICAgfTtcblxuICAgIGRyYWdsZC5vbm1vdXNlZG93biA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIFlvdXIgZXhpc3Rpbmcgb25tb3VzZWRvd24gbG9naWNcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIC8vIFlvdXIgZXhpc3RpbmcgY2xpY2sgZXZlbnQgbG9naWNcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDbGVhbnVwIGxvZ2ljLCByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGlmIG5lZWRlZFxuICAgIH07XG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSBlbnN1cmVzIHRoZSB1c2VFZmZlY3QgcnVucyBvbmNlIG9uIGNvbXBvbmVudCBtb3VudFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImRlc2t0b3BcIiBjbGFzc05hbWU9XCJiZyBkZXNrdG9wXCI+XG4gICAgICA8ZGl2IGlkPVwid2luZG93XCIgY2xhc3NOYW1lPVwid2luZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbm8tc2VsZWN0XCIgaWQ9XCJ3aW5kb3dUaXRsZVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nXCIgc3JjPVwicHVibGljL0ludGVybmV0X0V4cGxvcmVyXzZfbG9nby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIEVuam95IEV4cGxvcmVyXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYWctcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmFnLXJ1XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZy1sdVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYWctbGRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgR20gRW5qb3llcnNcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YSBocmVmPVwiXCI+TWludCBoZXJlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWludFdpbmRvdztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIk1pbnRXaW5kb3ciLCJ3d2luZG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93dyIsIm9mZnNldFdpZHRoIiwid2luZG93aCIsIm9mZnNldEhlaWdodCIsImRyYWdyZCIsImRyYWdydSIsImRyYWdsdSIsImRyYWdsZCIsImRyYWd3aW5kb3ciLCJzaGlmdFgiLCJldmVudCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwic2hpZnRZIiwiY2xpZW50WSIsInRvcCIsIm1vdmVBdCIsInBhZ2VYIiwicGFnZVkiLCJzdHlsZSIsIm9uTW91c2VNb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9ubW91c2V1cCIsIm9ubW91c2Vkb3duIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImJyIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MintWindow.tsx\n"));

/***/ })

});