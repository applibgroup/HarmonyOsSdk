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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.VariableAcessStore = exports.VariableAccessLoad = void 0;
var typescript_1 = __importDefault(require("typescript"));
var bcGenUtil_1 = require("./base/bcGenUtil");
var vregisterCache_1 = require("./base/vregisterCache");
var debuginfo_1 = require("./debuginfo");
var variable_1 = require("./variable");
var jshelpers_1 = __importDefault(require("./jshelpers"));
var VariableAccessBase = /** @class */ (function () {
    function VariableAccessBase(scope, level, variable) {
        this.variable = variable;
        this.scope = scope;
        this.level = level;
    }
    VariableAccessBase.prototype.isLexVar = function () {
        return this.variable.isLexVar;
    };
    VariableAccessBase.prototype.getEnvSlotOfVar = function () {
        if (this.isLexVar()) {
            return this.variable.idxLex;
        }
        return undefined;
    };
    return VariableAccessBase;
}());
var VariableAccessLoad = /** @class */ (function (_super) {
    __extends(VariableAccessLoad, _super);
    function VariableAccessLoad(scope, level, variable) {
        return _super.call(this, scope, level, variable) || this;
    }
    VariableAccessLoad.prototype.expand = function (pandaGen) {
        if (this.isLexVar()) {
            return this.loadLexEnvVar(pandaGen);
        }
        else {
            return this.loadLocalVar(pandaGen);
        }
    };
    VariableAccessLoad.prototype.loadLocalVar = function (pandaGen) {
        var insns = new Array();
        var v = this.variable;
        var bindVreg = pandaGen.getVregForVariable(v);
        // check TDZ first
        if (!v.isInitialized()) {
            var holeReg = pandaGen.getTemp();
            insns.push(bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.HOLE)));
            insns.push(bcGenUtil_1.storeAccumulator(holeReg));
            checkTDZ(pandaGen, holeReg, v.getName(), insns);
            pandaGen.freeTemps(holeReg);
            return insns;
        }
        insns.push(bcGenUtil_1.loadAccumulator(bindVreg));
        return insns;
    };
    VariableAccessLoad.prototype.loadLexEnvVar = function (pandaGen) {
        var insns = new Array();
        var v = this.variable;
        var slot = v.idxLex;
        insns.push(bcGenUtil_1.loadLexicalVar(this.level, slot));
        // check TDZ
        if (v.isLetOrConst()) {
            var tempReg = pandaGen.getTemp();
            insns.push(bcGenUtil_1.storeAccumulator(tempReg));
            checkTDZ(pandaGen, tempReg, v.getName(), insns);
            insns.push(bcGenUtil_1.loadAccumulator(tempReg));
            pandaGen.freeTemps(tempReg);
        }
        return insns;
    };
    return VariableAccessLoad;
}(VariableAccessBase));
exports.VariableAccessLoad = VariableAccessLoad;
var VariableAcessStore = /** @class */ (function (_super) {
    __extends(VariableAcessStore, _super);
    function VariableAcessStore(scope, level, variable, isDeclaration, node) {
        var _this = _super.call(this, scope, level, variable) || this;
        _this.isDeclaration = isDeclaration;
        _this.node = node;
        return _this;
    }
    VariableAcessStore.prototype.expand = function (pandaGen) {
        if (this.isLexVar()) {
            return this.storeLexEnvVar(pandaGen);
        }
        else {
            return this.storeLocalVar(pandaGen);
        }
    };
    VariableAcessStore.prototype.storeLocalVar = function (pandaGen) {
        var insns = new Array();
        var v = this.variable;
        var bindVreg = pandaGen.getVregForVariable(v);
        if (!this.isDeclaration) {
            // check TDZ first
            if (!v.isInitialized()) {
                var nameReg = pandaGen.getTemp();
                var tempReg = pandaGen.getTemp();
                var holeReg = pandaGen.getTemp();
                insns.push(bcGenUtil_1.storeAccumulator(tempReg));
                insns.push(bcGenUtil_1.loadAccumulator(vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.HOLE)));
                insns.push(bcGenUtil_1.storeAccumulator(holeReg));
                checkTDZ(pandaGen, holeReg, v.getName(), insns);
                insns.push(bcGenUtil_1.loadAccumulator(tempReg));
                pandaGen.freeTemps(nameReg, tempReg, holeReg);
            }
            // check const assignment
            checkConstAssignment(pandaGen, v, insns, this.node);
        }
        insns.push(bcGenUtil_1.storeAccumulator(bindVreg));
        if (v.isExportVar() && !(v instanceof variable_1.ModuleVariable)) {
            insns.push(bcGenUtil_1.storeModuleVariable(v.getExportedName()));
        }
        return insns;
    };
    VariableAcessStore.prototype.storeLexEnvVar = function (pandaGen) {
        var insns = new Array();
        var v = this.variable;
        // save the value first
        var valueReg = pandaGen.getTemp();
        insns.push(bcGenUtil_1.storeAccumulator(valueReg));
        var slot = v.idxLex;
        if (v.isLetOrConst() || v.isClass()) {
            if (!this.isDeclaration) {
                var holeReg = pandaGen.getTemp();
                /**
                 * check TDZ first
                 * If acc == hole -> throw reference error
                 * else -> excute the next insn
                */
                insns.push(bcGenUtil_1.loadLexicalVar(this.level, slot));
                insns.push(bcGenUtil_1.storeAccumulator(holeReg));
                checkTDZ(pandaGen, holeReg, v.getName(), insns);
                // const assignment check need to be down after TDZ check
                checkConstAssignment(pandaGen, v, insns, this.node);
                pandaGen.freeTemps(holeReg);
            }
        }
        insns.push(bcGenUtil_1.storeLexicalVar(this.level, slot, valueReg));
        insns.push(bcGenUtil_1.loadAccumulator(valueReg));
        if (v.isExportVar() && !(v instanceof variable_1.ModuleVariable)) {
            insns.push(bcGenUtil_1.storeModuleVariable(v.getExportedName()));
        }
        pandaGen.freeTemps(valueReg);
        return insns;
    };
    return VariableAcessStore;
}(VariableAccessBase));
exports.VariableAcessStore = VariableAcessStore;
function checkTDZ(pg, holeReg, name, expansion) {
    var nameReg = pg.getTemp();
    expansion.push(bcGenUtil_1.loadAccumulatorString(name));
    expansion.push(bcGenUtil_1.storeAccumulator(nameReg));
    expansion.push(bcGenUtil_1.throwUndefinedIfHole(holeReg, nameReg));
    pg.freeTemps(nameReg);
}
function checkConstAssignment(pg, v, expansion, node) {
    var nameReg = pg.getTemp();
    if (v.isConst()) {
        expansion.push(bcGenUtil_1.loadAccumulatorString(v.getName()));
        expansion.push(bcGenUtil_1.storeAccumulator(nameReg));
        expansion.push(bcGenUtil_1.throwConstAssignment(nameReg));
    }
    if (v.isClass() && node != debuginfo_1.NodeKind.FirstNodeOfFunction &&
        node != debuginfo_1.NodeKind.Invalid && node != debuginfo_1.NodeKind.Normal) {
        var className = v.getName();
        while (node) {
            if (typescript_1["default"].isClassLike(node) && node.name &&
                jshelpers_1["default"].getTextOfIdentifierOrLiteral(node.name) == className) {
                break;
            }
            node = node.parent;
        }
        // class name binding inside class is immutable
        if (node) {
            expansion.push(bcGenUtil_1.loadAccumulatorString(className));
            expansion.push(bcGenUtil_1.storeAccumulator(nameReg));
            expansion.push(bcGenUtil_1.throwConstAssignment(nameReg));
        }
    }
    pg.freeTemps(nameReg);
}
//# sourceMappingURL=lexenv.js.map