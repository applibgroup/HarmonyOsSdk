"use strict";
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
var maxVregA = 16;
var maxVregB = 256;
var maxVregC = 65536;
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
        for (var i = 0; i < maxVregB; ++i) {
            var value = this.usedVreg[i];
            if (value === undefined || value.flag) {
                continue;
            }
            if (level === maxVregA && value.vreg.num >= maxVregA) {
                throw "no available tmp vReg from A";
            }
            value.flag = true;
            this.tmpVreg.push(value);
            return value.vreg;
        }
        throw "no available tmp vReg from B";
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
        if (this.vRegsId >= maxVregC) {
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
        var level = 1 << irNodes[index].formats[0][2].bitwidth;
        /*
          1. "CalliDynRange 4, v255" is a valid insn, there is no need for all 4 registers numbers to be less than 255,
          it is also similiar for NewobjDyn
          2. we do not need to mark any register to be invalid for tmp register, since no other register is used in calli.dyn.range
          3. if v.num is bigger than 255, it means all register less than 255 has been already used, they should have been pushed
          into usedVreg
        */
        if (operands[2].num >= level) {
            // needs to be adjusted.
            return false;
        }
        /* the first two operands are the imm */
        var startNum = operands[2].num;
        var i = 3;
        var implicitRegNums = (irNodes[index]).operands.length - 3;
        var tempNums = implicitRegNums;
        while (tempNums > 0) {
            if ((++startNum) != operands[i++].num) {
                throw Error("Warning: VReg sequence of DynRange is not continuous. Please adjust it now.");
            }
            tempNums--;
        }
        /* If the parameters are consecutive, no adjustment is required. */
        if (i == (implicitRegNums + 3)) {
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
        /* the first two operands are the imm */
        var regNums = operands.length - 2;
        var level = 1 << irNodes[index].formats[0][2].bitwidth;
        var tmp = this.findTmpVreg(level);
        for (var i = 0; i < regNums; i++) {
            var spill = this.allocSpill();
            spills.push(spill);
            /* We need to make sure that the register input in the .range instruction is continuous(small to big). */
            head.push(new irnodes_1.MovDyn(spill, this.usedVreg[tmp.num + i].vreg));
            head.push(new irnodes_1.MovDyn(this.usedVreg[tmp.num + i].vreg, operands[i + 2]));
            operands[i + 2] = this.usedVreg[tmp.num + i].vreg;
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
    RegAllocator.prototype.isRangeIns = function (ins) {
        if (ins instanceof irnodes_1.BuiltinR2i) {
            if ((ins.operands[0].value == 1) || (ins.operands[0].value == 3) || (ins.operands[0].value == 4)) {
                return true;
            }
        }
        return false;
    };
    RegAllocator.prototype.adjustInstructionsIfNeeded = function (irNodes) {
        for (var i = 0; i < irNodes.length; ++i) {
            var operands = irNodes[i].operands;
            var formats = irNodes[i].formats;
            if (this.isRangeIns(irNodes[i])) {
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