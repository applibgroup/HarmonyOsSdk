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
exports.checkValidUseSuperBeforeSuper = exports.compileSuperProperty = exports.shouldReturnThisForConstruct = exports.setPrototypeAttributes = exports.getClassNameForConstructor = exports.defineClassMember = exports.isContainConstruct = exports.compileSuperCall = exports.compileConstructor = exports.AddCtor2Class = exports.compileClassDeclaration = void 0;
var ts = __importStar(require("typescript"));
var lreference_1 = require("../base/lreference");
var util_1 = require("../base/util");
var vregisterCache_1 = require("../base/vregisterCache");
var arrayLiteralExpression_1 = require("../expression/arrayLiteralExpression");
var objectLiteralExpression_1 = require("../expression/objectLiteralExpression");
var literal_1 = require("../base/literal");
var properties_1 = require("../base/properties");
var parenthesizedExpression_1 = require("../expression/parenthesizedExpression");
var jshelpers = __importStar(require("../jshelpers"));
var pandagen_1 = require("../pandagen");
var scope_1 = require("../scope");
function compileClassDeclaration(compiler, stmt) {
    compiler.pushScope(stmt);
    var pandaGen = compiler.getPandaGen();
    var namedPropertyMap = new Map();
    var properties = [];
    var classFields = [];
    properties = generatePropertyFromExpr(stmt, classFields, namedPropertyMap);
    var classReg = pandaGen.getTemp();
    var baseVreg = compileHeritageClause(compiler, stmt);
    var classBuffer = new literal_1.LiteralBuffer();
    var propertyIndex = 0;
    var staticItemsNum = 0;
    var hasConstructor = isContainConstruct(stmt);
    for (; propertyIndex < properties.length; propertyIndex++) {
        var prop = properties[propertyIndex];
        var index = propertyIndex;
        if (!hasConstructor) {
            index = propertyIndex + 1;
        }
        var tmpVreg = pandaGen.getTemp();
        if (prop.getKind() == properties_1.PropertyKind.Constant) {
            staticItemsNum++;
            var nameLiteral_1 = new literal_1.Literal(literal_1.LiteralTag.STRING, String(prop.getName()));
            classBuffer.addLiterals(nameLiteral_1);
            compiler.compileExpression(prop.getValue());
            pandaGen.storeAccumulator(prop.getValue(), tmpVreg);
            prop.setCompiled();
        }
        if (prop.getKind() == properties_1.PropertyKind.Variable) {
            if (prop.getValue().kind != ts.SyntaxKind.Constructor) {
                if (jshelpers.hasStaticModifier(prop.getValue())) {
                    staticItemsNum++;
                }
                var nameLiteral_2 = new literal_1.Literal(literal_1.LiteralTag.STRING, String(prop.getName()));
                classBuffer.addLiterals(nameLiteral_2);
            }
            if (ts.isMethodDeclaration(prop.getValue())) {
                var methodLiteral = new literal_1.Literal(literal_1.LiteralTag.METHOD, compiler.getCompilerDriver().getFuncInternalName(prop.getValue()));
                classBuffer.addLiterals(methodLiteral);
            }
            else {
                if (!ts.isConstructorDeclaration(prop.getValue())) {
                    var valLiteral = new literal_1.Literal(literal_1.LiteralTag.NULLVALUE, null);
                    classBuffer.addLiterals(valLiteral);
                    compiler.compileExpression(prop.getValue());
                    pandaGen.storeAccumulator(prop.getValue(), tmpVreg);
                }
            }
            prop.setCompiled();
        }
        pandaGen.freeTemps(tmpVreg);
        if (prop.getKind() == properties_1.PropertyKind.Computed || prop.getKind() == properties_1.PropertyKind.Accessor) {
            break;
        }
    }
    var notStaticItemsNum = propertyIndex - staticItemsNum;
    var nameLiteral = new literal_1.Literal(literal_1.LiteralTag.INTERGER, hasConstructor ? notStaticItemsNum - 1 : notStaticItemsNum);
    classBuffer.addLiterals(nameLiteral);
    createClassLiteralBuf(compiler, classBuffer, stmt, [baseVreg, classReg]);
    compileUnCompiledProperty(compiler, properties, classReg, hasConstructor);
    pandaGen.loadAccumulator(stmt, classReg);
    if (stmt.name) {
        var className = jshelpers.getTextOfIdentifierOrLiteral(stmt.name);
        var classScope = compiler.getRecorder().getScopeOfNode(stmt);
        var classInfo = classScope.find(className);
        classInfo.v.initialize();
        pandaGen.storeAccToLexEnv(stmt, classInfo.scope, classInfo.level, classInfo.v, true);
    }
    pandaGen.freeTemps(classReg, baseVreg);
    compiler.popScope();
}
exports.compileClassDeclaration = compileClassDeclaration;
function AddCtor2Class(recorder, classNode, scope) {
    var ctorNode;
    var hasHeritage = classNode.heritageClauses && classNode.heritageClauses.length;
    var statement;
    var superCallNode = ts.createSuper();
    if (hasHeritage) {
        var parameter = ts.createParameter(undefined, undefined, ts.createToken(ts.SyntaxKind.DotDotDotToken), "args");
        ctorNode = ts.createConstructor(undefined, undefined, [parameter], undefined);
        var callNode = ts.createCall(superCallNode, undefined, [ts.createSpread(ts.createIdentifier("args"))]);
        superCallNode.parent = callNode;
        superCallNode.pos = classNode.pos;
        superCallNode.end = classNode.pos;
        statement = ts.createExpressionStatement(callNode);
        callNode.parent = statement;
        callNode.pos = classNode.pos;
        callNode.end = classNode.pos;
    }
    else {
        ctorNode = ts.createConstructor(undefined, undefined, [], undefined);
    }
    if (statement) {
        ctorNode.body = ts.createBlock([statement]);
        statement.parent = ctorNode;
        statement.pos = classNode.pos;
        statement.end = classNode.pos;
    }
    else {
        ctorNode.body = ts.createBlock([]);
    }
    ctorNode.parent = classNode;
    ctorNode.pos = classNode.pos;
    ctorNode.end = classNode.pos;
    ctorNode.body.parent = ctorNode;
    var parentScope = recorder.getScopeOfNode(classNode);
    recorder.compilerDriver.getFuncId(classNode);
    var funcScope = recorder.buildVariableScope(scope, ctorNode);
    funcScope.setParent(parentScope);
    var ctorBodyScope = new scope_1.LocalScope(funcScope);
    ctorBodyScope.setParent(funcScope);
    recorder.setScopeMap(ctorNode, funcScope);
    recorder.setScopeMap(ctorNode.body, ctorBodyScope);
    recorder.recordFuncName(ctorNode);
    recorder.recordFunctionParameters(ctorNode);
}
exports.AddCtor2Class = AddCtor2Class;
function compileUnCompiledProperty(compiler, properties, classReg, hasConstructor) {
    var pandaGen = compiler.getPandaGen();
    for (var propertyIndex = 0; propertyIndex < properties.length; propertyIndex++) {
        var prop = properties[propertyIndex];
        if (prop.isCompiled()) {
            continue;
        }
        var index = propertyIndex;
        if (!hasConstructor) {
            index = propertyIndex + 1;
        }
        switch (prop.getKind()) {
            case properties_1.PropertyKind.Constant:
                compiler.compileExpression(prop.getValue());
                pandaGen.storeOwnProperty(prop.getValue().parent, classReg, prop.getName());
                break;
            case properties_1.PropertyKind.Variable:
                compileUnCompiledVariable(compiler, prop, classReg);
                break;
            case properties_1.PropertyKind.Computed:
                var keyReg = pandaGen.getTemp();
                compiler.compileExpression(prop.getName().expression);
                pandaGen.storeAccumulator(prop.getValue(), keyReg);
                compileComputedProperty(compiler, prop, classReg, keyReg);
                break;
            case properties_1.PropertyKind.Accessor:
                setClassAccessor(pandaGen, compiler, classReg, prop);
                break;
            default:
                throw new Error("Unreachable PropertyKind for NullValue setting");
        }
    }
}
function compileUnCompiledVariable(compiler, prop, classReg) {
    var pandaGen = compiler.getPandaGen();
    var proptoReg = pandaGen.getTemp();
    var tmpReg = pandaGen.getTemp();
    var flag = false;
    if (ts.isMethodDeclaration(prop.getValue())) {
        flag = createClassMethodOrAccessor(compiler, classReg, proptoReg, tmpReg, prop.getValue());
    }
    else {
        compiler.compileExpression(prop.getValue());
        flag = setPrototypeAttributes(compiler, prop.getValue().parent, classReg, proptoReg, tmpReg);
    }
    pandaGen.storeOwnProperty(prop.getValue().parent, flag ? proptoReg : classReg, prop.getName());
    pandaGen.freeTemps(proptoReg, tmpReg);
    prop.setCompiled();
}
function createClassLiteralBuf(compiler, classBuffer, stmt, vregs) {
    var pandaGen = compiler.getPandaGen();
    var classLiteralBuf = pandagen_1.PandaGen.getLiteralArrayBuffer();
    var buffIdx = classLiteralBuf.length;
    var internalName = compiler.getCompilerDriver().getInternalNameForCtor(stmt);
    classLiteralBuf.push(classBuffer);
    pandaGen.defineClassWithBuffer(stmt, internalName, buffIdx, vregs[0]);
    pandaGen.storeAccumulator(stmt, vregs[1]);
}
function compileConstructor(compiler, node, unreachableFlag) {
    var pandaGen = compiler.getPandaGen();
    var members = node.parent.members;
    for (var index = 0; index < members.length; index++) {
        var decl = members[index];
        if (ts.isPropertyDeclaration(decl) && !jshelpers.hasStaticModifier(decl)) {
            var lref = lreference_1.LReference.createLRef(compiler, decl.name, true);
            if (decl.initializer) {
                compiler.compileExpression(decl.initializer);
            }
            lref.setValue();
        }
    }
    if (unreachableFlag) {
        return;
    }
    var thisReg = pandaGen.getTemp();
    compiler.getThis(node, thisReg);
    pandaGen.loadAccumulator(node, thisReg);
    checkValidUseSuperBeforeSuper(compiler, node);
    pandaGen["return"](node);
    pandaGen.freeTemps(thisReg);
}
exports.compileConstructor = compileConstructor;
function compileSuperCall(compiler, node, args, hasSpread) {
    var pandaGen = compiler.getPandaGen();
    // make sure "this" is stored in lexical env if needed
    var curScope = compiler.getCurrentScope();
    var _a = curScope.find("this"), scope = _a.scope, level = _a.level, v = _a.v;
    if (scope && level > 0) {
        scope.setLexVar(v, curScope);
    }
    if (hasSpread) {
        var argArray = pandaGen.getTemp();
        arrayLiteralExpression_1.createArrayFromElements(node, compiler, node.arguments, argArray);
        loadCtorObj(node, compiler);
        pandaGen.superCallSpread(node, argArray);
        pandaGen.freeTemps(argArray);
    }
    else {
        var num = args.length;
        var startReg = num ? args[0] : vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined);
        loadCtorObj(node, compiler);
        pandaGen.superCall(node, num, startReg);
    }
    var tmpReg = pandaGen.getTemp();
    pandaGen.storeAccumulator(node, tmpReg);
    checkValidUseSuperBeforeSuper(compiler, node);
    pandaGen.loadAccumulator(node, tmpReg);
    pandaGen.freeTemps(tmpReg);
    compiler.setThis(node);
}
exports.compileSuperCall = compileSuperCall;
function loadCtorObj(node, compiler) {
    var recorder = compiler.getRecorder();
    var pandaGen = compiler.getPandaGen();
    var nearestFunc = jshelpers.getContainingFunction(node);
    var nearestFuncScope = recorder.getScopeOfNode(nearestFunc);
    if (ts.isConstructorDeclaration(nearestFunc)) {
        var funcObj = nearestFuncScope.findLocal("4funcObj");
        pandaGen.loadAccumulator(node, pandaGen.getVregForVariable(funcObj));
    }
    else {
        var outerFunc = jshelpers.getContainingFunction(nearestFunc);
        var outerFuncScope = recorder.getScopeOfNode(outerFunc);
        outerFuncScope.pendingCreateEnv();
        var level = 1;
        while (!ts.isConstructorDeclaration(outerFunc)) {
            outerFunc = jshelpers.getContainingFunction(outerFunc);
            outerFuncScope.pendingCreateEnv();
            level;
        }
        var funcObj = outerFuncScope.findLocal("4funcObj");
        outerFuncScope.setLexVar(funcObj, outerFuncScope);
        var slot = funcObj.idxLex;
        pandaGen.loadLexicalVar(vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.LexEnv), node, level, slot);
    }
}
function isContainConstruct(stmt) {
    var members = stmt.members;
    for (var index = 0; index < members.length; index++) {
        var member = members[index];
        if (ts.isConstructorDeclaration(member)) {
            return true;
        }
    }
    return false;
}
exports.isContainConstruct = isContainConstruct;
function defineClassMember(propName, propValue, propKind, properties, namedPropertyMap) {
    var staticFlag = false;
    if (propKind == properties_1.PropertyKind.Computed || propKind == properties_1.PropertyKind.Spread) {
        var prop = new properties_1.Property(propKind, propName);
        prop.setValue(propValue);
        if (jshelpers.hasStaticModifier(propValue)) {
            staticFlag = true;
            properties.push(prop);
        }
        else {
            properties.unshift(prop);
        }
    }
    else {
        var name_str = properties_1.propertyKeyAsString(propName);
        if (!checkAndUpdateProperty(namedPropertyMap, name_str, propKind, propValue)) {
            var prop = new properties_1.Property(propKind, propName);
            if (propKind == properties_1.PropertyKind.Accessor) {
                if (ts.isGetAccessorDeclaration(propValue)) {
                    prop.setGetter(propValue);
                }
                else if (ts.isSetAccessorDeclaration(propValue)) {
                    prop.setSetter(propValue);
                }
            }
            else {
                prop.setValue(propValue);
            }
            if (jshelpers.hasStaticModifier(propValue)) {
                staticFlag = true;
                properties.push(prop);
            }
            else {
                properties.unshift(prop);
            }
            namedPropertyMap.set(name_str, prop);
        }
    }
    return staticFlag;
}
exports.defineClassMember = defineClassMember;
function compileHeritageClause(compiler, node) {
    var pandaGen = compiler.getPandaGen();
    var baseVreg = pandaGen.getTemp();
    if (node.heritageClauses && node.heritageClauses.length) {
        var heritageClause = node.heritageClauses[0];
        if (heritageClause.types.length) {
            var exp = heritageClause.types[0];
            compiler.compileExpression(exp.expression);
            pandaGen.storeAccumulator(exp.expression, baseVreg);
            return baseVreg;
        }
    }
    pandaGen.moveVreg(node, baseVreg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.HOLE));
    return baseVreg;
}
function getClassNameForConstructor(classNode) {
    var className = "";
    if (!isAnonymousClass(classNode)) {
        className = jshelpers.getTextOfIdentifierOrLiteral(classNode.name);
    }
    else {
        var outerNode = parenthesizedExpression_1.findOuterNodeOfParenthesis(classNode);
        if (ts.isVariableDeclaration(outerNode)) {
            var decl = outerNode.name;
            if (ts.isIdentifier(decl)) {
                className = jshelpers.getTextOfIdentifierOrLiteral(decl);
            }
        }
        else if (ts.isBinaryExpression(outerNode)) {
            var leftExp = outerNode.left;
            if (outerNode.operatorToken.kind == ts.SyntaxKind.EqualsToken && ts.isIdentifier(leftExp)) {
                className = jshelpers.getTextOfIdentifierOrLiteral(leftExp);
            }
        }
        else if (ts.isPropertyAssignment(outerNode)) {
            var propName = outerNode.name;
            if (ts.isIdentifier(propName) || ts.isStringLiteral(propName) || ts.isNumericLiteral(propName)) {
                className = jshelpers.getTextOfIdentifierOrLiteral(propName);
            }
        }
    }
    return className;
}
exports.getClassNameForConstructor = getClassNameForConstructor;
function isAnonymousClass(node) {
    return node.name ? false : true;
}
function generatePropertyFromExpr(node, classFields, namedPropertyMap) {
    var properties = [];
    var staticNum = 0;
    var constructNode;
    node.members.forEach(function (member) {
        switch (member.kind) {
            case ts.SyntaxKind.Constructor:
                constructNode = member;
                break;
            case ts.SyntaxKind.PropertyDeclaration:
                if (!jshelpers.hasStaticModifier(member)) {
                    classFields.push(member);
                    break;
                }
                if (ts.isComputedPropertyName(member.name)) {
                    if (defineClassMember(member.name, member, properties_1.PropertyKind.Computed, properties, namedPropertyMap)) {
                        staticNum++;
                    }
                }
                else {
                    var memberName_1 = properties_1.getPropName(member.name);
                    var initializer = member.initializer;
                    if (initializer) {
                        if (properties_1.isConstantExpr(initializer)) {
                            if (defineClassMember(memberName_1, initializer, properties_1.PropertyKind.Constant, properties, namedPropertyMap)) {
                                staticNum++;
                            }
                        }
                        else {
                            if (defineClassMember(memberName_1, initializer, properties_1.PropertyKind.Variable, properties, namedPropertyMap)) {
                                staticNum++;
                            }
                        }
                    }
                    else {
                        initializer = ts.createIdentifier("undefined");
                        if (defineClassMember(memberName_1, initializer, properties_1.PropertyKind.Constant, properties, namedPropertyMap)) {
                            staticNum++;
                        }
                    }
                }
                break;
            case ts.SyntaxKind.MethodDeclaration:
                var memberName = properties_1.getPropName(member.name);
                if (typeof (memberName) == 'string' || typeof (memberName) == 'number') {
                    if (defineClassMember(memberName, member, properties_1.PropertyKind.Variable, properties, namedPropertyMap)) {
                        staticNum++;
                    }
                }
                else {
                    if (defineClassMember(memberName, member, properties_1.PropertyKind.Computed, properties, namedPropertyMap)) {
                        staticNum++;
                    }
                }
                break;
            case ts.SyntaxKind.GetAccessor:
            case ts.SyntaxKind.SetAccessor:
                var accessorName = properties_1.getPropName(member.name);
                if (typeof (accessorName) == 'string' || typeof (accessorName) == 'number') {
                    if (defineClassMember(accessorName, member, properties_1.PropertyKind.Accessor, properties, namedPropertyMap)) {
                        staticNum++;
                    }
                }
                else {
                    if (defineClassMember(accessorName, member, properties_1.PropertyKind.Computed, properties, namedPropertyMap)) {
                        staticNum++;
                    }
                }
                break;
            case ts.SyntaxKind.SemicolonClassElement:
                break;
            default:
                throw new Error("Unreachable Kind");
        }
    });
    /**
     * If it is a non-static member, `unshift`; otherwise `push`
     * Need to reverse the order of non-static members
     */
    var staticItems = properties.slice(properties.length - staticNum);
    properties = properties.slice(0, properties.length - staticNum);
    properties = properties.reverse();
    properties = properties.concat(staticItems);
    if (constructNode) {
        defineClassMember("constructor", constructNode, properties_1.PropertyKind.Variable, properties, namedPropertyMap);
    }
    return properties;
}
function compileComputedProperty(compiler, prop, classReg, keyReg) {
    var pandaGen = compiler.getPandaGen();
    switch (prop.getValue().kind) {
        case ts.SyntaxKind.PropertyDeclaration:
            var initializer = prop.getValue().initializer;
            if (initializer) {
                compiler.compileExpression(initializer);
                pandaGen.storeOwnProperty(prop.getValue(), classReg, keyReg);
            }
            break;
        case ts.SyntaxKind.MethodDeclaration:
            var protoReg = pandaGen.getTemp();
            var tmpReg = pandaGen.getTemp();
            var flag = createClassMethodOrAccessor(compiler, classReg, protoReg, tmpReg, prop.getValue());
            pandaGen.storeOwnProperty(prop.getValue(), flag ? protoReg : classReg, keyReg);
            pandaGen.freeTemps(protoReg, tmpReg);
            break;
        case ts.SyntaxKind.GetAccessor:
            var accessorReg = pandaGen.getTemp();
            var getProtoReg = pandaGen.getTemp();
            var getter = prop.getValue();
            var getFlag = createClassMethodOrAccessor(compiler, classReg, getProtoReg, accessorReg, getter);
            pandaGen.defineGetterSetterByValue(getter, getFlag ? getProtoReg : classReg, keyReg, accessorReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), true);
            pandaGen.freeTemps(accessorReg, getProtoReg);
            break;
        case ts.SyntaxKind.SetAccessor:
            var accesReg = pandaGen.getTemp();
            var setter = prop.getValue();
            var setProtoReg = pandaGen.getTemp();
            var setFlag = createClassMethodOrAccessor(compiler, classReg, setProtoReg, accesReg, setter);
            pandaGen.defineGetterSetterByValue(setter, setFlag ? setProtoReg : classReg, keyReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), accesReg, true);
            pandaGen.freeTemps(accesReg, setProtoReg);
            break;
    }
    pandaGen.freeTemps(keyReg);
}
function setClassAccessor(pandaGen, compiler, objReg, prop) {
    var getterReg = pandaGen.getTemp();
    var setterReg = pandaGen.getTemp();
    var propReg = pandaGen.getTemp();
    var tmpVreg = pandaGen.getTemp();
    var flag = false;
    var accessor;
    if (prop.getGetter() !== undefined) {
        var getter = prop.getGetter();
        accessor = getter;
        flag = createClassMethodOrAccessor(compiler, objReg, tmpVreg, getterReg, getter);
    }
    if (prop.getSetter() !== undefined) {
        var setter = prop.getSetter();
        accessor = setter;
        flag = createClassMethodOrAccessor(compiler, objReg, tmpVreg, setterReg, setter);
    }
    pandaGen.loadAccumulatorString(accessor, String(prop.getName()));
    pandaGen.storeAccumulator(accessor, propReg);
    if (prop.getGetter() !== undefined && prop.getSetter() !== undefined) {
        pandaGen.defineGetterSetterByValue(accessor, flag ? tmpVreg : objReg, propReg, getterReg, setterReg, false);
    }
    else if (ts.isGetAccessorDeclaration(accessor)) {
        pandaGen.defineGetterSetterByValue(accessor, flag ? tmpVreg : objReg, propReg, getterReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), false);
    }
    else {
        pandaGen.defineGetterSetterByValue(accessor, flag ? tmpVreg : objReg, propReg, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.undefined), setterReg, false);
    }
    pandaGen.freeTemps(getterReg, setterReg, propReg, tmpVreg);
}
function createClassMethodOrAccessor(compiler, classReg, propReg, storeReg, node) {
    var pandaGen = compiler.getPandaGen();
    if (jshelpers.hasStaticModifier(node)) {
        objectLiteralExpression_1.createMethodOrAccessor(pandaGen, compiler, classReg, node);
        pandaGen.storeAccumulator(node, storeReg);
        return false;
    }
    pandaGen.storeAccumulator(node, storeReg);
    pandaGen.loadObjProperty(node, classReg, "prototype");
    pandaGen.storeAccumulator(node, propReg);
    pandaGen.loadAccumulator(node, storeReg);
    objectLiteralExpression_1.createMethodOrAccessor(pandaGen, compiler, propReg, node);
    pandaGen.storeAccumulator(node, storeReg);
    return true;
}
function scalarArrayEquals(node1, node2) {
    if (node1 && node2) {
        var val1Modifs = node1.modifiers;
        var val2Modifs_1 = node2.modifiers;
        if (val1Modifs && val2Modifs_1) {
            return val1Modifs.length == val2Modifs_1.length && val1Modifs.every(function (v, i) { return v === val2Modifs_1[i]; });
            ;
        }
        if (!val1Modifs && !val2Modifs_1) {
            return true;
        }
    }
    else if (!node1 && !node2) {
        return true;
    }
    return false;
}
function setPrototypeAttributes(compiler, node, classReg, propReg, storeReg) {
    var pandaGen = compiler.getPandaGen();
    pandaGen.storeAccumulator(node, storeReg);
    if (jshelpers.hasStaticModifier(node)) {
        return false;
    }
    pandaGen.loadObjProperty(node, classReg, "prototype");
    pandaGen.storeAccumulator(node, propReg);
    pandaGen.loadAccumulator(node, storeReg);
    return true;
}
exports.setPrototypeAttributes = setPrototypeAttributes;
function checkAndUpdateProperty(namedPropertyMap, name, propKind, valueNode) {
    if (namedPropertyMap.has(name)) {
        var prop = namedPropertyMap.get(name);
        if (propKind == properties_1.PropertyKind.Accessor) {
            if (ts.isGetAccessorDeclaration(valueNode)) {
                if (!scalarArrayEquals(prop.getGetter(), valueNode)) {
                    return false;
                }
                prop.setGetter(valueNode);
            }
            else if (ts.isSetAccessorDeclaration(valueNode)) {
                if (!scalarArrayEquals(prop.getSetter(), valueNode)) {
                    return false;
                }
                prop.setSetter(valueNode);
            }
        }
        else {
            if (!scalarArrayEquals(prop.getValue(), valueNode)) {
                return false;
            }
            prop.setValue(valueNode);
            prop.setKind(propKind);
        }
        return true;
    }
    return false;
}
function shouldReturnThisForConstruct(stmt) {
    var ctorNode = jshelpers.getContainingFunction(stmt);
    var expr = stmt.expression;
    if (!ctorNode || !ts.isConstructorDeclaration(ctorNode)) {
        return false;
    }
    if (!expr) {
        return true;
    }
    if (util_1.isUndefinedIdentifier(expr)) {
        return true;
    }
    if (expr.kind == ts.SyntaxKind.ThisKeyword) {
        return true;
    }
    return false;
}
exports.shouldReturnThisForConstruct = shouldReturnThisForConstruct;
function compileSuperProperty(compiler, expr, thisReg, prop) {
    // to make sure loading "this" correctly
    var curScope = compiler.getCurrentScope();
    var _a = curScope.find("this"), scope = _a.scope, level = _a.level, v = _a.v;
    if (scope && level > 0) {
        scope.setLexVar(v, curScope);
    }
    checkValidUseSuperBeforeSuper(compiler, expr);
    var pandaGen = compiler.getPandaGen();
    compiler.getThis(expr, thisReg);
    pandaGen.loadSuperProperty(expr, thisReg, prop);
}
exports.compileSuperProperty = compileSuperProperty;
function checkValidUseSuperBeforeSuper(compiler, node) {
    var pandaGen = compiler.getPandaGen();
    var ctorNode = jshelpers.findAncestor(node, ts.isConstructorDeclaration);
    if (!ctorNode || !ts.isClassLike(ctorNode.parent) || !jshelpers.getClassExtendsHeritageElement(ctorNode.parent)) {
        return;
    }
    var thisReg = pandaGen.getTemp();
    compiler.getThis(node, thisReg);
    pandaGen.loadAccumulator(node, thisReg);
    pandaGen.freeTemps(thisReg);
    if (jshelpers.isSuperProperty(node) ||
        ts.isConstructorDeclaration(node) ||
        node.kind == ts.SyntaxKind.ThisKeyword ||
        node.kind == ts.SyntaxKind.ReturnStatement) {
        pandaGen.throwIfSuperNotCorrectCall(ctorNode, 0);
    }
    if (jshelpers.isSuperCall(node)) {
        pandaGen.throwIfSuperNotCorrectCall(ctorNode, 1);
    }
}
exports.checkValidUseSuperBeforeSuper = checkValidUseSuperBeforeSuper;
//# sourceMappingURL=classStatement.js.map