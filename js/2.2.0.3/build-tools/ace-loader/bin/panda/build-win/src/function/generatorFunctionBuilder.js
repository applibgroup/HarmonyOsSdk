"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GeneratorFunctionBuilder = void 0;
var typescript_1 = __importDefault(require("typescript"));
var vregisterCache_1 = require("../base/vregisterCache");
var compiler_1 = require("../compiler");
var irnodes_1 = require("../irnodes");
var forOfStatement_1 = require("../statement/forOfStatement");
var ResumeMode;
(function (ResumeMode) {
    ResumeMode[ResumeMode["Return"] = 0] = "Return";
    ResumeMode[ResumeMode["Throw"] = 1] = "Throw";
    ResumeMode[ResumeMode["Next"] = 2] = "Next";
})(ResumeMode || (ResumeMode = {}));
;
/**
 * function *foo() {
 *     yield 'a'
 * }
*/
var GeneratorFunctionBuilder = /** @class */ (function () {
    function GeneratorFunctionBuilder(pandaGen, compiler) {
        this.pandaGen = pandaGen;
        this.compiler = compiler;
        this.genObj = pandaGen.getTemp();
        this.retVal = pandaGen.getTemp();
    }
    GeneratorFunctionBuilder.prototype.prepare = function (node, recorder) {
        var pandaGen = this.pandaGen;
        var scope = recorder.getScopeOfNode(node);
        var funcObj = scope.getName2variable().get('4funcObj').getVreg();
        pandaGen.createGeneratorObj(node, funcObj);
        pandaGen.storeAccumulator(node, this.genObj);
        pandaGen.suspendGenerator(node, this.genObj, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
        pandaGen.resumeGenerator(node, this.genObj);
        pandaGen.storeAccumulator(node, this.retVal);
        this.handleMode(node);
    };
    GeneratorFunctionBuilder.prototype.yield = function (node, value) {
        var pandaGen = this.pandaGen;
        var iterRslt = pandaGen.getTemp();
        pandaGen.createIterResultObjectDyn(node, value, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False));
        pandaGen.storeAccumulator(node, iterRslt);
        pandaGen.suspendGenerator(node, this.genObj, iterRslt);
        pandaGen.freeTemps(iterRslt);
        pandaGen.resumeGenerator(node, this.genObj);
        pandaGen.storeAccumulator(node, this.retVal);
        this.handleMode(node);
    };
    GeneratorFunctionBuilder.prototype.yieldStar = function (expr) {
        var pandaGen = this.pandaGen;
        var method = pandaGen.getTemp();
        var object = pandaGen.getTemp();
        var receivedValue = pandaGen.getTemp();
        var modeType = pandaGen.getTemp();
        var loopStartLabel = new irnodes_1.Label();
        var callreturnLabel = new irnodes_1.Label();
        var callthrowLabel = new irnodes_1.Label();
        var iteratorCompletionLabel = new irnodes_1.Label();
        var exitLabel_return = new irnodes_1.Label();
        var exitLabel_throw = new irnodes_1.Label();
        var exitLabel_value = new irnodes_1.Label();
        var exitLabel_TypeError = new irnodes_1.Label();
        // get innerIterator & iterator.[[Nextmethod]] (spec 4 & 5)
        // TODO: Async(hufeng00576929)
        var type = forOfStatement_1.IteratorType.Normal;
        var iterator = forOfStatement_1.getIteratorRecord(pandaGen, expr, method, object, type);
        // init receivedValue with Undefined (spec 6)
        pandaGen.moveVreg(expr, receivedValue, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
        // init modeType with Next (spec 6)
        pandaGen.loadAccumulatorInt(expr, ResumeMode.Next);
        pandaGen.storeAccumulator(expr, modeType);
        // starts executeing iterator.[[method]] (spec 7)
        pandaGen.label(expr, loopStartLabel);
        pandaGen.loadAccumulatorInt(expr, ResumeMode.Next);
        pandaGen.condition(expr, typescript_1["default"].SyntaxKind.EqualsEqualsToken, modeType, callreturnLabel);
        // call next
        pandaGen.call(expr, [iterator.getNextMethod(), iterator.getObject(), receivedValue], true);
        pandaGen.branch(expr, iteratorCompletionLabel);
        // call return
        pandaGen.label(expr, callreturnLabel);
        pandaGen.loadAccumulatorInt(expr, ResumeMode.Return);
        pandaGen.condition(expr, typescript_1["default"].SyntaxKind.EqualsEqualsToken, modeType, callthrowLabel);
        pandaGen.loadObjProperty(expr, iterator.getObject(), "return");
        pandaGen.storeAccumulator(expr, method);
        // whether iterator.[[return]] exists
        pandaGen.condition(expr, typescript_1["default"].SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), exitLabel_return);
        pandaGen.call(expr, [method, iterator.getObject(), receivedValue], true);
        pandaGen.branch(expr, iteratorCompletionLabel);
        // no return method
        pandaGen.label(expr, exitLabel_return);
        // if there are finally blocks, should implement these at first.
        this.compiler.compileFinallyBlockBeforeControlFlowChange(undefined, compiler_1.ControlFlowChange.Break, undefined);
        // spec 7.c.iii.2 Return Completion(received).
        pandaGen.loadAccumulator(expr, receivedValue);
        pandaGen["return"](expr);
        // call throw
        pandaGen.label(expr, callthrowLabel);
        pandaGen.loadObjProperty(expr, iterator.getObject(), "throw");
        pandaGen.storeAccumulator(expr, method);
        // whether iterator.[[throw]] exists
        pandaGen.condition(expr, typescript_1["default"].SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), exitLabel_throw);
        pandaGen.call(expr, [method, iterator.getObject(), receivedValue], true);
        pandaGen.branch(expr, iteratorCompletionLabel);
        // NOTE: If iterator does not have a throw method, this throw is
        // going to terminate the yield* loop. But first we need to give
        // iterator a chance to clean up.
        pandaGen.label(expr, exitLabel_throw);
        pandaGen.loadObjProperty(expr, iterator.getObject(), "return");
        pandaGen.storeAccumulator(expr, method);
        // whether iterator.[[return]] exists
        pandaGen.condition(expr, typescript_1["default"].SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), exitLabel_TypeError);
        // [[return]] exists
        pandaGen.call(expr, [method, iterator.getObject()], true);
        var innerResult = pandaGen.getTemp();
        pandaGen.storeAccumulator(expr, innerResult);
        pandaGen.throwIfNotObject(expr, innerResult);
        pandaGen.freeTemps(innerResult);
        pandaGen.label(expr, exitLabel_TypeError);
        pandaGen.throwThrowNotExist(expr);
        // iteratorCompletion
        pandaGen.label(expr, iteratorCompletionLabel);
        pandaGen.storeAccumulator(expr, this.retVal);
        pandaGen.throwIfNotObject(expr, this.retVal);
        pandaGen.loadObjProperty(expr, this.retVal, "done");
        pandaGen.toBoolean(expr);
        pandaGen.condition(expr, typescript_1["default"].SyntaxKind.ExclamationEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True), exitLabel_value);
        pandaGen.suspendGenerator(expr, this.genObj, this.retVal);
        pandaGen.resumeGenerator(expr, this.genObj);
        pandaGen.storeAccumulator(expr, receivedValue);
        pandaGen.getResumeMode(expr, this.genObj);
        pandaGen.storeAccumulator(expr, modeType);
        pandaGen.branch(expr, loopStartLabel);
        // spec 7.a.v.1/7.b.ii.6.a/7.c.viii Return ? IteratorValue(innerResult).
        // Decide if we trigger a return or if the yield* expression should just
        // produce a value.
        var outputLabel = new irnodes_1.Label();
        pandaGen.label(expr, exitLabel_value);
        pandaGen.loadObjProperty(expr, this.retVal, "value");
        var outputResult = pandaGen.getTemp();
        pandaGen.storeAccumulator(expr, outputResult);
        pandaGen.loadAccumulatorInt(expr, ResumeMode.Return);
        pandaGen.condition(expr, typescript_1["default"].SyntaxKind.EqualsEqualsToken, modeType, outputLabel);
        this.compiler.compileFinallyBlockBeforeControlFlowChange(undefined, compiler_1.ControlFlowChange.Break, undefined);
        pandaGen.loadAccumulator(expr, outputResult);
        pandaGen["return"](expr);
        pandaGen.label(expr, outputLabel);
        pandaGen.loadAccumulator(expr, outputResult);
        pandaGen.freeTemps(method, object, receivedValue, modeType, outputResult);
    };
    GeneratorFunctionBuilder.prototype.handleMode = function (node) {
        var pandaGen = this.pandaGen;
        var modeType = pandaGen.getTemp();
        pandaGen.getResumeMode(node, this.genObj);
        pandaGen.storeAccumulator(node, modeType);
        // .return(value)
        pandaGen.loadAccumulatorInt(node, ResumeMode.Return);
        var notRetLabel = new irnodes_1.Label();
        pandaGen.condition(node, typescript_1["default"].SyntaxKind.EqualsEqualsToken, modeType, notRetLabel);
        // if there are finally blocks, should implement these at first.
        this.compiler.compileFinallyBlockBeforeControlFlowChange(undefined, compiler_1.ControlFlowChange.Break, undefined);
        pandaGen.loadAccumulator(node, this.retVal);
        pandaGen["return"](node);
        // .throw(value)
        pandaGen.label(node, notRetLabel);
        pandaGen.loadAccumulatorInt(node, ResumeMode.Throw);
        var notThrowLabel = new irnodes_1.Label();
        pandaGen.condition(node, typescript_1["default"].SyntaxKind.EqualsEqualsToken, modeType, notThrowLabel);
        pandaGen.loadAccumulator(node, this.retVal);
        pandaGen["throw"](node);
        pandaGen.freeTemps(modeType);
        // .next(value)
        pandaGen.label(node, notThrowLabel);
        pandaGen.loadAccumulator(node, this.retVal);
    };
    GeneratorFunctionBuilder.prototype.cleanUp = function (node) {
        var pandaGen = this.pandaGen;
        pandaGen.freeTemps(this.genObj, this.retVal);
    };
    return GeneratorFunctionBuilder;
}());
exports.GeneratorFunctionBuilder = GeneratorFunctionBuilder;
//# sourceMappingURL=generatorFunctionBuilder.js.map