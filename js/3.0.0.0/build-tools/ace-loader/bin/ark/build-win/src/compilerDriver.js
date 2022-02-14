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
exports.CompilerDriver = exports.PendingCompilationUnit = void 0;
var fs_1 = require("fs");
var ts = __importStar(require("typescript"));
var addVariable2Scope_1 = require("./addVariable2Scope");
var assemblyDumper_1 = require("./assemblyDumper");
var util_1 = require("./base/util");
var cmdOptions_1 = require("./cmdOptions");
var compiler_1 = require("./compiler");
var compilerStatistics_1 = require("./compilerStatistics");
var debuginfo_1 = require("./debuginfo");
var hoisting_1 = require("./hoisting");
var intrinsicExpander_1 = require("./intrinsicExpander");
var log_1 = require("./log");
var modules_1 = require("./modules");
var pandagen_1 = require("./pandagen");
var cacheExpander_1 = require("./pass/cacheExpander");
var recorder_1 = require("./recorder");
var regAllocator_1 = require("./regAllocator");
var scope_1 = require("./scope");
var classStatement_1 = require("./statement/classStatement");
var syntaxChecker_1 = require("./syntaxChecker");
var ts2panda_1 = require("./ts2panda");
var PendingCompilationUnit = /** @class */ (function () {
    function PendingCompilationUnit(decl, scope, internalName) {
        this.decl = decl;
        this.scope = scope;
        this.internalName = internalName;
    }
    return PendingCompilationUnit;
}());
exports.PendingCompilationUnit = PendingCompilationUnit;
/**
 * The class which drives the compilation process.
 * It handles all dependencies and run passes.
 */
