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

/***/ "(app-pages-browser)/./pages/index/randomizer.jsx":
/*!************************************!*\
  !*** ./pages/index/randomizer.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Randomizer = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/getquotes\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const result = await response.json();\n                JSON.stringify(result);\n                const rows = result.results;\n                const quotes = rows.map((quote)=>{\n                    let author = quote.properties.Author.title.length ? quote.properties.Author.title[0].plain_text : null;\n                    let quoteBody = quote.properties.Excerpt.rich_text.length ? quote.properties.Excerpt.rich_text[0].plain_text : null;\n                    let year = quote.properties.Year.number ? quote.properties.Year.number : null;\n                    let source = quote.properties.Source.rich_text.length ? quote.properties.Source.rich_text[0].plain_text : null;\n                    let pageID = quote.id;\n                    const quoteObj = {\n                        author: author,\n                        quoteBody: quoteBody,\n                        year: year,\n                        source: source,\n                        pageID: pageID\n                    };\n                    return quoteObj;\n                });\n                console.log(quotes);\n                let randomIndex = Math.floor(Math.random() * quotes.length);\n                setData(quotes[randomIndex]);\n            } catch (error) {\n                setError(error);\n            }\n        };\n        fetchData();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error.message\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n            lineNumber: 62,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n            lineNumber: 66,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-400 max-w-custom-30\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-yellow-600\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"\",\n                    children: data.quoteBody\n                }, void 0, false, {\n                    fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                lineNumber: 71,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-pink-900\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"-\",\n                                    data.author,\n                                    \", \",\n                                    data.source,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"(\",\n                                    data.year,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/pages/index/randomizer.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Randomizer, \"XDVXnHzsKW9JpOo48THjIq2+NOI=\");\n_c = Randomizer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Randomizer);\nvar _c;\n$RefreshReg$(_c, \"Randomizer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3BhZ2VzL2luZGV4L3JhbmRvbWl6ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUdtRDtBQUduRCxNQUFNRyxhQUFhOztJQUNqQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUVSLE1BQU1PLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLFNBQVMsTUFBTUosU0FBU0ssSUFBSTtnQkFFbENDLEtBQUtDLFNBQVMsQ0FBQ0g7Z0JBSWYsTUFBTUksT0FBT0osT0FBT0ssT0FBTztnQkFHM0IsTUFBTUMsU0FBU0YsS0FBS0csR0FBRyxDQUFDLENBQUNDO29CQUV2QixJQUFJQyxTQUFTRCxNQUFNRSxVQUFVLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUdMLE1BQU1FLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDRSxVQUFVLEdBQUc7b0JBQ2xHLElBQUlDLFlBQVlQLE1BQU1FLFVBQVUsQ0FBQ00sT0FBTyxDQUFDQyxTQUFTLENBQUNKLE1BQU0sR0FBR0wsTUFBTUUsVUFBVSxDQUFDTSxPQUFPLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQUNILFVBQVUsR0FBRztvQkFDL0csSUFBSUksT0FBT1YsTUFBTUUsVUFBVSxDQUFDUyxJQUFJLENBQUNDLE1BQU0sR0FBR1osTUFBTUUsVUFBVSxDQUFDUyxJQUFJLENBQUNDLE1BQU0sR0FBRztvQkFDekUsSUFBSUMsU0FBU2IsTUFBTUUsVUFBVSxDQUFDWSxNQUFNLENBQUNMLFNBQVMsQ0FBQ0osTUFBTSxHQUFHTCxNQUFNRSxVQUFVLENBQUNZLE1BQU0sQ0FBQ0wsU0FBUyxDQUFDLEVBQUUsQ0FBQ0gsVUFBVSxHQUFHO29CQUMxRyxJQUFJUyxTQUFTZixNQUFNZ0IsRUFBRTtvQkFJckIsTUFBTUMsV0FBVzt3QkFBQ2hCLFFBQVFBO3dCQUN4Qk0sV0FBV0E7d0JBQ1hHLE1BQU1BO3dCQUNORyxRQUFRQTt3QkFDUkUsUUFBT0E7b0JBQ1Q7b0JBQ0EsT0FBT0U7Z0JBRVQ7Z0JBRUFDLFFBQVFDLEdBQUcsQ0FBQ3JCO2dCQUNaLElBQUlzQixjQUFjQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3pCLE9BQU9PLE1BQU07Z0JBRTFEckIsUUFBUWMsTUFBTSxDQUFDc0IsWUFBWTtZQUM3QixFQUFFLE9BQU9uQyxPQUFPO2dCQUNkQyxTQUFTRDtZQUNYO1FBQ0Y7UUFFQUU7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJRixPQUFPO1FBQ1QscUJBQU8sOERBQUN1Qzs7Z0JBQUk7Z0JBQVF2QyxNQUFNd0MsT0FBTzs7Ozs7OztJQUNuQztJQUVBLElBQUksQ0FBQzFDLE1BQU07UUFDVCxxQkFBTyw4REFBQ3lDO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTtRQUFJRSxXQUFVOzswQkFDZiw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFFRCxXQUFVOzhCQUNWM0MsS0FBS3dCLFNBQVM7Ozs7Ozs7Ozs7OzBCQUduQiw4REFBQ2lCO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNGOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBRUQsV0FBVTs7b0NBQUc7b0NBQUUzQyxLQUFLa0IsTUFBTTtvQ0FBQztvQ0FBR2xCLEtBQUs4QixNQUFNO29DQUFDOzs7Ozs7Ozs7Ozs7c0NBRS9DLDhEQUFDVzs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUVELFdBQVU7O29DQUFHO29DQUFFM0MsS0FBSzJCLElBQUk7b0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRDO0dBakZNNUI7S0FBQUE7QUFtRk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvcmFuZG9taXplci5qc3g/YmQwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBSYW5kb21pemVyID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRxdW90ZXMnKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdClcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJvd3MgPSByZXN1bHQucmVzdWx0c1xuICAgICAgXG5cbiAgICAgICAgY29uc3QgcXVvdGVzID0gcm93cy5tYXAoKHF1b3RlKSA9PiB7XG5cbiAgICAgICAgICBsZXQgYXV0aG9yID0gcXVvdGUucHJvcGVydGllcy5BdXRob3IudGl0bGUubGVuZ3RoID8gcXVvdGUucHJvcGVydGllcy5BdXRob3IudGl0bGVbMF0ucGxhaW5fdGV4dCA6IG51bGw7XG4gICAgICAgICAgbGV0IHF1b3RlQm9keSA9IHF1b3RlLnByb3BlcnRpZXMuRXhjZXJwdC5yaWNoX3RleHQubGVuZ3RoID8gcXVvdGUucHJvcGVydGllcy5FeGNlcnB0LnJpY2hfdGV4dFswXS5wbGFpbl90ZXh0IDogbnVsbDtcbiAgICAgICAgICBsZXQgeWVhciA9IHF1b3RlLnByb3BlcnRpZXMuWWVhci5udW1iZXIgPyBxdW90ZS5wcm9wZXJ0aWVzLlllYXIubnVtYmVyIDogbnVsbDtcbiAgICAgICAgICBsZXQgc291cmNlID0gcXVvdGUucHJvcGVydGllcy5Tb3VyY2UucmljaF90ZXh0Lmxlbmd0aCA/IHF1b3RlLnByb3BlcnRpZXMuU291cmNlLnJpY2hfdGV4dFswXS5wbGFpbl90ZXh0IDogbnVsbDtcbiAgICAgICAgICBsZXQgcGFnZUlEID0gcXVvdGUuaWRcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgY29uc3QgcXVvdGVPYmogPSB7YXV0aG9yOiBhdXRob3IsXG4gICAgICAgICAgICBxdW90ZUJvZHk6IHF1b3RlQm9keSxcbiAgICAgICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHBhZ2VJRDpwYWdlSURcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHF1b3RlT2JqXG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyhxdW90ZXMpXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1b3Rlcy5sZW5ndGgpXG5cbiAgICAgICAgc2V0RGF0YShxdW90ZXNbcmFuZG9tSW5kZXhdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICB9XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS00MDAgbWF4LXctY3VzdG9tLTMwXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNjAwXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAge2RhdGEucXVvdGVCb2R5fVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXBpbmstOTAwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+LXtkYXRhLmF1dGhvcn0sIHtkYXRhLnNvdXJjZX0gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj4oe2RhdGEueWVhcn0pPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmRvbWl6ZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJhbmRvbWl6ZXIiLCJkYXRhIiwic2V0RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInJlc3VsdCIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwicm93cyIsInJlc3VsdHMiLCJxdW90ZXMiLCJtYXAiLCJxdW90ZSIsImF1dGhvciIsInByb3BlcnRpZXMiLCJBdXRob3IiLCJ0aXRsZSIsImxlbmd0aCIsInBsYWluX3RleHQiLCJxdW90ZUJvZHkiLCJFeGNlcnB0IiwicmljaF90ZXh0IiwieWVhciIsIlllYXIiLCJudW1iZXIiLCJzb3VyY2UiLCJTb3VyY2UiLCJwYWdlSUQiLCJpZCIsInF1b3RlT2JqIiwiY29uc29sZSIsImxvZyIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGl2IiwibWVzc2FnZSIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./pages/index/randomizer.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_randomizer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/index/randomizer.jsx */ \"(app-pages-browser)/./pages/index/randomizer.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Adjust path if needed\nconst HomePage = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up interval to refresh the page every 30 seconds\n        const interval = setInterval(()=>{\n            window.location.reload(); // Reloads the entire page\n        }, 30000); // 30000 milliseconds = 30 seconds\n        // Cleanup interval on component unmount\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Quote of The Day\"\n            }, void 0, false, {\n                fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/src/app/page.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_index_randomizer_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/src/app/page.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Javan/GIOVAN/Projects/quote-carousel/src/app/page.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUV5QztBQUNpQixDQUFDLHdCQUF3QjtBQUduRixNQUFNRyxXQUFXOztJQUNmRixnREFBU0EsQ0FBQztRQUNSLHVEQUF1RDtRQUN2RCxNQUFNRyxXQUFXQyxZQUFZO1lBQzNCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sSUFBSSwwQkFBMEI7UUFDdEQsR0FBRyxRQUFRLGtDQUFrQztRQUU3Qyx3Q0FBd0M7UUFDeEMsT0FBTyxJQUFNQyxjQUFjTDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNWLG1FQUFVQTs7Ozs7Ozs7Ozs7QUFHakI7R0FqQk1DO0tBQUFBO0FBbUJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYW5kb21pemVyIGZyb20gJy4uLy4uL3BhZ2VzL2luZGV4L3JhbmRvbWl6ZXIuanN4JzsgLy8gQWRqdXN0IHBhdGggaWYgbmVlZGVkXG5cblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IHVwIGludGVydmFsIHRvIHJlZnJlc2ggdGhlIHBhZ2UgZXZlcnkgMzAgc2Vjb25kc1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyAvLyBSZWxvYWRzIHRoZSBlbnRpcmUgcGFnZVxuICAgIH0sIDMwMDAwKTsgLy8gMzAwMDAgbWlsbGlzZWNvbmRzID0gMzAgc2Vjb25kc1xuXG4gICAgLy8gQ2xlYW51cCBpbnRlcnZhbCBvbiBjb21wb25lbnQgdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aDE+UXVvdGUgb2YgVGhlIERheTwvaDE+XG4gICAgICA8UmFuZG9taXplciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJSYW5kb21pemVyIiwiSG9tZVBhZ2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});