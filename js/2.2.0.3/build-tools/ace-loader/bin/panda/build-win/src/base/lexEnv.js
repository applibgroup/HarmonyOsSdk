"use strict";
exports.__esModule = true;
exports.expandLexEnv = void 0;
var irnodes_1 = require("../irnodes");
var bcGenUtil_1 = require("./bcGenUtil");
var vregisterCache_1 = require("./vregisterCache");
function createLexEnv(pandaGen, scope) {
    var lexEnvVars = scope.getNumLexEnv();
    var insns = [];
    // because insert at the begin, so can use get temp direct
    var tmpNumVars = pandaGen.getTemp();
    insns.push(bcGenUtil_1.loadAccumulatorInt(lexEnvVars), bcGenUtil_1.storeAccumulator(tmpNumVars));
    var funcObj = scope.getName2variable().get('4funcObj').getVreg();
    insns.push(new irnodes_1.NewLexEnv(tmpNumVars, funcObj), bcGenUtil_1.storeAccumulator(vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.LexEnv)));
    pandaGen.freeTemps(tmpNumVars);
    return insns;
}
function loadLexEnv(pandaGen, funcObj) {
    var insns = [];
    insns.push(bcGenUtil_1.loadLexicalEnv(funcObj), bcGenUtil_1.storeAccumulator(vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.LexEnv)));
    return insns;
}
function expandLexEnv(pandaGen) {
    var scope = pandaGen.getScope().getNearestVariableScope();
    var insns;
    if (!scope) {
        throw new Error("pandagen must have one variable scope");
    }
    if (scope.hasLexEnv()) {
        insns = createLexEnv(pandaGen, scope);
    }
    else {
        insns = loadLexEnv(pandaGen, pandaGen.getLocals()[0]);
    }
    return insns;
}
exports.expandLexEnv = expandLexEnv;
//# sourceMappingURL=lexEnv.js.map