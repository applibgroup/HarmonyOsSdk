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
exports.createArrayFromElements = exports.compileArrayLiteralExpression = void 0;
var ts = __importStar(require("typescript"));
var jshelpers = __importStar(require("../jshelpers"));
var literal_1 = require("../base/literal");
var properties_1 = require("../base/properties");
var pandagen_1 = require("../pandagen");
var numericLiteral_1 = require("./numericLiteral");
function compileArrayLiteralExpression(compiler, node) {
    var pandaGen = compiler.getPandaGen();
    var arrayObj = pandaGen.getTemp();
    createArrayFromElements(node, compiler, node.elements, arrayObj);
    pandaGen.freeTemps(arrayObj);
}
exports.compileArrayLiteralExpression = compileArrayLiteralExpression;
function createArrayFromElements(node, compiler, elements, arrayObj) {
    var pandaGen = compiler.getPandaGen();
    // empty Array
    if (elements.length == 0) {
        pandaGen.createEmptyArray(node);
        pandaGen.storeAccumulator(node, arrayObj);
        return;
    }
    var literalBuffer = new literal_1.LiteralBuffer();
    var indexReg = pandaGen.getTemp();
    var arrayCreated = false;
    var hasSpread = false;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (properties_1.isConstantExpr(element)) {
            var elem = parseConstantExpr(element);
            if (!arrayCreated) {
                literalBuffer.addLiterals(elem);
                if (i == elements.length - 1) {
                    emitCreateArrayWithBuffer(pandaGen, literalBuffer, element);
                    pandaGen.storeAccumulator(element, arrayObj);
                    arrayCreated = true;
                }
                continue;
            }
            compiler.compileExpression(element);
            if (hasSpread) {
                storeElementIfSpreadExisted(pandaGen, element, arrayObj, indexReg);
            }
            else {
                pandaGen.storeOwnProperty(element, arrayObj, i);
            }
            continue;
        }
        if (ts.isSpreadElement(element)) {
            if (!arrayCreated) {
                emitCreateArrayWithBuffer(pandaGen, literalBuffer, element);
                pandaGen.storeAccumulator(element, arrayObj);
                arrayCreated = true;
            }
            if (hasSpread) {
                storeSpreadElement(compiler, pandaGen, element, arrayObj, indexReg);
            }
            else {
                hasSpread = true;
                pandaGen.loadAccumulatorInt(element, i);
                pandaGen.storeAccumulator(element, indexReg);
                storeSpreadElement(compiler, pandaGen, element, arrayObj, indexReg);
            }
            continue;
        }
        if (ts.isOmittedExpression(element)) {
            if (!arrayCreated) {
                emitCreateArrayWithBuffer(pandaGen, literalBuffer, element);
                pandaGen.storeAccumulator(element, arrayObj);
                arrayCreated = true;
            }
            if (i == elements.length - 1) {
                // omittedExpression is last element, we need set the array's length
                if (hasSpread) {
                    pandaGen.loadAccumulator(element, indexReg);
                    pandaGen.storeObjProperty(element, arrayObj, "length");
                    // no need to increment index since it's the last element
                }
                else {
                    pandaGen.loadAccumulatorInt(element, elements.length);
                    pandaGen.storeObjProperty(element, arrayObj, "length");
                }
            }
            continue;
        }
        // non-constant elements
        if (!arrayCreated) {
            emitCreateArrayWithBuffer(pandaGen, literalBuffer, element);
            pandaGen.storeAccumulator(element, arrayObj);
            arrayCreated = true;
        }
        compiler.compileExpression(element);
        if (hasSpread) {
            storeElementIfSpreadExisted(pandaGen, element, arrayObj, indexReg);
        }
        else {
            pandaGen.storeOwnProperty(element, arrayObj, i);
        }
    }
    pandaGen.loadAccumulator(node, arrayObj);
    pandaGen.freeTemps(indexReg);
}
exports.createArrayFromElements = createArrayFromElements;
function parseConstantExpr(element) {
    var elem;
    switch (element.kind) {
        case ts.SyntaxKind.FalseKeyword:
            elem = new literal_1.Literal(literal_1.LiteralTag.BOOLEAN, false);
            break;
        case ts.SyntaxKind.TrueKeyword:
            elem = new literal_1.Literal(literal_1.LiteralTag.BOOLEAN, true);
            break;
        case ts.SyntaxKind.StringLiteral:
            elem = new literal_1.Literal(literal_1.LiteralTag.STRING, jshelpers.getTextOfIdentifierOrLiteral(element));
            break;
        case ts.SyntaxKind.NumericLiteral: {
            var value = Number.parseFloat(jshelpers.getTextOfIdentifierOrLiteral(element));
            if (numericLiteral_1.isInteger(value)) {
                elem = new literal_1.Literal(literal_1.LiteralTag.INTERGER, value);
            }
            else {
                elem = new literal_1.Literal(literal_1.LiteralTag.DOUBLE, value);
            }
            break;
        }
        case ts.SyntaxKind.NullKeyword:
            elem = new literal_1.Literal(literal_1.LiteralTag.NULLVALUE, null);
            break;
        default:
            throw new Error("invalid constant expression");
    }
    return elem;
}
function emitCreateArrayWithBuffer(pandaGen, literalBuffer, element) {
    if (literalBuffer.isEmpty()) {
        pandaGen.createEmptyArray(element);
    }
    else {
        var literalArrayBuffer = pandagen_1.PandaGen.getLiteralArrayBuffer();
        var bufferIdx = literalArrayBuffer.length;
        literalArrayBuffer.push(literalBuffer);
        pandaGen.createArrayWithBuffer(element, bufferIdx);
    }
}
function storeElementIfSpreadExisted(pandaGen, element, arrayObj, indexReg) {
    pandaGen.storeOwnProperty(element, arrayObj, indexReg);
    pandaGen.unary(element, ts.SyntaxKind.PlusPlusToken, indexReg);
    pandaGen.storeAccumulator(element, indexReg);
}
function storeSpreadElement(compiler, pandaGen, element, arrayObj, indexReg) {
    compiler.compileExpression(element.expression);
    pandaGen.storeArraySpreadElement(element, arrayObj, indexReg);
    pandaGen.storeAccumulator(element, indexReg);
}
//# sourceMappingURL=arrayLiteralExpression.js.map