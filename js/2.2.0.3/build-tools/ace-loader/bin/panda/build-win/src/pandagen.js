"use strict";
// Huawei Technologies Co.,Ltd.
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PandaGen = void 0;
/**
 * Imlementation of bytecode generator.
 * The PandaGen works with IR and provides an API
 * to the compiler.
 *
 * This file should not contain imports of TypeScipt's AST nodes.
 */
var ts = __importStar(require("typescript"));
var typescript_1 = require("typescript");
var bcGenUtil_1 = require("./base/bcGenUtil");
var vregisterCache_1 = require("./base/vregisterCache");
var cmdOptions_1 = require("./cmdOptions");
var debuginfo_1 = require("./debuginfo");
var numericLiteral_1 = require("./expression/numericLiteral");
var irnodes_1 = require("./irnodes");
var lexenv_1 = require("./lexenv");
var log_1 = require("./log");
var scope_1 = require("./scope");
var PandaGen = /** @class */ (function () {
    function PandaGen(internalName, parametersCount, scope) {
        if (scope === void 0) { scope = undefined; }
        this.debugTag = "PandaGen";
        this.locals = [];
        this.temps = [];
        this.insns = [];
        this.catchMap = new Map();
        this.totalRegsNum = 0;
        // for debug info
        this.variableDebugInfoArray = [];
        this.sourceFileDebugInfo = "";
        this.sourceCodeDebugInfo = "";
        this.icSize = 0;
        this.internalName = internalName;
        this.parametersCount = parametersCount;
        this.scope = scope;
        this.vregisterCache = new vregisterCache_1.VregisterCache();
    }
    PandaGen.prototype.getSourceCodeDebugInfo = function () {
        return this.sourceCodeDebugInfo;
    };
    PandaGen.prototype.setSourceCodeDebugInfo = function (code) {
        this.sourceCodeDebugInfo = code;
    };
    PandaGen.prototype.getSourceFileDebugInfo = function () {
        return this.sourceFileDebugInfo;
    };
    PandaGen.prototype.setSourceFileDebugInfo = function (sourceFile) {
        this.sourceFileDebugInfo = sourceFile;
    };
    PandaGen.getLiteralArrayBuffer = function () {
        return PandaGen.literalArrayBuffer;
    };
    PandaGen.prototype.getParameterLength = function () {
        if (this.scope instanceof scope_1.FunctionScope) {
            return this.scope.getParameterLength();
        }
    };
    PandaGen.prototype.getFuncName = function () {
        if (this.scope instanceof scope_1.FunctionScope) {
            return this.scope.getFuncName();
        }
        else {
            return "main";
        }
    };
    PandaGen.prototype.getICSize = function () {
        return this.icSize;
    };
    PandaGen.prototype.setICSize = function (total) {
        this.icSize = total;
    };
    PandaGen.prototype.getFirstStmt = function () {
        return this.firstStmt;
    };
    PandaGen.prototype.setFirstStmt = function (firstStmt) {
        if (this.firstStmt) {
            return;
        }
        this.firstStmt = firstStmt;
    };
    PandaGen.prototype.getVregisterCache = function () {
        return this.vregisterCache;
    };
    PandaGen.prototype.getCatchMap = function () {
        return this.catchMap;
    };
    PandaGen.prototype.getScope = function () {
        return this.scope;
    };
    PandaGen.prototype.getVariableDebugInfoArray = function () {
        return this.variableDebugInfoArray;
    };
    PandaGen.prototype.addDebugVariableInfo = function (variable) {
        this.variableDebugInfoArray.push(variable);
    };
    PandaGen.prototype.allocLocalVreg = function () {
        var vreg = new irnodes_1.VReg();
        this.locals.push(vreg);
        return vreg;
    };
    PandaGen.prototype.getVregForVariable = function (v) {
        if (v.hasAlreadyBinded()) {
            return v.getVreg();
        }
        var vreg = this.allocLocalVreg();
        v.bindVreg(vreg);
        return vreg;
    };
    PandaGen.prototype.getTemp = function () {
        var retval;
        if (this.temps.length > 0) {
            retval = this.temps.shift();
        }
        else {
            retval = new irnodes_1.VReg();
        }
        if (cmdOptions_1.CmdOptions.isEnableDebugLog()) {
            if (retval.getStackTrace() !== undefined) {
                throw new Error("stack trace of new temp register is not empty");
            }
            retval.setStackTrace();
        }
        return retval;
    };
    PandaGen.prototype.freeTemps = function () {
        var _a;
        var temps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            temps[_i] = arguments[_i];
        }
        if (cmdOptions_1.CmdOptions.isEnableDebugLog())
            for (var _b = 0, temps_1 = temps; _b < temps_1.length; _b++) {
                var value = temps_1[_b];
                value.setStackTrace(null);
            }
        (_a = this.temps).unshift.apply(_a, temps);
    };
    PandaGen.prototype.getInsns = function () {
        return this.insns;
    };
    PandaGen.prototype.printInsns = function () {
        log_1.LOGE("function " + this.internalName + "() {");
        this.getInsns().forEach(function (ins) {
            log_1.LOGE(ins.toString());
        });
        log_1.LOGE("}");
    };
    PandaGen.prototype.setTotalRegsNum = function (num) {
        this.totalRegsNum = num;
    };
    PandaGen.prototype.getTotalRegsNum = function () {
        return this.totalRegsNum;
    };
    PandaGen.prototype.getParametersCount = function () {
        return this.parametersCount;
    };
    PandaGen.prototype.getLocals = function () {
        return this.locals;
    };
    PandaGen.prototype.getTemps = function () {
        return this.temps;
    };
    PandaGen.prototype.storeAccumulator = function (node, vreg) {
        this.add(node, bcGenUtil_1.storeAccumulator(vreg));
    };
    PandaGen.prototype.loadAccFromArgs = function (node) {
        if (this.scope.getUseArgs()) {
            var v = this.scope.findLocal("arguments");
            if (v) {
                var paramVreg = this.getVregForVariable(v);
                this.getUnmappedArgs(node);
                this.add(node, bcGenUtil_1.storeAccumulator(paramVreg));
            }
            else {
                throw new Error("fail to get arguments");
            }
        }
    };
    PandaGen.prototype.deleteObjProperty = function (node, obj, prop) {
        this.add(node, bcGenUtil_1.deleteObjProperty(obj, prop));
    };
    PandaGen.prototype.loadAccumulator = function (node, vreg) {
        this.add(node, bcGenUtil_1.loadAccumulator(vreg));
    };
    PandaGen.prototype.GetCurLexEnv = function () {
        return vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv);
    };
    PandaGen.prototype.loadAccFromLexEnv = function (node, scope, level, v) {
        var expander = new lexenv_1.VirtualLoadVar(scope, level, v);
        var insns = expander.expand(this);
        this.add.apply(this, __spreadArrays([node], insns));
    };
    PandaGen.prototype.storeAccToLexEnv = function (node, scope, level, v, isDeclaration) {
        var expander = new lexenv_1.VirtualStoreVar(scope, level, v, isDeclaration);
        var insns = expander.expand(this);
        this.add.apply(this, __spreadArrays([node], insns));
    };
    PandaGen.prototype.loadAccFromSymbol = function (node, name) {
        var obj = vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.Symbol);
        this.loadObjProperty(node, obj, name);
    };
    PandaGen.prototype.loadObjProperty = function (node, obj, prop) {
        switch (typeof (prop)) {
            case "number":
                this.loadObjByIndex(node, obj, prop);
                break;
            case "string":
                this.loadObjByName(node, obj, prop);
                break;
            default:
                this.loadObjByValue(node, obj, prop);
        }
    };
    PandaGen.prototype.storeObjProperty = function (node, obj, prop) {
        switch (typeof (prop)) {
            case "number":
                this.storeObjByIndex(node, obj, prop);
                break;
            case "string":
                this.storeObjByName(node, obj, prop);
                break;
            default:
                this.storeObjByValue(node, obj, prop);
        }
    };
    PandaGen.prototype.storeOwnProperty = function (node, obj, prop) {
        if (typeof (prop) == "string") {
            this.stOwnByName(node, obj, prop);
        }
        else if (typeof (prop) == "number") {
            this.stOwnByIndex(node, obj, prop);
        }
        else {
            this.stOwnByValue(node, obj, prop);
        }
    };
    PandaGen.prototype.loadObjByName = function (node, obj, string_id) {
        this.add(node, bcGenUtil_1.loadObjByName(obj, string_id));
    };
    PandaGen.prototype.storeObjByName = function (node, obj, string_id) {
        this.add(node, bcGenUtil_1.storeObjByName(obj, string_id));
    };
    PandaGen.prototype.loadObjByIndex = function (node, obj, index) {
        var indexReg = this.getTemp();
        if (numericLiteral_1.isInteger(index)) {
            this.add(node, bcGenUtil_1.loadAccumulatorInt(index));
        }
        else {
            this.add(node, bcGenUtil_1.loadAccumulatorFloat(index));
        }
        this.add(node, bcGenUtil_1.storeAccumulator(indexReg), bcGenUtil_1.loadObjByIndex(obj, indexReg));
        this.freeTemps(indexReg);
    };
    PandaGen.prototype.storeObjByIndex = function (node, obj, index) {
        var indexReg = this.getTemp();
        var valueReg = this.getTemp();
        this.add(node, bcGenUtil_1.storeAccumulator(valueReg));
        if (numericLiteral_1.isInteger(index)) {
            this.add(node, bcGenUtil_1.loadAccumulatorInt(index));
        }
        else {
            this.add(node, bcGenUtil_1.loadAccumulatorFloat(index));
        }
        this.add(node, bcGenUtil_1.storeAccumulator(indexReg), bcGenUtil_1.loadAccumulator(valueReg), bcGenUtil_1.storeObjByIndex(obj, indexReg));
        this.freeTemps(indexReg, valueReg);
    };
    PandaGen.prototype.loadObjByValue = function (node, obj, value) {
        this.add(node, bcGenUtil_1.loadObjByValue(obj, value));
    };
    PandaGen.prototype.storeObjByValue = function (node, obj, prop) {
        this.add(node, bcGenUtil_1.storeObjByValue(obj, prop));
    };
    PandaGen.prototype.stOwnByName = function (node, obj, string_id) {
        this.add(node, bcGenUtil_1.storeOwnByName(obj, string_id));
    };
    PandaGen.prototype.stOwnByIndex = function (node, obj, index) {
        var indexReg = this.getTemp();
        var valueReg = this.getTemp();
        this.add(node, bcGenUtil_1.storeAccumulator(valueReg));
        if (numericLiteral_1.isInteger(index)) {
            this.add(node, bcGenUtil_1.loadAccumulatorInt(index));
        }
        else {
            this.add(node, bcGenUtil_1.loadAccumulatorFloat(index));
        }
        this.add(node, bcGenUtil_1.storeAccumulator(indexReg), bcGenUtil_1.loadAccumulator(valueReg), bcGenUtil_1.storeOwnByIndex(obj, indexReg));
        this.freeTemps(indexReg, valueReg);
    };
    PandaGen.prototype.stOwnByValue = function (node, obj, value) {
        this.add(node, bcGenUtil_1.storeOwnByValue(obj, value));
    };
    PandaGen.prototype.tryLoadGlobalByValue = function (node, key) {
        this.add(node, bcGenUtil_1.tryLoadGlobalByValue(key));
    };
    PandaGen.prototype.tryStoreGlobalByValue = function (node, key) {
        this.add(node, bcGenUtil_1.tryStoreGlobalByValue(key));
    };
    // eg. print
    PandaGen.prototype.tryLoadGlobalByName = function (node, string_id) {
        this.add(node, bcGenUtil_1.tryLoadGlobalByName(string_id));
    };
    // eg. a = 1
    PandaGen.prototype.tryStoreGlobalByName = function (node, string_id) {
        this.add(node, bcGenUtil_1.tryStoreGlobalByName(string_id));
    };
    // eg. var n; n;
    PandaGen.prototype.loadGlobalVar = function (node, string_id) {
        this.add(node, bcGenUtil_1.loadGlobalVar(string_id));
    };
    // var n = 1;
    PandaGen.prototype.storeGlobalVar = function (node, string_id) {
        this.add(node, bcGenUtil_1.storeGlobalVar(string_id));
    };
    PandaGen.prototype.loadAccumulatorString = function (node, str) {
        // TODO: add the string to the constant pool
        this.add(node, bcGenUtil_1.loadAccumulatorString(str));
    };
    PandaGen.prototype.loadAccumulatorFloat = function (node, num) {
        this.add(node, bcGenUtil_1.loadAccumulatorFloat(num));
    };
    PandaGen.prototype.loadAccumulatorInt = function (node, num) {
        this.add(node, bcGenUtil_1.loadAccumulatorInt(num));
    };
    PandaGen.prototype.moveVreg = function (node, vd, vs) {
        this.add(node, bcGenUtil_1.moveVreg(vd, vs));
    };
    PandaGen.prototype.label = function (node, label) {
        this.add(debuginfo_1.NodeKind.FirstNodeOfFunction, label);
    };
    PandaGen.prototype.branch = function (node, target) {
        this.add(node, bcGenUtil_1.jumpTarget(target));
    };
    PandaGen.prototype["debugger"] = function (node) {
        this.add(node, bcGenUtil_1.creatDebugger());
    };
    PandaGen.prototype.throwUndefinedIfHole = function (node, hole, name) {
        this.add(node, bcGenUtil_1.throwUndefinedIfHole(hole, name));
    };
    // The method generates code for ther following cases
    //          if (lhs OP acc) {...}
    // ifFalse: ...
    PandaGen.prototype.condition = function (node, op, lhs, ifFalse) {
        // Please keep order of cases the same as in types.ts
        switch (op) {
            case typescript_1.SyntaxKind.LessThanToken: // line 57
                this.add(node, new irnodes_1.LessDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.GreaterThanToken: // line 59
                this.add(node, new irnodes_1.GreaterDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.LessThanEqualsToken: // line 60
                this.add(node, new irnodes_1.LessEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.GreaterThanEqualsToken: // line 61
                this.add(node, new irnodes_1.GreaterEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsToken: // line 62
                this.add(node, new irnodes_1.EqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsToken: // line 63
                this.add(node, new irnodes_1.NotEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsEqualsToken: // line 64
                this.add(node, new irnodes_1.StrictEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsEqualsToken: // line 65
                this.add(node, new irnodes_1.StrictNotEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            default:
                throw new Error();
        }
    };
    PandaGen.prototype.unary = function (node, op, operand) {
        switch (op) {
            case typescript_1.SyntaxKind.PlusToken:
                this.add(node, new irnodes_1.Tonumber(operand));
                break;
            case typescript_1.SyntaxKind.MinusToken:
                this.add(node, new irnodes_1.NegDyn(operand));
                break;
            case typescript_1.SyntaxKind.PlusPlusToken:
                this.add(node, new irnodes_1.IncDyn(operand));
                break;
            case typescript_1.SyntaxKind.MinusMinusToken:
                this.add(node, new irnodes_1.DecDyn(operand));
                break;
            case typescript_1.SyntaxKind.ExclamationToken:
                var falseLabel = new irnodes_1.Label();
                var endLabel = new irnodes_1.Label();
                this.toBoolean(node);
                this.condition(node, typescript_1.SyntaxKind.EqualsEqualsToken, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.True), falseLabel);
                // operand is true
                this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.False)));
                this.branch(node, endLabel);
                // operand is false
                this.label(node, falseLabel);
                this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.True)));
                this.label(node, endLabel);
                break;
            case typescript_1.SyntaxKind.TildeToken:
                this.add(node, new irnodes_1.NotDyn(operand));
                break;
            default:
                throw new Error("Unimplemented");
        }
    };
    PandaGen.prototype.binary = function (node, op, lhs) {
        switch (op) {
            case typescript_1.SyntaxKind.LessThanToken: // line 57
            case typescript_1.SyntaxKind.GreaterThanToken: // line 59
            case typescript_1.SyntaxKind.LessThanEqualsToken: // line 60
            case typescript_1.SyntaxKind.GreaterThanEqualsToken: // line 61
            case typescript_1.SyntaxKind.EqualsEqualsToken: // line 62
            case typescript_1.SyntaxKind.ExclamationEqualsToken: // line 63
            case typescript_1.SyntaxKind.EqualsEqualsEqualsToken: // line 64
            case typescript_1.SyntaxKind.ExclamationEqualsEqualsToken: // line 65
                this.binaryRelation(node, op, lhs);
                break;
            case typescript_1.SyntaxKind.PlusToken: // line 67
            case typescript_1.SyntaxKind.PlusEqualsToken: // line 91
                this.add(node, new irnodes_1.Add2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.MinusToken: // line 68
            case typescript_1.SyntaxKind.MinusEqualsToken: // line 92
                this.add(node, new irnodes_1.Sub2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.AsteriskToken: // line 69
            case typescript_1.SyntaxKind.AsteriskEqualsToken: // line 93
                this.add(node, new irnodes_1.Mul2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.AsteriskAsteriskToken: // line 70
            case typescript_1.SyntaxKind.AsteriskAsteriskEqualsToken: // line 94
                this.add(node, new irnodes_1.ExpDyn(lhs));
                break;
            case typescript_1.SyntaxKind.SlashToken: // line 71
            case typescript_1.SyntaxKind.SlashEqualsToken: // line 95
                this.add(node, new irnodes_1.Div2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.PercentToken: // line 72
            case typescript_1.SyntaxKind.PercentEqualsToken: // line 96
                this.add(node, new irnodes_1.Mod2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.LessThanLessThanToken: // line 75
            case typescript_1.SyntaxKind.LessThanLessThanEqualsToken: // line 97
                this.add(node, new irnodes_1.Shl2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.GreaterThanGreaterThanToken: // line 76
            case typescript_1.SyntaxKind.GreaterThanGreaterThanEqualsToken: // line 98
                this.add(node, new irnodes_1.Shr2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanToken: // line 77
            case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken: // line 99
                this.add(node, new irnodes_1.Ashr2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.AmpersandToken: // line 78
            case typescript_1.SyntaxKind.AmpersandEqualsToken: // line 100
                this.add(node, new irnodes_1.And2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.BarToken: // line 79
            case typescript_1.SyntaxKind.BarEqualsToken: // line 101
                this.add(node, new irnodes_1.Or2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.CaretToken: // line 80
            case typescript_1.SyntaxKind.CaretEqualsToken: // line 102
                this.add(node, new irnodes_1.Xor2Dyn(lhs));
                break;
            case typescript_1.SyntaxKind.InKeyword: //line 125
                // The in operator returns true if the specified property is in the specified object or its prototype chain
                this.add(node, new irnodes_1.IsInDyn(lhs));
                break;
            case typescript_1.SyntaxKind.InstanceOfKeyword: //line 126
                // The instanceof operator tests to see if the prototype property of
                // a constructor appears anywhere in the prototype chain of an object.
                // The return value is a boolean value.
                this.add(node, new irnodes_1.InstanceOfDyn(lhs));
                break;
            default:
                throw new Error("Unimplemented");
        }
    };
    // throw needs argument of exceptionVreg
    // to ensure rethrow the exception after finally
    PandaGen.prototype["throw"] = function (node) {
        this.add(node, bcGenUtil_1.throwException());
    };
    PandaGen.prototype.throwThrowNotExist = function (node) {
        this.add(node, bcGenUtil_1.throwThrowNotExists());
    };
    PandaGen.prototype["return"] = function (node) {
        this.add(node, new irnodes_1.ReturnDyn());
    };
    PandaGen.prototype.call = function (node, args, passThis) {
        this.add(node, bcGenUtil_1.call(args, passThis));
    };
    PandaGen.prototype.returnUndefined = function (node) {
        this.add(node, bcGenUtil_1.returnUndefined());
    };
    PandaGen.prototype.newObject = function (node, args) {
        this.add(node, bcGenUtil_1.newObject(args));
    };
    PandaGen.prototype.defineMethod = function (node, name, objReg) {
        this.add(node, bcGenUtil_1.loadAccumulator(objReg), new irnodes_1.DefineMethod(name, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv)));
    };
    PandaGen.prototype.defineFuncDyn = function (node, name) {
        this.add(node, new irnodes_1.DefinefuncDyn(name, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv)));
    };
    PandaGen.prototype.defineFunction = function (node, realNode, name) {
        if (realNode.modifiers) {
            for (var i = 0; i < realNode.modifiers.length; i++) {
                if (realNode.modifiers[i].kind == ts.SyntaxKind.AsyncKeyword) {
                    // TODO: async generator
                    if (realNode.asteriskToken) {
                    }
                    else { // async
                        this.add(node, new irnodes_1.DefineAsyncFuncDyn(name, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv)));
                        return;
                    }
                }
            }
        }
        if (realNode.asteriskToken) {
            this.add(node, new irnodes_1.DefineGeneratorfuncDyn(name, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv)));
            return;
        }
        if (ts.isArrowFunction(realNode) || ts.isMethodDeclaration(realNode)) {
            this.add(node, bcGenUtil_1.loadHomeObject(), new irnodes_1.DefineNCFuncDyn(name, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv)));
            return;
        }
        this.add(node, new irnodes_1.DefinefuncDyn(name, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv)));
    };
    PandaGen.prototype.typeOf = function (node) {
        this.add(node, new irnodes_1.TypeOfDyn());
    };
    PandaGen.prototype.callSpread = function (node, func, thisReg, args) {
        this.add(node, new irnodes_1.CallSpread(func, thisReg, args));
    };
    PandaGen.prototype.newObjSpread = function (node, obj, target) {
        this.add(node, new irnodes_1.NewobjSpread(obj, target));
    };
    PandaGen.prototype.getUnmappedArgs = function (node) {
        this.add(node, new irnodes_1.GetUnmappedArgs());
    };
    PandaGen.prototype.toBoolean = function (node) {
        this.add(node, new irnodes_1.Toboolean());
    };
    PandaGen.prototype.toNumber = function (node, arg) {
        this.add(node, new irnodes_1.Tonumber(arg));
    };
    PandaGen.prototype.createGeneratorObj = function (node, funcObj) {
        this.add(node, new irnodes_1.CreateGeneratorObjDyn(funcObj));
    };
    PandaGen.prototype.createIterResultObjectDyn = function (node, value, done) {
        this.add(node, new irnodes_1.CreateIterResultObjectDyn(value, done));
    };
    PandaGen.prototype.suspendGenerator = function (node, genObj, iterRslt) {
        this.add(node, new irnodes_1.SuspendGeneratorDyn(genObj, iterRslt));
    };
    PandaGen.prototype.resumeGenerator = function (node, genObj) {
        this.add(node, new irnodes_1.ResumeGeneratorDyn(genObj));
    };
    PandaGen.prototype.getResumeMode = function (node, genObj) {
        this.add(node, new irnodes_1.GetResumeModeDyn(genObj));
    };
    PandaGen.prototype.asyncFunctionEnter = function (node) {
        this.add(node, new irnodes_1.AsyncFunctionEnterDyn());
    };
    PandaGen.prototype.asyncFunctionAwaitUncaught = function (node, asynFuncObj, value) {
        this.add(node, new irnodes_1.AsyncFunctionAwaitUncaughtDyn(asynFuncObj, value));
    };
    PandaGen.prototype.asyncFunctionResolve = function (node, asyncObj, value, canSuspend) {
        this.add(node, new irnodes_1.AsyncFunctionResolveDyn(asyncObj, value, canSuspend));
    };
    PandaGen.prototype.asyncFunctionReject = function (node, asyncObj, value, canSuspend) {
        this.add(node, new irnodes_1.AsyncFunctionRejectDyn(asyncObj, value, canSuspend));
    };
    PandaGen.prototype.getTemplateObject = function (node, value) {
        this.add(node, new irnodes_1.GetTemplateObject(value));
    };
    PandaGen.prototype.copyRestArgs = function (node, index) {
        this.add(node, new irnodes_1.CopyRestArgs(new irnodes_1.Imm(irnodes_1.ResultType.Int, index)));
    };
    PandaGen.prototype.getPropIterator = function (node) {
        this.add(node, bcGenUtil_1.getPropIterator());
    };
    PandaGen.prototype.getNextPropName = function (node, iter) {
        this.add(node, bcGenUtil_1.getNextPropName(iter));
    };
    PandaGen.prototype.createEmptyObject = function (node) {
        this.add(node, bcGenUtil_1.createEmptyObject());
    };
    PandaGen.prototype.createObjectHavingMethod = function (node, idx) {
        this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv)), bcGenUtil_1.createObjectHavingMethod(idx));
    };
    PandaGen.prototype.createObjectWithBuffer = function (node, idx) {
        this.add(node, bcGenUtil_1.createObjectWithBuffer(idx));
    };
    PandaGen.prototype.setObjectWithProto = function (node, proto, object) {
        this.add(node, bcGenUtil_1.setObjectWithProto(proto, object));
    };
    PandaGen.prototype.copyDataProperties = function (node, dstObj, srcObj) {
        this.add(node, bcGenUtil_1.copyDataProperties(dstObj, srcObj));
    };
    PandaGen.prototype.defineGetterSetterByValue = function (node, obj, name, getter, setter, isComputedPropertyName) {
        if (isComputedPropertyName) {
            this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.True)));
        }
        else {
            this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.False)));
        }
        this.add(node, bcGenUtil_1.defineGetterSetterByValue(obj, name, getter, setter));
    };
    PandaGen.prototype.createEmptyArray = function (node) {
        this.add(node, bcGenUtil_1.createEmptyArray());
    };
    PandaGen.prototype.createArrayWithBuffer = function (node, idx) {
        this.add(node, bcGenUtil_1.createArrayWithBuffer(idx));
    };
    PandaGen.prototype.storeArraySpreadElement = function (node, array, index) {
        this.add(node, bcGenUtil_1.storeArraySpread(array, index));
    };
    PandaGen.prototype.storeLexicalVar = function (env, node, level, slot, value) {
        this.add(node, bcGenUtil_1.storeLexicalVar(env, level, slot, value));
    };
    PandaGen.prototype.loadLexicalVar = function (env, node, level, slot) {
        this.add(node, bcGenUtil_1.loadLexicalVar(env, level, slot));
    };
    PandaGen.prototype.importModule = function (node, moduleName) {
        this.add(node, bcGenUtil_1.importModule(moduleName));
    };
    PandaGen.prototype.loadModuleVariable = function (node, module, varName) {
        this.add(node, bcGenUtil_1.loadModuleVarByName(varName, module));
    };
    PandaGen.prototype.storeModuleVar = function (node, moduleVarName) {
        this.add(node, bcGenUtil_1.storeModuleVariable(moduleVarName));
    };
    PandaGen.prototype.copyModule = function (node, module) {
        this.add(node, bcGenUtil_1.copyModuleIntoCurrentModule(module));
    };
    PandaGen.prototype.defineClassWithBuffer = function (node, name, idx, base) {
        this.add(node, bcGenUtil_1.defineClassWithBuffer(name, idx, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv), base));
    };
    PandaGen.prototype.createObjectWithExcludedKeys = function (node, obj, args) {
        this.add(node, bcGenUtil_1.createObjectWithExcludedKeys(obj, args));
    };
    PandaGen.prototype.throwObjectNonCoercible = function (node) {
        this.add(node, bcGenUtil_1.throwObjectNonCoercible());
    };
    PandaGen.prototype.getIterator = function (node) {
        this.add(node, bcGenUtil_1.getIterator());
    };
    PandaGen.prototype.getIteratorNext = function (node, iter, nextMethod) {
        this.add(node, bcGenUtil_1.getIteratorNext(iter, nextMethod));
    };
    PandaGen.prototype.closeIterator = function (node, iter) {
        this.add(node, bcGenUtil_1.closeIterator(iter));
    };
    PandaGen.prototype.throwIfNotObject = function (node, obj) {
        this.add(node, bcGenUtil_1.throwIfNotObject(obj));
    };
    PandaGen.prototype.superCall = function (node, num, start) {
        this.add(node, bcGenUtil_1.superCall(num, start));
    };
    PandaGen.prototype.superCallSpread = function (node, vs) {
        this.add(node, bcGenUtil_1.superCallSpread(vs));
    };
    PandaGen.prototype.ldSuperByName = function (node, obj, key) {
        this.add(node, bcGenUtil_1.ldSuperByName(obj, key));
    };
    PandaGen.prototype.stSuperByName = function (node, obj, key) {
        this.add(node, bcGenUtil_1.stSuperByName(obj, key));
    };
    PandaGen.prototype.ldSuperByValue = function (node, obj, prop) {
        this.add(node, bcGenUtil_1.ldSuperByValue(obj, prop));
    };
    PandaGen.prototype.stSuperByValue = function (node, obj, prop) {
        this.add(node, bcGenUtil_1.stSuperByValue(obj, prop));
    };
    PandaGen.prototype.loadSuperProperty = function (node, obj, prop) {
        switch (typeof (prop)) {
            case "string":
                this.ldSuperByName(node, obj, prop);
                break;
            case "number":
                var propReg = this.getTemp();
                this.loadAccumulatorInt(node, prop);
                this.storeAccumulator(node, propReg);
                this.ldSuperByValue(node, obj, propReg);
                this.freeTemps(propReg);
                break;
            default:
                this.ldSuperByValue(node, obj, prop);
        }
    };
    PandaGen.prototype.throwIfSuperNotCorrectCall = function (node, num) {
        this.add(node, bcGenUtil_1.throwIfSuperNotCorrectCall(num));
    };
    PandaGen.prototype.storeSuperProperty = function (node, obj, prop) {
        switch (typeof (prop)) {
            case "string":
                this.stSuperByName(node, obj, prop);
                break;
            case "number":
                var propReg = this.getTemp();
                this.loadAccumulatorInt(node, prop);
                this.storeAccumulator(node, propReg);
                this.stSuperByValue(node, obj, propReg);
                this.freeTemps(propReg);
                break;
            default:
                this.stSuperByValue(node, obj, prop);
        }
    };
    PandaGen.prototype.loadHomeObject = function (node) {
        this.add(node, bcGenUtil_1.loadHomeObject());
    };
    PandaGen.prototype.binaryRelation = function (node, op, lhs) {
        var falseLabel = new irnodes_1.Label();
        var endLabel = new irnodes_1.Label();
        switch (op) {
            case typescript_1.SyntaxKind.LessThanToken:
                this.add(node, new irnodes_1.LessDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
            case typescript_1.SyntaxKind.GreaterThanToken:
                this.add(node, new irnodes_1.GreaterDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
            case typescript_1.SyntaxKind.LessThanEqualsToken:
                this.add(node, new irnodes_1.LessEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
            case typescript_1.SyntaxKind.GreaterThanEqualsToken:
                this.add(node, new irnodes_1.GreaterEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsToken:
                this.add(node, new irnodes_1.EqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsToken:
                this.add(node, new irnodes_1.NotEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsEqualsToken:
                this.add(node, new irnodes_1.StrictEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsEqualsToken:
                this.add(node, new irnodes_1.StrictNotEqDyn(lhs));
                this.add(node, new irnodes_1.Jeqz(falseLabel));
                break;
        }
        this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.True)));
        this.branch(node, endLabel);
        this.label(node, falseLabel);
        this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.False)));
        this.label(node, endLabel);
    };
    PandaGen.prototype.add = function (node) {
        var insns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            insns[_i - 1] = arguments[_i];
        }
        // set pos debug info if debug mode
        debuginfo_1.DebugInfo.setDebuginfoForIns.apply(debuginfo_1.DebugInfo, __spreadArrays([node], insns));
        this.insns = this.insns.concat(insns);
    };
    PandaGen.literalArrayBuffer = [];
    return PandaGen;
}());
exports.PandaGen = PandaGen;
//# sourceMappingURL=pandagen.js.map