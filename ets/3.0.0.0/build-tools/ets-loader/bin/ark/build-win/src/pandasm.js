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
    function Signature(params, retType) {
        if (params === void 0) { params = 0; }
        this.params = params;
        this.retType = retType;
    }
    return Signature;
}());
exports.Signature = Signature;
var Ins = /** @class */ (function () {
    function Ins(op, regs, ids, imms, label, debug_pos_info) {
        if (regs === void 0) { regs = undefined; }
        if (ids === void 0) { ids = undefined; }
        if (imms === void 0) { imms = undefined; }
        if (label === void 0) { label = undefined; }
        if (debug_pos_info === void 0) { debug_pos_info = undefined; }
        this.op = op;
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
    function Function(name, signature, regs_num, ins, labels, variables, sourceFile, sourceCode) {
        if (regs_num === void 0) { regs_num = 0; }
        if (ins === void 0) { ins = []; }
        if (labels === void 0) { labels = []; }
        if (variables === void 0) { variables = undefined; }
        if (sourceFile === void 0) { sourceFile = ""; }
        if (sourceCode === void 0) { sourceCode = undefined; }
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
    function CatchTable(tryBeginLabel, tryEndLabel, catchBeginLabel) {
        this.tryBeginLabel = tryBeginLabel;
        this.tryEndLabel = tryEndLabel;
        this.catchBeginLabel = catchBeginLabel;
    }
    return CatchTable;
}());
exports.CatchTable = CatchTable;
//# sourceMappingURL=pandasm.js.map