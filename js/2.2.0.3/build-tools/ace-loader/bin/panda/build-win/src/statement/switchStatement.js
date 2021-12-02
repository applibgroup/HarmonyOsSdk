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
exports.compileSwitchStatement = exports.SwitchBuilder = void 0;
var ts = __importStar(require("typescript"));
var irnodes_1 = require("../irnodes");
var diagnostic_1 = require("../diagnostic");
var labelTarget_1 = require("./labelTarget");
var SwitchBuilder = /** @class */ (function () {
    function SwitchBuilder(stmt, compiler, pandaGen, caseNums, switchEndLabel) {
        this.caseLabels = [];
        this.stmt = stmt;
        this.compiler = compiler;
        this.pandaGen = pandaGen;
        this.switchEndLabel = switchEndLabel;
        for (var i = 0; i < caseNums; i++) {
            var caseLabel = new irnodes_1.Label();
            this.caseLabels.push(caseLabel);
        }
        // switchStatements doesn't have continue target
        // so we use the uplevel continue label as it's continue target.
        var labelTarget = new labelTarget_1.LabelTarget(switchEndLabel, labelTarget_1.LabelTarget.getCloseContinueTarget());
        labelTarget_1.LabelTarget.pushLabelTarget(labelTarget);
        labelTarget_1.LabelTarget.updateName2LabelTarget(stmt.parent, labelTarget);
    }
    SwitchBuilder.prototype.setCaseTarget = function (index) {
        var caseTarget = this.stmt.caseBlock.clauses[index];
        this.pandaGen.label(caseTarget, this.caseLabels[index]);
    };
    SwitchBuilder.prototype.compileTagOfSwitch = function (tagReg) {
        this.compiler.compileExpression(this.stmt.expression);
        this.pandaGen.storeAccumulator(this.stmt.expression, tagReg);
    };
    SwitchBuilder.prototype.compileCaseStatements = function (index) {
        var _this = this;
        this.stmt.caseBlock.clauses[index].statements.forEach(function (statement) {
            _this.compiler.compileStatement(statement);
        });
    };
    SwitchBuilder.prototype.JumpIfCase = function (tag, index) {
        var stmt = this.stmt;
        var pandaGen = this.pandaGen;
        var caseTarget = stmt.caseBlock.clauses[index];
        this.compiler.compileExpression(caseTarget.expression);
        pandaGen.condition(caseTarget, ts.SyntaxKind.ExclamationEqualsEqualsToken, tag, this.caseLabels[index]);
    };
    SwitchBuilder.prototype.JumpToDefault = function (defaultIndex) {
        var defaultTarget = this.stmt.caseBlock.clauses[defaultIndex];
        this.pandaGen.branch(defaultTarget, this.caseLabels[defaultIndex]);
    };
    SwitchBuilder.prototype.checkDefaultNum = function (defaultCnt) {
        if (defaultCnt > 1) {
            throw new diagnostic_1.DiagnosticError(this.stmt, diagnostic_1.DiagnosticCode.A_default_clause_cannot_appear_more_than_once_in_a_switch_statement);
        }
    };
    SwitchBuilder.prototype["break"] = function () {
        this.pandaGen.branch(this.stmt, this.switchEndLabel);
    };
    SwitchBuilder.prototype.end = function () {
        this.pandaGen.label(this.stmt, this.switchEndLabel);
    };
    return SwitchBuilder;
}());
exports.SwitchBuilder = SwitchBuilder;
function compileSwitchStatement(stmt, compiler) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    var caseNums = stmt.caseBlock.clauses.length;
    var switchEndLabel = new irnodes_1.Label();
    var switchBuilder = new SwitchBuilder(stmt, compiler, compiler.getPandaGen(), caseNums, switchEndLabel);
    var tagReg = pandaGen.getTemp();
    switchBuilder.compileTagOfSwitch(tagReg);
    var caseTargets = stmt.caseBlock.clauses;
    var defaultIndex = 0;
    var defaultCnt = 0;
    for (var i = 0; i < caseTargets.length; i++) {
        var caseTarget = caseTargets[i];
        if (ts.isDefaultClause(caseTarget)) {
            defaultIndex = i;
            defaultCnt++;
            continue;
        }
        switchBuilder.JumpIfCase(tagReg, i);
    }
    switchBuilder.checkDefaultNum(defaultCnt);
    if (defaultIndex > 0) {
        switchBuilder.JumpToDefault(defaultIndex);
    }
    else {
        switchBuilder["break"]();
    }
    for (var i = 0; i < caseTargets.length; i++) {
        switchBuilder.setCaseTarget(i);
        switchBuilder.compileCaseStatements(i);
    }
    switchBuilder.end();
    pandaGen.freeTemps(tagReg);
    labelTarget_1.LabelTarget.popLabelTarget();
    compiler.popScope();
}
exports.compileSwitchStatement = compileSwitchStatement;
//# sourceMappingURL=switchStatement.js.map