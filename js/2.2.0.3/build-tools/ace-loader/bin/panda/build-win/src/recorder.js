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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Recorder = void 0;
var typescript_1 = __importDefault(require("typescript"));
var astutils = __importStar(require("./astutils"));
var util_1 = require("./base/util");
var cmdOptions_1 = require("./cmdOptions");
var diagnostic_1 = require("./diagnostic");
var parenthesizedExpression_1 = require("./expression/parenthesizedExpression");
var jshelpers = __importStar(require("./jshelpers"));
var log_1 = require("./log");
var modules_1 = require("./modules");
var scope_1 = require("./scope");
var classStatement_1 = require("./statement/classStatement");
var syntaxChecker_1 = require("./syntaxChecker");
var syntaxCheckHelper_1 = require("./syntaxCheckHelper");
var variable_1 = require("./variable");
var Recorder = /** @class */ (function () {
    function Recorder(node, scope, compilerDriver) {
        this.scopeMap = new Map();
        this.hoistMap = new Map();
        this.parametersMap = new Map();
        this.ClassGroupOfNoCtor = new Array();
        this.importStmts = [];
        this.exportStmts = [];
        this.defaultUsed = false;
        this.node = node;
        this.scope = scope;
        this.compilerDriver = compilerDriver;
    }
    Recorder.prototype.record = function () {
        this.setScopeMap(this.node, this.scope);
        this.recordInfo(this.node, this.scope);
        return this.node;
    };
    Recorder.prototype.getClassGroupOfNoCtor = function () {
        return this.ClassGroupOfNoCtor;
    };
    Recorder.prototype.recordInfo = function (node, scope) {
        var _this = this;
        node.forEachChild(function (childNode) {
            syntaxChecker_1.checkSyntaxError(childNode);
            switch (childNode.kind) {
                case typescript_1["default"].SyntaxKind.FunctionExpression:
                case typescript_1["default"].SyntaxKind.MethodDeclaration:
                case typescript_1["default"].SyntaxKind.Constructor:
                case typescript_1["default"].SyntaxKind.GetAccessor:
                case typescript_1["default"].SyntaxKind.SetAccessor:
                case typescript_1["default"].SyntaxKind.ArrowFunction: {
                    _this.compilerDriver.getFuncId(childNode);
                    var functionScope = _this.buildVariableScope(scope, childNode);
                    _this.recordFuncInfo(childNode);
                    _this.recordInfo(childNode, functionScope);
                    break;
                }
                case typescript_1["default"].SyntaxKind.FunctionDeclaration: {
                    _this.compilerDriver.getFuncId(childNode);
                    var functionScope = _this.buildVariableScope(scope, childNode);
                    _this.recordFuncDecl(childNode, scope);
                    _this.recordInfo(childNode, functionScope);
                    break;
                }
                case typescript_1["default"].SyntaxKind.Block:
                case typescript_1["default"].SyntaxKind.IfStatement:
                case typescript_1["default"].SyntaxKind.DoStatement:
                case typescript_1["default"].SyntaxKind.WhileStatement:
                case typescript_1["default"].SyntaxKind.ForStatement:
                case typescript_1["default"].SyntaxKind.ForInStatement:
                case typescript_1["default"].SyntaxKind.ForOfStatement:
                case typescript_1["default"].SyntaxKind.SwitchStatement:
                case typescript_1["default"].SyntaxKind.LabeledStatement:
                case typescript_1["default"].SyntaxKind.ThrowStatement:
                case typescript_1["default"].SyntaxKind.TryStatement:
                case typescript_1["default"].SyntaxKind.CatchClause: {
                    var localScope = new scope_1.LocalScope(scope);
                    _this.setScopeMap(childNode, localScope);
                    _this.recordInfo(childNode, localScope);
                    break;
                }
                case typescript_1["default"].SyntaxKind.ClassDeclaration:
                case typescript_1["default"].SyntaxKind.ClassExpression: {
                    _this.recordClassInfo(childNode, scope);
                    break;
                }
                case typescript_1["default"].SyntaxKind.Identifier: {
                    _this.recordVariableDecl(childNode, scope);
                    break;
                }
                case typescript_1["default"].SyntaxKind.ImportDeclaration: {
                    if (!cmdOptions_1.CmdOptions.isModules()) {
                        throw new diagnostic_1.DiagnosticError(childNode, diagnostic_1.DiagnosticCode.An_import_declaration_can_only_be_used_in_a_namespace_or_module, jshelpers.getSourceFileOfNode(childNode));
                    }
                    if (!(scope instanceof scope_1.ModuleScope)) {
                        throw new Error("SyntaxError: import statement cannot in other scope except ModuleScope");
                    }
                    _this.recordImportInfo(childNode, scope);
                    break;
                }
                case typescript_1["default"].SyntaxKind.ExportDeclaration: {
                    if (!cmdOptions_1.CmdOptions.isModules()) {
                        throw new diagnostic_1.DiagnosticError(childNode, diagnostic_1.DiagnosticCode.An_export_declaration_can_only_be_used_in_a_module, jshelpers.getSourceFileOfNode(childNode));
                    }
                    if (!(scope instanceof scope_1.ModuleScope)) {
                        throw new Error("SyntaxError: export statement cannot in other scope except ModuleScope");
                    }
                    _this.recordExportInfo(childNode);
                    break;
                }
                case typescript_1["default"].SyntaxKind.ExportAssignment: {
                    if (_this.defaultUsed) {
                        throw new diagnostic_1.DiagnosticError(childNode, diagnostic_1.DiagnosticCode.Duplicate_identifier_0, jshelpers.getSourceFileOfNode(childNode), ["default"]);
                    }
                    _this.defaultUsed = true;
                    break;
                }
                default:
                    _this.recordInfo(childNode, scope);
            }
        });
    };
    Recorder.prototype.recordClassInfo = function (childNode, scope) {
        var localScope = new scope_1.LocalScope(scope);
        this.setScopeMap(childNode, localScope);
        if (!classStatement_1.isContainConstruct(childNode)) {
            classStatement_1.AddCtor2Class(this, childNode, localScope);
        }
        if (childNode.name) {
            var name_1 = jshelpers.getTextOfIdentifierOrLiteral(childNode.name);
            var calssDecl = new scope_1.ClassDecl(name_1, childNode, this.compilerDriver.getFuncId(childNode));
            scope.setDecls(calssDecl);
        }
        this.recordInfo(childNode, localScope);
    };
    Recorder.prototype.buildVariableScope = function (curScope, node) {
        var functionScope = new scope_1.FunctionScope(curScope, node);
        var parentVariableScope = curScope.getNearestVariableScope();
        functionScope.setParentVariableScope(parentVariableScope);
        parentVariableScope.addChildVariableScope(functionScope);
        this.setScopeMap(node, functionScope);
        return functionScope;
    };
    Recorder.prototype.recordVariableDecl = function (id, scope) {
        var name = jshelpers.getTextOfIdentifierOrLiteral(id);
        var parent = this.getDeclarationNodeOfId(id);
        if (parent) {
            var declKind = astutils.getVarDeclarationKind(parent);
            // collect declaration information to corresponding scope
            var decl = this.addVariableDeclToScope(scope, id, parent, name, declKind);
            if (declKind == variable_1.VarDeclarationKind.VAR) {
                var variableScopeParent = scope.getNearestVariableScope();
                this.collectHoistDecls(id, variableScopeParent, decl);
            }
        }
        if (name == "arguments") {
            var varialbeScope = scope.getNearestVariableScope();
            varialbeScope === null || varialbeScope === void 0 ? void 0 : varialbeScope.setUseArgs(true);
        }
    };
    Recorder.prototype.addVariableDeclToScope = function (scope, node, parent, name, declKind) {
        var decl = new scope_1.VarDecl(name, node);
        switch (declKind) {
            case variable_1.VarDeclarationKind.VAR:
                break;
            case variable_1.VarDeclarationKind.LET:
                if (parent.parent.kind == typescript_1["default"].SyntaxKind.CatchClause) {
                    decl = new scope_1.CatchParameter(name, node);
                }
                else {
                    decl = new scope_1.LetDecl(name, node);
                }
                break;
            case variable_1.VarDeclarationKind.CONST:
                decl = new scope_1.ConstDecl(name, node);
                break;
            default:
                throw new Error("Wrong type of declaration");
        }
        scope.setDecls(decl);
        return decl;
    };
    Recorder.prototype.getDeclarationNodeOfId = function (id) {
        var parent = id.parent;
        if (typescript_1["default"].isVariableDeclaration(parent) &&
            parent.name == id) {
            return parent;
        }
        else if (typescript_1["default"].isBindingElement(parent) &&
            parent.name == id) {
            while (parent && !typescript_1["default"].isVariableDeclaration(parent)) {
                parent = parent.parent;
            }
            return parent ? parent : undefined;
        }
        else {
            return undefined;
        }
    };
    Recorder.prototype.recordImportInfo = function (node, scope) {
        if (!typescript_1["default"].isStringLiteral(node.moduleSpecifier)) {
            throw new Error("moduleSpecifier must be a stringLiteral");
        }
        var moduleRequest = jshelpers.getTextOfIdentifierOrLiteral(node.moduleSpecifier);
        var importStmt = new modules_1.ModuleStmt(node, moduleRequest);
        if (node.importClause) {
            var importClause = node.importClause;
            // import defaultExport from "a.js"
            if (importClause.name) {
                var name_2 = jshelpers.getTextOfIdentifierOrLiteral(importClause.name);
                scope.setDecls(new scope_1.ModDecl(name_2, importClause.name));
                importStmt.addLocalName(name_2, "default");
            }
            // import { ... } from "a.js"
            // import * as a from "a.js"
            // import defaultExport, * as a from "a.js"
            if (importClause.namedBindings) {
                var namedBindings = importClause.namedBindings;
                // import * as a from "a.js"
                if (typescript_1["default"].isNamespaceImport(namedBindings)) {
                    var nameSpace = jshelpers.getTextOfIdentifierOrLiteral(namedBindings.name);
                    scope.setDecls(new scope_1.ConstDecl(nameSpace, namedBindings));
                    importStmt.setNameSpace(nameSpace);
                }
                // import { ... } from "a.js"
                if (typescript_1["default"].isNamedImports(namedBindings)) {
                    namedBindings.elements.forEach(function (element) {
                        var name = jshelpers.getTextOfIdentifierOrLiteral(element.name);
                        var exoticName = element.propertyName ? jshelpers.getTextOfIdentifierOrLiteral(element.propertyName) : name;
                        scope.setDecls(new scope_1.ModDecl(name, element));
                        importStmt.addLocalName(name, exoticName);
                    });
                }
            }
        }
        this.importStmts.push(importStmt);
    };
    Recorder.prototype.recordExportInfo = function (node) {
        var _this = this;
        var exportStmt;
        if (node.moduleSpecifier) {
            if (!typescript_1["default"].isStringLiteral(node.moduleSpecifier)) {
                throw new Error("moduleSpecifier must be a stringLiteral");
            }
            exportStmt = new modules_1.ModuleStmt(node, jshelpers.getTextOfIdentifierOrLiteral(node.moduleSpecifier));
        }
        else {
            exportStmt = new modules_1.ModuleStmt(node);
        }
        if (node.exportClause) {
            exportStmt.setCopyFlag(false);
            var namedBindings = node.exportClause;
            if (typescript_1["default"].isNamespaceExport(namedBindings)) {
                exportStmt.setNameSpace(jshelpers.getTextOfIdentifierOrLiteral(namedBindings.name));
            }
            if (typescript_1["default"].isNamedExports(namedBindings)) {
                namedBindings.elements.forEach(function (element) {
                    var name = jshelpers.getTextOfIdentifierOrLiteral(element.name);
                    if (name == 'default') {
                        if (_this.defaultUsed) {
                            throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Duplicate_identifier_0, jshelpers.getSourceFileOfNode(node), [name]);
                        }
                        else {
                            _this.defaultUsed = true;
                        }
                    }
                    var exoticName = element.propertyName ? jshelpers.getTextOfIdentifierOrLiteral(element.propertyName) : name;
                    exportStmt.addLocalName(name, exoticName);
                });
            }
        }
        this.exportStmts.push(exportStmt);
    };
    Recorder.prototype.recordFuncDecl = function (node, scope) {
        this.recordFuncInfo(node);
        var funcId = (node).name;
        if (!funcId) {
            // function declaration without name doesn't need to record hoisting.
            return;
        }
        var funcName = jshelpers.getTextOfIdentifierOrLiteral(funcId);
        var funcDecl = new scope_1.FuncDecl(funcName, node, this.compilerDriver.getFuncId(node));
        scope.setDecls(funcDecl);
        var hoistScope = scope;
        if (scope instanceof scope_1.GlobalScope || scope instanceof scope_1.ModuleScope) {
            this.collectHoistDecls(node, hoistScope, funcDecl);
        }
        else if (scope instanceof scope_1.LocalScope) {
            hoistScope = scope.getNearestVariableScope();
            var expectHoistScope = this.getScopeOfNode(node.parent.parent);
            if ((hoistScope == expectHoistScope) && (hoistScope instanceof scope_1.FunctionScope)) {
                this.collectHoistDecls(node, hoistScope, funcDecl);
            }
        }
        else {
            log_1.LOGD("Function declaration", " in function is collected in its body block");
        }
    };
    Recorder.prototype.recordFuncInfo = function (node) {
        this.recordFunctionParameters(node);
        this.recordFuncName(node);
    };
    Recorder.prototype.recordFuncName = function (node) {
        var name = '';
        if (typescript_1["default"].isConstructorDeclaration(node)) {
            var classNode = node.parent;
            name = classStatement_1.getClassNameForConstructor(classNode);
        }
        else {
            if (util_1.isAnonymousFunctionDefinition(node)) {
                var outerNode = parenthesizedExpression_1.findOuterNodeOfParenthesis(node);
                if (typescript_1["default"].isVariableDeclaration(outerNode)) {
                    var id = outerNode.name;
                    if (typescript_1["default"].isIdentifier(id)) {
                        name = jshelpers.getTextOfIdentifierOrLiteral(id);
                    }
                }
                else if (typescript_1["default"].isBinaryExpression(outerNode)) {
                    if (outerNode.operatorToken.kind == typescript_1["default"].SyntaxKind.EqualsToken && typescript_1["default"].isIdentifier(outerNode.left)) {
                        name = jshelpers.getTextOfIdentifierOrLiteral(outerNode.left);
                    }
                }
                else if (typescript_1["default"].isPropertyAssignment(outerNode)) {
                    var propName = outerNode.name;
                    if (typescript_1["default"].isIdentifier(propName) || typescript_1["default"].isStringLiteral(propName) || typescript_1["default"].isNumericLiteral(propName)) {
                        name = jshelpers.getTextOfIdentifierOrLiteral(propName);
                        if (name == "__proto__") {
                            name = '';
                        }
                    }
                }
            }
            else {
                if (typescript_1["default"].isIdentifier(node.name)) {
                    name = jshelpers.getTextOfIdentifierOrLiteral(node.name);
                }
            }
        }
        this.getScopeOfNode(node).setFuncName(name);
    };
    Recorder.prototype.recordFunctionParameters = function (node) {
        var _this = this;
        var parameters = node.parameters;
        var funcParams = [];
        var length = 0;
        var lengthFlag = true;
        if (parameters) {
            parameters.forEach(function (parameter) {
                // record function.length
                if (parameter.initializer || _this.isRestParameter(parameter)) {
                    lengthFlag = false;
                }
                if (lengthFlag) {
                    length++;
                }
                if (typescript_1["default"].isIdentifier(parameter.name)) {
                    var name_3 = jshelpers.getTextOfIdentifierOrLiteral(parameter.name);
                    funcParams.push(new scope_1.FunctionParameter(name_3, parameter.name));
                }
                else { // parameter is binding pattern
                    _this.recordPatternParameter(parameter.name, funcParams);
                }
            });
        }
        this.getScopeOfNode(node).setParameterLength(length);
        this.setParametersMap(node, funcParams);
    };
    Recorder.prototype.recordPatternParameter = function (pattern, funcParams) {
        var _this = this;
        var name = '';
        pattern.elements.forEach(function (bindingElement) {
            if (typescript_1["default"].isOmittedExpression(bindingElement)) {
                return;
            }
            bindingElement = bindingElement;
            if (typescript_1["default"].isIdentifier(bindingElement.name)) {
                name = jshelpers.getTextOfIdentifierOrLiteral(bindingElement.name);
                funcParams.push(new scope_1.FunctionParameter(name, bindingElement.name));
            }
            else { // case of binding pattern
                var innerPattern = bindingElement.name;
                _this.recordPatternParameter(innerPattern, funcParams);
            }
        });
    };
    Recorder.prototype.isRestParameter = function (parameter) {
        return parameter.dotDotDotToken ? true : false;
    };
    Recorder.prototype.collectHoistDecls = function (node, scope, decl) {
        var declName = decl.name;
        // if variable share a same name with the parameter of its contained function, it should not be hoisted
        if (scope instanceof scope_1.FunctionScope) {
            var nearestFunc = jshelpers.getContainingFunction(node);
            var functionParameters = this.getParametersOfFunction(nearestFunc);
            if (functionParameters) {
                for (var i = 0; i < functionParameters.length; i++) {
                    if (functionParameters[i].name == declName) {
                        return;
                    }
                }
            }
        }
        // Variable named of global identifier should not be hoisted.
        if (syntaxCheckHelper_1.isGlobalIdentifier(declName) && (scope instanceof scope_1.GlobalScope)) {
            return;
        }
        this.setHoistMap(scope, decl);
    };
    Recorder.prototype.setScopeMap = function (node, scope) {
        this.scopeMap.set(node, scope);
    };
    Recorder.prototype.getScopeMap = function () {
        return this.scopeMap;
    };
    Recorder.prototype.getScopeOfNode = function (node) {
        return this.scopeMap.get(node);
    };
    Recorder.prototype.getImportStmts = function () {
        return this.importStmts;
    };
    Recorder.prototype.getExportStmts = function () {
        return this.exportStmts;
    };
    Recorder.prototype.setHoistMap = function (scope, decl) {
        if (!this.hoistMap.has(scope)) {
            this.hoistMap.set(scope, [decl]);
            return;
        }
        var hoistDecls = this.hoistMap.get(scope);
        for (var i = 0; i < hoistDecls.length; i++) {
            if (decl.name == hoistDecls[i].name) {
                if (decl instanceof scope_1.FuncDecl) {
                    hoistDecls[i] = decl;
                }
                return;
            }
        }
        hoistDecls.push(decl);
    };
    Recorder.prototype.getHoistMap = function () {
        return this.hoistMap;
    };
    Recorder.prototype.getHoistDeclsOfScope = function (scope) {
        return this.hoistMap.get(scope);
    };
    Recorder.prototype.setParametersMap = function (node, parameters) {
        this.parametersMap.set(node, parameters);
    };
    Recorder.prototype.getParametersOfFunction = function (node) {
        return this.parametersMap.get(node);
    };
    return Recorder;
}());
exports.Recorder = Recorder;
//# sourceMappingURL=recorder.js.map