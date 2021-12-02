"use strict";
// Huawei Technologies Co.,Ltd.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isStrictMode = exports.setGlobalStrict = exports.checkStrictModeStatementList = void 0;
var ts = __importStar(require("typescript"));
var jshelpers_1 = __importDefault(require("./jshelpers"));
var globalStrict = false;
function checkStrictModeStatementList(node) {
    var statements;
    if (node.kind == ts.SyntaxKind.SourceFile) {
        statements = node.statements;
    }
    else {
        var decl = node;
        if (decl && decl.body) {
            if (decl.body.kind == ts.SyntaxKind.Block) {
                statements = decl.body.statements;
            }
        }
        else {
            return false;
        }
    }
    if (statements == undefined) {
        return false;
    }
    for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
        var statement = statements_1[_i];
        if (!jshelpers_1["default"].isPrologueDirective(statement)) {
            return false;
        }
        if (isUseStrictPrologueDirective(statement)) {
            return true;
        }
    }
    return false;
}
exports.checkStrictModeStatementList = checkStrictModeStatementList;
/// Should be called only on prologue directives (isPrologueDirective(node) should be true)
function isUseStrictPrologueDirective(node) {
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    var nodeText = jshelpers_1["default"].getSourceTextOfNodeFromSourceFile(file, node.expression);
    // Note: the node text must be exactly "use strict" or 'use strict'.  It is not ok for the
    // string to contain unicode escapes (as per ES5).
    return nodeText === '"use strict"' || nodeText === "'use strict'";
}
function checkStrictMode(node) {
    while (node && node.parent && node.parent.kind != ts.SyntaxKind.SourceFile) {
        var func = jshelpers_1["default"].getContainingFunctionDeclaration(node);
        if (!func) {
            return false;
        }
        if (checkStrictModeStatementList(func)) {
            return true;
        }
        node = func;
    }
    return false;
}
function getGlobalStrict() {
    return globalStrict;
}
function setGlobalStrict(flag) {
    globalStrict = flag;
}
exports.setGlobalStrict = setGlobalStrict;
function isStrictMode(node) {
    if (getGlobalStrict()) {
        return true;
    }
    return checkStrictMode(node);
}
exports.isStrictMode = isStrictMode;
//# sourceMappingURL=strictMode.js.map