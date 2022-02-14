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
exports.__esModule = true;
exports.hoistFunctionInBlock = exports.hoistFunction = exports.hoistVar = exports.hoisting = void 0;
var util_1 = require("./base/util");
var vregisterCache_1 = require("./base/vregisterCache");
var debuginfo_1 = require("./debuginfo");
var scope_1 = require("./scope");
function hoisting(rootNode, pandaGen, recorder, compiler) {
    var variableScope = recorder.getScopeOfNode(rootNode);
    var hoistDecls = recorder.getHoistDeclsOfScope(variableScope);
    hoistDecls === null || hoistDecls === void 0 ? void 0 : hoistDecls.forEach(function (decl) {
        if (decl instanceof scope_1.VarDecl) {
            hoistVar(decl, variableScope, pandaGen);
        }
        else if (decl instanceof scope_1.FuncDecl) {
            var compilerDriver = compiler.getCompilerDriver();
            hoistFunction(decl, variableScope, pandaGen, compiler, compilerDriver);
        }
        else {
            throw new Error("Wrong declaration type to be hoisted");
        }
    });
}
exports.hoisting = hoisting;
function hoistVar(decl, scope, pandaGen) {
    var name = decl.name;
    if (scope instanceof scope_1.GlobalScope) {
        pandaGen.loadAccumulator(decl.node, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
        pandaGen.storeGlobalVar(decl.node, name);
    }
    else if (scope instanceof scope_1.FunctionScope || scope instanceof scope_1.ModuleScope) {
        var v = scope.findLocal(name);
        pandaGen.loadAccumulator(debuginfo_1.NodeKind.FirstNodeOfFunction, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
        pandaGen.storeAccToLexEnv(debuginfo_1.NodeKind.FirstNodeOfFunction, scope, 0, v, true);
    }
    else {
        throw new Error("Wrong scope to hoist");
    }
}
exports.hoistVar = hoistVar;
function hoistFunction(decl, scope, pandaGen, compiler, compilerDriver) {
    var funcName = decl.name;
    var internalName = compilerDriver.getFuncInternalName(decl.node, compiler.getRecorder());
    var env = compiler.getCurrentEnv();
    if (scope instanceof scope_1.GlobalScope) {
        pandaGen.defineFunction(debuginfo_1.NodeKind.FirstNodeOfFunction, decl.node, internalName, env);
        pandaGen.storeGlobalVar(debuginfo_1.NodeKind.FirstNodeOfFunction, funcName);
    }
    else if ((scope instanceof scope_1.FunctionScope) || (scope instanceof scope_1.LocalScope) || (scope instanceof scope_1.ModuleScope)) {
        var hasExport = util_1.hasExportKeywordModifier(decl.node);
        var hasDefault = util_1.hasDefaultKeywordModifier(decl.node);
        var v = scope.findLocal(funcName);
        if (hasExport && scope instanceof scope_1.ModuleScope) {
            v.setExport();
            if (hasDefault) {
                v.setExportedName("default");
            }
            else {
                v.setExportedName(v.getName());
            }
        }
        pandaGen.defineFunction(debuginfo_1.NodeKind.FirstNodeOfFunction, decl.node, internalName, env);
        pandaGen.storeAccToLexEnv(debuginfo_1.NodeKind.FirstNodeOfFunction, scope, 0, v, true);
    }
    else {
        throw new Error("Wrong scope to hoist");
    }
}
exports.hoistFunction = hoistFunction;
// this function is called when hoisting function inside blocks
function hoistFunctionInBlock(scope, pandaGen, strictMode, compiler) {
    var decls = scope.getDecls();
    var funcToHoist = new Array();
    for (var i = 0; i < decls.length; i++) {
        if (decls[i] instanceof scope_1.FuncDecl) {
            funcToHoist.push(decls[i]);
        }
    }
    if (strictMode) {
        funcToHoist.forEach(function (func) {
            var compilerDriver = compiler.getCompilerDriver();
            hoistFunction(func, scope, pandaGen, compiler, compilerDriver);
        });
    }
}
exports.hoistFunctionInBlock = hoistFunctionInBlock;
//# sourceMappingURL=hoisting.js.map