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
exports.findOuterNodeOfParenthesis = exports.findInnerExprOfParenthesis = void 0;
var ts = __importStar(require("typescript"));
function findInnerExprOfParenthesis(expr) {
    while (expr.expression.kind == ts.SyntaxKind.ParenthesizedExpression) {
        expr = expr.expression;
    }
    return expr.expression;
}
exports.findInnerExprOfParenthesis = findInnerExprOfParenthesis;
function findOuterNodeOfParenthesis(expr) {
    var parent = expr.parent;
    while (parent.kind == ts.SyntaxKind.ParenthesizedExpression) {
        parent = parent.parent;
    }
    return parent;
}
exports.findOuterNodeOfParenthesis = findOuterNodeOfParenthesis;
//# sourceMappingURL=parenthesizedExpression.js.map