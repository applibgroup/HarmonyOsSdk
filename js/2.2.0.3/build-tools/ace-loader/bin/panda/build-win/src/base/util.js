"use strict";
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
exports.isAnonymousFunctionDefinition = exports.isUndefinedIdentifier = exports.isMemberExpression = exports.isBindingOrAssignmentPattern = exports.isArrayBindingOrAssignmentPattern = exports.isObjectBindingOrAssignmentPattern = exports.isBindingPattern = exports.addUnicodeEscape = exports.execute = exports.setVariableExported = exports.hasDefaultKeywordModifier = exports.hasExportKeywordModifier = exports.containSpreadElement = void 0;
var ts = __importStar(require("typescript"));
var cmdOptions_1 = require("../cmdOptions");
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
function execute(cmd, args, isPrint) {
    if (isPrint === void 0) { isPrint = false; }
    var execSync = require('child_process').execSync;
    var isWindows = /win32/.test(process.platform);
    if (isWindows) {
        if (!args)
            args = [];
        args.unshift(cmd);
        args.unshift('/c');
        cmd = process.env.comspec;
    }
    var t = Number(cmdOptions_1.CmdOptions.getTimeOut()) * 1000;
    var options = {
        timeout: t,
        stdio: ['pipe', 'pipe', 'pipe']
    };
    cmd += " " + args.join(" ");
    var ret = execSync(cmd, options);
    if (ret.error) {
        log_1.LOGE(ret.error.code, ret.error.stack);
        return 0;
    }
    if (ret.stderr && ret.stderr.toString().length != 0) {
        isPrint ? process.stdout.write(ret.stderr.toString()) : log_1.LOGE("execute fail ", ret.stderr.toString());
        return 0;
    }
    if (ret.stdout && ret.stdout.toString().length != 0) {
        isPrint ? process.stdout.write(ret.stdout.toString()) : log_1.LOGD("execute stdout ", "\n", ret.stdout.toString());
    }
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
    if (ts.isArrayBindingPattern(node) || ts.isObjectBindingPattern(node)) {
        return true;
    }
    return false;
}
exports.isBindingPattern = isBindingPattern;
function isObjectBindingOrAssignmentPattern(node) {
    if (ts.isObjectLiteralExpression(node) || ts.isObjectBindingPattern(node)) {
        return true;
    }
    return false;
}
exports.isObjectBindingOrAssignmentPattern = isObjectBindingOrAssignmentPattern;
function isArrayBindingOrAssignmentPattern(node) {
    if (ts.isArrayLiteralExpression(node) || ts.isArrayBindingPattern(node)) {
        return true;
    }
    return false;
}
exports.isArrayBindingOrAssignmentPattern = isArrayBindingOrAssignmentPattern;
function isBindingOrAssignmentPattern(node) {
    if (isArrayBindingOrAssignmentPattern(node) || isObjectBindingOrAssignmentPattern(node)) {
        return true;
    }
    return false;
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
//# sourceMappingURL=util.js.map