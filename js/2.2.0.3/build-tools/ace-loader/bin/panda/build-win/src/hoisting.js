"use strict";
exports.__esModule = true;
exports.hoistFunctionInBlock = exports.hoistFunction = exports.hoistVar = exports.hoisting = void 0;
var util_1 = require("./base/util");
var vregisterCache_1 = require("./base/vregisterCache");
var debuginfo_1 = require("./debuginfo");
var scope_1 = require("./scope");
function hoisting(rootNode, pandaGen, recorder) {
    var variableScope = recorder.getScopeOfNode(rootNode);
    var hoistDecls = recorder.getHoistDeclsOfScope(variableScope);
    hoistDecls === null || hoistDecls === void 0 ? void 0 : hoistDecls.forEach(function (decl) {
        if (decl instanceof scope_1.VarDecl) {
            hoistVar(decl, variableScope, pandaGen);
        }
        else if (decl instanceof scope_1.FuncDecl) {
            hoistFunction(decl, variableScope, pandaGen);
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
function hoistFunction(decl, scope, pandaGen) {
    var funcName = decl.name;
    var funcIndex = decl.index;
    var internalName = "func_" + funcName + "_" + funcIndex;
    if (scope instanceof scope_1.GlobalScope) {
        pandaGen.defineFunction(debuginfo_1.NodeKind.FirstNodeOfFunction, decl.node, internalName);
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
        pandaGen.defineFunction(debuginfo_1.NodeKind.FirstNodeOfFunction, decl.node, internalName);
        pandaGen.storeAccToLexEnv(debuginfo_1.NodeKind.FirstNodeOfFunction, scope, 0, v, true);
    }
    else {
        throw new Error("Wrong scope to hoist");
    }
}
exports.hoistFunction = hoistFunction;
// this function is called when hoisting function inside block
function hoistFunctionInBlock(scope, pandaGen, strictMode) {
    var decls = scope.getDecls();
    var funcToHoist = new Array();
    for (var i = 0; i < decls.length; i++) {
        if (decls[i] instanceof scope_1.FuncDecl) {
            funcToHoist.push(decls[i]);
        }
    }
    if (strictMode) {
        funcToHoist.forEach(function (func) {
            hoistFunction(func, scope, pandaGen);
        });
    }
}
exports.hoistFunctionInBlock = hoistFunctionInBlock;
//# sourceMappingURL=hoisting.js.map