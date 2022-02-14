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
exports.expandFalse = exports.expandTrue = exports.expandNull = exports.expandSymbol = exports.expandUndefined = exports.expandGlobal = exports.expandInfinity = exports.expandNaN = exports.expandHole = void 0;
var irnodes_1 = require("../irnodes");
var vregisterCache_1 = require("./vregisterCache");
function expandHole(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.HOLE);
    return [
        new irnodes_1.EcmaLdhole(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandHole = expandHole;
function expandNaN(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.NaN);
    return [
        new irnodes_1.EcmaLdnan(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandNaN = expandNaN;
function expandInfinity(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Infinity);
    return [
        new irnodes_1.EcmaLdinfinity(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandInfinity = expandInfinity;
function expandGlobal(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Global);
    return [
        new irnodes_1.EcmaLdglobal(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandGlobal = expandGlobal;
function expandUndefined(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined);
    return [
        new irnodes_1.EcmaLdundefined(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandUndefined = expandUndefined;
function expandSymbol(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Symbol);
    return [
        new irnodes_1.EcmaLdsymbol(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandSymbol = expandSymbol;
function expandNull(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Null);
    return [
        new irnodes_1.EcmaLdnull(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandNull = expandNull;
function expandTrue(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True);
    return [
        new irnodes_1.EcmaLdtrue(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandTrue = expandTrue;
function expandFalse(pandaGen) {
    var vreg = vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.False);
    return [
        new irnodes_1.EcmaLdfalse(),
        new irnodes_1.StaDyn(vreg)
    ];
}
exports.expandFalse = expandFalse;
//# sourceMappingURL=builtIn.js.map