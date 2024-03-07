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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_window_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/window.css */ \"(app-pages-browser)/./styles/window.css\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ \nvar _s = $RefreshSig$();\n\n\n// Assume your CSS is in this file\nconst MintWindow = ()=>{\n    _s();\n    const desktopRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const windowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const wwindow = windowRef.current;\n        if (!wwindow || !desktopRef.current) return;\n        const windoww = desktopRef.current.offsetWidth - 1;\n        const windowh = desktopRef.current.offsetHeight - 45;\n        const dragrd = wwindow.querySelector(\".drag-rd\");\n        const dragru = wwindow.querySelector(\".drag-ru\");\n        const draglu = wwindow.querySelector(\".drag-lu\");\n        const dragld = wwindow.querySelector(\".drag-ld\");\n        const dragwindow = wwindow.querySelector(\".title\");\n        const onMouseDown = (event)=>{\n            const shiftX = event.clientX - wwindow.getBoundingClientRect().left;\n            const shiftY = event.clientY - wwindow.getBoundingClientRect().top;\n            wwindow.style.zIndex = \"10\";\n            const moveAt = (pageX, pageY)=>{\n                wwindow.style.left = pageX - shiftX + \"px\";\n                wwindow.style.top = pageY - shiftY + \"px\";\n            };\n            const onMouseMove = (event)=>{\n                if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) moveAt(event.pageX, event.pageY);\n                else {\n                    document.removeEventListener(\"mousemove\", onMouseMove);\n                    wwindow.onmouseup = null;\n                }\n            };\n            document.addEventListener(\"mousemove\", onMouseMove);\n            wwindow.onmouseup = ()=>{\n                wwindow.style.zIndex = \"9\";\n                document.removeEventListener(\"mousemove\", onMouseMove);\n                wwindow.onmouseup = null;\n            };\n        };\n        if (dragwindow) {\n            dragwindow.addEventListener(\"mousedown\", onMouseDown);\n        }\n        return ()=>{\n            if (dragwindow) {\n                dragwindow.removeEventListener(\"mousedown\", onMouseDown);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: desktopRef,\n        id: \"desktop\",\n        className: \"bg desktop\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: windowRef,\n            id: \"window\",\n            className: \"window\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title no-select\",\n                    id: \"windowTitle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"img\",\n                            src: \"public/Internet_Explorer_6_logo.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Enjoy Explorer\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-rd\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ru\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-lu\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ld\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Gm Enjoyers\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"Mint here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MintWindow, \"bp2K27Vif5B/336l7PkaOarA0QA=\");\n_c = MintWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintWindow);\nvar _c;\n$RefreshReg$(_c, \"MintWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWludFdpbmRvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBb0Q7O0FBQ0g7QUFDbkI7QUFFOUIsa0NBQWtDO0FBRWxDLE1BQU1HLGFBQWE7O0lBQ2pCLE1BQU1DLGFBQWFGLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNRyxZQUFZSCw2Q0FBTUEsQ0FBaUI7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssVUFBVUQsVUFBVUUsT0FBTztRQUNqQyxJQUFJLENBQUNELFdBQVcsQ0FBQ0YsV0FBV0csT0FBTyxFQUFFO1FBRXJDLE1BQU1DLFVBQVVKLFdBQVdHLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHO1FBQ2pELE1BQU1DLFVBQVVOLFdBQVdHLE9BQU8sQ0FBQ0ksWUFBWSxHQUFHO1FBRWxELE1BQU1DLFNBQVNOLFFBQVFPLGFBQWEsQ0FBQztRQUNyQyxNQUFNQyxTQUFTUixRQUFRTyxhQUFhLENBQUM7UUFDckMsTUFBTUUsU0FBU1QsUUFBUU8sYUFBYSxDQUFDO1FBQ3JDLE1BQU1HLFNBQVNWLFFBQVFPLGFBQWEsQ0FBQztRQUNyQyxNQUFNSSxhQUFhWCxRQUFRTyxhQUFhLENBQUM7UUFFekMsTUFBTUssY0FBYyxDQUFDQztZQUNuQixNQUFNQyxTQUFTRCxNQUFNRSxPQUFPLEdBQUdmLFFBQVFnQixxQkFBcUIsR0FBR0MsSUFBSTtZQUNuRSxNQUFNQyxTQUFTTCxNQUFNTSxPQUFPLEdBQUduQixRQUFRZ0IscUJBQXFCLEdBQUdJLEdBQUc7WUFFbEVwQixRQUFRcUIsS0FBSyxDQUFDQyxNQUFNLEdBQUc7WUFFdkIsTUFBTUMsU0FBUyxDQUFDQyxPQUFlQztnQkFDN0J6QixRQUFRcUIsS0FBSyxDQUFDSixJQUFJLEdBQUdPLFFBQVFWLFNBQVM7Z0JBQ3RDZCxRQUFRcUIsS0FBSyxDQUFDRCxHQUFHLEdBQUdLLFFBQVFQLFNBQVM7WUFDdkM7WUFFQSxNQUFNUSxjQUFjLENBQUNiO2dCQUNuQixJQUFJQSxNQUFNWSxLQUFLLEdBQUdyQixXQUFXUyxNQUFNWSxLQUFLLEdBQUcsS0FBS1osTUFBTVcsS0FBSyxHQUFHdEIsV0FBV1csTUFBTVcsS0FBSyxHQUFHLEdBQ3JGRCxPQUFPVixNQUFNVyxLQUFLLEVBQUVYLE1BQU1ZLEtBQUs7cUJBQzVCO29CQUNIRSxTQUFTQyxtQkFBbUIsQ0FBQyxhQUFhRjtvQkFDMUMxQixRQUFRNkIsU0FBUyxHQUFHO2dCQUN0QjtZQUNGO1lBRUFGLFNBQVNHLGdCQUFnQixDQUFDLGFBQWFKO1lBRXZDMUIsUUFBUTZCLFNBQVMsR0FBRztnQkFDbEI3QixRQUFRcUIsS0FBSyxDQUFDQyxNQUFNLEdBQUc7Z0JBQ3ZCSyxTQUFTQyxtQkFBbUIsQ0FBQyxhQUFhRjtnQkFDMUMxQixRQUFRNkIsU0FBUyxHQUFHO1lBQ3RCO1FBQ0Y7UUFFQSxJQUFJbEIsWUFBWTtZQUNaQSxXQUFXbUIsZ0JBQWdCLENBQUMsYUFBYWxCO1FBQzdDO1FBQ0EsT0FBTztZQUNILElBQUlELFlBQVk7Z0JBRWxCQSxXQUFXaUIsbUJBQW1CLENBQUMsYUFBYWhCO1lBQzFDO1FBQ0o7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ21CO1FBQUlDLEtBQUtsQztRQUFZbUMsSUFBRztRQUFVQyxXQUFVO2tCQUMzQyw0RUFBQ0g7WUFBSUMsS0FBS2pDO1lBQVdrQyxJQUFHO1lBQVNDLFdBQVU7OzhCQUN6Qyw4REFBQ0g7b0JBQUlHLFdBQVU7b0JBQWtCRCxJQUFHOztzQ0FDbEMsOERBQUNFOzRCQUFJRCxXQUFVOzRCQUFNRSxLQUFJOzRCQUFzQ0MsS0FBSTs7Ozs7O3dCQUFLOzs7Ozs7OzhCQUcxRSw4REFBQ047b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDSTs7Ozs7d0JBQUs7c0NBRU4sOERBQUNBOzs7OztzQ0FDRCw4REFBQ0M7NEJBQUVDLE1BQUs7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBN0VNM0M7S0FBQUE7QUErRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaW50V2luZG93LnRzeD8wNDU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvd2luZG93LmNzc1wiO1xuXG4vLyBBc3N1bWUgeW91ciBDU1MgaXMgaW4gdGhpcyBmaWxlXG5cbmNvbnN0IE1pbnRXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGRlc2t0b3BSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB3aW5kb3dSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd3dpbmRvdyA9IHdpbmRvd1JlZi5jdXJyZW50O1xuICAgIGlmICghd3dpbmRvdyB8fCAhZGVza3RvcFJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBjb25zdCB3aW5kb3d3ID0gZGVza3RvcFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoIC0gMTtcbiAgICBjb25zdCB3aW5kb3doID0gZGVza3RvcFJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCAtIDQ1O1xuXG4gICAgY29uc3QgZHJhZ3JkID0gd3dpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLmRyYWctcmRcIik7XG4gICAgY29uc3QgZHJhZ3J1ID0gd3dpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLmRyYWctcnVcIik7XG4gICAgY29uc3QgZHJhZ2x1ID0gd3dpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLmRyYWctbHVcIik7XG4gICAgY29uc3QgZHJhZ2xkID0gd3dpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLmRyYWctbGRcIik7XG4gICAgY29uc3QgZHJhZ3dpbmRvdyA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcblxuICAgIGNvbnN0IG9uTW91c2VEb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gd3dpbmRvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgY29uc3Qgc2hpZnRZID0gZXZlbnQuY2xpZW50WSAtIHd3aW5kb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICB3d2luZG93LnN0eWxlLnpJbmRleCA9IFwiMTBcIjtcblxuICAgICAgY29uc3QgbW92ZUF0ID0gKHBhZ2VYOiBudW1iZXIsIHBhZ2VZOiBudW1iZXIpID0+IHtcbiAgICAgICAgd3dpbmRvdy5zdHlsZS5sZWZ0ID0gcGFnZVggLSBzaGlmdFggKyBcInB4XCI7XG4gICAgICAgIHd3aW5kb3cuc3R5bGUudG9wID0gcGFnZVkgLSBzaGlmdFkgKyBcInB4XCI7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQucGFnZVkgPCB3aW5kb3doICYmIGV2ZW50LnBhZ2VZID4gMSAmJiBldmVudC5wYWdlWCA8IHdpbmRvd3cgJiYgZXZlbnQucGFnZVggPiAxKVxuICAgICAgICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICB3d2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuXG4gICAgICB3d2luZG93Lm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgICAgd3dpbmRvdy5zdHlsZS56SW5kZXggPSBcIjlcIjtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIHd3aW5kb3cub25tb3VzZXVwID0gbnVsbDtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmIChkcmFnd2luZG93KSB7XG4gICAgICAgIGRyYWd3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChkcmFnd2luZG93KSB7XG5cbiAgICAgIGRyYWd3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17ZGVza3RvcFJlZn0gaWQ9XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwiYmcgZGVza3RvcFwiPlxuICAgICAgPGRpdiByZWY9e3dpbmRvd1JlZn0gaWQ9XCJ3aW5kb3dcIiBjbGFzc05hbWU9XCJ3aW5kb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBuby1zZWxlY3RcIiBpZD1cIndpbmRvd1RpdGxlXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9XCJwdWJsaWMvSW50ZXJuZXRfRXhwbG9yZXJfNl9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgRW5qb3kgRXhwbG9yZXJcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZy1yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYWctcnVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmFnLWx1XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZy1sZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBHbSBFbmpveWVyc1xuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5NaW50IGhlcmU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW50V2luZG93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTWludFdpbmRvdyIsImRlc2t0b3BSZWYiLCJ3aW5kb3dSZWYiLCJ3d2luZG93IiwiY3VycmVudCIsIndpbmRvd3ciLCJvZmZzZXRXaWR0aCIsIndpbmRvd2giLCJvZmZzZXRIZWlnaHQiLCJkcmFncmQiLCJxdWVyeVNlbGVjdG9yIiwiZHJhZ3J1IiwiZHJhZ2x1IiwiZHJhZ2xkIiwiZHJhZ3dpbmRvdyIsIm9uTW91c2VEb3duIiwiZXZlbnQiLCJzaGlmdFgiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInNoaWZ0WSIsImNsaWVudFkiLCJ0b3AiLCJzdHlsZSIsInpJbmRleCIsIm1vdmVBdCIsInBhZ2VYIiwicGFnZVkiLCJvbk1vdXNlTW92ZSIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9ubW91c2V1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXYiLCJyZWYiLCJpZCIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImJyIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MintWindow.tsx\n"));

/***/ })

});