var CompilerDriver = /** @class */ (function () {
    function CompilerDriver(fileName) {
        this.functionId = 1; // 0 reserved for main
        this.funcIdMap = new Map();
        this.needDumpHeader = true;
        this.ts2abcProcess = undefined;
        this.fileName = fileName;
        // register passes here
        this.passes = [
            new cacheExpander_1.CacheExpander(),
            new intrinsicExpander_1.IntrinsicExpander(),
            new regAllocator_1.RegAlloc()
        ];
        this.compilationUnits = [];
        this.pendingCompilationUnits = [];
        this.statistics = new compilerStatistics_1.CompilerStatistics();
    }
    CompilerDriver.prototype.initiateTs2abcChildProcess = function () {
        this.ts2abcProcess = util_1.initiateTs2abc([this.fileName]);
    };
    CompilerDriver.prototype.getTs2abcProcess = function () {
        if (this.ts2abcProcess === undefined) {
            throw new Error("ts2abc hasn't been initiated");
        }
        return this.ts2abcProcess;
    };
    CompilerDriver.prototype.getStatistics = function () {
        return this.statistics;
    };
    CompilerDriver.prototype.setCustomPasses = function (passes) {
        this.passes = passes;
    };
    CompilerDriver.prototype.addCompilationUnit = function (decl, scope, recorder) {
        var internalName = this.getFuncInternalName(decl, recorder);
        this.pendingCompilationUnits.push(new PendingCompilationUnit(decl, scope, internalName));
        return internalName;
    };
    CompilerDriver.prototype.getCompilationUnits = function () {
        return this.compilationUnits;
    };
    CompilerDriver.prototype.kind2String = function (kind) {
        return ts.SyntaxKind[kind];
    };
    CompilerDriver.prototype.getASTStatistics = function (node, statics) {
        var _this = this;
        node.forEachChild(function (childNode) {
            statics[childNode.kind] = statics[childNode.kind] + 1;
            _this.getASTStatistics(childNode, statics);
        });
    };
    // sort all function in post order
    CompilerDriver.prototype.postOrderAnalysis = function (scope) {
        var spArray = [];
        var stack = [];
        stack.push(scope);
        while (stack.length > 0) {
            var temp = stack.pop();
            if (temp == undefined) {
                break;
            }
            spArray.push(temp);
            for (var _i = 0, _a = temp.getChildVariableScope(); _i < _a.length; _i++) {
                var childVariableScope = _a[_i];
                stack.push(childVariableScope);
            }
        }
        return spArray.reverse();
    };
    CompilerDriver.prototype.compile = function (node) {
        var _this = this;
        if (cmdOptions_1.CmdOptions.showASTStatistics()) {
            var statics = new Array(ts.SyntaxKind.Count).fill(0);
            this.getASTStatistics(node, statics);
            statics.forEach(function (element, idx) {
                if (element > 0) {
                    log_1.LOGD(_this.kind2String(idx) + " = " + element);
                }
            });
        }
        var recorder = this.compilePrologue(node);
        // initiate ts2abc
        if (!cmdOptions_1.CmdOptions.isAssemblyMode()) {
            this.initiateTs2abcChildProcess();
            var ts2abcProc = this.getTs2abcProcess();
            util_1.listenChildExit(ts2abcProc);
            util_1.listenErrorEvent(ts2abcProc);
            try {
                ts2panda_1.Ts2Panda.dumpCmdOptions(ts2abcProc);
                for (var i = 0; i < this.pendingCompilationUnits.length; i++) {
                    var unit = this.pendingCompilationUnits[i];
                    this.compileImpl(unit.decl, unit.scope, unit.internalName, recorder);
                }
                ts2panda_1.Ts2Panda.dumpStringsArray(ts2abcProc);
                ts2panda_1.Ts2Panda.dumpConstantPool(ts2abcProc);
                util_1.terminateWritePipe(ts2abcProc);
                if (cmdOptions_1.CmdOptions.isEnableDebugLog()) {
                    var jsonFileName = this.fileName.substring(0, this.fileName.lastIndexOf(".")).concat(".json");
                    fs_1.writeFileSync(jsonFileName, ts2panda_1.Ts2Panda.jsonString);
                    log_1.LOGD("Successfully generate ", "" + jsonFileName);
                }
                ts2panda_1.Ts2Panda.clearDumpData();
            }
            catch (err) {
                util_1.terminateWritePipe(ts2abcProc);
                throw err;
            }
        }
        else {
            for (var i = 0; i < this.pendingCompilationUnits.length; i++) {
                var unit = this.pendingCompilationUnits[i];
                this.compileImpl(unit.decl, unit.scope, unit.internalName, recorder);
            }
        }
        pandagen_1.PandaGen.clearLiteralArrayBuffer();
    };
    CompilerDriver.prototype.compileImpl = function (node, scope, internalName, recorder) {
        var pandaGen = new pandagen_1.PandaGen(internalName, this.getParametersCount(node), scope);
        // for debug info
        debuginfo_1.DebugInfo.addDebugIns(scope, pandaGen, true);
        var compiler = new compiler_1.Compiler(node, pandaGen, this, recorder);
        if (cmdOptions_1.CmdOptions.isModules() && ts.isSourceFile(node) && scope instanceof scope_1.ModuleScope) {
            modules_1.setImport(recorder.getImportStmts(), scope, pandaGen, compiler);
            modules_1.setExportBinding(recorder.getExportStmts(), scope, pandaGen);
        }
        // because of para vreg, don't change hosting's position
        hoisting_1.hoisting(node, pandaGen, recorder, compiler);
        compiler.compile();
        this.passes.forEach(function (pass) { return pass.run(pandaGen); });
        // for debug info
        debuginfo_1.DebugInfo.addDebugIns(scope, pandaGen, false);
        debuginfo_1.DebugInfo.setDebugInfo(pandaGen);
        debuginfo_1.DebugInfo.setSourceFileDebugInfo(pandaGen, node);
        if (cmdOptions_1.CmdOptions.isAssemblyMode()) {
            this.writeBinaryFile(pandaGen);
        }
        else {
            ts2panda_1.Ts2Panda.dumpPandaGen(pandaGen, this.getTs2abcProcess());
        }
        if (cmdOptions_1.CmdOptions.showHistogramStatistics()) {
            this.statistics.getInsHistogramStatistics(pandaGen);
        }
    };
    CompilerDriver.prototype.compileUnitTest = function (node) {
        var recorder = this.compilePrologue(node);
        for (var i = 0; i < this.pendingCompilationUnits.length; i++) {
            var unit = this.pendingCompilationUnits[i];
            this.compileUnitTestImpl(unit.decl, unit.scope, unit.internalName, recorder);
        }
        pandagen_1.PandaGen.clearLiteralArrayBuffer();
    };
    CompilerDriver.prototype.compileUnitTestImpl = function (node, scope, internalName, recorder) {
        var pandaGen = new pandagen_1.PandaGen(internalName, this.getParametersCount(node), scope);
        var compiler = new compiler_1.Compiler(node, pandaGen, this, recorder);
        if (cmdOptions_1.CmdOptions.isModules() && ts.isSourceFile(node) && scope instanceof scope_1.ModuleScope) {
            modules_1.setImport(recorder.getImportStmts(), scope, pandaGen, compiler);
            modules_1.setExportBinding(recorder.getExportStmts(), scope, pandaGen);
        }
        hoisting_1.hoisting(node, pandaGen, recorder, compiler);
        compiler.compile();
        this.passes.forEach(function (pass) { return pass.run(pandaGen); });
        this.compilationUnits.push(pandaGen);
    };
    CompilerDriver.prototype.compilePrologue = function (node) {
        var topLevelScope;
        if (cmdOptions_1.CmdOptions.isModules()) {
            topLevelScope = new scope_1.ModuleScope(node);
        }
        else {
            topLevelScope = new scope_1.GlobalScope(node);
        }
        var recorder = new recorder_1.Recorder(node, topLevelScope, this);
        recorder.record();
        syntaxChecker_1.checkDuplicateDeclaration(recorder);
        syntaxChecker_1.checkExportEntries(recorder);
        addVariable2Scope_1.addVariableToScope(recorder);
        var postOrderVariableScopes = this.postOrderAnalysis(topLevelScope);
        for (var _i = 0, postOrderVariableScopes_1 = postOrderVariableScopes; _i < postOrderVariableScopes_1.length; _i++) {
            var variableScope = postOrderVariableScopes_1[_i];
            this.addCompilationUnit(variableScope.getBindingNode(), variableScope, recorder);
        }
        return recorder;
    };
    CompilerDriver.prototype.showStatistics = function () {
        if (cmdOptions_1.CmdOptions.showHistogramStatistics()) {
            this.statistics.printHistogram(false);
        }
        if (cmdOptions_1.CmdOptions.showHoistingStatistics()) {
            this.statistics.printHoistStatistics();
        }
    };
    CompilerDriver.prototype.getFuncId = function (node) {
        if (this.funcIdMap.has(node)) {
            return this.funcIdMap.get(node);
        }
        if (ts.isSourceFile(node)) {
            this.funcIdMap.set(node, 0);
            return 0;
        }
        var idx = this.functionId++;
        this.funcIdMap.set(node, idx);
        return idx;
    };
    /**
     * Internal name is used to indentify a function in panda file
     * Runtime uses this name to bind code and a Function object
     */
    CompilerDriver.prototype.getFuncInternalName = function (node, recorder) {
        var name;
        if (ts.isSourceFile(node)) {
            name = "func_main_0";
        }
        else if (ts.isConstructorDeclaration(node)) {
            var classNode = node.parent;
            name = this.getInternalNameForCtor(classNode);
        }
        else {
            var funcNode = node;
            name = recorder.getScopeOfNode(funcNode).getFuncName();
            if (name == '') {
                return "#" + this.getFuncId(funcNode) + "#";
            }
            if (name == "func_main_0") {
                return "#" + this.getFuncId(funcNode) + "#" + name;
            }
            var funcNameMap = recorder.getFuncNameMap();
            if (funcNameMap.has(name)) {
                var freq = funcNameMap.get(name);
                if (freq > 1) {
                    name = "#" + this.getFuncId(funcNode) + "#" + name;
                }
            }
            else {
                throw new Error("the function name is missing from the name map");
            }
            if (name.lastIndexOf(".") != -1) {
                name = "#" + this.getFuncId(funcNode) + "#";
            }
        }
        return name;
    };
    CompilerDriver.prototype.getInternalNameForCtor = function (node) {
        var name = classStatement_1.getClassNameForConstructor(node);
        name = "#" + this.getFuncId(node) + "#" + name;
        if (name.lastIndexOf(".") != -1) {
            name = "#" + this.getFuncId(node) + "#";
        }
        return name;
    };
    CompilerDriver.prototype.writeBinaryFile = function (pandaGen) {
        if (this.needDumpHeader) {
            assemblyDumper_1.AssemblyDumper.dumpHeader();
            this.needDumpHeader = false;
        }
        new assemblyDumper_1.AssemblyDumper(pandaGen).dump();
    };
    CompilerDriver.prototype.getParametersCount = function (node) {
        // each function and global scope accepts three parameters - funcObj + newTarget + this.
        // the runtime passes these to global scope when calls it
        var parametersCount = 3;
        if (node.kind == ts.SyntaxKind.SourceFile) {
            return parametersCount;
        }
        var decl = node;
        parametersCount += decl.parameters.length;
        return parametersCount;
    };
    return CompilerDriver;
}());
exports.CompilerDriver = CompilerDriver;
//# sourceMappingURL=compilerDriver.js.map