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
exports.RegAlloc = void 0;
var vregisterCache_1 = require("./base/vregisterCache");
var debuginfo_1 = require("./debuginfo");
var irnodes_1 = require("./irnodes");
var util_1 = require("./base/util");
var MAX_VREGA = 16;
var MAX_VREGB = 256;
var MAX_VREGC = 65536;
var VRegWithFlag = /** @class */ (function () {
    function VRegWithFlag(vreg) {
        this.flag = false;
        this.vreg = vreg;
    }
    return VRegWithFlag;
}());
var RegAllocator = /** @class */ (function () {
    function RegAllocator() {
        this.spills = [];
        this.vRegsId = 0;
        this.usedVreg = [];
        this.tmpVreg = [];
        this.vRegsId = 0;
    }
    RegAllocator.prototype.allocIndexForVreg = function (vreg) {
        var num = this.getFreeVreg();
        vreg.num = num;
        this.usedVreg[num] = new VRegWithFlag(vreg);
    };
    RegAllocator.prototype.findTmpVreg = function (level) {
        var iterCnts = Math.min(MAX_VREGB, this.usedVreg.length);
        for (var i = 0; i < iterCnts; ++i) {
            var value = this.usedVreg[i];
            if (value === undefined || value.flag) {
                continue;
            }
            if (level === MAX_VREGA && value.vreg.num >= MAX_VREGA) {
                throw new Error("no available tmp vReg from A");
            }
            value.flag = true;
            this.tmpVreg.push(value);
            return value.vreg;
        }
        throw new Error("no available tmp vReg from B");
    };
    RegAllocator.prototype.clearVregFlags = function () {
        for (var _i = 0, _a = this.tmpVreg; _i < _a.length; _i++) {
            var v = _a[_i];
            v.flag = false;
        }
        this.tmpVreg = [];
    };
    RegAllocator.prototype.allocSpill = function () {
        if (this.spills.length > 0) {
            return this.spills.pop();
        }
        var v = new irnodes_1.VReg();
        this.allocIndexForVreg(v);
        return v;
    };
    RegAllocator.prototype.freeSpill = function (v) {
        this.spills.push(v);
    };
    RegAllocator.prototype.getFreeVreg = function () {
        if (this.vRegsId >= MAX_VREGC) {
            throw new Error("vreg has been running out");
        }
        return this.vRegsId++;
    };
    /* check whether the operands is valid for the format,
       return 0 if it is valid, otherwise return the total
       number of vreg which does not meet the requirement
    */
    RegAllocator.prototype.getNumOfInvalidVregs = function (operands, format) {
        var num = 0;
        for (var j = 0; j < operands.length; ++j) {
            if (operands[j] instanceof irnodes_1.VReg) {
                if (operands[j].num >= (1 << format[j].bitwidth)) {
                    num++;
                }
            }
        }
        return num;
    };
    RegAllocator.prototype.markVregNotAvailableAsTmp = function (vreg) {
        var num = vreg.num;
        this.usedVreg[num].flag = true;
        this.tmpVreg.push(this.usedVreg[num]);
    };
    RegAllocator.prototype.doRealAdjustment = function (operands, format, index, irNodes) {
        var head = [];
        var tail = [];
        var spills = [];
        // mark all vreg used in the current insn as not valid for tmp register
        for (var i = 0; i < operands.length; ++i) {
            if (operands[i] instanceof irnodes_1.VReg) {
                this.markVregNotAvailableAsTmp(operands[i]);
            }
        }
        for (var j = 0; j < operands.length; ++j) {
            if (operands[j] instanceof irnodes_1.VReg) {
                var vOrigin = operands[j];
                if (vOrigin.num >= (1 << format[j].bitwidth)) {
                    var spill = this.allocSpill();
                    spills.push(spill);
                    var vTmp = void 0;
                    try {
                        vTmp = this.findTmpVreg(1 << format[j].bitwidth);
                    }
                    catch (_a) {
                        throw Error("no available tmp vReg");
                    }
                    head.push(new irnodes_1.MovDyn(spill, vTmp));
                    operands[j] = vTmp;
                    if (format[j].kind == irnodes_1.OperandKind.SrcVReg) {
                        head.push(new irnodes_1.MovDyn(vTmp, vOrigin));
                    }
                    else if (format[j].kind == irnodes_1.OperandKind.DstVReg) {
                        tail.push(new irnodes_1.MovDyn(vOrigin, vTmp));
                    }
                    else if (format[j].kind == irnodes_1.OperandKind.SrcDstVReg) {
                        head.push(new irnodes_1.MovDyn(vTmp, vOrigin));
                        tail.push(new irnodes_1.MovDyn(vOrigin, vTmp));
                    }
                    else {
                        // here we do nothing
                    }
                    tail.push(new irnodes_1.MovDyn(vTmp, spill));
                }
            }
        }
        // for debuginfo
        debuginfo_1.DebugInfo.copyDebugInfo(irNodes[index], head);
        debuginfo_1.DebugInfo.copyDebugInfo(irNodes[index], tail);
        irNodes.splice.apply(irNodes, __spreadArrays([index, 0], head));
        irNodes.splice.apply(irNodes, __spreadArrays([index + head.length + 1, 0], tail));
        for (var j = spills.length - 1; j >= 0; --j) {
            this.freeSpill(spills[j]);
        }
        this.clearVregFlags();
        return (head.length + tail.length);
    };
    RegAllocator.prototype.checkDynRangeInstruction = function (irNodes, index) {
        var operands = irNodes[index].operands;
        var rangeRegOffset = util_1.getRangeStartVregPos(irNodes[index]);
        var level = 1 << irNodes[index].formats[0][rangeRegOffset].bitwidth;
        /*
          1. "CalliDynRange 4, v255" is a valid insn, there is no need for all 4 registers numbers to be less than 255,
          it is also similar for NewobjDyn
          2. we do not need to mark any register to be invalid for tmp register, since no other register is used in calli.dyn.range
          3. if v.num is bigger than 255, it means all register less than 255 has been already used, they should have been pushed
          into usedVreg
        */
        if (operands[1].num >= level) {
            // needs to be adjusted.
            return false;
        }
        /* the first operand is an imm */
        var startNum = operands[rangeRegOffset].num;
        var i = rangeRegOffset + 1;
        var implicitRegNums = (irNodes[index]).operands.length - i;
        for (; i < (irNodes[index]).operands.length; ++i) {
            if ((startNum + 1) != operands[i].num) {
                throw Error("Warning: VReg sequence of DynRange is not continuous. Please adjust it now.");
            }
            startNum++;
        }
        /* If the parameters are consecutive, no adjustment is required. */
        if (i == (irNodes[index]).operands.length) {
            return true;
        }
        // needs to be adjusted.
        return false;
    };
    RegAllocator.prototype.adjustDynRangeInstruction = function (irNodes, index) {
        var head = [];
        var tail = [];
        var spills = [];
        var operands = irNodes[index].operands;
        /* exclude operands that are not require consecutive */
        var rangeRegOffset = util_1.getRangeStartVregPos(irNodes[index]);
        var regNums = operands.length - util_1.getRangeStartVregPos(irNodes[index]);
        var level = 1 << irNodes[index].formats[0][rangeRegOffset].bitwidth;
        var tmp = this.findTmpVreg(level);
        for (var i = 0; i < regNums; i++) {
            var spill = this.allocSpill();
            spills.push(spill);
            /* We need to make sure that the register input in the .range instruction is continuous(small to big). */
            head.push(new irnodes_1.MovDyn(spill, this.usedVreg[tmp.num + i].vreg));
            head.push(new irnodes_1.MovDyn(this.usedVreg[tmp.num + i].vreg, operands[i + rangeRegOffset]));
            operands[i + rangeRegOffset] = this.usedVreg[tmp.num + i].vreg;
            tail.push(new irnodes_1.MovDyn(this.usedVreg[tmp.num + i].vreg, spill));
        }
        // for debuginfo
        debuginfo_1.DebugInfo.copyDebugInfo(irNodes[index], head);
        debuginfo_1.DebugInfo.copyDebugInfo(irNodes[index], tail);
        irNodes.splice.apply(irNodes, __spreadArrays([index, 0], head));
        irNodes.splice.apply(irNodes, __spreadArrays([index + head.length + 1, 0], tail));
        for (var i = spills.length - 1; i >= 0; --i) {
            this.freeSpill(spills[i]);
        }
        this.clearVregFlags();
        return (head.length + tail.length);
    };
    RegAllocator.prototype.adjustInstructionsIfNeeded = function (irNodes) {
        for (var i = 0; i < irNodes.length; ++i) {
            var operands = irNodes[i].operands;
            var formats = irNodes[i].formats;
            if (util_1.isRangeInst(irNodes[i])) {
                if (this.checkDynRangeInstruction(irNodes, i)) {
                    continue;
                }
                i += this.adjustDynRangeInstruction(irNodes, i);
                continue;
            }
            var min = operands.length;
            var minFormat = formats[0];
            for (var j = 0; j < formats.length; ++j) {
                var num = this.getNumOfInvalidVregs(operands, formats[j]);
                if (num < min) {
                    minFormat = formats[j];
                    min = num;
                }
            }
            if (min > 0) {
                i += this.doRealAdjustment(operands, minFormat, i, irNodes);
            }
        }
    };
    RegAllocator.prototype.getTotalRegsNum = function () {
        return this.vRegsId;
    };
    RegAllocator.prototype.run = function (pandaGen) {
        var irNodes = pandaGen.getInsns();
        var locals = pandaGen.getLocals();
        var temps = pandaGen.getTemps();
        var cache = pandaGen.getVregisterCache();
        var parametersCount = pandaGen.getParametersCount();
        // don't mess up allocation order
        for (var i = 0; i < locals.length; ++i) {
            this.allocIndexForVreg(locals[i]);
        }
        for (var i = 0; i < temps.length; ++i) {
            this.allocIndexForVreg(temps[i]);
        }
        for (var i = vregisterCache_1.CacheList.MIN; i < vregisterCache_1.CacheList.MAX; ++i) {
            var cacheItem = cache.getCache(i);
            if (cacheItem.isNeeded()) {
                this.allocIndexForVreg(cacheItem.getCache());
            }
        }
        this.adjustInstructionsIfNeeded(irNodes);
        for (var i = 0; i < parametersCount; ++i) {
            var v = new irnodes_1.VReg();
            this.allocIndexForVreg(v);
            irNodes.splice(0, 0, new irnodes_1.MovDyn(locals[i], v));
        }
    };
    return RegAllocator;
}());
var RegAlloc = /** @class */ (function () {
    function RegAlloc() {
    }
    RegAlloc.prototype.run = function (pandaGen) {
        var regalloc = new RegAllocator();
        regalloc.run(pandaGen);
        pandaGen.setTotalRegsNum(regalloc.getTotalRegsNum());
    };
    return RegAlloc;
}());
exports.RegAlloc = RegAlloc;
//# sourceMappingURL=regAllocator.js.map