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