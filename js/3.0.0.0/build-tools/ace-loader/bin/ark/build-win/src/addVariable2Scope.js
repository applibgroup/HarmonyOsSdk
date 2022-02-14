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
exports.addVariableToScope = void 0;
var ts = __importStar(require("typescript"));
var util_1 = require("./base/util");
var jshelpers = __importStar(require("./jshelpers"));
var scope_1 = require("./scope");
var syntaxCheckHelper_1 = require("./syntaxCheckHelper");
var variable_1 = require("./variable");
function addInnerArgs(node, scope) {
    // the first argument for js function is func_obj
    scope.addParameter("4funcObj", variable_1.VarDeclarationKind.CONST, -1);
    // the second argument for newTarget
    if (node.kind == ts.SyntaxKind.ArrowFunction) {
        scope.addParameter("0newTarget", variable_1.VarDeclarationKind.CONST, -1);
        scope.addParameter("0this", variable_1.VarDeclarationKind.CONST, 0);
    }
    else {
        scope.addParameter("4newTarget", variable_1.VarDeclarationKind.CONST, -1);
        scope.addParameter("this", variable_1.VarDeclarationKind.CONST, 0);
    }
    if (node.kind != ts.SyntaxKind.SourceFile) {
        var funcNode = node;
        addParameters(funcNode, scope);
    }
    if (scope.getUseArgs()) {
        if (ts.isArrowFunction(node)) {
            var parentVariableScope = scope.getParentVariableScope();
            parentVariableScope.add("arguments", variable_1.VarDeclarationKind.CONST, scope_1.InitStatus.INITIALIZED);
            parentVariableScope.setUseArgs(true);
            scope.setUseArgs(false);
        }
        else {
            if (!scope.findLocal("arguments")) {
                scope.add("arguments", variable_1.VarDeclarationKind.CONST, scope_1.InitStatus.INITIALIZED);
            }
        }
    }
}
function addVariableToScope(recorder) {
    var scopeMap = recorder.getScopeMap();
    var hoistMap = recorder.getHoistMap();
    scopeMap.forEach(function (scope, node) {
        var hoistDecls = [];
        if (scope instanceof scope_1.VariableScope) {
            addInnerArgs(node, scope);
            hoistDecls = hoistMap.get(scope);
            if (hoistDecls) {
                hoistDecls.forEach(function (hoistDecl) {
                    if (hoistDecl instanceof scope_1.VarDecl) {
                        scope.add(hoistDecl.name, variable_1.VarDeclarationKind.VAR);
                    }
                    else if (hoistDecl instanceof scope_1.FuncDecl) {
                        scope.add(hoistDecl.name, variable_1.VarDeclarationKind.FUNCTION);
                    }
                    else {
                        throw new Error("Wrong type of declaration to be hoisted");
                    }
                });
            }
        }
        var decls = scope.getDecls();
        var nearestVariableScope = scope.getNearestVariableScope();
        hoistDecls = hoistMap.get(nearestVariableScope);
        for (var j = 0; j < decls.length; j++) {
            var decl = decls[j];
            if (hoistDecls && hoistDecls.includes(decl)) {
                continue;
            }
            if (decl instanceof scope_1.LetDecl) {
                scope.add(decl.name, variable_1.VarDeclarationKind.LET, scope_1.InitStatus.UNINITIALIZED);
            }
            else if (decl instanceof scope_1.ConstDecl) {
                scope.add(decl.name, variable_1.VarDeclarationKind.CONST, scope_1.InitStatus.UNINITIALIZED);
            }
            else if (decl instanceof scope_1.FuncDecl) {
                scope.add(decl.name, variable_1.VarDeclarationKind.FUNCTION);
            }
            else if (decl instanceof scope_1.CatchParameter) {
                scope.add(decl.name, variable_1.VarDeclarationKind.LET);
            }
            else if (decl instanceof scope_1.ModDecl) {
                if (!(scope instanceof scope_1.ModuleScope)) {
                    throw new Error("ModuleVariable can't exist without ModuleScope");
                }
                scope.add(decl.name, variable_1.VarDeclarationKind.MODULE);
            }
            else if (decl instanceof scope_1.ClassDecl) {
                var classNode = decl.node;
                if (ts.isClassDeclaration(classNode)) {
                    scope.add(decl.name, variable_1.VarDeclarationKind.CLASS, scope_1.InitStatus.UNINITIALIZED);
                }
                else {
                    var classScope = recorder.getScopeOfNode(classNode);
                    classScope.add(decl.name, variable_1.VarDeclarationKind.CLASS, scope_1.InitStatus.UNINITIALIZED);
                }
            }
            else {
                /**
                 * Case 1: var declaration share a same name with function declaration, then
                 * function declaration will be hoisted and the var declaration will be left be.
                 * Case 2: "var undefined" in global scope is not added to hoistDecls,
                 * but it should be added to scope
                 */
                if (syntaxCheckHelper_1.isGlobalIdentifier(decls[j].name)) {
                    scope.add(decls[j].name, variable_1.VarDeclarationKind.VAR);
                }
            }
        }
    });
}
exports.addVariableToScope = addVariableToScope;
function addParameters(node, scope) {
    var patternParams = new Array();
    for (var i = 0; i < node.parameters.length; ++i) {
        var param = node.parameters[i];
        var name_1 = '';
        if (util_1.isBindingPattern(param.name)) {
            patternParams.push(param.name);
            name_1 = i.toString() + "pattern";
        }
        else if (ts.isIdentifier(param.name)) {
            name_1 = jshelpers.getTextOfIdentifierOrLiteral(param.name);
        }
        scope.addParameter(name_1, variable_1.VarDeclarationKind.VAR, i + 1);
    }
    for (var i = 0; i < patternParams.length; i++) {
        addPatternParamterElements(patternParams[i], scope);
    }
}
function addPatternParamterElements(pattern, scope) {
    var name = '';
    pattern.elements.forEach(function (bindingElement) {
        if (ts.isOmittedExpression(bindingElement)) {
            return;
        }
        bindingElement = bindingElement;
        if (ts.isIdentifier(bindingElement.name)) {
            name = jshelpers.getTextOfIdentifierOrLiteral(bindingElement.name);
            scope.add(name, variable_1.VarDeclarationKind.VAR);
        }
        else if (util_1.isBindingPattern(bindingElement.name)) {
            var innerPattern = bindingElement.name;
            addPatternParamterElements(innerPattern, scope);
        }
    });
}
//# sourceMappingURL=addVariable2Scope.js.map