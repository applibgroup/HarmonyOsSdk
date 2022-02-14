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
exports.__esModule = true;
exports.compileYieldExpression = void 0;
var generatorFunctionBuilder_1 = require("../function/generatorFunctionBuilder");
var diagnostic_1 = require("../diagnostic");
var vregisterCache_1 = require("../base/vregisterCache");
function compileYieldExpression(compiler, expr) {
    if (!(compiler.getFuncBuilder() instanceof generatorFunctionBuilder_1.GeneratorFunctionBuilder)) {
        throw new diagnostic_1.DiagnosticError(expr.parent, diagnostic_1.DiagnosticCode.A_yield_expression_is_only_allowed_in_a_generator_body);
    }
    expr.asteriskToken ? genYieldStarExpr(compiler, expr) : genYieldExpr(compiler, expr);
}
exports.compileYieldExpression = compileYieldExpression;
function genYieldExpr(compiler, expr) {
    var pandaGen = compiler.getPandaGen();
    var funcBuilder = compiler.getFuncBuilder();
    if (expr.expression) {
        var retValue = pandaGen.getTemp();
        compiler.compileExpression(expr.expression);
        pandaGen.storeAccumulator(expr, retValue);
        funcBuilder.yield(expr, retValue);
        pandaGen.freeTemps(retValue);
    }
    else {
        funcBuilder.yield(expr, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
    }
}
function genYieldStarExpr(compiler, expr) {
    var funcBuilder = compiler.getFuncBuilder();
    if (!expr.expression) {
        throw new Error("yield* must have an expression!");
    }
    compiler.compileExpression(expr.expression);
    funcBuilder.yieldStar(expr);
}
//# sourceMappingURL=yieldExpression.js.map