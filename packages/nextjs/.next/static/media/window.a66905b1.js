wwindow = document.querySelectorAll(".window")[0];
windoww = document.querySelectorAll(".desktop")[0].offsetWidth - 1;
windowh = document.querySelectorAll(".desktop")[0].offsetHeight - 45;
dragrd = wwindow.querySelectorAll(".drag-rd")[0];
dragru = wwindow.querySelectorAll(".drag-ru")[0];
draglu = wwindow.querySelectorAll(".drag-lu")[0];
dragld = wwindow.querySelectorAll(".drag-ld")[0];
dragwindow = wwindow.querySelectorAll(".title")[0];
window.addEventListener("click", function(e) {});
dragwindow.onmousedown = function(event) {
    let shiftX = event.clientX - wwindow.getBoundingClientRect().left;
    let shiftY = event.clientY - wwindow.getBoundingClientRect().top;
    wwindow.style.zIndex = 10;
    windoww = document.querySelectorAll(".desktop")[0].offsetWidth - 1;
    windowh = document.querySelectorAll(".desktop")[0].offsetHeight - 45;
    function moveAt(pageX, pageY) {
        wwindow.style.left = pageX - shiftX + "px";
        wwindow.style.top = pageY - shiftY + "px";
    }
    function onMouseMove(event) {
        if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) moveAt(event.pageX, event.pageY);
        else {
            document.removeEventListener("mousemove", onMouseMove);
            wwindow.onmouseup = null;
        }
    }
    // move the wwindow on mousemove
    document.addEventListener("mousemove", onMouseMove);
    // drop the wwindow, remove unneeded handlers
    wwindow.onmouseup = function() {
        wwindow.style.zIndex = 9;
        document.removeEventListener("mousemove", onMouseMove);
        wwindow.onmouseup = null;
    };
};
dragrd.onmousedown = function(event) {
    function resize(w, h) {
        if (w > 200) {
            wwindow.style.width = w + "px";
        }
        if (h > 200) {
            wwindow.style.height = h + "px";
        }
    }
    function onMouseMove(event) {
        if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) resize(event.clientX - wwindow.getBoundingClientRect().left, event.clientY - wwindow.getBoundingClientRect().top);
        else {
            document.removeEventListener("mousemove", onMouseMove);
            wwindow.onmouseup = null;
        }
    }
    document.addEventListener("mousemove", onMouseMove);
    wwindow.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove);
        wwindow.onmouseup = null;
    };
};
// thanks @Bravo on stackoverflow for help me on this part https://stackoverflow.com/questions/58350597/creating-an-html-template-that-looks-like-windown-but-have-problems-with-the-res
dragru.onmousedown = function(event) {
    let bottom = wwindow.getBoundingClientRect().bottom;
    let left = wwindow.getBoundingClientRect().left;
    function resize(w, h) {
        if (w > 200) {
            wwindow.style.width = w + "px";
        }
        if (h > 200) {
            wwindow.style.top = bottom - h + "px";
            wwindow.style.height = h + "px";
        }
    }
    function onMouseMove(event) {
        if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) resize(event.clientX - left, bottom - event.clientY);
        else {
            document.removeEventListener("mousemove", onMouseMove);
            wwindow.onmouseup = null;
        }
    }
    document.addEventListener("mousemove", onMouseMove);
    wwindow.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove);
        wwindow.onmouseup = null;
    };
};
draglu.onmousedown = function(event) {
    let bottom = wwindow.getBoundingClientRect().bottom;
    let right = wwindow.getBoundingClientRect().right;
    let left = wwindow.getBoundingClientRect().left;
    function resize(w, h, x) {
        if (w > 200) {
            wwindow.style.left = x + "px";
            wwindow.style.width = w + "px";
        }
        if (h > 200) {
            wwindow.style.top = bottom - h + "px";
            wwindow.style.height = h + "px";
        }
    }
    function onMouseMove(event) {
        if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) resize(right - event.clientX, bottom - event.clientY, event.clientX);
        else {
            document.removeEventListener("mousemove", onMouseMove);
            wwindow.onmouseup = null;
        }
    }
    document.addEventListener("mousemove", onMouseMove);
    wwindow.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove);
        wwindow.onmouseup = null;
    };
};
dragld.onmousedown = function(event) {
    let top = wwindow.getBoundingClientRect().top;
    let right = wwindow.getBoundingClientRect().right;
    let left = wwindow.getBoundingClientRect().left;
    function resize(w, h, x) {
        if (w > 200) {
            wwindow.style.left = x + "px";
            wwindow.style.width = w + "px";
        }
        if (h > 200) {
            wwindow.style.height = h + "px";
        }
    }
    function onMouseMove(event) {
        if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1) resize(right - event.clientX, event.clientY - top, event.clientX);
        else {
            document.removeEventListener("mousemove", onMouseMove);
            wwindow.onmouseup = null;
        }
    }
    document.addEventListener("mousemove", onMouseMove);
    wwindow.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove);
        wwindow.onmouseup = null;
    };
};


;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = __webpack_module__.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                __webpack_module__.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                import.meta.webpackHot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        __webpack_module__.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    __webpack_module__.hot.invalidate();
                }
            }
        }
    })();
