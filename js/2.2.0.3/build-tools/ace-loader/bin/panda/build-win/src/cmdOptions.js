"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CmdOptions = void 0;
// singleton to parse commandLine infos
var command_line_args_1 = __importDefault(require("command-line-args"));
var command_line_usage_1 = __importDefault(require("command-line-usage"));
var ts = __importStar(require("typescript"));
var log_1 = require("./log");
var path = require("path");
var util_1 = require("./base/util");
var ts2pandaOptions = [
    { name: 'variant-bytecode', alias: 'r', type: Boolean, defaultValue: true, description: "emit 2nd bytecode to pandafile." },
    { name: 'modules', alias: 'm', type: Boolean, defaultValue: false, description: "compile as module." },
    { name: 'debug-log', alias: 'l', type: Boolean, defaultValue: false, description: "show info debug log." },
    { name: 'dump-assembly', alias: 'a', type: Boolean, defaultValue: false, description: "dump assembly to file." },
    { name: 'debug', alias: 'd', type: Boolean, defaultValue: false, description: "compile with debug info." },
    { name: 'show-statistics', alias: 's', type: String, lazyMultiple: true, defaultValue: "", description: "show compile statistics(ast, histogram, hoisting, all)." },
    { name: 'output', alias: 'o', type: String, defaultValue: "", description: "set output file." },
    { name: 'timeout', alias: 't', type: Number, defaultValue: 0, description: "js to abc timeout threshold(unit: seconds)." },
    { name: 'opt-log-level', type: String, defaultValue: "error", description: "specifie optimizer log level. Possible values: ['debug', 'info', 'error', 'fatal']" },
    { name: 'opt-level', type: Number, defaultValue: 1, description: "Optimization level. Possible values: [0, 1, 2]. Default: 0\n    0: no optimizations\n    \
                                                                    1: basic bytecode optimizations, including valueNumber, lowering, constantResolver, regAccAllocator\n    \
                                                                    2: other bytecode optimizations, unimplemented yet" },
    { name: 'help', alias: 'h', type: Boolean, description: "Show usage guide." },
    { name: 'bc-version', alias: 'v', type: Boolean, defaultValue: false, description: "Print ark bytecode version" },
    { name: 'bc-min-version', type: Boolean, defaultValue: false, description: "Print ark bytecode minimum supported version" }
];
var CmdOptions = /** @class */ (function () {
    function CmdOptions() {
    }
    CmdOptions.isEnableDebugLog = function () {
        if (!this.options) {
            return false;
        }
        return this.options["debug-log"];
    };
    CmdOptions.isAssemblyMode = function () {
        if (!this.options) {
            return false;
        }
        return this.options["dump-assembly"];
    };
    CmdOptions.isDebugMode = function () {
        if (!this.options) {
            return false;
        }
        return this.options["debug"];
    };
    CmdOptions.isModules = function () {
        if (!this.options) {
            return false;
        }
        return this.options["modules"];
    };
    CmdOptions.isVariantBytecode = function () {
        if (!this.options) {
            return true;
        }
        return this.options["variant-bytecode"];
    };
    CmdOptions.getOptLevel = function () {
        return this.options["opt-level"];
    };
    CmdOptions.getOptLogLevel = function () {
        return this.options["opt-log-level"];
    };
    CmdOptions.showASTStatistics = function () {
        if (!this.options) {
            return false;
        }
        return this.options["show-statistics"].includes("ast") || this.options["show-statistics"].includes("all");
    };
    CmdOptions.showHistogramStatistics = function () {
        if (!this.options) {
            return false;
        }
        return this.options["show-statistics"].includes("all") || this.options["show-statistics"].includes("histogram");
    };
    CmdOptions.showHoistingStatistics = function () {
        if (!this.options) {
            return false;
        }
        return this.options["show-statistics"].includes("all") || this.options["show-statistics"].includes("hoisting");
    };
    CmdOptions.getOutputBinName = function () {
        var outputFile = this.options.output;
        if (outputFile == "") {
            var path_1 = this.parsedResult.fileNames[0];
            outputFile = path_1.substring(0, path_1.lastIndexOf('.'));
            outputFile = outputFile + ".abc";
        }
        return outputFile;
    };
    CmdOptions.getTimeOut = function () {
        if (!this.options) {
            return 0;
        }
        return this.options["timeout"];
    };
    CmdOptions.showHelp = function () {
        var usage = command_line_usage_1["default"]([
            {
                header: "Ark JavaScript Compiler",
                content: 'node index.js [options] file.js'
            },
            {
                header: 'Options',
                optionList: ts2pandaOptions
            },
            {
                content: 'Project home: {underline https://rnd-gitlab-msc.huawei.com/rus-os-team/virtual-machines-and-tools/script-application-engine}'
            }
        ]);
        log_1.LOGE(usage);
    };
    CmdOptions.isBcVersion = function () {
        if (!this.options) {
            return false;
        }
        return this.options["bc-version"];
    };
    CmdOptions.getVersion = function (isBcVersion) {
        if (isBcVersion === void 0) { isBcVersion = true; }
        var ts2abc = path.join(path.resolve(__dirname, '../bin'), "ts2abc");
        var version_arg = isBcVersion ? "--bc-version" : "--bc-min-version";
        util_1.execute("" + ts2abc, [version_arg], true);
    };
    CmdOptions.isBcMinVersion = function () {
        if (!this.options) {
            return false;
        }
        return this.options["bc-min-version"];
    };
    CmdOptions.parseUserCmd = function (args) {
        this.options = command_line_args_1["default"](ts2pandaOptions, { partial: true });
        if (this.options.help) {
            this.showHelp();
            return undefined;
        }
        if (this.isBcVersion() || this.isBcMinVersion()) {
            this.getVersion(this.isBcVersion());
            return undefined;
        }
        if (!this.options._unknown) {
            log_1.LOGE("options at least one file is needed");
            this.showHelp();
            return undefined;
        }
        this.parsedResult = ts.parseCommandLine(this.options._unknown);
        return this.parsedResult;
    };
    return CmdOptions;
}());
exports.CmdOptions = CmdOptions;
//# sourceMappingURL=cmdOptions.js.map