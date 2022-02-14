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
exports.compileForInStatement = exports.compileForStatement = exports.compileWhileStatement = exports.compileDoStatement = void 0;
var ts = __importStar(require("typescript"));
var lreference_1 = require("../base/lreference");
var vregisterCache_1 = require("../base/vregisterCache");
var irnodes_1 = require("../irnodes");
var labelTarget_1 = require("./labelTarget");
function compileDoStatement(stmt, compiler) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    var loopStartLabel = new irnodes_1.Label();
    var loopEndLabel = new irnodes_1.Label();
    var conditionLabel = new irnodes_1.Label();
    var labelTarget = new labelTarget_1.LabelTarget(loopEndLabel, conditionLabel);
    labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
    labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, labelTarget);
    var loopScope = compiler.getRecorder().getScopeOfNode(stmt);
    var needCreateLoopEnv = loopScope.need2CreateLexEnv() ? true : false;
    var loopEnv = pandaGen.getTemp();
    pandaGen.label(stmt, loopStartLabel);
    if (needCreateLoopEnv) {
        pandaGen.createLexEnv(stmt, loopEnv, loopScope);
        compiler.pushEnv(loopEnv);
    }
    compiler.compileStatement(stmt.statement);
    pandaGen.label(stmt, conditionLabel);
    compiler.compileCondition(stmt.expression, loopEndLabel);
    if (needCreateLoopEnv) {
        pandaGen.popLexicalEnv(stmt);
    }
    pandaGen.branch(stmt, loopStartLabel);
    pandaGen.label(stmt, loopEndLabel);
    if (needCreateLoopEnv) {
        pandaGen.popLexicalEnv(stmt);
        compiler.popEnv();
    }
    labelTarget_1.LabelTarget.popLabelTarget();
    pandaGen.freeTemps(loopEnv);
    compiler.popScope();
}
exports.compileDoStatement = compileDoStatement;
function compileWhileStatement(stmt, compiler) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    var loopStartLabel = new irnodes_1.Label();
    var loopEndLabel = new irnodes_1.Label();
    var labelTarget = new labelTarget_1.LabelTarget(loopEndLabel, loopStartLabel);
    labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
    labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, new labelTarget_1.LabelTarget(loopEndLabel, loopStartLabel));
    var loopScope = compiler.getRecorder().getScopeOfNode(stmt);
    var needCreateLoopEnv = loopScope.need2CreateLexEnv() ? true : false;
    var loopEnv = pandaGen.getTemp();
    pandaGen.label(stmt, loopStartLabel);
    compiler.compileCondition(stmt.expression, loopEndLabel);
    if (needCreateLoopEnv) {
        pandaGen.createLexEnv(stmt, loopEnv, loopScope);
        compiler.pushEnv(loopEnv);
    }
    compiler.compileStatement(stmt.statement);
    if (needCreateLoopEnv) {
        pandaGen.popLexicalEnv(stmt);
    }
    pandaGen.branch(stmt, loopStartLabel);
    pandaGen.label(stmt, loopEndLabel);
    if (needCreateLoopEnv) {
        pandaGen.popLexicalEnv(stmt);
        compiler.popEnv();
    }
    labelTarget_1.LabelTarget.popLabelTarget();
    pandaGen.freeTemps(loopEnv);
    compiler.popScope();
}
exports.compileWhileStatement = compileWhileStatement;
function compileForStatement(stmt, compiler) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    // determine if loopenv need to be created
    var loopScope = compiler.getRecorder().getScopeOfNode(stmt);
    var needCreateLoopEnv = loopScope.need2CreateLexEnv() ? true : false;
    var loopEnv = pandaGen.getTemp();
    var createEnvAtBegining = false;
    if (needCreateLoopEnv) {
        // determine the location where loopenv should be created
        if (stmt.initializer && ts.isVariableDeclarationList(stmt.initializer)) {
            loopScope.getName2variable().forEach(function (v) {
                if (v.isLetOrConst() && v.isLexVar) {
                    createEnvAtBegining = true;
                }
            });
        }
    }
    var loopStartLabel = new irnodes_1.Label();
    var loopEndLabel = new irnodes_1.Label();
    var incLabel = new irnodes_1.Label();
    var labelTarget = new labelTarget_1.LabelTarget(loopEndLabel, incLabel);
    labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
    labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, labelTarget);
    if (stmt.initializer && ts.isVariableDeclarationList(stmt.initializer) && createEnvAtBegining && needCreateLoopEnv) {
        pandaGen.createLexEnv(stmt, loopEnv, loopScope);
        compiler.pushEnv(loopEnv);
        var declList = stmt.initializer;
        declList.declarations.forEach(function (decl) { return compiler.compileVariableDeclaration(decl); });
        // loopCondition
        pandaGen.label(stmt, loopStartLabel);
        if (stmt.condition) {
            compiler.compileCondition(stmt.condition, loopEndLabel);
        }
        // loopBody
        compiler.compileStatement(stmt.statement);
        // loopIncrementor
        pandaGen.label(stmt, incLabel);
        var variables_1 = new Map();
        var tmpVregs_1 = new Array();
        loopScope.getName2variable().forEach(function (v, name) {
            if (v.isLexVar && v.isLetOrConst()) {
                var tmp = pandaGen.getTemp();
                tmpVregs_1.push(tmp);
                var varInfo = loopScope.find(name);
                variables_1.set(varInfo, tmp);
                compiler.loadTarget(stmt, varInfo);
                pandaGen.storeAccumulator(stmt, tmp);
            }
        });
        // pop the current loopenv and create a new loopenv before the next iteration
        pandaGen.popLexicalEnv(stmt);
        pandaGen.createLexEnv(stmt, loopEnv, loopScope);
        variables_1.forEach(function (reg, varInfo) {
            var slot = varInfo.v.idxLex;
            // emitStore is not used here to avoid dead-zone check within it, just use storeLexcialVar
            pandaGen.storeLexicalVar(stmt, varInfo.level, slot, reg);
        });
        // must compile incrementor after store the previous value into the corresponding slot, otherwise will fall into a dead loop
        if (stmt.incrementor) {
            compiler.compileExpression(stmt.incrementor);
        }
        pandaGen.branch(stmt, loopStartLabel);
        pandaGen.label(stmt, loopEndLabel);
        pandaGen.popLexicalEnv(stmt);
        compiler.popEnv();
        pandaGen.freeTemps.apply(pandaGen, tmpVregs_1);
    }
    else { // compile for in fast mode
        if (stmt.initializer) {
            if (ts.isVariableDeclarationList(stmt.initializer)) {
                var declList = stmt.initializer;
                declList.declarations.forEach(function (decl) { return compiler.compileVariableDeclaration(decl); });
            }
            else {
                compiler.compileExpression(stmt.initializer);
            }
        }
        // loopCondition
        pandaGen.label(stmt, loopStartLabel);
        // createLoopEnv if needed
        if (needCreateLoopEnv) {
            pandaGen.createLexEnv(stmt, loopEnv, loopScope);
            compiler.pushEnv(loopEnv);
        }
        if (stmt.condition) {
            compiler.compileCondition(stmt.condition, loopEndLabel);
        }
        // loopBody
        compiler.compileStatement(stmt.statement);
        // loopIncrementor
        pandaGen.label(stmt, incLabel);
        if (stmt.incrementor) {
            compiler.compileExpression(stmt.incrementor);
        }
        // pop the current loopenv before next iteration
        if (needCreateLoopEnv) {
            pandaGen.popLexicalEnv(stmt);
        }
        pandaGen.branch(stmt, loopStartLabel);
        pandaGen.label(stmt, loopEndLabel);
        if (needCreateLoopEnv) {
            pandaGen.popLexicalEnv(stmt);
            compiler.popEnv();
        }
    }
    labelTarget_1.LabelTarget.popLabelTarget();
    pandaGen.freeTemps(loopEnv);
    compiler.popScope();
}
exports.compileForStatement = compileForStatement;
function compileForInStatement(stmt, compiler) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    // init label info;
    var loopStartLabel = new irnodes_1.Label();
    var loopEndLabel = new irnodes_1.Label();
    var labelTarget = new labelTarget_1.LabelTarget(loopEndLabel, loopStartLabel);
    labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
    labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, labelTarget);
    // determine the location where env should be created
    var loopScope = compiler.getRecorder().getScopeOfNode(stmt);
    var needCreateLexEnv = loopScope.need2CreateLexEnv() ? true : false;
    var createEnvAtBegining = false;
    var loopEnv = pandaGen.getTemp();
    if (needCreateLexEnv && ts.isVariableDeclarationList(stmt.initializer)) {
        loopScope.getName2variable().forEach(function (v) {
            if (v.isLetOrConst() && v.isLexVar) {
                createEnvAtBegining = true;
            }
        });
    }
    var iterReg = pandaGen.getTemp();
    var propName = pandaGen.getTemp();
    // create enumerator
    compiler.compileExpression(stmt.expression);
    pandaGen.getPropIterator(stmt);
    pandaGen.storeAccumulator(stmt, iterReg);
    pandaGen.label(stmt, loopStartLabel);
    if (needCreateLexEnv && createEnvAtBegining) {
        pandaGen.createLexEnv(stmt, loopEnv, loopScope);
        compiler.pushEnv(loopEnv);
    }
    // get next prop of enumerator
    pandaGen.getNextPropName(stmt, iterReg);
    pandaGen.storeAccumulator(stmt, propName);
    pandaGen.condition(stmt, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), loopEndLabel);
    var lref = lreference_1.LReference.generateLReference(compiler, stmt.initializer, false);
    pandaGen.loadAccumulator(stmt, propName);
    lref.setValue();
    if (needCreateLexEnv && !createEnvAtBegining) {
        pandaGen.createLexEnv(stmt, loopEnv, loopScope);
        compiler.pushEnv(loopEnv);
    }
    compiler.compileStatement(stmt.statement);
    if (needCreateLexEnv) {
        pandaGen.popLexicalEnv(stmt);
    }
    pandaGen.branch(stmt, loopStartLabel);
    pandaGen.label(stmt, loopEndLabel);
    if (needCreateLexEnv) {
        pandaGen.popLexicalEnv(stmt);
        compiler.popEnv();
    }
    pandaGen.freeTemps(loopEnv, iterReg, propName);
    labelTarget_1.LabelTarget.popLabelTarget();
    compiler.popScope();
}
exports.compileForInStatement = compileForInStatement;
//# sourceMappingURL=loopStatement.js.map