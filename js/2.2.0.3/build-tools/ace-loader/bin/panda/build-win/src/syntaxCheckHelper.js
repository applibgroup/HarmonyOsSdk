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
exports.__esModule = true;
exports.isStatement = exports.isOptionalParameter = exports.isIncludeBackslash8Or9InString = exports.isInBlockScope = exports.isDeclInGlobal = exports.visibilityToString = exports.isBindingPattern = exports.isGlobalIdentifier = exports.allowLetAndConstDeclarations = exports.isFunctionLikeDeclaration = exports.isOriginalKeyword = exports.isAssignmentOperator = exports.isLeftHandSideExpression = exports.isLeftHandSideExpressionKind = exports.isEvalOrArgumentsIdentifier = exports.isIncludeOctalEscapeSequence = exports.stringLiteralIsInRegExp = exports.isNewOrCallExpression = exports.isOctalNumber = void 0;
var ts = __importStar(require("typescript"));
var jshelpers = require("./jshelpers");
function isOctalNumber(num) {
    if (!num || num.length < 2) {
        return false;
    }
    var reg = /^0[0-7]+$/;
    if (!reg.test(num)) {
        return false;
    }
    return true;
}
exports.isOctalNumber = isOctalNumber;
function isNewOrCallExpression(node) {
    return node.kind === ts.SyntaxKind.NewExpression || node.kind === ts.SyntaxKind.CallExpression;
}
exports.isNewOrCallExpression = isNewOrCallExpression;
function stringLiteralIsInRegExp(node) {
    var parent = node.parent;
    if (parent && isNewOrCallExpression(parent)) {
        var expression = parent.expression;
        if (ts.isIdentifier(expression)) {
            if (expression.escapedText === "RegExp") {
                return true;
            }
        }
    }
    return false;
}
exports.stringLiteralIsInRegExp = stringLiteralIsInRegExp;
function isIncludeOctalEscapeSequence(text) {
    var reg = /\\(?:[1-7][0-7]{0,2}|[0-7]{2,3})/g;
    if (!text.match(reg)) {
        return false;
    }
    // Like \\1, should not be treated as an octal escape sequence
    var index = 0;
    while (index < text.length) {
        if (text[index] == '\\' && index != text.length - 1) {
            if (text[index + 1] == "\\") {
                index++;
            }
            else if (text[index + 1] >= '0' && text[index + 1] <= '7') {
                return true;
            }
        }
        index++;
    }
    return false;
}
exports.isIncludeOctalEscapeSequence = isIncludeOctalEscapeSequence;
function isEvalOrArgumentsIdentifier(node) {
    return ts.isIdentifier(node) && (node.escapedText === "eval" || node.escapedText === "arguments");
}
exports.isEvalOrArgumentsIdentifier = isEvalOrArgumentsIdentifier;
function isLeftHandSideExpressionKind(kind) {
    switch (kind) {
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.BigIntLiteral:
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.RegularExpressionLiteral:
        case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
        case ts.SyntaxKind.Identifier:
        case ts.SyntaxKind.FalseKeyword:
        case ts.SyntaxKind.ImportKeyword:
        case ts.SyntaxKind.NullKeyword:
        case ts.SyntaxKind.SuperKeyword:
        case ts.SyntaxKind.ThisKeyword:
        case ts.SyntaxKind.TrueKeyword:
        case ts.SyntaxKind.ArrayLiteralExpression:
        case ts.SyntaxKind.ObjectLiteralExpression:
        case ts.SyntaxKind.PropertyAccessExpression:
        case ts.SyntaxKind.ElementAccessExpression:
        case ts.SyntaxKind.CallExpression:
        case ts.SyntaxKind.NewExpression:
        case ts.SyntaxKind.TaggedTemplateExpression:
        case ts.SyntaxKind.ParenthesizedExpression:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.TemplateExpression:
        case ts.SyntaxKind.ClassExpression:
        case ts.SyntaxKind.NonNullExpression:
        case ts.SyntaxKind.MetaProperty:
        case ts.SyntaxKind.JsxElement:
        case ts.SyntaxKind.JsxSelfClosingElement:
        case ts.SyntaxKind.JsxFragment:
            return true;
        default:
            return false;
    }
}
exports.isLeftHandSideExpressionKind = isLeftHandSideExpressionKind;
function isLeftHandSideExpression(node) {
    return isLeftHandSideExpressionKind(ts.skipPartiallyEmittedExpressions(node).kind);
}
exports.isLeftHandSideExpression = isLeftHandSideExpression;
function isAssignmentOperator(token) {
    return token >= ts.SyntaxKind.FirstAssignment && token <= ts.SyntaxKind.LastAssignment;
}
exports.isAssignmentOperator = isAssignmentOperator;
function isOriginalKeyword(node) {
    if (node.originalKeywordKind >= ts.SyntaxKind.FirstFutureReservedWord &&
        node.originalKeywordKind <= ts.SyntaxKind.LastFutureReservedWord) {
        return true;
    }
    return false;
}
exports.isOriginalKeyword = isOriginalKeyword;
function isFunctionLikeDeclaration(node) {
    if (!node) {
        return false;
    }
    switch (node.kind) {
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.Constructor:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.GetAccessor:
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.SetAccessor:
            return true;
        default:
            return false;
    }
}
exports.isFunctionLikeDeclaration = isFunctionLikeDeclaration;
function allowLetAndConstDeclarations(node) {
    if (!node) {
        return false;
    }
    switch (node.kind) {
        case ts.SyntaxKind.DoStatement:
        case ts.SyntaxKind.IfStatement:
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.ForInStatement:
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.WhileStatement:
        case ts.SyntaxKind.WithStatement:
            return false;
        case ts.SyntaxKind.LabeledStatement:
            return allowLetAndConstDeclarations(node.parent);
    }
    return true;
}
exports.allowLetAndConstDeclarations = allowLetAndConstDeclarations;
function isGlobalIdentifier(name) {
    switch (name) {
        case "NaN":
        case "undefined":
        case "Infinity":
            return true;
        default:
            return false;
    }
}
exports.isGlobalIdentifier = isGlobalIdentifier;
function isBindingPattern(node) {
    if (!node) {
        return false;
    }
    switch (node.kind) {
        case ts.SyntaxKind.ArrayBindingPattern:
        case ts.SyntaxKind.ObjectBindingPattern:
            return true;
        default:
            return false;
    }
}
exports.isBindingPattern = isBindingPattern;
function visibilityToString(flag) {
    switch (flag) {
        case ts.ModifierFlags.Private:
            return "private";
        case ts.ModifierFlags.Protected:
            return "protected";
        default:
            return "public";
    }
}
exports.visibilityToString = visibilityToString;
function isDeclInGlobal(id) {
    var parent = id.parent;
    while ((parent) && (parent.kind != ts.SyntaxKind.Block)) {
        parent = parent.parent;
    }
    if (!parent) {
        return true;
    }
    return false;
}
exports.isDeclInGlobal = isDeclInGlobal;
function isInBlockScope(node) {
    switch (node.kind) {
        case ts.SyntaxKind.SourceFile:
        case ts.SyntaxKind.CaseBlock:
        case ts.SyntaxKind.DefaultClause:
        case ts.SyntaxKind.CaseClause:
        case ts.SyntaxKind.Block:
        case ts.SyntaxKind.Constructor:
        case ts.SyntaxKind.MethodDeclaration:
            return true;
    }
    return false;
}
exports.isInBlockScope = isInBlockScope;
function isIncludeBackslash8Or9InString(text) {
    // \8 and \9 are not allowed in strict mode
    var index = 0;
    while (index < text.length) {
        if (text[index] == '\\' && index != text.length - 1) {
            if (text[index + 1] == "\\") {
                index++;
            }
            else if (text[index + 1] == '8' || text[index + 1] == '9') {
                return true;
            }
        }
        index++;
    }
    return false;
}
exports.isIncludeBackslash8Or9InString = isIncludeBackslash8Or9InString;
function isOptionalParameter(node) {
    if (jshelpers.hasQuestionToken(node)) {
        return true;
    }
    var iife = jshelpers.getImmediatelyInvokedFunctionExpression(node.parent);
    if (iife) {
        return !node.type && !node.dotDotDotToken && node.parent.parameters.indexOf(node) >= iife.arguments.length;
    }
    return false;
}
exports.isOptionalParameter = isOptionalParameter;
function isStatement(kind) {
    if (kind >= ts.SyntaxKind.FirstStatement && kind <= ts.SyntaxKind.LastStatement) {
        return true;
    }
    return false;
}
exports.isStatement = isStatement;
//# sourceMappingURL=syntaxCheckHelper.js.map