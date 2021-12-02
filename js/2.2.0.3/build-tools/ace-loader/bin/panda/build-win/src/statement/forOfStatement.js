"use strict";
exports.__esModule = true;
exports.getIteratorRecord = exports.compileForOfStatement = exports.IteratorRecord = exports.IteratorType = void 0;
var vregisterCache_1 = require("../base/vregisterCache");
var labelTarget_1 = require("./labelTarget");
var irnodes_1 = require("../irnodes");
var tryStatement_1 = require("./tryStatement");
var IteratorType;
(function (IteratorType) {
    IteratorType[IteratorType["Normal"] = 0] = "Normal";
    IteratorType[IteratorType["Async"] = 1] = "Async";
})(IteratorType = exports.IteratorType || (exports.IteratorType = {}));
var IteratorRecord = /** @class */ (function () {
    function IteratorRecord(object, nextMethod, type) {
        if (type === void 0) { type = IteratorType.Normal; }
        this.type = type;
        this.object = object;
        this.nextMethod = nextMethod;
    }
    IteratorRecord.prototype.getType = function () {
        return this.type;
    };
    IteratorRecord.prototype.getObject = function () {
        return this.object;
    };
    IteratorRecord.prototype.getNextMethod = function () {
        return this.nextMethod;
    };
    return IteratorRecord;
}());
exports.IteratorRecord = IteratorRecord;
function compileForOfStatement(stmt, compiler) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    var nextLabel = new irnodes_1.Label();
    var endLabel = new irnodes_1.Label();
    var doneReg = pandaGen.getTemp();
    var method = pandaGen.getTemp();
    var object = pandaGen.getTemp();
    // for now Async is not handled.
    var type = IteratorType.Normal;
    compiler.compileExpression(stmt.expression);
    var iterator = getIteratorRecord(pandaGen, stmt, method, object, type);
    pandaGen.loadAccumulator(stmt, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False));
    pandaGen.storeAccumulator(stmt, doneReg);
    var labelTarget = new labelTarget_1.LabelTarget(endLabel, nextLabel);
    labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
    labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, labelTarget);
    var tryBuilderWithForOf = new tryStatement_1.TryBuilderWithForOf(compiler, pandaGen, stmt, doneReg, iterator, labelTarget);
    compiler.constructTry(stmt.statement, tryBuilderWithForOf, nextLabel);
    pandaGen.label(stmt, endLabel);
    labelTarget_1.LabelTarget.popLabelTarget();
    pandaGen.freeTemps(doneReg, method, object);
    compiler.popScope();
}
exports.compileForOfStatement = compileForOfStatement;
function getIteratorRecord(pandagen, node, nextMethod, object, type) {
    getIterator(pandagen, node, type);
    pandagen.storeAccumulator(node, object);
    pandagen.loadObjProperty(node, object, "next");
    pandagen.storeAccumulator(node, nextMethod);
    return new IteratorRecord(object, nextMethod, type);
}
exports.getIteratorRecord = getIteratorRecord;
function getIterator(pandagen, node, type) {
    if (type == IteratorType.Async) {
        // TODO: support Async Iterator(hufeng00576929)
        throw new Error("Async Iterator haven't been supported");
    }
    else {
        pandagen.getIterator(node);
    }
}
//# sourceMappingURL=forOfStatement.js.map