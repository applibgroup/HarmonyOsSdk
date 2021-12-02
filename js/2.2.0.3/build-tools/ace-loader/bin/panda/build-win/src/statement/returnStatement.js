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
exports.compileReturnStatement = void 0;
var ts = __importStar(require("typescript"));
var vregisterCache_1 = require("../base/vregisterCache");
var compiler_1 = require("../compiler");
var asyncFunctionBuilder_1 = require("../function/asyncFunctionBuilder");
var irnodes_1 = require("../irnodes");
var jshelpers = __importStar(require("../jshelpers"));
var classStatement_1 = require("./classStatement");
function compileReturnStatement(stmt, compiler) {
    var pandaGen = compiler.getPandaGen();
    var returnValue = pandaGen.getTemp();
    if (isReturnInDerivedCtor(stmt)) {
        compileReturnInDerivedCtor(stmt, returnValue, compiler);
    }
    else {
        compileNormalReturn(stmt, returnValue, compiler);
    }
    pandaGen.freeTemps(returnValue);
}
exports.compileReturnStatement = compileReturnStatement;
function compileReturnInDerivedCtor(stmt, returnValue, compiler) {
    var pandaGen = compiler.getPandaGen();
    var expr = stmt.expression;
    var need2CheckSuper = pandaGen.getTemp();
    if (!expr) {
        pandaGen.moveVreg(stmt, need2CheckSuper, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True));
    }
    else {
        if (ts.isCallExpression(expr) && expr.expression.kind == ts.SyntaxKind.SuperKeyword) {
            compileNormalReturn(stmt, returnValue, compiler);
            pandaGen.freeTemps(need2CheckSuper);
            return;
        }
        if (expr.kind == ts.SyntaxKind.ThisKeyword) {
            pandaGen.moveVreg(stmt, need2CheckSuper, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True));
        }
        else {
            compiler.compileExpression(expr);
            pandaGen.binary(stmt, ts.SyntaxKind.EqualsEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
            pandaGen.storeAccumulator(stmt, need2CheckSuper);
        }
    }
    var compile = new irnodes_1.Label();
    var notCompile = new irnodes_1.Label();
    pandaGen.loadAccumulator(stmt, need2CheckSuper);
    pandaGen.condition(stmt, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False), compile);
    // load this
    var thisReg = pandaGen.getTemp();
    compiler.getThis(stmt, thisReg);
    pandaGen.loadAccumulator(stmt, thisReg);
    pandaGen.branch(stmt, notCompile);
    // compile return expression
    pandaGen.label(stmt, compile);
    if (expr) {
        compiler.compileExpression(expr);
    }
    else {
        pandaGen.loadAccumulator(stmt, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
    }
    pandaGen.label(stmt, notCompile);
    pandaGen.storeAccumulator(stmt, returnValue);
    compiler.compileFinallyBlockBeforeControlFlowChange(undefined, compiler_1.ControlFlowChange.Break, undefined);
    var returnLabel = new irnodes_1.Label();
    var normalLabel = new irnodes_1.Label();
    pandaGen.loadAccumulator(stmt, need2CheckSuper);
    pandaGen.condition(stmt, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False), normalLabel);
    // check if super has been called
    classStatement_1.checkValidUseSuperBeforeSuper(compiler, stmt);
    pandaGen.branch(stmt, returnLabel);
    pandaGen.label(stmt, normalLabel);
    // load returnValue to acc
    pandaGen.loadAccumulator(stmt, returnValue);
    pandaGen.label(stmt, returnLabel);
    pandaGen["return"](stmt);
    pandaGen.freeTemps(need2CheckSuper, thisReg);
}
function compileNormalReturn(stmt, returnValue, compiler) {
    var expr = stmt.expression;
    var pandaGen = compiler.getPandaGen();
    if (expr) {
        compiler.compileExpression(expr);
    }
    else {
        pandaGen.loadAccumulator(stmt, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
    }
    pandaGen.storeAccumulator(stmt, returnValue);
    compiler.compileFinallyBlockBeforeControlFlowChange(undefined, compiler_1.ControlFlowChange.Break, undefined);
    pandaGen.loadAccumulator(stmt, returnValue);
    var funcBuilder = compiler.getFuncBuilder();
    if (funcBuilder instanceof asyncFunctionBuilder_1.AsyncFunctionBuilder) {
        var resovledVal = pandaGen.getTemp();
        pandaGen.storeAccumulator(stmt, resovledVal);
        funcBuilder.resolve(stmt, resovledVal);
        pandaGen.freeTemps(resovledVal);
    }
    pandaGen["return"](stmt);
}
function isReturnInDerivedCtor(stmt) {
    var ctorNode = jshelpers.findAncestor(stmt, ts.isConstructorDeclaration);
    if (ctorNode && ctorNode.parent) {
        var classNode = ctorNode.parent;
        if (classNode.heritageClauses) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=returnStatement.js.map