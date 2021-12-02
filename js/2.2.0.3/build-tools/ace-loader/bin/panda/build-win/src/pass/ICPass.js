"use strict";
// Huawei Technologies Co.,Ltd.
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