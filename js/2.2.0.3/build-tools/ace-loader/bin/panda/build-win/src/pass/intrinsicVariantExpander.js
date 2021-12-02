"use strict";
// Huawei Technologies Co.,Ltd.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.IntrinsicVariantExpander = void 0;
var assemblyDumper_1 = require("../assemblyDumper");
var builtinsMap_1 = require("../builtinsMap");
var debuginfo_1 = require("../debuginfo");
var irnodes_1 = require("../irnodes");
var ExpanderInternal = /** @class */ (function () {
    function ExpanderInternal() {
        this.temps = [];
    }
    ExpanderInternal.prototype.getTemp = function () {
        if (this.temps.length > 0) {
            return this.temps.pop();
        }
        else {
            return new irnodes_1.VReg();
        }
    };
    ExpanderInternal.prototype.freeTemps = function (temps) {
        this.temps = this.temps.concat(temps);
    };
    // this method records the intrinsic usage during the whole source code
    // it can help dumper to write the intrinsic function declaration in the front of bytecode
    ExpanderInternal.prototype.intrinsicDeclRec = function (ins) {
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
    ExpanderInternal.prototype.expandInstruction = function (ins) {
        var operands = ins.operands;
        var formats = ins.formats;
        var expansion = [];
        var callArgs = [];
        var tempVregs = [];
        var format = formats[0];
        if (ins.kind == irnodes_1.IRNodeKind.DEFINE_GLOBAL_VAR) {
            for (var i = 0; i < format.length; ++i) {
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
                        expansion.push(new irnodes_1.StaDyn(tempImm));
                    }
                    else if (type == irnodes_1.ResultType.Float) {
                        expansion.push(new irnodes_1.FldaiDyn(imm));
                        expansion.push(new irnodes_1.StaDyn(tempImm));
                    }
                    else {
                        throw new Error("Unexpected result type for an Imm");
                    }
                    callArgs.push(tempImm);
                    tempVregs.push(tempImm);
                    continue;
                }
                // Put id into vreg as a string object.
                // TODO use integer id instead.
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
            expansion.push(builtinsMap_1.BuiltinExpander.expand2Builtin(ins, callArgs));
        }
        else {
            expansion.push(builtinsMap_1.BuiltinExpander.expand2Builtin(ins, ins.operands));
        }
        return [expansion, tempVregs];
    };
    ExpanderInternal.prototype.run = function (pg) {
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
    return ExpanderInternal;
}());
var IntrinsicVariantExpander = /** @class */ (function () {
    function IntrinsicVariantExpander() {
    }
    IntrinsicVariantExpander.prototype.run = function (pg) {
        var intrinsicExpanderInternal = new ExpanderInternal();
        intrinsicExpanderInternal.run(pg);
    };
    return IntrinsicVariantExpander;
}());
exports.IntrinsicVariantExpander = IntrinsicVariantExpander;
//# sourceMappingURL=intrinsicVariantExpander.js.map