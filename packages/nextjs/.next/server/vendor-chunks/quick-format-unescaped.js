"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/quick-format-unescaped";
exports.ids = ["vendor-chunks/quick-format-unescaped"];
exports.modules = {

/***/ "(ssr)/./node_modules/quick-format-unescaped/index.js":
/*!******************************************************!*\
  !*** ./node_modules/quick-format-unescaped/index.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nfunction tryStringify(o) {\n    try {\n        return JSON.stringify(o);\n    } catch (e) {\n        return '\"[Circular]\"';\n    }\n}\nmodule.exports = format;\nfunction format(f, args, opts) {\n    var ss = opts && opts.stringify || tryStringify;\n    var offset = 1;\n    if (typeof f === \"object\" && f !== null) {\n        var len = args.length + offset;\n        if (len === 1) return f;\n        var objects = new Array(len);\n        objects[0] = ss(f);\n        for(var index = 1; index < len; index++){\n            objects[index] = ss(args[index]);\n        }\n        return objects.join(\" \");\n    }\n    if (typeof f !== \"string\") {\n        return f;\n    }\n    var argLen = args.length;\n    if (argLen === 0) return f;\n    var str = \"\";\n    var a = 1 - offset;\n    var lastPos = -1;\n    var flen = f && f.length || 0;\n    for(var i = 0; i < flen;){\n        if (f.charCodeAt(i) === 37 && i + 1 < flen) {\n            lastPos = lastPos > -1 ? lastPos : 0;\n            switch(f.charCodeAt(i + 1)){\n                case 100:\n                case 102:\n                    if (a >= argLen) break;\n                    if (args[a] == null) break;\n                    if (lastPos < i) str += f.slice(lastPos, i);\n                    str += Number(args[a]);\n                    lastPos = i + 2;\n                    i++;\n                    break;\n                case 105:\n                    if (a >= argLen) break;\n                    if (args[a] == null) break;\n                    if (lastPos < i) str += f.slice(lastPos, i);\n                    str += Math.floor(Number(args[a]));\n                    lastPos = i + 2;\n                    i++;\n                    break;\n                case 79:\n                case 111:\n                case 106:\n                    if (a >= argLen) break;\n                    if (args[a] === undefined) break;\n                    if (lastPos < i) str += f.slice(lastPos, i);\n                    var type = typeof args[a];\n                    if (type === \"string\") {\n                        str += \"'\" + args[a] + \"'\";\n                        lastPos = i + 2;\n                        i++;\n                        break;\n                    }\n                    if (type === \"function\") {\n                        str += args[a].name || \"<anonymous>\";\n                        lastPos = i + 2;\n                        i++;\n                        break;\n                    }\n                    str += ss(args[a]);\n                    lastPos = i + 2;\n                    i++;\n                    break;\n                case 115:\n                    if (a >= argLen) break;\n                    if (lastPos < i) str += f.slice(lastPos, i);\n                    str += String(args[a]);\n                    lastPos = i + 2;\n                    i++;\n                    break;\n                case 37:\n                    if (lastPos < i) str += f.slice(lastPos, i);\n                    str += \"%\";\n                    lastPos = i + 2;\n                    i++;\n                    a--;\n                    break;\n            }\n            ++a;\n        }\n        ++i;\n    }\n    if (lastPos === -1) return f;\n    else if (lastPos < flen) {\n        str += f.slice(lastPos);\n    }\n    return str;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcXVpY2stZm9ybWF0LXVuZXNjYXBlZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFNBQVNBLGFBQWNDLENBQUM7SUFDdEIsSUFBSTtRQUFFLE9BQU9DLEtBQUtDLFNBQVMsQ0FBQ0Y7SUFBRyxFQUFFLE9BQU1HLEdBQUc7UUFBRSxPQUFPO0lBQWU7QUFDcEU7QUFFQUMsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixTQUFTQSxPQUFPQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSTtJQUMzQixJQUFJQyxLQUFLLFFBQVNELEtBQUtQLFNBQVMsSUFBS0g7SUFDckMsSUFBSVksU0FBUztJQUNiLElBQUksT0FBT0osTUFBTSxZQUFZQSxNQUFNLE1BQU07UUFDdkMsSUFBSUssTUFBTUosS0FBS0ssTUFBTSxHQUFHRjtRQUN4QixJQUFJQyxRQUFRLEdBQUcsT0FBT0w7UUFDdEIsSUFBSU8sVUFBVSxJQUFJQyxNQUFNSDtRQUN4QkUsT0FBTyxDQUFDLEVBQUUsR0FBR0osR0FBR0g7UUFDaEIsSUFBSyxJQUFJUyxRQUFRLEdBQUdBLFFBQVFKLEtBQUtJLFFBQVM7WUFDeENGLE9BQU8sQ0FBQ0UsTUFBTSxHQUFHTixHQUFHRixJQUFJLENBQUNRLE1BQU07UUFDakM7UUFDQSxPQUFPRixRQUFRRyxJQUFJLENBQUM7SUFDdEI7SUFDQSxJQUFJLE9BQU9WLE1BQU0sVUFBVTtRQUN6QixPQUFPQTtJQUNUO0lBQ0EsSUFBSVcsU0FBU1YsS0FBS0ssTUFBTTtJQUN4QixJQUFJSyxXQUFXLEdBQUcsT0FBT1g7SUFDekIsSUFBSVksTUFBTTtJQUNWLElBQUlDLElBQUksSUFBSVQ7SUFDWixJQUFJVSxVQUFVLENBQUM7SUFDZixJQUFJQyxPQUFPLEtBQU1mLEVBQUVNLE1BQU0sSUFBSztJQUM5QixJQUFLLElBQUlVLElBQUksR0FBR0EsSUFBSUQsTUFBTztRQUN6QixJQUFJZixFQUFFaUIsVUFBVSxDQUFDRCxPQUFPLE1BQU1BLElBQUksSUFBSUQsTUFBTTtZQUMxQ0QsVUFBVUEsVUFBVSxDQUFDLElBQUlBLFVBQVU7WUFDbkMsT0FBUWQsRUFBRWlCLFVBQVUsQ0FBQ0QsSUFBSTtnQkFDdkIsS0FBSztnQkFDTCxLQUFLO29CQUNILElBQUlILEtBQUtGLFFBQ1A7b0JBQ0YsSUFBSVYsSUFBSSxDQUFDWSxFQUFFLElBQUksTUFBTztvQkFDdEIsSUFBSUMsVUFBVUUsR0FDWkosT0FBT1osRUFBRWtCLEtBQUssQ0FBQ0osU0FBU0U7b0JBQzFCSixPQUFPTyxPQUFPbEIsSUFBSSxDQUFDWSxFQUFFO29CQUNyQkMsVUFBVUUsSUFBSTtvQkFDZEE7b0JBQ0E7Z0JBQ0YsS0FBSztvQkFDSCxJQUFJSCxLQUFLRixRQUNQO29CQUNGLElBQUlWLElBQUksQ0FBQ1ksRUFBRSxJQUFJLE1BQU87b0JBQ3RCLElBQUlDLFVBQVVFLEdBQ1pKLE9BQU9aLEVBQUVrQixLQUFLLENBQUNKLFNBQVNFO29CQUMxQkosT0FBT1EsS0FBS0MsS0FBSyxDQUFDRixPQUFPbEIsSUFBSSxDQUFDWSxFQUFFO29CQUNoQ0MsVUFBVUUsSUFBSTtvQkFDZEE7b0JBQ0E7Z0JBQ0YsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7b0JBQ0gsSUFBSUgsS0FBS0YsUUFDUDtvQkFDRixJQUFJVixJQUFJLENBQUNZLEVBQUUsS0FBS1MsV0FBVztvQkFDM0IsSUFBSVIsVUFBVUUsR0FDWkosT0FBT1osRUFBRWtCLEtBQUssQ0FBQ0osU0FBU0U7b0JBQzFCLElBQUlPLE9BQU8sT0FBT3RCLElBQUksQ0FBQ1ksRUFBRTtvQkFDekIsSUFBSVUsU0FBUyxVQUFVO3dCQUNyQlgsT0FBTyxNQUFPWCxJQUFJLENBQUNZLEVBQUUsR0FBRzt3QkFDeEJDLFVBQVVFLElBQUk7d0JBQ2RBO3dCQUNBO29CQUNGO29CQUNBLElBQUlPLFNBQVMsWUFBWTt3QkFDdkJYLE9BQU9YLElBQUksQ0FBQ1ksRUFBRSxDQUFDVyxJQUFJLElBQUk7d0JBQ3ZCVixVQUFVRSxJQUFJO3dCQUNkQTt3QkFDQTtvQkFDRjtvQkFDQUosT0FBT1QsR0FBR0YsSUFBSSxDQUFDWSxFQUFFO29CQUNqQkMsVUFBVUUsSUFBSTtvQkFDZEE7b0JBQ0E7Z0JBQ0YsS0FBSztvQkFDSCxJQUFJSCxLQUFLRixRQUNQO29CQUNGLElBQUlHLFVBQVVFLEdBQ1pKLE9BQU9aLEVBQUVrQixLQUFLLENBQUNKLFNBQVNFO29CQUMxQkosT0FBT2EsT0FBT3hCLElBQUksQ0FBQ1ksRUFBRTtvQkFDckJDLFVBQVVFLElBQUk7b0JBQ2RBO29CQUNBO2dCQUNGLEtBQUs7b0JBQ0gsSUFBSUYsVUFBVUUsR0FDWkosT0FBT1osRUFBRWtCLEtBQUssQ0FBQ0osU0FBU0U7b0JBQzFCSixPQUFPO29CQUNQRSxVQUFVRSxJQUFJO29CQUNkQTtvQkFDQUg7b0JBQ0E7WUFDSjtZQUNBLEVBQUVBO1FBQ0o7UUFDQSxFQUFFRztJQUNKO0lBQ0EsSUFBSUYsWUFBWSxDQUFDLEdBQ2YsT0FBT2Q7U0FDSixJQUFJYyxVQUFVQyxNQUFNO1FBQ3ZCSCxPQUFPWixFQUFFa0IsS0FBSyxDQUFDSjtJQUNqQjtJQUVBLE9BQU9GO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvLi9ub2RlX21vZHVsZXMvcXVpY2stZm9ybWF0LXVuZXNjYXBlZC9pbmRleC5qcz9iZDZhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuZnVuY3Rpb24gdHJ5U3RyaW5naWZ5IChvKSB7XG4gIHRyeSB7IHJldHVybiBKU09OLnN0cmluZ2lmeShvKSB9IGNhdGNoKGUpIHsgcmV0dXJuICdcIltDaXJjdWxhcl1cIicgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdFxuXG5mdW5jdGlvbiBmb3JtYXQoZiwgYXJncywgb3B0cykge1xuICB2YXIgc3MgPSAob3B0cyAmJiBvcHRzLnN0cmluZ2lmeSkgfHwgdHJ5U3RyaW5naWZ5XG4gIHZhciBvZmZzZXQgPSAxXG4gIGlmICh0eXBlb2YgZiA9PT0gJ29iamVjdCcgJiYgZiAhPT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aCArIG9mZnNldFxuICAgIGlmIChsZW4gPT09IDEpIHJldHVybiBmXG4gICAgdmFyIG9iamVjdHMgPSBuZXcgQXJyYXkobGVuKVxuICAgIG9iamVjdHNbMF0gPSBzcyhmKVxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgIG9iamVjdHNbaW5kZXhdID0gc3MoYXJnc1tpbmRleF0pXG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKVxuICB9XG4gIGlmICh0eXBlb2YgZiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZlxuICB9XG4gIHZhciBhcmdMZW4gPSBhcmdzLmxlbmd0aFxuICBpZiAoYXJnTGVuID09PSAwKSByZXR1cm4gZlxuICB2YXIgc3RyID0gJydcbiAgdmFyIGEgPSAxIC0gb2Zmc2V0XG4gIHZhciBsYXN0UG9zID0gLTFcbiAgdmFyIGZsZW4gPSAoZiAmJiBmLmxlbmd0aCkgfHwgMFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZsZW47KSB7XG4gICAgaWYgKGYuY2hhckNvZGVBdChpKSA9PT0gMzcgJiYgaSArIDEgPCBmbGVuKSB7XG4gICAgICBsYXN0UG9zID0gbGFzdFBvcyA+IC0xID8gbGFzdFBvcyA6IDBcbiAgICAgIHN3aXRjaCAoZi5jaGFyQ29kZUF0KGkgKyAxKSkge1xuICAgICAgICBjYXNlIDEwMDogLy8gJ2QnXG4gICAgICAgIGNhc2UgMTAyOiAvLyAnZidcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09IG51bGwpICBicmVha1xuICAgICAgICAgIGlmIChsYXN0UG9zIDwgaSlcbiAgICAgICAgICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MsIGkpXG4gICAgICAgICAgc3RyICs9IE51bWJlcihhcmdzW2FdKVxuICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgIGkrK1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTA1OiAvLyAnaSdcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09IG51bGwpICBicmVha1xuICAgICAgICAgIGlmIChsYXN0UG9zIDwgaSlcbiAgICAgICAgICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MsIGkpXG4gICAgICAgICAgc3RyICs9IE1hdGguZmxvb3IoTnVtYmVyKGFyZ3NbYV0pKVxuICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgIGkrK1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNzk6IC8vICdPJ1xuICAgICAgICBjYXNlIDExMTogLy8gJ28nXG4gICAgICAgIGNhc2UgMTA2OiAvLyAnaidcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09PSB1bmRlZmluZWQpIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBhcmdzW2FdXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHIgKz0gJ1xcJycgKyBhcmdzW2FdICsgJ1xcJydcbiAgICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RyICs9IGFyZ3NbYV0ubmFtZSB8fCAnPGFub255bW91cz4nXG4gICAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyICs9IHNzKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxMTU6IC8vICdzJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gU3RyaW5nKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzNzogLy8gJyUnXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gJyUnXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYS0tXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgICsrYVxuICAgIH1cbiAgICArK2lcbiAgfVxuICBpZiAobGFzdFBvcyA9PT0gLTEpXG4gICAgcmV0dXJuIGZcbiAgZWxzZSBpZiAobGFzdFBvcyA8IGZsZW4pIHtcbiAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zKVxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuIl0sIm5hbWVzIjpbInRyeVN0cmluZ2lmeSIsIm8iLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JtYXQiLCJmIiwiYXJncyIsIm9wdHMiLCJzcyIsIm9mZnNldCIsImxlbiIsImxlbmd0aCIsIm9iamVjdHMiLCJBcnJheSIsImluZGV4Iiwiam9pbiIsImFyZ0xlbiIsInN0ciIsImEiLCJsYXN0UG9zIiwiZmxlbiIsImkiLCJjaGFyQ29kZUF0Iiwic2xpY2UiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJ1bmRlZmluZWQiLCJ0eXBlIiwibmFtZSIsIlN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/quick-format-unescaped/index.js\n");

/***/ })

};
;