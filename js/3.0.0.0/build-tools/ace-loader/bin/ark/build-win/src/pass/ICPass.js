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
exports.ICPass = void 0;
var irnodes_1 = require("../irnodes");
var log_1 = require("../log");
var ICPassImpl = /** @class */ (function () {
    function ICPassImpl() {
    }
    ICPassImpl.prototype.run = function (pg) {
        var insns = pg.getInsns();
        var icSize = 0;
        for (var i = 0; i < insns.length; ++i) {
            if (!(insns[i] instanceof irnodes_1.Intrinsic)) {
                continue;
            }
            var ins = (insns[i]);
            if (!ins.hasIC()) {
                continue;
            }
            icSize = ins.updateICOffset(icSize);
        }
        if (icSize >= 0xFFFF) {
            log_1.LOGE("ICPass: <" + pg.internalName + "> slot size overflow! total:" + icSize);
        }
        pg.setICSize(icSize);
    };
    return ICPassImpl;
}());
var ICPass = /** @class */ (function () {
    function ICPass() {
    }
    ICPass.prototype.run = function (pg) {
        var icPass = new ICPassImpl();
        icPass.run(pg);
    };
    return ICPass;
}());
exports.ICPass = ICPass;
//# sourceMappingURL=ICPass.js.map