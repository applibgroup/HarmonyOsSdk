"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.compileMetaProperty = void 0;
var jshelpers = __importStar(require("../jshelpers"));
function compileMetaProperty(expr, compiler) {
    var curScope = compiler.getCurrentScope();
    var id = jshelpers.getTextOfIdentifierOrLiteral(expr.name);
    if (id == "target") {
        var _a = curScope.find("4newTarget"), scope = _a.scope, level = _a.level, v = _a.v;
        if (!v) {
            throw new Error("fail to acess new.target");
        }
        else {
            compiler.emitLoad(expr, { scope: scope, level: level, v: v });
        }
        return;
    }
    if (id == "meta") {
        // TODO implement import.meta further if needed
    }
}
exports.compileMetaProperty = compileMetaProperty;
//# sourceMappingURL=metaProperty.js.map