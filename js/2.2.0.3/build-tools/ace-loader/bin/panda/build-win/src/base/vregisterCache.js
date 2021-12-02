"use strict";
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
    CacheList[CacheList["Boolean"] = 4] = "Boolean";
    CacheList[CacheList["Number"] = 5] = "Number";
    CacheList[CacheList["String"] = 6] = "String";
    CacheList[CacheList["BigInt"] = 7] = "BigInt";
    CacheList[CacheList["Symbol"] = 8] = "Symbol";
    CacheList[CacheList["RegExp"] = 9] = "RegExp";
    CacheList[CacheList["Null"] = 10] = "Null";
    CacheList[CacheList["Object"] = 11] = "Object";
    CacheList[CacheList["Function"] = 12] = "Function";
    CacheList[CacheList["Global"] = 13] = "Global";
    CacheList[CacheList["LexEnv"] = 14] = "LexEnv";
    CacheList[CacheList["True"] = 15] = "True";
    CacheList[CacheList["False"] = 16] = "False";
    CacheList[CacheList["MAX"] = 17] = "MAX";
})(CacheList = exports.CacheList || (exports.CacheList = {}));
var cacheExpandHandlers = new Map([
    [CacheList.HOLE, builtIn_1.expandHole],
    [CacheList.NaN, builtIn_1.expandNaN],
    [CacheList.Infinity, builtIn_1.expandInfinity],
    [CacheList.undefined, builtIn_1.expandUndefined],
    [CacheList.Boolean, builtIn_1.expandBoolean],
    [CacheList.Number, builtIn_1.expandNumber],
    [CacheList.String, builtIn_1.expandString],
    [CacheList.BigInt, builtIn_1.expandBigInt],
    [CacheList.Symbol, builtIn_1.expandSymbol],
    [CacheList.RegExp, builtIn_1.expandRegExp],
    [CacheList.Null, builtIn_1.expandNull],
    [CacheList.Object, builtIn_1.expandObject],
    [CacheList.Function, builtIn_1.expandFunction],
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