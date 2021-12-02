"use strict";
exports.__esModule = true;
exports.loadHomeObject = exports.copyModuleIntoCurrentModule = exports.storeModuleVariable = exports.loadModuleVarByName = exports.importModule = exports.ldSuperByValue = exports.stSuperByValue = exports.stSuperByName = exports.ldSuperByName = exports.superCallSpread = exports.superCall = exports.closeIterator = exports.getIteratorNext = exports.getIterator = exports.throwIfNotObject = exports.throwObjectNonCoercible = exports.createObjectWithExcludedKeys = exports.defineClassWithBuffer = exports.storeArraySpread = exports.createArrayWithBuffer = exports.createEmptyArray = exports.defineGetterSetterByValue = exports.copyDataProperties = exports.setObjectWithProto = exports.createObjectWithBuffer = exports.createObjectHavingMethod = exports.createEmptyObject = exports.returnUndefined = exports.getNextPropName = exports.getPropIterator = exports.newObject = exports.call = exports.throwIfSuperNotCorrectCall = exports.storeOwnByValue = exports.storeOwnByIndex = exports.storeOwnByName = exports.storeObjByValue = exports.loadObjByValue = exports.storeObjByIndex = exports.loadObjByIndex = exports.storeObjByName = exports.loadObjByName = exports.storeGlobalVar = exports.loadGlobalVar = exports.tryStoreGlobalByValue = exports.tryLoadGlobalByValue = exports.tryStoreGlobalByName = exports.tryLoadGlobalByName = exports.storeLexicalVar = exports.loadLexicalVar = exports.loadLexicalEnv = exports.throwThrowNotExists = exports.throwUndefinedIfHole = exports.throwConstAssignment = exports.throwException = exports.creatDebugger = exports.jumpTarget = exports.moveVreg = exports.deleteObjProperty = exports.storeAccumulator = exports.loadAccumulator = exports.loadAccumulatorString = exports.loadAccumulatorFloat = exports.loadAccumulatorInt = void 0;
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
    var ldstr = new irnodes_1.LdaStr(value);
    return ldstr;
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
    return new irnodes_1.DelObjProp(obj, prop);
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
    return new irnodes_1.Debugger();
}
exports.creatDebugger = creatDebugger;
function throwException() {
    return new irnodes_1.ThrowDyn();
}
exports.throwException = throwException;
function throwConstAssignment(name) {
    return new irnodes_1.ThrowConstAssignment(name);
}
exports.throwConstAssignment = throwConstAssignment;
function throwUndefinedIfHole(hole, name) {
    return new irnodes_1.ThrowUndefinedIfHole(hole, name);
}
exports.throwUndefinedIfHole = throwUndefinedIfHole;
function throwThrowNotExists() {
    return new irnodes_1.ThrowThrowNotExists();
}
exports.throwThrowNotExists = throwThrowNotExists;
function loadLexicalEnv(funcObj) {
    return new irnodes_1.LdLexEnv(funcObj);
}
exports.loadLexicalEnv = loadLexicalEnv;
function loadLexicalVar(env, level, slot) {
    return new irnodes_1.LdLexVar(env, new irnodes_1.Imm(irnodes_1.ResultType.Int, level), new irnodes_1.Imm(irnodes_1.ResultType.Int, slot));
}
exports.loadLexicalVar = loadLexicalVar;
function storeLexicalVar(env, level, slot, value) {
    return new irnodes_1.StLexVar(env, new irnodes_1.Imm(irnodes_1.ResultType.Int, level), new irnodes_1.Imm(irnodes_1.ResultType.Int, slot), value);
}
exports.storeLexicalVar = storeLexicalVar;
function tryLoadGlobalByName(key) {
    return new irnodes_1.TryLdGlobalByName(key);
}
exports.tryLoadGlobalByName = tryLoadGlobalByName;
function tryStoreGlobalByName(key) {
    return new irnodes_1.TryStGlobalByName(key);
}
exports.tryStoreGlobalByName = tryStoreGlobalByName;
function tryLoadGlobalByValue(key) {
    return new irnodes_1.TryLdGlobalByValue(key);
}
exports.tryLoadGlobalByValue = tryLoadGlobalByValue;
function tryStoreGlobalByValue(prop) {
    return new irnodes_1.TryStGlobalByValue(prop);
}
exports.tryStoreGlobalByValue = tryStoreGlobalByValue;
function loadGlobalVar(name) {
    return new irnodes_1.LdGlobalVar(name);
}
exports.loadGlobalVar = loadGlobalVar;
function storeGlobalVar(name) {
    return new irnodes_1.StGlobalVar(name);
}
exports.storeGlobalVar = storeGlobalVar;
function loadObjByName(obj, key) {
    return new irnodes_1.LdObjByName(key, obj);
}
exports.loadObjByName = loadObjByName;
function storeObjByName(obj, key) {
    return new irnodes_1.StObjByName(key, obj);
}
exports.storeObjByName = storeObjByName;
function loadObjByIndex(obj, index) {
    return new irnodes_1.LdObjByIndex(obj, index);
}
exports.loadObjByIndex = loadObjByIndex;
function storeObjByIndex(obj, index) {
    return new irnodes_1.StObjByIndex(obj, index);
}
exports.storeObjByIndex = storeObjByIndex;
function loadObjByValue(obj, prop) {
    return new irnodes_1.LdObjByValue(obj, prop);
}
exports.loadObjByValue = loadObjByValue;
function storeObjByValue(obj, prop) {
    return new irnodes_1.StObjByValue(obj, prop);
}
exports.storeObjByValue = storeObjByValue;
function storeOwnByName(obj, key) {
    return new irnodes_1.StOwnByName(key, obj);
}
exports.storeOwnByName = storeOwnByName;
function storeOwnByIndex(obj, index) {
    return new irnodes_1.StOwnByIndex(obj, index);
}
exports.storeOwnByIndex = storeOwnByIndex;
function storeOwnByValue(obj, value) {
    return new irnodes_1.StOwnByValue(obj, value);
}
exports.storeOwnByValue = storeOwnByValue;
function throwIfSuperNotCorrectCall(num) {
    return new irnodes_1.ThrowIfSuperNotCorrectCall(new irnodes_1.Imm(irnodes_1.ResultType.Int, num));
}
exports.throwIfSuperNotCorrectCall = throwIfSuperNotCorrectCall;
function call(args, passThis) {
    var length = args.length;
    var insn;
    if (!passThis) {
        switch (length) {
            case 1:
                insn = new irnodes_1.Call0Dyn(args[0]);
                break;
            case 2:
                insn = new irnodes_1.Call1Dyn(args[0], args[1]);
                break;
            case 3:
                insn = new irnodes_1.Call2Dyn(args[0], args[1], args[2]);
                break;
            case 4:
                insn = new irnodes_1.Call3Dyn(args[0], args[1], args[2], args[3]);
                break;
            default:
                insn = new irnodes_1.CalliRangeDyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, length - 1), args);
        }
    }
    else {
        insn = new irnodes_1.CalliThisRangeDyn(new irnodes_1.Imm(irnodes_1.ResultType.Int, length - 1), args);
    }
    return insn;
}
exports.call = call;
function newObject(args) {
    return new irnodes_1.NewObjDynRange(new irnodes_1.Imm(irnodes_1.ResultType.Int, args.length), args);
}
exports.newObject = newObject;
function getPropIterator() {
    return new irnodes_1.GetPropertiesIterator();
}
exports.getPropIterator = getPropIterator;
function getNextPropName(iter) {
    return new irnodes_1.GetNextPropName(iter);
}
exports.getNextPropName = getNextPropName;
function returnUndefined() {
    return new irnodes_1.ReturnUndefined();
}
exports.returnUndefined = returnUndefined;
function createEmptyObject() {
    return new irnodes_1.CreateEmptyObject();
}
exports.createEmptyObject = createEmptyObject;
function createObjectHavingMethod(idx) {
    return new irnodes_1.CreateObjectHavingMethod(new irnodes_1.Imm(irnodes_1.ResultType.Int, idx));
}
exports.createObjectHavingMethod = createObjectHavingMethod;
function createObjectWithBuffer(idx) {
    return new irnodes_1.CreateObjectWithBuffer(new irnodes_1.Imm(irnodes_1.ResultType.Int, idx));
}
exports.createObjectWithBuffer = createObjectWithBuffer;
function setObjectWithProto(proto, object) {
    return new irnodes_1.SetObjectWithProto(proto, object);
}
exports.setObjectWithProto = setObjectWithProto;
function copyDataProperties(dstObj, srcObj) {
    return new irnodes_1.CopyDataProperties(dstObj, srcObj);
}
exports.copyDataProperties = copyDataProperties;
function defineGetterSetterByValue(obj, name, getter, setter) {
    return new irnodes_1.DefineGetterSetterByValue(obj, name, getter, setter);
}
exports.defineGetterSetterByValue = defineGetterSetterByValue;
function createEmptyArray() {
    return new irnodes_1.CreateEmptyArray();
}
exports.createEmptyArray = createEmptyArray;
function createArrayWithBuffer(idx) {
    return new irnodes_1.CreateArrayWithBuffer(new irnodes_1.Imm(irnodes_1.ResultType.Int, idx));
}
exports.createArrayWithBuffer = createArrayWithBuffer;
function storeArraySpread(array, index) {
    return new irnodes_1.StArraySpread(array, index);
}
exports.storeArraySpread = storeArraySpread;
function defineClassWithBuffer(id, idx, env, base) {
    return new irnodes_1.DefineClassWithBuffer(id, new irnodes_1.Imm(irnodes_1.ResultType.Int, idx), env, base);
}
exports.defineClassWithBuffer = defineClassWithBuffer;
function createObjectWithExcludedKeys(obj, args) {
    return new irnodes_1.CreateObjectWithExcludedKeys(new irnodes_1.Imm(irnodes_1.ResultType.Int, args.length - 1), obj, args);
}
exports.createObjectWithExcludedKeys = createObjectWithExcludedKeys;
function throwObjectNonCoercible() {
    return new irnodes_1.ThrowPatternNonCoercible();
}
exports.throwObjectNonCoercible = throwObjectNonCoercible;
function throwIfNotObject(v) {
    return new irnodes_1.ThrowIfNotObject(v);
}
exports.throwIfNotObject = throwIfNotObject;
function getIterator() {
    return new irnodes_1.GetIterator();
}
exports.getIterator = getIterator;
function getIteratorNext(iter, nextMethod) {
    return new irnodes_1.GetIteratorNext(iter, nextMethod);
}
exports.getIteratorNext = getIteratorNext;
function closeIterator(iter) {
    return new irnodes_1.CloseIterator(iter);
}
exports.closeIterator = closeIterator;
function superCall(num, start) {
    return new irnodes_1.SuperCall(new irnodes_1.Imm(irnodes_1.ResultType.Int, num), start);
}
exports.superCall = superCall;
function superCallSpread(vs) {
    return new irnodes_1.SuperCallSpread(vs);
}
exports.superCallSpread = superCallSpread;
function ldSuperByName(obj, key) {
    return new irnodes_1.LdSuperByName(key, obj);
}
exports.ldSuperByName = ldSuperByName;
function stSuperByName(obj, key) {
    return new irnodes_1.StSuperByName(key, obj);
}
exports.stSuperByName = stSuperByName;
function stSuperByValue(obj, prop) {
    return new irnodes_1.StSuperByValue(obj, prop);
}
exports.stSuperByValue = stSuperByValue;
function ldSuperByValue(obj, prop) {
    return new irnodes_1.LdSuperByValue(obj, prop);
}
exports.ldSuperByValue = ldSuperByValue;
function importModule(name) {
    return new irnodes_1.ImportModule(name);
}
exports.importModule = importModule;
function loadModuleVarByName(name, module) {
    return new irnodes_1.LdModvarByName(name, module);
}
exports.loadModuleVarByName = loadModuleVarByName;
function storeModuleVariable(name) {
    return new irnodes_1.StModuleVar(name);
}
exports.storeModuleVariable = storeModuleVariable;
function copyModuleIntoCurrentModule(mod) {
    return new irnodes_1.CopyModule(mod);
}
exports.copyModuleIntoCurrentModule = copyModuleIntoCurrentModule;
function loadHomeObject() {
    return new irnodes_1.LdHomeObject();
}
exports.loadHomeObject = loadHomeObject;
//# sourceMappingURL=bcGenUtil.js.map