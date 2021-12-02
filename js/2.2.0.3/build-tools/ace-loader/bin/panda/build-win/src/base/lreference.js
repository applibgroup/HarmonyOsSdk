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
exports.LReference = void 0;
var ts = __importStar(require("typescript"));
var compilerUtils_1 = require("../compilerUtils");
var diagnostic_1 = require("../diagnostic");
var memberAccessExpression_1 = require("../expression/memberAccessExpression");
var parenthesizedExpression_1 = require("../expression/parenthesizedExpression");
var irnodes_1 = require("../irnodes");
var jshelpers = __importStar(require("../jshelpers"));
var variable_1 = require("../variable");
var util_1 = require("./util");
var ReferenceKind;
(function (ReferenceKind) {
    ReferenceKind[ReferenceKind["Member"] = 0] = "Member";
    ReferenceKind[ReferenceKind["VarOrGlobal"] = 1] = "VarOrGlobal";
    ReferenceKind[ReferenceKind["Destructuring"] = 2] = "Destructuring";
})(ReferenceKind || (ReferenceKind = {}));
;
var LReference = /** @class */ (function () {
    function LReference(node, compiler, isDeclaration, refKind, variable) {
        this.obj = undefined;
        this.prop = undefined;
        this.propLiteral = undefined;
        this.node = node;
        this.compiler = compiler;
        this.isDeclaration = isDeclaration;
        this.refKind = refKind;
        if (refKind == ReferenceKind.Destructuring) {
            this.destructuringTarget = node;
        }
        else if (refKind == ReferenceKind.VarOrGlobal) {
            this.variable = variable;
        }
        else if (refKind == ReferenceKind.Member) {
            this.obj = compiler.getPandaGen().getTemp();
            this.prop = compiler.getPandaGen().getTemp();
        }
    }
    LReference.prototype.getValue = function () {
        var pandaGen = this.compiler.getPandaGen();
        switch (this.refKind) {
            case ReferenceKind.Member:
                var prop = void 0;
                if (this.propLiteral === undefined) {
                    prop = this.prop;
                }
                else {
                    prop = this.propLiteral;
                }
                pandaGen.loadObjProperty(this.node, this.obj, prop);
                return;
            case ReferenceKind.VarOrGlobal:
                this.compiler.emitLoad(this.node, this.variable);
                return;
            case ReferenceKind.Destructuring:
                throw new Error("Destructuring target can't be loaded");
            default:
                throw new Error("invalid LReference Kind to GetValue");
        }
    };
    LReference.prototype.setValue = function () {
        var pandaGen = this.compiler.getPandaGen();
        switch (this.refKind) {
            case ReferenceKind.Member: {
                var prop = void 0;
                if (this.propLiteral === undefined) {
                    prop = this.prop;
                }
                else {
                    prop = this.propLiteral;
                }
                if (jshelpers.isSuperProperty(this.node)) {
                    var thisReg = pandaGen.getTemp();
                    this.compiler.getThis(this.node, thisReg);
                    pandaGen.storeSuperProperty(this.node, thisReg, prop);
                    pandaGen.freeTemps(thisReg);
                }
                else {
                    pandaGen.storeObjProperty(this.node, this.obj, prop);
                }
                pandaGen.freeTemps.apply(pandaGen, [this.obj, this.prop]);
                return;
            }
            case ReferenceKind.VarOrGlobal:
                this.compiler.emitStore(this.node, this.variable, this.isDeclaration);
                return;
            case ReferenceKind.Destructuring:
                compilerUtils_1.emitDestructuring(this.destructuringTarget, pandaGen, this.compiler);
                return;
            default:
                throw new Error("invalid LReference Kind to SetValue");
        }
    };
    LReference.prototype.setObjectAndProperty = function (pandaGen, obj, prop) {
        if (!jshelpers.isSuperProperty(this.node)) {
            pandaGen.moveVreg(this.node, this.obj, obj);
        }
        if (prop instanceof irnodes_1.VReg) {
            pandaGen.moveVreg(this.node, this.prop, prop);
            return;
        }
        this.propLiteral = prop;
    };
    LReference.createLRef = function (compiler, node, isDeclaration) {
        var pandaGen = compiler.getPandaGen();
        var realNode = node;
        if (ts.isParenthesizedExpression(node)) {
            realNode = parenthesizedExpression_1.findInnerExprOfParenthesis(node);
        }
        if (ts.isIdentifier(realNode)) {
            var name_1 = jshelpers.getTextOfIdentifierOrLiteral(realNode);
            var variable = compiler.getCurrentScope().find(name_1);
            if (!variable.v) {
                variable.v = compiler.getCurrentScope().add(name_1, variable_1.VarDeclarationKind.NONE);
            }
            return new LReference(realNode, compiler, isDeclaration, ReferenceKind.VarOrGlobal, variable);
        }
        if (ts.isPropertyAccessExpression(realNode) || ts.isElementAccessExpression(realNode)) {
            var lref = new LReference(realNode, compiler, false, ReferenceKind.Member, undefined);
            var objReg = pandaGen.getTemp();
            var propReg = pandaGen.getTemp();
            var _a = memberAccessExpression_1.getObjAndProp(realNode, objReg, propReg, compiler), object = _a.obj, property = _a.prop;
            lref.setObjectAndProperty(pandaGen, object, property);
            pandaGen.freeTemps(objReg, propReg);
            return lref;
        }
        if (ts.isVariableDeclarationList(realNode)) {
            var decls = realNode.declarations;
            if (decls.length != 1) {
                throw new Error("Malformed variable declaration");
            }
            return LReference.createLRef(compiler, decls[0].name, true);
        }
        if (util_1.isBindingOrAssignmentPattern(realNode)) {
            return new LReference(realNode, compiler, isDeclaration, ReferenceKind.Destructuring, undefined);
        }
        throw new diagnostic_1.DiagnosticError(node, diagnostic_1.DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access);
    };
    return LReference;
}());
exports.LReference = LReference;
//# sourceMappingURL=lreference.js.map