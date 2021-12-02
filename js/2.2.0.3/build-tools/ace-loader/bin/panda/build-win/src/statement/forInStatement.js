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
exports.compileForInStatement = void 0;
var ts = __importStar(require("typescript"));
var lreference_1 = require("../base/lreference");
var vregisterCache_1 = require("../base/vregisterCache");
var irnodes_1 = require("../irnodes");
var labelTarget_1 = require("./labelTarget");
function compileForInStatement(stmt, compiler) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    var loopStartLabel = new irnodes_1.Label();
    var loopEndLabel = new irnodes_1.Label();
    var labelTarget = new labelTarget_1.LabelTarget(loopEndLabel, loopStartLabel);
    labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
    labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, labelTarget);
    var iterReg = pandaGen.getTemp();
    var propName = pandaGen.getTemp();
    // create enumerator
    compiler.compileExpression(stmt.expression);
    pandaGen.getPropIterator(stmt);
    pandaGen.storeAccumulator(stmt, iterReg);
    pandaGen.label(stmt, loopStartLabel);
    // get next prop of enumerator
    pandaGen.getNextPropName(stmt, iterReg);
    pandaGen.storeAccumulator(stmt, propName);
    pandaGen.condition(stmt, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), loopEndLabel);
    var lref = lreference_1.LReference.createLRef(compiler, stmt.initializer, false);
    pandaGen.loadAccumulator(stmt, propName);
    lref.setValue();
    compiler.compileStatement(stmt.statement);
    pandaGen.branch(stmt, loopStartLabel);
    pandaGen.label(stmt, loopEndLabel);
    pandaGen.freeTemps(iterReg, propName);
    labelTarget_1.LabelTarget.popLabelTarget();
    compiler.popScope();
}
exports.compileForInStatement = compileForInStatement;
//# sourceMappingURL=forInStatement.js.map