"use strict";
exports.__esModule = true;
exports.compileNewExpression = void 0;
var util_1 = require("../base/util");
var arrayLiteralExpression_1 = require("./arrayLiteralExpression");
function compileNewExpression(expr, compiler) {
    var pandaGen = compiler.getPandaGen();
    var ctorReg = pandaGen.getTemp();
    var newTargetReg = pandaGen.getTemp();
    // get the ctor function
    compiler.compileExpression(expr.expression);
    pandaGen.storeAccumulator(expr, ctorReg);
    // new.target will be the same as ctor
    pandaGen.moveVreg(expr, newTargetReg, ctorReg);
    if (util_1.containSpreadElement(expr.arguments)) {
        var argRegs_1 = pandaGen.getTemp();
        arrayLiteralExpression_1.createArrayFromElements(expr, compiler, expr.arguments, argRegs_1);
        pandaGen.newObjSpread(expr, ctorReg, newTargetReg);
        pandaGen.freeTemps(ctorReg, newTargetReg, argRegs_1);
        return;
    }
    // prepare arguments for newobj.dyn.range instruction
    var numArgs = 2; // for the ctor
    if (expr.arguments) {
        numArgs += expr.arguments.length;
    }
    var argRegs = new Array(numArgs);
    argRegs[0] = ctorReg;
    argRegs[1] = newTargetReg;
    var argIndex = 2;
    if (expr.arguments) {
        // store ctor arguments in registers
        expr.arguments.forEach(function (argExpr) {
            var argReg = pandaGen.getTemp();
            compiler.compileExpression(argExpr);
            pandaGen.storeAccumulator(expr, argReg);
            argRegs[argIndex++] = argReg;
        });
    }
    // generate the instruction to create new instance
    pandaGen.newObject(expr, argRegs);
    // free temp registers
    pandaGen.freeTemps.apply(pandaGen, argRegs);
}
exports.compileNewExpression = compileNewExpression;
//# sourceMappingURL=newExpression.js.map