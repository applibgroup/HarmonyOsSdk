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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.generateCatchTables = exports.updateCatchTables = exports.TryBuilderWithForOf = exports.TryBuilder = exports.TryBuilderBase = exports.TryStatement = exports.CatchTable = exports.LabelPair = exports.transformTryCatchFinally = void 0;
var compiler_1 = require("../compiler");
var irnodes_1 = require("../irnodes");
var ts = __importStar(require("typescript"));
var scope_1 = require("../scope");
var lreference_1 = require("../base/lreference");
var vregisterCache_1 = require("../base/vregisterCache");
var astutils = __importStar(require("../astutils"));
var variable_1 = require("../variable");
// adjust the try...catch...finally into nested try(try...catch) finally
function transformTryCatchFinally(tryStmt, recorder) {
    // after create new try block node, mapped with new scope, and adjust parent node
    var tryStmtScope = recorder.getScopeOfNode(tryStmt);
    var newTryBlockScope = new scope_1.LocalScope(tryStmtScope);
    var newTryStmtScope = new scope_1.LocalScope(newTryBlockScope);
    recorder.getScopeOfNode(tryStmt.tryBlock).setParent(newTryStmtScope);
    recorder.getScopeOfNode(tryStmt.catchClause).setParent(newTryStmtScope);
    var newTryStmt = ts.createTry(tryStmt.tryBlock, tryStmt.catchClause, undefined);
    recorder.setScopeMap(newTryStmt, newTryStmtScope);
    var newTryBlock = [newTryStmt];
    newTryBlock[0].pos = tryStmt.tryBlock.pos;
    newTryBlock[0].end = tryStmt.tryBlock.end;
    tryStmt.tryBlock = ts.updateBlock(tryStmt.tryBlock, newTryBlock);
    newTryBlock[0].parent = tryStmt.tryBlock;
    recorder.setScopeMap(tryStmt.tryBlock, newTryBlockScope);
    tryStmt.catchClause = undefined;
    tryStmt = ts.updateTry(tryStmt, tryStmt.tryBlock, undefined, tryStmt.finallyBlock);
}
exports.transformTryCatchFinally = transformTryCatchFinally;
var LabelPair = /** @class */ (function () {
    function LabelPair(beginLabel, endLabel) {
        this.beginLabel = beginLabel;
        this.endLabel = endLabel;
    }
    LabelPair.prototype.getBeginLabel = function () {
        return this.beginLabel;
    };
    LabelPair.prototype.getEndLabel = function () {
        return this.endLabel;
    };
    return LabelPair;
}());
exports.LabelPair = LabelPair;
var CatchTable = /** @class */ (function () {
    function CatchTable(pandaGen, catchBeginLabel, labelPair) {
        this.labelPairs = [];
        this.catchBeginLabel = catchBeginLabel;
        this.labelPairs.push(labelPair);
        this.depth = TryStatement.getcurrentTryStatementDepth();
        pandaGen.getCatchMap().set(catchBeginLabel, this);
    }
    CatchTable.prototype.getLabelPairs = function () {
        return this.labelPairs;
    };
    CatchTable.prototype.getCatchBeginLabel = function () {
        return this.catchBeginLabel;
    };
    CatchTable.prototype.getDepth = function () {
        return this.depth;
    };
    // split the last labelPair after inline finally.
    CatchTable.prototype.splitLabelPair = function (inlinedLabelPair) {
        var lastLabelPair = this.labelPairs.pop();
        if (lastLabelPair) {
            this.labelPairs.push(new LabelPair(lastLabelPair.getBeginLabel(), inlinedLabelPair.getBeginLabel()));
            this.labelPairs.push(new LabelPair(inlinedLabelPair.getEndLabel(), lastLabelPair.getEndLabel()));
        }
    };
    return CatchTable;
}());
exports.CatchTable = CatchTable;
// record the info of the tryStatement
var TryStatement = /** @class */ (function () {
    function TryStatement(stmt, catchTable, trybuilder) {
        TryStatement.currentTryStatementDepth++;
        this.outer = TryStatement.currentTryStatement;
        this.stmt = stmt;
        this.catchTable = catchTable;
        if (trybuilder) {
            this.trybuilder = trybuilder;
        }
        TryStatement.currentTryStatement = this;
    }
    TryStatement.prototype.destroy = function () {
        TryStatement.currentTryStatementDepth--;
        TryStatement.currentTryStatement = this.outer;
    };
    TryStatement.setCurrentTryStatement = function (tryStatement) {
        TryStatement.currentTryStatement = tryStatement;
    };
    TryStatement.getCurrentTryStatement = function () {
        return TryStatement.currentTryStatement;
    };
    TryStatement.getcurrentTryStatementDepth = function () {
        return TryStatement.currentTryStatementDepth;
    };
    TryStatement.prototype.getOuterTryStatement = function () {
        return this.outer;
    };
    TryStatement.prototype.getStatement = function () {
        return this.stmt;
    };
    TryStatement.prototype.getCatchTable = function () {
        return this.catchTable;
    };
    TryStatement.currentTryStatementDepth = 0;
    return TryStatement;
}());
exports.TryStatement = TryStatement;
var TryBuilderBase = /** @class */ (function () {
    function TryBuilderBase(compiler, pandaGen, Stmt) {
        this.compiler = compiler;
        this.pandaGen = pandaGen;
        this.stmt = Stmt;
    }
    return TryBuilderBase;
}());
exports.TryBuilderBase = TryBuilderBase;
// generate the bytecode for TryStatement
// compiler just handle the basic controlFlow
var TryBuilder = /** @class */ (function (_super) {
    __extends(TryBuilder, _super);
    function TryBuilder(compiler, pandaGen, tryStmt) {
        return _super.call(this, compiler, pandaGen, tryStmt) || this;
    }
    TryBuilder.prototype.compileTryBlock = function (catchTable) {
        if (this.stmt.finallyBlock) {
            this.tryStatement = new TryStatement(this.stmt, catchTable, this);
        }
        else {
            this.tryStatement = new TryStatement(this.stmt, catchTable);
        }
        this.compiler.compileStatement(this.stmt.tryBlock);
        // when compiler is out of TryBlock, reset tryStatement
        this.tryStatement.destroy();
    };
    TryBuilder.prototype.compileFinallyBlockIfExisted = function () {
        if (this.stmt.finallyBlock) {
            this.compiler.compileStatement(this.stmt.finallyBlock);
        }
    };
    TryBuilder.prototype.compileExceptionHandler = function () {
        var _this = this;
        var catchClause = this.stmt.catchClause;
        if (catchClause) {
            this.compiler.pushScope(catchClause);
            compileCatchClauseVariableDeclaration(this.compiler, catchClause.variableDeclaration);
            var catchBlock = catchClause.block;
            catchBlock.statements.forEach(function (stmt) { return _this.compiler.compileStatement(stmt); });
            this.compiler.popScope();
        }
        else {
            // finallyBlock rethrow exception when it catch the exception
            var exceptionVreg = this.pandaGen.getTemp();
            this.pandaGen.storeAccumulator(this.stmt, exceptionVreg);
            this.compiler.compileStatement(this.stmt.finallyBlock);
            this.pandaGen.loadAccumulator(this.stmt, exceptionVreg);
            this.pandaGen["throw"](this.stmt);
            this.pandaGen.freeTemps(exceptionVreg);
        }
    };
    TryBuilder.prototype.compileFinalizer = function (cfc, continueTargetLabel) {
        this.compiler.compileStatement(this.stmt.finallyBlock);
    };
    return TryBuilder;
}(TryBuilderBase));
exports.TryBuilder = TryBuilder;
var TryBuilderWithForOf = /** @class */ (function (_super) {
    __extends(TryBuilderWithForOf, _super);
    function TryBuilderWithForOf(compiler, pandaGen, forOfStmt, doneReg, iterator, labelTarget, hasLoopEnv, loopEnv) {
        var _this = _super.call(this, compiler, pandaGen, forOfStmt) || this;
        _this.labelTarget = labelTarget;
        _this.doneReg = doneReg;
        _this.iterator = iterator;
        _this.hasLoopEnv = hasLoopEnv;
        _this.loopEnv = loopEnv ? loopEnv : undefined;
        return _this;
    }
    TryBuilderWithForOf.prototype.compileTryBlock = function (catchTable) {
        var stmt = this.stmt;
        var compiler = this.compiler;
        var pandaGen = this.pandaGen;
        this.tryStatement = new TryStatement(stmt, catchTable, this);
        var resultReg = this.pandaGen.getTemp();
        var isDeclaration = false;
        var loopScope = compiler.getRecorder().getScopeOfNode(stmt);
        var createLoopEnvAtBegining = false;
        if (ts.isVariableDeclarationList(stmt.initializer)) {
            isDeclaration = true;
            if (this.hasLoopEnv) {
                var decl = stmt.initializer.declarations[0];
                var declKind = astutils.getVarDeclarationKind(decl);
                if (declKind == variable_1.VarDeclarationKind.LET || declKind == variable_1.VarDeclarationKind.CONST) {
                    createLoopEnvAtBegining = true;
                }
            }
        }
        pandaGen.loadAccumulator(stmt, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True));
        pandaGen.storeAccumulator(stmt, this.doneReg);
        pandaGen.label(stmt, this.labelTarget.getContinueTargetLabel());
        if (this.hasLoopEnv && createLoopEnvAtBegining) {
            pandaGen.createLexEnv(stmt, this.loopEnv, loopScope);
            compiler.pushEnv(this.loopEnv);
        }
        this.compileIteratorNext(stmt, pandaGen, this.iterator, resultReg);
        pandaGen.loadObjProperty(stmt, resultReg, "done");
        pandaGen.jumpIfTrue(stmt, this.labelTarget.getBreakTargetLabel());
        pandaGen.loadObjProperty(stmt, resultReg, "value");
        pandaGen.storeAccumulator(stmt, resultReg);
        pandaGen.loadAccumulator(stmt, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False));
        pandaGen.storeAccumulator(stmt, this.doneReg);
        var lref = lreference_1.LReference.generateLReference(this.compiler, stmt.initializer, isDeclaration);
        pandaGen.loadAccumulator(stmt, resultReg);
        lref.setValue();
        if (this.hasLoopEnv && !createLoopEnvAtBegining) {
            pandaGen.createLexEnv(stmt, this.loopEnv, loopScope);
            compiler.pushEnv(this.loopEnv);
        }
        this.compiler.compileStatement(stmt.statement);
        this.tryStatement.destroy();
        pandaGen.freeTemps(resultReg);
    };
    TryBuilderWithForOf.prototype.compileFinallyBlockIfExisted = function () { };
    TryBuilderWithForOf.prototype.compileExceptionHandler = function () {
        var pandaGen = this.pandaGen;
        var noReturn = new irnodes_1.Label();
        var exceptionVreg = pandaGen.getTemp();
        pandaGen.storeAccumulator(this.stmt, exceptionVreg);
        pandaGen.loadAccumulator(this.stmt, this.doneReg);
        pandaGen.condition(this.stmt.expression, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True), noReturn);
        // Iterator Close
        pandaGen.loadObjProperty(this.stmt, this.iterator.getObject(), "return");
        pandaGen.storeAccumulator(this.stmt, this.iterator.getNextMethod());
        pandaGen.condition(this.stmt, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), noReturn);
        pandaGen.call(this.stmt, [this.iterator.getNextMethod(), this.iterator.getObject()], true);
        pandaGen.label(this.stmt, noReturn);
        pandaGen.loadAccumulator(this.stmt, exceptionVreg);
        pandaGen["throw"](this.stmt);
        pandaGen.freeTemps(exceptionVreg);
    };
    TryBuilderWithForOf.prototype.compileFinalizer = function (cfc, continueTargetLabel) {
        if (cfc == compiler_1.ControlFlowChange.Break || continueTargetLabel != this.labelTarget.getContinueTargetLabel()) {
            var noReturn = new irnodes_1.Label();
            var innerResult = this.pandaGen.getTemp();
            this.pandaGen.loadObjProperty(this.stmt, this.iterator.getObject(), "return");
            this.pandaGen.storeAccumulator(this.stmt, this.iterator.getNextMethod());
            this.pandaGen.condition(this.stmt, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.undefined), noReturn);
            this.pandaGen.call(this.stmt, [this.iterator.getNextMethod(), this.iterator.getObject()], true);
            this.pandaGen.storeAccumulator(this.stmt, innerResult);
            this.pandaGen.throwIfNotObject(this.stmt, innerResult);
            this.pandaGen.label(this.stmt, noReturn);
            this.pandaGen.freeTemps(innerResult);
        }
    };
    TryBuilderWithForOf.prototype.compileIteratorNext = function (stmt, pandagen, iterator, resultObj) {
        pandagen.call(stmt, [iterator.getNextMethod(), iterator.getObject()], true);
        pandagen.storeAccumulator(stmt, resultObj);
        // Support Async Await further
        pandagen.throwIfNotObject(stmt, resultObj);
    };
    return TryBuilderWithForOf;
}(TryBuilderBase));
exports.TryBuilderWithForOf = TryBuilderWithForOf;
function compileCatchClauseVariableDeclaration(compiler, param) {
    if (param) {
        compiler.compileVariableDeclaration(param);
    }
}
function updateCatchTables(inlinedTry, targetTry, inlinedLabelPair) {
    for (; inlinedTry != targetTry; inlinedTry = inlinedTry === null || inlinedTry === void 0 ? void 0 : inlinedTry.getOuterTryStatement()) {
        inlinedTry.getCatchTable().splitLabelPair(inlinedLabelPair);
    }
    targetTry.getCatchTable().splitLabelPair(inlinedLabelPair);
}
exports.updateCatchTables = updateCatchTables;
function generateCatchTables(catchMap) {
    var catchTableList = [];
    catchMap.forEach(function (catchTable) {
        catchTableList.push(catchTable);
    });
    catchTableList.sort(function (a, b) { return (b.getDepth() - a.getDepth()); });
    return catchTableList;
}
exports.generateCatchTables = generateCatchTables;
//# sourceMappingURL=tryStatement.js.map