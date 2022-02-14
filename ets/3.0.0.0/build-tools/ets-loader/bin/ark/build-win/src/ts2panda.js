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
exports.Ts2Panda = void 0;
var cmdOptions_1 = require("./cmdOptions");
var debuginfo_1 = require("./debuginfo");
var irnodes_1 = require("./irnodes");
var log_1 = require("./log");
var pandagen_1 = require("./pandagen");
var pandasm_1 = require("./pandasm");
var tryStatement_1 = require("./statement/tryStatement");
var util_1 = require("./base/util");
var dollarSign = /\$/g;
var JsonType = {
    "function": 0,
    "record": 1,
    "string": 2,
    "literal_arr": 3,
    "options": 4
};
var Ts2Panda = /** @class */ (function () {
    function Ts2Panda() {
    }
    Ts2Panda.getFuncSignature = function (pg) {
        return new pandasm_1.Signature(pg.getParametersCount());
    };
    Ts2Panda.getFuncInsnsAndRegsNum = function (pg) {
        var insns = [];
        var labels = [];
        pg.getInsns().forEach(function (insn) {
            var insOpcode = insn.mnemonic;
            var insRegs = [];
            var insIds = [];
            var insImms = [];
            var insLabel = "";
            var insDebugInfo = new debuginfo_1.DebugPosInfo();
            if (insn instanceof irnodes_1.Label) {
                insLabel = Ts2Panda.labelPrefix + insn.id;
                labels.push(insLabel);
            }
            else if (util_1.isRangeInst(insn)) {
                // For DynRange insn we only pass the first vreg of continous vreg array
                var operands = insn.operands;
                insImms.push(operands[0].value);
                insRegs.push(operands[1].num);
                if (util_1.getRangeStartVregPos(insn) == 2) {
                    insRegs.push(operands[2].num);
                }
            }
            else {
                insn.operands.forEach(function (operand) {
                    if (operand instanceof irnodes_1.VReg) {
                        var v = operand;
                        insRegs.push(v.num);
                    }
                    else if (operand instanceof irnodes_1.Imm) {
                        var imm = operand;
                        insImms.push(imm.value);
                    }
                    else if (typeof (operand) === "string") {
                        insIds.push(operand);
                        Ts2Panda.strings.add(operand);
                    }
                    else if (operand instanceof irnodes_1.Label) {
                        var labelName = Ts2Panda.labelPrefix + operand.id;
                        insIds.push(labelName);
                    }
                });
            }
            insDebugInfo = insn.debugPosInfo;
            if (cmdOptions_1.CmdOptions.isDebugMode()) {
                insDebugInfo.ClearMembersForDebugBuild();
            }
            else {
                insDebugInfo.ClearMembersForReleaseBuild();
            }
            insns.push(new pandasm_1.Ins(insOpcode, insRegs.length == 0 ? undefined : insRegs, insIds.length == 0 ? undefined : insIds, insImms.length == 0 ? undefined : insImms, insLabel === "" ? undefined : insLabel, insDebugInfo));
        });
        return {
            insns: insns,
            regsNum: (pg.getTotalRegsNum() - pg.getParametersCount()),
            labels: labels
        };
    };
    Ts2Panda.dumpStringsArray = function (ts2abc) {
        var strings_arr = Array.from(Ts2Panda.strings);
        if (cmdOptions_1.CmdOptions.isEnableDebugLog()) {
            Ts2Panda.jsonString += util_1.escapeUnicode(JSON.stringify(strings_arr, null, 2));
        }
        strings_arr.forEach(function (str) {
            var strObject = {
                "type": JsonType.string,
                "string": str
            };
            var jsonStrUnicode = util_1.escapeUnicode(JSON.stringify(strObject, null, 2));
            Ts2Panda.jsonString += jsonStrUnicode;
            jsonStrUnicode = "$" + jsonStrUnicode.replace(dollarSign, '#$') + "$";
            ts2abc.stdio[3].write(jsonStrUnicode + '\n');
        });
    };
    Ts2Panda.dumpConstantPool = function (ts2abc) {
        var literalArrays = pandagen_1.PandaGen.getLiteralArrayBuffer();
        if (cmdOptions_1.CmdOptions.isEnableDebugLog()) {
            Ts2Panda.jsonString += util_1.escapeUnicode(JSON.stringify(literalArrays, null, 2));
        }
        literalArrays.forEach(function (literalArray) {
            var literalArrayObject = {
                "type": JsonType.literal_arr,
                "literalArray": literalArray
            };
            var jsonLiteralArrUnicode = util_1.escapeUnicode(JSON.stringify(literalArrayObject, null, 2));
            jsonLiteralArrUnicode = "$" + jsonLiteralArrUnicode.replace(dollarSign, '#$') + "$";
            ts2abc.stdio[3].write(jsonLiteralArrUnicode + '\n');
        });
    };
    Ts2Panda.dumpCmdOptions = function (ts2abc) {
        var options = {
            "type": JsonType.options,
            "module_mode": cmdOptions_1.CmdOptions.isModules(),
            "debug_mode": cmdOptions_1.CmdOptions.isDebugMode(),
            "log_enabled": cmdOptions_1.CmdOptions.isEnableDebugLog(),
            "opt_level": cmdOptions_1.CmdOptions.getOptLevel(),
            "opt_log_level": cmdOptions_1.CmdOptions.getOptLogLevel()
        };
        var jsonOpt = JSON.stringify(options, null, 2);
        if (cmdOptions_1.CmdOptions.isEnableDebugLog()) {
            Ts2Panda.jsonString += jsonOpt;
        }
        jsonOpt = "$" + jsonOpt.replace(dollarSign, '#$') + "$";
        ts2abc.stdio[3].write(jsonOpt + '\n');
    };
    Ts2Panda.dumpPandaGen = function (pg, ts2abc) {
        var funcName = pg.internalName;
        var funcSignature = Ts2Panda.getFuncSignature(pg);
        var funcInsnsAndRegsNum = Ts2Panda.getFuncInsnsAndRegsNum(pg);
        var sourceFile = pg.getSourceFileDebugInfo();
        var variables, sourceCode;
        if (cmdOptions_1.CmdOptions.isDebugMode()) {
            variables = pg.getVariableDebugInfoArray();
            sourceCode = pg.getSourceCodeDebugInfo();
        }
        else {
            variables = undefined;
            sourceCode = undefined;
        }
        var func = new pandasm_1.Function(funcName, funcSignature, funcInsnsAndRegsNum.regsNum, funcInsnsAndRegsNum.insns, funcInsnsAndRegsNum.labels, variables, sourceFile, sourceCode);
        var catchTables = tryStatement_1.generateCatchTables(pg.getCatchMap());
        catchTables.forEach(function (catchTable) {
            var catchBeginLabel = catchTable.getCatchBeginLabel();
            var labelPairs = catchTable.getLabelPairs();
            labelPairs.forEach(function (labelPair) {
                func.catchTables.push(new pandasm_1.CatchTable(Ts2Panda.labelPrefix + labelPair.getBeginLabel().id, Ts2Panda.labelPrefix + labelPair.getEndLabel().id, Ts2Panda.labelPrefix + catchBeginLabel.id));
            });
        });
        log_1.LOGD(func);
        var funcObject = {
            "type": JsonType["function"],
            "func_body": func
        };
        var jsonFuncUnicode = util_1.escapeUnicode(JSON.stringify(funcObject, null, 2));
        if (cmdOptions_1.CmdOptions.isEnableDebugLog()) {
            Ts2Panda.jsonString += jsonFuncUnicode;
        }
        jsonFuncUnicode = "$" + jsonFuncUnicode.replace(dollarSign, '#$') + "$";
        ts2abc.stdio[3].write(jsonFuncUnicode + '\n');
    };
    Ts2Panda.clearDumpData = function () {
        Ts2Panda.strings.clear();
        Ts2Panda.jsonString = "";
    };
    Ts2Panda.strings = new Set();
    Ts2Panda.labelPrefix = "LABEL_";
    Ts2Panda.jsonString = "";
    return Ts2Panda;
}());
exports.Ts2Panda = Ts2Panda;
//# sourceMappingURL=ts2panda.js.map