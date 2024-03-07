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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_window_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/window.css */ \"(app-pages-browser)/./styles/window.css\");\n\nvar _s = $RefreshSig$();\n\n\n// Assume your CSS is in this file\nconst MintWindow = ()=>{\n    _s();\n    const desktopRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const windowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const wwindow = windowRef.current;\n        if (!wwindow || !desktopRef.current) return;\n        const windoww = desktopRef.current.offsetWidth - 1;\n        const windowh = desktopRef.current.offsetHeight - 45;\n        const dragrd = wwindow.querySelector(\".drag-rd\");\n        const dragru = wwindow.querySelector(\".drag-ru\");\n        const draglu = wwindow.querySelector(\".drag-lu\");\n        const dragld = wwindow.querySelector(\".drag-ld\");\n        const dragwindow = wwindow.querySelector(\".title\");\n        const onMouseDown = (event)=>{\n            const shiftX = event.clientX - wwindow.getBoundingClientRect().left;\n            const shiftY = event.clientY - wwindow.getBoundingClientRect().top;\n            wwindow.style.zIndex = \"10\";\n            const moveAt = (pageX, pageY)=>{\n                wwindow.style.left = pageX - shiftX + \"px\";\n                wwindow.style.top = pageY - shiftY + \"px\";\n            };\n            const onMouseMove = (event)=>{\n                if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) moveAt(event.pageX, event.pageY);\n                else {\n                    document.removeEventListener(\"mousemove\", onMouseMove);\n                    wwindow.onmouseup = null;\n                }\n            };\n            document.addEventListener(\"mousemove\", onMouseMove);\n            wwindow.onmouseup = ()=>{\n                wwindow.style.zIndex = \"9\";\n                document.removeEventListener(\"mousemove\", onMouseMove);\n                wwindow.onmouseup = null;\n            };\n        };\n        dragwindow.addEventListener(\"mousedown\", onMouseDown);\n        return ()=>{\n            dragwindow.removeEventListener(\"mousedown\", onMouseDown);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: desktopRef,\n        id: \"desktop\",\n        className: \"bg desktop\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: windowRef,\n            id: \"window\",\n            className: \"window\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title no-select\",\n                    id: \"windowTitle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"img\",\n                            src: \"public/Internet_Explorer_6_logo.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Enjoy Explorer\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-rd\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ru\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-lu\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"drag-ld\"\n                }, void 0, false, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Gm Enjoyers\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"Mint here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/MintWindow.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MintWindow, \"bp2K27Vif5B/336l7PkaOarA0QA=\");\n_c = MintWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintWindow);\nvar _c;\n$RefreshReg$(_c, \"MintWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWludFdpbmRvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNuQjtBQUU5QixrQ0FBa0M7QUFFbEMsTUFBTUcsYUFBYTs7SUFDakIsTUFBTUMsYUFBYUYsNkNBQU1BLENBQWlCO0lBQzFDLE1BQU1HLFlBQVlILDZDQUFNQSxDQUFpQjtJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxVQUFVRCxVQUFVRSxPQUFPO1FBQ2pDLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixXQUFXRyxPQUFPLEVBQUU7UUFFckMsTUFBTUMsVUFBVUosV0FBV0csT0FBTyxDQUFDRSxXQUFXLEdBQUc7UUFDakQsTUFBTUMsVUFBVU4sV0FBV0csT0FBTyxDQUFDSSxZQUFZLEdBQUc7UUFFbEQsTUFBTUMsU0FBU04sUUFBUU8sYUFBYSxDQUFDO1FBQ3JDLE1BQU1DLFNBQVNSLFFBQVFPLGFBQWEsQ0FBQztRQUNyQyxNQUFNRSxTQUFTVCxRQUFRTyxhQUFhLENBQUM7UUFDckMsTUFBTUcsU0FBU1YsUUFBUU8sYUFBYSxDQUFDO1FBQ3JDLE1BQU1JLGFBQWFYLFFBQVFPLGFBQWEsQ0FBQztRQUV6QyxNQUFNSyxjQUFjLENBQUNDO1lBQ25CLE1BQU1DLFNBQVNELE1BQU1FLE9BQU8sR0FBR2YsUUFBUWdCLHFCQUFxQixHQUFHQyxJQUFJO1lBQ25FLE1BQU1DLFNBQVNMLE1BQU1NLE9BQU8sR0FBR25CLFFBQVFnQixxQkFBcUIsR0FBR0ksR0FBRztZQUVsRXBCLFFBQVFxQixLQUFLLENBQUNDLE1BQU0sR0FBRztZQUV2QixNQUFNQyxTQUFTLENBQUNDLE9BQWVDO2dCQUM3QnpCLFFBQVFxQixLQUFLLENBQUNKLElBQUksR0FBR08sUUFBUVYsU0FBUztnQkFDdENkLFFBQVFxQixLQUFLLENBQUNELEdBQUcsR0FBR0ssUUFBUVAsU0FBUztZQUN2QztZQUVBLE1BQU1RLGNBQWMsQ0FBQ2I7Z0JBQ25CLElBQUlBLE1BQU1ZLEtBQUssR0FBR3JCLFdBQVdTLE1BQU1ZLEtBQUssR0FBRyxLQUFLWixNQUFNVyxLQUFLLEdBQUd0QixXQUFXVyxNQUFNVyxLQUFLLEdBQUcsR0FDckZELE9BQU9WLE1BQU1XLEtBQUssRUFBRVgsTUFBTVksS0FBSztxQkFDNUI7b0JBQ0hFLFNBQVNDLG1CQUFtQixDQUFDLGFBQWFGO29CQUMxQzFCLFFBQVE2QixTQUFTLEdBQUc7Z0JBQ3RCO1lBQ0Y7WUFFQUYsU0FBU0csZ0JBQWdCLENBQUMsYUFBYUo7WUFFdkMxQixRQUFRNkIsU0FBUyxHQUFHO2dCQUNsQjdCLFFBQVFxQixLQUFLLENBQUNDLE1BQU0sR0FBRztnQkFDdkJLLFNBQVNDLG1CQUFtQixDQUFDLGFBQWFGO2dCQUMxQzFCLFFBQVE2QixTQUFTLEdBQUc7WUFDdEI7UUFDRjtRQUVBbEIsV0FBV21CLGdCQUFnQixDQUFDLGFBQWFsQjtRQUV6QyxPQUFPO1lBQ0xELFdBQVdpQixtQkFBbUIsQ0FBQyxhQUFhaEI7UUFDOUM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ21CO1FBQUlDLEtBQUtsQztRQUFZbUMsSUFBRztRQUFVQyxXQUFVO2tCQUMzQyw0RUFBQ0g7WUFBSUMsS0FBS2pDO1lBQVdrQyxJQUFHO1lBQVNDLFdBQVU7OzhCQUN6Qyw4REFBQ0g7b0JBQUlHLFdBQVU7b0JBQWtCRCxJQUFHOztzQ0FDbEMsOERBQUNFOzRCQUFJRCxXQUFVOzRCQUFNRSxLQUFJOzRCQUFzQ0MsS0FBSTs7Ozs7O3dCQUFLOzs7Ozs7OzhCQUcxRSw4REFBQ047b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDSTs7Ozs7d0JBQUs7c0NBRU4sOERBQUNBOzs7OztzQ0FDRCw4REFBQ0M7NEJBQUVDLE1BQUs7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBekVNM0M7S0FBQUE7QUEyRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaW50V2luZG93LnRzeD8wNDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3dpbmRvdy5jc3NcIjtcblxuLy8gQXNzdW1lIHlvdXIgQ1NTIGlzIGluIHRoaXMgZmlsZVxuXG5jb25zdCBNaW50V2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBkZXNrdG9wUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgd2luZG93UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHd3aW5kb3cgPSB3aW5kb3dSZWYuY3VycmVudDtcbiAgICBpZiAoIXd3aW5kb3cgfHwgIWRlc2t0b3BSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgd2luZG93dyA9IGRlc2t0b3BSZWYuY3VycmVudC5vZmZzZXRXaWR0aCAtIDE7XG4gICAgY29uc3Qgd2luZG93aCA9IGRlc2t0b3BSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgLSA0NTtcblxuICAgIGNvbnN0IGRyYWdyZCA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLXJkXCIpO1xuICAgIGNvbnN0IGRyYWdydSA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLXJ1XCIpO1xuICAgIGNvbnN0IGRyYWdsdSA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLWx1XCIpO1xuICAgIGNvbnN0IGRyYWdsZCA9IHd3aW5kb3cucXVlcnlTZWxlY3RvcihcIi5kcmFnLWxkXCIpO1xuICAgIGNvbnN0IGRyYWd3aW5kb3cgPSB3d2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG5cbiAgICBjb25zdCBvbk1vdXNlRG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2hpZnRYID0gZXZlbnQuY2xpZW50WCAtIHd3aW5kb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIGNvbnN0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSB3d2luZG93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgd3dpbmRvdy5zdHlsZS56SW5kZXggPSBcIjEwXCI7XG5cbiAgICAgIGNvbnN0IG1vdmVBdCA9IChwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHd3aW5kb3cuc3R5bGUubGVmdCA9IHBhZ2VYIC0gc2hpZnRYICsgXCJweFwiO1xuICAgICAgICB3d2luZG93LnN0eWxlLnRvcCA9IHBhZ2VZIC0gc2hpZnRZICsgXCJweFwiO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnBhZ2VZIDwgd2luZG93aCAmJiBldmVudC5wYWdlWSA+IDEgJiYgZXZlbnQucGFnZVggPCB3aW5kb3d3ICYmIGV2ZW50LnBhZ2VYID4gMSlcbiAgICAgICAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgd3dpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcblxuICAgICAgd3dpbmRvdy5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICAgIHd3aW5kb3cuc3R5bGUuekluZGV4ID0gXCI5XCI7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICB3d2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBkcmFnd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd24pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRyYWd3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2Rlc2t0b3BSZWZ9IGlkPVwiZGVza3RvcFwiIGNsYXNzTmFtZT1cImJnIGRlc2t0b3BcIj5cbiAgICAgIDxkaXYgcmVmPXt3aW5kb3dSZWZ9IGlkPVwid2luZG93XCIgY2xhc3NOYW1lPVwid2luZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbm8tc2VsZWN0XCIgaWQ9XCJ3aW5kb3dUaXRsZVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nXCIgc3JjPVwicHVibGljL0ludGVybmV0X0V4cGxvcmVyXzZfbG9nby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIEVuam95IEV4cGxvcmVyXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYWctcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmFnLXJ1XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZy1sdVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYWctbGRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgR20gRW5qb3llcnNcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YSBocmVmPVwiXCI+TWludCBoZXJlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWludFdpbmRvdztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIk1pbnRXaW5kb3ciLCJkZXNrdG9wUmVmIiwid2luZG93UmVmIiwid3dpbmRvdyIsImN1cnJlbnQiLCJ3aW5kb3d3Iiwib2Zmc2V0V2lkdGgiLCJ3aW5kb3doIiwib2Zmc2V0SGVpZ2h0IiwiZHJhZ3JkIiwicXVlcnlTZWxlY3RvciIsImRyYWdydSIsImRyYWdsdSIsImRyYWdsZCIsImRyYWd3aW5kb3ciLCJvbk1vdXNlRG93biIsImV2ZW50Iiwic2hpZnRYIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzaGlmdFkiLCJjbGllbnRZIiwidG9wIiwic3R5bGUiLCJ6SW5kZXgiLCJtb3ZlQXQiLCJwYWdlWCIsInBhZ2VZIiwib25Nb3VzZU1vdmUiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbm1vdXNldXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJiciIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MintWindow.tsx\n"));

/***/ })

});