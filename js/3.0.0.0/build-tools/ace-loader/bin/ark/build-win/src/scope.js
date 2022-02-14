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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LoopScope = exports.LocalScope = exports.FunctionScope = exports.ModuleScope = exports.GlobalScope = exports.VariableScope = exports.Scope = exports.FunctionParameter = exports.CatchParameter = exports.ClassDecl = exports.FuncDecl = exports.ModDecl = exports.ConstDecl = exports.LetDecl = exports.VarDecl = exports.Decl = exports.InitStatus = void 0;
var irnodes_1 = require("./irnodes");
var log_1 = require("./log");
var variable_1 = require("./variable");
var InitStatus;
(function (InitStatus) {
    InitStatus[InitStatus["INITIALIZED"] = 0] = "INITIALIZED";
    InitStatus[InitStatus["UNINITIALIZED"] = 1] = "UNINITIALIZED";
})(InitStatus = exports.InitStatus || (exports.InitStatus = {}));
var Decl = /** @class */ (function () {
    function Decl(name, node) {
        this.name = name;
        this.node = node;
    }
    return Decl;
}());
exports.Decl = Decl;
var VarDecl = /** @class */ (function (_super) {
    __extends(VarDecl, _super);
    function VarDecl(varName, node) {
        return _super.call(this, varName, node) || this;
    }
    return VarDecl;
}(Decl));
exports.VarDecl = VarDecl;
var LetDecl = /** @class */ (function (_super) {
    __extends(LetDecl, _super);
    function LetDecl(letName, node) {
        return _super.call(this, letName, node) || this;
    }
    return LetDecl;
}(Decl));
exports.LetDecl = LetDecl;
var ConstDecl = /** @class */ (function (_super) {
    __extends(ConstDecl, _super);
    function ConstDecl(constName, node) {
        return _super.call(this, constName, node) || this;
    }
    return ConstDecl;
}(Decl));
exports.ConstDecl = ConstDecl;
var ModDecl = /** @class */ (function (_super) {
    __extends(ModDecl, _super);
    function ModDecl(localName, node) {
        return _super.call(this, localName, node) || this;
    }
    return ModDecl;
}(Decl));
exports.ModDecl = ModDecl;
var FuncDecl = /** @class */ (function (_super) {
    __extends(FuncDecl, _super);
    function FuncDecl(funcName, node, index) {
        var _this = _super.call(this, funcName, node) || this;
        _this.index = index;
        return _this;
    }
    return FuncDecl;
}(Decl));
exports.FuncDecl = FuncDecl;
var ClassDecl = /** @class */ (function (_super) {
    __extends(ClassDecl, _super);
    function ClassDecl(className, node, index) {
        var _this = _super.call(this, className, node) || this;
        _this.index = index;
        return _this;
    }
    return ClassDecl;
}(Decl));
exports.ClassDecl = ClassDecl;
var CatchParameter = /** @class */ (function (_super) {
    __extends(CatchParameter, _super);
    function CatchParameter(CpName, node) {
        return _super.call(this, CpName, node) || this;
    }
    return CatchParameter;
}(Decl));
exports.CatchParameter = CatchParameter;
var FunctionParameter = /** @class */ (function (_super) {
    __extends(FunctionParameter, _super);
    function FunctionParameter(FpName, node) {
        return _super.call(this, FpName, node) || this;
    }
    return FunctionParameter;
}(Decl));
exports.FunctionParameter = FunctionParameter;
var Scope = /** @class */ (function () {
    function Scope() {
        this.debugTag = "scope";
        this.globals = [];
        this.locals = [];
        this.name2variable = new Map();
        this.decls = [];
        this.parent = undefined;
        // for debuginfo
        this.startIns = new irnodes_1.DebugInsPlaceHolder();
        this.endIns = new irnodes_1.DebugInsPlaceHolder();
    }
    Scope.prototype.getName2variable = function () {
        return this.name2variable;
    };
    Scope.prototype.getScopeStartIns = function () {
        return this.startIns;
    };
    Scope.prototype.setScopeStartIns = function (startIns) {
        this.startIns = startIns;
    };
    Scope.prototype.setScopeEndIns = function (endIns) {
        this.endIns = endIns;
    };
    Scope.prototype.getScopeEndIns = function () {
        return this.endIns;
    };
    Scope.prototype.setParent = function (parentScope) {
        this.parent = parentScope;
    };
    Scope.prototype.getParent = function () {
        return this.parent;
    };
    Scope.prototype.getRootScope = function () {
        var sp = this;
        var pp = this.getParent();
        while (pp != undefined) {
            sp = pp;
            pp = pp.getParent();
        }
        return sp;
    };
    Scope.prototype.getNearestVariableScope = function () {
        var sp = this;
        while (sp) {
            if (sp instanceof VariableScope) {
                return sp;
            }
            sp = sp.parent;
        }
        return undefined;
    };
    Scope.prototype.getNearestLexicalScope = function () {
        var curScope = this;
        while (curScope) {
            if (curScope instanceof VariableScope || curScope instanceof LoopScope) {
                return curScope;
            }
            curScope = curScope.parent;
        }
        return undefined;
    };
    Scope.prototype.getNthVariableScope = function (level) {
        var sp = this;
        var tempLevel = level;
        while (sp) {
            if (sp instanceof VariableScope) {
                if (tempLevel == 0) {
                    return sp;
                }
                else {
                    tempLevel--;
                }
            }
            sp = sp.parent;
        }
        return undefined;
    };
    Scope.prototype.findLocal = function (name) {
        return this.name2variable.get(name);
    };
    Scope.prototype.find = function (name) {
        var curLevel = 0;
        var curScope = this;
        while (curScope) {
            var resolve = null;
            var tmpLevel = curLevel; // to store current level, not impact by ++
            if (curScope instanceof VariableScope || (curScope instanceof LoopScope && curScope.need2CreateLexEnv())) {
                curLevel++;
            }
            resolve = curScope.findLocal(name);
            if (resolve) {
                log_1.LOGD(this.debugTag, "scope.find (" + name + ") :");
                log_1.LOGD(undefined, resolve);
                return { scope: curScope, level: tmpLevel, v: resolve };
            }
            curScope = curScope.getParent();
        }
        log_1.LOGD(this.debugTag, "scope.find (" + name + ") : undefined");
        return { scope: undefined, level: 0, v: undefined };
    };
    Scope.prototype.findDeclPos = function (name) {
        var declPos = undefined;
        var curScope = this;
        while (curScope) {
            if (curScope.hasDecl(name)) {
                declPos = curScope;
                break;
            }
            curScope = curScope.getParent();
        }
        return declPos;
    };
    Scope.prototype.setDecls = function (decl) {
        this.decls.push(decl);
    };
    Scope.prototype.hasDecl = function (name) {
        var decls = this.decls;
        for (var i = 0; i < decls.length; i++) {
            if (decls[i].name == name) {
                return true;
            }
        }
        return false;
    };
    Scope.prototype.getDecl = function (name) {
        var decls = this.decls;
        for (var i = 0; i < decls.length; i++) {
            if (decls[i].name == name) {
                return decls[i];
            }
        }
        return undefined;
    };
    Scope.prototype.getDecls = function () {
        return this.decls;
    };
    return Scope;
}());
exports.Scope = Scope;
var VariableScope = /** @class */ (function (_super) {
    __extends(VariableScope, _super);
    function VariableScope() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startLexIdx = 0;
        _this.needCreateLexEnv = false;
        _this.parameters = [];
        _this.useArgs = false;
        _this.node = undefined;
        _this.parentVariableScope = null;
        _this.childVariableScope = [];
        return _this;
    }
    VariableScope.prototype.getBindingNode = function () {
        return this.node;
    };
    VariableScope.prototype.setParentVariableScope = function (scope) {
        this.parentVariableScope = scope;
    };
    VariableScope.prototype.getParentVariableScope = function () {
        return this.parentVariableScope;
    };
    VariableScope.prototype.getChildVariableScope = function () {
        return this.childVariableScope;
    };
    VariableScope.prototype.addChildVariableScope = function (scope) {
        this.childVariableScope.push(scope);
    };
    VariableScope.prototype.addParameter = function (name, declKind, argIdx) {
        log_1.LOGD(this.debugTag, "VariableScope.addArg(" + name + "), kind(" + declKind + ")", "argIdx(" + argIdx + ")");
        var v = this.add(name, declKind, InitStatus.INITIALIZED);
        if (!(v instanceof variable_1.LocalVariable)) {
            throw new Error("Error: argument must be local variable!");
        }
        this.parameters.push(v);
        return v;
    };
    VariableScope.prototype.addFuncName = function (funcName) {
        var funcObj = this.name2variable.get('4funcObj');
        this.name2variable.set(funcName, funcObj);
    };
    VariableScope.prototype.need2CreateLexEnv = function () {
        return this.needCreateLexEnv;
    };
    VariableScope.prototype.pendingCreateEnv = function () {
        this.needCreateLexEnv = true;
    };
    VariableScope.prototype.getNumLexEnv = function () {
        return this.startLexIdx;
    };
    VariableScope.prototype.getParametersCount = function () {
        return this.parameters.length;
    };
    VariableScope.prototype.getParameters = function () {
        return this.parameters;
    };
    VariableScope.prototype.getLexVarIdx = function () {
        this.needCreateLexEnv = true;
        return this.startLexIdx++;
    };
    VariableScope.prototype.setLexVar = function (v, refScope) {
        if (!v.isLexVar) {
            v.setLexVar(this);
        }
        log_1.LOGD(this.debugTag, "VariableScope.setLexVar(" + v.idxLex + ")");
        // set all chain to create env
        var scope = refScope;
        while (scope && scope != this) {
            if (scope instanceof VariableScope || (scope instanceof LoopScope && scope.need2CreateLexEnv())) {
                scope.pendingCreateEnv();
            }
            scope = scope.getParent();
        }
    };
    VariableScope.prototype.setUseArgs = function (value) {
        this.useArgs = value;
    };
    VariableScope.prototype.getUseArgs = function () {
        return this.useArgs;
    };
    return VariableScope;
}(Scope));
exports.VariableScope = VariableScope;
var GlobalScope = /** @class */ (function (_super) {
    __extends(GlobalScope, _super);
    function GlobalScope(node) {
        var _this = _super.call(this) || this;
        _this.node = node ? node : undefined;
        return _this;
    }
    GlobalScope.prototype.add = function (name, declKind, status) {
        log_1.LOGD(this.debugTag, "globalscope.add (" + name + "), kind:" + declKind);
        var v;
        if (declKind == variable_1.VarDeclarationKind.NONE || declKind == variable_1.VarDeclarationKind.VAR || declKind == variable_1.VarDeclarationKind.FUNCTION) {
            v = new variable_1.GlobalVariable(declKind, name);
            this.globals.push(v);
        }
        else {
            v = new variable_1.LocalVariable(declKind, name, status);
            this.locals.push(v);
        }
        this.name2variable.set(name, v);
        return v;
    };
    return GlobalScope;
}(VariableScope));
exports.GlobalScope = GlobalScope;
var ModuleScope = /** @class */ (function (_super) {
    __extends(ModuleScope, _super);
    function ModuleScope(node) {
        var _this = _super.call(this) || this;
        _this.node = node ? node : undefined;
        return _this;
    }
    ModuleScope.prototype.add = function (name, declKind, status) {
        log_1.LOGD(this.debugTag, "modulescope.add (" + name + "), kind:" + declKind);
        var v;
        if (declKind == variable_1.VarDeclarationKind.NONE) {
            v = new variable_1.GlobalVariable(declKind, name);
            this.globals.push(v);
        }
        else if (declKind == variable_1.VarDeclarationKind.VAR || declKind == variable_1.VarDeclarationKind.FUNCTION) {
            v = new variable_1.LocalVariable(declKind, name);
            this.locals.push(v);
        }
        else if (declKind == variable_1.VarDeclarationKind.MODULE) {
            v = new variable_1.ModuleVariable(variable_1.VarDeclarationKind.CONST, name, InitStatus.INITIALIZED);
            this.locals.push(v);
        }
        else {
            v = new variable_1.LocalVariable(declKind, name, status);
            this.locals.push(v);
        }
        this.name2variable.set(name, v);
        return v;
    };
    return ModuleScope;
}(VariableScope));
exports.ModuleScope = ModuleScope;
var FunctionScope = /** @class */ (function (_super) {
    __extends(FunctionScope, _super);
    function FunctionScope(parent, node) {
        var _this = _super.call(this) || this;
        _this.parameterLength = 0;
        _this.funcName = "";
        _this.parent = parent ? parent : undefined;
        _this.node = node ? node : undefined;
        return _this;
    }
    FunctionScope.prototype.setParameterLength = function (length) {
        this.parameterLength = length;
    };
    FunctionScope.prototype.getParameterLength = function () {
        return this.parameterLength;
    };
    FunctionScope.prototype.setFuncName = function (name) {
        this.funcName = name;
    };
    FunctionScope.prototype.getFuncName = function () {
        return this.funcName;
    };
    FunctionScope.prototype.getParent = function () {
        return this.parent;
    };
    FunctionScope.prototype.add = function (name, declKind, status) {
        var v;
        log_1.LOGD(this.debugTag, "functionscope.add (" + name + "), kind:" + declKind);
        if (declKind == variable_1.VarDeclarationKind.NONE) {
            // the variable declared without anything should be global
            // See EcmaStandard: 13.3.2 Variable Statement
            var globalScope = this.getRootScope();
            if (globalScope instanceof GlobalScope || globalScope instanceof ModuleScope) {
                v = globalScope.add(name, declKind);
            }
            else {
                v = undefined;
                throw new Error("Error: global variable must be defined in global scope");
            }
        }
        else if (declKind == variable_1.VarDeclarationKind.VAR || declKind == variable_1.VarDeclarationKind.FUNCTION) {
            v = new variable_1.LocalVariable(declKind, name);
            this.locals.push(v);
            this.name2variable.set(name, v);
        }
        else {
            v = new variable_1.LocalVariable(declKind, name, status);
            this.locals.push(v);
            this.name2variable.set(name, v);
        }
        return v;
    };
    return FunctionScope;
}(VariableScope));
exports.FunctionScope = FunctionScope;
var LocalScope = /** @class */ (function (_super) {
    __extends(LocalScope, _super);
    function LocalScope(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    LocalScope.prototype.setLexVar = function (v, srcScope) {
        var variableScope = this.getNearestLexicalScope();
        variableScope.setLexVar(v, srcScope);
    };
    LocalScope.prototype.add = function (name, declKind, status) {
        var v;
        log_1.LOGD(this.debugTag, "localscope.add (" + name + "), kind:" + declKind);
        if (declKind == variable_1.VarDeclarationKind.NONE) {
            var root = this.getRootScope();
            if (root instanceof GlobalScope || root instanceof ModuleScope) {
                return root.add(name, declKind, status);
            }
            else {
                log_1.LOGE(undefined, "Error: the root of this scope is not global scope, it is wrong");
                return undefined;
            }
        }
        else if (declKind == variable_1.VarDeclarationKind.VAR) {
            /**
             * the variable declared without anything should be accessible
             * in all parent scopes so delegate creation to the parent
             * See EcmaStandard: 13.3.2 Variable Statement
             */
            var functionScope = this.getNearestVariableScope();
            v = functionScope.add(name, declKind);
        }
        else {
            v = new variable_1.LocalVariable(declKind, name, status);
            this.locals.push(v);
            this.name2variable.set(name, v);
        }
        return v;
    };
    return LocalScope;
}(Scope));
exports.LocalScope = LocalScope;
var LoopScope = /** @class */ (function (_super) {
    __extends(LoopScope, _super);
    function LoopScope(parent) {
        var _this = _super.call(this, parent) || this;
        _this.startLexIdx = 0;
        _this.needCreateLexEnv = false;
        return _this;
    }
    LoopScope.prototype.setLexVar = function (v, refScope) {
        if (!v.isLexVar) {
            v.setLexVar(this);
        }
        log_1.LOGD(this.debugTag, "LoopScope.setLexVar(" + v.idxLex + ")");
        var scope = refScope;
        while (scope && scope != this) {
            if (scope instanceof VariableScope || (scope instanceof LoopScope && scope.need2CreateLexEnv())) {
                scope.pendingCreateEnv();
            }
            scope = scope.getParent();
        }
    };
    LoopScope.prototype.need2CreateLexEnv = function () {
        return this.needCreateLexEnv;
    };
    LoopScope.prototype.pendingCreateEnv = function () {
        this.needCreateLexEnv = true;
    };
    LoopScope.prototype.getLexVarIdx = function () {
        this.needCreateLexEnv = true;
        return this.startLexIdx++;
    };
    LoopScope.prototype.getNumLexEnv = function () {
        return this.startLexIdx;
    };
    return LoopScope;
}(LocalScope));
exports.LoopScope = LoopScope;
//# sourceMappingURL=scope.js.map