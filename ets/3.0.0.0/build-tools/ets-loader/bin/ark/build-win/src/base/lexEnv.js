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
exports.expandLexEnv = void 0;
var bcGenUtil_1 = require("./bcGenUtil");
var vregisterCache_1 = require("./vregisterCache");
function createLexEnv(pandaGen, scope) {
    var lexEnvVars = scope.getNumLexEnv();
    var insns = [];
    insns.push(bcGenUtil_1.newLexicalEnv(lexEnvVars), bcGenUtil_1.storeAccumulator(vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.LexEnv)));
    return insns;
}
function loadLexEnv(pandaGen) {
    var insns = [];
    insns.push(bcGenUtil_1.loadLexicalEnv(), bcGenUtil_1.storeAccumulator(vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.LexEnv)));
    return insns;
}
function expandLexEnv(pandaGen) {
    var scope = pandaGen.getScope().getNearestVariableScope();
    var insns;
    if (!scope) {
        throw new Error("pandagen must have one variable scope");
    }
    if (scope.need2CreateLexEnv()) {
        insns = createLexEnv(pandaGen, scope);
    }
    else {
        insns = loadLexEnv(pandaGen);
    }
    return insns;
}
exports.expandLexEnv = expandLexEnv;
//# sourceMappingURL=lexEnv.js.map