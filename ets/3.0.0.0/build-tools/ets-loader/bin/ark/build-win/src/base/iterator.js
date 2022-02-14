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
        // get the next method
        pandaGen.loadObjProperty(this.node, iterator, "next");
        pandaGen.storeAccumulator(this.node, this.iterRecord.nextMethod);
    };
    /**
     *  iterResult = nextMethod.call(iterator);
     *  if (!isObject(iterResult)) {
     *      throw TypeError
     *  }
     */
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