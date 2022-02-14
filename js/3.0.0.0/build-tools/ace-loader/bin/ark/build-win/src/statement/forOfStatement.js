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
    var loopScope = compiler.getRecorder().getScopeOfNode(stmt);
    var needCreateLoopEnv = loopScope.need2CreateLexEnv() ? true : false;
    var loopEnv = pandaGen.getTemp();
    // for now Async is not handled.
    var type = IteratorType.Normal;
    compiler.compileExpression(stmt.expression);
    var iterator = getIteratorRecord(pandaGen, stmt, method, object, type);
    pandaGen.loadAccumulator(stmt, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False));
    pandaGen.storeAccumulator(stmt, doneReg);
    var labelTarget = new labelTarget_1.LabelTarget(endLabel, nextLabel);
    labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
    labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, labelTarget);
    var tryBuilderWithForOf = new tryStatement_1.TryBuilderWithForOf(compiler, pandaGen, stmt, doneReg, iterator, labelTarget, needCreateLoopEnv, needCreateLoopEnv ? loopEnv : undefined);
    compiler.constructTry(stmt, tryBuilderWithForOf, nextLabel);
    pandaGen.label(stmt, endLabel);
    labelTarget_1.LabelTarget.popLabelTarget();
    if (needCreateLoopEnv) {
        pandaGen.popLexicalEnv(stmt);
        compiler.popEnv();
    }
    pandaGen.freeTemps(doneReg, method, object, loopEnv);
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
        // support Async Iterator in the future
        throw new Error("Async Iterator haven't been supported");
    }
    else {
        pandagen.getIterator(node);
    }
}
//# sourceMappingURL=forOfStatement.js.map