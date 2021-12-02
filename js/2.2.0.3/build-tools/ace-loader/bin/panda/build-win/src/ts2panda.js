"use strict";
// Huawei Technologies Co.,Ltd.
exports.__esModule = true;
exports.Ts2Panda = void 0;
var fs_1 = require("fs");
var assemblyDumper_1 = require("./assemblyDumper");
var util_1 = require("./base/util");
var cmdOptions_1 = require("./cmdOptions");
var debuginfo_1 = require("./debuginfo");
var irnodes_1 = require("./irnodes");
var log_1 = require("./log");
var pandagen_1 = require("./pandagen");
var pandasm_1 = require("./pandasm");
var tryStatement_1 = require("./statement/tryStatement");
var path = require("path");
var Ts2Panda = /** @class */ (function () {
    function Ts2Panda(pg) {
        this.labelPrefix = "LABEL_";
        this.opcodePrefix = "panda::pandasm::Opcode::";
        this.pg = pg;
        this.labels = new Map();
    }
    Ts2Panda.dumpHeader = function () {
        if (cmdOptions_1.CmdOptions.isVariantBytecode()) {
            return;
        }
        var intrinsicsRecord = new pandasm_1.Record("Ecmascript.Intrinsics", ".record Ecmascript.Intrinsics <external>", 8, 29, 3);
        intrinsicsRecord.metadata.attribute = "external";
        Ts2Panda.program.records.push(intrinsicsRecord);
        assemblyDumper_1.AssemblyDumper.intrinsicRec.forEach(function (intrinsicInfo, mnemonic) {
            var intrinsicArgNum = intrinsicInfo.argsNum;
            var args = [];
            for (var i = 0; i < intrinsicArgNum; i++) {
                args.push("any");
            }
            var funcName = "Ecmascript.Intrinsics." + mnemonic;
            var func = new pandasm_1.Function(funcName, new pandasm_1.Signature(intrinsicInfo.returnType, args), undefined, undefined, undefined, undefined);
            func.metadata.attribute = "external";
            Ts2Panda.program.functions.push(func);
        });
    };
    Ts2Panda.prototype.getFuncSignature = function () {
        var parametersCount = this.pg.getParametersCount();
        var parameters = [];
        for (var i = 0; i < parametersCount; i++) {
            parameters.push("any");
        }
        return new pandasm_1.Signature("any", parameters);
    };
    Ts2Panda.prototype.getFuncInsnsAndRegsNum = function () {
        var _this = this;
        var insns = [];
        var labels = [];
        this.pg.getInsns().forEach(function (insn) {
            //let insOpcode = this.opcodePrefix + IRNodeKind[insn.kind];
            var insOpcode = insn.mnemonic;
            var insRegs = [];
            var insIds = [];
            var insImms = [];
            var insLabel = "";
            var insDebugInfo = new debuginfo_1.DebugPosInfo();
            if (insn instanceof irnodes_1.Label) {
                insLabel = _this.labelPrefix + insn.id;
                labels.push(insLabel);
            }
            else if (insn instanceof irnodes_1.BuiltinR2i) {
                // BuiltinR2i's format is builtin.r2i imm1, imm2, v:in:top
                // and it may represents DynRange insn so we only pass the first vreg
                var operands = insn.operands;
                insImms.push(operands[0].value, operands[1].value);
                insRegs.push(operands[2].num);
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
                        //if (insOpcode == this.opcodePrefix + "LDA_STR") {
                        Ts2Panda.program.strings.add(operand);
                    }
                    else if (operand instanceof irnodes_1.Label) {
                        var labelName = _this.labelPrefix + operand.id;
                        insIds.push(labelName);
                    }
                });
            }
            insDebugInfo = insn.debugPosInfo;
            insns.push(new pandasm_1.Ins(insOpcode, insRegs, insIds, insImms, insLabel, insDebugInfo));
        });
        return {
            insns: insns,
            regsNum: (this.pg.getTotalRegsNum() - this.pg.getParametersCount()),
            labels: labels
        };
    };
    Ts2Panda.dumpConstantPool = function () {
        var _a;
        var literalArrayBuffer = pandagen_1.PandaGen.getLiteralArrayBuffer();
        (_a = Ts2Panda.program.literalArrays).push.apply(_a, literalArrayBuffer);
    };
    Ts2Panda.prototype.dump = function () {
        var _this = this;
        var funcName = this.pg.internalName;
        var funcSignature = this.getFuncSignature();
        var funcInsnsAndRegsNum = this.getFuncInsnsAndRegsNum();
        var variables = this.pg.getVariableDebugInfoArray();
        var sourceFile = this.pg.getSourceFileDebugInfo();
        var sourceCode = this.pg.getSourceCodeDebugInfo();
        var icSize = this.pg.getICSize();
        var parameterLength = this.pg.getParameterLength();
        var realName = this.pg.getFuncName();
        var func = new pandasm_1.Function(funcName, funcSignature, funcInsnsAndRegsNum.regsNum, funcInsnsAndRegsNum.insns, funcInsnsAndRegsNum.labels, variables, sourceFile, sourceCode, icSize, parameterLength, realName);
        var catchTables = tryStatement_1.generateCatchTables(this.pg.getCatchMap());
        catchTables.forEach(function (catchTable) {
            var catchBeginLabel = catchTable.getCatchBeginLabel();
            var labelPairs = catchTable.getLabelPairs();
            labelPairs.forEach(function (labelPair) {
                func.catchTables.push(new pandasm_1.CatchTable(_this.labelPrefix + labelPair.getBeginLabel().id, _this.labelPrefix + labelPair.getEndLabel().id, _this.labelPrefix + catchBeginLabel.id));
            });
        });
        log_1.LOGD(func);
        Ts2Panda.program.functions.push(func);
    };
    Ts2Panda.dumpToJsonFile = function (data, jsonFileName) {
        var char = '\n';
        var i = 0;
        var j = 0;
        var new_data = "";
        while ((j = data.indexOf(char, i)) !== -1) {
            var tmp = data.substring(i, j);
            if (tmp.indexOf("\\u") != -1) {
                tmp = util_1.addUnicodeEscape(tmp);
            }
            new_data = new_data.concat(tmp, "\n");
            i = j + 1;
        }
        new_data = new_data.concat("}\n");
        fs_1.writeFileSync(jsonFileName, new_data);
        log_1.LOGD("Successfully generated ", "" + jsonFileName);
    };
    Ts2Panda.dumpToBinFile = function (filename) {
        Ts2Panda.program.finalize();
        Ts2Panda.program.module_mode = cmdOptions_1.CmdOptions.isModules();
        Ts2Panda.program.debug_mode = cmdOptions_1.CmdOptions.isDebugMode();
        Ts2Panda.program.log_enabled = cmdOptions_1.CmdOptions.isEnableDebugLog();
        Ts2Panda.program.opt_level = cmdOptions_1.CmdOptions.getOptLevel();
        Ts2Panda.program.opt_log_level = cmdOptions_1.CmdOptions.getOptLogLevel();
        var filename_pre = filename.substring(0, filename.lastIndexOf("."));
        var jsonFileName = filename_pre.concat(".json");
        var program = Ts2Panda.program;
        var data = JSON.stringify(program, null, 2);
        this.dumpToJsonFile(data, jsonFileName);
        var ts2abc = path.join(path.resolve(__dirname, '../bin'), "ts2abc");
        var ret = util_1.execute("" + ts2abc, ["" + jsonFileName, "" + filename]);
        if (ret) {
            log_1.LOGD("Successful execution ", ts2abc + " " + jsonFileName + " " + filename + '\n');
        }
    };
    Ts2Panda.program = new pandasm_1.Program();
    return Ts2Panda;
}());
exports.Ts2Panda = Ts2Panda;
//# sourceMappingURL=ts2panda.js.map