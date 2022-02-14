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
var util_1 = require("./base/util");
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
    PandaGen.clearLiteralArrayBuffer = function () {
        PandaGen.literalArrayBuffer = [];
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
    PandaGen.prototype.createLexEnv = function (node, env, scope) {
        var needCreateNewEnv = scope.need2CreateLexEnv();
        var numVars = scope.getNumLexEnv();
        if (needCreateNewEnv) {
            this.add(node, bcGenUtil_1.newLexicalEnv(numVars), bcGenUtil_1.storeAccumulator(env));
        }
        else {
            this.add(node, bcGenUtil_1.loadLexicalEnv(), bcGenUtil_1.storeAccumulator(env));
        }
    };
    PandaGen.prototype.popLexicalEnv = function (node) {
        this.add(node, bcGenUtil_1.popLexicalEnv());
    };
    PandaGen.prototype.loadAccFromLexEnv = function (node, scope, level, v) {
        var expander = new lexenv_1.VariableAccessLoad(scope, level, v);
        var insns = expander.expand(this);
        this.add.apply(this, __spreadArrays([node], insns));
    };
    PandaGen.prototype.storeAccToLexEnv = function (node, scope, level, v, isDeclaration) {
        var expander = new lexenv_1.VariableAcessStore(scope, level, v, isDeclaration, node);
        var insns = expander.expand(this);
        this.add.apply(this, __spreadArrays([node], insns));
    };
    PandaGen.prototype.loadObjProperty = function (node, obj, prop) {
        switch (typeof (prop)) {
            case "number": {
                if (numericLiteral_1.isInteger(prop)) {
                    this.loadObjByIndex(node, obj, prop);
                }
                else {
                    var propReg = this.getTemp();
                    this.add(node, bcGenUtil_1.loadAccumulatorFloat(prop), bcGenUtil_1.storeAccumulator(propReg));
                    this.loadObjByValue(node, obj, propReg);
                    this.freeTemps(propReg);
                }
                break;
            }
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
                if (numericLiteral_1.isInteger(prop)) {
                    this.storeObjByIndex(node, obj, prop);
                }
                else {
                    var valueReg = this.getTemp();
                    var propReg = this.getTemp();
                    this.storeAccumulator(node, valueReg);
                    this.add(node, bcGenUtil_1.loadAccumulatorFloat(prop), bcGenUtil_1.storeAccumulator(propReg), bcGenUtil_1.loadAccumulator(valueReg));
                    this.storeObjByValue(node, obj, propReg);
                    this.freeTemps(valueReg, propReg);
                }
                break;
            case "string":
                this.storeObjByName(node, obj, prop);
                break;
            default:
                this.storeObjByValue(node, obj, prop);
        }
    };
    PandaGen.prototype.storeOwnProperty = function (node, obj, prop, nameSetting) {
        if (nameSetting === void 0) { nameSetting = false; }
        switch (typeof prop) {
            case "number": {
                if (numericLiteral_1.isInteger(prop)) {
                    this.stOwnByIndex(node, obj, prop);
                }
                else {
                    var valueReg = this.getTemp();
                    var propReg = this.getTemp();
                    this.storeAccumulator(node, valueReg);
                    this.add(node, bcGenUtil_1.loadAccumulatorFloat(prop), bcGenUtil_1.storeAccumulator(propReg), bcGenUtil_1.loadAccumulator(valueReg));
                    this.stOwnByValue(node, obj, propReg, nameSetting);
                    this.freeTemps(valueReg, propReg);
                }
                break;
            }
            case "string":
                this.stOwnByName(node, obj, prop, nameSetting);
                break;
            default:
                this.stOwnByValue(node, obj, prop, nameSetting);
        }
    };
    PandaGen.prototype.loadObjByName = function (node, obj, string_id) {
        this.add(node, bcGenUtil_1.loadObjByName(obj, string_id));
    };
    PandaGen.prototype.storeObjByName = function (node, obj, string_id) {
        this.add(node, bcGenUtil_1.storeObjByName(obj, string_id));
    };
    PandaGen.prototype.loadObjByIndex = function (node, obj, index) {
        this.add(node, bcGenUtil_1.loadObjByIndex(obj, index));
    };
    PandaGen.prototype.storeObjByIndex = function (node, obj, index) {
        this.add(node, bcGenUtil_1.storeObjByIndex(obj, index));
    };
    PandaGen.prototype.loadObjByValue = function (node, obj, value) {
        this.add(node, bcGenUtil_1.loadObjByValue(obj, value));
    };
    PandaGen.prototype.storeObjByValue = function (node, obj, prop) {
        this.add(node, bcGenUtil_1.storeObjByValue(obj, prop));
    };
    PandaGen.prototype.stOwnByName = function (node, obj, string_id, nameSetting) {
        this.add(node, bcGenUtil_1.storeOwnByName(obj, string_id, nameSetting));
    };
    PandaGen.prototype.stOwnByIndex = function (node, obj, index) {
        this.add(node, bcGenUtil_1.storeOwnByIndex(obj, index));
    };
    PandaGen.prototype.stOwnByValue = function (node, obj, value, nameSetting) {
        this.add(node, bcGenUtil_1.storeOwnByValue(obj, value, nameSetting));
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
    PandaGen.prototype.isTrue = function (node) {
        this.add(node, bcGenUtil_1.isTrue());
    };
    PandaGen.prototype.jumpIfTrue = function (node, target) {
        this.isFalse(node);
        this.add(node, new irnodes_1.Jeqz(target));
    };
    PandaGen.prototype.isFalse = function (node) {
        this.add(node, bcGenUtil_1.isFalse());
    };
    PandaGen.prototype.jumpIfFalse = function (node, target) {
        this.isTrue(node);
        this.add(node, new irnodes_1.Jeqz(target));
    };
    PandaGen.prototype["debugger"] = function (node) {
        this.add(node, bcGenUtil_1.creatDebugger());
    };
    PandaGen.prototype.throwUndefinedIfHole = function (node, hole, name) {
        this.add(node, bcGenUtil_1.throwUndefinedIfHole(hole, name));
    };
    /**
     * The method generates code for ther following cases
     *          if (lhs OP acc) {...}
     * ifFalse: ...
     */
    PandaGen.prototype.condition = function (node, op, lhs, ifFalse) {
        // Please keep order of cases the same as in types.ts
        switch (op) {
            case typescript_1.SyntaxKind.LessThanToken: // line 57
                this.add(node, new irnodes_1.EcmaLessdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.GreaterThanToken: // line 59
                this.add(node, new irnodes_1.EcmaGreaterdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.LessThanEqualsToken: // line 60
                this.add(node, new irnodes_1.EcmaLesseqdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.GreaterThanEqualsToken: // line 61
                this.add(node, new irnodes_1.EcmaGreatereqdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsToken: // line 62
                this.add(node, new irnodes_1.EcmaEqdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsToken: // line 63
                this.add(node, new irnodes_1.EcmaNoteqdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsEqualsToken: // line 64
                this.add(node, new irnodes_1.EcmaStricteqdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsEqualsToken: // line 65
                this.add(node, new irnodes_1.EcmaStrictnoteqdyn(lhs));
                this.add(node, new irnodes_1.Jeqz(ifFalse));
                break;
            default:
                break;
        }
    };
    PandaGen.prototype.unary = function (node, op, operand) {
        switch (op) {
            case typescript_1.SyntaxKind.PlusToken:
                this.add(node, new irnodes_1.EcmaTonumber(operand));
                break;
            case typescript_1.SyntaxKind.MinusToken:
                this.add(node, new irnodes_1.EcmaNegdyn(operand));
                break;
            case typescript_1.SyntaxKind.PlusPlusToken:
                this.add(node, new irnodes_1.EcmaIncdyn(operand));
                break;
            case typescript_1.SyntaxKind.MinusMinusToken:
                this.add(node, new irnodes_1.EcmaDecdyn(operand));
                break;
            case typescript_1.SyntaxKind.ExclamationToken:
                var falseLabel = new irnodes_1.Label();
                var endLabel = new irnodes_1.Label();
                this.jumpIfFalse(node, falseLabel);
                // operand is true
                this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.False)));
                this.branch(node, endLabel);
                // operand is false
                this.label(node, falseLabel);
                this.add(node, bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.True)));
                this.label(node, endLabel);
                break;
            case typescript_1.SyntaxKind.TildeToken:
                this.add(node, new irnodes_1.EcmaNotdyn(operand));
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
                this.add(node, new irnodes_1.EcmaAdd2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.MinusToken: // line 68
            case typescript_1.SyntaxKind.MinusEqualsToken: // line 92
                this.add(node, new irnodes_1.EcmaSub2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.AsteriskToken: // line 69
            case typescript_1.SyntaxKind.AsteriskEqualsToken: // line 93
                this.add(node, new irnodes_1.EcmaMul2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.AsteriskAsteriskToken: // line 70
            case typescript_1.SyntaxKind.AsteriskAsteriskEqualsToken: // line 94
                this.add(node, new irnodes_1.EcmaExpdyn(lhs));
                break;
            case typescript_1.SyntaxKind.SlashToken: // line 71
            case typescript_1.SyntaxKind.SlashEqualsToken: // line 95
                this.add(node, new irnodes_1.EcmaDiv2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.PercentToken: // line 72
            case typescript_1.SyntaxKind.PercentEqualsToken: // line 96
                this.add(node, new irnodes_1.EcmaMod2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.LessThanLessThanToken: // line 75
            case typescript_1.SyntaxKind.LessThanLessThanEqualsToken: // line 97
                this.add(node, new irnodes_1.EcmaShl2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.GreaterThanGreaterThanToken: // line 76
            case typescript_1.SyntaxKind.GreaterThanGreaterThanEqualsToken: // line 98
                this.add(node, new irnodes_1.EcmaShr2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanToken: // line 77
            case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken: // line 99
                this.add(node, new irnodes_1.EcmaAshr2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.AmpersandToken: // line 78
            case typescript_1.SyntaxKind.AmpersandEqualsToken: // line 100
                this.add(node, new irnodes_1.EcmaAnd2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.BarToken: // line 79
            case typescript_1.SyntaxKind.BarEqualsToken: // line 101
                this.add(node, new irnodes_1.EcmaOr2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.CaretToken: // line 80
            case typescript_1.SyntaxKind.CaretEqualsToken: // line 102
                this.add(node, new irnodes_1.EcmaXor2dyn(lhs));
                break;
            case typescript_1.SyntaxKind.InKeyword: //line 125
                // The in operator returns true if the specified property is in the specified object or its prototype chain
                this.add(node, new irnodes_1.EcmaIsindyn(lhs));
                break;
            case typescript_1.SyntaxKind.InstanceOfKeyword: //line 126
                // The instanceof operator tests to see if the prototype property of
                // a constructor appears anywhere in the prototype chain of an object.
                // The return value is a boolean value.
                this.add(node, new irnodes_1.EcmaInstanceofdyn(lhs));
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
    PandaGen.prototype.throwDeleteSuperProperty = function (node) {
        this.add(node, bcGenUtil_1.throwDeleteSuperProperty());
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
    PandaGen.prototype.defineMethod = function (node, name, objReg, env) {
        var paramLength = util_1.getParamLengthOfFunc(node);
        this.add(node, bcGenUtil_1.loadAccumulator(objReg), bcGenUtil_1.defineMethod(name, env, paramLength));
    };
    PandaGen.prototype.defineFunction = function (node, realNode, name, env) {
        var paramLength = util_1.getParamLengthOfFunc(realNode);
        if (realNode.modifiers) {
            for (var i = 0; i < realNode.modifiers.length; i++) {
                if (realNode.modifiers[i].kind == ts.SyntaxKind.AsyncKeyword) {
                    if (realNode.asteriskToken) {
                        // support async* further
                    }
                    else { // async
                        this.add(node, bcGenUtil_1.defineAsyncFunc(name, env, paramLength));
                        return;
                    }
                }
            }
        }
        if (realNode.asteriskToken) {
            this.add(node, bcGenUtil_1.defineGeneratorFunc(name, env, paramLength));
            return;
        }
        if (ts.isArrowFunction(realNode) || ts.isMethodDeclaration(realNode)) {
            this.add(node, bcGenUtil_1.loadHomeObject(), bcGenUtil_1.defineNCFunc(name, env, paramLength));
            return;
        }
        this.add(node, bcGenUtil_1.defineFunc(name, env, paramLength));
    };
    PandaGen.prototype.typeOf = function (node) {
        this.add(node, new irnodes_1.EcmaTypeofdyn());
    };
    PandaGen.prototype.callSpread = function (node, func, thisReg, args) {
        this.add(node, new irnodes_1.EcmaCallspreaddyn(func, thisReg, args));
    };
    PandaGen.prototype.newObjSpread = function (node, obj, target) {
        this.add(node, new irnodes_1.EcmaNewobjspreaddyn(obj, target));
    };
    PandaGen.prototype.getUnmappedArgs = function (node) {
        this.add(node, new irnodes_1.EcmaGetunmappedargs());
    };
    PandaGen.prototype.toNumber = function (node, arg) {
        this.add(node, new irnodes_1.EcmaTonumber(arg));
    };
    PandaGen.prototype.createGeneratorObj = function (node, funcObj) {
        this.add(node, new irnodes_1.EcmaCreategeneratorobj(funcObj));
    };
    PandaGen.prototype.EcmaCreateiterresultobj = function (node, value, done) {
        this.add(node, new irnodes_1.EcmaCreateiterresultobj(value, done));
    };
    PandaGen.prototype.suspendGenerator = function (node, genObj, iterRslt) {
        this.add(node, new irnodes_1.EcmaSuspendgenerator(genObj, iterRslt));
    };
    PandaGen.prototype.resumeGenerator = function (node, genObj) {
        this.add(node, new irnodes_1.EcmaResumegenerator(genObj));
    };
    PandaGen.prototype.getResumeMode = function (node, genObj) {
        this.add(node, new irnodes_1.EcmaGetresumemode(genObj));
    };
    PandaGen.prototype.asyncFunctionEnter = function (node) {
        this.add(node, new irnodes_1.EcmaAsyncfunctionenter());
    };
    PandaGen.prototype.asyncFunctionAwaitUncaught = function (node, asynFuncObj, value) {
        this.add(node, new irnodes_1.EcmaAsyncfunctionawaituncaught(asynFuncObj, value));
    };
    PandaGen.prototype.asyncFunctionResolve = function (node, asyncObj, value, canSuspend) {
        this.add(node, new irnodes_1.EcmaAsyncfunctionresolve(asyncObj, value, canSuspend));
    };
    PandaGen.prototype.asyncFunctionReject = function (node, asyncObj, value, canSuspend) {
        this.add(node, new irnodes_1.EcmaAsyncfunctionreject(asyncObj, value, canSuspend));
    };
    PandaGen.prototype.getTemplateObject = function (node, value) {
        this.add(node, new irnodes_1.EcmaGettemplateobject(value));
    };
    PandaGen.prototype.copyRestArgs = function (node, index) {
        this.add(node, new irnodes_1.EcmaCopyrestargs(new irnodes_1.Imm(irnodes_1.ResultType.Int, index)));
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
    PandaGen.prototype.createObjectHavingMethod = function (node, idx, env) {
        this.add(node, bcGenUtil_1.loadAccumulator(env), bcGenUtil_1.createObjectHavingMethod(idx));
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
    PandaGen.prototype.storeLexicalVar = function (node, level, slot, value) {
        this.add(node, bcGenUtil_1.storeLexicalVar(level, slot, value));
    };
    PandaGen.prototype.loadLexicalVar = function (node, level, slot) {
        this.add(node, bcGenUtil_1.loadLexicalVar(level, slot));
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
    PandaGen.prototype.defineClassWithBuffer = function (node, name, idx, parameterLength, base) {
        this.add(node, bcGenUtil_1.defineClassWithBuffer(name, idx, parameterLength, vregisterCache_1.getVregisterCache(this, vregisterCache_1.CacheList.LexEnv), base));
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
    PandaGen.prototype.createRegExpWithLiteral = function (node, pattern, flags) {
        this.add(node, bcGenUtil_1.createRegExpWithLiteral(pattern, flags));
    };
    PandaGen.prototype.stLetToGlobalRecord = function (node, string_id) {
        this.add(node, bcGenUtil_1.stLetToGlobalRecord(string_id));
    };
    PandaGen.prototype.stConstToGlobalRecord = function (node, string_id) {
        this.add(node, bcGenUtil_1.stConstToGlobalRecord(string_id));
    };
    PandaGen.prototype.stClassToGlobalRecord = function (node, string_id) {
        this.add(node, bcGenUtil_1.stClassToGlobalRecord(string_id));
    };
    PandaGen.prototype.binaryRelation = function (node, op, lhs) {
        var falseLabel = new irnodes_1.Label();
        var endLabel = new irnodes_1.Label();
        switch (op) {
            case typescript_1.SyntaxKind.LessThanToken:
                this.add(node, new irnodes_1.EcmaLessdyn(lhs));
                break;
            case typescript_1.SyntaxKind.GreaterThanToken:
                this.add(node, new irnodes_1.EcmaGreaterdyn(lhs));
                break;
            case typescript_1.SyntaxKind.LessThanEqualsToken:
                this.add(node, new irnodes_1.EcmaLesseqdyn(lhs));
                break;
            case typescript_1.SyntaxKind.GreaterThanEqualsToken:
                this.add(node, new irnodes_1.EcmaGreatereqdyn(lhs));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsToken:
                this.add(node, new irnodes_1.EcmaEqdyn(lhs));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsToken:
                this.add(node, new irnodes_1.EcmaNoteqdyn(lhs));
                break;
            case typescript_1.SyntaxKind.EqualsEqualsEqualsToken:
                this.add(node, new irnodes_1.EcmaStricteqdyn(lhs));
                break;
            case typescript_1.SyntaxKind.ExclamationEqualsEqualsToken:
                this.add(node, new irnodes_1.EcmaStrictnoteqdyn(lhs));
                break;
            default:
                break;
        }
        this.add(node, new irnodes_1.Jeqz(falseLabel));
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