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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CacheExpander = void 0;
var vregisterCache_1 = require("../base/vregisterCache");
var CacheExpander = /** @class */ (function () {
    function CacheExpander() {
    }
    CacheExpander.prototype.run = function (pandaGen) {
        var insns = pandaGen.getInsns();
        var cache = pandaGen.getVregisterCache();
        for (var i = vregisterCache_1.CacheList.MIN; i < vregisterCache_1.CacheList.MAX; i++) {
            var item = cache.getCache(i);
            if (item.isNeeded()) {
                var expander = item.getExpander();
                var expansion = expander(pandaGen);
                insns.splice.apply(insns, __spreadArrays([0, 0], expansion));
            }
        }
    };
    return CacheExpander;
}());
exports.CacheExpander = CacheExpander;
//# sourceMappingURL=cacheExpander.js.map