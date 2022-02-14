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
exports.Compiler = exports.ControlFlowChange = void 0;
/**
 * The compiler implementation.
 * The compiler traverses TypeScript's AST, splits operations into sinmple ones
 * and asks Pandagen to generate bytecode.
 *
 * This file shold not contain import from irnodes.ts.
 * The interface of PandaGen shold be enough.
 */
var ts = __importStar(require("typescript"));
var astutils = __importStar(require("./astutils"));
var lreference_1 = require("./base/lreference");
var util_1 = require("./base/util");
var vregisterCache_1 = require("./base/vregisterCache");
var debuginfo_1 = require("./debuginfo");
var diagnostic_1 = require("./diagnostic");
var arrayLiteralExpression_1 = require("./expression/arrayLiteralExpression");
var callExpression_1 = require("./expression/callExpression");
var memberAccessExpression_1 = require("./expression/memberAccessExpression");
var metaProperty_1 = require("./expression/metaProperty");
var newExpression_1 = require("./expression/newExpression");
var numericLiteral_1 = require("./expression/numericLiteral");
var objectLiteralExpression_1 = require("./expression/objectLiteralExpression");
var parenthesizedExpression_1 = require("./expression/parenthesizedExpression");
var regularExpression_1 = require("./expression/regularExpression");
var stringLiteral_1 = require("./expression/stringLiteral");
var templateExpression_1 = require("./expression/templateExpression");
var yieldExpression_1 = require("./expression/yieldExpression");
var asyncFunctionBuilder_1 = require("./function/asyncFunctionBuilder");
var functionBuilder_1 = require("./function/functionBuilder");
var generatorFunctionBuilder_1 = require("./function/generatorFunctionBuilder");
var hoisting_1 = require("./hoisting");
var irnodes_1 = require("./irnodes");
var jshelpers = __importStar(require("./jshelpers"));
var log_1 = require("./log");
var scope_1 = require("./scope");
var classStatement_1 = require("./statement/classStatement");
var forOfStatement_1 = require("./statement/forOfStatement");
var labelTarget_1 = require("./statement/labelTarget");
var loopStatement_1 = require("./statement/loopStatement");
var returnStatement_1 = require("./statement/returnStatement");
var switchStatement_1 = require("./statement/switchStatement");
var tryStatement_1 = require("./statement/tryStatement");
var strictMode_1 = require("./strictMode");
var syntaxCheckHelper_1 = require("./syntaxCheckHelper");
var variable_1 = require("./variable");
var ControlFlowChange;
(function (ControlFlowChange) {
    ControlFlowChange[ControlFlowChange["Continue"] = 0] = "Continue";
    ControlFlowChange[ControlFlowChange["Break"] = 1] = "Break";
})(ControlFlowChange = exports.ControlFlowChange || (exports.ControlFlowChange = {}));
var Compiler = /** @class */ (function () {
    function Compiler(node, pandaGen, compilerDriver, recorder) {
        this.debugTag = "compiler";
        this.envUnion = new Array();
        this.rootNode = node;
        this.pandaGen = pandaGen;
        this.compilerDriver = compilerDriver;
        this.recorder = recorder;
        this.funcBuilder = new functionBuilder_1.FunctionBuilder();
        // At the beginning of function compile, alloc pandagen.local for 4funcObj/newTarget/this/parameters, because of
        // maybe no one used this parameter, will get undefined for RA
        this.scope = this.pandaGen.getScope();
        var parameters = this.scope.getParameters();
        for (var i = 0; i < parameters.length; ++i) {
            this.pandaGen.getVregForVariable(parameters[i]);
        }
        // spare v3 to save the currrent lexcial env
        vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.LexEnv);
        this.envUnion.push(vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.LexEnv));
        this.pandaGen.loadAccFromArgs(this.rootNode);
    }
    Compiler.prototype.compile = function () {
        this.compileLexicalBindingForArrowFunction();
        if (this.rootNode.kind == ts.SyntaxKind.SourceFile) {
            this.compileSourceFileOrBlock(this.rootNode);
        }
        else {
            this.compileFunctionLikeDeclaration(this.rootNode);
        }
    };
    Compiler.prototype.pushEnv = function (env) {
        this.envUnion.push(env);
    };
    Compiler.prototype.popEnv = function () {
        this.envUnion.pop();
    };
    Compiler.prototype.getCurrentEnv = function () {
        return this.envUnion[this.envUnion.length - 1];
    };
    Compiler.prototype.compileLexicalBindingForArrowFunction = function () {
        var rootNode = this.rootNode;
        if (!ts.isArrowFunction(rootNode)) {
            var childVariableScopes = this.scope.getChildVariableScope();
            var hasAFChild_1 = false;
            childVariableScopes.forEach(function (scope) {
                var funcNode = scope.getBindingNode();
                if (ts.isArrowFunction(funcNode)) {
                    hasAFChild_1 = true;
                }
            });
            if (hasAFChild_1) {
                this.storeSpecialArg2LexEnv("4newTarget");
                this.storeSpecialArg2LexEnv("arguments");
                if (ts.isConstructorDeclaration(rootNode) && rootNode.parent.heritageClauses) {
                    this.storeSpecialArg2LexEnv("4funcObj");
                    return;
                }
                this.storeSpecialArg2LexEnv("this");
            }
        }
    };
    Compiler.prototype.storeSpecialArg2LexEnv = function (arg) {
        var variableInfo = this.scope.find(arg);
        var v = variableInfo.v;
        if (v && v.isLexVar) {
            var pandaGen = this.pandaGen;
            var vreg = pandaGen.getVregForVariable(variableInfo.v);
            var slot = variableInfo.v.idxLex;
            pandaGen.storeLexicalVar(this.rootNode, variableInfo.level, slot, vreg);
        }
    };
    Compiler.prototype.compileSourceFileOrBlock = function (body) {
        var _this = this;
        var pandaGen = this.pandaGen;
        var statements = body.statements;
        var unreachableFlag = false;
        statements.forEach(function (stmt) {
            _this.compileStatement(stmt);
            if (stmt.kind == ts.SyntaxKind.ReturnStatement) {
                unreachableFlag = true;
            }
        });
        if (body.parent && ts.isConstructorDeclaration(body.parent)) {
            classStatement_1.compileConstructor(this, body.parent, unreachableFlag);
            return;
        }
        if (!unreachableFlag) { // exit GlobalScopefunction or Function Block return
            if (this.funcBuilder instanceof asyncFunctionBuilder_1.AsyncFunctionBuilder) {
                this.funcBuilder.resolve(debuginfo_1.NodeKind.Invalid, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
                pandaGen["return"](debuginfo_1.DebugInfo.getLastNode());
            }
            else {
                pandaGen.returnUndefined(debuginfo_1.DebugInfo.getLastNode());
            }
        }
    };
    Compiler.prototype.compileFunctionBody = function (kind, body) {
        var pandaGen = this.pandaGen;
        if (body.kind == ts.SyntaxKind.Block) {
            this.pushScope(body);
            this.compileSourceFileOrBlock(body);
            this.popScope();
        }
        else if (kind == ts.SyntaxKind.ArrowFunction) {
            this.compileExpression(body);
            var retValue = pandaGen.getTemp();
            pandaGen.storeAccumulator(body, retValue);
            if (this.funcBuilder instanceof asyncFunctionBuilder_1.AsyncFunctionBuilder) {
                this.funcBuilder.resolve(body, retValue);
                pandaGen["return"](debuginfo_1.NodeKind.Invalid);
            }
            else {
                pandaGen.loadAccumulator(body, retValue);
            }
            pandaGen.freeTemps(retValue);
            pandaGen["return"](debuginfo_1.NodeKind.Invalid);
        }
        else {
            throw new Error("Node " + this.getNodeName(body) + " is unimplemented as a function body");
        }
    };
    Compiler.prototype.compileFunctionParameterDeclaration = function (decl) {
        var pandaGen = this.pandaGen;
        for (var index = 0; index < decl.parameters.length; ++index) {
            var param = decl.parameters[index];
            var parameter = param.name;
            var paramRef = lreference_1.LReference.generateLReference(this, parameter, true);
            var variable = void 0;
            if (ts.isIdentifier(parameter)) {
                variable = paramRef.variable.v;
            }
            else if (util_1.isBindingPattern(parameter)) {
                var paramName = index.toString() + "pattern";
                variable = this.scope.find(paramName).v;
            }
            var paramReg = pandaGen.getVregForVariable(variable);
            if (param.dotDotDotToken) {
                pandaGen.copyRestArgs(param, index);
                pandaGen.storeAccumulator(param, paramReg);
            }
            if (param.initializer) {
                var endLabel = new irnodes_1.Label();
                pandaGen.loadAccumulator(decl, paramReg);
                pandaGen.condition(decl, ts.SyntaxKind.EqualsEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), endLabel);
                this.compileExpression(param.initializer);
                pandaGen.storeAccumulator(param, paramReg);
                pandaGen.label(decl, endLabel);
            }
            if (util_1.isBindingPattern(parameter) ||
                (ts.isIdentifier(parameter) && (variable.isLexVar))) {
                pandaGen.loadAccumulator(param, paramReg);
                paramRef.setValue();
            }
        }
    };
    Compiler.prototype.createFuncBuilder = function (decl) {
        var pandaGen = this.pandaGen;
        if (decl.modifiers) {
            for (var i = 0; i < decl.modifiers.length; i++) {
                if (decl.modifiers[i].kind == ts.SyntaxKind.AsyncKeyword) {
                    // async generator
                    if (decl.asteriskToken) {
                        throw new Error("Async generator is not supported");
                    }
                    else { // async
                        return new asyncFunctionBuilder_1.AsyncFunctionBuilder(pandaGen);
                    }
                }
            }
        }
        if (decl.asteriskToken) {
            return new generatorFunctionBuilder_1.GeneratorFunctionBuilder(pandaGen, this);
        }
        return new functionBuilder_1.FunctionBuilder();
    };
    Compiler.prototype.compileFunctionLikeDeclaration = function (decl) {
        var pandaGen = this.pandaGen;
        this.compileFunctionParameterDeclaration(decl);
        if (decl.kind == ts.SyntaxKind.FunctionExpression) {
            if (decl.name) {
                var funcName = jshelpers.getTextOfIdentifierOrLiteral(decl.name);
                pandaGen.getScope().addFuncName(funcName);
            }
        }
        this.funcBuilder = this.createFuncBuilder(decl);
        this.funcBuilder.prepare(decl, this.recorder);
        if (decl.body) {
            this.compileFunctionBody(decl.kind, decl.body);
        }
        this.funcBuilder.cleanUp(decl);
    };
    Compiler.prototype.compileStatement = function (stmt) {
        // for debug info
        this.pandaGen.setFirstStmt(stmt);
        // Please keep order of cases the same as in types.ts
        log_1.LOGD(this.debugTag, "compile statement: " + this.getNodeName(stmt));
        switch (stmt.kind) {
            case ts.SyntaxKind.Block: // line 273
                this.compileBlock(stmt);
                break;
            case ts.SyntaxKind.EmptyStatement: // line 274
                break;
            case ts.SyntaxKind.VariableStatement: // line 275
                this.compileVariableStatement(stmt);
                break;
            case ts.SyntaxKind.ExpressionStatement: // line 276
                this.compileExpression(stmt.expression);
                break;
            case ts.SyntaxKind.IfStatement: // line 277
                this.compileIfStatement(stmt);
                break;
            case ts.SyntaxKind.DoStatement: // line 278
                loopStatement_1.compileDoStatement(stmt, this);
                break;
            case ts.SyntaxKind.WhileStatement: // line 279
                loopStatement_1.compileWhileStatement(stmt, this);
                break;
            case ts.SyntaxKind.ForStatement: // line 280
                loopStatement_1.compileForStatement(stmt, this);
                break;
            case ts.SyntaxKind.ForInStatement: //line 281
                loopStatement_1.compileForInStatement(stmt, this);
                break;
            case ts.SyntaxKind.ForOfStatement: //line 282
                forOfStatement_1.compileForOfStatement(stmt, this);
                break;
            case ts.SyntaxKind.ContinueStatement: // line 283
                this.compileContinueStatement(stmt);
                break;
            case ts.SyntaxKind.BreakStatement: // line 284
                this.compileBreakStatement(stmt);
                break;
            case ts.SyntaxKind.ReturnStatement: // line 285
                returnStatement_1.compileReturnStatement(stmt, this);
                break;
            case ts.SyntaxKind.SwitchStatement: // line 287
                switchStatement_1.compileSwitchStatement(stmt, this);
                break;
            case ts.SyntaxKind.LabeledStatement: // line 288
                this.compileLabeledStatement(stmt);
                break;
            case ts.SyntaxKind.ThrowStatement: // line 289
                this.compileThrowStatement(stmt);
                break;
            case ts.SyntaxKind.TryStatement: // line 290
                this.compileTryStatement(stmt);
                break;
            case ts.SyntaxKind.DebuggerStatement: // line 291
                this.pandaGen["debugger"](stmt);
                break;
            case ts.SyntaxKind.FunctionDeclaration: // line 294
                this.compileFunctionDeclaration(stmt);
                break;
            case ts.SyntaxKind.ClassDeclaration:
                classStatement_1.compileClassDeclaration(this, stmt);
            case ts.SyntaxKind.ImportDeclaration:
                break;
            case ts.SyntaxKind.ExportAssignment:
                this.compileExportAssignment(stmt);
                break;
            case ts.SyntaxKind.ExportDeclaration:
                break;
            default:
                throw new Error("Statement " + this.getNodeName(stmt) + " is unimplemented");
        }
    };
    Compiler.prototype.compileBlock = function (block) {
        var _this = this;
        this.pushScope(block);
        hoisting_1.hoistFunctionInBlock(this.scope, this.pandaGen, strictMode_1.isStrictMode(block), this);
        block.statements.forEach(function (stmt) { return _this.compileStatement(stmt); });
        this.popScope();
    };
    Compiler.prototype.compileVariableStatement = function (stmt) {
        var _this = this;
        var declList = stmt.declarationList;
        var isExported = util_1.hasExportKeywordModifier(stmt);
        declList.declarations.forEach(function (decl) {
            _this.compileVariableDeclaration(decl, isExported);
        });
    };
    Compiler.prototype.compileVariableDeclaration = function (decl, isExported) {
        if (isExported === void 0) { isExported = false; }
        if (isExported) {
            var name_1 = jshelpers.getTextOfIdentifierOrLiteral(decl.name);
            util_1.setVariableExported(name_1, this.getCurrentScope());
        }
        var lref = lreference_1.LReference.generateLReference(this, decl.name, true);
        if (decl.initializer) {
            this.compileExpression(decl.initializer);
        }
        else {
            // global var without init should not be assigned undefined twice
            if (astutils.getVarDeclarationKind(decl) == variable_1.VarDeclarationKind.VAR) {
                return;
            }
            if ((astutils.getVarDeclarationKind(decl) == variable_1.VarDeclarationKind.LET)
                && decl.parent.kind != ts.SyntaxKind.CatchClause) {
                this.pandaGen.loadAccumulator(decl, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.undefined));
            }
        }
        lref.setValue();
    };
    Compiler.prototype.compileIfStatement = function (stmt) {
        this.pushScope(stmt);
        var ifElseLabel = new irnodes_1.Label();
        var ifEndLabel = new irnodes_1.Label();
        this.compileCondition(stmt.expression, stmt.elseStatement ? ifElseLabel : ifEndLabel);
        this.compileStatement(stmt.thenStatement);
        if (stmt.elseStatement) {
            var flowNode = jshelpers.getFlowNode(stmt);
            if (flowNode !== undefined) {
                if (!(flowNode.flags & ts.FlowFlags.Unreachable)) { // if not unreachable
                    this.pandaGen.branch(debuginfo_1.DebugInfo.getLastNode(), ifEndLabel);
                }
            }
            this.pandaGen.label(stmt, ifElseLabel);
            this.compileStatement(stmt.elseStatement);
        }
        this.pandaGen.label(stmt, ifEndLabel);
        this.popScope();
    };
    Compiler.prototype.compileContinueStatement = function (stmt) {
        var continueLabelTarget = labelTarget_1.LabelTarget.getLabelTarget(stmt);
        this.compileFinallyBeforeCFC(continueLabelTarget.getTryStatement(), ControlFlowChange.Continue, continueLabelTarget.getContinueTargetLabel());
        this.pandaGen.branch(stmt, continueLabelTarget.getContinueTargetLabel());
    };
    Compiler.prototype.compileBreakStatement = function (stmt) {
        var breakLabelTarget = labelTarget_1.LabelTarget.getLabelTarget(stmt);
        this.compileFinallyBeforeCFC(breakLabelTarget.getTryStatement(), ControlFlowChange.Break, undefined);
        this.pandaGen.branch(stmt, breakLabelTarget.getBreakTargetLabel());
    };
    Compiler.prototype.compileLabeledStatement = function (stmt) {
        this.pushScope(stmt);
        var labelName = jshelpers.getTextOfIdentifierOrLiteral(stmt.label);
        var blockEndLabel = undefined;
        // because there is no label in the block statement, we need add the end label.
        if (stmt.statement.kind == ts.SyntaxKind.Block) {
            blockEndLabel = new irnodes_1.Label();
            var labelTarget = new labelTarget_1.LabelTarget(blockEndLabel, undefined);
            labelTarget_1.LabelTarget.updateName2LabelTarget(stmt, labelTarget);
        }
        this.compileStatement(stmt.statement);
        if (blockEndLabel) {
            this.pandaGen.label(stmt, blockEndLabel);
        }
        // because the scope of the label is just in labeled statment, we need to delete it.
        labelTarget_1.LabelTarget.deleteName2LabelTarget(labelName);
        this.popScope();
    };
    Compiler.prototype.compileThrowStatement = function (stmt) {
        var pandaGen = this.pandaGen;
        if (stmt.expression) {
            this.compileExpression(stmt.expression);
        }
        else {
            throw new diagnostic_1.DiagnosticError(stmt, diagnostic_1.DiagnosticCode.Line_break_not_permitted_here);
        }
        pandaGen["throw"](stmt);
    };
    Compiler.prototype.compileFinallyBeforeCFC = function (endTry, cfc, continueTargetLabel) {
        var startTry = tryStatement_1.TryStatement.getCurrentTryStatement();
        var originTry = startTry;
        for (; startTry != endTry; startTry = startTry === null || startTry === void 0 ? void 0 : startTry.getOuterTryStatement()) {
            if (startTry && startTry.trybuilder) {
                var inlineFinallyBegin = new irnodes_1.Label();
                var inlineFinallyEnd = new irnodes_1.Label();
                var inlinedLabelPair = new tryStatement_1.LabelPair(inlineFinallyBegin, inlineFinallyEnd);
                // adjust the current tryStatement before inlining finallyBlock
                var saveTry = tryStatement_1.TryStatement.getCurrentTryStatement();
                tryStatement_1.TryStatement.setCurrentTryStatement(startTry.getOuterTryStatement());
                this.pandaGen.label(startTry.getStatement(), inlineFinallyBegin);
                startTry.trybuilder.compileFinalizer(cfc, continueTargetLabel);
                this.pandaGen.label(startTry.getStatement(), inlineFinallyEnd);
                // restore pandaGen.tryStatement
                tryStatement_1.TryStatement.setCurrentTryStatement(saveTry);
                tryStatement_1.updateCatchTables(originTry, startTry, inlinedLabelPair);
            }
        }
    };
    Compiler.prototype.constructTry = function (node, tryBuilder, endLabel) {
        var pandaGen = this.pandaGen;
        var tryBeginLabel = new irnodes_1.Label();
        var tryEndLabel = new irnodes_1.Label();
        var catchBeginLabel = new irnodes_1.Label();
        var catchEndLabel = endLabel ? endLabel : new irnodes_1.Label();
        var catchTable = new tryStatement_1.CatchTable(pandaGen, catchBeginLabel, new tryStatement_1.LabelPair(tryBeginLabel, tryEndLabel));
        // TryBlock begins
        pandaGen.label(node, tryBeginLabel);
        tryBuilder.compileTryBlock(catchTable);
        pandaGen.label(node, tryEndLabel);
        // Finally after normal try
        tryBuilder.compileFinallyBlockIfExisted();
        if (ts.isForOfStatement(node)) {
            var loopScope = this.getRecorder().getScopeOfNode(node);
            var needCreateLoopEnv = loopScope.need2CreateLexEnv();
            if (needCreateLoopEnv) {
                pandaGen.popLexicalEnv(node);
            }
        }
        pandaGen.branch(node, catchEndLabel);
        // exception Handler
        pandaGen.label(node, catchBeginLabel);
        tryBuilder.compileExceptionHandler();
        if (!endLabel) {
            pandaGen.label(node, catchEndLabel);
        }
    };
    Compiler.prototype.compileTryStatement = function (stmt) {
        this.pushScope(stmt);
        // try-catch-finally statements must have been transformed into
        // two nested try statements with only "catch" or "finally" each.
        if (stmt.catchClause && stmt.finallyBlock) {
            tryStatement_1.transformTryCatchFinally(stmt, this.recorder);
        }
        var tryBuilder = new tryStatement_1.TryBuilder(this, this.pandaGen, stmt);
        this.constructTry(stmt, tryBuilder);
        this.popScope();
    };
    Compiler.prototype.compileFunctionDeclaration = function (decl) {
        if (!decl.name) {
            var hasExport = util_1.hasExportKeywordModifier(decl);
            var hasDefault = util_1.hasDefaultKeywordModifier(decl);
            if (hasExport && hasDefault) {
                if (this.scope instanceof scope_1.ModuleScope) {
                    var internalName = this.compilerDriver.getFuncInternalName(decl, this.recorder);
                    var env = this.getCurrentEnv();
                    this.pandaGen.defineFunction(debuginfo_1.NodeKind.FirstNodeOfFunction, decl, internalName, env);
                    this.pandaGen.storeModuleVar(decl, "default");
                }
                else {
                    throw new Error("SyntaxError: export function declaration cannot in other scope except ModuleScope");
                }
            }
            else {
                throw new Error("Function declaration without name is unimplemented");
            }
        }
    };
    Compiler.prototype.compileExportAssignment = function (stmt) {
        this.compileExpression(stmt.expression);
        this.pandaGen.storeModuleVar(stmt, "default");
    };
    Compiler.prototype.compileCondition = function (expr, ifFalseLabel) {
        var pandaGen = this.pandaGen;
        if (expr.kind == ts.SyntaxKind.BinaryExpression) {
            var binExpr = expr;
            switch (binExpr.operatorToken.kind) {
                case ts.SyntaxKind.LessThanToken: // line 57
                case ts.SyntaxKind.GreaterThanToken: // line 59
                case ts.SyntaxKind.LessThanEqualsToken: // line 60
                case ts.SyntaxKind.GreaterThanEqualsToken: // line 61
                case ts.SyntaxKind.EqualsEqualsToken: // line 62
                case ts.SyntaxKind.ExclamationEqualsToken: // line 63
                case ts.SyntaxKind.EqualsEqualsEqualsToken: // line 64
                case ts.SyntaxKind.ExclamationEqualsEqualsToken: { // line 65
                    // This is a special case
                    // These operators are expressed via cmp instructions and the following
                    // if-else branches. Condition also expressed via cmp instruction and
                    // the following if-else.
                    // the goal of this method is to merge these two sequences of instructions.
                    var lhs = pandaGen.getTemp();
                    this.compileExpression(binExpr.left);
                    pandaGen.storeAccumulator(binExpr, lhs);
                    this.compileExpression(binExpr.right);
                    pandaGen.condition(binExpr, binExpr.operatorToken.kind, lhs, ifFalseLabel);
                    pandaGen.freeTemps(lhs);
                    return;
                }
                case ts.SyntaxKind.AmpersandAmpersandToken: {
                    this.compileExpression(binExpr.left);
                    pandaGen.jumpIfFalse(binExpr, ifFalseLabel);
                    this.compileExpression(binExpr.right);
                    pandaGen.jumpIfFalse(binExpr, ifFalseLabel);
                    return;
                }
                case ts.SyntaxKind.BarBarToken: {
                    var endLabel = new irnodes_1.Label();
                    this.compileExpression(binExpr.left);
                    pandaGen.jumpIfTrue(binExpr, endLabel);
                    this.compileExpression(binExpr.right);
                    pandaGen.jumpIfFalse(binExpr, ifFalseLabel);
                    pandaGen.label(binExpr, endLabel);
                    return;
                }
                default:
                    break;
            }
        }
        // General case including some binExpr i.e.(a+b)
        this.compileExpression(expr);
        pandaGen.jumpIfFalse(expr, ifFalseLabel);
    };
    Compiler.prototype.compileExpression = function (expr) {
        // Please keep order of cases the same as in types.ts
        log_1.LOGD(this.debugTag, "compile expr:" + expr.kind);
        switch (expr.kind) {
            case ts.SyntaxKind.NumericLiteral: // line 34
                numericLiteral_1.compileNumericLiteral(this.pandaGen, expr);
                break;
            case ts.SyntaxKind.BigIntLiteral: // line 35
                break;
            case ts.SyntaxKind.StringLiteral: // line 36
                stringLiteral_1.compileStringLiteral(this.pandaGen, expr);
                break;
            case ts.SyntaxKind.RegularExpressionLiteral: // line 39
                regularExpression_1.compileRegularExpressionLiteral(this, expr);
                break;
            case ts.SyntaxKind.Identifier: // line 109
                this.compileIdentifier(expr);
                break;
            case ts.SyntaxKind.TrueKeyword: // line 114
            case ts.SyntaxKind.FalseKeyword: // line 126
                this.compileBooleanLiteral(expr);
                break;
            case ts.SyntaxKind.CallExpression: // line 243
                callExpression_1.compileCallExpression(expr, this);
                break;
            case ts.SyntaxKind.NullKeyword: // line 135
                this.pandaGen.loadAccumulator(expr, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.Null));
                break;
            case ts.SyntaxKind.ThisKeyword: // line 139
                this.compileThisKeyword(expr);
                break;
            case ts.SyntaxKind.MetaProperty:
                metaProperty_1.compileMetaProperty(expr, this);
                break;
            case ts.SyntaxKind.ArrayLiteralExpression: // line 239
                arrayLiteralExpression_1.compileArrayLiteralExpression(this, expr);
                break;
            case ts.SyntaxKind.ObjectLiteralExpression: // line 240
                objectLiteralExpression_1.compileObjectLiteralExpression(this, expr);
                break;
            case ts.SyntaxKind.PropertyAccessExpression: // line 241
            case ts.SyntaxKind.ElementAccessExpression: // line 242
                memberAccessExpression_1.compileMemberAccessExpression(expr, this);
                break;
            case ts.SyntaxKind.NewExpression: // line 244
                newExpression_1.compileNewExpression(expr, this);
                break;
            case ts.SyntaxKind.ParenthesizedExpression: // line 247
                this.compileExpression(parenthesizedExpression_1.findInnerExprOfParenthesis(expr));
                break;
            case ts.SyntaxKind.FunctionExpression: // line 248
                this.compileFunctionExpression(expr);
                break;
            case ts.SyntaxKind.DeleteExpression: // line 250
                this.compileDeleteExpression(expr);
                break;
            case ts.SyntaxKind.TypeOfExpression: // line 251
                this.compileTypeOfExpression(expr);
                break;
            case ts.SyntaxKind.VoidExpression: // line 252
                this.compileVoidExpression(expr);
                break;
            case ts.SyntaxKind.AwaitExpression:
                this.compileAwaitExpression(expr);
                break;
            case ts.SyntaxKind.PrefixUnaryExpression: // line 254
                this.compilePrefixUnaryExpression(expr);
                break;
            case ts.SyntaxKind.PostfixUnaryExpression: // line 255
                this.compilePostfixUnaryExpression(expr);
                break;
            case ts.SyntaxKind.BinaryExpression: // line 256
                this.compileBinaryExpression(expr);
                break;
            case ts.SyntaxKind.ConditionalExpression: // line 257
                this.compileConditionalExpression(expr);
                break;
            case ts.SyntaxKind.YieldExpression: // line 259
                yieldExpression_1.compileYieldExpression(this, expr);
                break;
            case ts.SyntaxKind.ArrowFunction: //line 249
                this.compileArrowFunction(expr);
                break;
            case ts.SyntaxKind.TemplateExpression:
                this.compileTemplateExpression(expr);
                break;
            case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
            case ts.SyntaxKind.FirstTemplateToken:
            case ts.SyntaxKind.LastLiteralToken:
                this.compileNoSubstitutionTemplateLiteral(expr);
                break;
            case ts.SyntaxKind.TaggedTemplateExpression:
                this.compileTaggedTemplateExpression(expr);
                break;
            case ts.SyntaxKind.Constructor:
                break;
            case ts.SyntaxKind.PropertyDeclaration:
                break;
            case ts.SyntaxKind.ClassExpression:
                classStatement_1.compileClassDeclaration(this, expr);
                break;
            default:
                throw new Error("Expression of type " + this.getNodeName(expr) + " is unimplemented");
        }
    };
    Compiler.prototype.compileIdentifier = function (id) {
        var name = jshelpers.getTextOfIdentifierOrLiteral(id);
        var _a = this.scope.find(name), scope = _a.scope, level = _a.level, v = _a.v;
        if (!v) {
            // the variable may appear after function call
            // any way it is a global variable.
            this.compileUnscopedIdentifier(id);
        }
        else {
            this.loadTarget(id, { scope: scope, level: level, v: v });
        }
    };
    Compiler.prototype.compileUnscopedIdentifier = function (id) {
        var name = jshelpers.getTextOfIdentifierOrLiteral(id);
        var pandaGen = this.pandaGen;
        switch (name) {
            // Those identifier are Built-In value properties
            case "NaN":
                pandaGen.loadAccumulator(id, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.NaN));
                return;
            case "Infinity":
                pandaGen.loadAccumulator(id, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.Infinity));
                return;
            case "globalThis":
                pandaGen.loadAccumulator(id, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.Global));
                return;
            case "undefined":
                pandaGen.loadAccumulator(id, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.undefined));
                return;
            default: {
                // typeof an undeclared variable will return undefined instead of throwing reference error
                var parent_1 = parenthesizedExpression_1.findOuterNodeOfParenthesis(id);
                if ((parent_1.kind == ts.SyntaxKind.TypeOfExpression)) {
                    var obj = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Global);
                    pandaGen.loadObjProperty(id, obj, name);
                }
                else {
                    pandaGen.tryLoadGlobalByName(id, name);
                }
                break;
            }
        }
    };
    Compiler.prototype.compileBooleanLiteral = function (lit) {
        if (lit.kind == ts.SyntaxKind.TrueKeyword) {
            this.pandaGen.loadAccumulator(lit, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.True));
        }
        else {
            this.pandaGen.loadAccumulator(lit, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.False));
        }
    };
    Compiler.prototype.compileFunctionReturnThis = function (expr) {
        if (expr.expression.kind == ts.SyntaxKind.Identifier) {
            var identifier = expr.expression;
            var args = expr.arguments;
            if (identifier.escapedText == "Function") {
                if (args && args.length > 0) {
                    if (!ts.isStringLiteral(args[args.length - 1])) {
                        return false;
                    }
                    var arg = args[args.length - 1];
                    if (arg.text.match(/ *return +this[;]? *$/) == null) {
                        return false;
                    }
                    else {
                        this.pandaGen.loadAccumulator(expr, vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.Global));
                        return true;
                    }
                }
            }
        }
        return false;
    };
    Compiler.prototype.compileThisKeyword = function (node) {
        var pandaGen = this.pandaGen;
        classStatement_1.checkValidUseSuperBeforeSuper(this, node);
        var _a = this.scope.find("this"), scope = _a.scope, level = _a.level, v = _a.v;
        if (!v) {
            throw new Error("\"this\" not found");
        }
        if (v instanceof variable_1.LocalVariable) {
            if (scope && level >= 0) {
                var curScope = this.scope;
                var needSetLexVar = false;
                while (curScope != scope) {
                    if (curScope instanceof scope_1.VariableScope) {
                        needSetLexVar = true;
                        break;
                    }
                    curScope = curScope.getParent();
                }
                if (needSetLexVar) {
                    scope.setLexVar(v, this.scope);
                }
            }
            pandaGen.loadAccFromLexEnv(node, scope, level, v);
        }
        else {
            throw new Error("\"this\" must be a local variable");
        }
    };
    Compiler.prototype.compileFunctionExpression = function (expr) {
        var internalName = this.compilerDriver.getFuncInternalName(expr, this.recorder);
        var env = this.getCurrentEnv();
        this.pandaGen.defineFunction(expr, expr, internalName, env);
    };
    Compiler.prototype.compileDeleteExpression = function (expr) {
        var pandaGen = this.pandaGen;
        var objReg;
        var propReg;
        var unaryExpr = expr.expression;
        switch (unaryExpr.kind) {
            case ts.SyntaxKind.Identifier: {
                // Check if this is a known variable.
                var name_2 = jshelpers.getTextOfIdentifierOrLiteral(unaryExpr);
                var _a = this.scope.find(name_2), scope = _a.scope, v = _a.v;
                if (!v || ((scope instanceof scope_1.GlobalScope) && (v instanceof variable_1.GlobalVariable))) {
                    // If the variable doesn't exist or if it is global, we must generate
                    // a delete global property instruction.
                    var variableReg = pandaGen.getTemp();
                    objReg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Global);
                    pandaGen.loadAccumulatorString(unaryExpr, name_2);
                    pandaGen.storeAccumulator(unaryExpr, variableReg);
                    pandaGen.deleteObjProperty(expr, objReg, variableReg);
                    pandaGen.freeTemps(variableReg);
                }
                else {
                    // Otherwise it is a local variable which can't be deleted and we just
                    // return false.
                    pandaGen.loadAccumulator(unaryExpr, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False));
                }
                break;
            }
            case ts.SyntaxKind.PropertyAccessExpression:
            case ts.SyntaxKind.ElementAccessExpression: {
                objReg = pandaGen.getTemp();
                propReg = pandaGen.getTemp();
                if (jshelpers.isSuperProperty(unaryExpr)) {
                    pandaGen.throwDeleteSuperProperty(unaryExpr);
                    pandaGen.freeTemps(objReg, propReg);
                    return;
                }
                var prop = memberAccessExpression_1.getObjAndProp(unaryExpr, objReg, propReg, this).prop;
                switch (typeof prop) {
                    case "string":
                        pandaGen.loadAccumulatorString(expr, prop);
                        pandaGen.storeAccumulator(expr, propReg);
                        break;
                    case "number":
                        pandaGen.loadAccumulatorInt(expr, prop);
                        pandaGen.storeAccumulator(expr, propReg);
                        break;
                    default:
                        break;
                }
                pandaGen.deleteObjProperty(expr, objReg, propReg);
                pandaGen.freeTemps(objReg, propReg);
                break;
            }
            default: {
                // compile the delete operand.
                this.compileExpression(unaryExpr);
                // Deleting any value or a result of an expression returns True.
                pandaGen.loadAccumulator(expr, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True));
            }
        }
    };
    Compiler.prototype.compileTypeOfExpression = function (expr) {
        // expr -> acc
        this.compileExpression(expr.expression);
        this.pandaGen.typeOf(expr);
    };
    Compiler.prototype.compileVoidExpression = function (expr) {
        var pandaGen = this.pandaGen;
        // compileExpression() must be called even though its value is not used
        // because it may have observable sideeffects.
        this.compileExpression(expr.expression);
        pandaGen.loadAccumulator(expr, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
    };
    Compiler.prototype.compileAwaitExpression = function (expr) {
        var pandaGen = this.pandaGen;
        if (!(this.funcBuilder instanceof asyncFunctionBuilder_1.AsyncFunctionBuilder)) {
            throw new diagnostic_1.DiagnosticError(expr.parent, diagnostic_1.DiagnosticCode.await_expressions_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules);
        }
        if (expr.expression) {
            var retValue = pandaGen.getTemp();
            this.compileExpression(expr.expression);
            pandaGen.storeAccumulator(expr, retValue);
            this.funcBuilder.await(expr, retValue);
            pandaGen.freeTemps(retValue);
        }
        else {
            this.funcBuilder.await(expr, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
        }
    };
    Compiler.prototype.compilePrefixUnaryExpression = function (expr) {
        var pandaGen = this.pandaGen;
        var operandReg = pandaGen.getTemp();
        // acc -> op(acc)
        switch (expr.operator) {
            case ts.SyntaxKind.PlusPlusToken: // line 73
            case ts.SyntaxKind.MinusMinusToken: {
                // line 74
                var lref = lreference_1.LReference.generateLReference(this, expr.operand, false);
                lref.getValue();
                pandaGen.storeAccumulator(expr, operandReg);
                pandaGen.unary(expr, expr.operator, operandReg);
                lref.setValue();
                break;
            }
            case ts.SyntaxKind.PlusToken: // line 67
            case ts.SyntaxKind.MinusToken: // line 68
            case ts.SyntaxKind.ExclamationToken: // line 81
            case ts.SyntaxKind.TildeToken: { // line 82
                this.compileExpression(expr.operand);
                pandaGen.storeAccumulator(expr, operandReg);
                pandaGen.unary(expr, expr.operator, operandReg);
                break;
            }
            default:
                break;
        }
        pandaGen.freeTemps(operandReg);
    };
    Compiler.prototype.compilePostfixUnaryExpression = function (expr) {
        var pandaGen = this.pandaGen;
        var operandReg = pandaGen.getTemp();
        // expr -> acc
        var lref = lreference_1.LReference.generateLReference(this, expr.operand, false);
        lref.getValue();
        // operand = acc
        pandaGen.storeAccumulator(expr, operandReg);
        // acc +/- 1
        switch (expr.operator) {
            case ts.SyntaxKind.PlusPlusToken:
            case ts.SyntaxKind.MinusMinusToken:
                pandaGen.unary(expr, expr.operator, operandReg);
                break;
            default:
                break;
        }
        // lvalue var = acc +/- 1
        lref.setValue();
        // acc = operand_old
        pandaGen.toNumber(expr, operandReg);
        pandaGen.freeTemps(operandReg);
    };
    Compiler.prototype.compileLogicalExpression = function (expr) {
        var pandaGen = this.pandaGen;
        var lhs = pandaGen.getTemp();
        switch (expr.operatorToken.kind) {
            case ts.SyntaxKind.AmpersandAmpersandToken: { // line 83
                var leftFalseLabel = new irnodes_1.Label();
                var endLabel = new irnodes_1.Label();
                // left -> acc
                this.compileExpression(expr.left);
                pandaGen.storeAccumulator(expr, lhs);
                pandaGen.jumpIfFalse(expr, leftFalseLabel);
                // left is true then right -> acc
                this.compileExpression(expr.right);
                pandaGen.branch(expr, endLabel);
                // left is false then lhs -> acc
                pandaGen.label(expr, leftFalseLabel);
                pandaGen.loadAccumulator(expr, lhs);
                pandaGen.label(expr, endLabel);
                break;
            }
            case ts.SyntaxKind.BarBarToken: { // line 84
                var leftTrueLabel = new irnodes_1.Label();
                var endLabel = new irnodes_1.Label();
                // left -> acc
                this.compileExpression(expr.left);
                pandaGen.storeAccumulator(expr, lhs);
                pandaGen.jumpIfTrue(expr, leftTrueLabel);
                // left is false then right -> acc
                this.compileExpression(expr.right);
                pandaGen.branch(expr, endLabel);
                // left is true then lhs -> acc
                pandaGen.label(expr, leftTrueLabel);
                pandaGen.loadAccumulator(expr, lhs);
                pandaGen.label(expr, endLabel);
                break;
            }
            case ts.SyntaxKind.QuestionQuestionToken: { // line 90
                var leftNullishLabel = new irnodes_1.Label();
                var endLabel = new irnodes_1.Label();
                // left -> acc -> lhs
                this.compileExpression(expr.left);
                pandaGen.storeAccumulator(expr, lhs);
                // eqaulity comparasion between lhs and null, if true, load right
                pandaGen.condition(expr, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Null), leftNullishLabel);
                // eqaulity comparasion between lhs and undefined, if true, load right
                pandaGen.loadAccumulator(expr.left, lhs);
                pandaGen.condition(expr, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), leftNullishLabel);
                // lhs is either null or undefined, load left
                pandaGen.loadAccumulator(expr, lhs);
                pandaGen.branch(expr, endLabel);
                pandaGen.label(expr, leftNullishLabel);
                this.compileExpression(expr.right);
                pandaGen.label(expr, endLabel);
                break;
            }
            default:
                throw new Error("BinaryExpression with operatorToken " + this.getNodeName(expr.operatorToken) + " is not Logical Operator");
        }
        pandaGen.freeTemps(lhs);
    };
    Compiler.prototype.compileBinaryExpression = function (expr) {
        if (syntaxCheckHelper_1.isAssignmentOperator(expr.operatorToken.kind)) {
            this.compileAssignmentExpression(expr.left, expr.right, expr.operatorToken.kind);
            return;
        }
        // LogicAnd, LogicOr and Coalesce are Short-circuiting
        if (expr.operatorToken.kind == ts.SyntaxKind.AmpersandAmpersandToken
            || expr.operatorToken.kind == ts.SyntaxKind.BarBarToken
            || expr.operatorToken.kind == ts.SyntaxKind.QuestionQuestionToken) {
            this.compileLogicalExpression(expr);
            return;
        }
        var pandaGen = this.pandaGen;
        var lhs = pandaGen.getTemp();
        this.compileExpression(expr.left);
        pandaGen.storeAccumulator(expr, lhs);
        this.compileExpression(expr.right);
        if (expr.operatorToken.kind != ts.SyntaxKind.CommaToken) {
            pandaGen.binary(expr, expr.operatorToken.kind, lhs);
        }
        pandaGen.freeTemps(lhs);
    };
    Compiler.prototype.compileConditionalExpression = function (expr) {
        var falseLabel = new irnodes_1.Label();
        var endLabel = new irnodes_1.Label();
        this.compileCondition(expr.condition, falseLabel);
        this.compileExpression(expr.whenTrue);
        this.pandaGen.branch(expr, endLabel);
        this.pandaGen.label(expr, falseLabel);
        this.compileExpression(expr.whenFalse);
        this.pandaGen.label(expr, endLabel);
    };
    Compiler.prototype.compileArrowFunction = function (expr) {
        var internalName = this.compilerDriver.getFuncInternalName(expr, this.recorder);
        var env = this.getCurrentEnv();
        this.pandaGen.defineFunction(expr, expr, internalName, env);
    };
    Compiler.prototype.compileTemplateSpan = function (expr) {
        var span = expr.expression;
        this.compileExpression(span);
        var literal = expr.literal;
        var lrh = this.pandaGen.getTemp();
        var text = literal.text;
        if (text.length != 0) {
            this.pandaGen.storeAccumulator(expr, lrh);
            this.pandaGen.loadAccumulatorString(expr, text);
            this.pandaGen.binary(expr, ts.SyntaxKind.PlusToken, lrh);
        }
        this.pandaGen.freeTemps(lrh);
    };
    Compiler.prototype.compileTemplateExpression = function (expr) {
        var _this = this;
        var pandaGen = this.pandaGen;
        var head = expr.head;
        var spans = expr.templateSpans;
        var lrh = pandaGen.getTemp();
        pandaGen.loadAccumulatorString(expr, head.text);
        if (spans && spans.length > 0) {
            spans.forEach(function (spanExp) {
                pandaGen.storeAccumulator(expr, lrh);
                _this.compileTemplateSpan(spanExp);
                pandaGen.binary(expr, ts.SyntaxKind.PlusToken, lrh);
            });
        }
        pandaGen.freeTemps(lrh);
    };
    Compiler.prototype.compileNoSubstitutionTemplateLiteral = function (expr) {
        var text = expr.text;
        this.pandaGen.loadAccumulatorString(expr, text);
    };
    Compiler.prototype.compileTaggedTemplateExpression = function (expr) {
        var _this = this;
        var pandaGen = this.pandaGen;
        var spans = undefined;
        if (ts.isTemplateExpression(expr.template)) {
            spans = expr.template.templateSpans;
        }
        var _a = callExpression_1.getHiddenParameters(expr.tag, this), argRegs = _a.arguments, passThis = _a.passThis; // +3 for function and this
        templateExpression_1.getTemplateObject(pandaGen, expr);
        var templateObj = pandaGen.getTemp();
        pandaGen.storeAccumulator(expr, templateObj);
        argRegs.push(templateObj);
        if (spans && spans.length) {
            spans.forEach(function (spanExp) {
                var exprReg = pandaGen.getTemp();
                _this.compileExpression(spanExp.expression);
                pandaGen.storeAccumulator(spanExp, exprReg);
                argRegs.push(exprReg);
            });
        }
        pandaGen.call(expr, argRegs, passThis);
        pandaGen.freeTemps.apply(pandaGen, argRegs);
        return;
    };
    Compiler.prototype.compileAssignmentExpression = function (lhs, rhs, operator) {
        var lref = lreference_1.LReference.generateLReference(this, lhs, false);
        if (operator != ts.SyntaxKind.EqualsToken) {
            var lhsVreg = this.pandaGen.getTemp();
            lref.getValue();
            this.pandaGen.storeAccumulator(lhs, lhsVreg);
            this.compileExpression(rhs);
            this.pandaGen.binary(lhs.parent, operator, lhsVreg);
            this.pandaGen.freeTemps(lhsVreg);
        }
        else {
            this.compileExpression(rhs);
        }
        lref.setValue();
    };
    Compiler.prototype.pushScope = function (node) {
        var scope = this.recorder.getScopeOfNode(node);
        this.scope = scope;
        // for debug info
        debuginfo_1.DebugInfo.addDebugIns(scope, this.pandaGen, true);
    };
    Compiler.prototype.popScope = function () {
        // for debug info
        debuginfo_1.DebugInfo.addDebugIns(this.scope, this.pandaGen, false);
        this.scope = this.scope.getParent();
    };
    Compiler.prototype.getNodeName = function (node) {
        return ts.SyntaxKind[node.kind];
    };
    Compiler.prototype.getThis = function (node, res) {
        var pandaGen = this.pandaGen;
        var curScope = this.getCurrentScope();
        var thisInfo = this.getCurrentScope().find("this");
        var scope = thisInfo.scope;
        var level = thisInfo.level;
        var v = thisInfo.v;
        if (scope && level >= 0) {
            var needSetLexVar = false;
            while (curScope != scope) {
                if (curScope instanceof scope_1.VariableScope) {
                    needSetLexVar = true;
                    break;
                }
                curScope = curScope.getParent();
            }
            if (needSetLexVar) {
                scope.setLexVar(v, curScope);
            }
        }
        if (v.isLexVar) {
            var slot = v.idxLex;
            pandaGen.loadLexicalVar(node, level, slot);
            pandaGen.storeAccumulator(node, res);
        }
        else {
            pandaGen.moveVreg(node, res, pandaGen.getVregForVariable(v));
        }
    };
    Compiler.prototype.setThis = function (node) {
        var pandaGen = this.pandaGen;
        var thisInfo = this.getCurrentScope().find("this");
        if (thisInfo.v.isLexVar) {
            var slot = thisInfo.v.idxLex;
            var value = pandaGen.getTemp();
            pandaGen.storeAccumulator(node, value);
            pandaGen.storeLexicalVar(node, thisInfo.level, slot, value);
            pandaGen.freeTemps(value);
        }
        else {
            pandaGen.storeAccumulator(node, pandaGen.getVregForVariable(thisInfo.v));
        }
    };
    Compiler.prototype.getPandaGen = function () {
        return this.pandaGen;
    };
    Compiler.prototype.getCurrentScope = function () {
        return this.scope;
    };
    Compiler.prototype.getCompilerDriver = function () {
        return this.compilerDriver;
    };
    Compiler.prototype.getRecorder = function () {
        return this.recorder;
    };
    Compiler.prototype.getFuncBuilder = function () {
        return this.funcBuilder;
    };
    Compiler.prototype.storeTarget = function (node, variable, isDeclaration) {
        if (variable.v instanceof variable_1.LocalVariable) {
            if (isDeclaration) {
                if (variable.v.isLet()) {
                    variable.v.initialize();
                    if (variable.scope instanceof scope_1.GlobalScope || variable.scope instanceof scope_1.ModuleScope) {
                        this.pandaGen.stLetToGlobalRecord(node, variable.v.getName());
                        return;
                    }
                }
                else if (variable.v.isConst()) {
                    variable.v.initialize();
                    if (variable.scope instanceof scope_1.GlobalScope || variable.scope instanceof scope_1.ModuleScope) {
                        this.pandaGen.stConstToGlobalRecord(node, variable.v.getName());
                        return;
                    }
                }
            }
            if (variable.v.isLetOrConst()) {
                if (variable.scope instanceof scope_1.GlobalScope || variable.scope instanceof scope_1.ModuleScope) {
                    this.pandaGen.tryStoreGlobalByName(node, variable.v.getName());
                    return;
                }
            }
            if (variable.scope && variable.level >= 0) { // inner most function will load outer env instead of new a lex env
                var scope = this.scope;
                var needSetLexVar = false;
                while (scope != variable.scope) {
                    if (scope instanceof scope_1.VariableScope) {
                        needSetLexVar = true;
                        break;
                    }
                    scope = scope.getParent();
                }
                if (needSetLexVar) {
                    variable.scope.setLexVar(variable.v, this.scope);
                }
            }
            // storeAcc must after setLexVar, because next statement will emit bc intermediately
            this.pandaGen.storeAccToLexEnv(node, variable.scope, variable.level, variable.v, isDeclaration);
        }
        else if (variable.v instanceof variable_1.GlobalVariable) {
            if (variable.v.isNone() && strictMode_1.isStrictMode(node)) {
                this.pandaGen.tryStoreGlobalByName(node, variable.v.getName());
            }
            else {
                this.pandaGen.storeGlobalVar(node, variable.v.getName());
            }
        }
        else {
            throw new Error("invalid lhsRef to store");
        }
    };
    Compiler.prototype.loadTarget = function (node, variable) {
        if (variable.v instanceof variable_1.ModuleVariable) {
            this.pandaGen.loadModuleVariable(node, variable.v.getModule(), variable.v.getExoticName());
        }
        else if (variable.v instanceof variable_1.LocalVariable) {
            if (variable.v.isLetOrConst() || variable.v.isClass()) {
                if (variable.scope instanceof scope_1.GlobalScope || variable.scope instanceof scope_1.ModuleScope) {
                    this.pandaGen.tryLoadGlobalByName(node, variable.v.getName());
                    return;
                }
            }
            if (variable.scope && variable.level >= 0) { // inner most function will load outer env instead of new a lex env
                var scope = this.scope;
                var needSetLexVar = false;
                while (scope != variable.scope) {
                    if (scope instanceof scope_1.VariableScope) {
                        needSetLexVar = true;
                        break;
                    }
                    scope = scope.getParent();
                }
                if (needSetLexVar) {
                    variable.scope.setLexVar(variable.v, this.scope);
                }
            }
            this.pandaGen.loadAccFromLexEnv(node, variable.scope, variable.level, variable.v);
        }
        else if (variable.v instanceof variable_1.GlobalVariable) {
            if (variable.v.isNone()) {
                var parent_2 = parenthesizedExpression_1.findOuterNodeOfParenthesis(node);
                if ((parent_2.kind == ts.SyntaxKind.TypeOfExpression)) {
                    var obj = vregisterCache_1.getVregisterCache(this.pandaGen, vregisterCache_1.CacheList.Global);
                    this.pandaGen.loadObjProperty(node, obj, variable.v.getName());
                }
                else {
                    this.pandaGen.tryLoadGlobalByName(node, variable.v.getName());
                }
            }
            else {
                this.pandaGen.loadGlobalVar(node, variable.v.getName());
            }
        }
        else {
            // Handle the variables from lexical scope
            throw new Error("Only local and global variables are implemented");
        }
    };
    return Compiler;
}());
exports.Compiler = Compiler;
//# sourceMappingURL=compiler.js.map