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
exports.__esModule = true;
exports.compileRegularExpressionLiteral = exports.RegExpFlags = void 0;
var jshelpers = __importStar(require("../jshelpers"));
var diagnostic_1 = require("../diagnostic");
var RegExpFlags;
(function (RegExpFlags) {
    RegExpFlags[RegExpFlags["FLAG_GLOBAL"] = 1] = "FLAG_GLOBAL";
    RegExpFlags[RegExpFlags["FLAG_IGNORECASE"] = 2] = "FLAG_IGNORECASE";
    RegExpFlags[RegExpFlags["FLAG_MULTILINE"] = 4] = "FLAG_MULTILINE";
    RegExpFlags[RegExpFlags["FLAG_DOTALL"] = 8] = "FLAG_DOTALL";
    RegExpFlags[RegExpFlags["FLAG_UTF16"] = 16] = "FLAG_UTF16";
    RegExpFlags[RegExpFlags["FLAG_STICKY"] = 32] = "FLAG_STICKY";
})(RegExpFlags = exports.RegExpFlags || (exports.RegExpFlags = {}));
function compileRegularExpressionLiteral(compiler, regexp) {
    var pandaGen = compiler.getPandaGen();
    var regexpText = regexp.text;
    var regexpPattern = regexpText;
    var regexpFlags = "";
    var firstSlashPos = regexpText.indexOf('/');
    var lastSlashPos = regexpText.lastIndexOf('/');
    if (firstSlashPos == -1 ||
        lastSlashPos == -1 ||
        firstSlashPos == lastSlashPos) {
        throw new diagnostic_1.DiagnosticError(regexp, diagnostic_1.DiagnosticCode.Incorrect_regular_expression);
    }
    regexpPattern = regexpText.substring(firstSlashPos + 1, lastSlashPos);
    regexpFlags = regexpText.substring(lastSlashPos + 1);
    var flagsBits = updateExpressionFlags(regexpFlags, regexp);
    pandaGen.createRegExpWithLiteral(regexp, regexpPattern, flagsBits);
}
exports.compileRegularExpressionLiteral = compileRegularExpressionLiteral;
function updateExpressionFlags(regexpFlags, regexp) {
    var flagsBits = 0;
    var flagsBitsTemp = 0;
    for (var idx = 0; idx < regexpFlags.length; idx++) {
        switch (regexpFlags[idx]) {
            case 'g':
                flagsBitsTemp = RegExpFlags.FLAG_GLOBAL;
                break;
            case 'i':
                flagsBitsTemp = RegExpFlags.FLAG_IGNORECASE;
                break;
            case 'm':
                flagsBitsTemp = RegExpFlags.FLAG_MULTILINE;
                break;
            case 's':
                flagsBitsTemp = RegExpFlags.FLAG_DOTALL;
                break;
            case 'u':
                flagsBitsTemp = RegExpFlags.FLAG_UTF16;
                break;
            case 'y':
                flagsBitsTemp = RegExpFlags.FLAG_STICKY;
                break;
            default:
                var file = jshelpers.getSourceFileOfNode(regexp);
                throw new diagnostic_1.DiagnosticError(regexp, diagnostic_1.DiagnosticCode.Invalid_regular_expression_flag_0, file, [regexpFlags[idx]]);
        }
        if ((flagsBits & flagsBitsTemp) != 0) {
            var file = jshelpers.getSourceFileOfNode(regexp);
            throw new diagnostic_1.DiagnosticError(regexp, diagnostic_1.DiagnosticCode.Invalid_regular_expression_flag_0, file, [regexpFlags[idx]]);
        }
        flagsBits |= flagsBitsTemp;
    }
    return flagsBits;
}
//# sourceMappingURL=regularExpression.js.map