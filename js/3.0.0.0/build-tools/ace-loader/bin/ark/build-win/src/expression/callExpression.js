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
exports.emitCall = exports.getHiddenParameters = exports.compileCallExpression = void 0;
var ts = __importStar(require("typescript"));
var vregisterCache_1 = require("../base/vregisterCache");
var classStatement_1 = require("../statement/classStatement");
var arrayLiteralExpression_1 = require("./arrayLiteralExpression");
var memberAccessExpression_1 = require("./memberAccessExpression");
var util_1 = require("../base/util");
function compileCallExpression(expr, compiler, inTailPos) {
    var pandaGen = compiler.getPandaGen();
    // import call should be supported further
    if ((expr.expression.kind == ts.SyntaxKind.CallExpression) || (expr.expression.kind == ts.SyntaxKind.NewExpression)) {
        var processed = compiler.compileFunctionReturnThis(expr.expression);
        if (processed) {
            return;
        }
    }
    if (expr.expression.kind == ts.SyntaxKind.SuperKeyword) {
        var args_1 = [];
        var hasSpread = emitCallArguments(compiler, expr, args_1);
        classStatement_1.compileSuperCall(compiler, expr, args_1, hasSpread);
        pandaGen.freeTemps.apply(pandaGen, args_1);
        return;
    }
    var _a = getHiddenParameters(expr.expression, compiler), args = _a.arguments, passThis = _a.passThis;
    // compile arguments of function call
    emitCall(expr, args, passThis, compiler);
    pandaGen.freeTemps.apply(pandaGen, args);
}
exports.compileCallExpression = compileCallExpression;
function getHiddenParameters(expr, compiler) {
    var pandaGen = compiler.getPandaGen();
    var passThis = false;
    var args = [];
    var funcReg = pandaGen.getTemp();
    if (util_1.isMemberExpression(expr)) {
        passThis = true;
        var thisReg = pandaGen.getTemp();
        var propReg = pandaGen.getTemp();
        var _a = memberAccessExpression_1.getObjAndProp(expr, thisReg, propReg, compiler), obj = _a.obj, prop = _a.prop;
        if (expr.expression.kind == ts.SyntaxKind.SuperKeyword) {
            classStatement_1.compileSuperProperty(compiler, expr, thisReg, prop);
        }
        else {
            pandaGen.loadObjProperty(expr, thisReg, prop);
        }
        pandaGen.storeAccumulator(expr, funcReg);
        args.push.apply(args, [funcReg, thisReg]);
        pandaGen.freeTemps(propReg);
    }
    else {
        compiler.compileExpression(expr);
        pandaGen.storeAccumulator(expr, funcReg);
        args.push(funcReg);
    }
    return { arguments: args, passThis: passThis };
}
exports.getHiddenParameters = getHiddenParameters;
function emitCallArguments(compiler, expr, args) {
    var pandaGen = compiler.getPandaGen();
    var hasSpread = false;
    for (var i = 0; i < expr.arguments.length; i++) {
        var argument = expr.arguments[i];
        hasSpread = ts.isSpreadElement(argument) ? true : false;
        if (hasSpread) {
            break;
        }
    }
    if (!hasSpread) {
        expr.arguments.forEach(function (argExpr) {
            var arg = pandaGen.getTemp();
            compiler.compileExpression(argExpr);
            pandaGen.storeAccumulator(argExpr, arg);
            args.push(arg);
        });
    }
    return hasSpread;
}
function emitCall(expr, args, passThis, compiler) {
    var pandaGen = compiler.getPandaGen();
    var hasSpread = emitCallArguments(compiler, expr, args);
    if (!hasSpread) {
        pandaGen.call(expr, __spreadArrays(args), passThis);
        return;
    }
    // spread argument exist
    var callee = args[0];
    var thisReg = passThis ? args[1] : vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined);
    var argArray = pandaGen.getTemp();
    arrayLiteralExpression_1.createArrayFromElements(expr, compiler, expr.arguments, argArray);
    pandaGen.callSpread(expr, callee, thisReg, argArray);
    pandaGen.freeTemps(argArray);
}
exports.emitCall = emitCall;
//# sourceMappingURL=callExpression.js.map