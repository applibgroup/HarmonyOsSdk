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
exports.LabelTarget = void 0;
var ts = __importStar(require("typescript"));
var jshelpers = __importStar(require("../jshelpers"));
var diagnostic_1 = require("../diagnostic");
var tryStatement_1 = require("./tryStatement");
var LabelTarget = /** @class */ (function () {
    function LabelTarget(breakTargetLabel, continueTargetLabel) {
        this.breakTargetLabel = breakTargetLabel;
        this.continueTargetLabel = continueTargetLabel;
        this.tryStatement = tryStatement_1.TryStatement.getCurrentTryStatement();
    }
    LabelTarget.prototype.getBreakTargetLabel = function () {
        return this.breakTargetLabel;
    };
    LabelTarget.prototype.getContinueTargetLabel = function () {
        return this.continueTargetLabel;
    };
    LabelTarget.prototype.getTryStatement = function () {
        return this.tryStatement;
    };
    LabelTarget.isLabelTargetsEmpty = function () {
        if (LabelTarget.labelTargetStack.length == 0) {
            return true;
        }
        return false;
    };
    LabelTarget.getCloseLabelTarget = function () {
        if (!LabelTarget.isLabelTargetsEmpty()) {
            return LabelTarget.labelTargetStack[LabelTarget.labelTargetStack.length - 1];
        }
        return undefined;
    };
    // this API used for get uplevel continueLabel when compile switchStatement
    LabelTarget.getCloseContinueTarget = function () {
        var labelTarget = LabelTarget.getCloseLabelTarget();
        if (labelTarget) {
            return labelTarget.continueTargetLabel;
        }
        return undefined;
    };
    LabelTarget.pushLabelTarget = function (labelTarget) {
        LabelTarget.labelTargetStack.push(labelTarget);
    };
    LabelTarget.popLabelTarget = function () {
        LabelTarget.labelTargetStack.pop();
    };
    LabelTarget.updateName2LabelTarget = function (node, labelTarget) {
        while (node.kind == ts.SyntaxKind.LabeledStatement) {
            var labeledStmt = node;
            var labelName = jshelpers.getTextOfIdentifierOrLiteral(labeledStmt.label);
            // make sure saved label is different.
            if (LabelTarget.name2LabelTarget.has(labelName)) {
                throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.Duplicate_label_0);
            }
            LabelTarget.name2LabelTarget.set(labelName, labelTarget);
            node = node.parent;
        }
    };
    LabelTarget.deleteName2LabelTarget = function (labelName) {
        LabelTarget.name2LabelTarget["delete"](labelName);
    };
    LabelTarget.getLabelTarget = function (stmt) {
        var labelTarget;
        if (stmt.label) {
            var labelName = jshelpers.getTextOfIdentifierOrLiteral(stmt.label);
            labelTarget = LabelTarget.name2LabelTarget.get(labelName);
        }
        else {
            labelTarget = LabelTarget.getCloseLabelTarget();
        }
        return labelTarget;
    };
    LabelTarget.name2LabelTarget = new Map();
    LabelTarget.labelTargetStack = [];
    return LabelTarget;
}());
exports.LabelTarget = LabelTarget;
//# sourceMappingURL=labelTarget.js.map