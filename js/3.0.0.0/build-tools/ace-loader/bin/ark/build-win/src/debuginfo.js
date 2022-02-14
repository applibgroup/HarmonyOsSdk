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
exports.DebugInfo = exports.NodeKind = exports.VariableDebugInfo = exports.DebugPosInfo = void 0;
var ts = __importStar(require("typescript"));
var cmdOptions_1 = require("./cmdOptions");
var irnodes_1 = require("./irnodes");
var jshelpers = __importStar(require("./jshelpers"));
var DebugPosInfo = /** @class */ (function () {
    function DebugPosInfo() {
        this.boundLeft = 0;
        this.boundRight = 0;
        this.lineNum = -1;
        this.columnNum = -1;
        this.wholeLine = "";
        this.nodeKind = NodeKind.FirstNodeOfFunction;
    }
    DebugPosInfo.prototype.setDebugPosInfoNodeState = function (extendedNode) {
        if (DebugInfo.isNode(extendedNode)) {
            this.nodeKind = NodeKind.Normal;
        }
        else {
            this.nodeKind = extendedNode;
        }
    };
    DebugPosInfo.prototype.getDebugPosInfoNodeState = function () {
        return this.nodeKind;
    };
    DebugPosInfo.prototype.setBoundLeft = function (boundLeft) {
        this.boundLeft = boundLeft;
    };
    DebugPosInfo.prototype.getBoundLeft = function () {
        return this.boundLeft;
    };
    DebugPosInfo.prototype.setBoundRight = function (boundRight) {
        this.boundRight = boundRight;
    };
    DebugPosInfo.prototype.getBoundRight = function () {
        return this.boundRight;
    };
    DebugPosInfo.prototype.setSourecLineNum = function (lineNum) {
        this.lineNum = lineNum;
    };
    DebugPosInfo.prototype.getSourceLineNum = function () {
        return this.lineNum;
    };
    DebugPosInfo.prototype.setSourecColumnNum = function (columnNum) {
        this.columnNum = columnNum;
    };
    DebugPosInfo.prototype.getSourceColumnNum = function () {
        return this.columnNum;
    };
    DebugPosInfo.prototype.setWholeLine = function (wholeLine) {
        this.wholeLine = wholeLine;
    };
    DebugPosInfo.prototype.getWholeLine = function () {
        return this.wholeLine;
    };
    DebugPosInfo.prototype.ClearMembersForReleaseBuild = function () {
        this.ClearMembersForDebugBuild();
        this.boundLeft = undefined;
        this.boundRight = undefined;
    };
    DebugPosInfo.prototype.ClearMembersForDebugBuild = function () {
        this.wholeLine = undefined;
        this.nodeKind = undefined;
    };
    return DebugPosInfo;
}());
exports.DebugPosInfo = DebugPosInfo;
var VariableDebugInfo = /** @class */ (function () {
    function VariableDebugInfo(name, signature, signatureType, reg, start, length) {
        if (start === void 0) { start = 0; }
        if (length === void 0) { length = 0; }
        this.name = "";
        this.signature = "";
        this.signatureType = "";
        this.reg = -1;
        this.start = -1;
        this.length = -1;
        this.name = name;
        this.signature = signature;
        this.signatureType = signatureType;
        this.reg = reg;
        this.start = start;
        this.length = length;
    }
    VariableDebugInfo.prototype.setStart = function (start) {
        this.start = start;
    };
    VariableDebugInfo.prototype.getStart = function () {
        return this.start;
    };
    VariableDebugInfo.prototype.setLength = function (length) {
        this.length = length;
    };
    return VariableDebugInfo;
}());
exports.VariableDebugInfo = VariableDebugInfo;
var NodeKind;
(function (NodeKind) {
    NodeKind[NodeKind["Normal"] = 0] = "Normal";
    NodeKind[NodeKind["Invalid"] = 1] = "Invalid";
    NodeKind[NodeKind["FirstNodeOfFunction"] = 2] = "FirstNodeOfFunction";
})(NodeKind = exports.NodeKind || (exports.NodeKind = {}));
var DebugInfo = /** @class */ (function () {
    function DebugInfo() {
    }
    DebugInfo.isNode = function (extendedNode) {
        if (extendedNode != NodeKind.Invalid &&
            extendedNode != NodeKind.FirstNodeOfFunction &&
            extendedNode != NodeKind.Normal) {
            return true;
        }
        return false;
    };
    DebugInfo.updateLastNode = function (lastNode) {
        if (DebugInfo.isNode(lastNode)) {
            DebugInfo.lastNode = lastNode;
        }
    };
    DebugInfo.getLastNode = function () {
        return DebugInfo.lastNode;
    };
    DebugInfo.setPosInfoForUninitializeIns = function (posInfo, pandaGen) {
        var firstStmt = pandaGen.getFirstStmt();
        if (firstStmt) {
            var file = jshelpers.getSourceFileOfNode(firstStmt);
            var loc = file.getLineAndCharacterOfPosition(firstStmt.getStart());
            var wholeLineText = firstStmt.getText();
            posInfo.setSourecLineNum(loc.line);
            posInfo.setSourecColumnNum(loc.character);
            posInfo.setWholeLine(wholeLineText);
        }
    };
    DebugInfo.addScope = function (scope) {
        DebugInfo.scopeArray.push(scope);
    };
    DebugInfo.getScopeArray = function () {
        return DebugInfo.scopeArray;
    };
    DebugInfo.clearScopeArray = function () {
        DebugInfo.scopeArray = [];
    };
    DebugInfo.setDebuginfoForIns = function (node) {
        var insns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            insns[_i - 1] = arguments[_i];
        }
        DebugInfo.updateLastNode(node);
        var lineNumber = -1;
        var columnNumber = -1;
        var wholeLineText = "";
        if (DebugInfo.isNode(node)) {
            var tsNode = (node);
            var file = jshelpers.getSourceFileOfNode(node);
            if (!file) {
                return;
            }
            var loc = file.getLineAndCharacterOfPosition(tsNode.getStart());
            wholeLineText = tsNode.getText();
            lineNumber = loc.line;
            columnNumber = loc.character;
        }
        for (var i = 0; i < insns.length; i++) {
            var pos = new DebugPosInfo();
            pos.setSourecLineNum(lineNumber);
            pos.setSourecColumnNum(columnNumber);
            pos.setWholeLine(wholeLineText);
            pos.setDebugPosInfoNodeState(node);
            insns[i].debugPosInfo = pos;
        }
    };
    DebugInfo.matchFormat = function (irnode) {
        var formatIndex = 0;
        for (var i = 0; i < irnode.formats[0].length; i++) {
            if (irnode.operands[i] instanceof irnodes_1.VReg) {
                for (var j = 0; j < irnode.formats.length; j++) {
                    if (irnode.operands[i].num < (1 << irnode.formats[j][i].bitwidth)) {
                        formatIndex = j > formatIndex ? j : formatIndex;
                        continue;
                    }
                }
            }
        }
        return formatIndex;
    };
    DebugInfo.getIRNodeWholeLength = function (irnode) {
        if (irnode instanceof irnodes_1.Label || irnode instanceof irnodes_1.DebugInsPlaceHolder) {
            return 0;
        }
        var length = 1;
        if (!irnode.formats[0]) {
            return 0;
        }
        var formatIndex = this.matchFormat(irnode);
        var formats = irnode.formats[formatIndex];
        // count operands length
        for (var i = 0; i < formats.length; i++) {
            if ((irnode instanceof irnodes_1.CalliDynRange) || (irnode instanceof irnodes_1.CallRange)) {
                length += formats[0].bitwidth / 8; // 8 indicates that one byte is composed of 8 bits
                length += formats[1].bitwidth / 8;
                break;
            }
            length += (formats[i].bitwidth / 8);
        }
        return length;
    };
    DebugInfo.setVariablesDebugInfoInternal = function (pandaGen, scope) {
        var insns = pandaGen.getInsns();
        // count variables offset
        var startIdx = 0;
        var startIns = scope.getScopeStartIns();
        var endIns = scope.getScopeEndIns();
        var _loop_1 = function (i) {
            if (startIns == insns[i]) {
                startIdx = i;
            }
            if (endIns == insns[i]) {
                var name2variable = scope.getName2variable();
                name2variable.forEach(function (value, key) {
                    if (!value.hasAlreadyBinded()) {
                        return;
                    }
                    var variableInfo = new VariableDebugInfo(key, "any", "any", (value.getVreg().num));
                    variableInfo.setStart(startIdx);
                    variableInfo.setLength(i - startIdx + 1);
                    pandaGen.addDebugVariableInfo(variableInfo);
                });
            }
        };
        for (var i = 0; i < insns.length; i++) {
            _loop_1(i);
        }
    };
    DebugInfo.setPosDebugInfo = function (pandaGen) {
        var insns = pandaGen.getInsns();
        var offset = 0;
        for (var i = 0; i < insns.length; i++) {
            if (insns[i].debugPosInfo.getDebugPosInfoNodeState() == NodeKind.FirstNodeOfFunction) {
                DebugInfo.setPosInfoForUninitializeIns(insns[i].debugPosInfo, pandaGen);
            }
        }
        // count pos offset
        for (var i = 0; i < insns.length; i++) {
            var insLength = DebugInfo.getIRNodeWholeLength(insns[i]);
            var insnsDebugPosInfo = insns[i].debugPosInfo;
            if (insnsDebugPosInfo) {
                insnsDebugPosInfo.setBoundLeft(offset);
                insnsDebugPosInfo.setBoundRight(offset + insLength);
            }
            offset += insLength;
            if (i > 0 && insns[i - 1] instanceof irnodes_1.Label) {
                insns[i - 1].debugPosInfo = insns[i].debugPosInfo;
            }
        }
    };
    DebugInfo.removeDebugIns = function (pandaGen) {
        var insns = pandaGen.getInsns();
        for (var i = 0; i < insns.length; i++) {
            if (insns[i] instanceof irnodes_1.DebugInsPlaceHolder) {
                insns.splice(i, 1);
                i--;
            }
        }
    };
    DebugInfo.setVariablesDebugInfo = function (pandaGen) {
        var recordArray = DebugInfo.getScopeArray();
        recordArray.forEach(function (scope) {
            DebugInfo.setVariablesDebugInfoInternal(pandaGen, scope);
        });
    };
    DebugInfo.setDebugInfo = function (pandaGen) {
        // set position debug info
        DebugInfo.setPosDebugInfo(pandaGen);
        if (cmdOptions_1.CmdOptions.isDebugMode()) {
            // set variable debug info
            DebugInfo.setVariablesDebugInfo(pandaGen);
            // delete ins placeholder
            DebugInfo.removeDebugIns(pandaGen);
            // clear scope array
            DebugInfo.clearScopeArray();
            return;
        }
    };
    DebugInfo.setSourceFileDebugInfo = function (pandaGen, node) {
        var sourceFile = jshelpers.getSourceFileOfNode(node);
        pandaGen.setSourceFileDebugInfo(sourceFile.fileName);
        if (cmdOptions_1.CmdOptions.isDebugMode()) {
            if (ts.isSourceFile(node)) {
                pandaGen.setSourceCodeDebugInfo(node.text);
            }
            return;
        }
    };
    DebugInfo.copyDebugInfo = function (insn, expansion) {
        var debugPosInfo = insn.debugPosInfo;
        for (var j = 0; j < expansion.length; j++) {
            expansion[j].debugPosInfo = debugPosInfo;
        }
    };
    DebugInfo.addDebugIns = function (scope, pandaGen, isStart) {
        if (!cmdOptions_1.CmdOptions.isDebugMode()) {
            return;
        }
        var insns = pandaGen.getInsns();
        var placeHolder = new irnodes_1.DebugInsPlaceHolder();
        insns.push(placeHolder);
        if (isStart) {
            scope.setScopeStartIns(placeHolder);
            DebugInfo.addScope(scope);
        }
        else {
            scope.setScopeEndIns(placeHolder);
        }
    };
    DebugInfo.scopeArray = [];
    return DebugInfo;
}());
exports.DebugInfo = DebugInfo;
//# sourceMappingURL=debuginfo.js.map