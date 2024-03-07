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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_window_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/window.css */ \"(app-pages-browser)/./styles/window.css\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ \nvar _s = $RefreshSig$();\n\n\n// Assume your CSS is in this file\nconst MintWindow = ()=>{\n    _s();\n    const desktopRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const windowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const wwindow = windowRef.current;\n        if (!wwindow || !desktopRef.current) return;\n        const windoww = desktopRef.current.offsetWidth - 1;\n        const windowh = desktopRef.current.offsetHeight - 45;\n        const dragrd = wwindow.querySelector(\".drag-rd\");\n        const dragru = wwindow.querySelector(\".drag-ru\");\n        const draglu = wwindow.querySelector(\".drag-lu\");\n        const dragld = wwindow.querySelector(\".drag-ld\");\n        const dragwindow = wwindow.querySelector(\".title\");\n        const onMouseDown = (event)=>{\n            const shiftX = event.clientX - wwindow.getBoundingClientRect().left;\n            const shiftY = event.clientY - wwindow.getBoundingClientRect().top;\n            wwindow.style.zIndex = \"10\";\n            const moveAt = (pageX, pageY)=>{\n                wwindow.style.left = pageX - shiftX + \"px\";\n                wwindow.style.top = pageY - shiftY + \"px\";\n            };\n            const onMouseMove = (event)=>{\n                if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) moveAt(event.pageX, event.pageY);\n                else {\n                    document.removeEventListener(\"mousemove\", onMouseMove);\n                    wwindow.onmouseup = null;\n                }\n            };\n            document.addEventListener(\"mousemove\", onMouseMove);\n            wwindow.onmouseup = ()=>{\n                wwindow.style.zIndex = \"9\";\n                document.removeEventListener(\"mousemove\", onMouseMove);\n                wwindow.onmouseup = null;\n            };\n        };\n        if (dragwindow) {\n            dragwindow.addEventListener(\"mousedown\", onMouseDown);\n        }\n        return ()=>{\n            dragwindow.removeEventListener(\"mousedown\", onMouseDown);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: desktopRef,\n        id: \"desktop\",\n        className: \"bg desktop\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: windowRef,\n            id: \"window\",\n            className: \"window\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title no-select\",\n                    id: \"windowTitle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"img\",\n                            src: \"public/Internet_Explorer_6_logo.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Enjoy Explorer\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-rd\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ru\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-lu\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ld\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Gm Enjoyers\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"Mint here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MintWindow, \"bp2K27Vif5B/336l7PkaOarA0QA=\");\n_c = MintWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintWindow);\nvar _c;\n$RefreshReg$(_c, \"MintWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWludFdpbmRvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBb0Q7O0FBQ0g7QUFDbkI7QUFFOUIsa0NBQWtDO0FBRWxDLE1BQU1HLGFBQWE7O0lBQ2pCLE1BQU1DLGFBQWFGLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNRyxZQUFZSCw2Q0FBTUEsQ0FBaUI7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssVUFBVUQsVUFBVUUsT0FBTztRQUNqQyxJQUFJLENBQUNELFdBQVcsQ0FBQ0YsV0FBV0csT0FBTyxFQUFFO1FBRXJDLE1BQU1DLFVBQVVKLFdBQVdHLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHO1FBQ2pELE1BQU1DLFVBQVVOLFdBQVdHLE9BQU8sQ0FBQ0ksWUFBWSxHQUFHO1FBRWxELE1BQU1DLFNBQVNOLFFBQVFPLGFBQWEsQ0FBQztRQUNyQyxNQUFNQyxTQUFTUixRQUFRTyxhQUFhLENBQUM7UUFDckMsTUFBTUUsU0FBU1QsUUFBUU8sYUFBYSxDQUFDO1FBQ3JDLE1BQU1HLFNBQVNWLFFBQVFPLGFBQWEsQ0FBQztRQUNyQyxNQUFNSSxhQUFhWCxRQUFRTyxhQUFhLENBQUM7UUFFekMsTUFBTUssY0FBYyxDQUFDQztZQUNuQixNQUFNQyxTQUFTRCxNQUFNRSxPQUFPLEdBQUdmLFFBQVFnQixxQkFBcUIsR0FBR0MsSUFBSTtZQUNuRSxNQUFNQyxTQUFTTCxNQUFNTSxPQUFPLEdBQUduQixRQUFRZ0IscUJBQXFCLEdBQUdJLEdBQUc7WUFFbEVwQixRQUFRcUIsS0FBSyxDQUFDQyxNQUFNLEdBQUc7WUFFdkIsTUFBTUMsU0FBUyxDQUFDQyxPQUFlQztnQkFDN0J6QixRQUFRcUIsS0FBSyxDQUFDSixJQUFJLEdBQUdPLFFBQVFWLFNBQVM7Z0JBQ3RDZCxRQUFRcUIsS0FBSyxDQUFDRCxHQUFHLEdBQUdLLFFBQVFQLFNBQVM7WUFDdkM7WUFFQSxNQUFNUSxjQUFjLENBQUNiO2dCQUNuQixJQUFJQSxNQUFNWSxLQUFLLEdBQUdyQixXQUFXUyxNQUFNWSxLQUFLLEdBQUcsS0FBS1osTUFBTVcsS0FBSyxHQUFHdEIsV0FBV1csTUFBTVcsS0FBSyxHQUFHLEdBQ3JGRCxPQUFPVixNQUFNVyxLQUFLLEVBQUVYLE1BQU1ZLEtBQUs7cUJBQzVCO29CQUNIRSxTQUFTQyxtQkFBbUIsQ0FBQyxhQUFhRjtvQkFDMUMxQixRQUFRNkIsU0FBUyxHQUFHO2dCQUN0QjtZQUNGO1lBRUFGLFNBQVNHLGdCQUFnQixDQUFDLGFBQWFKO1lBRXZDMUIsUUFBUTZCLFNBQVMsR0FBRztnQkFDbEI3QixRQUFRcUIsS0FBSyxDQUFDQyxNQUFNLEdBQUc7Z0JBQ3ZCSyxTQUFTQyxtQkFBbUIsQ0FBQyxhQUFhRjtnQkFDMUMxQixRQUFRNkIsU0FBUyxHQUFHO1lBQ3RCO1FBQ0Y7UUFFQSxJQUFJbEIsWUFBWTtZQUNaQSxXQUFXbUIsZ0JBQWdCLENBQUMsYUFBYWxCO1FBQzdDO1FBQ0EsT0FBTztZQUNMRCxXQUFXaUIsbUJBQW1CLENBQUMsYUFBYWhCO1FBQzlDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNtQjtRQUFJQyxLQUFLbEM7UUFBWW1DLElBQUc7UUFBVUMsV0FBVTtrQkFDM0MsNEVBQUNIO1lBQUlDLEtBQUtqQztZQUFXa0MsSUFBRztZQUFTQyxXQUFVOzs4QkFDekMsOERBQUNIO29CQUFJRyxXQUFVO29CQUFrQkQsSUFBRzs7c0NBQ2xDLDhEQUFDRTs0QkFBSUQsV0FBVTs0QkFBTUUsS0FBSTs0QkFBc0NDLEtBQUk7Ozs7Ozt3QkFBSzs7Ozs7Ozs4QkFHMUUsOERBQUNOO29CQUFJRyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNIO29CQUFJRyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNIO29CQUFJRyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNIO29CQUFJRyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNIO29CQUFJRyxXQUFVOztzQ0FDYiw4REFBQ0k7Ozs7O3dCQUFLO3NDQUVOLDhEQUFDQTs7Ozs7c0NBQ0QsOERBQUNDOzRCQUFFQyxNQUFLO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQTFFTTNDO0tBQUFBO0FBNEVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWludFdpbmRvdy50c3g/MDQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3dpbmRvdy5jc3NcIjtcblxuLy8gQXNzdW1lIHlvdXIgQ1NTIGlzIGluIHRoaXMgZmlsZVxuXG5jb25zdCBNaW50V2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBkZXNrdG9wUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgd2luZG93UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHd3aW5kb3cgPSB3aW5kb3dSZWYuY3VycmVudDtcbiAgICBpZiAoIXd3aW5kb3cgfHwgIWRlc2t0b3BSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgd2luZG93dyA9IGRlc2t0b3BSZWYuY3VycmVudC5vZmZzZXRXaWR0aCAtIDE7XG4gICAgY29uc3Qgd2luZG93aCA9IGRlc2t0b3BSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgLSA0NTtcblxuICAgIGNvbnN0IGRyYWdyZCA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLXJkXCIpO1xuICAgIGNvbnN0IGRyYWdydSA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLXJ1XCIpO1xuICAgIGNvbnN0IGRyYWdsdSA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLWx1XCIpO1xuICAgIGNvbnN0IGRyYWdsZCA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLWxkXCIpO1xuICAgIGNvbnN0IGRyYWd3aW5kb3cgPSB3d2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG5cbiAgICBjb25zdCBvbk1vdXNlRG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2hpZnRYID0gZXZlbnQuY2xpZW50WCAtIHd3aW5kb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIGNvbnN0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSB3d2luZG93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgd3dpbmRvdy5zdHlsZS56SW5kZXggPSBcIjEwXCI7XG5cbiAgICAgIGNvbnN0IG1vdmVBdCA9IChwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHd3aW5kb3cuc3R5bGUubGVmdCA9IHBhZ2VYIC0gc2hpZnRYICsgXCJweFwiO1xuICAgICAgICB3d2luZG93LnN0eWxlLnRvcCA9IHBhZ2VZIC0gc2hpZnRZICsgXCJweFwiO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnBhZ2VZIDwgd2luZG93aCAmJiBldmVudC5wYWdlWSA+IDEgJiYgZXZlbnQucGFnZVggPCB3aW5kb3d3ICYmIGV2ZW50LnBhZ2VYID4gMSlcbiAgICAgICAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgd3dpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcblxuICAgICAgd3dpbmRvdy5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICAgIHd3aW5kb3cuc3R5bGUuekluZGV4ID0gXCI5XCI7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICB3d2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBpZiAoZHJhZ3dpbmRvdykge1xuICAgICAgICBkcmFnd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd24pO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZHJhZ3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG9uTW91c2VEb3duKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17ZGVza3RvcFJlZn0gaWQ9XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwiYmcgZGVza3RvcFwiPlxuICAgICAgPGRpdiByZWY9e3dpbmRvd1JlZn0gaWQ9XCJ3aW5kb3dcIiBjbGFzc05hbWU9XCJ3aW5kb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBuby1zZWxlY3RcIiBpZD1cIndpbmRvd1RpdGxlXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9XCJwdWJsaWMvSW50ZXJuZXRfRXhwbG9yZXJfNl9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgRW5qb3kgRXhwbG9yZXJcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZy1yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYWctcnVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmFnLWx1XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZy1sZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBHbSBFbmpveWVyc1xuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5NaW50IGhlcmU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW50V2luZG93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTWludFdpbmRvdyIsImRlc2t0b3BSZWYiLCJ3aW5kb3dSZWYiLCJ3d2luZG93IiwiY3VycmVudCIsIndpbmRvd3ciLCJvZmZzZXRXaWR0aCIsIndpbmRvd2giLCJvZmZzZXRIZWlnaHQiLCJkcmFncmQiLCJxdWVyeVNlbGVjdG9yIiwiZHJhZ3J1IiwiZHJhZ2x1IiwiZHJhZ2xkIiwiZHJhZ3dpbmRvdyIsIm9uTW91c2VEb3duIiwiZXZlbnQiLCJzaGlmdFgiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInNoaWZ0WSIsImNsaWVudFkiLCJ0b3AiLCJzdHlsZSIsInpJbmRleCIsIm1vdmVBdCIsInBhZ2VYIiwicGFnZVkiLCJvbk1vdXNlTW92ZSIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9ubW91c2V1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXYiLCJyZWYiLCJpZCIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImJyIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MintWindow.tsx\n"));

/***/ })

});