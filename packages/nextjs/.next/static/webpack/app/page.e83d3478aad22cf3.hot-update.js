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

/***/ "(app-pages-browser)/./components/DropUp.tsx":
/*!*******************************!*\
  !*** ./components/DropUp.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable react/jsx-no-duplicate-props */ /* eslint-disable @typescript-eslint/no-unused-vars */ \nvar _s = $RefreshSig$();\n\n\nconst Dropup = (param)=>{\n    let { contentId } = param;\n    _s();\n    const dropupcontent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            var _targetElement_parentElement;\n            const targetElement = event.target;\n            if (dropupcontent.current && dropupcontent.current.classList.contains(\"dropup-show\") && targetElement && !targetElement.classList.contains(\"start-btn\") && targetElement.id !== dropupcontent.current.id && ((_targetElement_parentElement = targetElement.parentElement) === null || _targetElement_parentElement === void 0 ? void 0 : _targetElement_parentElement.id) !== dropupcontent.current.id) {\n                toggleUp();\n            }\n        };\n        window.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    const toggleUp = ()=>{\n        if (dropupcontent.current) {\n            dropupcontent.current.classList.toggle(\"dropup-show\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: dropupcontent,\n        className: \"dropup-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"navbar fixed-bottom navbar-light no-padding no-margin-navbar no-select\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropup no-margin-navbar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: toggleUp,\n                        className: \"start-btn no-padding\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/winxpstart.png\",\n                            width: \"110\",\n                            height: \"35\",\n                            alt: \"\",\n                            className: \"start-btn no-margin-navbar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropup-content\",\n                        id: \"start-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-title\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start-title-img\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/chess.bmp\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"User\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-span\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-linklist-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"start-link\",\n                                        target: \"_blank\",\n                                        href: \"https://enjoy.tech/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"start-option\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    width: \"30\",\n                                                    src: \"/zora.png\",\n                                                    width: \"\",\n                                                    height: \"35\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \"Enjoyyy\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"start-link\",\n                                        target: \"_blank\",\n                                        href: \"https://explorer.zora.energy/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"start-option\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    width: \"30\",\n                                                    src: \"/zora-explora.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \"Zora the Explora\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"start-link\",\n                                        target: \"_blank\",\n                                        href: \"https://www.youtube.com/watch?v=dQw4w9WgXcQ\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"start-option\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    width: \"30\",\n                                                    src: \"/rick.jpg\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \"Troll line\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-linklist-right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"start-option\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            width: \"30\",\n                                            src: \"/Internet_Explorer_6_logo.png\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"start-link\",\n                                            target: \"_blank\",\n                                            href: \"https://pixabay.com/images/search/cute%20cat/\",\n                                            children: \"cat pix\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-footer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dropup, \"K9Dm7oo7bzauMwriNS5CFm9oEuI=\");\n_c = Dropup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropup);\nvar _c;\n$RefreshReg$(_c, \"Dropup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRHJvcFVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrQ0FBK0MsR0FDL0Msb0RBQW9EOztBQUNIO0FBQ2xCO0FBTS9CLE1BQU1JLFNBQWdDO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUNsRCxNQUFNQyxnQkFBZ0JKLDZDQUFNQSxDQUF3QjtJQUVwREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxxQkFBcUIsQ0FBQ0M7Z0JBU3hCQztZQVJGLE1BQU1BLGdCQUFnQkQsTUFBTUUsTUFBTTtZQUVsQyxJQUNFSixjQUFjSyxPQUFPLElBQ3JCTCxjQUFjSyxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGtCQUN6Q0osaUJBQ0EsQ0FBQ0EsY0FBY0csU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQ2xDSixjQUFjSyxFQUFFLEtBQUtSLGNBQWNLLE9BQU8sQ0FBQ0csRUFBRSxJQUM3Q0wsRUFBQUEsK0JBQUFBLGNBQWNNLGFBQWEsY0FBM0JOLG1EQUFBQSw2QkFBNkJLLEVBQUUsTUFBS1IsY0FBY0ssT0FBTyxDQUFDRyxFQUFFLEVBQzVEO2dCQUNBRTtZQUNGO1FBQ0Y7UUFFQUMsT0FBT0MsZ0JBQWdCLENBQUMsU0FBU1g7UUFFakMsT0FBTztZQUNMVSxPQUFPRSxtQkFBbUIsQ0FBQyxTQUFTWjtRQUN0QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1TLFdBQVc7UUFDZixJQUFJVixjQUFjSyxPQUFPLEVBQUU7WUFDekJMLGNBQWNLLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDUSxNQUFNLENBQUM7UUFDekM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxLQUFLaEI7UUFBZWlCLFdBQVU7a0JBQ2pDLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNGO3dCQUFJSSxTQUFTVDt3QkFBVU8sV0FBVTtrQ0FDaEMsNEVBQUNwQixtREFBS0E7NEJBQUN1QixLQUFJOzRCQUFrQkMsT0FBTTs0QkFBTUMsUUFBTzs0QkFBS0MsS0FBSTs0QkFBR04sV0FBVTs7Ozs7Ozs7Ozs7a0NBRXhFLDhEQUFDRjt3QkFBSUUsV0FBVTt3QkFBaUJULElBQUc7OzBDQUNqQyw4REFBQ087Z0NBQUlFLFdBQVU7O2tEQUNiLDhEQUFDRjt3Q0FBSUUsV0FBVTtrREFDYiw0RUFBQ3BCLG1EQUFLQTs0Q0FBQ3VCLEtBQUk7NENBQWFHLEtBQUk7Ozs7Ozs7Ozs7O2tEQUU5Qiw4REFBQ1I7a0RBQ0MsNEVBQUNTO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHUCw4REFBQ1Q7Z0NBQUlFLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Y7Z0NBQUlFLFdBQVU7O2tEQUNiLDhEQUFDUTt3Q0FBRVIsV0FBVTt3Q0FBYWIsUUFBTzt3Q0FBU3NCLE1BQUs7a0RBQzdDLDRFQUFDWDs0Q0FBSUUsV0FBVTs7OERBQ2IsOERBQUNwQixtREFBS0E7b0RBQUN3QixPQUFNO29EQUFLRCxLQUFJO29EQUFZQyxPQUFNO29EQUFHQyxRQUFPO29EQUFLQyxLQUFJOzs7Ozs7Z0RBQUs7Ozs7Ozs7Ozs7OztrREFJcEUsOERBQUNFO3dDQUFFUixXQUFVO3dDQUFhYixRQUFPO3dDQUFTc0IsTUFBSztrREFDN0MsNEVBQUNYOzRDQUFJRSxXQUFVOzs4REFDYiw4REFBQ3BCLG1EQUFLQTtvREFBQ3dCLE9BQU07b0RBQUtELEtBQUk7b0RBQW9CRyxLQUFJOzs7Ozs7Z0RBQUs7Ozs7Ozs7Ozs7OztrREFJdkQsOERBQUNFO3dDQUFFUixXQUFVO3dDQUFhYixRQUFPO3dDQUFTc0IsTUFBSztrREFDN0MsNEVBQUNYOzRDQUFJRSxXQUFVOzs4REFDYiw4REFBQ3BCLG1EQUFLQTtvREFBQ3dCLE9BQU07b0RBQUtELEtBQUk7b0RBQVlHLEtBQUk7Ozs7OztnREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtqRCw4REFBQ1I7Z0NBQUlFLFdBQVU7MENBQ2IsNEVBQUNGO29DQUFJRSxXQUFVOztzREFDYiw4REFBQ3BCLG1EQUFLQTs0Q0FBQ3dCLE9BQU07NENBQUtELEtBQUk7NENBQWdDRyxLQUFJOzs7Ozs7c0RBQzFELDhEQUFDRTs0Q0FBRVIsV0FBVTs0Q0FBYWIsUUFBTzs0Q0FBU3NCLE1BQUs7c0RBQWdEOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLbkcsOERBQUNYO2dDQUFJRSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCO0dBbkZNbkI7S0FBQUE7QUFxRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wVXAudHN4P2ExZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLWR1cGxpY2F0ZS1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbnRlcmZhY2UgRHJvcHVwUHJvcHMge1xuICBjb250ZW50SWQ6IHN0cmluZztcbn1cblxuY29uc3QgRHJvcHVwOiBSZWFjdC5GQzxEcm9wdXBQcm9wcz4gPSAoeyBjb250ZW50SWQgfSkgPT4ge1xuICBjb25zdCBkcm9wdXBjb250ZW50ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZHJvcHVwY29udGVudC5jdXJyZW50ICYmXG4gICAgICAgIGRyb3B1cGNvbnRlbnQuY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wdXAtc2hvd1wiKSAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50ICYmXG4gICAgICAgICF0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInN0YXJ0LWJ0blwiKSAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LmlkICE9PSBkcm9wdXBjb250ZW50LmN1cnJlbnQuaWQgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50Py5pZCAhPT0gZHJvcHVwY29udGVudC5jdXJyZW50LmlkXG4gICAgICApIHtcbiAgICAgICAgdG9nZ2xlVXAoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlVXAgPSAoKSA9PiB7XG4gICAgaWYgKGRyb3B1cGNvbnRlbnQuY3VycmVudCkge1xuICAgICAgZHJvcHVwY29udGVudC5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wdXAtc2hvd1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17ZHJvcHVwY29udGVudH0gY2xhc3NOYW1lPVwiZHJvcHVwLWNvbnRlbnRcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGZpeGVkLWJvdHRvbSBuYXZiYXItbGlnaHQgbm8tcGFkZGluZyBuby1tYXJnaW4tbmF2YmFyIG5vLXNlbGVjdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B1cCBuby1tYXJnaW4tbmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVVcH0gY2xhc3NOYW1lPVwic3RhcnQtYnRuIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvd2lueHBzdGFydC5wbmdcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjM1XCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwic3RhcnQtYnRuIG5vLW1hcmdpbi1uYXZiYXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHVwLWNvbnRlbnRcIiBpZD1cInN0YXJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC10aXRsZS1pbWdcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NoZXNzLmJtcFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxiPlVzZXI8L2I+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0LXNwYW5cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtbGlua2xpc3QtbGVmdFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdGFydC1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZW5qb3kudGVjaC9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0LW9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPVwiMzBcIiBzcmM9XCIvem9yYS5wbmdcIiB3aWR0aD1cIlwiIGhlaWdodD1cIjM1XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIEVuam95eXlcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdGFydC1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZXhwbG9yZXIuem9yYS5lbmVyZ3kvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC1vcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjMwXCIgc3JjPVwiL3pvcmEtZXhwbG9yYS5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgWm9yYSB0aGUgRXhwbG9yYVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN0YXJ0LWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIzMFwiIHNyYz1cIi9yaWNrLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICBUcm9sbCBsaW5lXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC1saW5rbGlzdC1yaWdodFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0LW9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjMwXCIgc3JjPVwiL0ludGVybmV0X0V4cGxvcmVyXzZfbG9nby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN0YXJ0LWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9waXhhYmF5LmNvbS9pbWFnZXMvc2VhcmNoL2N1dGUlMjBjYXQvXCI+XG4gICAgICAgICAgICAgICAgICBjYXQgcGl4XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC1mb290ZXJcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3B1cDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkltYWdlIiwiRHJvcHVwIiwiY29udGVudElkIiwiZHJvcHVwY29udGVudCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlkIiwicGFyZW50RWxlbWVudCIsInRvZ2dsZVVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJuYXYiLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJiIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DropUp.tsx\n"));

/***/ })

});