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
exports.checkSyntaxErrorForStrictMode = void 0;
var ts = __importStar(require("typescript"));
var cmdOptions_1 = require("./cmdOptions");
var diagnostic_1 = require("./diagnostic");
var parenthesizedExpression_1 = require("./expression/parenthesizedExpression");
var jshelpers_1 = __importDefault(require("./jshelpers"));
var strictMode_1 = require("./strictMode");
var syntaxCheckHelper_1 = require("./syntaxCheckHelper");
function checkDeleteStatement(node) {
    var unaryExpr = node.expression;
    if (ts.isIdentifier(unaryExpr)) {
        throw new diagnostic_1.DiagnosticError(unaryExpr, diagnostic_1.DiagnosticCode.A_delete_cannot_be_called_on_an_identifier_in_strict_mode);
    }
}
function checkNumericLiteral(node) {
    var num = jshelpers_1["default"].getTextOfNode(node);
    if (!syntaxCheckHelper_1.isOctalNumber(num)) {
        return;
    }
    throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Octal_literals_are_not_allowed_in_strict_mode);
}
function checkString(node, text) {
    if (syntaxCheckHelper_1.isIncludeOctalEscapeSequence(text)) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Octal_escape_sequences_are_not_allowed_in_strict_mode);
    }
    if (syntaxCheckHelper_1.isIncludeOctalEscapeSequence(text)) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode._8_and_9_are_not_allowed_in_strict_mode);
    }
}
function checkStringLiteral(node) {
    // Octal escape has been deprecated in ES5, but it can be used in regular expressions
    if (syntaxCheckHelper_1.stringLiteralIsInRegExp(node)) {
        return;
    }
    var text = jshelpers_1["default"].getTextOfNode(node);
    checkString(node, text);
}
function checkEvalOrArgumentsOrOriginalKeyword(contextNode, name) {
    if (!name || !ts.isIdentifier(name)) {
        return;
    }
    var identifier = name;
    if (!syntaxCheckHelper_1.isEvalOrArgumentsIdentifier(identifier) && !syntaxCheckHelper_1.isOriginalKeyword(identifier)) {
        return;
    }
    var file = jshelpers_1["default"].getSourceFileOfNode(name);
    var args = [ts.idText(identifier)];
    throw new diagnostic_1.DiagnosticError(name, getStrictModeEvalOrArgumentsDiagnosticCode(contextNode), file, args);
}
function getStrictModeEvalOrArgumentsDiagnosticCode(node) {
    if (jshelpers_1["default"].getContainingClass(node)) {
        return diagnostic_1.DiagnosticCode.Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode;
    }
    return diagnostic_1.DiagnosticCode.Invalid_use_of_0_in_strict_mode;
}
function getStrictModeIdentifierDiagnosticCode(node) {
    if (jshelpers_1["default"].getContainingClass(node)) {
        return diagnostic_1.DiagnosticCode.Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode;
    }
    return diagnostic_1.DiagnosticCode.Identifier_expected_0_is_a_reserved_word_in_strict_mode;
}
function checkBinaryExpression(node) {
    if (!syntaxCheckHelper_1.isLeftHandSideExpression(node.left) || !syntaxCheckHelper_1.isAssignmentOperator(node.operatorToken.kind)) {
        return;
    }
    var contextNode = node;
    var name = node.left;
    switch (node.left.kind) {
        case ts.SyntaxKind.ParenthesizedExpression:
            var expr = parenthesizedExpression_1.findInnerExprOfParenthesis((node.left));
            contextNode = expr;
            name = expr;
        default:
    }
    checkEvalOrArgumentsOrOriginalKeyword(contextNode, name);
}
function checkContextualIdentifier(node) {
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    if (jshelpers_1["default"].getTextOfIdentifierOrLiteral(node) == 'await' && cmdOptions_1.CmdOptions.isModules()) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Identifier_expected_0_is_a_reserved_word_at_the_top_level_of_a_module, file, ['await']);
    }
    if (jshelpers_1["default"].isIdentifierName(node)) {
        return;
    }
    if (syntaxCheckHelper_1.isOriginalKeyword(node)) {
        throw new diagnostic_1.DiagnosticError(node, getStrictModeIdentifierDiagnosticCode(node), file, jshelpers_1["default"].declarationNameToString(node));
    }
}
function checkParameters(decl) {
    var parameters = decl.parameters;
    var obj = new Map();
    for (var i = 0; i < parameters.length; i++) {
        var param = parameters[i];
        checkEvalOrArgumentsOrOriginalKeyword(param, param.name);
        var name_1 = jshelpers_1["default"].getTextOfIdentifierOrLiteral(param.name);
        if (obj.has(name_1)) {
            var args = [jshelpers_1["default"].declarationNameToString(param.name)];
            throw new diagnostic_1.DiagnosticError(param.name, diagnostic_1.DiagnosticCode.Duplicate_identifier_0, undefined, args);
        }
        if (name_1) {
            obj.set(name_1, true);
        }
        // TODO: add destructuring parameter
        if (param.initializer || param.dotDotDotToken) {
            if (strictMode_1.checkStrictModeStatementList(decl)) {
                throw new diagnostic_1.DiagnosticError(param, diagnostic_1.DiagnosticCode.use_strict_directive_cannot_be_used_with_non_simple_parameter_list);
            }
        }
    }
}
function checkWithStatement(node) {
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_with_statements_are_not_allowed_in_strict_mode, file);
}
function checkNoSubstitutionTemplateLiteral(expr) {
    var text = jshelpers_1["default"].getTextOfNode(expr);
    checkString(expr, text.substring(1, text.length - 1));
}
function checkFunctionDeclaration(node) {
    checkEvalOrArgumentsOrOriginalKeyword(node, node.name);
    checkParameters(node);
    if (!syntaxCheckHelper_1.isInBlockScope(node.parent)) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.In_strict_mode_code_functions_can_only_be_declared_at_top_level_or_inside_a_block);
    }
}
function checkSyntaxErrorForStrictMode(node) {
    switch (node.kind) {
        case ts.SyntaxKind.NumericLiteral:
            checkNumericLiteral(node);
            break;
        case ts.SyntaxKind.StringLiteral:
            checkStringLiteral(node);
            break;
        case ts.SyntaxKind.FunctionDeclaration:
            checkFunctionDeclaration(node);
            break;
        case ts.SyntaxKind.FunctionExpression:
            var funcNode = node;
            checkEvalOrArgumentsOrOriginalKeyword(funcNode, funcNode.name);
            checkParameters(funcNode);
            break;
        case ts.SyntaxKind.SetAccessor:
        case ts.SyntaxKind.ArrowFunction:
            checkParameters(node);
            break;
        case ts.SyntaxKind.VariableDeclaration:
            var varNode = node;
            checkEvalOrArgumentsOrOriginalKeyword(varNode, varNode.name);
            break;
        case ts.SyntaxKind.BindingElement:
            var bindNode = node;
            checkEvalOrArgumentsOrOriginalKeyword(node, bindNode.name);
            break;
        case ts.SyntaxKind.BinaryExpression:
            checkBinaryExpression(node);
            break;
        case ts.SyntaxKind.PrefixUnaryExpression:
        case ts.SyntaxKind.PostfixUnaryExpression:
            var unaryNode = node;
            checkEvalOrArgumentsOrOriginalKeyword(node, unaryNode.operand);
            break;
        case ts.SyntaxKind.DeleteExpression:
            checkDeleteStatement(node);
            break;
        case ts.SyntaxKind.WithStatement:
            checkWithStatement(node);
            break;
        case ts.SyntaxKind.Identifier:
            checkContextualIdentifier(node);
            break;
        case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
        case ts.SyntaxKind.FirstTemplateToken:
        case ts.SyntaxKind.LastLiteralToken:
            checkNoSubstitutionTemplateLiteral(node);
            break;
        default:
    }
}
exports.checkSyntaxErrorForStrictMode = checkSyntaxErrorForStrictMode;
//# sourceMappingURL=syntaxCheckerForStrcitMode.js.map