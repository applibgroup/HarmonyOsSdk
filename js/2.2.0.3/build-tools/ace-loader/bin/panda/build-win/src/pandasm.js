"use strict";
exports.__esModule = true;
exports.CatchTable = exports.Program = exports.Record = exports.Function = exports.Ins = exports.Signature = exports.Metadata = void 0;
var Metadata = /** @class */ (function () {
    function Metadata(attribute) {
        if (attribute === void 0) { attribute = ""; }
        this.attribute = attribute;
    }
    return Metadata;
}());
exports.Metadata = Metadata;
var Signature = /** @class */ (function () {
    function Signature(retType, params) {
        if (params === void 0) { params = []; }
        this.retType = retType;
        this.params = params; //TODO
    }
    return Signature;
}());
exports.Signature = Signature;
var Ins = /** @class */ (function () {
    function Ins(opcode, regs, ids, imms, label, debug_pos_info) {
        if (regs === void 0) { regs = []; }
        if (ids === void 0) { ids = []; }
        if (imms === void 0) { imms = []; }
        if (label === void 0) { label = ""; }
        this.opcode = opcode;
        this.regs = regs;
        this.ids = ids;
        this.imms = imms;
        this.label = label;
        this.debug_pos_info = debug_pos_info;
    }
    return Ins;
}());
exports.Ins = Ins;
var Function = /** @class */ (function () {
    function Function(name, signature, regs_num, ins, labels, variables, sourceFile, sourceCode, icSize, parameterLength, funcName) {
        if (regs_num === void 0) { regs_num = 0; }
        if (ins === void 0) { ins = []; }
        if (labels === void 0) { labels = []; }
        if (variables === void 0) { variables = []; }
        if (sourceFile === void 0) { sourceFile = ""; }
        if (sourceCode === void 0) { sourceCode = ""; }
        if (icSize === void 0) { icSize = 0; }
        if (parameterLength === void 0) { parameterLength = 0; }
        if (funcName === void 0) { funcName = ""; }
        this.name = name;
        this.signature = signature;
        this.ins = ins;
        this.labels = labels;
        this.regs_num = regs_num;
        this.metadata = new Metadata();
        this.catchTables = [];
        this.variables = variables;
        this.sourceFile = sourceFile;
        this.sourceCode = sourceCode;
        this.icSize = icSize;
        this.parameterLength = parameterLength;
        this.funcName = funcName;
    }
    return Function;
}());
exports.Function = Function;
var Record = /** @class */ (function () {
    function Record(name, whole_line, bound_left, bound_right, line_number) {
        this.name = name;
        this.whole_line = whole_line;
        this.bound_left = bound_left;
        this.bound_right = bound_right;
        this.line_number = line_number;
        this.metadata = new Metadata();
    }
    return Record;
}());
exports.Record = Record;
var Program = /** @class */ (function () {
    function Program() {
        this.functions = [];
        this.records = [];
        this.strings = new Set();
        this.strings_arr = [];
        this.literalArrays = [];
        this.module_mode = false;
        this.debug_mode = false;
        this.log_enabled = false;
        this.opt_level = 1;
        this.opt_log_level = "error";
    }
    Program.prototype.finalize = function () {
        this.strings_arr = Array.from(this.strings);
    };
    return Program;
}());
exports.Program = Program;
var CatchTable = /** @class */ (function () {
    //public catchEndLabel: string;
    function CatchTable(tryBeginLabel, tryEndLabel, catchBeginLabel) {
        this.tryBeginLabel = tryBeginLabel;
        this.tryEndLabel = tryEndLabel;
        this.catchBeginLabel = catchBeginLabel;
    }
    return CatchTable;
}());
exports.CatchTable = CatchTable;
//# sourceMappingURL=pandasm.js.map