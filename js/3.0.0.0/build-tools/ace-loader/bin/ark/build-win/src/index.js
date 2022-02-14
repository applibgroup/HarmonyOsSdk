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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var ts = __importStar(require("typescript"));
var cmdOptions_1 = require("./cmdOptions");
var compilerDriver_1 = require("./compilerDriver");
var diag = __importStar(require("./diagnostic"));
var log_1 = require("./log");
var cacheExpander_1 = require("./pass/cacheExpander");
var ICPass_1 = require("./pass/ICPass");
var regAllocator_1 = require("./regAllocator");
var strictMode_1 = require("./strictMode");
var jshelpers = require("./jshelpers");
function main(fileNames, options) {
    var program = ts.createProgram(fileNames, options);
    var emitResult = program.emit(undefined, undefined, undefined, undefined, {
        before: [
            function (ctx) {
                return function (node) {
                    var outputBinName = cmdOptions_1.CmdOptions.getOutputBinName();
                    var fileName = node.fileName.substring(0, node.fileName.lastIndexOf('.'));
                    if (fileName != cmdOptions_1.CmdOptions.getInputFileName()) {
                        outputBinName = fileName + ".abc";
                    }
                    var compilerDriver = new compilerDriver_1.CompilerDriver(outputBinName);
                    strictMode_1.setGlobalStrict(jshelpers.isEffectiveStrictModeSourceFile(node, options));
                    if (cmdOptions_1.CmdOptions.isVariantBytecode()) {
                        log_1.LOGD("variant bytecode dump");
                        var passes = [
                            new cacheExpander_1.CacheExpander(),
                            new ICPass_1.ICPass(),
                            new regAllocator_1.RegAlloc()
                        ];
                        compilerDriver.setCustomPasses(passes);
                    }
                    compilerDriver.compile(node);
                    compilerDriver.showStatistics();
                    return node;
                };
            }
        ]
    });
    var allDiagnostics = ts
        .getPreEmitDiagnostics(program)
        .concat(emitResult.diagnostics);
    allDiagnostics.forEach(function (diagnostic) {
        diag.printDiagnostic(diagnostic);
    });
}
var Compiler;
(function (Compiler) {
    var Options;
    (function (Options) {
        Options.Default = {
            outDir: "../tmp/build",
            allowJs: true,
            noEmitOnError: true,
            noImplicitAny: true,
            target: ts.ScriptTarget.ES2015,
            module: ts.ModuleKind.CommonJS,
            strictNullChecks: true,
            skipLibCheck: true
        };
    })(Options = Compiler.Options || (Compiler.Options = {}));
})(Compiler || (Compiler = {}));
function run(args, options) {
    var parsed = cmdOptions_1.CmdOptions.parseUserCmd(args);
    if (!parsed) {
        return;
    }
    if (options) {
        if (!((parsed.options.project) || (parsed.options.build))) {
            parsed.options = options;
        }
    }
    try {
        main(parsed.fileNames, parsed.options);
    }
    catch (err) {
        if (err instanceof diag.DiagnosticError) {
            var diagnostic = diag.getDiagnostic(err.code);
            if (diagnostic != undefined) {
                var diagnosticLog = diag.createDiagnostic.apply(diag, __spreadArrays([err.file, err.irnode, diagnostic], err.args));
                diag.printDiagnostic(diagnosticLog);
            }
        }
        else if (err instanceof SyntaxError) {
            log_1.LOGE(err.name, err.message);
        }
        else {
            throw err;
        }
    }
}
run(process.argv.slice(2), Compiler.Options.Default);
global.gc();
//# sourceMappingURL=index.js.map