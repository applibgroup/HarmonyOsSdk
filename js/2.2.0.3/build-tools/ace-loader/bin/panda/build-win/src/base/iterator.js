"use strict";
exports.__esModule = true;
exports.Iterator = void 0;
var Iterator = /** @class */ (function () {
    function Iterator(iterRecord, iterDone, iterValue, pandaGen, node) {
        this.iterRecord = iterRecord;
        this.iterDone = iterDone;
        this.iterValue = iterValue;
        this.pandaGen = pandaGen;
        this.node = node;
    }
    Iterator.prototype.getIterator = function () {
        var pandaGen = this.pandaGen;
        var iterator = this.iterRecord.iterator;
        // get iterator
        pandaGen.getIterator(this.node);
        pandaGen.storeAccumulator(this.node, iterator);
        // get next method
        pandaGen.loadObjProperty(this.node, iterator, "next");
        pandaGen.storeAccumulator(this.node, this.iterRecord.nextMethod);
    };
    /**
     *  iterResult = nextMethod.call(iterator);
     *  if (!isObject(iterResult)) {
     *      throw TypeError
     *  }
     * */
    Iterator.prototype.callNext = function (iterResult) {
        this.pandaGen.getIteratorNext(this.node, this.iterRecord.iterator, this.iterRecord.nextMethod);
        this.pandaGen.storeAccumulator(this.node, iterResult);
    };
    Iterator.prototype.iteratorComplete = function (iterResult) {
        this.pandaGen.loadObjProperty(this.node, iterResult, "done");
        this.pandaGen.storeAccumulator(this.node, this.iterDone);
    };
    Iterator.prototype.iteratorValue = function (iterResult) {
        this.pandaGen.loadObjProperty(this.node, iterResult, "value");
        this.pandaGen.storeAccumulator(this.node, this.iterValue);
    };
    Iterator.prototype.close = function () {
        this.pandaGen.closeIterator(this.node, this.iterRecord.iterator);
    };
    Iterator.prototype.getCurrentValue = function () {
        return this.iterValue;
    };
    Iterator.prototype.getCurrrentDone = function () {
        return this.iterDone;
    };
    return Iterator;
}());
exports.Iterator = Iterator;
//# sourceMappingURL=iterator.js.map