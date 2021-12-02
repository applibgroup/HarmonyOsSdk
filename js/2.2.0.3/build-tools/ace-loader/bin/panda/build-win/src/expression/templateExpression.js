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
exports.getTemplateObject = void 0;
var ts = __importStar(require("typescript"));
function genRawString(pandaGen, expr) {
    var text = "";
    if (ts.isTemplateExpression(expr)) {
        text = expr.head.rawText;
    }
    else {
        text = expr.rawText;
    }
    text = text.replace(/(\r?\n|\r)/gm, "\n");
    pandaGen.loadAccumulatorString(expr, text);
}
function genCookedString(pandaGen, expr) {
    var text = "";
    if (ts.isTemplateExpression(expr)) {
        text = expr.head.text;
    }
    else {
        text = expr.text;
    }
    if (text.indexOf("\\u{") != -1) {
        text = eval("'" + text + "'");
        text = unescape(text.replace(/\u/g, "%u"));
    }
    pandaGen.loadAccumulatorString(expr, text);
}
function genTemplateArrayArg(pandaGen, expr, rawArr, cookedArr) {
    var spans = undefined;
    if (ts.isTemplateExpression(expr)) {
        spans = expr.templateSpans;
    }
    var elemIndex = 0;
    var indexReg = pandaGen.getTemp();
    var rawArrTmp = pandaGen.getTemp();
    var cookedArrTmp = pandaGen.getTemp();
    pandaGen.createEmptyArray(expr);
    pandaGen.storeAccumulator(expr, rawArrTmp);
    pandaGen.createEmptyArray(expr);
    pandaGen.storeAccumulator(expr, cookedArrTmp);
    pandaGen.loadAccumulatorInt(expr, elemIndex);
    pandaGen.storeAccumulator(expr, indexReg);
    genRawString(pandaGen, expr);
    pandaGen.storeObjProperty(expr, rawArrTmp, indexReg);
    genCookedString(pandaGen, expr);
    pandaGen.storeObjProperty(expr, cookedArrTmp, indexReg);
    ++elemIndex;
    if (spans && spans.length) {
        spans.forEach(function (span) {
            pandaGen.loadAccumulatorInt(span, elemIndex);
            pandaGen.storeAccumulator(span, indexReg);
            pandaGen.loadAccumulatorString(span, span.literal.rawText === undefined ? span.literal.text : span.literal.rawText);
            pandaGen.storeObjProperty(span, rawArrTmp, indexReg);
            pandaGen.loadAccumulatorString(span, span.literal.text);
            pandaGen.storeObjProperty(span, cookedArrTmp, indexReg);
            ++elemIndex;
        });
    }
    pandaGen.moveVreg(expr, rawArr, rawArrTmp);
    pandaGen.moveVreg(expr, cookedArr, cookedArrTmp);
    pandaGen.freeTemps(indexReg, rawArrTmp, cookedArrTmp);
}
function getTemplateObject(pandaGen, expr) {
    var templateArgs = pandaGen.getTemp();
    var indexReg = pandaGen.getTemp();
    var rawArr = pandaGen.getTemp();
    var cookedArr = pandaGen.getTemp();
    genTemplateArrayArg(pandaGen, expr.template, rawArr, cookedArr);
    pandaGen.createEmptyArray(expr);
    pandaGen.storeAccumulator(expr, templateArgs);
    var elemIndex = 0;
    pandaGen.loadAccumulatorInt(expr, elemIndex);
    pandaGen.storeAccumulator(expr, indexReg);
    pandaGen.loadAccumulator(expr, rawArr);
    pandaGen.storeObjProperty(expr, templateArgs, indexReg);
    ++elemIndex;
    pandaGen.loadAccumulatorInt(expr, elemIndex);
    pandaGen.storeAccumulator(expr, indexReg);
    pandaGen.loadAccumulator(expr, cookedArr);
    pandaGen.storeObjProperty(expr, templateArgs, indexReg);
    pandaGen.getTemplateObject(expr, templateArgs);
    pandaGen.freeTemps(templateArgs, indexReg, rawArr, cookedArr);
}
exports.getTemplateObject = getTemplateObject;
//# sourceMappingURL=templateExpression.js.map