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
exports.getVregisterCache = exports.VregisterCache = exports.CacheList = void 0;
var irnodes_1 = require("../irnodes");
var builtIn_1 = require("./builtIn");
var lexEnv_1 = require("./lexEnv");
var CacheList;
(function (CacheList) {
    CacheList[CacheList["MIN"] = 0] = "MIN";
    CacheList[CacheList["NaN"] = 0] = "NaN";
    CacheList[CacheList["HOLE"] = 1] = "HOLE";
    CacheList[CacheList["Infinity"] = 2] = "Infinity";
    CacheList[CacheList["undefined"] = 3] = "undefined";
    // Boolean,
    // Number,
    // String,
    // BigInt,
    CacheList[CacheList["Symbol"] = 4] = "Symbol";
    // RegExp,
    CacheList[CacheList["Null"] = 5] = "Null";
    // Object,
    // Function,
    CacheList[CacheList["Global"] = 6] = "Global";
    CacheList[CacheList["LexEnv"] = 7] = "LexEnv";
    CacheList[CacheList["True"] = 8] = "True";
    CacheList[CacheList["False"] = 9] = "False";
    CacheList[CacheList["MAX"] = 10] = "MAX";
})(CacheList = exports.CacheList || (exports.CacheList = {}));
var cacheExpandHandlers = new Map([
    [CacheList.HOLE, builtIn_1.expandHole],
    [CacheList.NaN, builtIn_1.expandNaN],
    [CacheList.Infinity, builtIn_1.expandInfinity],
    [CacheList.undefined, builtIn_1.expandUndefined],
    // [CacheList.Boolean, expandBoolean],
    // [CacheList.Number, expandNumber],
    // [CacheList.String, expandString],
    // [CacheList.BigInt, expandBigInt],
    [CacheList.Symbol, builtIn_1.expandSymbol],
    // [CacheList.RegExp, expandRegExp],
    [CacheList.Null, builtIn_1.expandNull],
    // [CacheList.Object, expandObject],
    // [CacheList.Function, expandFunction],
    [CacheList.Global, builtIn_1.expandGlobal],
    [CacheList.LexEnv, lexEnv_1.expandLexEnv],
    [CacheList.True, builtIn_1.expandTrue],
    [CacheList.False, builtIn_1.expandFalse],
]);
var CacheItem = /** @class */ (function () {
    function CacheItem(handler) {
        this.flag = false;
        this.vreg = undefined;
        this.expander = handler;
    }
    CacheItem.prototype.isNeeded = function () {
        return this.flag;
    };
    CacheItem.prototype.getCache = function () {
        if (!this.flag || !this.vreg) {
            this.flag = true;
            this.vreg = new irnodes_1.VReg();
        }
        return this.vreg;
    };
    CacheItem.prototype.getExpander = function () {
        return this.expander;
    };
    return CacheItem;
}());
var VregisterCache = /** @class */ (function () {
    function VregisterCache() {
        this.cache = [];
        for (var i = CacheList.MIN; i < CacheList.MAX; ++i) {
            var handler = cacheExpandHandlers.get(i);
            if (!handler) {
                throw new Error("invalid expand handler");
            }
            this.cache[i] = new CacheItem(handler);
        }
    }
    VregisterCache.prototype.getCache = function (index) {
        if (index < CacheList.MIN || index > CacheList.MAX) {
            throw new Error("invalid builtin index");
        }
        return this.cache[index];
    };
    return VregisterCache;
}());
exports.VregisterCache = VregisterCache;
function getVregisterCache(pandaGen, index) {
    var cache = pandaGen.getVregisterCache();
    var cacheItem = cache.getCache(index);
    return cacheItem.getCache();
}
exports.getVregisterCache = getVregisterCache;
//# sourceMappingURL=vregisterCache.js.map