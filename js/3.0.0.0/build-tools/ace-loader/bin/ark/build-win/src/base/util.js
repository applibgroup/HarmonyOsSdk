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
exports.getRangeStartVregPos = exports.getParameterLength4Ctor = exports.getParamLengthOfFunc = exports.isRestParameter = exports.getRangeExplicitVregNums = exports.isRangeInst = exports.listenErrorEvent = exports.listenChildExit = exports.terminateWritePipe = exports.initiateTs2abc = exports.escapeUnicode = exports.isAnonymousFunctionDefinition = exports.isUndefinedIdentifier = exports.isMemberExpression = exports.isBindingOrAssignmentPattern = exports.isArrayBindingOrAssignmentPattern = exports.isObjectBindingOrAssignmentPattern = exports.isBindingPattern = exports.addUnicodeEscape = exports.execute = exports.setVariableExported = exports.hasDefaultKeywordModifier = exports.hasExportKeywordModifier = exports.containSpreadElement = void 0;
var path = require("path");
var classStatement_1 = require("../statement/classStatement");
var ts = __importStar(require("typescript"));
var irnodes_1 = require("../irnodes");
var jshelpers = __importStar(require("../jshelpers"));
var log_1 = require("../log");
var scope_1 = require("../scope");
var syntaxCheckHelper_1 = require("../syntaxCheckHelper");
function containSpreadElement(args) {
    if (!args) {
        return false;
    }
    for (var i = 0; i < args.length; i++) {
        if (args[i].kind === ts.SyntaxKind.SpreadElement) {
            return true;
        }
    }
    return false;
}
exports.containSpreadElement = containSpreadElement;
function hasExportKeywordModifier(node) {
    var hasExport = false;
    if (node.modifiers) {
        node.modifiers.forEach(function (mod) {
            if (mod.kind == ts.SyntaxKind.ExportKeyword) {
                hasExport = true;
            }
        });
    }
    return hasExport;
}
exports.hasExportKeywordModifier = hasExportKeywordModifier;
function hasDefaultKeywordModifier(node) {
    var hasDefault = false;
    if (node.modifiers) {
        node.modifiers.forEach(function (mod) {
            if (mod.kind == ts.SyntaxKind.DefaultKeyword) {
                hasDefault = true;
            }
        });
    }
    return hasDefault;
}
exports.hasDefaultKeywordModifier = hasDefaultKeywordModifier;
function setVariableExported(varName, scope) {
    if (!(scope instanceof scope_1.ModuleScope)) {
        throw new Error("variable can't be exported out of module scope");
    }
    var variable = scope.find(varName);
    variable.v.setExport();
    variable.v.setExportedName(varName);
}
exports.setVariableExported = setVariableExported;
function execute(cmd, args) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, __spreadArrays(args), {
        stdio: ['pipe', 'inherit', 'inherit']
    });
    child.on('exit', function (code) {
        if (code === 1) {
            log_1.LOGD("fail to execute cmd: ", cmd);
            return 0;
        }
        log_1.LOGD("execute cmd successfully: ", cmd);
        return 1;
    });
    return 1;
}
exports.execute = execute;
function addUnicodeEscape(text) {
    var firstIdx = 0;
    var secondIdx = 0;
    var len = text.length;
    var newText = "";
    while (secondIdx != len) {
        if (text[secondIdx] == '\\' && secondIdx + 1 != len && text[secondIdx + 1] == 'u') {
            if (secondIdx != 0 && text[secondIdx - 1] == '\\') {
                newText += text.substr(firstIdx, secondIdx - firstIdx) + "\\\\" + "\\u";
            }
            else {
                newText += text.substr(firstIdx, secondIdx - firstIdx) + "\\" + "\\u";
            }
            secondIdx += 2;
            firstIdx = secondIdx;
        }
        else {
            secondIdx++;
        }
    }
    if (secondIdx == len && firstIdx != secondIdx) {
        newText += text.substr(firstIdx);
    }
    return newText;
}
exports.addUnicodeEscape = addUnicodeEscape;
function isBindingPattern(node) {
    return ts.isArrayBindingPattern(node) || ts.isObjectBindingPattern(node);
}
exports.isBindingPattern = isBindingPattern;
function isObjectBindingOrAssignmentPattern(node) {
    return ts.isObjectLiteralExpression(node) || ts.isObjectBindingPattern(node);
}
exports.isObjectBindingOrAssignmentPattern = isObjectBindingOrAssignmentPattern;
function isArrayBindingOrAssignmentPattern(node) {
    return ts.isArrayLiteralExpression(node) || ts.isArrayBindingPattern(node);
}
exports.isArrayBindingOrAssignmentPattern = isArrayBindingOrAssignmentPattern;
function isBindingOrAssignmentPattern(node) {
    return isArrayBindingOrAssignmentPattern(node) || isObjectBindingOrAssignmentPattern(node);
}
exports.isBindingOrAssignmentPattern = isBindingOrAssignmentPattern;
function isMemberExpression(node) {
    if (ts.isPropertyAccessExpression(node)
        || ts.isElementAccessExpression(node)) {
        return true;
    }
    return false;
}
exports.isMemberExpression = isMemberExpression;
function isUndefinedIdentifier(node) {
    if (!ts.isIdentifier(node)) {
        return false;
    }
    if (jshelpers.getTextOfIdentifierOrLiteral(node) != "undefined") {
        return false;
    }
    return true;
}
exports.isUndefinedIdentifier = isUndefinedIdentifier;
function isAnonymousFunctionDefinition(node) {
    if (!syntaxCheckHelper_1.isFunctionLikeDeclaration(node)) {
        return false;
    }
    if (node.name) {
        return false;
    }
    else {
        return true;
    }
}
exports.isAnonymousFunctionDefinition = isAnonymousFunctionDefinition;
function escapeUnicode(data) {
    var char = '\n';
    var i = 0;
    var j = 0;
    var new_data = "";
    while ((j = data.indexOf(char, i)) !== -1) {
        var tmp = data.substring(i, j);
        if (tmp.indexOf("\\u") != -1) {
            tmp = addUnicodeEscape(tmp);
        }
        new_data = new_data.concat(tmp, "\n");
        i = j + 1;
    }
    new_data = new_data.concat("}\n");
    return new_data;
}
exports.escapeUnicode = escapeUnicode;
function initiateTs2abc(args) {
    var js2abc = path.join(path.resolve(__dirname, '../../bin'), "js2abc");
    args.unshift("--compile-by-pipe");
    var spawn = require('child_process').spawn;
    var child = spawn(js2abc, __spreadArrays(args), {
        stdio: ['pipe', 'inherit', 'inherit', 'pipe']
    });
    return child;
}
exports.initiateTs2abc = initiateTs2abc;
function terminateWritePipe(ts2abc) {
    if (!ts2abc) {
        log_1.LOGD("ts2abc is not a valid object");
    }
    ts2abc.stdio[3].end();
}
exports.terminateWritePipe = terminateWritePipe;
function listenChildExit(child) {
    if (!child) {
        log_1.LOGD("child is not a valid object");
    }
    child.on('exit', function (code) {
        if (code === 1) {
            log_1.LOGD("fail to generate panda binary file");
        }
        log_1.LOGD("success to generate panda binary file");
    });
}
exports.listenChildExit = listenChildExit;
function listenErrorEvent(child) {
    if (!child) {
        log_1.LOGD("child is not a valid object");
    }
    child.on('error', function (err) {
        log_1.LOGD(err.toString());
    });
}
exports.listenErrorEvent = listenErrorEvent;
function isRangeInst(ins) {
    if (ins instanceof irnodes_1.EcmaCallithisrangedyn ||
        ins instanceof irnodes_1.EcmaCallirangedyn ||
        ins instanceof irnodes_1.EcmaNewobjdynrange ||
        ins instanceof irnodes_1.EcmaCreateobjectwithexcludedkeys) {
        return true;
    }
    return false;
}
exports.isRangeInst = isRangeInst;
function getRangeExplicitVregNums(ins) {
    if (!isRangeInst(ins)) {
        return -1;
    }
    return ins instanceof irnodes_1.EcmaCreateobjectwithexcludedkeys ? 2 : 1;
}
exports.getRangeExplicitVregNums = getRangeExplicitVregNums;
function isRestParameter(parameter) {
    return parameter.dotDotDotToken ? true : false;
}
exports.isRestParameter = isRestParameter;
function getParamLengthOfFunc(node) {
    var length = 0;
    var validLengthRange = true;
    var parameters = node.parameters;
    if (parameters) {
        parameters.forEach(function (parameter) {
            if (parameter.initializer || isRestParameter(parameter)) {
                validLengthRange = false;
            }
            if (validLengthRange) {
                length++;
            }
        });
    }
    return length;
}
exports.getParamLengthOfFunc = getParamLengthOfFunc;
function getParameterLength4Ctor(node) {
    if (!classStatement_1.isContainConstruct(node)) {
        return 0;
    }
    var members = node.members;
    var ctorNode;
    for (var index = 0; index < members.length; index++) {
        var member = members[index];
        if (ts.isConstructorDeclaration(member)) {
            ctorNode = member;
        }
    }
    return getParamLengthOfFunc(ctorNode);
}
exports.getParameterLength4Ctor = getParameterLength4Ctor;
function getRangeStartVregPos(ins) {
    if (!isRangeInst(ins)) {
        return -1;
    }
    return ins instanceof irnodes_1.EcmaCreateobjectwithexcludedkeys ? 2 : 1;
}
exports.getRangeStartVregPos = getRangeStartVregPos;
//# sourceMappingURL=util.js.map