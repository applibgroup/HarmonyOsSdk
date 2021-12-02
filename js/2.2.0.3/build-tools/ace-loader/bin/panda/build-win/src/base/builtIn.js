"use strict";
exports.__esModule = true;
exports.expandFalse = exports.expandTrue = exports.expandFunction = exports.expandObject = exports.expandNull = exports.expandRegExp = exports.expandSymbol = exports.expandBigInt = exports.expandString = exports.expandNumber = exports.expandBoolean = exports.expandUndefined = exports.expandGlobal = exports.expandInfinity = exports.expandNaN = exports.expandHole = void 0;
var irnodes_1 = require("../irnodes");
var vregisterCache_1 = require("./vregisterCache");
function expandHole(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.HOLE);
    return [
        new irnodes_1.LdHole(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandHole = expandHole;
function expandNaN(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.NaN);
    return [
        new irnodes_1.LdNaN(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandNaN = expandNaN;
function expandInfinity(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Infinity);
    return [
        new irnodes_1.LdInfinity(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandInfinity = expandInfinity;
function expandGlobal(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Global);
    return [
        new irnodes_1.LdGlobal(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandGlobal = expandGlobal;
function expandUndefined(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined);
    return [
        new irnodes_1.LdUndefined(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandUndefined = expandUndefined;
function expandBoolean(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Boolean);
    return [
        new irnodes_1.LdBoolean(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandBoolean = expandBoolean;
function expandNumber(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Number);
    return [
        new irnodes_1.LdNumber(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandNumber = expandNumber;
function expandString(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.String);
    return [
        new irnodes_1.LdString(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandString = expandString;
function expandBigInt(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.BigInt);
    return [
        new irnodes_1.LdBigInt(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandBigInt = expandBigInt;
function expandSymbol(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Symbol);
    return [
        new irnodes_1.LdSymbol(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandSymbol = expandSymbol;
function expandRegExp(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.RegExp);
    return [
        new irnodes_1.LdRegExp(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandRegExp = expandRegExp;
function expandNull(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Null);
    return [
        new irnodes_1.LdNull(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandNull = expandNull;
function expandObject(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Object);
    return [
        new irnodes_1.LdObject(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandObject = expandObject;
function expandFunction(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Function);
    return [
        new irnodes_1.LdFunction(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandFunction = expandFunction;
function expandTrue(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True);
    return [
        new irnodes_1.LdTrue(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandTrue = expandTrue;
function expandFalse(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False);
    return [
        new irnodes_1.LdFalse(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandFalse = expandFalse;
//# sourceMappingURL=builtIn.js.map