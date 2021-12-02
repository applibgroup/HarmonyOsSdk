"use strict";
exports.__esModule = true;
exports.compileYieldExpression = void 0;
var generatorFunctionBuilder_1 = require("../function/generatorFunctionBuilder");
var diagnostic_1 = require("../diagnostic");
var vregisterCache_1 = require("../base/vregisterCache");
function compileYieldExpression(compiler, expr) {
    if (!(compiler.getFuncBuilder() instanceof generatorFunctionBuilder_1.GeneratorFunctionBuilder)) {
        throw new diagnostic_1.DiagnosticError(expr.parent, diagnostic_1.DiagnosticCode.await_expressions_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules);
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