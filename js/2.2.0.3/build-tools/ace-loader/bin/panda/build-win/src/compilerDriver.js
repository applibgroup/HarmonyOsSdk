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
exports.CompilerDriver = exports.PendingCompilationUnit = void 0;
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
var jshelpers = __importStar(require("./jshelpers"));
var log_1 = require("./log");
var modules_1 = require("./modules");
var pandagen_1 = require("./pandagen");
var cacheExpander_1 = require("./pass/cacheExpander");
var recorder_1 = require("./recorder");
var regAllocator_1 = require("./regAllocator");
var scope_1 = require("./scope");
var syntaxChecker_1 = require("./syntaxChecker");
var ts2panda_1 = require("./ts2panda");
var parenthesizedExpression_1 = require("./expression/parenthesizedExpression");
var classStatement_1 = require("./statement/classStatement");
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
    function CompilerDriver(outputFileName) {
        this.functionId = 1; // 0 reserved for main
        this.funcIdMap = new Map();
        // register passes here
        this.passes = [
            new cacheExpander_1.CacheExpander(),
            new intrinsicExpander_1.IntrinsicExpander(),
            new regAllocator_1.RegAlloc()
        ];
        this.compilationUnits = [];
        this.pendingCompilationUnits = [];
        this.outputFileName = outputFileName;
        this.statistics = new compilerStatistics_1.CompilerStatistics();
    }
    CompilerDriver.prototype.getStatistics = function () {
        return this.statistics;
    };
    CompilerDriver.prototype.setCustomPasses = function (passes) {
        this.passes = passes;
    };
    CompilerDriver.prototype.addCompilationUnit = function (decl, scope) {
        var internalName = this.getFuncInternalName(decl);
        this.pendingCompilationUnits.push(new PendingCompilationUnit(decl, scope, internalName));
        return internalName;
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
    // sort all function by post order
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
                if (element > 0)
                    log_1.LOGD(_this.kind2String(idx) + " = " + element);
            });
        }
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
            this.addCompilationUnit(variableScope.getBindingNode(), variableScope);
        }
        // compile function must in postorder, which is required in lexenv search
        for (var i = 0; i < this.pendingCompilationUnits.length; i++) {
            var unit = this.pendingCompilationUnits[i];
            this.compileImpl(unit.decl, unit.scope, unit.internalName, recorder);
        }
    };
    CompilerDriver.prototype.compileImpl = function (node, scope, internalName, recorder) {
        var pandaGen = new pandagen_1.PandaGen(internalName, this.getParametersCount(node), scope);
        // for debug info
        debuginfo_1.DebugInfo.addDebugIns(scope, pandaGen, true);
        var compiler = new compiler_1.Compiler(node, pandaGen, this, recorder);
        if (cmdOptions_1.CmdOptions.isModules() && ts.isSourceFile(node) && scope instanceof scope_1.ModuleScope) {
            modules_1.setImport(recorder.getImportStmts(), scope, pandaGen);
            modules_1.setExportBinding(recorder.getExportStmts(), scope, pandaGen);
        }
        // because of para vreg, don't change hosting's position
        hoisting_1.hoisting(node, pandaGen, recorder);
        compiler.compile();
        this.passes.forEach(function (pass) { return pass.run(pandaGen); });
        // for debug info
        debuginfo_1.DebugInfo.addDebugIns(scope, pandaGen, false);
        debuginfo_1.DebugInfo.setDebugInfo(pandaGen);
        debuginfo_1.DebugInfo.setSourceFileDebugInfo(pandaGen, node);
        this.compilationUnits.push(pandaGen);
        if (cmdOptions_1.CmdOptions.showHistogramStatistics()) {
            this.statistics.getInsHistogramStatistics(pandaGen);
        }
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
    CompilerDriver.prototype.getFuncInternalName = function (node) {
        var name = '';
        if (ts.isSourceFile(node)) {
            name = "main";
        }
        else if (ts.isConstructorDeclaration(node)) {
            var classNode = node.parent;
            return this.getInternalNameForCtor(classNode);
        }
        else {
            var funcNode = node;
            if (util_1.isAnonymousFunctionDefinition(funcNode)) {
                var outerNode = parenthesizedExpression_1.findOuterNodeOfParenthesis(funcNode);
                if (ts.isVariableDeclaration(outerNode)) {
                    var id = outerNode.name;
                    if (ts.isIdentifier(id)) {
                        name = jshelpers.getTextOfIdentifierOrLiteral(id);
                    }
                }
                else if (ts.isBinaryExpression(outerNode)) {
                    if (outerNode.operatorToken.kind == ts.SyntaxKind.EqualsToken && ts.isIdentifier(outerNode.left)) {
                        name = jshelpers.getTextOfIdentifierOrLiteral(outerNode.left);
                    }
                }
            }
            else {
                if (ts.isIdentifier(funcNode.name)) {
                    name = jshelpers.getTextOfIdentifierOrLiteral(funcNode.name);
                }
            }
        }
        var internalName = "func_";
        if (name == '') {
            internalName += this.getFuncId(node);
        }
        else {
            internalName += name + '_' + this.getFuncId(node);
        }
        return internalName;
    };
    CompilerDriver.prototype.getInternalNameForCtor = function (node) {
        var name = classStatement_1.getClassNameForConstructor(node);
        return "func_" + name + "_" + this.getFuncId(node);
    };
    CompilerDriver.prototype.writeBinaryFile = function () {
        assemblyDumper_1.AssemblyDumper.dumpHeader();
        this.compilationUnits.forEach(function (pg) { return new assemblyDumper_1.AssemblyDumper(pg).dump(); });
    };
    CompilerDriver.prototype.dumpTs2Panda = function (filename) {
        ts2panda_1.Ts2Panda.dumpHeader();
        ts2panda_1.Ts2Panda.dumpConstantPool();
        this.compilationUnits.forEach(function (pg) { return new ts2panda_1.Ts2Panda(pg).dump(); });
        ts2panda_1.Ts2Panda.dumpToBinFile(filename);
    };
    CompilerDriver.prototype.getCompilationUnits = function () {
        return this.compilationUnits;
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