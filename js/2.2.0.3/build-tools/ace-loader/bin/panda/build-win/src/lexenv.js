"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VirtualStoreVar = exports.VirtualLoadVar = void 0;
var bcGenUtil_1 = require("./base/bcGenUtil");
var vregisterCache_1 = require("./base/vregisterCache");
var irnodes_1 = require("./irnodes");
var variable_1 = require("./variable");
var VirtualLoadVar = /** @class */ (function (_super) {
    __extends(VirtualLoadVar, _super);
    function VirtualLoadVar(scope, level, v) {
        var _this = _super.call(this, "VirtualLoadVar") || this;
        _this.variable = v;
        _this.level = level;
        _this.scope = scope;
        return _this;
    }
    VirtualLoadVar.prototype.expand = function (pg) {
        var loadIns = this;
        if (loadIns.variable.isLexVar) {
            return this.expandLexVar(pg);
        }
        else {
            return this.expandNormalVar(pg);
        }
    };
    VirtualLoadVar.prototype.expandNormalVar = function (pg) {
        var expansion = [];
        var v = this.variable;
        var local = pg.getVregForVariable(v);
        // check TDZ first
        if (!v.isInitialized()) {
            var holeReg = pg.getTemp();
            expansion.push(bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(pg, vregisterCache_1.CacheList.HOLE)));
            expansion.push(bcGenUtil_1.storeAccumulator(holeReg));
            checkTDZ(pg, holeReg, v.getName(), expansion);
            pg.freeTemps(holeReg);
            return expansion;
        }
        expansion.push(bcGenUtil_1.loadAccumulator(local));
        return expansion;
    };
    VirtualLoadVar.prototype.expandLexVar = function (pg) {
        var expansion = [];
        // if first call in pandagen, will create lexenv into buildin register
        var curLexEnv = pg.GetCurLexEnv();
        var variable = this.variable;
        var slot = variable.idxLex;
        expansion.push(bcGenUtil_1.loadLexicalVar(curLexEnv, this.level, slot));
        // check TDZ
        if (variable.isLetOrConst()) {
            var tempReg = pg.getTemp();
            expansion.push(bcGenUtil_1.storeAccumulator(tempReg));
            checkTDZ(pg, tempReg, variable.getName(), expansion);
            expansion.push(bcGenUtil_1.loadAccumulator(tempReg));
            pg.freeTemps(tempReg);
        }
        return expansion;
    };
    return VirtualLoadVar;
}(irnodes_1.VirtualIns));
exports.VirtualLoadVar = VirtualLoadVar;
var VirtualStoreVar = /** @class */ (function (_super) {
    __extends(VirtualStoreVar, _super);
    function VirtualStoreVar(scope, level, v, isDeclaration) {
        var _this = _super.call(this, "VirtualStoreVar") || this;
        _this.variable = v;
        _this.level = level;
        _this.scope = scope;
        _this.isDeclaration = isDeclaration;
        return _this;
    }
    VirtualStoreVar.prototype.expandNormalVar = function (pg) {
        var expansion = [];
        var v = this.variable;
        var local = pg.getVregForVariable(v);
        if (!this.isDeclaration) {
            // check TDZ first
            if (!v.isInitialized()) {
                var nameReg = pg.getTemp();
                var tempReg = pg.getTemp();
                var holeReg = pg.getTemp();
                expansion.push(bcGenUtil_1.storeAccumulator(tempReg));
                expansion.push(bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(pg, vregisterCache_1.CacheList.HOLE)));
                expansion.push(bcGenUtil_1.storeAccumulator(holeReg));
                checkTDZ(pg, holeReg, v.getName(), expansion);
                expansion.push(bcGenUtil_1.loadAccumulator(tempReg));
                pg.freeTemps(nameReg, tempReg, holeReg);
            }
            // check const assignment
            checkConstAssignment(pg, v, expansion);
        }
        expansion.push(bcGenUtil_1.storeAccumulator(local));
        if (v.isExportVar() && !(v instanceof variable_1.ModuleVariable)) {
            expansion.push(bcGenUtil_1.storeModuleVariable(v.getExportedName()));
        }
        return expansion;
    };
    VirtualStoreVar.prototype.expandStoreLexVar = function (pg) {
        var expansion = [];
        var valueReg = pg.getTemp();
        var variable = this.variable;
        // first save this value 
        expansion.push(bcGenUtil_1.storeAccumulator(valueReg));
        // if first call in pandagen, will create lexenv into buildin register
        var curLexEnv = pg.GetCurLexEnv();
        var slot = variable.idxLex;
        if (variable.isLetOrConst() || variable.isClass()) {
            if (!this.isDeclaration) {
                var holeReg = pg.getTemp();
                /**
                 * check TDZ first
                 * If acc == hole -> throw reference error
                 * else -> excute the next insn
                 */
                expansion.push(bcGenUtil_1.loadLexicalVar(curLexEnv, this.level, slot));
                expansion.push(bcGenUtil_1.storeAccumulator(holeReg));
                checkTDZ(pg, holeReg, variable.getName(), expansion);
                // const assignment check need to be down after TDZ check
                checkConstAssignment(pg, variable, expansion);
                pg.freeTemps(holeReg);
            }
        }
        expansion.push(bcGenUtil_1.storeLexicalVar(curLexEnv, this.level, slot, valueReg));
        expansion.push(bcGenUtil_1.loadAccumulator(valueReg));
        if (variable.isExportVar() && !(variable instanceof variable_1.ModuleVariable)) {
            expansion.push(bcGenUtil_1.storeModuleVariable(variable.getExportedName()));
        }
        pg.freeTemps(valueReg);
        return expansion;
    };
    VirtualStoreVar.prototype.expand = function (pg) {
        var storeIns = this;
        if (storeIns.variable.isLexVar) {
            return this.expandStoreLexVar(pg);
        }
        else {
            return this.expandNormalVar(pg);
        }
    };
    return VirtualStoreVar;
}(irnodes_1.VirtualIns));
exports.VirtualStoreVar = VirtualStoreVar;
function checkTDZ(pg, holeReg, name, expansion) {
    var nameReg = pg.getTemp();
    expansion.push(bcGenUtil_1.loadAccumulatorString(name));
    expansion.push(bcGenUtil_1.storeAccumulator(nameReg));
    expansion.push(bcGenUtil_1.throwUndefinedIfHole(holeReg, nameReg));
    pg.freeTemps(nameReg);
}
function checkConstAssignment(pg, v, expansion) {
    var nameReg = pg.getTemp();
    if (v.isConst() || v.isClass()) {
        expansion.push(bcGenUtil_1.loadAccumulatorString(v.getName()));
        expansion.push(bcGenUtil_1.storeAccumulator(nameReg));
        expansion.push(bcGenUtil_1.throwConstAssignment(nameReg));
    }
    pg.freeTemps(nameReg);
}
//# sourceMappingURL=lexenv.js.map