"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/html-loader";
exports.ids = ["vendor-chunks/html-loader"];
exports.modules = {

/***/ "(ssr)/./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function(url, options) {\n    if (!options) {\n        // eslint-disable-next-line no-param-reassign\n        options = {};\n    }\n    if (!url) {\n        return url;\n    }\n    // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n    url = String(url.__esModule ? url.default : url);\n    if (options.hash) {\n        // eslint-disable-next-line no-param-reassign\n        url += options.hash;\n    }\n    if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n        return '\"'.concat(url, '\"');\n    }\n    return url;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViQSxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsR0FBRyxFQUFFQyxPQUFPO0lBQ3JDLElBQUksQ0FBQ0EsU0FBUztRQUNaLDZDQUE2QztRQUM3Q0EsVUFBVSxDQUFDO0lBQ2I7SUFDQSxJQUFJLENBQUNELEtBQUs7UUFDUixPQUFPQTtJQUNUO0lBRUEsbUVBQW1FO0lBQ25FQSxNQUFNRSxPQUFPRixJQUFJRyxVQUFVLEdBQUdILElBQUlJLE9BQU8sR0FBR0o7SUFDNUMsSUFBSUMsUUFBUUksSUFBSSxFQUFFO1FBQ2hCLDZDQUE2QztRQUM3Q0wsT0FBT0MsUUFBUUksSUFBSTtJQUNyQjtJQUNBLElBQUlKLFFBQVFLLGVBQWUsSUFBSSxvQkFBb0JDLElBQUksQ0FBQ1AsTUFBTTtRQUM1RCxPQUFPLElBQUtRLE1BQU0sQ0FBQ1IsS0FBSztJQUMxQjtJQUNBLE9BQU9BO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcz9kOWYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJoYXNoIiwibWF5YmVOZWVkUXVvdGVzIiwidGVzdCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-loader/dist/runtime/getUrl.js\n");

/***/ })

};
;