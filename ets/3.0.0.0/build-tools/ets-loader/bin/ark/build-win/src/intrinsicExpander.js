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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.IntrinsicExpander = exports.IntrinsicExpanderInternal = void 0;
var assemblyDumper_1 = require("./assemblyDumper");
var debuginfo_1 = require("./debuginfo");
var irnodes_1 = require("./irnodes");
var IntrinsicExpanderInternal = /** @class */ (function () {
    function IntrinsicExpanderInternal() {
        this.temps = [];
    }
    IntrinsicExpanderInternal.prototype.getTemp = function () {
        if (this.temps.length > 0) {
            return this.temps.pop();
        }
        else {
            return new irnodes_1.VReg();
        }
    };
    IntrinsicExpanderInternal.prototype.freeTemps = function (temps) {
        this.temps = this.temps.concat(temps);
    };
    // this method records the intrinsic usage during the whole source code
    // it can help dumper to write the intrinsic function declaration in the front of bytecode
    IntrinsicExpanderInternal.prototype.intrinsicDeclRec = function (ins) {
        var intrinsicName = ins.mnemonic;
        var argsNum = ins.operands.length;
        var resultType = "";
        if (ins.resultIn() == irnodes_1.ResultDst.None) {
            resultType = "void";
        }
        else if (ins.resultIn() == irnodes_1.ResultDst.Acc) {
            resultType = "any";
        }
        else {
            throw new Error("resultType of" + ins.resultIn() + "is not implement");
        }
        var intrinsicInfo = new assemblyDumper_1.IntrinsicInfo(intrinsicName, argsNum, resultType);
        assemblyDumper_1.AssemblyDumper.intrinsicRec.set(ins.mnemonic, intrinsicInfo);
    };
    // Transforms a synthetic "intrinsic instruction" into an intrinsic function call.
    // Returns an array of instructions forming intrinsic call and
    // an array of temporary registers used for expansion.
    IntrinsicExpanderInternal.prototype.expandInstruction = function (ins) {
        var operands = ins.operands;
        var formats = ins.formats;
        var expansion = [];
        var callArgs = [];
        var tempVregs = [];
        var intrinsicName = "Ecmascript.Intrinsics." + ins.mnemonic;
        // Walk the rest of the arguments.
        for (var i = 0; i < operands.length; ++i) {
            var format = formats[0];
            var kind = void 0;
            kind = format[i].kind;
            var operand = operands[i];
            if (kind === irnodes_1.OperandKind.SrcVReg) {
                callArgs.push(operand);
                continue;
            }
            // Imm has to be put into a vreg to be passed to intrinsic.
            // for defineFuncDyn
            if (kind === irnodes_1.OperandKind.Imm) {
                var tempImm = this.getTemp();
                var imm = operand;
                var type = imm.resultType();
                if (type == irnodes_1.ResultType.Int || type == irnodes_1.ResultType.Long) {
                    expansion.push(new irnodes_1.LdaiDyn(imm));
                }
                else if (type == irnodes_1.ResultType.Float) {
                    expansion.push(new irnodes_1.FldaiDyn(imm));
                }
                else {
                    throw new Error("Unexpected result type for an Imm");
                }
                expansion.push(new irnodes_1.StaDyn(tempImm));
                callArgs.push(tempImm);
                tempVregs.push(tempImm);
                continue;
            }
            // Put id into vreg as a string object.
            if (kind === irnodes_1.OperandKind.Id) {
                var tempId = this.getTemp();
                expansion.push(new irnodes_1.LdaStr(operand));
                expansion.push(new irnodes_1.StaDyn(tempId));
                callArgs.push(tempId);
                tempVregs.push(tempId);
                continue;
            }
            // For simplicity, intrinsics shall not have destinations other than accumulator.
            // Also, no labels are allowed as operands.
            if (kind === irnodes_1.OperandKind.DstVReg
                || kind === irnodes_1.OperandKind.SrcDstVReg
                || ins.resultIn() === irnodes_1.ResultDst.VReg) {
                throw new Error("Intrinsic " + ins.mnemonic + " has unexpected operand kinds");
            }
            else {
                throw new Error("Unknown operand kind for intrinsic " + ins.mnemonic);
            }
        }
        // Call the intrinsic.
        switch (callArgs.length) {
            case 0:
                expansion.push(new irnodes_1.CallShort(intrinsicName));
                break;
            case 1:
                expansion.push(new irnodes_1.CallShort(intrinsicName, callArgs[0]));
                break;
            case 2:
                expansion.push(new irnodes_1.CallShort(intrinsicName, callArgs[0], callArgs[1]));
                break;
            case 3:
                expansion.push(new irnodes_1.Call(intrinsicName, callArgs[0], callArgs[1], callArgs[2]));
                break;
            case 4:
                expansion.push(new irnodes_1.Call(intrinsicName, callArgs[0], callArgs[1], callArgs[2], callArgs[3]));
                break;
            default:
                expansion.push(new irnodes_1.CallRange(intrinsicName, callArgs));
        }
        return [expansion, tempVregs];
    };
    IntrinsicExpanderInternal.prototype.run = function (pg) {
        var insns = pg.getInsns();
        var origTemps = pg.getTemps();
        for (var i = 0; i < insns.length; ++i) {
            var ins = insns[i];
            if (ins instanceof irnodes_1.Intrinsic) {
                // record the intrinsic
                if (!assemblyDumper_1.AssemblyDumper.intrinsicRec.has(ins.mnemonic)) {
                    this.intrinsicDeclRec(ins);
                }
                var _a = this.expandInstruction(ins), expansion = _a[0], temps = _a[1];
                // for debuginfo
                debuginfo_1.DebugInfo.copyDebugInfo(insns[i], expansion);
                insns.splice.apply(insns, __spreadArrays([i, 1], expansion));
                // Since we put something into the original array, its length changed.
                // Skip what we've just added.
                var step = expansion.length - 1;
                i += step;
                this.freeTemps(temps);
            }
        }
        // We need extra registers in the function.
        origTemps.push.apply(origTemps, this.temps);
    };
    return IntrinsicExpanderInternal;
}());
exports.IntrinsicExpanderInternal = IntrinsicExpanderInternal;
var IntrinsicExpander = /** @class */ (function () {
    function IntrinsicExpander() {
    }
    IntrinsicExpander.prototype.run = function (pg) {
        var intrinsicExpanderInternal = new IntrinsicExpanderInternal();
        intrinsicExpanderInternal.run(pg);
    };
    return IntrinsicExpander;
}());
exports.IntrinsicExpander = IntrinsicExpander;
//# sourceMappingURL=intrinsicExpander.js.map