"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AsyncFunctionBuilder = void 0;
var typescript_1 = __importDefault(require("typescript"));
var vregisterCache_1 = require("../base/vregisterCache");
var debuginfo_1 = require("../debuginfo");
var irnodes_1 = require("../irnodes");
var tryStatement_1 = require("../statement/tryStatement");
var ResumeMode;
(function (ResumeMode) {
    ResumeMode[ResumeMode["Return"] = 0] = "Return";
    ResumeMode[ResumeMode["Throw"] = 1] = "Throw";
    ResumeMode[ResumeMode["Next"] = 2] = "Next";
})(ResumeMode || (ResumeMode = {}));
;
/**
 * async function foo() {
 *     await 'promise obj';
 * }
*/
var AsyncFunctionBuilder = /** @class */ (function () {
    function AsyncFunctionBuilder(pandaGen) {
        this.pandaGen = pandaGen;
        this.beginLabel = new irnodes_1.Label();
        this.endLabel = new irnodes_1.Label();
        this.asyncObj = pandaGen.getTemp();
        this.retVal = pandaGen.getTemp();
    }
    AsyncFunctionBuilder.prototype.prepare = function (node) {
        var pandaGen = this.pandaGen;
        pandaGen.asyncFunctionEnter(node);
        pandaGen.storeAccumulator(node, this.asyncObj);
        pandaGen.label(node, this.beginLabel);
    };
    AsyncFunctionBuilder.prototype.await = function (node, value) {
        var pandaGen = this.pandaGen;
        var promise = this.pandaGen.getTemp();
        pandaGen.asyncFunctionAwaitUncaught(node, this.asyncObj, value);
        pandaGen.storeAccumulator(node, promise);
        pandaGen.suspendGenerator(node, this.asyncObj, promise);
        pandaGen.freeTemps(promise);
        pandaGen.resumeGenerator(node, this.asyncObj);
        pandaGen.storeAccumulator(node, this.retVal);
        this.handleMode(node);
    };
    AsyncFunctionBuilder.prototype.handleMode = function (node) {
        var pandaGen = this.pandaGen;
        var modeType = pandaGen.getTemp();
        pandaGen.getResumeMode(node, this.asyncObj);
        pandaGen.storeAccumulator(node, modeType);
        // .reject
        pandaGen.loadAccumulatorInt(node, ResumeMode.Throw);
        var notThrowLabel = new irnodes_1.Label();
        // Jump to normal code
        pandaGen.condition(node, typescript_1["default"].SyntaxKind.EqualsEqualsToken, modeType, notThrowLabel);
        pandaGen.loadAccumulator(node, this.retVal);
        pandaGen["throw"](node);
        pandaGen.freeTemps(modeType);
        // .resolve
        pandaGen.label(node, notThrowLabel);
        pandaGen.loadAccumulator(node, this.retVal);
    };
    AsyncFunctionBuilder.prototype.resolve = function (node, value) {
        var pandaGen = this.pandaGen;
        pandaGen.asyncFunctionResolve(node, this.asyncObj, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True), value);
    };
    AsyncFunctionBuilder.prototype.cleanUp = function (node) {
        var pandaGen = this.pandaGen;
        pandaGen.label(node, this.endLabel);
        //catch
        var exception = pandaGen.getTemp();
        pandaGen.storeAccumulator(debuginfo_1.NodeKind.Invalid, exception);
        pandaGen.asyncFunctionReject(debuginfo_1.NodeKind.Invalid, this.asyncObj, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True), exception);
        pandaGen["return"](debuginfo_1.NodeKind.Invalid);
        pandaGen.freeTemps(exception);
        pandaGen.freeTemps(this.asyncObj, this.retVal);
        new tryStatement_1.CatchTable(pandaGen, this.endLabel, new tryStatement_1.LabelPair(this.beginLabel, this.endLabel));
    };
    return AsyncFunctionBuilder;
}());
exports.AsyncFunctionBuilder = AsyncFunctionBuilder;
//# sourceMappingURL=asyncFunctionBuilder.js.map