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
exports.createMethodOrAccessor = exports.compileObjectLiteralExpression = void 0;
var ts = __importStar(require("typescript"));
var jshelpers = __importStar(require("../jshelpers"));
var vregisterCache_1 = require("../base/vregisterCache");
var numericLiteral_1 = require("./numericLiteral");
var pandagen_1 = require("../pandagen");
var properties_1 = require("../base/properties");
var literal_1 = require("../base/literal");
function compileObjectLiteralExpression(compiler, expr) {
    var pandaGen = compiler.getPandaGen();
    // traverse the properties entries and store the useful information
    var properties = properties_1.generatePropertyFromExpr(expr);
    var objReg = pandaGen.getTemp();
    var hasMethod = false;
    // emptyObjectLiteral
    if (properties.length == 0) {
        pandaGen.createEmptyObject(expr);
        pandaGen.storeAccumulator(expr, objReg);
        pandaGen.freeTemps(objReg);
        return;
    }
    var literalBuffer = new literal_1.LiteralBuffer();
    hasMethod = compileProperties(compiler, properties, literalBuffer);
    createObject(expr, pandaGen, objReg, literalBuffer, hasMethod);
    // for now there may left some Variable/Accessor to set the true value
    setUncompiledProperties(compiler, pandaGen, properties, objReg);
    pandaGen.loadAccumulator(expr, objReg);
    pandaGen.freeTemps(objReg);
}
exports.compileObjectLiteralExpression = compileObjectLiteralExpression;
function compileProperties(compiler, properties, literalBuffer) {
    var hasMethod = false;
    for (var _i = 0, properties_2 = properties; _i < properties_2.length; _i++) {
        var prop = properties_2[_i];
        if (prop.getKind() == properties_1.PropertyKind.Spread || prop.getKind() == properties_1.PropertyKind.Computed) {
            break;
        }
        if (prop.getKind() == properties_1.PropertyKind.Prototype || prop.isRedeclared()) {
            continue;
        }
        var nameLiteral = new literal_1.Literal(literal_1.LiteralTag.STRING, String(prop.getName()));
        if (prop.getKind() == properties_1.PropertyKind.Constant) {
            var valLiteral = createConstantLiteral(prop);
            literalBuffer.addLiterals(nameLiteral, valLiteral);
            prop.setCompiled(); // need to be careful
        }
        if (prop.getKind() == properties_1.PropertyKind.Variable) {
            var compilerDriver = compiler.getCompilerDriver();
            var valueNode = prop.getValue();
            var valLiteral = void 0;
            if (ts.isMethodDeclaration(valueNode)) {
                if (valueNode.asteriskToken) {
                    valLiteral = new literal_1.Literal(literal_1.LiteralTag.GENERATOR, compilerDriver.getFuncInternalName(valueNode));
                }
                else {
                    valLiteral = new literal_1.Literal(literal_1.LiteralTag.METHOD, compilerDriver.getFuncInternalName(valueNode));
                }
                prop.setCompiled();
                hasMethod = true;
            }
            else {
                valLiteral = new literal_1.Literal(literal_1.LiteralTag.NULLVALUE, null);
            }
            literalBuffer.addLiterals(nameLiteral, valLiteral);
        }
        if (prop.getKind() == properties_1.PropertyKind.Accessor) {
            var valLiteral = new literal_1.Literal(literal_1.LiteralTag.ACCESSOR, null);
            literalBuffer.addLiterals(nameLiteral, valLiteral);
        }
    }
    return hasMethod;
}
function createObject(expr, pandaGen, objReg, literalBuffer, hasMethod) {
    if (literalBuffer.isEmpty()) {
        pandaGen.createEmptyObject(expr);
    }
    else {
        var literalArrayBuffer = pandagen_1.PandaGen.getLiteralArrayBuffer();
        var bufferIdx = literalArrayBuffer.length;
        literalArrayBuffer.push(literalBuffer);
        if (hasMethod) {
            pandaGen.createObjectHavingMethod(expr, bufferIdx);
        }
        else {
            pandaGen.createObjectWithBuffer(expr, bufferIdx);
        }
    }
    pandaGen.storeAccumulator(expr, objReg);
}
function createConstantLiteral(prop) {
    var valLiteral;
    if (prop.getValue().kind == ts.SyntaxKind.StringLiteral) {
        valLiteral = new literal_1.Literal(literal_1.LiteralTag.STRING, jshelpers.getTextOfIdentifierOrLiteral(prop.getValue()));
    }
    else if (prop.getValue().kind == ts.SyntaxKind.NumericLiteral) {
        var value = Number.parseFloat(jshelpers.getTextOfIdentifierOrLiteral(prop.getValue()));
        if (numericLiteral_1.isInteger(value)) {
            valLiteral = new literal_1.Literal(literal_1.LiteralTag.INTERGER, value);
        }
        else {
            valLiteral = new literal_1.Literal(literal_1.LiteralTag.DOUBLE, value);
        }
    }
    else if (prop.getValue().kind == ts.SyntaxKind.TrueKeyword || prop.getValue().kind == ts.SyntaxKind.FalseKeyword) {
        if (prop.getValue().kind == ts.SyntaxKind.TrueKeyword) {
            valLiteral = new literal_1.Literal(literal_1.LiteralTag.BOOLEAN, true);
        }
        else {
            valLiteral = new literal_1.Literal(literal_1.LiteralTag.BOOLEAN, false);
        }
    }
    else if (prop.getValue().kind == ts.SyntaxKind.NullKeyword) {
        valLiteral = new literal_1.Literal(literal_1.LiteralTag.NULLVALUE, null);
    }
    else {
        throw new Error("Unreachable Kind of Literal");
    }
    return valLiteral;
}
function compileAccessorProperty(pandaGen, compiler, objReg, prop) {
    var getterReg = pandaGen.getTemp();
    var setterReg = pandaGen.getTemp();
    var propReg = pandaGen.getTemp();
    var propName = String(prop.getName());
    var accessor;
    if (prop.getGetter() !== undefined) {
        var getter = prop.getGetter();
        createMethodOrAccessor(pandaGen, compiler, objReg, getter);
        pandaGen.storeAccumulator(getter, getterReg);
        accessor = getter;
    }
    if (prop.getSetter() !== undefined) {
        var setter = prop.getSetter();
        createMethodOrAccessor(pandaGen, compiler, objReg, setter);
        pandaGen.storeAccumulator(setter, setterReg);
        accessor = setter;
    }
    pandaGen.loadAccumulatorString(accessor, propName);
    pandaGen.storeAccumulator(accessor, propReg);
    if (prop.getGetter() !== undefined && prop.getSetter() !== undefined) {
        pandaGen.defineGetterSetterByValue(accessor, objReg, propReg, getterReg, setterReg, false);
    }
    else if (ts.isGetAccessorDeclaration(accessor)) {
        pandaGen.defineGetterSetterByValue(accessor, objReg, propReg, getterReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), false);
    }
    else {
        pandaGen.defineGetterSetterByValue(accessor, objReg, propReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), setterReg, false);
    }
    pandaGen.freeTemps(getterReg, setterReg, propReg);
}
function compileSpreadProperty(compiler, prop, objReg) {
    var pandaGen = compiler.getPandaGen();
    var srcObj = pandaGen.getTemp();
    compiler.compileExpression(prop.getValue());
    pandaGen.storeAccumulator(prop.getValue(), srcObj);
    pandaGen.copyDataProperties(prop.getValue().parent, objReg, srcObj);
    pandaGen.freeTemps(srcObj);
}
function compileComputedProperty(compiler, prop, objReg) {
    // Computed can't know its key in compile time, create Object now.
    var pandaGen = compiler.getPandaGen();
    var keyReg = pandaGen.getTemp();
    compiler.compileExpression(prop.getName().expression);
    pandaGen.storeAccumulator(prop.getValue(), keyReg);
    switch (prop.getValue().kind) {
        case ts.SyntaxKind.PropertyAssignment: {
            compiler.compileExpression(prop.getValue().initializer);
            pandaGen.storeOwnProperty(prop.getValue(), objReg, keyReg);
            break;
        }
        case ts.SyntaxKind.MethodDeclaration: {
            createMethodOrAccessor(pandaGen, compiler, objReg, prop.getValue());
            pandaGen.storeOwnProperty(prop.getValue(), objReg, keyReg);
            break;
        }
        case ts.SyntaxKind.GetAccessor: {
            var accessorReg = pandaGen.getTemp();
            var getter = prop.getValue();
            createMethodOrAccessor(pandaGen, compiler, objReg, getter);
            pandaGen.storeAccumulator(getter, accessorReg);
            pandaGen.defineGetterSetterByValue(getter, objReg, keyReg, accessorReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), true);
            pandaGen.freeTemps(accessorReg);
            break;
        }
        case ts.SyntaxKind.SetAccessor: {
            var accessorReg = pandaGen.getTemp();
            var setter = prop.getValue();
            createMethodOrAccessor(pandaGen, compiler, objReg, setter);
            pandaGen.storeAccumulator(setter, accessorReg);
            pandaGen.defineGetterSetterByValue(setter, objReg, keyReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), accessorReg, true);
            pandaGen.freeTemps(accessorReg);
            break;
        }
    }
    pandaGen.freeTemps(keyReg);
}
function compileProtoProperty(compiler, prop, objReg) {
    var pandaGen = compiler.getPandaGen();
    var protoReg = pandaGen.getTemp();
    compiler.compileExpression(prop.getValue());
    pandaGen.storeAccumulator(prop.getValue().parent, protoReg);
    pandaGen.setObjectWithProto(prop.getValue().parent, protoReg, objReg);
    pandaGen.freeTemps(protoReg);
}
function setUncompiledProperties(compiler, pandaGen, properties, objReg) {
    for (var _i = 0, properties_3 = properties; _i < properties_3.length; _i++) {
        var prop = properties_3[_i];
        if (!prop.isCompiled()) {
            switch (prop.getKind()) {
                case properties_1.PropertyKind.Accessor: {
                    compileAccessorProperty(pandaGen, compiler, objReg, prop);
                    break;
                }
                case properties_1.PropertyKind.Spread: {
                    compileSpreadProperty(compiler, prop, objReg);
                    break;
                }
                case properties_1.PropertyKind.Computed: {
                    compileComputedProperty(compiler, prop, objReg);
                    break;
                }
                case properties_1.PropertyKind.Constant:
                case properties_1.PropertyKind.Variable: {
                    if (ts.isMethodDeclaration(prop.getValue())) {
                        createMethodOrAccessor(pandaGen, compiler, objReg, prop.getValue());
                    }
                    else {
                        compiler.compileExpression(prop.getValue());
                    }
                    pandaGen.storeOwnProperty(prop.getValue().parent, objReg, (prop.getName()));
                    break;
                }
                case properties_1.PropertyKind.Prototype: {
                    compileProtoProperty(compiler, prop, objReg);
                    break;
                }
                default: {
                    throw new Error("Unreachable PropertyKind for NullValue setting");
                }
            }
        }
    }
}
function createMethodOrAccessor(pandaGen, compiler, objReg, func) {
    var internalName = compiler.getCompilerDriver().getFuncInternalName(func);
    if (ts.isMethodDeclaration(func) && func.asteriskToken) {
        pandaGen.defineFunction(func, func, internalName);
    }
    else {
        pandaGen.defineMethod(func, internalName, objReg);
    }
}
exports.createMethodOrAccessor = createMethodOrAccessor;
//# sourceMappingURL=objectLiteralExpression.js.map