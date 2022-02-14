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
exports.checkExportEntries = exports.checkSyntaxError = exports.checkDuplicateDeclaration = void 0;
var ts = __importStar(require("typescript"));
var cmdOptions_1 = require("./cmdOptions");
var diagnostic_1 = require("./diagnostic");
var util_1 = require("./base/util");
var parenthesizedExpression_1 = require("./expression/parenthesizedExpression");
var jshelpers_1 = __importStar(require("./jshelpers"));
var log_1 = require("./log");
var scope_1 = require("./scope");
var strictMode_1 = require("./strictMode");
var syntaxCheckerForStrcitMode_1 = require("./syntaxCheckerForStrcitMode");
var syntaxCheckHelper_1 = require("./syntaxCheckHelper");
//*************************************Part 1: Implement early check of declarations*******************************//
function checkDuplicateDeclaration(recorder) {
    var scopeMap = recorder.getScopeMap();
    scopeMap.forEach(function (scope, node) {
        // implement functionParameter-related duplicate-entry check
        if (syntaxCheckHelper_1.isFunctionLikeDeclaration(node)) {
            if (strictMode_1.isStrictMode(node)) {
                checkDuplicateParameter(node, recorder);
            }
            if (node.body) {
                var bodyScope = scopeMap.get(node.body);
                var parameterNames = getParameterNames(node, recorder);
                if (bodyScope) {
                    checkDuplicateParameterVar(parameterNames, bodyScope);
                }
            }
        }
        // implement catchParameter-related duplicate-entry check
        if ((node.kind == ts.SyntaxKind.Block) && (node.parent.kind == ts.SyntaxKind.CatchClause)) {
            var catchScope = scopeMap.get(node.parent);
            checkDuplicateInCatch(scope, catchScope);
        }
        var decls = scope.getDecls();
        var exportFuncMap = new Map();
        for (var i = 0; i < decls.length; i++) {
            checkDeclareGlobalId(decls[i], scope);
            checkDuplicateEntryInScope(scope, i);
            checkDuplicateEntryAcrossScope(scope, i);
            if (ts.isFunctionDeclaration(decls[i].node) && scope instanceof scope_1.ModuleScope) {
                hasDuplicateExportedFuncDecl(decls[i], exportFuncMap);
            }
        }
    });
}
exports.checkDuplicateDeclaration = checkDuplicateDeclaration;
function checkDuplicateEntryAcrossScope(scope, index) {
    var decls = scope.getDecls();
    var parentScope = scope;
    if (decls[index] instanceof scope_1.VarDecl) {
        while (!(parentScope instanceof scope_1.FunctionScope)) {
            parentScope = parentScope.getParent();
            if (!parentScope) {
                return;
            }
            var parentDecls = parentScope.getDecls();
            parentDecls.forEach(function (parentDecl) {
                if (hasDuplicateEntryAcrossScope(decls[index], parentDecl)) {
                    throwDupIdError(decls[index]);
                }
            });
        }
    }
}
function checkDuplicateEntryInScope(scope, index) {
    var decls = scope.getDecls();
    for (var i = index + 1; i < decls.length; i++) {
        if (hasDuplicateEntryInScope(decls[index], decls[i], scope)) {
            throwDupIdError(decls[i]);
        }
    }
}
function hasDuplicateExportedFuncDecl(decl, exportFuncMap) {
    if (!exportFuncMap.has(decl.name)) {
        exportFuncMap.set(decl.name, util_1.hasExportKeywordModifier(decl.node));
    }
    else {
        if (exportFuncMap.get(decl.name) == true || util_1.hasExportKeywordModifier(decl.node)) {
            throw new diagnostic_1.DiagnosticError(decl.node, diagnostic_1.DiagnosticCode.Duplicate_identifier_0, jshelpers_1["default"].getSourceFileOfNode(decl.node), [decl.name]);
        }
    }
}
function hasDuplicateEntryAcrossScope(decl1, decl2) {
    if ((decl2 instanceof scope_1.LetDecl) || (decl2 instanceof scope_1.ConstDecl)) {
        return decl1.name == decl2.name;
    }
}
function hasDuplicateEntryInScope(decl1, decl2, scope) {
    if (((decl1 instanceof scope_1.LetDecl) || (decl1 instanceof scope_1.ConstDecl) || (decl1 instanceof scope_1.ClassDecl && ts.isClassDeclaration(decl1.node)) ||
        (decl2 instanceof scope_1.LetDecl) || (decl2 instanceof scope_1.ConstDecl) || (decl2 instanceof scope_1.ClassDecl && ts.isClassDeclaration(decl1.node))) &&
        !ts.isClassExpression(decl1.node) && !ts.isClassExpression(decl2.node)) {
        return decl1.name == decl2.name;
    }
    // Var and FunctionDeclaration with same names, FunctionDeclaration and FunctionDeclaration with same names are illegal in strict mode
    /**
     * eg1.
     * if (true) {
     *     var a;
     *     function a() {};
     * }
     *
     * eg2.
     * if (true) {
     *     function a() {};
     *     function a() {};
     * }
     */
    if (scope instanceof scope_1.LocalScope) {
        if (strictMode_1.isStrictMode(decl1.node)) {
            if (decl1 instanceof scope_1.FuncDecl || decl2 instanceof scope_1.FuncDecl) {
                if (syntaxCheckHelper_1.isFunctionLikeDeclaration(decl1.node.parent.parent) || syntaxCheckHelper_1.isFunctionLikeDeclaration(decl2.node.parent.parent)) {
                    return false;
                }
                return decl1.name == decl2.name;
            }
        }
    }
    return false;
}
function checkDuplicateInCatch(blockScope, catchScope) {
    var bodyDecls = blockScope.getDecls();
    var catchParameters = catchScope.getDecls();
    for (var i = 0; i < catchParameters.length; i++) {
        for (var j = i + 1; j < catchParameters.length; j++) {
            if (catchParameters[i].name == catchParameters[j].name) {
                throwDupIdError(catchParameters[j]);
            }
        }
        for (var m = 0; m < bodyDecls.length; m++) {
            if (bodyDecls[m] instanceof scope_1.VarDecl) {
                continue;
            }
            if (catchParameters[i].name == bodyDecls[m].name) {
                throwDupIdError(bodyDecls[m]);
            }
        }
    }
}
function getParameterNames(node, recorder) {
    var parameters = recorder.getParametersOfFunction(node);
    var parameterNames = [];
    if (!parameters) {
        return;
    }
    parameters.forEach(function (funcParam) {
        parameterNames.push(funcParam.name);
    });
    return parameterNames;
}
function checkDuplicateParameter(node, recorder) {
    var parameters = recorder.getParametersOfFunction(node);
    var tempNames = [];
    if (!parameters) {
        return;
    }
    parameters.forEach(function (param) {
        if (tempNames.includes(param.name)) {
            throwDupIdError(param);
        }
        else {
            tempNames.push(param.name);
        }
    });
}
function checkDuplicateParameterVar(parameterNames, scope) {
    if (!parameterNames) {
        return;
    }
    var decls = scope.getDecls();
    for (var i = 0; i < decls.length; i++) {
        if ((decls[i] instanceof scope_1.VarDecl) || (decls[i] instanceof scope_1.FuncDecl)) {
            continue;
        }
        var name_1 = decls[i].name;
        if (parameterNames.includes(name_1)) {
            throwDupIdError(decls[i]);
        }
    }
}
function checkDeclareGlobalId(decl, scope) {
    if (!(scope instanceof scope_1.GlobalScope)) {
        return;
    }
    if ((decl instanceof scope_1.VarDecl) || (decl instanceof scope_1.CatchParameter)) {
        return;
    }
    if (syntaxCheckHelper_1.isGlobalIdentifier(decl.name) && syntaxCheckHelper_1.isDeclInGlobal(decl.node)) {
        var sourceNode = jshelpers_1["default"].getSourceFileOfNode(decl.node);
        throw new diagnostic_1.DiagnosticError(decl.node, diagnostic_1.DiagnosticCode.Declaration_name_conflicts_with_built_in_global_identifier_0, sourceNode, [decl.name]);
    }
}
function throwDupIdError(decl) {
    var sourceNode = jshelpers_1["default"].getSourceFileOfNode(decl.node);
    if (decl.node.kind == ts.SyntaxKind.FunctionDeclaration) {
        decl.node = decl.node.name;
    }
    throw new diagnostic_1.DiagnosticError(decl.node, diagnostic_1.DiagnosticCode.Duplicate_identifier_0, sourceNode, [decl.name]);
}
//**********************************Part 2: Implementing syntax check except declaration******************************************//
function checkSyntaxError(node) {
    checkSyntaxErrorForSloppyAndStrictMode(node);
    if (strictMode_1.isStrictMode(node) || cmdOptions_1.CmdOptions.isModules()) {
        syntaxCheckerForStrcitMode_1.checkSyntaxErrorForStrictMode(node);
    }
}
exports.checkSyntaxError = checkSyntaxError;
function checkBreakOrContinueStatement(node) {
    var curNode = node;
    while (curNode) {
        if (ts.isFunctionLike(curNode)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Jump_target_cannot_cross_function_boundary, jshelpers_1["default"].getSourceFileOfNode(curNode));
        }
        switch (curNode.kind) {
            case ts.SyntaxKind.SwitchStatement: {
                if (node.kind === ts.SyntaxKind.BreakStatement && !node.label) {
                    // unlabeled break within switch statement - ok
                    return;
                }
                break;
            }
            case ts.SyntaxKind.LabeledStatement: {
                if (node.label && curNode.label.escapedText === node.label.escapedText) {
                    // found matching label - verify that label usage is correct
                    // continue can only target labels that are on iteration statements
                    var isMisplacedContinueLabel = false;
                    if (node.kind == ts.SyntaxKind.ContinueStatement
                        && !jshelpers_1["default"].isIterationStatement(curNode.statement, /*lookInLabeledStatement*/ true)) {
                        isMisplacedContinueLabel = true;
                    }
                    if (isMisplacedContinueLabel) {
                        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement, jshelpers_1["default"].getSourceFileOfNode(curNode));
                    }
                    return;
                }
                break;
            }
            default: {
                if (jshelpers_1["default"].isIterationStatement(curNode, /*lookInLabeledStatement*/ false) && !node.label) {
                    // unlabeled break or continue within iteration statement - ok
                    return false;
                }
                break;
            }
        }
        curNode = curNode.parent;
    }
    var diagnosticCode;
    if (node.label) {
        if (node.kind == ts.SyntaxKind.BreakStatement) {
            diagnosticCode = diagnostic_1.DiagnosticCode.A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement;
        }
        else {
            diagnosticCode = diagnostic_1.DiagnosticCode.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement;
        }
    }
    else {
        if (node.kind == ts.SyntaxKind.BreakStatement) {
            diagnosticCode = diagnostic_1.DiagnosticCode.A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement;
        }
        else {
            diagnosticCode = diagnostic_1.DiagnosticCode.A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement;
        }
    }
    throw new diagnostic_1.DiagnosticError(node, diagnosticCode, jshelpers_1["default"].getSourceFileOfNode(node));
}
function checkReturnStatement(node) {
    var func = jshelpers_1["default"].getContainingFunction(node);
    if (!func) {
        var file = jshelpers_1["default"].getSourceFileOfNode(node);
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_return_statement_can_only_be_used_within_a_function_body, file);
    }
}
function checkMetaProperty(node) {
    var text = jshelpers_1["default"].getTextOfIdentifierOrLiteral(node.name);
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    switch (node.keywordToken) {
        case ts.SyntaxKind.NewKeyword: {
            var args = [text, jshelpers_1["default"].tokenToString(node.keywordToken), "target"];
            if (text != "target") {
                throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode._0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2, file, args);
            }
            if (!jshelpers_1.getContainingFunction(node)) {
                throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constructor, file, args);
            }
            else {
                var func = jshelpers_1.getContainingFunction(node);
                while (jshelpers_1.getContainingFunction(func)) {
                    func = jshelpers_1.getContainingFunction(func);
                }
                if (ts.isArrowFunction(func)) {
                    throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constructor, file, args);
                }
            }
            break;
        }
        case ts.SyntaxKind.ImportKeyword: {
            if (text != "meta") {
                var args = [text, jshelpers_1["default"].tokenToString(node.keywordToken), "meta"];
                throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode._0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2, file, args);
            }
            break;
        }
        default:
            break;
    }
}
function checkNameInLetOrConstDeclarations(name) {
    if (name.kind === ts.SyntaxKind.Identifier) {
        if (name.originalKeywordKind === ts.SyntaxKind.LetKeyword) {
            var file = jshelpers_1["default"].getSourceFileOfNode(name);
            throw new diagnostic_1.DiagnosticError(name, diagnostic_1.DiagnosticCode.The_let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations, file);
        }
    }
    else {
        var elements = name.elements;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            if (!ts.isOmittedExpression(element)) {
                checkNameInLetOrConstDeclarations(element.name);
            }
        }
    }
}
function checkDisallowedLetOrConstStatement(node) {
    if (syntaxCheckHelper_1.allowLetAndConstDeclarations(node.parent)) {
        return;
    }
    if (jshelpers_1["default"].isLet(node.declarationList)) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.The_let_declarations_can_only_be_declared_inside_a_block);
    }
    if (jshelpers_1["default"].isVarConst(node.declarationList)) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.The_const_declarations_can_only_be_declared_inside_a_block);
    }
}
function checkVariableDeclaration(node) {
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    if (!ts.isForInStatement(node.parent.parent) && !ts.isForOfStatement(node.parent.parent) && !ts.isCatchClause(node.parent)) {
        if (!node.initializer) {
            if (syntaxCheckHelper_1.isBindingPattern(node.name) && !syntaxCheckHelper_1.isBindingPattern(node.parent)) {
                throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_destructuring_declaration_must_have_an_initializer, file);
            }
            if (jshelpers_1["default"].isVarConst(node)) {
                throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.The_const_declarations_must_be_initialized, file);
            }
        }
    }
    if (node.exclamationToken && (node.parent.parent.kind !== ts.SyntaxKind.VariableStatement || !node.type || node.initializer)) {
        if (node.initializer) {
            throw new diagnostic_1.DiagnosticError(node.exclamationToken, diagnostic_1.DiagnosticCode.Declarations_with_initializers_cannot_also_have_definite_assignment_assertions, file);
        }
        else {
            throw new diagnostic_1.DiagnosticError(node.exclamationToken, diagnostic_1.DiagnosticCode.Declarations_with_definite_assignment_assertions_must_also_have_type_annotations, file);
        }
    }
    if (jshelpers_1["default"].isLet(node) || jshelpers_1["default"].isVarConst(node)) {
        checkNameInLetOrConstDeclarations(node.name);
        if (!syntaxCheckHelper_1.isInBlockScope(node.parent.parent.parent)
            && !ts.isForInStatement(node.parent.parent)
            && !ts.isForOfStatement(node.parent.parent)
            && !ts.isForStatement(node.parent.parent)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.const_and_let_declarations_not_allowed_in_statement_positions, file);
        }
    }
}
function checkDecorators(node) {
    if (!node.decorators) {
        return;
    }
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    if (!jshelpers_1["default"].nodeCanBeDecorated(node, node.parent, node.parent.parent)) {
        if (ts.isMethodDeclaration(node) && !jshelpers_1["default"].nodeIsPresent(node.body)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_decorator_can_only_decorate_a_method_implementation_not_an_overload, file);
        }
        else {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Decorators_are_not_valid_here, file);
        }
    }
    else if (ts.isGetAccessorDeclaration(node) || ts.isSetAccessorDeclaration(node)) {
        var accessors = jshelpers_1["default"].getAllAccessorDeclarations(node.parent.members, node);
        if (accessors.firstAccessor.decorators && node === accessors.secondAccessor) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name, file);
        }
    }
}
function checkAsyncModifier(node, asyncModifier) {
    switch (node.kind) {
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.MethodDeclaration:
            return;
        default:
            break;
    }
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    throw new diagnostic_1.DiagnosticError(asyncModifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_here, file, ["async"]);
}
function checkModifiers(node) {
    if (!node.modifiers) {
        return;
    }
    var lastStatic;
    var lastDeclare;
    var lastAsync;
    var lastReadonly;
    var flags = ts.ModifierFlags.None;
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    for (var _i = 0, _a = node.modifiers; _i < _a.length; _i++) {
        var modifier = _a[_i];
        if (modifier.kind !== ts.SyntaxKind.ReadonlyKeyword) {
            if (ts.isPropertySignature(node) || ts.isMethodSignature(node)) {
                throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_type_member, file, [jshelpers_1["default"].tokenToString(modifier.kind)]);
            }
            if (ts.isIndexSignatureDeclaration(node)) {
                throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_an_index_signature, file, [jshelpers_1["default"].tokenToString(modifier.kind)]);
            }
        }
        switch (modifier.kind) {
            case ts.SyntaxKind.ConstKeyword: {
                if (ts.isEnumDeclaration(node)) {
                    throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_class_member_cannot_have_the_0_keyword, file, [jshelpers_1["default"].tokenToString(ts.SyntaxKind.ConstKeyword)]);
                }
                break;
            }
            case ts.SyntaxKind.PublicKeyword:
            case ts.SyntaxKind.ProtectedKeyword:
            case ts.SyntaxKind.PrivateKeyword: {
                var text = syntaxCheckHelper_1.visibilityToString(jshelpers_1["default"].modifierToFlag(modifier.kind));
                if (flags & ts.ModifierFlags.AccessibilityModifier) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode.Accessibility_modifier_already_seen, file);
                }
                else if (flags & ts.ModifierFlags.Static) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, [text, "static"]);
                }
                else if (flags & ts.ModifierFlags.Readonly) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, [text, "readonly"]);
                }
                else if (flags & ts.ModifierFlags.Async) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, [text, "async"]);
                }
                else if (ts.isModuleBlock(node.parent) || ts.isSourceFile(node.parent)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_module_or_namespace_element, file, [text]);
                }
                else if (flags & ts.ModifierFlags.Abstract) {
                    if (modifier.kind === ts.SyntaxKind.PrivateKeyword) {
                        throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_1_modifier, file, [text, "abstract"]);
                    }
                    else {
                        throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, [text, "abstract"]);
                    }
                }
                else if (ts.isPropertyDeclaration(node) && ts.isPrivateIdentifier(node.name)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode.An_accessibility_modifier_cannot_be_used_with_a_private_identifier, file);
                }
                flags |= jshelpers_1["default"].modifierToFlag(modifier.kind);
                break;
            }
            case ts.SyntaxKind.StaticKeyword: {
                if (flags & ts.ModifierFlags.Static) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_already_seen, file, ["static"]);
                }
                else if (flags & ts.ModifierFlags.Readonly) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, ["static", "readonly"]);
                }
                else if (flags & ts.ModifierFlags.Async) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, ["static", "async"]);
                }
                else if (ts.isModuleBlock(node.parent) || ts.isSourceFile(node.parent)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_module_or_namespace_element, file, ["static"]);
                }
                else if (ts.isParameter(node)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_parameter, file, ["static"]);
                }
                else if (flags & ts.ModifierFlags.Abstract) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_1_modifier, file, ["static", "abstract"]);
                }
                else if (ts.isPropertyDeclaration(node) && ts.isPrivateIdentifier(node.name)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_a_private_identifier, file, ["static"]);
                }
                flags |= ts.ModifierFlags.Static;
                lastStatic = modifier;
                break;
            }
            case ts.SyntaxKind.ReadonlyKeyword: {
                if (flags & ts.ModifierFlags.Readonly) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_already_seen, file, ["readonly"]);
                }
                else if (!ts.isPropertyDeclaration(node) && !ts.isPropertySignature(node) && !ts.isIndexSignatureDeclaration(node) && !ts.isParameter(node)) {
                    // If node.kind === SyntaxKind.Parameter, checkParameter report an error if it's not a parameter property.
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode.The_readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature, file);
                }
                flags |= ts.ModifierFlags.Readonly;
                lastReadonly = modifier;
                break;
            }
            case ts.SyntaxKind.ExportKeyword: {
                if (flags & ts.ModifierFlags.Export) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_already_seen, file, ["export"]);
                }
                else if (flags & ts.ModifierFlags.Ambient) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, ["export", "declare"]);
                }
                else if (flags & ts.ModifierFlags.Abstract) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, ["export", "abstract"]);
                }
                else if (flags & ts.ModifierFlags.Async) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_must_precede_1_modifier, file, ["export", "async"]);
                }
                else if (ts.isClassLike(node.parent)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_class_elements_of_this_kind, file, ["export"]);
                }
                else if (ts.isParameter(node)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_parameter, file, ["export"]);
                }
                flags |= ts.ModifierFlags.Export;
                break;
            }
            case ts.SyntaxKind.DefaultKeyword: {
                var container = ts.isSourceFile(node.parent) ? node.parent : node.parent.parent;
                if (ts.isModuleDeclaration(container) && !jshelpers_1["default"].isAmbientModule(container)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode.A_default_export_can_only_be_used_in_an_ECMAScript_style_module, file);
                }
                flags |= ts.ModifierFlags.Default;
                break;
            }
            case ts.SyntaxKind.DeclareKeyword: {
                if (flags & ts.ModifierFlags.Ambient) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_already_seen, file, ["declare"]);
                }
                else if (flags & ts.ModifierFlags.Async) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_in_an_ambient_context, file, ["async"]);
                }
                else if (ts.isClassLike(node.parent) && !ts.isPropertyDeclaration(node)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_class_elements_of_this_kind, file, ["declare"]);
                }
                else if (ts.isParameter(node)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_parameter, file, ["declare"]);
                }
                else if (ts.isPropertyDeclaration(node) && ts.isPrivateIdentifier(node.name)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_a_private_identifier, file, ["declare"]);
                }
                flags |= ts.ModifierFlags.Ambient;
                lastDeclare = modifier;
                break;
            }
            case ts.SyntaxKind.AbstractKeyword: {
                if (flags & ts.ModifierFlags.Abstract) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_already_seen, file, ["abstract"]);
                }
                if (ts.isClassDeclaration(node) && ts.isConstructorTypeNode(node)) {
                    if (!ts.isMethodDeclaration(node) && !ts.isPropertyDeclaration(node) && !ts.isGetAccessorDeclaration(node) && !ts.isSetAccessorDeclaration(node)) {
                        throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode.The_abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration, file);
                    }
                    if (flags & ts.ModifierFlags.Static) {
                        throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_1_modifier, file, ["static", "abstract"]);
                    }
                    if (flags & ts.ModifierFlags.Private) {
                        throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_1_modifier, file, ["private", "abstract"]);
                    }
                    if (flags & ts.ModifierFlags.Async && lastAsync) {
                        throw new diagnostic_1.DiagnosticError(lastAsync, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_1_modifier, file, ["async", "abstract"]);
                    }
                }
                var name_2 = node.name;
                if (name_2 && ts.isPrivateIdentifier(name_2)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_a_private_identifier, file, ["abstract"]);
                }
                flags |= ts.ModifierFlags.Abstract;
                break;
            }
            case ts.SyntaxKind.AsyncKeyword: {
                if (flags & ts.ModifierFlags.Async) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_already_seen, file, ["async"]);
                }
                else if (flags & ts.ModifierFlags.Ambient) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_in_an_ambient_context, file, ["async"]);
                }
                else if (ts.isParameter(node)) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_parameter, file, ["async"]);
                }
                if (flags & ts.ModifierFlags.Abstract) {
                    throw new diagnostic_1.DiagnosticError(modifier, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_with_1_modifier, file, ["async", "abstract"]);
                }
                flags |= ts.ModifierFlags.Async;
                lastAsync = modifier;
                break;
            }
            default:
                break;
        }
    }
    if (ts.isConstructorDeclaration(node)) {
        if (flags & ts.ModifierFlags.Static) {
            throw new diagnostic_1.DiagnosticError(lastStatic, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_constructor_declaration, file, ["static"]);
        }
        if (flags & ts.ModifierFlags.Abstract) {
            throw new diagnostic_1.DiagnosticError(lastStatic, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_constructor_declaration, file, ["abstract"]);
        }
        else if (flags & ts.ModifierFlags.Async) {
            throw new diagnostic_1.DiagnosticError(lastAsync, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_constructor_declaration, file, ["async"]);
        }
        else if (flags & ts.ModifierFlags.Readonly) {
            throw new diagnostic_1.DiagnosticError(lastReadonly, diagnostic_1.DiagnosticCode._0_modifier_cannot_appear_on_a_constructor_declaration, file, ["readonly"]);
        }
    }
    else if ((ts.isImportDeclaration(node) || ts.isImportEqualsDeclaration(node)) && flags & ts.ModifierFlags.Ambient) {
        throw new diagnostic_1.DiagnosticError(lastDeclare, diagnostic_1.DiagnosticCode.A_0_modifier_cannot_be_used_with_an_import_declaration, file, ["declare"]);
    }
    else if (ts.isParameter(node) && (flags & ts.ModifierFlags.ParameterPropertyModifier) && syntaxCheckHelper_1.isBindingPattern(node.name)) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_parameter_property_may_not_be_declared_using_a_binding_pattern, file);
    }
    else if (ts.isParameter(node) && (flags & ts.ModifierFlags.ParameterPropertyModifier) && node.dotDotDotToken) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.A_parameter_property_cannot_be_declared_using_a_rest_parameter, file);
    }
    if (flags & ts.ModifierFlags.Async) {
        checkAsyncModifier(node, lastAsync);
    }
}
function checkVariableDeclarationList(declarationList) {
    var declarations = declarationList.declarations;
    if (!declarations.length) {
        throw new diagnostic_1.DiagnosticError(declarationList, diagnostic_1.DiagnosticCode.Identifier_expected);
    }
    var decl = declarations[0].name;
    if (syntaxCheckHelper_1.isBindingPattern(decl)) {
        checkBindingPattern(decl);
    }
}
function checkVariableStatement(node) {
    checkDecorators(node);
    checkModifiers(node);
    checkVariableDeclarationList(node.declarationList);
    checkDisallowedLetOrConstStatement(node);
}
function checkForInOrForOfStatement(stmt) {
    var file = jshelpers_1["default"].getSourceFileOfNode(stmt);
    var leftExpr = stmt.initializer;
    if (ts.isParenthesizedExpression(leftExpr)) {
        leftExpr = parenthesizedExpression_1.findInnerExprOfParenthesis(leftExpr);
    }
    if (ts.isVariableDeclarationList(leftExpr)) {
        var variableList = leftExpr;
        checkVariableDeclarationList(variableList);
        var declarations = variableList.declarations;
        if (declarations.length > 1) {
            if (ts.isForInStatement(stmt)) {
                throw new diagnostic_1.DiagnosticError(variableList.declarations[1], diagnostic_1.DiagnosticCode.Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement, file);
            }
            else {
                throw new diagnostic_1.DiagnosticError(variableList.declarations[1], diagnostic_1.DiagnosticCode.Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement, file);
            }
        }
        if (declarations[0].initializer) {
            if (ts.isForInStatement(stmt)) {
                throw new diagnostic_1.DiagnosticError(declarations[0].name, diagnostic_1.DiagnosticCode.The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer, file);
            }
            else {
                throw new diagnostic_1.DiagnosticError(declarations[0].name, diagnostic_1.DiagnosticCode.The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer, file);
            }
        }
        if (declarations[0].type) {
            if (ts.isForInStatement(stmt)) {
                throw new diagnostic_1.DiagnosticError(declarations[0], diagnostic_1.DiagnosticCode.The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation, file);
            }
            else {
                throw new diagnostic_1.DiagnosticError(declarations[0], diagnostic_1.DiagnosticCode.The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation, file);
            }
        }
    }
    else {
        isInVaildAssignmentLeftSide(leftExpr);
        if (ts.isArrayLiteralExpression(leftExpr) || ts.isObjectLiteralExpression(leftExpr)) {
            checkDestructuringAssignmentLhs(leftExpr);
        }
    }
}
function checkForInOrForOfVariableDeclaration(iterationStatement) {
    var variableDeclarationList = iterationStatement.initializer;
    // checkGrammarForInOrForOfStatement will check that there is exactly one declaration.
    if (variableDeclarationList.declarations.length >= 1) {
        checkVariableDeclaration(variableDeclarationList.declarations[0]);
    }
}
function checkForInStatement(node) {
    checkForInOrForOfStatement(node);
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    // for (let VarDecl in Expr) Statement
    if (ts.isVariableDeclarationList(node.initializer)) {
        checkForInOrForOfVariableDeclaration(node);
    }
    else {
        var varExpr = node.initializer;
        if (ts.isArrayLiteralExpression(varExpr) || ts.isObjectLiteralExpression(varExpr)) {
            throw new diagnostic_1.DiagnosticError(varExpr, diagnostic_1.DiagnosticCode.The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern, file);
        }
    }
}
function checkReferenceExpression(expr, invalidReferenceCode, invalidOptionalChainCode) {
    var node = jshelpers_1["default"].skipOuterExpressions(expr, 6 /* Assertions */ | 1 /* Parentheses */);
    if (node.kind !== ts.SyntaxKind.Identifier && node.kind !== ts.SyntaxKind.PropertyAccessExpression && node.kind !== ts.SyntaxKind.ElementAccessExpression) {
        throw new diagnostic_1.DiagnosticError(expr, invalidReferenceCode);
    }
    if (node.flags & ts.NodeFlags.OptionalChain) {
        throw new diagnostic_1.DiagnosticError(expr, invalidOptionalChainCode);
    }
}
function checkReferenceAssignment(node) {
    var invalidReferenceCode;
    var invalidOptionalChainCode;
    if (ts.isSpreadAssignment(node.parent)) {
        invalidReferenceCode = diagnostic_1.DiagnosticCode.The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access;
        invalidOptionalChainCode = diagnostic_1.DiagnosticCode.The_target_of_an_object_rest_assignment_may_not_be_an_optional_property_access;
    }
    else {
        invalidReferenceCode = diagnostic_1.DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access;
        invalidOptionalChainCode = diagnostic_1.DiagnosticCode.The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access;
    }
    checkReferenceExpression(node, invalidReferenceCode, invalidOptionalChainCode);
}
function checkDestructuringAssignment(node) {
    var target;
    if (ts.isShorthandPropertyAssignment(node)) {
        var prop = node;
        target = prop.name;
    }
    else {
        target = node;
    }
    if (ts.isBinaryExpression(target) && target.operatorToken.kind === ts.SyntaxKind.EqualsToken) {
        checkBinaryExpression(target);
        target = target.left;
    }
    if (ts.isObjectLiteralExpression(target)) {
        checkObjectLiteralExpression(target);
    }
    checkReferenceAssignment(target);
}
function checkForOfStatement(node) {
    checkForInOrForOfStatement(node);
    if (ts.isVariableDeclarationList(node.initializer)) {
        checkForInOrForOfVariableDeclaration(node);
    }
    else {
        var varExpr = node.initializer;
        if (ts.isArrayLiteralExpression(varExpr) || ts.isObjectLiteralExpression(varExpr)) {
            checkDestructuringAssignment(varExpr);
        }
        else {
            checkReferenceExpression(varExpr, diagnostic_1.DiagnosticCode.The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access, diagnostic_1.DiagnosticCode.The_left_hand_side_of_a_for_of_statement_may_not_be_an_optional_property_access);
        }
    }
}
function checkClassDeclaration(node) {
    checkClassDeclarationHeritageClauses(node);
    var hasConstructorImplementation = false;
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    node.members.forEach(function (member) {
        switch (member.kind) {
            case ts.SyntaxKind.Constructor: {
                if (hasConstructorImplementation) {
                    throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Multiple_constructor_implementations_are_not_allowed, file);
                }
                else {
                    hasConstructorImplementation = true;
                }
                break;
            }
            case ts.SyntaxKind.MethodDeclaration:
            case ts.SyntaxKind.SetAccessor:
                checkFunctionLikeDeclaration(member);
                break;
            case ts.SyntaxKind.GetAccessor:
                checkGetAccessor(member);
                break;
            default:
                break;
        }
    });
    // Class declaration not allowed in statement position
    if (syntaxCheckHelper_1.isStatement(node.parent.kind)) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Class_declaration_not_allowed_in_statement_position, file);
    }
}
function checkClassDeclarationHeritageClauses(node) {
    var hasExtendsKeyWords = false;
    checkDecorators(node);
    checkModifiers(node);
    if (node.heritageClauses == undefined) {
        return;
    }
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    for (var _i = 0, _a = node.heritageClauses; _i < _a.length; _i++) {
        var heritageClause = _a[_i];
        if (heritageClause.token == ts.SyntaxKind.ExtendsKeyword) {
            if (hasExtendsKeyWords) {
                throw new diagnostic_1.DiagnosticError(heritageClause, diagnostic_1.DiagnosticCode.The_extends_clause_already_seen, file);
            }
            if (heritageClause.types.length > 1) {
                throw new diagnostic_1.DiagnosticError(heritageClause, diagnostic_1.DiagnosticCode.Classes_can_only_extend_a_single_class);
            }
            hasExtendsKeyWords = true;
        }
    }
}
function checkBinaryExpression(node) {
    // AssignmentExpression
    if (syntaxCheckHelper_1.isAssignmentOperator(node.operatorToken.kind)) {
        var leftExpr = node.left;
        if (ts.isParenthesizedExpression(leftExpr)) {
            leftExpr = parenthesizedExpression_1.findInnerExprOfParenthesis(leftExpr);
        }
        if (node.operatorToken.kind == ts.SyntaxKind.EqualsToken) {
            if (ts.isArrayLiteralExpression(leftExpr) || ts.isObjectLiteralExpression(leftExpr)) {
                checkDestructuringAssignmentLhs(leftExpr);
            }
        }
        isInVaildAssignmentLeftSide(leftExpr);
    }
}
function isInVaildAssignmentLeftSide(leftExpr) {
    if (jshelpers_1["default"].isKeyword(leftExpr.kind)
        || leftExpr.kind == ts.SyntaxKind.NumericLiteral
        || leftExpr.kind == ts.SyntaxKind.StringLiteral) {
        throw new diagnostic_1.DiagnosticError(leftExpr, diagnostic_1.DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access);
    }
}
function checkContextualIdentifier(node) {
    if (jshelpers_1["default"].isIdentifierName(node)) {
        return;
    }
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    if (node.originalKeywordKind === ts.SyntaxKind.AwaitKeyword) {
        if (jshelpers_1["default"].isExternalOrCommonJsModule(file) && jshelpers_1["default"].isInTopLevelContext(node)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Identifier_expected_0_is_a_reserved_word_at_the_top_level_of_a_module, file, jshelpers_1["default"].declarationNameToString(node));
        }
        else if (node.flags & ts.NodeFlags.AwaitContext) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here, file, jshelpers_1["default"].declarationNameToString(node));
        }
    }
    else if (node.originalKeywordKind === ts.SyntaxKind.YieldKeyword && node.flags & ts.NodeFlags.YieldContext) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here, file, jshelpers_1["default"].declarationNameToString(node));
    }
}
function checkComputedPropertyName(node) {
    if (!ts.isComputedPropertyName(node)) {
        return;
    }
    var expression = node.expression;
    if (ts.isBinaryExpression(expression) && expression.operatorToken.kind === ts.SyntaxKind.CommaToken) {
        var file = jshelpers_1["default"].getSourceFileOfNode(node);
        throw new diagnostic_1.DiagnosticError(expression, diagnostic_1.DiagnosticCode.A_comma_expression_is_not_allowed_in_a_computed_property_name, file);
    }
}
function checkObjectLiteralExpression(node) {
    var inDestructuring = jshelpers_1["default"].isAssignmentTarget(node);
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    var seen = new Map();
    for (var _i = 0, _a = node.properties; _i < _a.length; _i++) {
        var prop = _a[_i];
        if (ts.isSpreadAssignment(prop)) {
            if (inDestructuring) {
                var expression = jshelpers_1["default"].skipParentheses(prop.expression);
                if (ts.isArrayLiteralExpression(expression) || ts.isObjectLiteralExpression(expression)) {
                    throw new diagnostic_1.DiagnosticError(prop.expression, diagnostic_1.DiagnosticCode.A_rest_element_cannot_contain_a_binding_pattern, file);
                }
            }
            continue;
        }
        var name_3 = prop.name;
        if (ts.isComputedPropertyName(name_3)) {
            checkComputedPropertyName(name_3);
        }
        if (ts.isShorthandPropertyAssignment(prop) && !inDestructuring && prop.objectAssignmentInitializer) {
            throw new diagnostic_1.DiagnosticError(prop.equalsToken, diagnostic_1.DiagnosticCode.Did_you_mean_to_use_a_Colon_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring_pattern, file);
        }
        if (ts.isPrivateIdentifier(name_3)) {
            throw new diagnostic_1.DiagnosticError(name_3, diagnostic_1.DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies, file);
        }
        if (prop.modifiers) {
            for (var _b = 0, _c = prop.modifiers; _b < _c.length; _b++) {
                var mod = _c[_b];
                if (!ts.isMethodDeclaration(prop) || mod.kind != ts.SyntaxKind.AsyncKeyword) {
                    throw new diagnostic_1.DiagnosticError(mod, diagnostic_1.DiagnosticCode._0_modifier_cannot_be_used_here, file, [jshelpers_1["default"].getTextOfNode(mod)]);
                }
            }
        }
        /**
         * It is a Syntax Error if PropertyNameList of PropertyDefinitionList contains any duplicate entries for "__proto__" and
         * at least two of those entries were obtained from productions of the form
         * PropertyDefinition : PropertyName : AssignmentExpression .
         */
        var curKind = getPropertieDeclaration(prop, name_3);
        if (!curKind) {
            continue;
        }
        if (!inDestructuring) {
            var effectName = jshelpers_1["default"].getPropertyNameForPropertyNameNode(name_3);
            if (!effectName || ts.isComputedPropertyName(name_3))
                continue;
            var existKind = seen.get(effectName);
            if (!existKind) {
                seen.set(effectName, curKind);
            }
            else {
                if ((curKind & 12 /* PropertyAssignmentOrMethod */) && (existKind & 12 /* PropertyAssignmentOrMethod */)) {
                    if (effectName === "___proto__") {
                        throw new diagnostic_1.DiagnosticError(name_3, diagnostic_1.DiagnosticCode.Duplicate_identifier_0, file, [jshelpers_1["default"].getTextOfNode(name_3)]);
                    }
                }
            }
        }
    }
}
function checkInvalidExclamationToken(exclamationToken) {
    if (Boolean(exclamationToken)) {
        var file = jshelpers_1["default"].getSourceFileOfNode(exclamationToken);
        throw new diagnostic_1.DiagnosticError(exclamationToken, diagnostic_1.DiagnosticCode.A_definite_assignment_assertion_is_not_permitted_in_this_context, file);
    }
}
function checkInvalidQuestionMark(questionToken) {
    if (Boolean(questionToken)) {
        var file = jshelpers_1["default"].getSourceFileOfNode(questionToken);
        throw new diagnostic_1.DiagnosticError(questionToken, diagnostic_1.DiagnosticCode.An_object_member_cannot_be_declared_optional, file);
    }
}
function getPropertieDeclaration(node, name) {
    var decl = undefined;
    if (ts.isShorthandPropertyAssignment(node)) {
        checkInvalidExclamationToken(node.exclamationToken);
    }
    else if (ts.isPropertyAssignment(node)) {
        checkInvalidQuestionMark(node.questionToken);
        decl = 4 /* PropertyAssignment */;
    }
    else if (ts.isMethodDeclaration(node)) {
        decl = 8 /* Method */;
    }
    else if (ts.isGetAccessor(node)) {
        checkGetAccessor(node);
        decl = 1 /* GetAccessor */;
    }
    else if (ts.isSetAccessor(node)) {
        decl = 2 /* SetAccessor */;
    }
    else {
        log_1.LOGE("Unexpected syntax kind:" + node.kind);
    }
    return decl;
}
function checkDisallowedTrailingComma(list) {
    if (list && list.hasTrailingComma) {
        var file = jshelpers_1["default"].getSourceFileOfNode(list);
        throw new diagnostic_1.DiagnosticError(list[0], diagnostic_1.DiagnosticCode.A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma, file);
    }
}
function checkParameters(parameters) {
    var count = parameters.length;
    var optionalParameter = false;
    var file = jshelpers_1["default"].getSourceFileOfNode(parameters);
    for (var i = 0; i < count; i++) {
        var parameter = parameters[i];
        if (parameter.dotDotDotToken) {
            if (i != count - 1) {
                throw new diagnostic_1.DiagnosticError(parameter.dotDotDotToken, diagnostic_1.DiagnosticCode.A_rest_parameter_must_be_last_in_a_parameter_list, file);
            }
            checkDisallowedTrailingComma(parameters);
            if (parameter.initializer) {
                throw new diagnostic_1.DiagnosticError(parameter.name, diagnostic_1.DiagnosticCode.A_rest_parameter_cannot_have_an_initializer, file);
            }
            if (parameter.questionToken) {
                throw new diagnostic_1.DiagnosticError(parameter.questionToken, diagnostic_1.DiagnosticCode.A_rest_parameter_cannot_be_optional, file);
            }
        }
        else if (syntaxCheckHelper_1.isOptionalParameter(parameter)) {
            optionalParameter = true;
            if (parameter.questionToken && parameter.initializer) {
                throw new diagnostic_1.DiagnosticError(parameter.name, diagnostic_1.DiagnosticCode.Parameter_cannot_have_question_mark_and_initializer, file);
            }
        }
        else if (optionalParameter && !parameter.initializer) {
            throw new diagnostic_1.DiagnosticError(parameter.name, diagnostic_1.DiagnosticCode.A_required_parameter_cannot_follow_an_optional_parameter, file);
        }
    }
}
function checkArrowFunction(node) {
    if (!ts.isArrowFunction(node)) {
        return;
    }
    var equalsGreaterThanToken = node.equalsGreaterThanToken;
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    var startLine = file.getLineAndCharacterOfPosition(equalsGreaterThanToken.pos).line;
    var endLine = file.getLineAndCharacterOfPosition(equalsGreaterThanToken.end).line;
    if (startLine !== endLine) {
        throw new diagnostic_1.DiagnosticError(equalsGreaterThanToken, diagnostic_1.DiagnosticCode.Line_terminator_not_permitted_before_arrow, file);
    }
}
function checkFunctionLikeDeclaration(node) {
    checkDecorators(node);
    checkModifiers(node);
    checkParameters(node.parameters);
    checkArrowFunction(node);
}
function checkLabeledStatement(node) {
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    jshelpers_1["default"].findAncestor(node.parent, function (current) {
        if (jshelpers_1["default"].isFunctionLike(current)) {
            return "quit";
        }
        if (ts.isLabeledStatement(current) && current.label.escapedText === node.label.escapedText) {
            throw new diagnostic_1.DiagnosticError(node.label, diagnostic_1.DiagnosticCode.Duplicate_label_0, file, [jshelpers_1["default"].getTextOfNode(node.label)]);
        }
        return false;
    });
    var statement = node.statement;
    if (ts.isVariableStatement(statement)) {
        var variableStatement = statement;
        if (jshelpers_1["default"].isLet(variableStatement.declarationList)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Lexical_declaration_let_not_allowed_in_statement_position);
        }
        if (jshelpers_1["default"].isVarConst(variableStatement.declarationList)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Lexical_declaration_const_not_allowed_in_statement_position);
        }
    }
}
function checkGetAccessor(node) {
    checkFunctionLikeDeclaration(node);
    if (node.parameters.length != 0) {
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Getter_must_not_have_any_formal_parameters);
    }
}
function isValidUseSuperExpression(node, isCallExpression) {
    if (!node) {
        return false;
    }
    if (isCallExpression) {
        return ts.isConstructorDeclaration(node);
    }
    if (!ts.isClassLike(node.parent) && !ts.isObjectLiteralExpression(node.parent)) {
        return false;
    }
    return ts.isMethodDeclaration(node) || ts.isMethodSignature(node) || ts.isGetAccessor(node) || ts.isSetAccessor(node) ||
        ts.isPropertyDeclaration(node) || ts.isPropertySignature(node) || ts.isConstructorDeclaration(node);
}
function checkSuperExpression(node) {
    var file = jshelpers_1["default"].getSourceFileOfNode(node);
    var isCallExpression = false;
    if (ts.isCallExpression(node.parent) && node.parent.expression === node) {
        isCallExpression = true;
    }
    var container = jshelpers_1["default"].getSuperContainer(node, true);
    if (!isCallExpression) {
        while (container && ts.isArrowFunction(container)) {
            container = jshelpers_1["default"].getSuperContainer(container, true);
        }
    }
    var isSuperExpCanUse = isValidUseSuperExpression(container, isCallExpression);
    if (!isSuperExpCanUse) {
        var current = jshelpers_1["default"].findAncestor(node, function (n) { return n === container ? "quit" : ts.isComputedPropertyName(n); });
        if (current && ts.isComputedPropertyName(current)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.The_super_cannot_be_referenced_in_a_computed_property_name, file);
        }
        var containerFunc = jshelpers_1["default"].findAncestor(node, ts.isConstructorDeclaration);
        if (containerFunc) {
            return;
        }
        if (isCallExpression) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors, file);
        }
        if (!container || !container.parent || !ts.isClassLike(container.parent) || ts.isObjectLiteralExpression(container.parent)) {
            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.The_super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions, file);
        }
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.The_super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class, file);
    }
}
function checkRegularExpression(regexp) {
    var regexpText = regexp.text;
    var regexpParse = require("regexpp").RegExpParser;
    new regexpParse().parseLiteral(regexpText);
}
function checkSyntaxErrorForSloppyAndStrictMode(node) {
    switch (node.kind) {
        case ts.SyntaxKind.BreakStatement:
        case ts.SyntaxKind.ContinueStatement:
            checkBreakOrContinueStatement(node);
            break;
        case ts.SyntaxKind.ReturnStatement:
            checkReturnStatement(node);
            break;
        case ts.SyntaxKind.ComputedPropertyName:
            checkComputedPropertyName(node);
            break;
        case ts.SyntaxKind.ObjectBindingPattern:
        case ts.SyntaxKind.ArrayBindingPattern:
            checkBindingPattern(node);
            break;
        case ts.SyntaxKind.MetaProperty:
            checkMetaProperty(node);
            break;
        case ts.SyntaxKind.VariableDeclaration:
            checkVariableDeclaration(node);
            break;
        case ts.SyntaxKind.VariableStatement:
            checkVariableStatement(node);
            break;
        case ts.SyntaxKind.ForInStatement:
            checkForInStatement(node);
            break;
        case ts.SyntaxKind.ForOfStatement:
            checkForOfStatement(node);
            break;
        case ts.SyntaxKind.ClassDeclaration:
        case ts.SyntaxKind.ClassExpression:
            checkClassDeclaration(node);
            break;
        case ts.SyntaxKind.SuperKeyword:
            checkSuperExpression(node);
            break;
        case ts.SyntaxKind.BinaryExpression:
            checkBinaryExpression(node);
            break;
        case ts.SyntaxKind.Identifier:
            checkContextualIdentifier(node);
            break;
        case ts.SyntaxKind.ObjectLiteralExpression:
            checkObjectLiteralExpression(node);
            break;
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.MethodSignature:
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.SetAccessor:
        case ts.SyntaxKind.Constructor:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.ArrowFunction:
            checkFunctionLikeDeclaration(node);
            break;
        case ts.SyntaxKind.GetAccessor:
            checkGetAccessor(node);
            break;
        case ts.SyntaxKind.LabeledStatement:
            checkLabeledStatement(node);
            break;
        case ts.SyntaxKind.RegularExpressionLiteral:
            checkRegularExpression(node);
            break;
        default:
            break;
    }
}
function checkDestructuringAssignmentLhs(lhs) {
    var file = jshelpers_1.getSourceFileOfNode(lhs);
    if (ts.isArrayLiteralExpression(lhs)) {
        var elements = lhs.elements;
        for (var i = 0; i < elements.length; i++) {
            var target = elements[i];
            if (ts.isSpreadElement(target)) {
                if (i != elements.length - 1) {
                    throw new diagnostic_1.DiagnosticError(target, diagnostic_1.DiagnosticCode.A_rest_element_must_be_last_in_a_destructuring_pattern, file);
                }
                if (elements.hasTrailingComma) {
                    throw new diagnostic_1.DiagnosticError(target, diagnostic_1.DiagnosticCode.A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma, file);
                }
                if (ts.isArrayLiteralExpression(target.expression) || ts.isObjectLiteralExpression(target.expression)) {
                    checkDestructuringAssignmentLhs(target.expression);
                }
                continue;
            }
            target = ts.isBinaryExpression(target) ? target.left : target;
            if (ts.isOmittedExpression(target) || ts.isElementAccessExpression(target)) {
                continue;
            }
            if (ts.isIdentifier(target)) {
                var name_4 = jshelpers_1["default"].getTextOfIdentifierOrLiteral(target);
                if (name_4 == "arguments" || name_4 == "eval") {
                    throw new diagnostic_1.DiagnosticError(target, diagnostic_1.DiagnosticCode.Property_destructuring_pattern_expected, file);
                }
                continue;
            }
            if (ts.isPropertyAccessExpression(target)) {
                if (target.questionDotToken) {
                    throw new diagnostic_1.DiagnosticError(target, diagnostic_1.DiagnosticCode.Property_destructuring_pattern_expected, file);
                }
                continue;
            }
            if (ts.isArrayLiteralExpression(target) || ts.isObjectLiteralExpression(target)) {
                checkDestructuringAssignmentLhs(target);
                continue;
            }
            throw new diagnostic_1.DiagnosticError(target, diagnostic_1.DiagnosticCode.Property_destructuring_pattern_expected, file);
        }
    }
    if (ts.isObjectLiteralExpression(lhs)) {
        var elements = lhs.properties;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (ts.isSpreadAssignment(element)) {
                if (i != elements.length - 1) {
                    var file_1 = jshelpers_1.getSourceFileOfNode(lhs);
                    throw new diagnostic_1.DiagnosticError(element, diagnostic_1.DiagnosticCode.A_rest_element_must_be_last_in_a_destructuring_pattern, file_1);
                }
                continue;
            }
            if (ts.isPropertyAssignment(element)) {
                var target = ts.isBinaryExpression(element.initializer) ? element.initializer.left : element.initializer;
                if (ts.isIdentifier(target) ||
                    ts.isElementAccessExpression(target)) {
                    continue;
                }
                if (ts.isPropertyAccessExpression(target)) {
                    if (target.questionDotToken) {
                        throw new diagnostic_1.DiagnosticError(element, diagnostic_1.DiagnosticCode.Property_destructuring_pattern_expected, file);
                    }
                    continue;
                }
                if (ts.isObjectLiteralExpression(target) || ts.isArrayLiteralExpression(target)) {
                    checkDestructuringAssignmentLhs(target);
                    continue;
                }
                throw new diagnostic_1.DiagnosticError(element, diagnostic_1.DiagnosticCode.Property_destructuring_pattern_expected, file);
            }
            if (ts.isShorthandPropertyAssignment(element)) {
                var name_5 = jshelpers_1["default"].getTextOfIdentifierOrLiteral(element.name);
                if (name_5 == "arguments" || name_5 == "eval") {
                    throw new diagnostic_1.DiagnosticError(element, diagnostic_1.DiagnosticCode.Property_destructuring_pattern_expected, file);
                }
                continue;
            }
            if (ts.isMethodDeclaration(element) ||
                ts.isGetAccessorDeclaration(element) ||
                ts.isSetAccessorDeclaration(element)) {
                throw new diagnostic_1.DiagnosticError(element, diagnostic_1.DiagnosticCode.Property_destructuring_pattern_expected, file);
            }
        }
    }
}
function checkBindingPattern(node) {
    var elements = node.elements;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (ts.isOmittedExpression(element)) {
            continue;
        }
        if (element.dotDotDotToken) {
            var file = jshelpers_1.getSourceFileOfNode(node);
            if (i != elements.length - 1) {
                throw new diagnostic_1.DiagnosticError(element, diagnostic_1.DiagnosticCode.A_rest_element_must_be_last_in_a_destructuring_pattern, file);
            }
            if (element.initializer) {
                throw new diagnostic_1.DiagnosticError(element, diagnostic_1.DiagnosticCode.A_rest_parameter_cannot_have_an_initializer);
            }
        }
    }
}
function checkExportEntries(recorder) {
    var exportStmts = recorder.getExportStmts();
    var exportNames = new Set();
    exportStmts.forEach(function (exportStmt) {
        var bindingNameMap = exportStmt.getBindingNameMap();
        bindingNameMap.forEach(function (value, key) {
            if (!exportNames.has(key)) {
                exportNames.add(key);
            }
            else {
                throw new diagnostic_1.DiagnosticError(exportStmt.getNode(), diagnostic_1.DiagnosticCode.Duplicate_identifier_0, jshelpers_1["default"].getSourceFileOfNode(exportStmt.getNode()), [key]);
            }
        });
    });
}
exports.checkExportEntries = checkExportEntries;
//# sourceMappingURL=syntaxChecker.js.map