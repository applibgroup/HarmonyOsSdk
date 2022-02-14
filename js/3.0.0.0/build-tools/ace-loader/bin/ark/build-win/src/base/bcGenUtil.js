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
exports.__esModule = true;
exports.stClassToGlobalRecord = exports.stConstToGlobalRecord = exports.stLetToGlobalRecord = exports.createRegExpWithLiteral = exports.isFalse = exports.isTrue = exports.defineMethod = exports.defineNCFunc = exports.defineGeneratorFunc = exports.defineAsyncFunc = exports.defineFunc = exports.loadHomeObject = exports.copyModuleIntoCurrentModule = exports.storeModuleVariable = exports.loadModuleVarByName = exports.importModule = exports.ldSuperByValue = exports.stSuperByValue = exports.stSuperByName = exports.ldSuperByName = exports.superCallSpread = exports.superCall = exports.closeIterator = exports.getIteratorNext = exports.getIterator = exports.throwIfNotObject = exports.throwObjectNonCoercible = exports.createObjectWithExcludedKeys = exports.defineClassWithBuffer = exports.storeArraySpread = exports.createArrayWithBuffer = exports.createEmptyArray = exports.defineGetterSetterByValue = exports.copyDataProperties = exports.setObjectWithProto = exports.createObjectWithBuffer = exports.createObjectHavingMethod = exports.createEmptyObject = exports.returnUndefined = exports.getNextPropName = exports.getPropIterator = exports.newObject = exports.call = exports.throwIfSuperNotCorrectCall = exports.storeOwnByValue = exports.storeOwnByIndex = exports.storeOwnByName = exports.storeObjByValue = exports.loadObjByValue = exports.storeObjByIndex = exports.loadObjByIndex = exports.storeObjByName = exports.loadObjByName = exports.storeGlobalVar = exports.loadGlobalVar = exports.tryStoreGlobalByName = exports.tryLoadGlobalByName = exports.storeLexicalVar = exports.loadLexicalVar = exports.popLexicalEnv = exports.loadLexicalEnv = exports.newLexicalEnv = exports.throwDeleteSuperProperty = exports.throwThrowNotExists = exports.throwUndefinedIfHole = exports.throwConstAssignment = exports.throwException = exports.creatDebugger = exports.jumpTarget = exports.moveVreg = exports.deleteObjProperty = exports.storeAccumulator = exports.loadAccumulator = exports.loadAccumulatorString = exports.loadAccumulatorFloat = exports.loadAccumulatorInt = void 0;
var irnodes_1 = require("../irnodes");
function loadAccumulatorInt(value) {
    return new irnodes_1.LdaiDyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, value));
}
exports.loadAccumulatorInt = loadAccumulatorInt;
function loadAccumulatorFloat(value) {
    return new irnodes_1.FldaiDyn(new irnodes_1.Imm(irnodes_1.ResultType.Float, value));
}
exports.loadAccumulatorFloat = loadAccumulatorFloat;
function loadAccumulatorString(value) {
    return new irnodes_1.LdaStr(value);
}
exports.loadAccumulatorString = loadAccumulatorString;
function loadAccumulator(vreg) {
    return new irnodes_1.LdaDyn(vreg);
}
exports.loadAccumulator = loadAccumulator;
function storeAccumulator(vreg) {
    return new irnodes_1.StaDyn(vreg);
}
exports.storeAccumulator = storeAccumulator;
function deleteObjProperty(obj, prop) {
    return new irnodes_1.EcmaDelobjprop(obj, prop);
}
exports.deleteObjProperty = deleteObjProperty;
function moveVreg(vd, vs) {
    return new irnodes_1.MovDyn(vd, vs);
}
exports.moveVreg = moveVreg;
function jumpTarget(target) {
    return new irnodes_1.Jmp(target);
}
exports.jumpTarget = jumpTarget;
function creatDebugger() {
    return new irnodes_1.EcmaDebugger();
}
exports.creatDebugger = creatDebugger;
function throwException() {
    return new irnodes_1.EcmaThrowdyn();
}
exports.throwException = throwException;
function throwConstAssignment(name) {
    return new irnodes_1.EcmaThrowconstassignment(name);
}
exports.throwConstAssignment = throwConstAssignment;
function throwUndefinedIfHole(hole, name) {
    return new irnodes_1.EcmaThrowundefinedifhole(hole, name);
}
exports.throwUndefinedIfHole = throwUndefinedIfHole;
function throwThrowNotExists() {
    return new irnodes_1.EcmaThrowthrownotexists();
}
exports.throwThrowNotExists = throwThrowNotExists;
function throwDeleteSuperProperty() {
    return new irnodes_1.EcmaThrowdeletesuperproperty();
}
exports.throwDeleteSuperProperty = throwDeleteSuperProperty;
function newLexicalEnv(numVars) {
    return new irnodes_1.EcmaNewlexenvdyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, numVars));
}
exports.newLexicalEnv = newLexicalEnv;
function loadLexicalEnv() {
    return new irnodes_1.EcmaLdlexenvdyn();
}
exports.loadLexicalEnv = loadLexicalEnv;
function popLexicalEnv() {
    return new irnodes_1.EcmaPoplexenvdyn();
}
exports.popLexicalEnv = popLexicalEnv;
function loadLexicalVar(level, slot) {
    return new irnodes_1.EcmaLdlexvardyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, level), new irnodes_1.Imm(irnodes_1.ResultType.Int, slot));
}
exports.loadLexicalVar = loadLexicalVar;
function storeLexicalVar(level, slot, value) {
    return new irnodes_1.EcmaStlexvardyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, level), new irnodes_1.Imm(irnodes_1.ResultType.Int, slot), value);
}
exports.storeLexicalVar = storeLexicalVar;
function tryLoadGlobalByName(key) {
    return new irnodes_1.EcmaTryldglobalbyname(key);
}
exports.tryLoadGlobalByName = tryLoadGlobalByName;
function tryStoreGlobalByName(key) {
    return new irnodes_1.EcmaTrystglobalbyname(key);
}
exports.tryStoreGlobalByName = tryStoreGlobalByName;
function loadGlobalVar(name) {
    return new irnodes_1.EcmaLdglobalvar(name);
}
exports.loadGlobalVar = loadGlobalVar;
function storeGlobalVar(name) {
    return new irnodes_1.EcmaStglobalvar(name);
}
exports.storeGlobalVar = storeGlobalVar;
function loadObjByName(obj, key) {
    return new irnodes_1.EcmaLdobjbyname(key, obj);
}
exports.loadObjByName = loadObjByName;
function storeObjByName(obj, key) {
    return new irnodes_1.EcmaStobjbyname(key, obj);
}
exports.storeObjByName = storeObjByName;
function loadObjByIndex(obj, index) {
    return new irnodes_1.EcmaLdobjbyindex(obj, new irnodes_1.Imm(irnodes_1.ResultType.Int, index));
}
exports.loadObjByIndex = loadObjByIndex;
function storeObjByIndex(obj, index) {
    return new irnodes_1.EcmaStobjbyindex(obj, new irnodes_1.Imm(irnodes_1.ResultType.Int, index));
}
exports.storeObjByIndex = storeObjByIndex;
function loadObjByValue(obj, prop) {
    return new irnodes_1.EcmaLdobjbyvalue(obj, prop);
}
exports.loadObjByValue = loadObjByValue;
function storeObjByValue(obj, prop) {
    return new irnodes_1.EcmaStobjbyvalue(obj, prop);
}
exports.storeObjByValue = storeObjByValue;
function storeOwnByName(obj, key, nameSetting) {
    return nameSetting ? new irnodes_1.EcmaStownbynamewithnameset(key, obj) : new irnodes_1.EcmaStownbyname(key, obj);
}
exports.storeOwnByName = storeOwnByName;
function storeOwnByIndex(obj, index) {
    return new irnodes_1.EcmaStownbyindex(obj, new irnodes_1.Imm(irnodes_1.ResultType.Int, index));
}
exports.storeOwnByIndex = storeOwnByIndex;
function storeOwnByValue(obj, value, nameSetting) {
    return nameSetting ? new irnodes_1.EcmaStownbyvaluewithnameset(obj, value) : new irnodes_1.EcmaStownbyvalue(obj, value);
}
exports.storeOwnByValue = storeOwnByValue;
function throwIfSuperNotCorrectCall(num) {
    return new irnodes_1.EcmaThrowifsupernotcorrectcall(new irnodes_1.Imm(irnodes_1.ResultType.Int, num));
}
exports.throwIfSuperNotCorrectCall = throwIfSuperNotCorrectCall;
function call(args, passThis) {
    var length = args.length;
    var insn;
    if (!passThis) {
        switch (length) {
            case 1:
                insn = new irnodes_1.EcmaCallarg0dyn(args[0]);
                break;
            case 2:
                insn = new irnodes_1.EcmaCallarg1dyn(args[0], args[1]);
                break;
            case 3:
                insn = new irnodes_1.EcmaCallargs2dyn(args[0], args[1], args[2]);
                break;
            case 4:
                insn = new irnodes_1.EcmaCallargs3dyn(args[0], args[1], args[2], args[3]);
                break;
            default:
                insn = new irnodes_1.EcmaCallirangedyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, length - 1), args);
        }
    }
    else {
        insn = new irnodes_1.EcmaCallithisrangedyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, length - 1), args);
    }
    return insn;
}
exports.call = call;
function newObject(args) {
    return new irnodes_1.EcmaNewobjdynrange(new irnodes_1.Imm(irnodes_1.ResultType.Int, args.length), args);
}
exports.newObject = newObject;
function getPropIterator() {
    return new irnodes_1.EcmaGetpropiterator();
}
exports.getPropIterator = getPropIterator;
function getNextPropName(iter) {
    return new irnodes_1.EcmaGetnextpropname(iter);
}
exports.getNextPropName = getNextPropName;
function returnUndefined() {
    return new irnodes_1.EcmaReturnundefined();
}
exports.returnUndefined = returnUndefined;
function createEmptyObject() {
    return new irnodes_1.EcmaCreateemptyobject();
}
exports.createEmptyObject = createEmptyObject;
function createObjectHavingMethod(idx) {
    return new irnodes_1.EcmaCreateobjecthavingmethod(new irnodes_1.Imm(irnodes_1.ResultType.Int, idx));
}
exports.createObjectHavingMethod = createObjectHavingMethod;
function createObjectWithBuffer(idx) {
    return new irnodes_1.EcmaCreateobjectwithbuffer(new irnodes_1.Imm(irnodes_1.ResultType.Int, idx));
}
exports.createObjectWithBuffer = createObjectWithBuffer;
function setObjectWithProto(proto, object) {
    return new irnodes_1.EcmaSetobjectwithproto(proto, object);
}
exports.setObjectWithProto = setObjectWithProto;
function copyDataProperties(dstObj, srcObj) {
    return new irnodes_1.EcmaCopydataproperties(dstObj, srcObj);
}
exports.copyDataProperties = copyDataProperties;
function defineGetterSetterByValue(obj, name, getter, setter) {
    return new irnodes_1.EcmaDefinegettersetterbyvalue(obj, name, getter, setter);
}
exports.defineGetterSetterByValue = defineGetterSetterByValue;
function createEmptyArray() {
    return new irnodes_1.EcmaCreateemptyarray();
}
exports.createEmptyArray = createEmptyArray;
function createArrayWithBuffer(idx) {
    return new irnodes_1.EcmaCreatearraywithbuffer(new irnodes_1.Imm(irnodes_1.ResultType.Int, idx));
}
exports.createArrayWithBuffer = createArrayWithBuffer;
function storeArraySpread(array, index) {
    return new irnodes_1.EcmaStarrayspread(array, index);
}
exports.storeArraySpread = storeArraySpread;
function defineClassWithBuffer(id, idx, parameterLength, env, base) {
    return new irnodes_1.EcmaDefineclasswithbuffer(id, new irnodes_1.Imm(irnodes_1.ResultType.Int, idx), new irnodes_1.Imm(irnodes_1.ResultType.Int, parameterLength), env, base);
}
exports.defineClassWithBuffer = defineClassWithBuffer;
function createObjectWithExcludedKeys(obj, args) {
    return new irnodes_1.EcmaCreateobjectwithexcludedkeys(new irnodes_1.Imm(irnodes_1.ResultType.Int, args.length - 1), obj, args);
}
exports.createObjectWithExcludedKeys = createObjectWithExcludedKeys;
function throwObjectNonCoercible() {
    return new irnodes_1.EcmaThrowpatternnoncoercible();
}
exports.throwObjectNonCoercible = throwObjectNonCoercible;
function throwIfNotObject(v) {
    return new irnodes_1.EcmaThrowifnotobject(v);
}
exports.throwIfNotObject = throwIfNotObject;
function getIterator() {
    return new irnodes_1.EcmaGetiterator();
}
exports.getIterator = getIterator;
function getIteratorNext(iter, nextMethod) {
    return new irnodes_1.EcmaGetiteratornext(iter, nextMethod);
}
exports.getIteratorNext = getIteratorNext;
function closeIterator(iter) {
    return new irnodes_1.EcmaCloseiterator(iter);
}
exports.closeIterator = closeIterator;
function superCall(num, start) {
    return new irnodes_1.EcmaSupercall(new irnodes_1.Imm(irnodes_1.ResultType.Int, num), start);
}
exports.superCall = superCall;
function superCallSpread(vs) {
    return new irnodes_1.EcmaSupercallspread(vs);
}
exports.superCallSpread = superCallSpread;
function ldSuperByName(obj, key) {
    return new irnodes_1.EcmaLdsuperbyname(key, obj);
}
exports.ldSuperByName = ldSuperByName;
function stSuperByName(obj, key) {
    return new irnodes_1.EcmaStsuperbyname(key, obj);
}
exports.stSuperByName = stSuperByName;
function stSuperByValue(obj, prop) {
    return new irnodes_1.EcmaStsuperbyvalue(obj, prop);
}
exports.stSuperByValue = stSuperByValue;
function ldSuperByValue(obj, prop) {
    return new irnodes_1.EcmaLdsuperbyvalue(obj, prop);
}
exports.ldSuperByValue = ldSuperByValue;
function importModule(name) {
    return new irnodes_1.EcmaImportmodule(name);
}
exports.importModule = importModule;
function loadModuleVarByName(name, module) {
    return new irnodes_1.EcmaLdmodvarbyname(name, module);
}
exports.loadModuleVarByName = loadModuleVarByName;
function storeModuleVariable(name) {
    return new irnodes_1.EcmaStmodulevar(name);
}
exports.storeModuleVariable = storeModuleVariable;
function copyModuleIntoCurrentModule(mod) {
    return new irnodes_1.EcmaCopymodule(mod);
}
exports.copyModuleIntoCurrentModule = copyModuleIntoCurrentModule;
function loadHomeObject() {
    return new irnodes_1.EcmaLdhomeobject();
}
exports.loadHomeObject = loadHomeObject;
function defineFunc(name, env, paramLength) {
    return new irnodes_1.EcmaDefinefuncdyn(name, new irnodes_1.Imm(irnodes_1.ResultType.Int, paramLength), env);
}
exports.defineFunc = defineFunc;
function defineAsyncFunc(name, env, paramLength) {
    return new irnodes_1.EcmaDefineasyncfunc(name, new irnodes_1.Imm(irnodes_1.ResultType.Int, paramLength), env);
}
exports.defineAsyncFunc = defineAsyncFunc;
function defineGeneratorFunc(name, env, paramLength) {
    return new irnodes_1.EcmaDefinegeneratorfunc(name, new irnodes_1.Imm(irnodes_1.ResultType.Int, paramLength), env);
}
exports.defineGeneratorFunc = defineGeneratorFunc;
function defineNCFunc(name, env, paramLength) {
    return new irnodes_1.EcmaDefinencfuncdyn(name, new irnodes_1.Imm(irnodes_1.ResultType.Int, paramLength), env);
}
exports.defineNCFunc = defineNCFunc;
function defineMethod(name, env, paramLength) {
    return new irnodes_1.EcmaDefinemethod(name, new irnodes_1.Imm(irnodes_1.ResultType.Int, paramLength), env);
}
exports.defineMethod = defineMethod;
function isTrue() {
    return new irnodes_1.EcmaIstrue();
}
exports.isTrue = isTrue;
function isFalse() {
    return new irnodes_1.EcmaIsfalse();
}
exports.isFalse = isFalse;
function createRegExpWithLiteral(pattern, flags) {
    return new irnodes_1.EcmaCreateregexpwithliteral(pattern, new irnodes_1.Imm(irnodes_1.ResultType.Int, flags));
}
exports.createRegExpWithLiteral = createRegExpWithLiteral;
function stLetToGlobalRecord(name) {
    return new irnodes_1.EcmaStlettoglobalrecord(name);
}
exports.stLetToGlobalRecord = stLetToGlobalRecord;
function stConstToGlobalRecord(name) {
    return new irnodes_1.EcmaStconsttoglobalrecord(name);
}
exports.stConstToGlobalRecord = stConstToGlobalRecord;
function stClassToGlobalRecord(name) {
    return new irnodes_1.EcmaStclasstoglobalrecord(name);
}
exports.stClassToGlobalRecord = stClassToGlobalRecord;
//# sourceMappingURL=bcGenUtil.js.map