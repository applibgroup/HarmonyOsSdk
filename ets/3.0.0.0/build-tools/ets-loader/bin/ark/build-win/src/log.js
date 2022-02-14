"use strict";
/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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