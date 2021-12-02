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
exports.__esModule = true;
exports.isValidIndex = exports.getObjAndProp = exports.compileMemberAccessExpression = void 0;
var ts = __importStar(require("typescript"));
var jshelpers = __importStar(require("../jshelpers"));
var classStatement_1 = require("../statement/classStatement");
var MAX_LENGTH = Math.pow(2, 32) - 1;
function compileMemberAccessExpression(node, compiler) {
    var pandaGen = compiler.getPandaGen();
    var objReg = pandaGen.getTemp();
    var propReg = pandaGen.getTemp();
    var _a = getObjAndProp(node, objReg, propReg, compiler), obj = _a.obj, property = _a.prop;
    if (jshelpers.isSuperProperty(node)) {
        // make sure "this" is stored in lexical env if needed
        var thisReg = pandaGen.getTemp();
        classStatement_1.compileSuperProperty(compiler, node, thisReg, property);
        pandaGen.freeTemps(thisReg);
    }
    else {
        pandaGen.loadObjProperty(node, obj, property);
    }
    pandaGen.freeTemps(objReg, propReg);
}
exports.compileMemberAccessExpression = compileMemberAccessExpression;
function getObjAndProp(node, objReg, propReg, compiler) {
    var pandaGen = compiler.getPandaGen();
    var obj = objReg;
    var prop = propReg;
    // get obj first;
    if (!jshelpers.isSuperProperty(node)) {
        compiler.compileExpression(node.expression);
        pandaGen.storeAccumulator(node.expression, objReg);
    }
    if (ts.isPropertyAccessExpression(node)) {
        if (node.name.kind != ts.SyntaxKind.Identifier) {
            throw new Error("Property name of type private Identifier is unimplemented");
        }
        prop = jshelpers.getTextOfIdentifierOrLiteral(node.name);
    }
    else {
        if (ts.isStringLiteral(node.argumentExpression)) {
            prop = jshelpers.getTextOfIdentifierOrLiteral(node.argumentExpression);
            // deal with case like a["1"]
            var temp = Number(prop);
            if (!isNaN(Number.parseFloat(prop)) && !isNaN(temp) && isValidIndex(temp) && String(temp) == prop) {
                prop = temp;
            }
        }
        else if (ts.isNumericLiteral(node.argumentExpression)) {
            prop = parseFloat(jshelpers.getTextOfIdentifierOrLiteral(node.argumentExpression));
            if (!isValidIndex(prop)) {
                prop = prop.toString();
            }
        }
        else if (ts.isPrefixUnaryExpression(node.argumentExpression) && ts.isNumericLiteral(node.argumentExpression.operand) &&
            (node.argumentExpression.operator == ts.SyntaxKind.MinusToken || node.argumentExpression.operator == ts.SyntaxKind.PlusToken)) {
            var expr = node.argumentExpression;
            var temp = parseFloat(jshelpers.getTextOfIdentifierOrLiteral(expr.operand));
            if (expr.operator == ts.SyntaxKind.MinusToken) {
                prop = "-" + temp.toString();
            }
            else {
                if (!isValidIndex(temp)) {
                    prop = "+" + temp.toString();
                }
                else {
                    prop = temp;
                }
            }
        }
        else {
            compiler.compileExpression(node.argumentExpression);
            pandaGen.storeAccumulator(node.argumentExpression, propReg);
            prop = propReg;
        }
    }
    return { obj: obj, prop: prop };
}
exports.getObjAndProp = getObjAndProp;
function isValidIndex(num) {
    if ((num >= 0) && (num < MAX_LENGTH) && (Number.isInteger(num))) {
        return true;
    }
    return false;
}
exports.isValidIndex = isValidIndex;
//# sourceMappingURL=memberAccessExpression.js.map