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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.compileDestructuring = void 0;
var ts = __importStar(require("typescript"));
var lreference_1 = require("./base/lreference");
var util_1 = require("./base/util");
var vregisterCache_1 = require("./base/vregisterCache");
var irnodes_1 = require("./irnodes");
var jshelpers_1 = __importDefault(require("./jshelpers"));
var tryStatement_1 = require("./statement/tryStatement");
var iterator_1 = require("./base/iterator");
function compileDestructuring(pattern, pandaGen, compiler) {
    var rhs = pandaGen.getTemp();
    pandaGen.storeAccumulator(pattern, rhs);
    if (util_1.isArrayBindingOrAssignmentPattern(pattern)) {
        compileArrayDestructuring(pattern, pandaGen, compiler);
    }
    if (util_1.isObjectBindingOrAssignmentPattern(pattern)) {
        compileObjectDestructuring(pattern, pandaGen, compiler);
    }
    pandaGen.loadAccumulator(pattern, rhs);
    pandaGen.freeTemps(rhs);
}
exports.compileDestructuring = compileDestructuring;
function compileArrayDestructuring(arr, pandaGen, compiler) {
    var iter = pandaGen.getTemp();
    var nextMethod = pandaGen.getTemp();
    var iterDone = pandaGen.getTemp();
    var iterValue = pandaGen.getTemp();
    var nextResult = pandaGen.getTemp();
    var exception = pandaGen.getTemp();
    var isDeclaration = ts.isArrayBindingPattern(arr) ? true : false;
    // get iterator
    var iterator = new iterator_1.Iterator({ iterator: iter, nextMethod: nextMethod }, iterDone, iterValue, pandaGen, arr);
    iterator.getIterator();
    // prepare try-catch for iterate over all the elements
    var tryBeginLabel = new irnodes_1.Label();
    var tryEndLabel = new irnodes_1.Label();
    var catchBeginLabel = new irnodes_1.Label();
    var catchEndLabel = new irnodes_1.Label();
    var normalClose = new irnodes_1.Label();
    var endLabel = new irnodes_1.Label();
    new tryStatement_1.CatchTable(pandaGen, catchBeginLabel, new tryStatement_1.LabelPair(tryBeginLabel, tryEndLabel));
    // try start
    pandaGen.label(arr, tryBeginLabel);
    for (var i = 0; i < arr.elements.length; i++) {
        var element = arr.elements[i];
        iterator.callNext(nextResult);
        // if a hole exist, just let the iterator step ahead
        if (ts.isOmittedExpression(element)) {
            continue;
        }
        // if its spread element
        if ((!isDeclaration && ts.isSpreadElement(element)) ||
            (isDeclaration && element.dotDotDotToken)) {
            emitRestElement(isDeclaration ? element.name : element.expression, iterator, nextResult, pandaGen, compiler, isDeclaration);
            pandaGen.branch(element, endLabel);
            break;
        }
        var hasInit = false;
        var target = isDeclaration ? element.name : element;
        var init = undefined;
        // in case init is present
        if (!isDeclaration && ts.isBinaryExpression(element)) {
            if (element.operatorToken.kind != ts.SyntaxKind.EqualsToken) {
                throw new Error("Invalid destructuring assignment target");
            }
            target = element.left;
            init = element.right;
            hasInit = true;
        }
        else if (isDeclaration && element.initializer) {
            init = element.initializer;
            hasInit = true;
        }
        var lRef = lreference_1.LReference.generateLReference(compiler, target, isDeclaration ? true : false);
        var getDefaultLabel = new irnodes_1.Label();
        var getUndefinedLabel = new irnodes_1.Label();
        var storeLabel = new irnodes_1.Label();
        iterator.iteratorComplete(nextResult);
        pandaGen.condition(element, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True), hasInit ? getDefaultLabel : getUndefinedLabel);
        // iterdone == false, get current itervalue
        iterator.iteratorValue(nextResult);
        if (hasInit) {
            pandaGen.condition(element, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), getDefaultLabel);
            pandaGen.loadAccumulator(element, iterator.getCurrentValue());
            pandaGen.branch(element, storeLabel);
            pandaGen.label(element, getDefaultLabel);
            compiler.compileExpression(init);
            pandaGen.branch(element, storeLabel);
        }
        else {
            pandaGen.branch(element, storeLabel);
        }
        pandaGen.label(element, getUndefinedLabel);
        pandaGen.loadAccumulator(element, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
        pandaGen.label(element, storeLabel);
        lRef.setValue();
    }
    // end of try
    pandaGen.label(arr, tryEndLabel);
    pandaGen.loadAccumulator(arr, iterator.getCurrrentDone());
    pandaGen.condition(arr, ts.SyntaxKind.EqualsEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True), normalClose);
    // nothing need to be done
    pandaGen.branch(arr, endLabel);
    // if any exception ocurrs, store it, close iterator and rethrow exception
    pandaGen.label(arr, catchBeginLabel);
    pandaGen.storeAccumulator(arr, exception);
    iterator.close();
    pandaGen.loadAccumulator(arr, exception);
    pandaGen["throw"](arr);
    pandaGen.label(arr, catchEndLabel);
    // if iterDone is not true after normal completion, close iterator
    pandaGen.label(arr, normalClose);
    iterator.close();
    pandaGen.label(arr, endLabel);
    pandaGen.freeTemps(iter, nextMethod, iterDone, iterValue, nextResult, exception);
}
function emitRestElement(restElement, iterator, iterResult, pandaGen, compiler, isDeclaration) {
    var arrayObj = pandaGen.getTemp();
    var index = pandaGen.getTemp();
    var nextLabel = new irnodes_1.Label();
    var doneLabel = new irnodes_1.Label();
    // create left reference for rest element
    var target = restElement;
    var lRef = lreference_1.LReference.generateLReference(compiler, target, isDeclaration);
    // create an empty array first
    pandaGen.createEmptyArray(restElement);
    pandaGen.storeAccumulator(restElement, arrayObj);
    // index = 0
    pandaGen.loadAccumulatorInt(restElement, 0);
    pandaGen.storeAccumulator(restElement, index);
    pandaGen.label(restElement, nextLabel);
    // if iterDone == true, done with the process of building array
    iterator.iteratorComplete(iterResult);
    pandaGen.condition(restElement, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.True), doneLabel);
    // get value from iter and store it to arrayObj
    // getIterValue(iterRecord, iterValue, pandaGen, restElement);
    iterator.iteratorValue(iterResult);
    pandaGen.storeObjProperty(restElement, arrayObj, index);
    // index++
    pandaGen.loadAccumulatorInt(restElement, 1);
    pandaGen.binary(restElement, ts.SyntaxKind.PlusToken, index);
    pandaGen.storeAccumulator(restElement, index);
    iterator.callNext(iterResult);
    pandaGen.branch(restElement, nextLabel);
    pandaGen.label(restElement, doneLabel);
    pandaGen.loadAccumulator(restElement, arrayObj);
    lRef.setValue();
    pandaGen.freeTemps(arrayObj, index);
}
function compileObjectDestructuring(obj, pandaGen, compiler) {
    var value = pandaGen.getTemp();
    pandaGen.storeAccumulator(obj, value);
    var isDeclaration = ts.isObjectLiteralExpression(obj) ? false : true;
    var elements = isDeclaration ? obj.elements : obj.properties;
    var elementsLength = elements.length;
    // check if value is coercible
    if (elementsLength == 0 ||
        (isDeclaration && isRestElement(elements[0])) ||
        (!isDeclaration && ts.isSpreadAssignment(elements[0]))) {
        var notNullish = new irnodes_1.Label();
        var nullLish = new irnodes_1.Label();
        pandaGen.loadAccumulator(obj, value);
        pandaGen.condition(obj, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Null), nullLish);
        pandaGen.loadAccumulator(obj, value);
        pandaGen.condition(obj, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), nullLish);
        pandaGen.branch(obj, notNullish);
        // value == null or undefined, throw error
        pandaGen.label(obj, nullLish);
        pandaGen.throwObjectNonCoercible(obj);
        pandaGen.label(obj, notNullish);
    }
    // create before to store the properties
    var properties = new Array();
    var excludedProp = new Array();
    for (var i = 0; i < elementsLength; i++) {
        var tmp = pandaGen.getTemp();
        properties.push(tmp);
    }
    for (var i = 0; i < elementsLength; i++) {
        var element = elements[i];
        // emit rest property
        if ((isDeclaration && isRestElement(element)) ||
            (!isDeclaration && ts.isSpreadAssignment(element))) {
            emitRestProperty(element, excludedProp, value, pandaGen, compiler);
            break;
        }
        excludedProp.push(properties[i]);
        var loadedValue = pandaGen.getTemp();
        var key = void 0;
        var target = element;
        var init = undefined;
        var hasInit = false;
        if (isDeclaration) {
            var bindingElement = element;
            target = bindingElement.name;
            if (bindingElement.propertyName) {
                key = bindingElement.propertyName;
            }
            else {
                key = bindingElement.name;
            }
            // obtain init if exists
            if (bindingElement.initializer) {
                hasInit = true;
                init = bindingElement.initializer;
            }
        }
        else {
            if (ts.isPropertyAssignment(element)) {
                key = element.name;
                var targetExpr = element.initializer;
                if (ts.isBinaryExpression(targetExpr)) {
                    if (targetExpr.operatorToken.kind != ts.SyntaxKind.EqualsToken) {
                        throw new Error("Invalid destructuring target");
                    }
                    target = targetExpr.left;
                    init = targetExpr.right;
                }
                else {
                    target = targetExpr;
                }
            }
            else if (ts.isShorthandPropertyAssignment(element)) {
                key = element.name;
                target = element.name;
                init = element.objectAssignmentInitializer ? element.objectAssignmentInitializer : undefined;
            }
            else {
                throw new Error("Invalid destructuring target");
            }
        }
        // compile key 
        if (ts.isComputedPropertyName(key)) {
            compiler.compileExpression(key.expression);
        }
        else {
            // compiler.compileExpression(key);
            if (ts.isIdentifier(key)) {
                var keyName = jshelpers_1["default"].getTextOfIdentifierOrLiteral(key);
                pandaGen.loadAccumulatorString(key, keyName);
            }
            else {
                compiler.compileExpression(key);
            }
        }
        pandaGen.storeAccumulator(key, properties[i]);
        // create left reference
        var lRef = lreference_1.LReference.generateLReference(compiler, target, isDeclaration);
        // load obj property from rhs, return undefined if no corresponding property exists
        pandaGen.loadObjProperty(element, value, properties[i]);
        pandaGen.storeAccumulator(element, loadedValue);
        var getDefaultLabel = new irnodes_1.Label();
        var storeLabel = new irnodes_1.Label();
        if (hasInit) {
            pandaGen.condition(element, ts.SyntaxKind.ExclamationEqualsEqualsToken, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), getDefaultLabel);
            // load the new value
            pandaGen.loadAccumulator(element, loadedValue);
            pandaGen.branch(element, storeLabel);
            // use default value
            pandaGen.label(element, getDefaultLabel);
            compiler.compileExpression(init);
            pandaGen.label(element, storeLabel);
        }
        lRef.setValue();
        pandaGen.freeTemps(loadedValue);
    }
    pandaGen.freeTemps.apply(pandaGen, __spreadArrays([value], properties));
}
function emitRestProperty(restProperty, excludedProp, obj, pandaGen, compiler) {
    var isDeclaration = ts.isBindingElement(restProperty) ? true : false;
    var target = isDeclaration ? restProperty.name : restProperty.expression;
    var lRef = lreference_1.LReference.generateLReference(compiler, target, true);
    var undefinedReg = pandaGen.getTemp();
    if (excludedProp.length == 0) {
        pandaGen.loadAccumulator(restProperty, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined));
        pandaGen.storeAccumulator(restProperty, undefinedReg);
        excludedProp.push(undefinedReg);
    }
    // Create a Object with the information of excluded properties
    pandaGen.createObjectWithExcludedKeys(restProperty, obj, excludedProp);
    lRef.setValue();
    pandaGen.freeTemps(undefinedReg);
}
function isRestElement(node) {
    if (node.dotDotDotToken) {
        return true;
    }
    return false;
}
//# sourceMappingURL=compilerUtils.js.map