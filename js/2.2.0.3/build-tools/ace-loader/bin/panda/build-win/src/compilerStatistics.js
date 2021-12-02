"use strict";
exports.__esModule = true;
exports.CompilerStatistics = exports.HoistingType = void 0;
// Huawei Technologies Co.,Ltd.
var builtinsMap_1 = require("./builtinsMap");
var cmdOptions_1 = require("./cmdOptions");
var irnodes_1 = require("./irnodes");
var log_1 = require("./log");
var HoistingType;
(function (HoistingType) {
    HoistingType[HoistingType["GLOBAL_VAR"] = 0] = "GLOBAL_VAR";
    HoistingType[HoistingType["LOCAL_VAR"] = 1] = "LOCAL_VAR";
    HoistingType[HoistingType["GLOBAL_FUNCTION"] = 2] = "GLOBAL_FUNCTION";
    HoistingType[HoistingType["LOCAL_FUNCTION"] = 3] = "LOCAL_FUNCTION";
})(HoistingType = exports.HoistingType || (exports.HoistingType = {}));
var ItemValue = /** @class */ (function () {
    function ItemValue(instSize, relatedInsns) {
        this.count = 1;
        this.relatedInsns = [];
        this.nodeMap = new Map();
        this.instSize = instSize;
        if (relatedInsns) {
            this.relatedInsns.push(relatedInsns);
        }
    }
    ItemValue.prototype.add = function (num) {
        this.count += num;
        this.relatedInsns.forEach(function (relatedInsn) { relatedInsn.num += num; });
    };
    ItemValue.prototype.set = function (num) {
        this.count = num;
        this.relatedInsns.forEach(function (relatedInsn) { relatedInsn.num = num; });
    };
    ItemValue.prototype.getCount = function () {
        return this.count;
    };
    ItemValue.prototype.getInstSize = function () {
        return this.instSize;
    };
    ItemValue.prototype.getTotalSize = function () {
        return this.count * this.instSize;
    };
    ItemValue.prototype.getRelatedInsns = function () {
        return this.relatedInsns;
    };
    ItemValue.prototype.getNodeMap = function () {
        return this.nodeMap;
    };
    ItemValue.prototype.updateNodeMap = function (nodeName) {
        if (!this.nodeMap.has(nodeName)) {
            this.nodeMap.set(nodeName, 1);
        }
        else {
            var old = this.nodeMap.get(nodeName);
            this.nodeMap.set(nodeName, old + 1);
        }
    };
    ItemValue.prototype.unionNodeMap = function (nodeMap) {
        var _this = this;
        nodeMap.forEach(function (value, key) {
            if (!_this.nodeMap.has(key)) {
                _this.nodeMap.set(key, value);
            }
            else {
                var oldvalue = _this.nodeMap.get(key);
                oldvalue += value;
                _this.nodeMap.set(key, oldvalue);
            }
        });
    };
    ItemValue.prototype.getSavedSizeIfRemoved = function (Histogram) {
        var savedSize = this.getTotalSize();
        this.relatedInsns.forEach(function (relatedInsn) {
            var histogram = Histogram.getStatistics();
            var item = histogram.get(relatedInsn.name);
            if (item) {
                savedSize += (relatedInsn.num) * item.getInstSize();
            }
        });
        return savedSize;
    };
    ItemValue.createItemValue = function (name, instSize) {
        var relatedInsns;
        if (name == "lda.str") {
            relatedInsns = { name: "sta.dyn", num: 1 };
        }
        return new ItemValue(instSize, relatedInsns);
    };
    return ItemValue;
}());
var HistogramStatistics = /** @class */ (function () {
    function HistogramStatistics(funcName) {
        this.insHistogram = new Map();
        this.funcName = funcName;
    }
    HistogramStatistics.prototype.getInsName = function (ins) {
        if (ins.kind == irnodes_1.IRNodeKind.LABEL) {
            return "Label";
        }
        if (cmdOptions_1.CmdOptions.isVariantBytecode()) {
            if (ins.mnemonic.startsWith("builtin")) {
                var subCode = ins.operands[0].value;
                return builtinsMap_1.builtinsCodeMap[ins.mnemonic][subCode];
            }
        }
        else {
            if ((ins.kind == irnodes_1.IRNodeKind.CALL) || (ins.kind == irnodes_1.IRNodeKind.CALL_SHORT) || (ins.kind == irnodes_1.IRNodeKind.CALL_RANGE)) {
                var mnemonic = ins.operands[0];
                var part = mnemonic.split('.');
                return part[2];
            }
        }
        return ins.mnemonic;
    };
    HistogramStatistics.prototype.unionStatistics = function (histogram) {
        var _this = this;
        var histogramData = histogram.getStatistics();
        histogramData.forEach(function (value, key) {
            if (!_this.insHistogram.has(key)) {
                _this.insHistogram.set(key, value);
            }
            else {
                var old = _this.insHistogram.get(key);
                old.add(value.getCount());
                old.unionNodeMap(value.getNodeMap());
                _this.insHistogram.set(key, old);
            }
        });
    };
    HistogramStatistics.prototype.catchStatistics = function (pg) {
        var _this = this;
        pg.getInsns().forEach(function (ins) {
            var key = _this.getInsName(ins);
            var opSize = irnodes_1.getInstructionSize(ins.kind);
            var nodeName = ins.getNodeName();
            if (key.length <= 1) {
                log_1.LOGD("this IRNode had no key: " + ins.toString());
            }
            if (!_this.insHistogram.has(key)) {
                var item = ItemValue.createItemValue(key, opSize);
                item.updateNodeMap(nodeName);
                _this.insHistogram.set(key, item);
            }
            else {
                var old = _this.insHistogram.get(key);
                old.updateNodeMap(nodeName);
                old.add(1);
                _this.insHistogram.set(key, old);
            }
        });
        return;
    };
    HistogramStatistics.prototype.getStatistics = function () {
        return this.insHistogram;
    };
    HistogramStatistics.prototype.getTotal = function () {
        var totalInsnsNum = 0;
        var totalSize = 0;
        this.insHistogram.forEach(function (value, key) {
            totalInsnsNum += value.getCount();
            totalSize += value.getTotalSize();
        });
        return [totalInsnsNum, totalSize];
    };
    HistogramStatistics.prototype.print = function () {
        var _this = this;
        var totalInsnsNum = this.getTotal()[0];
        var totalSize = this.getTotal()[1];
        log_1.LOGD("\n");
        log_1.LOGD("Histogram:", "====== (" + this.funcName + ") ======");
        log_1.LOGD("op code\t\t\tinsns number\tins size\ttotal size\tsize percentage");
        this.insHistogram.forEach(function (value, key) {
            if (key.length < 8) {
                log_1.LOGD(key + "\t\t\t" + value.getCount() + "\t\t" + value.getInstSize() + "\t\t" + value.getTotalSize() + "\t\t" + value.getSavedSizeIfRemoved(_this) + "\t" + Math.round(value.getSavedSizeIfRemoved(_this) / totalSize * 100) + "%");
            }
            else if (key.length < 16) {
                log_1.LOGD(key + "\t\t" + value.getCount() + "\t\t" + value.getInstSize() + "\t\t" + value.getTotalSize() + "\t\t" + value.getSavedSizeIfRemoved(_this) + "\t" + Math.round(value.getSavedSizeIfRemoved(_this) / totalSize * 100) + "%");
            }
            else {
                log_1.LOGD(key + "\t" + value.getCount() + "\t\t" + value.getInstSize() + "\t\t" + value.getTotalSize() + "\t\t" + value.getSavedSizeIfRemoved(_this) + "\t" + Math.round(value.getSavedSizeIfRemoved(_this) / totalSize * 100) + "%");
            }
        });
        log_1.LOGD("total insns number : \t" + totalInsnsNum + "\t\t" + "total Size : \t" + totalSize);
        log_1.LOGD("\n");
        this.insHistogram.forEach(function (value, key) {
            if (value.getNodeMap().size > 1) {
                log_1.LOGD("op code: " + key);
                value.getNodeMap().forEach(function (num, node) {
                    if (node.length < 8) {
                        log_1.LOGD("Node: \t" + node + "\t\t\t\t\t\tnum: \t" + num + "\t\t" + Math.round(num / value.getCount() * 100) + "%");
                    }
                    else if (node.length < 16) {
                        log_1.LOGD("Node: \t" + node + "\t\t\t\t\tnum: \t" + num + "\t\t" + Math.round(num / value.getCount() * 100) + "%");
                    }
                    else if (node.length < 24) {
                        log_1.LOGD("Node: \t" + node + "\t\t\t\tnum: \t" + num + "\t\t" + Math.round(num / value.getCount() * 100) + "%");
                    }
                    else {
                        log_1.LOGD("Node: \t" + node + "\t\t\tnum: \t" + num + "\t\t" + Math.round(num / value.getCount() * 100) + "%");
                    }
                });
                log_1.LOGD("\n");
            }
        });
    };
    return HistogramStatistics;
}());
var CompilerStatistics = /** @class */ (function () {
    function CompilerStatistics() {
        this.histogramMap = new Map();
        this.instSizeMap = new Map();
        this.numOfHoistingCases = [0, 0, 0, 0];
        this.hoistingRelatedInsnNum = 0;
    }
    CompilerStatistics.prototype.addHoistingRelatedInsnNum = function (num) {
        this.hoistingRelatedInsnNum += num;
    };
    CompilerStatistics.prototype.addNumOfHoistCases = function (type) {
        this.numOfHoistingCases[type]++;
    };
    CompilerStatistics.prototype.getInsHistogramStatistics = function (pg) {
        var histogram = new HistogramStatistics(pg.internalName);
        histogram.catchStatistics(pg);
        this.histogramMap.set(pg.internalName, histogram);
    };
    CompilerStatistics.prototype.printHistogram = function (verbose) {
        var totalHistogram = new HistogramStatistics("Total");
        this.histogramMap.forEach(function (histogram, funcName) {
            totalHistogram.unionStatistics(histogram);
            if (verbose) {
                histogram.print();
            }
        });
        totalHistogram.print();
    };
    CompilerStatistics.prototype.printHoistStatistics = function () {
        log_1.LOGD("\n");
        log_1.LOGD("HoistingRelated Histogram:", "======whole file=======");
        log_1.LOGD("global var\tlocal var\tglobal function\tlocal function");
        log_1.LOGD(this.numOfHoistingCases[0] + "\t\t" + this.numOfHoistingCases[1] + "\t\t" + this.numOfHoistingCases[2] + "\t\t" + this.numOfHoistingCases[3]);
        log_1.LOGD("\n");
        log_1.LOGD("Approximately hoisting related insns nums");
        log_1.LOGD(this.hoistingRelatedInsnNum);
    };
    return CompilerStatistics;
}());
exports.CompilerStatistics = CompilerStatistics;
//# sourceMappingURL=compilerStatistics.js.map