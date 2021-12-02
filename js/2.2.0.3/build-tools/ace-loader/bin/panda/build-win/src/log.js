"use strict";
exports.__esModule = true;
exports.LOGE = exports.LOGD = void 0;
// singleton to print debug logs
var cmdOptions_1 = require("./cmdOptions");
function LOGD(tag) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (cmdOptions_1.CmdOptions.isEnableDebugLog()) {
        if (tag) {
            console.log(tag + ": " + args);
        }
        else {
            console.log(args);
        }
    }
}
exports.LOGD = LOGD;
function LOGE(tag) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (tag) {
        console.error(tag + ": " + args);
    }
    else {
        console.error(args);
    }
}
exports.LOGE = LOGE;
//# sourceMappingURL=log.js.map