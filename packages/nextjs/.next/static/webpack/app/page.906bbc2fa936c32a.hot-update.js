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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @typescript-eslint/no-unused-vars */ \nvar _s = $RefreshSig$();\n\n\nconst Dropup = (param)=>{\n    let { contentId } = param;\n    _s();\n    const dropupcontent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            var _targetElement_parentElement;\n            const targetElement = event.target;\n            if (dropupcontent.current && dropupcontent.current.classList.contains(\"dropup-show\") && targetElement && !targetElement.classList.contains(\"start-btn\") && targetElement.id !== dropupcontent.current.id && ((_targetElement_parentElement = targetElement.parentElement) === null || _targetElement_parentElement === void 0 ? void 0 : _targetElement_parentElement.id) !== dropupcontent.current.id) {\n                toggleUp();\n            }\n        };\n        window.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    const toggleUp = ()=>{\n        if (dropupcontent.current) {\n            dropupcontent.current.classList.toggle(\"dropup-show\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: dropupcontent,\n        className: \"dropup-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"navbar fixed-bottom navbar-light no-padding no-margin-navbar no-select\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropup no-margin-navbar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: toggleUp,\n                        className: \"start-btn no-padding\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"public/winxpstart.png\",\n                            width: \"110\",\n                            height: \"35\",\n                            alt: \"\",\n                            className: \"start-btn no-margin-navbar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropup-content\",\n                        id: \"start-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-title\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start-title-img\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"public/chess.bmp\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"User\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-span\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-linklist-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"start-link\",\n                                        target: \"_blank\",\n                                        href: \"https://enjoy.tech/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"start-option\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    width: \"30\",\n                                                    src: \"public/zora.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \"Enjoyyy\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"start-link\",\n                                        target: \"_blank\",\n                                        href: \"https://explorer.zora.energy/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"start-option\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    width: \"30\",\n                                                    src: \"public/zora-explora.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \"Zora the Explora\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"start-link\",\n                                        target: \"_blank\",\n                                        href: \"https://www.youtube.com/watch?v=dQw4w9WgXcQ\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"start-option\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    width: \"30\",\n                                                    src: \"public/rick.jpg\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \"Troll line\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-linklist-right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"start-option\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            width: \"30\",\n                                            src: \"public/Internet_Explorer_6_logo.png\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"start-link\",\n                                            target: \"_blank\",\n                                            href: \"https://pixabay.com/images/search/cute%20cat/\",\n                                            children: \"cat pix\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"start-footer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raigal/tmp/Nerds/Degen/NFT/njoy/packages/nextjs/components/DropUp.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dropup, \"K9Dm7oo7bzauMwriNS5CFm9oEuI=\");\n_c = Dropup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropup);\nvar _c;\n$RefreshReg$(_c, \"Dropup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRHJvcFVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBb0Q7O0FBQ0g7QUFDbEI7QUFNL0IsTUFBTUksU0FBZ0M7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ2xELE1BQU1DLGdCQUFnQkosNkNBQU1BLENBQXdCO0lBRXBERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLHFCQUFxQixDQUFDQztnQkFTeEJDO1lBUkYsTUFBTUEsZ0JBQWdCRCxNQUFNRSxNQUFNO1lBRWxDLElBQ0VKLGNBQWNLLE9BQU8sSUFDckJMLGNBQWNLLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsa0JBQ3pDSixpQkFDQSxDQUFDQSxjQUFjRyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxnQkFDbENKLGNBQWNLLEVBQUUsS0FBS1IsY0FBY0ssT0FBTyxDQUFDRyxFQUFFLElBQzdDTCxFQUFBQSwrQkFBQUEsY0FBY00sYUFBYSxjQUEzQk4sbURBQUFBLDZCQUE2QkssRUFBRSxNQUFLUixjQUFjSyxPQUFPLENBQUNHLEVBQUUsRUFDNUQ7Z0JBQ0FFO1lBQ0Y7UUFDRjtRQUVBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTWDtRQUVqQyxPQUFPO1lBQ0xVLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNaO1FBQ3RDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVMsV0FBVztRQUNmLElBQUlWLGNBQWNLLE9BQU8sRUFBRTtZQUN6QkwsY0FBY0ssT0FBTyxDQUFDQyxTQUFTLENBQUNRLE1BQU0sQ0FBQztRQUN6QztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLEtBQUtoQjtRQUFlaUIsV0FBVTtrQkFDakMsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNGO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0Y7d0JBQUlJLFNBQVNUO3dCQUFVTyxXQUFVO2tDQUNoQyw0RUFBQ3BCLG1EQUFLQTs0QkFBQ3VCLEtBQUk7NEJBQXdCQyxPQUFNOzRCQUFNQyxRQUFPOzRCQUFLQyxLQUFJOzRCQUFHTixXQUFVOzs7Ozs7Ozs7OztrQ0FFOUUsOERBQUNGO3dCQUFJRSxXQUFVO3dCQUFpQlQsSUFBRzs7MENBQ2pDLDhEQUFDTztnQ0FBSUUsV0FBVTs7a0RBQ2IsOERBQUNGO3dDQUFJRSxXQUFVO2tEQUNiLDRFQUFDcEIsbURBQUtBOzRDQUFDdUIsS0FBSTs0Q0FBbUJHLEtBQUk7Ozs7Ozs7Ozs7O2tEQUVwQyw4REFBQ1I7a0RBQ0MsNEVBQUNTO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHUCw4REFBQ1Q7Z0NBQUlFLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Y7Z0NBQUlFLFdBQVU7O2tEQUNiLDhEQUFDUTt3Q0FBRVIsV0FBVTt3Q0FBYWIsUUFBTzt3Q0FBU3NCLE1BQUs7a0RBQzdDLDRFQUFDWDs0Q0FBSUUsV0FBVTs7OERBQ2IsOERBQUNwQixtREFBS0E7b0RBQUN3QixPQUFNO29EQUFLRCxLQUFJO29EQUFrQkcsS0FBSTs7Ozs7O2dEQUFLOzs7Ozs7Ozs7Ozs7a0RBSXJELDhEQUFDRTt3Q0FBRVIsV0FBVTt3Q0FBYWIsUUFBTzt3Q0FBU3NCLE1BQUs7a0RBQzdDLDRFQUFDWDs0Q0FBSUUsV0FBVTs7OERBQ2IsOERBQUNwQixtREFBS0E7b0RBQUN3QixPQUFNO29EQUFLRCxLQUFJO29EQUEwQkcsS0FBSTs7Ozs7O2dEQUFLOzs7Ozs7Ozs7Ozs7a0RBSTdELDhEQUFDRTt3Q0FBRVIsV0FBVTt3Q0FBYWIsUUFBTzt3Q0FBU3NCLE1BQUs7a0RBQzdDLDRFQUFDWDs0Q0FBSUUsV0FBVTs7OERBQ2IsOERBQUNwQixtREFBS0E7b0RBQUN3QixPQUFNO29EQUFLRCxLQUFJO29EQUFrQkcsS0FBSTs7Ozs7O2dEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBS3ZELDhEQUFDUjtnQ0FBSUUsV0FBVTswQ0FDYiw0RUFBQ0Y7b0NBQUlFLFdBQVU7O3NEQUNiLDhEQUFDcEIsbURBQUtBOzRDQUFDd0IsT0FBTTs0Q0FBS0QsS0FBSTs0Q0FBc0NHLEtBQUk7Ozs7OztzREFDaEUsOERBQUNFOzRDQUFFUixXQUFVOzRDQUFhYixRQUFPOzRDQUFTc0IsTUFBSztzREFBZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtuRyw4REFBQ1g7Z0NBQUlFLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0I7R0FuRk1uQjtLQUFBQTtBQXFGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Ryb3BVcC50c3g/YTFmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmludGVyZmFjZSBEcm9wdXBQcm9wcyB7XG4gIGNvbnRlbnRJZDogc3RyaW5nO1xufVxuXG5jb25zdCBEcm9wdXA6IFJlYWN0LkZDPERyb3B1cFByb3BzPiA9ICh7IGNvbnRlbnRJZCB9KSA9PiB7XG4gIGNvbnN0IGRyb3B1cGNvbnRlbnQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKFxuICAgICAgICBkcm9wdXBjb250ZW50LmN1cnJlbnQgJiZcbiAgICAgICAgZHJvcHVwY29udGVudC5jdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B1cC1zaG93XCIpICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhcnQtYnRuXCIpICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQuaWQgIT09IGRyb3B1cGNvbnRlbnQuY3VycmVudC5pZCAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQ/LmlkICE9PSBkcm9wdXBjb250ZW50LmN1cnJlbnQuaWRcbiAgICAgICkge1xuICAgICAgICB0b2dnbGVVcCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVVcCA9ICgpID0+IHtcbiAgICBpZiAoZHJvcHVwY29udGVudC5jdXJyZW50KSB7XG4gICAgICBkcm9wdXBjb250ZW50LmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3B1cC1zaG93XCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtkcm9wdXBjb250ZW50fSBjbGFzc05hbWU9XCJkcm9wdXAtY29udGVudFwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgZml4ZWQtYm90dG9tIG5hdmJhci1saWdodCBuby1wYWRkaW5nIG5vLW1hcmdpbi1uYXZiYXIgbm8tc2VsZWN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHVwIG5vLW1hcmdpbi1uYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RvZ2dsZVVwfSBjbGFzc05hbWU9XCJzdGFydC1idG4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInB1YmxpYy93aW54cHN0YXJ0LnBuZ1wiIHdpZHRoPVwiMTEwXCIgaGVpZ2h0PVwiMzVcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJzdGFydC1idG4gbm8tbWFyZ2luLW5hdmJhclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wdXAtY29udGVudFwiIGlkPVwic3RhcnQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC10aXRsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0LXRpdGxlLWltZ1wiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJwdWJsaWMvY2hlc3MuYm1wXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGI+VXNlcjwvYj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtc3BhblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC1saW5rbGlzdC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN0YXJ0LWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9lbmpveS50ZWNoL1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIzMFwiIHNyYz1cInB1YmxpYy96b3JhLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICBFbmpveXl5XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3RhcnQtbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2V4cGxvcmVyLnpvcmEuZW5lcmd5L1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIzMFwiIHNyYz1cInB1YmxpYy96b3JhLWV4cGxvcmEucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIFpvcmEgdGhlIEV4cGxvcmFcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdGFydC1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0LW9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPVwiMzBcIiBzcmM9XCJwdWJsaWMvcmljay5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgVHJvbGwgbGluZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtbGlua2xpc3QtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC1vcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIzMFwiIHNyYz1cInB1YmxpYy9JbnRlcm5ldF9FeHBsb3Jlcl82X2xvZ28ucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdGFydC1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcGl4YWJheS5jb20vaW1hZ2VzL3NlYXJjaC9jdXRlJTIwY2F0L1wiPlxuICAgICAgICAgICAgICAgICAgY2F0IHBpeFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtZm9vdGVyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wdXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJbWFnZSIsIkRyb3B1cCIsImNvbnRlbnRJZCIsImRyb3B1cGNvbnRlbnQiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJ0b2dnbGVVcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwibmF2Iiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYiIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DropUp.tsx\n"));

/***/ })

});