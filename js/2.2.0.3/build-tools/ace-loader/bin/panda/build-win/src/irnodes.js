"use strict";
// Huawei Technologies Co.,Ltd.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.__esModule = true;
exports.BuiltinIdr6 = exports.BuiltinIdr4 = exports.BuiltinIdr3 = exports.BuiltinImr2 = exports.BuiltinImm = exports.BuiltinI2r4 = exports.BuiltinI2r3 = exports.BuiltinIdr4i = exports.BuiltinIdr3i = exports.BuiltinIdi = exports.BuiltinMidr = exports.BuiltinId = exports.BuiltinR4i = exports.BuiltinR3i = exports.BuiltinR2i = exports.BuiltinQuin5 = exports.BuiltinQuatern4 = exports.BuiltinTern3 = exports.BuiltinBin2 = exports.BuiltinAcc = exports.CalliDynRange = exports.CalliDyn = exports.CalliDynShort = exports.ReturnDyn = exports.FldaiDyn = exports.LdaiDyn = exports.StaDyn = exports.LdaDyn = exports.MovDyn = exports.CallDynRange = exports.CallDyn = exports.CallDynShort = exports.CallVirtRange = exports.CallVirt = exports.CallVirtShort = exports.CallRange = exports.Call = exports.CallShort = exports.Isinstance = exports.Checkcast = exports.Throw = exports.ReturnVoid = exports.ReturnObj = exports.ReturnWide = exports.Return = exports.StstaticObj = exports.StstaticWide = exports.Ststatic = exports.LdstaticObj = exports.LdstaticWide = exports.Ldstatic = exports.StobjVObj = exports.StobjVWide = exports.StobjV = exports.StobjObj = exports.StobjWide = exports.Stobj = exports.LdobjVObj = exports.LdobjVWide = exports.LdobjV = exports.LdobjObj = exports.LdobjWide = exports.Ldobj = exports.InitobjRange = exports.Initobj = exports.InitobjShort = exports.Newobj = exports.Newarr = exports.Lenarr = exports.StarrObj = exports.FstarrWide = exports.Fstarr32 = exports.StarrWide = exports.Starr = exports.Starr16 = exports.Starr8 = exports.LdarrObj = exports.FldarrWide = exports.Fldarr32 = exports.LdarrWide = exports.Ldarr = exports.Ldarru16 = exports.Ldarr16 = exports.Ldarru8 = exports.Ldarr8 = exports.U32toi64 = exports.I64toi32 = exports.I32toi64 = exports.F64tou64 = exports.F64tou32 = exports.F64toi64 = exports.F64toi32 = exports.U64tof64 = exports.I64tof64 = exports.U32tof64 = exports.I32tof64 = exports.Inci = exports.Dec = exports.Inc = exports.NotWide = exports.Not = exports.NegWide = exports.Neg = exports.FnegWide = exports.Modi = exports.Divi = exports.Ashri = exports.Shri = exports.Shli = exports.Xori = exports.Ori = exports.Andi = exports.Muli = exports.Subi = exports.Addi = exports.Mod = exports.Div = exports.Ashr = exports.Shr = exports.Shl = exports.Xor = exports.Or = exports.And = exports.Mul = exports.Sub = exports.Add = exports.Modu2Wide = exports.Modu2 = exports.Divu2Wide = exports.Divu2 = exports.Mod2Wide = exports.Mod2 = exports.Div2Wide = exports.Div2 = exports.Ashr2Wide = exports.Ashr2 = exports.Shr2Wide = exports.Shr2 = exports.Shl2Wide = exports.Shl2 = exports.Xor2Wide = exports.Xor2 = exports.Or2Wide = exports.Or2 = exports.And2Wide = exports.And2 = exports.Mul2Wide = exports.Mul2 = exports.Sub2Wide = exports.Sub2 = exports.Add2Wide = exports.Add2 = exports.Fmod2Wide = exports.Fdiv2Wide = exports.Fmul2Wide = exports.Fsub2Wide = exports.Fadd2Wide = exports.Jge = exports.Jle = exports.Jgt = exports.Jlt = exports.Jne = exports.Jeq = exports.Jgez = exports.Jlez = exports.Jgtz = exports.Jltz = exports.Jnez = exports.Jeqz = exports.JnezObj = exports.JeqzObj = exports.JneObj = exports.JeqObj = exports.CmpObj = exports.FcmpgWide = exports.FcmplWide = exports.UcmpWide = exports.Ucmp = exports.CmpWide = exports.Cmp = exports.Jmp = exports.StaObj = exports.StaWide = exports.Sta = exports.LdaNull = exports.LdaType = exports.LdaStr = exports.FldaiWide = exports.LdaiWide = exports.Ldai = exports.LdaObj = exports.LdaWide = exports.Lda = exports.MovNull = exports.FmoviWide = exports.MoviWide = exports.Movi = exports.MovObj = exports.MovWide = exports.Mov = exports.LdHomeObject = exports.ThrowIfSuperNotCorrectCall = exports.CopyModule = exports.StModuleVar = exports.LdModvarByName = exports.ImportModule = exports.StSuperByValue = exports.LdSuperByValue = exports.StSuperByName = exports.LdSuperByName = exports.DefineMethod = exports.CloseIterator = exports.SuperCallSpread = exports.SuperCall = exports.DefineClassWithBuffer = exports.GetIteratorNext = exports.GetIterator = exports.ThrowPatternNonCoercible = exports.CreateObjectWithExcludedKeys = exports.ThrowIfNotObject = exports.StArraySpread = exports.CreateArrayWithBuffer = exports.CreateEmptyArray = exports.DefineGetterSetterByValue = exports.CopyDataProperties = exports.SetObjectWithProto = exports.CreateObjectWithBuffer = exports.CreateObjectHavingMethod = exports.CreateEmptyObject = exports.ReturnUndefined = exports.GetNextPropName = exports.NewObjDynRange = exports.CalliThisRangeDyn = exports.CalliRangeDyn = exports.Call3Dyn = exports.Call2Dyn = exports.Call1Dyn = exports.Call0Dyn = exports.StOwnByValue = exports.StOwnByIndex = exports.StOwnByName = exports.StObjByValue = exports.LdObjByValue = exports.StObjByIndex = exports.LdObjByIndex = exports.StObjByName = exports.LdObjByName = exports.StGlobalVar = exports.LdGlobalVar = exports.TryStGlobalByValue = exports.TryLdGlobalByValue = exports.TryStGlobalByName = exports.TryLdGlobalByName = exports.CopyRestArgs = exports.GetTemplateObject = exports.LdHole = exports.AsyncFunctionRejectDyn = exports.AsyncFunctionResolveDyn = exports.AsyncFunctionAwaitUncaughtDyn = exports.AsyncFunctionEnterDyn = exports.DefineAsyncFuncDyn = exports.GetResumeModeDyn = exports.ResumeGeneratorDyn = exports.SuspendGeneratorDyn = exports.CreateIterResultObjectDyn = exports.CreateGeneratorObjDyn = exports.DefineGeneratorfuncDyn = exports.ThrowThrowNotExists = exports.ThrowConstAssignment = exports.ThrowUndefinedIfHole = exports.Toboolean = exports.VirtualIns = exports.LdLexVar = exports.GetUnmappedArgs = exports.StLexVar = exports.LdLexEnv = exports.NewLexEnv = exports.NewobjSpread = exports.CallSpread = exports.Debugger = exports.InstanceOfDyn = exports.IsInDyn = exports.GetPropertiesIterator = exports.TypeOfDyn = exports.ExpDyn = exports.StrictNotEqDyn = exports.StrictEqDyn = exports.DefinefuncDyn = exports.DefineNCFuncDyn = exports.DefineLocalVar = exports.DefineGlobalVar = exports.DelObjProp = exports.ThrowDyn = exports.DecDyn = exports.IncDyn = exports.NotDyn = exports.NegDyn = exports.Tonumber = exports.Xor2Dyn = exports.Or2Dyn = exports.And2Dyn = exports.Ashr2Dyn = exports.Shr2Dyn = exports.Shl2Dyn = exports.GreaterEqDyn = exports.GreaterDyn = exports.LessEqDyn = exports.LessDyn = exports.NotEqDyn = exports.EqDyn = exports.Mod2Dyn = exports.Div2Dyn = exports.Mul2Dyn = exports.Sub2Dyn = exports.Add2Dyn = exports.LdFalse = exports.LdTrue = exports.LdGlobal = exports.LdFunction = exports.LdObject = exports.LdNull = exports.LdRegExp = exports.LdSymbol = exports.LdBigInt = exports.LdString = exports.LdNumber = exports.LdBoolean = exports.LdUndefined = exports.LdGlobalThis = exports.LdInfinity = exports.LdNaN = exports.DebugInsPlaceHolder = exports.Label = exports.Imm = exports.VReg = exports.Intrinsic = exports.IRNode = exports.FormatItem = exports.OperandKind = exports.BuiltIns = exports.ResultDst = exports.ResultType = exports.getInstructionSize = exports.IRNodeKind = void 0;
var ts = __importStar(require("typescript"));
var debuginfo_1 = require("./debuginfo");
var IRNodeKind;
(function (IRNodeKind) {
    IRNodeKind[IRNodeKind["VREG"] = 0] = "VREG";
    IRNodeKind[IRNodeKind["IMM"] = 1] = "IMM";
    IRNodeKind[IRNodeKind["LABEL"] = 2] = "LABEL";
    IRNodeKind[IRNodeKind["LD_NAN"] = 3] = "LD_NAN";
    IRNodeKind[IRNodeKind["LD_INFINITY"] = 4] = "LD_INFINITY";
    IRNodeKind[IRNodeKind["LD_GLOBALTHIS"] = 5] = "LD_GLOBALTHIS";
    IRNodeKind[IRNodeKind["LD_UNDEFINED"] = 6] = "LD_UNDEFINED";
    IRNodeKind[IRNodeKind["LD_BOOLEAN"] = 7] = "LD_BOOLEAN";
    IRNodeKind[IRNodeKind["LD_NUMBER"] = 8] = "LD_NUMBER";
    IRNodeKind[IRNodeKind["LD_STRING"] = 9] = "LD_STRING";
    IRNodeKind[IRNodeKind["LD_BIGINT"] = 10] = "LD_BIGINT";
    IRNodeKind[IRNodeKind["LD_SYMBOL"] = 11] = "LD_SYMBOL";
    IRNodeKind[IRNodeKind["LD_REGEXP"] = 12] = "LD_REGEXP";
    IRNodeKind[IRNodeKind["LD_NULL"] = 13] = "LD_NULL";
    IRNodeKind[IRNodeKind["LD_OBJECT"] = 14] = "LD_OBJECT";
    IRNodeKind[IRNodeKind["LD_FUNCTION"] = 15] = "LD_FUNCTION";
    IRNodeKind[IRNodeKind["LD_GLOBAL"] = 16] = "LD_GLOBAL";
    IRNodeKind[IRNodeKind["LD_True"] = 17] = "LD_True";
    IRNodeKind[IRNodeKind["LD_False"] = 18] = "LD_False";
    IRNodeKind[IRNodeKind["ADD2_DYN"] = 19] = "ADD2_DYN";
    IRNodeKind[IRNodeKind["SUB2_DYN"] = 20] = "SUB2_DYN";
    IRNodeKind[IRNodeKind["MUL2_DYN"] = 21] = "MUL2_DYN";
    IRNodeKind[IRNodeKind["DIV2_DYN"] = 22] = "DIV2_DYN";
    IRNodeKind[IRNodeKind["MOD2_DYN"] = 23] = "MOD2_DYN";
    IRNodeKind[IRNodeKind["EQ_DYN"] = 24] = "EQ_DYN";
    IRNodeKind[IRNodeKind["NOTEQ_DYN"] = 25] = "NOTEQ_DYN";
    IRNodeKind[IRNodeKind["LESS_DYN"] = 26] = "LESS_DYN";
    IRNodeKind[IRNodeKind["LESSEQ_DYN"] = 27] = "LESSEQ_DYN";
    IRNodeKind[IRNodeKind["GREATER_DYN"] = 28] = "GREATER_DYN";
    IRNodeKind[IRNodeKind["GREATEREQ_DYN"] = 29] = "GREATEREQ_DYN";
    IRNodeKind[IRNodeKind["LDGLOBAL_DYN"] = 30] = "LDGLOBAL_DYN";
    IRNodeKind[IRNodeKind["TONUMBER"] = 31] = "TONUMBER";
    IRNodeKind[IRNodeKind["SHL2_DYN"] = 32] = "SHL2_DYN";
    IRNodeKind[IRNodeKind["SHR2_DYN"] = 33] = "SHR2_DYN";
    IRNodeKind[IRNodeKind["ASHR2_DYN"] = 34] = "ASHR2_DYN";
    IRNodeKind[IRNodeKind["AND2_DYN"] = 35] = "AND2_DYN";
    IRNodeKind[IRNodeKind["OR2_DYN"] = 36] = "OR2_DYN";
    IRNodeKind[IRNodeKind["XOR2_DYN"] = 37] = "XOR2_DYN";
    IRNodeKind[IRNodeKind["NEG_DYN"] = 38] = "NEG_DYN";
    IRNodeKind[IRNodeKind["NOT_DYN"] = 39] = "NOT_DYN";
    IRNodeKind[IRNodeKind["INC_DYN"] = 40] = "INC_DYN";
    IRNodeKind[IRNodeKind["DEC_DYN"] = 41] = "DEC_DYN";
    IRNodeKind[IRNodeKind["THROW_DYN"] = 42] = "THROW_DYN";
    IRNodeKind[IRNodeKind["DEFINE_GLOBAL_VAR"] = 43] = "DEFINE_GLOBAL_VAR";
    IRNodeKind[IRNodeKind["DEFINE_LOCAL_VAR"] = 44] = "DEFINE_LOCAL_VAR";
    IRNodeKind[IRNodeKind["DEFINEFUNC_DYN"] = 45] = "DEFINEFUNC_DYN";
    IRNodeKind[IRNodeKind["DEFINE_NCFUNC_DYN"] = 46] = "DEFINE_NCFUNC_DYN";
    IRNodeKind[IRNodeKind["STRICTEQ_DYN"] = 47] = "STRICTEQ_DYN";
    IRNodeKind[IRNodeKind["STRICTNOTEQ_DYN"] = 48] = "STRICTNOTEQ_DYN";
    IRNodeKind[IRNodeKind["EXP_DYN"] = 49] = "EXP_DYN";
    IRNodeKind[IRNodeKind["TYPEOF_DYN"] = 50] = "TYPEOF_DYN";
    IRNodeKind[IRNodeKind["GET_PROP_ITERATOR"] = 51] = "GET_PROP_ITERATOR";
    IRNodeKind[IRNodeKind["DEL_OBJ_PROP"] = 52] = "DEL_OBJ_PROP";
    IRNodeKind[IRNodeKind["IS_IN_DYN"] = 53] = "IS_IN_DYN";
    IRNodeKind[IRNodeKind["INSTANCE_OF_DYN"] = 54] = "INSTANCE_OF_DYN";
    IRNodeKind[IRNodeKind["DEBUGGER"] = 55] = "DEBUGGER";
    IRNodeKind[IRNodeKind["CALL_SPREAD"] = 56] = "CALL_SPREAD";
    IRNodeKind[IRNodeKind["NEWOBJ_SPREAD"] = 57] = "NEWOBJ_SPREAD";
    IRNodeKind[IRNodeKind["NEWLEXENV_DYN"] = 58] = "NEWLEXENV_DYN";
    IRNodeKind[IRNodeKind["LDLEXENV_DYN"] = 59] = "LDLEXENV_DYN";
    IRNodeKind[IRNodeKind["STLEXVARDYN"] = 60] = "STLEXVARDYN";
    IRNodeKind[IRNodeKind["LDLEXVARDYN"] = 61] = "LDLEXVARDYN";
    IRNodeKind[IRNodeKind["VIRTUALINS_DYN"] = 62] = "VIRTUALINS_DYN";
    IRNodeKind[IRNodeKind["TOBOOLEAN"] = 63] = "TOBOOLEAN";
    IRNodeKind[IRNodeKind["GETUNMAPPEDARGS"] = 64] = "GETUNMAPPEDARGS";
    IRNodeKind[IRNodeKind["THROWUNDEFINEDIFHOLE"] = 65] = "THROWUNDEFINEDIFHOLE";
    IRNodeKind[IRNodeKind["THROWCONSTASSIGNMENT"] = 66] = "THROWCONSTASSIGNMENT";
    IRNodeKind[IRNodeKind["THROWTHROWNOTEXISTS"] = 67] = "THROWTHROWNOTEXISTS";
    IRNodeKind[IRNodeKind["DEFINE_GENERATOR_FUNC"] = 68] = "DEFINE_GENERATOR_FUNC";
    IRNodeKind[IRNodeKind["CREATE_GENERATOR_OBJ"] = 69] = "CREATE_GENERATOR_OBJ";
    IRNodeKind[IRNodeKind["CREATE_ITERRESULT_OBJ"] = 70] = "CREATE_ITERRESULT_OBJ";
    IRNodeKind[IRNodeKind["SUSPEND_GENERATOR"] = 71] = "SUSPEND_GENERATOR";
    IRNodeKind[IRNodeKind["RESUME_GENERATOR"] = 72] = "RESUME_GENERATOR";
    IRNodeKind[IRNodeKind["GET_RESUME_MODE"] = 73] = "GET_RESUME_MODE";
    IRNodeKind[IRNodeKind["DEFINE_ASYNC_FUNC"] = 74] = "DEFINE_ASYNC_FUNC";
    IRNodeKind[IRNodeKind["ASYNC_FUNCTION_ENTER"] = 75] = "ASYNC_FUNCTION_ENTER";
    IRNodeKind[IRNodeKind["ASYNC_FUNCTION_AWAIT_UNCAUGHT"] = 76] = "ASYNC_FUNCTION_AWAIT_UNCAUGHT";
    IRNodeKind[IRNodeKind["ASYNC_FUNCTION_RESOLVE"] = 77] = "ASYNC_FUNCTION_RESOLVE";
    IRNodeKind[IRNodeKind["ASYNC_FUNCTION_REJECT"] = 78] = "ASYNC_FUNCTION_REJECT";
    IRNodeKind[IRNodeKind["LDHOLE"] = 79] = "LDHOLE";
    IRNodeKind[IRNodeKind["GET_TEMPLATE_OBJECT"] = 80] = "GET_TEMPLATE_OBJECT";
    IRNodeKind[IRNodeKind["COPY_REST_ARGS"] = 81] = "COPY_REST_ARGS";
    IRNodeKind[IRNodeKind["TRYLDGLOBALBYNAME"] = 82] = "TRYLDGLOBALBYNAME";
    IRNodeKind[IRNodeKind["TRYSTGLOBALBYNAME"] = 83] = "TRYSTGLOBALBYNAME";
    IRNodeKind[IRNodeKind["TRYLDGLOBALBYVALUE"] = 84] = "TRYLDGLOBALBYVALUE";
    IRNodeKind[IRNodeKind["TRYSTGLOBALBYVALUE"] = 85] = "TRYSTGLOBALBYVALUE";
    IRNodeKind[IRNodeKind["LDGLOBALVAR"] = 86] = "LDGLOBALVAR";
    IRNodeKind[IRNodeKind["STGLOBALVAR"] = 87] = "STGLOBALVAR";
    IRNodeKind[IRNodeKind["LDOBJBYNAME"] = 88] = "LDOBJBYNAME";
    IRNodeKind[IRNodeKind["STOBJBYNAME"] = 89] = "STOBJBYNAME";
    IRNodeKind[IRNodeKind["LDOBJBYINDEX"] = 90] = "LDOBJBYINDEX";
    IRNodeKind[IRNodeKind["STOBJBYINDEX"] = 91] = "STOBJBYINDEX";
    IRNodeKind[IRNodeKind["LDOBJBYVALUE"] = 92] = "LDOBJBYVALUE";
    IRNodeKind[IRNodeKind["STOBJBYVALUE"] = 93] = "STOBJBYVALUE";
    IRNodeKind[IRNodeKind["STOWNBYNAME"] = 94] = "STOWNBYNAME";
    IRNodeKind[IRNodeKind["STOWNBYINDEX"] = 95] = "STOWNBYINDEX";
    IRNodeKind[IRNodeKind["STOWNBYVALUE"] = 96] = "STOWNBYVALUE";
    IRNodeKind[IRNodeKind["CALL0DYN"] = 97] = "CALL0DYN";
    IRNodeKind[IRNodeKind["CALL1DYN"] = 98] = "CALL1DYN";
    IRNodeKind[IRNodeKind["CALL2DYN"] = 99] = "CALL2DYN";
    IRNodeKind[IRNodeKind["CALL3DYN"] = 100] = "CALL3DYN";
    IRNodeKind[IRNodeKind["CALLIRANGEDYN"] = 101] = "CALLIRANGEDYN";
    IRNodeKind[IRNodeKind["CALLITHISRANGEDYN"] = 102] = "CALLITHISRANGEDYN";
    IRNodeKind[IRNodeKind["NEWOBJDYNRANGE"] = 103] = "NEWOBJDYNRANGE";
    IRNodeKind[IRNodeKind["GETNEXTPROPNAME"] = 104] = "GETNEXTPROPNAME";
    IRNodeKind[IRNodeKind["RETURNUNDEFINED"] = 105] = "RETURNUNDEFINED";
    IRNodeKind[IRNodeKind["CREATEEMPTYOBJECT"] = 106] = "CREATEEMPTYOBJECT";
    IRNodeKind[IRNodeKind["CREATEOBJECTHAVINGMETHOD"] = 107] = "CREATEOBJECTHAVINGMETHOD";
    IRNodeKind[IRNodeKind["CREATEOBJECTWITHBUFFER"] = 108] = "CREATEOBJECTWITHBUFFER";
    IRNodeKind[IRNodeKind["DEFINECLASSWITHBUFFER"] = 109] = "DEFINECLASSWITHBUFFER";
    IRNodeKind[IRNodeKind["SETOBJECTWITHPROTO"] = 110] = "SETOBJECTWITHPROTO";
    IRNodeKind[IRNodeKind["CREATEOBJECTWITHEXCLUDEDKEYS"] = 111] = "CREATEOBJECTWITHEXCLUDEDKEYS";
    IRNodeKind[IRNodeKind["COPYDATAPROPERTIES"] = 112] = "COPYDATAPROPERTIES";
    IRNodeKind[IRNodeKind["DEFINEGETTERSETTERBYVALUE"] = 113] = "DEFINEGETTERSETTERBYVALUE";
    IRNodeKind[IRNodeKind["CREATEEMPTYARRAY"] = 114] = "CREATEEMPTYARRAY";
    IRNodeKind[IRNodeKind["CREATEARRAYWITHBUFFER"] = 115] = "CREATEARRAYWITHBUFFER";
    IRNodeKind[IRNodeKind["STARRAYSPREAD"] = 116] = "STARRAYSPREAD";
    IRNodeKind[IRNodeKind["THROWIFNOTOBJECT"] = 117] = "THROWIFNOTOBJECT";
    IRNodeKind[IRNodeKind["THROWPATTERNNONCOERCIBLE"] = 118] = "THROWPATTERNNONCOERCIBLE";
    IRNodeKind[IRNodeKind["GETITERATOR"] = 119] = "GETITERATOR";
    IRNodeKind[IRNodeKind["GETITERATORNEXT"] = 120] = "GETITERATORNEXT";
    IRNodeKind[IRNodeKind["CLOSEITERATOR"] = 121] = "CLOSEITERATOR";
    IRNodeKind[IRNodeKind["SUPERCALL"] = 122] = "SUPERCALL";
    IRNodeKind[IRNodeKind["SUPERCALLSPREAD"] = 123] = "SUPERCALLSPREAD";
    IRNodeKind[IRNodeKind["DEFINEMETHOD"] = 124] = "DEFINEMETHOD";
    IRNodeKind[IRNodeKind["LDSUPERBYNAME"] = 125] = "LDSUPERBYNAME";
    IRNodeKind[IRNodeKind["STSUPERBYNAME"] = 126] = "STSUPERBYNAME";
    IRNodeKind[IRNodeKind["LDSUPERBYVALUE"] = 127] = "LDSUPERBYVALUE";
    IRNodeKind[IRNodeKind["STSUPERBYVALUE"] = 128] = "STSUPERBYVALUE";
    IRNodeKind[IRNodeKind["IMPORTMODULE"] = 129] = "IMPORTMODULE";
    IRNodeKind[IRNodeKind["LDMODVARBYNAME"] = 130] = "LDMODVARBYNAME";
    IRNodeKind[IRNodeKind["STMODULEVAR"] = 131] = "STMODULEVAR";
    IRNodeKind[IRNodeKind["COPYMODULE"] = 132] = "COPYMODULE";
    IRNodeKind[IRNodeKind["THROWIFSUPERNOTCORRECTCALL"] = 133] = "THROWIFSUPERNOTCORRECTCALL";
    IRNodeKind[IRNodeKind["LDHOMEOBJECT"] = 134] = "LDHOMEOBJECT";
    IRNodeKind[IRNodeKind["MOV"] = 135] = "MOV";
    IRNodeKind[IRNodeKind["MOV_64"] = 136] = "MOV_64";
    IRNodeKind[IRNodeKind["MOV_OBJ"] = 137] = "MOV_OBJ";
    IRNodeKind[IRNodeKind["MOVI"] = 138] = "MOVI";
    IRNodeKind[IRNodeKind["MOVI_64"] = 139] = "MOVI_64";
    IRNodeKind[IRNodeKind["FMOVI_64"] = 140] = "FMOVI_64";
    IRNodeKind[IRNodeKind["MOV_NULL"] = 141] = "MOV_NULL";
    IRNodeKind[IRNodeKind["LDA"] = 142] = "LDA";
    IRNodeKind[IRNodeKind["LDA_64"] = 143] = "LDA_64";
    IRNodeKind[IRNodeKind["LDA_OBJ"] = 144] = "LDA_OBJ";
    IRNodeKind[IRNodeKind["LDAI"] = 145] = "LDAI";
    IRNodeKind[IRNodeKind["LDAI_64"] = 146] = "LDAI_64";
    IRNodeKind[IRNodeKind["FLDAI_64"] = 147] = "FLDAI_64";
    IRNodeKind[IRNodeKind["LDA_STR"] = 148] = "LDA_STR";
    IRNodeKind[IRNodeKind["LDA_TYPE"] = 149] = "LDA_TYPE";
    IRNodeKind[IRNodeKind["LDA_NULL"] = 150] = "LDA_NULL";
    IRNodeKind[IRNodeKind["STA"] = 151] = "STA";
    IRNodeKind[IRNodeKind["STA_64"] = 152] = "STA_64";
    IRNodeKind[IRNodeKind["STA_OBJ"] = 153] = "STA_OBJ";
    IRNodeKind[IRNodeKind["JMP"] = 154] = "JMP";
    IRNodeKind[IRNodeKind["CMP"] = 155] = "CMP";
    IRNodeKind[IRNodeKind["CMP_64"] = 156] = "CMP_64";
    IRNodeKind[IRNodeKind["UCMP"] = 157] = "UCMP";
    IRNodeKind[IRNodeKind["UCMP_64"] = 158] = "UCMP_64";
    IRNodeKind[IRNodeKind["FCMPL_64"] = 159] = "FCMPL_64";
    IRNodeKind[IRNodeKind["FCMPG_64"] = 160] = "FCMPG_64";
    IRNodeKind[IRNodeKind["CMP_OBJ"] = 161] = "CMP_OBJ";
    IRNodeKind[IRNodeKind["JEQ_OBJ"] = 162] = "JEQ_OBJ";
    IRNodeKind[IRNodeKind["JNE_OBJ"] = 163] = "JNE_OBJ";
    IRNodeKind[IRNodeKind["JEQZ_OBJ"] = 164] = "JEQZ_OBJ";
    IRNodeKind[IRNodeKind["JNEZ_OBJ"] = 165] = "JNEZ_OBJ";
    IRNodeKind[IRNodeKind["JEQZ"] = 166] = "JEQZ";
    IRNodeKind[IRNodeKind["JNEZ"] = 167] = "JNEZ";
    IRNodeKind[IRNodeKind["JLTZ"] = 168] = "JLTZ";
    IRNodeKind[IRNodeKind["JGTZ"] = 169] = "JGTZ";
    IRNodeKind[IRNodeKind["JLEZ"] = 170] = "JLEZ";
    IRNodeKind[IRNodeKind["JGEZ"] = 171] = "JGEZ";
    IRNodeKind[IRNodeKind["JEQ"] = 172] = "JEQ";
    IRNodeKind[IRNodeKind["JNE"] = 173] = "JNE";
    IRNodeKind[IRNodeKind["JLT"] = 174] = "JLT";
    IRNodeKind[IRNodeKind["JGT"] = 175] = "JGT";
    IRNodeKind[IRNodeKind["JLE"] = 176] = "JLE";
    IRNodeKind[IRNodeKind["JGE"] = 177] = "JGE";
    IRNodeKind[IRNodeKind["FADD2_64"] = 178] = "FADD2_64";
    IRNodeKind[IRNodeKind["FSUB2_64"] = 179] = "FSUB2_64";
    IRNodeKind[IRNodeKind["FMUL2_64"] = 180] = "FMUL2_64";
    IRNodeKind[IRNodeKind["FDIV2_64"] = 181] = "FDIV2_64";
    IRNodeKind[IRNodeKind["FMOD2_64"] = 182] = "FMOD2_64";
    IRNodeKind[IRNodeKind["ADD2"] = 183] = "ADD2";
    IRNodeKind[IRNodeKind["ADD2_64"] = 184] = "ADD2_64";
    IRNodeKind[IRNodeKind["SUB2"] = 185] = "SUB2";
    IRNodeKind[IRNodeKind["SUB2_64"] = 186] = "SUB2_64";
    IRNodeKind[IRNodeKind["MUL2"] = 187] = "MUL2";
    IRNodeKind[IRNodeKind["MUL2_64"] = 188] = "MUL2_64";
    IRNodeKind[IRNodeKind["AND2"] = 189] = "AND2";
    IRNodeKind[IRNodeKind["AND2_64"] = 190] = "AND2_64";
    IRNodeKind[IRNodeKind["OR2"] = 191] = "OR2";
    IRNodeKind[IRNodeKind["OR2_64"] = 192] = "OR2_64";
    IRNodeKind[IRNodeKind["XOR2"] = 193] = "XOR2";
    IRNodeKind[IRNodeKind["XOR2_64"] = 194] = "XOR2_64";
    IRNodeKind[IRNodeKind["SHL2"] = 195] = "SHL2";
    IRNodeKind[IRNodeKind["SHL2_64"] = 196] = "SHL2_64";
    IRNodeKind[IRNodeKind["SHR2"] = 197] = "SHR2";
    IRNodeKind[IRNodeKind["SHR2_64"] = 198] = "SHR2_64";
    IRNodeKind[IRNodeKind["ASHR2"] = 199] = "ASHR2";
    IRNodeKind[IRNodeKind["ASHR2_64"] = 200] = "ASHR2_64";
    IRNodeKind[IRNodeKind["DIV2"] = 201] = "DIV2";
    IRNodeKind[IRNodeKind["DIV2_64"] = 202] = "DIV2_64";
    IRNodeKind[IRNodeKind["MOD2"] = 203] = "MOD2";
    IRNodeKind[IRNodeKind["MOD2_64"] = 204] = "MOD2_64";
    IRNodeKind[IRNodeKind["DIVU2"] = 205] = "DIVU2";
    IRNodeKind[IRNodeKind["DIVU2_64"] = 206] = "DIVU2_64";
    IRNodeKind[IRNodeKind["MODU2"] = 207] = "MODU2";
    IRNodeKind[IRNodeKind["MODU2_64"] = 208] = "MODU2_64";
    IRNodeKind[IRNodeKind["ADD"] = 209] = "ADD";
    IRNodeKind[IRNodeKind["SUB"] = 210] = "SUB";
    IRNodeKind[IRNodeKind["MUL"] = 211] = "MUL";
    IRNodeKind[IRNodeKind["AND"] = 212] = "AND";
    IRNodeKind[IRNodeKind["OR"] = 213] = "OR";
    IRNodeKind[IRNodeKind["XOR"] = 214] = "XOR";
    IRNodeKind[IRNodeKind["SHL"] = 215] = "SHL";
    IRNodeKind[IRNodeKind["SHR"] = 216] = "SHR";
    IRNodeKind[IRNodeKind["ASHR"] = 217] = "ASHR";
    IRNodeKind[IRNodeKind["DIV"] = 218] = "DIV";
    IRNodeKind[IRNodeKind["MOD"] = 219] = "MOD";
    IRNodeKind[IRNodeKind["ADDI"] = 220] = "ADDI";
    IRNodeKind[IRNodeKind["SUBI"] = 221] = "SUBI";
    IRNodeKind[IRNodeKind["MULI"] = 222] = "MULI";
    IRNodeKind[IRNodeKind["ANDI"] = 223] = "ANDI";
    IRNodeKind[IRNodeKind["ORI"] = 224] = "ORI";
    IRNodeKind[IRNodeKind["XORI"] = 225] = "XORI";
    IRNodeKind[IRNodeKind["SHLI"] = 226] = "SHLI";
    IRNodeKind[IRNodeKind["SHRI"] = 227] = "SHRI";
    IRNodeKind[IRNodeKind["ASHRI"] = 228] = "ASHRI";
    IRNodeKind[IRNodeKind["DIVI"] = 229] = "DIVI";
    IRNodeKind[IRNodeKind["MODI"] = 230] = "MODI";
    IRNodeKind[IRNodeKind["FNEG_64"] = 231] = "FNEG_64";
    IRNodeKind[IRNodeKind["NEG"] = 232] = "NEG";
    IRNodeKind[IRNodeKind["NEG_64"] = 233] = "NEG_64";
    IRNodeKind[IRNodeKind["NOT"] = 234] = "NOT";
    IRNodeKind[IRNodeKind["NOT_64"] = 235] = "NOT_64";
    IRNodeKind[IRNodeKind["INC"] = 236] = "INC";
    IRNodeKind[IRNodeKind["DEC"] = 237] = "DEC";
    IRNodeKind[IRNodeKind["INCI"] = 238] = "INCI";
    IRNodeKind[IRNodeKind["I32TOF64"] = 239] = "I32TOF64";
    IRNodeKind[IRNodeKind["U32TOF64"] = 240] = "U32TOF64";
    IRNodeKind[IRNodeKind["I64TOF64"] = 241] = "I64TOF64";
    IRNodeKind[IRNodeKind["U64TOF64"] = 242] = "U64TOF64";
    IRNodeKind[IRNodeKind["F64TOI32"] = 243] = "F64TOI32";
    IRNodeKind[IRNodeKind["F64TOI64"] = 244] = "F64TOI64";
    IRNodeKind[IRNodeKind["F64TOU32"] = 245] = "F64TOU32";
    IRNodeKind[IRNodeKind["F64TOU64"] = 246] = "F64TOU64";
    IRNodeKind[IRNodeKind["I32TOI64"] = 247] = "I32TOI64";
    IRNodeKind[IRNodeKind["I64TOI32"] = 248] = "I64TOI32";
    IRNodeKind[IRNodeKind["U32TOI64"] = 249] = "U32TOI64";
    IRNodeKind[IRNodeKind["LDARR_8"] = 250] = "LDARR_8";
    IRNodeKind[IRNodeKind["LDARRU_8"] = 251] = "LDARRU_8";
    IRNodeKind[IRNodeKind["LDARR_16"] = 252] = "LDARR_16";
    IRNodeKind[IRNodeKind["LDARRU_16"] = 253] = "LDARRU_16";
    IRNodeKind[IRNodeKind["LDARR"] = 254] = "LDARR";
    IRNodeKind[IRNodeKind["LDARR_64"] = 255] = "LDARR_64";
    IRNodeKind[IRNodeKind["FLDARR_32"] = 256] = "FLDARR_32";
    IRNodeKind[IRNodeKind["FLDARR_64"] = 257] = "FLDARR_64";
    IRNodeKind[IRNodeKind["LDARR_OBJ"] = 258] = "LDARR_OBJ";
    IRNodeKind[IRNodeKind["STARR_8"] = 259] = "STARR_8";
    IRNodeKind[IRNodeKind["STARR_16"] = 260] = "STARR_16";
    IRNodeKind[IRNodeKind["STARR"] = 261] = "STARR";
    IRNodeKind[IRNodeKind["STARR_64"] = 262] = "STARR_64";
    IRNodeKind[IRNodeKind["FSTARR_32"] = 263] = "FSTARR_32";
    IRNodeKind[IRNodeKind["FSTARR_64"] = 264] = "FSTARR_64";
    IRNodeKind[IRNodeKind["STARR_OBJ"] = 265] = "STARR_OBJ";
    IRNodeKind[IRNodeKind["LENARR"] = 266] = "LENARR";
    IRNodeKind[IRNodeKind["NEWARR"] = 267] = "NEWARR";
    IRNodeKind[IRNodeKind["NEWOBJ"] = 268] = "NEWOBJ";
    IRNodeKind[IRNodeKind["INITOBJ_SHORT"] = 269] = "INITOBJ_SHORT";
    IRNodeKind[IRNodeKind["INITOBJ"] = 270] = "INITOBJ";
    IRNodeKind[IRNodeKind["INITOBJ_RANGE"] = 271] = "INITOBJ_RANGE";
    IRNodeKind[IRNodeKind["LDOBJ"] = 272] = "LDOBJ";
    IRNodeKind[IRNodeKind["LDOBJ_64"] = 273] = "LDOBJ_64";
    IRNodeKind[IRNodeKind["LDOBJ_OBJ"] = 274] = "LDOBJ_OBJ";
    IRNodeKind[IRNodeKind["LDOBJ_V"] = 275] = "LDOBJ_V";
    IRNodeKind[IRNodeKind["LDOBJ_V_64"] = 276] = "LDOBJ_V_64";
    IRNodeKind[IRNodeKind["LDOBJ_V_OBJ"] = 277] = "LDOBJ_V_OBJ";
    IRNodeKind[IRNodeKind["STOBJ"] = 278] = "STOBJ";
    IRNodeKind[IRNodeKind["STOBJ_64"] = 279] = "STOBJ_64";
    IRNodeKind[IRNodeKind["STOBJ_OBJ"] = 280] = "STOBJ_OBJ";
    IRNodeKind[IRNodeKind["STOBJ_V"] = 281] = "STOBJ_V";
    IRNodeKind[IRNodeKind["STOBJ_V_64"] = 282] = "STOBJ_V_64";
    IRNodeKind[IRNodeKind["STOBJ_V_OBJ"] = 283] = "STOBJ_V_OBJ";
    IRNodeKind[IRNodeKind["LDSTATIC"] = 284] = "LDSTATIC";
    IRNodeKind[IRNodeKind["LDSTATIC_64"] = 285] = "LDSTATIC_64";
    IRNodeKind[IRNodeKind["LDSTATIC_OBJ"] = 286] = "LDSTATIC_OBJ";
    IRNodeKind[IRNodeKind["STSTATIC"] = 287] = "STSTATIC";
    IRNodeKind[IRNodeKind["STSTATIC_64"] = 288] = "STSTATIC_64";
    IRNodeKind[IRNodeKind["STSTATIC_OBJ"] = 289] = "STSTATIC_OBJ";
    IRNodeKind[IRNodeKind["RETURN"] = 290] = "RETURN";
    IRNodeKind[IRNodeKind["RETURN_64"] = 291] = "RETURN_64";
    IRNodeKind[IRNodeKind["RETURN_OBJ"] = 292] = "RETURN_OBJ";
    IRNodeKind[IRNodeKind["RETURN_VOID"] = 293] = "RETURN_VOID";
    IRNodeKind[IRNodeKind["THROW"] = 294] = "THROW";
    IRNodeKind[IRNodeKind["CHECKCAST"] = 295] = "CHECKCAST";
    IRNodeKind[IRNodeKind["ISINSTANCE"] = 296] = "ISINSTANCE";
    IRNodeKind[IRNodeKind["CALL_SHORT"] = 297] = "CALL_SHORT";
    IRNodeKind[IRNodeKind["CALL"] = 298] = "CALL";
    IRNodeKind[IRNodeKind["CALL_RANGE"] = 299] = "CALL_RANGE";
    IRNodeKind[IRNodeKind["CALL_VIRT_SHORT"] = 300] = "CALL_VIRT_SHORT";
    IRNodeKind[IRNodeKind["CALL_VIRT"] = 301] = "CALL_VIRT";
    IRNodeKind[IRNodeKind["CALL_VIRT_RANGE"] = 302] = "CALL_VIRT_RANGE";
    IRNodeKind[IRNodeKind["CALL_DYN_SHORT"] = 303] = "CALL_DYN_SHORT";
    IRNodeKind[IRNodeKind["CALL_DYN"] = 304] = "CALL_DYN";
    IRNodeKind[IRNodeKind["CALL_DYN_RANGE"] = 305] = "CALL_DYN_RANGE";
    IRNodeKind[IRNodeKind["MOV_DYN"] = 306] = "MOV_DYN";
    IRNodeKind[IRNodeKind["LDA_DYN"] = 307] = "LDA_DYN";
    IRNodeKind[IRNodeKind["STA_DYN"] = 308] = "STA_DYN";
    IRNodeKind[IRNodeKind["LDAI_DYN"] = 309] = "LDAI_DYN";
    IRNodeKind[IRNodeKind["FLDAI_DYN"] = 310] = "FLDAI_DYN";
    IRNodeKind[IRNodeKind["RETURN_DYN"] = 311] = "RETURN_DYN";
    IRNodeKind[IRNodeKind["CALLI_DYN_SHORT"] = 312] = "CALLI_DYN_SHORT";
    IRNodeKind[IRNodeKind["CALLI_DYN"] = 313] = "CALLI_DYN";
    IRNodeKind[IRNodeKind["CALLI_DYN_RANGE"] = 314] = "CALLI_DYN_RANGE";
    IRNodeKind[IRNodeKind["BUILTIN_ACC"] = 315] = "BUILTIN_ACC";
    IRNodeKind[IRNodeKind["BUILTIN_BIN2"] = 316] = "BUILTIN_BIN2";
    IRNodeKind[IRNodeKind["BUILTIN_TERN3"] = 317] = "BUILTIN_TERN3";
    IRNodeKind[IRNodeKind["BUILTIN_QUATERN4"] = 318] = "BUILTIN_QUATERN4";
    IRNodeKind[IRNodeKind["BUILTIN_QUIN5"] = 319] = "BUILTIN_QUIN5";
    IRNodeKind[IRNodeKind["BUILTIN_R2I"] = 320] = "BUILTIN_R2I";
    IRNodeKind[IRNodeKind["BUILTIN_R3I"] = 321] = "BUILTIN_R3I";
    IRNodeKind[IRNodeKind["BUILTIN_R4I"] = 322] = "BUILTIN_R4I";
    IRNodeKind[IRNodeKind["BUILTIN_ID"] = 323] = "BUILTIN_ID";
    IRNodeKind[IRNodeKind["BUILTIN_MIDR"] = 324] = "BUILTIN_MIDR";
    IRNodeKind[IRNodeKind["BUILTIN_IDI"] = 325] = "BUILTIN_IDI";
    IRNodeKind[IRNodeKind["BUILTIN_IDR3I"] = 326] = "BUILTIN_IDR3I";
    IRNodeKind[IRNodeKind["BUILTIN_IDR4I"] = 327] = "BUILTIN_IDR4I";
    IRNodeKind[IRNodeKind["BUILTIN_I2R3"] = 328] = "BUILTIN_I2R3";
    IRNodeKind[IRNodeKind["BUILTIN_I2R4"] = 329] = "BUILTIN_I2R4";
    IRNodeKind[IRNodeKind["BUILTIN_IMM"] = 330] = "BUILTIN_IMM";
    IRNodeKind[IRNodeKind["BUILTIN_IMR2"] = 331] = "BUILTIN_IMR2";
    IRNodeKind[IRNodeKind["BUILTIN_IDR3"] = 332] = "BUILTIN_IDR3";
    IRNodeKind[IRNodeKind["BUILTIN_IDR4"] = 333] = "BUILTIN_IDR4";
    IRNodeKind[IRNodeKind["BUILTIN_IDR6"] = 334] = "BUILTIN_IDR6";
})(IRNodeKind = exports.IRNodeKind || (exports.IRNodeKind = {}));
function getInstructionSize(opcode) {
    switch (opcode) {
        case IRNodeKind.MOV:
            return 2;
        case IRNodeKind.MOV:
            return 3;
        case IRNodeKind.MOV:
            return 5;
        case IRNodeKind.MOV_64:
            return 2;
        case IRNodeKind.MOV_64:
            return 5;
        case IRNodeKind.MOV_OBJ:
            return 2;
        case IRNodeKind.MOV_OBJ:
            return 3;
        case IRNodeKind.MOV_OBJ:
            return 5;
        case IRNodeKind.MOVI:
            return 2;
        case IRNodeKind.MOVI:
            return 3;
        case IRNodeKind.MOVI:
            return 4;
        case IRNodeKind.MOVI:
            return 6;
        case IRNodeKind.MOVI_64:
            return 10;
        case IRNodeKind.FMOVI_64:
            return 10;
        case IRNodeKind.MOV_NULL:
            return 2;
        case IRNodeKind.LDA:
            return 2;
        case IRNodeKind.LDA_64:
            return 2;
        case IRNodeKind.LDA_OBJ:
            return 2;
        case IRNodeKind.LDAI:
            return 2;
        case IRNodeKind.LDAI:
            return 3;
        case IRNodeKind.LDAI:
            return 5;
        case IRNodeKind.LDAI_64:
            return 9;
        case IRNodeKind.FLDAI_64:
            return 9;
        case IRNodeKind.LDA_STR:
            return 5;
        case IRNodeKind.LDA_TYPE:
            return 3;
        case IRNodeKind.LDA_NULL:
            return 1;
        case IRNodeKind.STA:
            return 2;
        case IRNodeKind.STA_64:
            return 2;
        case IRNodeKind.STA_OBJ:
            return 2;
        case IRNodeKind.JMP:
            return 2;
        case IRNodeKind.JMP:
            return 3;
        case IRNodeKind.JMP:
            return 5;
        case IRNodeKind.CMP:
            return 2;
        case IRNodeKind.CMP_64:
            return 2;
        case IRNodeKind.UCMP:
            return 2;
        case IRNodeKind.UCMP_64:
            return 2;
        case IRNodeKind.FCMPL_64:
            return 2;
        case IRNodeKind.FCMPG_64:
            return 2;
        case IRNodeKind.CMP_OBJ:
            return 2;
        case IRNodeKind.JEQ_OBJ:
            return 2;
        case IRNodeKind.JEQ_OBJ:
            return 4;
        case IRNodeKind.JNE_OBJ:
            return 2;
        case IRNodeKind.JNE_OBJ:
            return 4;
        case IRNodeKind.JEQZ_OBJ:
            return 2;
        case IRNodeKind.JEQZ_OBJ:
            return 3;
        case IRNodeKind.JNEZ_OBJ:
            return 2;
        case IRNodeKind.JNEZ_OBJ:
            return 3;
        case IRNodeKind.JEQZ:
            return 2;
        case IRNodeKind.JEQZ:
            return 3;
        case IRNodeKind.JNEZ:
            return 2;
        case IRNodeKind.JNEZ:
            return 3;
        case IRNodeKind.JLTZ:
            return 2;
        case IRNodeKind.JLTZ:
            return 3;
        case IRNodeKind.JGTZ:
            return 2;
        case IRNodeKind.JGTZ:
            return 3;
        case IRNodeKind.JLEZ:
            return 2;
        case IRNodeKind.JLEZ:
            return 3;
        case IRNodeKind.JGEZ:
            return 2;
        case IRNodeKind.JGEZ:
            return 3;
        case IRNodeKind.JEQ:
            return 2;
        case IRNodeKind.JEQ:
            return 4;
        case IRNodeKind.JNE:
            return 2;
        case IRNodeKind.JNE:
            return 4;
        case IRNodeKind.JLT:
            return 2;
        case IRNodeKind.JLT:
            return 4;
        case IRNodeKind.JGT:
            return 2;
        case IRNodeKind.JGT:
            return 4;
        case IRNodeKind.JLE:
            return 2;
        case IRNodeKind.JLE:
            return 4;
        case IRNodeKind.JGE:
            return 2;
        case IRNodeKind.JGE:
            return 4;
        case IRNodeKind.FADD2_64:
            return 2;
        case IRNodeKind.FSUB2_64:
            return 2;
        case IRNodeKind.FMUL2_64:
            return 2;
        case IRNodeKind.FDIV2_64:
            return 2;
        case IRNodeKind.FMOD2_64:
            return 2;
        case IRNodeKind.ADD2:
            return 2;
        case IRNodeKind.ADD2_64:
            return 2;
        case IRNodeKind.SUB2:
            return 2;
        case IRNodeKind.SUB2_64:
            return 2;
        case IRNodeKind.MUL2:
            return 2;
        case IRNodeKind.MUL2_64:
            return 2;
        case IRNodeKind.AND2:
            return 2;
        case IRNodeKind.AND2_64:
            return 2;
        case IRNodeKind.OR2:
            return 2;
        case IRNodeKind.OR2_64:
            return 2;
        case IRNodeKind.XOR2:
            return 2;
        case IRNodeKind.XOR2_64:
            return 2;
        case IRNodeKind.SHL2:
            return 2;
        case IRNodeKind.SHL2_64:
            return 2;
        case IRNodeKind.SHR2:
            return 2;
        case IRNodeKind.SHR2_64:
            return 2;
        case IRNodeKind.ASHR2:
            return 2;
        case IRNodeKind.ASHR2_64:
            return 2;
        case IRNodeKind.DIV2:
            return 2;
        case IRNodeKind.DIV2_64:
            return 2;
        case IRNodeKind.MOD2:
            return 2;
        case IRNodeKind.MOD2_64:
            return 2;
        case IRNodeKind.DIVU2:
            return 2;
        case IRNodeKind.DIVU2_64:
            return 2;
        case IRNodeKind.MODU2:
            return 2;
        case IRNodeKind.MODU2_64:
            return 2;
        case IRNodeKind.ADD:
            return 2;
        case IRNodeKind.SUB:
            return 2;
        case IRNodeKind.MUL:
            return 2;
        case IRNodeKind.AND:
            return 2;
        case IRNodeKind.OR:
            return 2;
        case IRNodeKind.XOR:
            return 2;
        case IRNodeKind.SHL:
            return 2;
        case IRNodeKind.SHR:
            return 2;
        case IRNodeKind.ASHR:
            return 2;
        case IRNodeKind.DIV:
            return 2;
        case IRNodeKind.MOD:
            return 2;
        case IRNodeKind.ADDI:
            return 2;
        case IRNodeKind.SUBI:
            return 2;
        case IRNodeKind.MULI:
            return 2;
        case IRNodeKind.ANDI:
            return 5;
        case IRNodeKind.ORI:
            return 5;
        case IRNodeKind.XORI:
            return 5;
        case IRNodeKind.SHLI:
            return 2;
        case IRNodeKind.SHRI:
            return 2;
        case IRNodeKind.ASHRI:
            return 2;
        case IRNodeKind.DIVI:
            return 2;
        case IRNodeKind.MODI:
            return 2;
        case IRNodeKind.FNEG_64:
            return 1;
        case IRNodeKind.NEG:
            return 1;
        case IRNodeKind.NEG_64:
            return 1;
        case IRNodeKind.NOT:
            return 1;
        case IRNodeKind.NOT_64:
            return 1;
        case IRNodeKind.INC:
            return 1;
        case IRNodeKind.DEC:
            return 1;
        case IRNodeKind.INCI:
            return 2;
        case IRNodeKind.I32TOF64:
            return 1;
        case IRNodeKind.U32TOF64:
            return 1;
        case IRNodeKind.I64TOF64:
            return 1;
        case IRNodeKind.U64TOF64:
            return 1;
        case IRNodeKind.F64TOI32:
            return 1;
        case IRNodeKind.F64TOI64:
            return 1;
        case IRNodeKind.F64TOU32:
            return 1;
        case IRNodeKind.F64TOU64:
            return 1;
        case IRNodeKind.I32TOI64:
            return 1;
        case IRNodeKind.I64TOI32:
            return 1;
        case IRNodeKind.U32TOI64:
            return 1;
        case IRNodeKind.LDARR_8:
            return 2;
        case IRNodeKind.LDARRU_8:
            return 2;
        case IRNodeKind.LDARR_16:
            return 2;
        case IRNodeKind.LDARRU_16:
            return 2;
        case IRNodeKind.LDARR:
            return 2;
        case IRNodeKind.LDARR_64:
            return 2;
        case IRNodeKind.FLDARR_32:
            return 2;
        case IRNodeKind.FLDARR_64:
            return 2;
        case IRNodeKind.LDARR_OBJ:
            return 2;
        case IRNodeKind.STARR_8:
            return 2;
        case IRNodeKind.STARR_16:
            return 2;
        case IRNodeKind.STARR:
            return 2;
        case IRNodeKind.STARR_64:
            return 2;
        case IRNodeKind.FSTARR_32:
            return 2;
        case IRNodeKind.FSTARR_64:
            return 2;
        case IRNodeKind.STARR_OBJ:
            return 2;
        case IRNodeKind.LENARR:
            return 2;
        case IRNodeKind.NEWARR:
            return 4;
        case IRNodeKind.NEWOBJ:
            return 3;
        case IRNodeKind.INITOBJ_SHORT:
            return 4;
        case IRNodeKind.INITOBJ:
            return 5;
        case IRNodeKind.INITOBJ_RANGE:
            return 4;
        case IRNodeKind.LDOBJ:
            return 4;
        case IRNodeKind.LDOBJ_64:
            return 4;
        case IRNodeKind.LDOBJ_OBJ:
            return 4;
        case IRNodeKind.LDOBJ_V:
            return 4;
        case IRNodeKind.LDOBJ_V_64:
            return 4;
        case IRNodeKind.LDOBJ_V_OBJ:
            return 4;
        case IRNodeKind.STOBJ:
            return 4;
        case IRNodeKind.STOBJ_64:
            return 4;
        case IRNodeKind.STOBJ_OBJ:
            return 4;
        case IRNodeKind.STOBJ_V:
            return 4;
        case IRNodeKind.STOBJ_V_64:
            return 4;
        case IRNodeKind.STOBJ_V_OBJ:
            return 4;
        case IRNodeKind.LDSTATIC:
            return 3;
        case IRNodeKind.LDSTATIC_64:
            return 3;
        case IRNodeKind.LDSTATIC_OBJ:
            return 3;
        case IRNodeKind.STSTATIC:
            return 3;
        case IRNodeKind.STSTATIC_64:
            return 3;
        case IRNodeKind.STSTATIC_OBJ:
            return 3;
        case IRNodeKind.RETURN:
            return 1;
        case IRNodeKind.RETURN_64:
            return 1;
        case IRNodeKind.RETURN_OBJ:
            return 1;
        case IRNodeKind.RETURN_VOID:
            return 1;
        case IRNodeKind.THROW:
            return 1;
        case IRNodeKind.CHECKCAST:
            return 3;
        case IRNodeKind.ISINSTANCE:
            return 3;
        case IRNodeKind.CALL_SHORT:
            return 4;
        case IRNodeKind.CALL:
            return 5;
        case IRNodeKind.CALL_RANGE:
            return 4;
        case IRNodeKind.CALL_VIRT_SHORT:
            return 4;
        case IRNodeKind.CALL_VIRT:
            return 5;
        case IRNodeKind.CALL_VIRT_RANGE:
            return 4;
        case IRNodeKind.CALL_DYN_SHORT:
            return 4;
        case IRNodeKind.CALL_DYN:
            return 5;
        case IRNodeKind.CALL_DYN_RANGE:
            return 4;
        case IRNodeKind.MOV_DYN:
            return 3;
        case IRNodeKind.MOV_DYN:
            return 5;
        case IRNodeKind.LDA_DYN:
            return 2;
        case IRNodeKind.STA_DYN:
            return 2;
        case IRNodeKind.LDAI_DYN:
            return 5;
        case IRNodeKind.FLDAI_DYN:
            return 9;
        case IRNodeKind.RETURN_DYN:
            return 1;
        case IRNodeKind.CALLI_DYN_SHORT:
            return 3;
        case IRNodeKind.CALLI_DYN:
            return 4;
        case IRNodeKind.CALLI_DYN_RANGE:
            return 5;
        case IRNodeKind.BUILTIN_ACC:
            return 2;
        case IRNodeKind.BUILTIN_BIN2:
            return 3;
        case IRNodeKind.BUILTIN_TERN3:
            return 4;
        case IRNodeKind.BUILTIN_QUATERN4:
            return 5;
        case IRNodeKind.BUILTIN_QUIN5:
            return 6;
        case IRNodeKind.BUILTIN_R2I:
            return 5;
        case IRNodeKind.BUILTIN_R3I:
            return 6;
        case IRNodeKind.BUILTIN_R4I:
            return 7;
        case IRNodeKind.BUILTIN_ID:
            return 6;
        case IRNodeKind.BUILTIN_MIDR:
            return 5;
        case IRNodeKind.BUILTIN_IDI:
            return 8;
        case IRNodeKind.BUILTIN_IDR3I:
            return 9;
        case IRNodeKind.BUILTIN_IDR4I:
            return 10;
        case IRNodeKind.BUILTIN_I2R3:
            return 7;
        case IRNodeKind.BUILTIN_I2R4:
            return 8;
        case IRNodeKind.BUILTIN_IMM:
            return 4;
        case IRNodeKind.BUILTIN_IMR2:
            return 8;
        case IRNodeKind.BUILTIN_IDR3:
            return 5;
        case IRNodeKind.BUILTIN_IDR4:
            return 5;
        case IRNodeKind.BUILTIN_IDR6:
            return 6;
        default:
            // LOGE("getInstructionSize: Unknown opcode:" + opcode);
            return 0;
    }
}
exports.getInstructionSize = getInstructionSize;
var ResultType;
(function (ResultType) {
    ResultType[ResultType["None"] = 0] = "None";
    ResultType[ResultType["Unknown"] = 1] = "Unknown";
    ResultType[ResultType["Int"] = 2] = "Int";
    ResultType[ResultType["Long"] = 3] = "Long";
    ResultType[ResultType["Float"] = 4] = "Float";
    ResultType[ResultType["Obj"] = 5] = "Obj";
    ResultType[ResultType["Boolean"] = 6] = "Boolean";
})(ResultType = exports.ResultType || (exports.ResultType = {}));
var ResultDst;
(function (ResultDst) {
    ResultDst[ResultDst["None"] = 0] = "None";
    ResultDst[ResultDst["Acc"] = 1] = "Acc";
    ResultDst[ResultDst["VReg"] = 2] = "VReg";
})(ResultDst = exports.ResultDst || (exports.ResultDst = {}));
var BuiltIns;
(function (BuiltIns) {
    BuiltIns[BuiltIns["NaN"] = 0] = "NaN";
    BuiltIns[BuiltIns["Infinity"] = 1] = "Infinity";
    BuiltIns[BuiltIns["globalThis"] = 2] = "globalThis";
    BuiltIns[BuiltIns["undefined"] = 3] = "undefined";
    BuiltIns[BuiltIns["Boolean"] = 4] = "Boolean";
    BuiltIns[BuiltIns["Number"] = 5] = "Number";
    BuiltIns[BuiltIns["String"] = 6] = "String";
    BuiltIns[BuiltIns["BigInt"] = 7] = "BigInt";
    BuiltIns[BuiltIns["Symbol"] = 8] = "Symbol";
    BuiltIns[BuiltIns["Null"] = 9] = "Null";
    BuiltIns[BuiltIns["Object"] = 10] = "Object";
    BuiltIns[BuiltIns["Function"] = 11] = "Function";
    BuiltIns[BuiltIns["Global"] = 12] = "Global";
    BuiltIns[BuiltIns["True"] = 13] = "True";
    BuiltIns[BuiltIns["False"] = 14] = "False";
    BuiltIns[BuiltIns["LexEnv"] = 15] = "LexEnv";
    BuiltIns[BuiltIns["MAX_BUILTIN"] = 16] = "MAX_BUILTIN";
})(BuiltIns = exports.BuiltIns || (exports.BuiltIns = {}));
var OperandKind;
(function (OperandKind) {
    // the least significant bit indicates vreg
    // the second bit indicates src or dst
    OperandKind[OperandKind["SrcVReg"] = 0] = "SrcVReg";
    OperandKind[OperandKind["DstVReg"] = 1] = "DstVReg";
    OperandKind[OperandKind["SrcDstVReg"] = 2] = "SrcDstVReg";
    OperandKind[OperandKind["Imm"] = 3] = "Imm";
    OperandKind[OperandKind["Id"] = 4] = "Id";
    OperandKind[OperandKind["StringId"] = 5] = "StringId";
    OperandKind[OperandKind["Label"] = 6] = "Label";
})(OperandKind = exports.OperandKind || (exports.OperandKind = {}));
(function (OperandKind) {
    function isVReg(kind) {
        return kind === OperandKind.SrcVReg || kind === OperandKind.DstVReg || kind === OperandKind.SrcDstVReg;
    }
})(OperandKind = exports.OperandKind || (exports.OperandKind = {}));
var FormatItem = /** @class */ (function () {
    function FormatItem(kind, bitwidth) {
        this.kind = kind;
        this.bitwidth = bitwidth;
    }
    return FormatItem;
}());
exports.FormatItem = FormatItem;
var IRNode = /** @class */ (function () {
    function IRNode(kind, mnemonic, operands, formats) {
        this.kind = kind;
        this.mnemonic = mnemonic;
        this.operands = operands;
        this.formats = formats;
        this.node = debuginfo_1.NodeKind.Normal;
        // for debuginfo
        this.debugPosInfo = new debuginfo_1.DebugPosInfo();
    }
    IRNode.prototype.toString = function () {
        var out = this.mnemonic + "\t";
        if (this.mnemonic.length < 8) {
            out += "\t";
        }
        this.operands.forEach(function (element) {
            out = out + element.toString() + ", ";
        });
        return out;
    };
    IRNode.prototype.setNode = function (node) {
        this.node = node;
    };
    IRNode.prototype.getNodeName = function () {
        if (this.node != debuginfo_1.NodeKind.Invalid &&
            this.node != debuginfo_1.NodeKind.FirstNodeOfFunction &&
            this.node != debuginfo_1.NodeKind.Normal) {
            return ts.SyntaxKind[this.node.kind];
        }
        return "undefined";
    };
    return IRNode;
}());
exports.IRNode = IRNode;
var Intrinsic = /** @class */ (function (_super) {
    __extends(Intrinsic, _super);
    function Intrinsic(kind, mnemonic, operands, formats) {
        var _this = _super.call(this, kind, mnemonic, operands, formats) || this;
        _this.kind = kind;
        _this.mnemonic = mnemonic;
        _this.operands = operands;
        _this.formats = formats;
        _this.slotSize = 0;
        return _this;
    }
    Intrinsic.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " [i]";
    };
    Intrinsic.prototype.hasIC = function () {
        return this.slotSize > 0;
    };
    Intrinsic.prototype.updateICOffset = function (base) { return 0; };
    ;
    Intrinsic.prototype.validateIC = function (offset, slotSize) {
        var end = offset + slotSize;
        if (end > 0xFFFF) {
            return 0xFFFF;
        }
        else {
            return offset;
        }
    };
    return Intrinsic;
}(IRNode));
exports.Intrinsic = Intrinsic;
var VReg = /** @class */ (function () {
    function VReg() {
        this.num = -1;
        this.id = VReg.global_id++;
        // for debug purposes
        this.setStackTrace(null);
    }
    VReg.prototype.toString = function () {
        if (this.num != -1) {
            return "V" + this.num;
        }
        else {
            return "L" + this.id;
        }
    };
    // for debug purposes
    VReg.prototype.getStackTrace = function () {
        return this.stacktrace;
    };
    VReg.prototype.setStackTrace = function (stack) {
        if (stack === undefined) {
            var error = new Error();
            var trace = error.stack;
            this.stacktrace = trace;
            return;
        }
        if (stack === null) {
            this.stacktrace = undefined;
            return;
        }
    };
    VReg.global_id = 0;
    return VReg;
}());
exports.VReg = VReg;
var Imm = /** @class */ (function (_super) {
    __extends(Imm, _super);
    function Imm(type, value) {
        var _this = _super.call(this, IRNodeKind.IMM, "", [], []) || this;
        _this.type = type;
        _this.value = value;
        return _this;
    }
    Imm.zero = function () {
        return new Imm(ResultType.Int, 0);
    };
    Imm.one = function () {
        return new Imm(ResultType.Int, 1);
    };
    Imm.prototype.resultType = function () {
        return this.type;
    };
    Imm.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Imm.prototype.toString = function () {
        return "#" + this.value;
    };
    return Imm;
}(IRNode));
exports.Imm = Imm;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        var _this = _super.call(this, IRNodeKind.LABEL, "", [], []) || this;
        _this.id = Label.global_id++;
        return _this;
    }
    Label.prototype.resultType = function () {
        return ResultType.None;
    };
    Label.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Label.prototype.toString = function () {
        return "LABEL_" + this.id;
    };
    Label.global_id = 0;
    return Label;
}(IRNode));
exports.Label = Label;
var DebugInsPlaceHolder = /** @class */ (function (_super) {
    __extends(DebugInsPlaceHolder, _super);
    function DebugInsPlaceHolder() {
        return _super.call(this, IRNodeKind.VIRTUALINS_DYN, "", [], []) || this;
    }
    DebugInsPlaceHolder.prototype.resultType = function () {
        return ResultType.None;
    };
    DebugInsPlaceHolder.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return DebugInsPlaceHolder;
}(IRNode));
exports.DebugInsPlaceHolder = DebugInsPlaceHolder;
var LdNaN = /** @class */ (function (_super) {
    __extends(LdNaN, _super);
    function LdNaN() {
        return _super.call(this, IRNodeKind.LD_NAN, "ldnan", [], [[]]) || this;
    }
    LdNaN.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdNaN.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdNaN;
}(Intrinsic));
exports.LdNaN = LdNaN;
var LdInfinity = /** @class */ (function (_super) {
    __extends(LdInfinity, _super);
    function LdInfinity() {
        return _super.call(this, IRNodeKind.LD_INFINITY, "ldinfinity", [], [[]]) || this;
    }
    LdInfinity.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdInfinity.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdInfinity;
}(Intrinsic));
exports.LdInfinity = LdInfinity;
var LdGlobalThis = /** @class */ (function (_super) {
    __extends(LdGlobalThis, _super);
    function LdGlobalThis() {
        return _super.call(this, IRNodeKind.LD_GLOBALTHIS, "ldglobalthis", [], [[]]) || this;
    }
    LdGlobalThis.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdGlobalThis.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdGlobalThis;
}(Intrinsic));
exports.LdGlobalThis = LdGlobalThis;
var LdUndefined = /** @class */ (function (_super) {
    __extends(LdUndefined, _super);
    function LdUndefined() {
        return _super.call(this, IRNodeKind.LD_UNDEFINED, "ldundefined", [], [[]]) || this;
    }
    LdUndefined.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdUndefined.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdUndefined;
}(Intrinsic));
exports.LdUndefined = LdUndefined;
var LdBoolean = /** @class */ (function (_super) {
    __extends(LdBoolean, _super);
    function LdBoolean() {
        return _super.call(this, IRNodeKind.LD_BOOLEAN, "ldboolean", [], [[]]) || this;
    }
    LdBoolean.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdBoolean.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdBoolean;
}(Intrinsic));
exports.LdBoolean = LdBoolean;
var LdNumber = /** @class */ (function (_super) {
    __extends(LdNumber, _super);
    function LdNumber() {
        return _super.call(this, IRNodeKind.LD_NUMBER, "ldnumber", [], [[]]) || this;
    }
    LdNumber.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdNumber.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdNumber;
}(Intrinsic));
exports.LdNumber = LdNumber;
var LdString = /** @class */ (function (_super) {
    __extends(LdString, _super);
    function LdString() {
        return _super.call(this, IRNodeKind.LD_STRING, "ldstring", [], [[]]) || this;
    }
    LdString.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdString.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdString;
}(Intrinsic));
exports.LdString = LdString;
var LdBigInt = /** @class */ (function (_super) {
    __extends(LdBigInt, _super);
    function LdBigInt() {
        return _super.call(this, IRNodeKind.LD_BIGINT, "ldbigint", [], [[]]) || this;
    }
    LdBigInt.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdBigInt.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdBigInt;
}(Intrinsic));
exports.LdBigInt = LdBigInt;
var LdSymbol = /** @class */ (function (_super) {
    __extends(LdSymbol, _super);
    function LdSymbol() {
        return _super.call(this, IRNodeKind.LD_SYMBOL, "ldsymbol", [], [[]]) || this;
    }
    LdSymbol.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdSymbol.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdSymbol;
}(Intrinsic));
exports.LdSymbol = LdSymbol;
var LdRegExp = /** @class */ (function (_super) {
    __extends(LdRegExp, _super);
    function LdRegExp() {
        return _super.call(this, IRNodeKind.LD_REGEXP, "ldRegExp", [], [[]]) || this;
    }
    LdRegExp.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdRegExp.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdRegExp;
}(Intrinsic));
exports.LdRegExp = LdRegExp;
var LdNull = /** @class */ (function (_super) {
    __extends(LdNull, _super);
    function LdNull() {
        return _super.call(this, IRNodeKind.LD_NULL, "ldnull", [], [[]]) || this;
    }
    LdNull.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdNull.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdNull;
}(Intrinsic));
exports.LdNull = LdNull;
var LdObject = /** @class */ (function (_super) {
    __extends(LdObject, _super);
    function LdObject() {
        return _super.call(this, IRNodeKind.LD_OBJECT, "ldobject", [], [[]]) || this;
    }
    LdObject.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdObject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdObject;
}(Intrinsic));
exports.LdObject = LdObject;
var LdFunction = /** @class */ (function (_super) {
    __extends(LdFunction, _super);
    function LdFunction() {
        return _super.call(this, IRNodeKind.LD_FUNCTION, "ldfunction", [], [[]]) || this;
    }
    LdFunction.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdFunction.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdFunction;
}(Intrinsic));
exports.LdFunction = LdFunction;
var LdGlobal = /** @class */ (function (_super) {
    __extends(LdGlobal, _super);
    function LdGlobal() {
        return _super.call(this, IRNodeKind.LD_GLOBAL, "ldglobal", [], [[]]) || this;
    }
    LdGlobal.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdGlobal.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdGlobal;
}(Intrinsic));
exports.LdGlobal = LdGlobal;
var LdTrue = /** @class */ (function (_super) {
    __extends(LdTrue, _super);
    function LdTrue() {
        return _super.call(this, IRNodeKind.LD_True, "ldtrue", [], [[]]) || this;
    }
    LdTrue.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdTrue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdTrue;
}(Intrinsic));
exports.LdTrue = LdTrue;
var LdFalse = /** @class */ (function (_super) {
    __extends(LdFalse, _super);
    function LdFalse() {
        return _super.call(this, IRNodeKind.LD_False, "ldfalse", [], [[]]) || this;
    }
    LdFalse.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdFalse.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdFalse;
}(Intrinsic));
exports.LdFalse = LdFalse;
var Add2Dyn = /** @class */ (function (_super) {
    __extends(Add2Dyn, _super);
    function Add2Dyn(v) {
        return _super.call(this, IRNodeKind.ADD2_DYN, "add2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Add2Dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    Add2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Add2Dyn;
}(Intrinsic));
exports.Add2Dyn = Add2Dyn;
var Sub2Dyn = /** @class */ (function (_super) {
    __extends(Sub2Dyn, _super);
    function Sub2Dyn(v) {
        return _super.call(this, IRNodeKind.SUB2_DYN, "sub2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Sub2Dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    Sub2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Sub2Dyn;
}(Intrinsic));
exports.Sub2Dyn = Sub2Dyn;
var Mul2Dyn = /** @class */ (function (_super) {
    __extends(Mul2Dyn, _super);
    function Mul2Dyn(v) {
        return _super.call(this, IRNodeKind.MUL2_DYN, "mul2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Mul2Dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    Mul2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mul2Dyn;
}(Intrinsic));
exports.Mul2Dyn = Mul2Dyn;
var Div2Dyn = /** @class */ (function (_super) {
    __extends(Div2Dyn, _super);
    function Div2Dyn(v) {
        return _super.call(this, IRNodeKind.DIV2_DYN, "div2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Div2Dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    Div2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Div2Dyn;
}(Intrinsic));
exports.Div2Dyn = Div2Dyn;
var Mod2Dyn = /** @class */ (function (_super) {
    __extends(Mod2Dyn, _super);
    function Mod2Dyn(v) {
        return _super.call(this, IRNodeKind.MOD2_DYN, "mod2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Mod2Dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    Mod2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mod2Dyn;
}(Intrinsic));
exports.Mod2Dyn = Mod2Dyn;
var EqDyn = /** @class */ (function (_super) {
    __extends(EqDyn, _super);
    function EqDyn(v) {
        return _super.call(this, IRNodeKind.EQ_DYN, "eqDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EqDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    EqDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EqDyn;
}(Intrinsic));
exports.EqDyn = EqDyn;
var NotEqDyn = /** @class */ (function (_super) {
    __extends(NotEqDyn, _super);
    function NotEqDyn(v) {
        return _super.call(this, IRNodeKind.NOTEQ_DYN, "noteqDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    NotEqDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    NotEqDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NotEqDyn;
}(Intrinsic));
exports.NotEqDyn = NotEqDyn;
var LessDyn = /** @class */ (function (_super) {
    __extends(LessDyn, _super);
    function LessDyn(v) {
        return _super.call(this, IRNodeKind.LESS_DYN, "lessDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LessDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    LessDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LessDyn;
}(Intrinsic));
exports.LessDyn = LessDyn;
var LessEqDyn = /** @class */ (function (_super) {
    __extends(LessEqDyn, _super);
    function LessEqDyn(v) {
        return _super.call(this, IRNodeKind.LESSEQ_DYN, "lesseqDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LessEqDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    LessEqDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LessEqDyn;
}(Intrinsic));
exports.LessEqDyn = LessEqDyn;
var GreaterDyn = /** @class */ (function (_super) {
    __extends(GreaterDyn, _super);
    function GreaterDyn(v) {
        return _super.call(this, IRNodeKind.GREATER_DYN, "greaterDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    GreaterDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    GreaterDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GreaterDyn;
}(Intrinsic));
exports.GreaterDyn = GreaterDyn;
var GreaterEqDyn = /** @class */ (function (_super) {
    __extends(GreaterEqDyn, _super);
    function GreaterEqDyn(v) {
        return _super.call(this, IRNodeKind.GREATEREQ_DYN, "greatereqDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    GreaterEqDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    GreaterEqDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GreaterEqDyn;
}(Intrinsic));
exports.GreaterEqDyn = GreaterEqDyn;
var Shl2Dyn = /** @class */ (function (_super) {
    __extends(Shl2Dyn, _super);
    function Shl2Dyn(v) {
        return _super.call(this, IRNodeKind.SHL2_DYN, "shl2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Shl2Dyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shl2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shl2Dyn;
}(Intrinsic));
exports.Shl2Dyn = Shl2Dyn;
var Shr2Dyn = /** @class */ (function (_super) {
    __extends(Shr2Dyn, _super);
    function Shr2Dyn(v) {
        return _super.call(this, IRNodeKind.SHR2_DYN, "shr2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Shr2Dyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shr2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shr2Dyn;
}(Intrinsic));
exports.Shr2Dyn = Shr2Dyn;
var Ashr2Dyn = /** @class */ (function (_super) {
    __extends(Ashr2Dyn, _super);
    function Ashr2Dyn(v) {
        return _super.call(this, IRNodeKind.ASHR2_DYN, "ashr2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ashr2Dyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ashr2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ashr2Dyn;
}(Intrinsic));
exports.Ashr2Dyn = Ashr2Dyn;
var And2Dyn = /** @class */ (function (_super) {
    __extends(And2Dyn, _super);
    function And2Dyn(v) {
        return _super.call(this, IRNodeKind.AND2_DYN, "and2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    And2Dyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    And2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return And2Dyn;
}(Intrinsic));
exports.And2Dyn = And2Dyn;
var Or2Dyn = /** @class */ (function (_super) {
    __extends(Or2Dyn, _super);
    function Or2Dyn(v) {
        return _super.call(this, IRNodeKind.OR2_DYN, "or2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Or2Dyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    Or2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Or2Dyn;
}(Intrinsic));
exports.Or2Dyn = Or2Dyn;
var Xor2Dyn = /** @class */ (function (_super) {
    __extends(Xor2Dyn, _super);
    function Xor2Dyn(v) {
        return _super.call(this, IRNodeKind.XOR2_DYN, "xor2Dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Xor2Dyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    Xor2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Xor2Dyn;
}(Intrinsic));
exports.Xor2Dyn = Xor2Dyn;
/**
* Tonumber instruction convert object to number
*/
var Tonumber = /** @class */ (function (_super) {
    __extends(Tonumber, _super);
    function Tonumber(v) {
        return _super.call(this, IRNodeKind.TONUMBER, "tonumber", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Tonumber.prototype.resultType = function () {
        return ResultType.Float;
    };
    Tonumber.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Tonumber;
}(Intrinsic));
exports.Tonumber = Tonumber;
var NegDyn = /** @class */ (function (_super) {
    __extends(NegDyn, _super);
    function NegDyn(v) {
        return _super.call(this, IRNodeKind.NEG_DYN, "negDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    NegDyn.prototype.resultType = function () {
        return ResultType.Float;
    };
    NegDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NegDyn;
}(Intrinsic));
exports.NegDyn = NegDyn;
var NotDyn = /** @class */ (function (_super) {
    __extends(NotDyn, _super);
    function NotDyn(v) {
        return _super.call(this, IRNodeKind.NOT_DYN, "notDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    NotDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    NotDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NotDyn;
}(Intrinsic));
exports.NotDyn = NotDyn;
var IncDyn = /** @class */ (function (_super) {
    __extends(IncDyn, _super);
    function IncDyn(v) {
        return _super.call(this, IRNodeKind.INC_DYN, "incDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    IncDyn.prototype.resultType = function () {
        return ResultType.Float;
    };
    IncDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return IncDyn;
}(Intrinsic));
exports.IncDyn = IncDyn;
var DecDyn = /** @class */ (function (_super) {
    __extends(DecDyn, _super);
    function DecDyn(v) {
        return _super.call(this, IRNodeKind.DEC_DYN, "decDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    DecDyn.prototype.resultType = function () {
        return ResultType.Float;
    };
    DecDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DecDyn;
}(Intrinsic));
exports.DecDyn = DecDyn;
var ThrowDyn = /** @class */ (function (_super) {
    __extends(ThrowDyn, _super);
    function ThrowDyn() {
        return _super.call(this, IRNodeKind.THROW_DYN, "throwDyn", [], [
            []
        ]) || this;
    }
    ThrowDyn.prototype.resultType = function () {
        return ResultType.None;
    };
    ThrowDyn.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ThrowDyn;
}(Intrinsic));
exports.ThrowDyn = ThrowDyn;
/**
 * The instruction removes the property from Object
 * v1 stores the obj and v2 stores the prop before calling it
 * the result is a boolean value which stored in acc in the end
 */
var DelObjProp = /** @class */ (function (_super) {
    __extends(DelObjProp, _super);
    function DelObjProp(v1, v2) {
        return _super.call(this, IRNodeKind.DEL_OBJ_PROP, "delobjprop", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    DelObjProp.prototype.resultType = function () {
        return ResultType.Boolean;
    };
    DelObjProp.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DelObjProp;
}(Intrinsic));
exports.DelObjProp = DelObjProp;
/**
 * The pseudo instruction is used to hoist the global variables
 */
var DefineGlobalVar = /** @class */ (function (_super) {
    __extends(DefineGlobalVar, _super);
    function DefineGlobalVar(id) {
        return _super.call(this, IRNodeKind.DEFINE_GLOBAL_VAR, "defineglobalvar", [id], [
            [new FormatItem(OperandKind.Id, 32)]
        ]) || this;
    }
    DefineGlobalVar.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefineGlobalVar.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return DefineGlobalVar;
}(Intrinsic));
exports.DefineGlobalVar = DefineGlobalVar;
/**
 * The pseudo instruction is used to hoist the global variables
 */
var DefineLocalVar = /** @class */ (function (_super) {
    __extends(DefineLocalVar, _super);
    function DefineLocalVar(vreg) {
        return _super.call(this, IRNodeKind.DEFINE_LOCAL_VAR, "definelocalvar", [vreg], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    DefineLocalVar.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefineLocalVar.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return DefineLocalVar;
}(Intrinsic));
exports.DefineLocalVar = DefineLocalVar;
/**
 * The pseudo instruction is defined the arrow function
 */
var DefineNCFuncDyn = /** @class */ (function (_super) {
    __extends(DefineNCFuncDyn, _super);
    function DefineNCFuncDyn(id, env) {
        return _super.call(this, IRNodeKind.DEFINE_NCFUNC_DYN, "defineNCFuncDyn", [id, env], [
            [new FormatItem(OperandKind.Id, 32), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    DefineNCFuncDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefineNCFuncDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DefineNCFuncDyn;
}(Intrinsic));
exports.DefineNCFuncDyn = DefineNCFuncDyn;
/**
 * The pseudo instruction calls the runtime to create a Function
 * instance and bind it with code. The resulting instance will
 * be stored into the accumulator.
 */
var DefinefuncDyn = /** @class */ (function (_super) {
    __extends(DefinefuncDyn, _super);
    function DefinefuncDyn(id, env) {
        return _super.call(this, IRNodeKind.DEFINEFUNC_DYN, "definefuncDyn", [id, env], [
            [new FormatItem(OperandKind.Id, 32), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    DefinefuncDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefinefuncDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DefinefuncDyn;
}(Intrinsic));
exports.DefinefuncDyn = DefinefuncDyn;
/**
 * The following two instructions implement strict comparison operator '===' and '!=='
 * It writes '1' to the accumulator if the it is true.
 * In another case it writes '0' to the accumulator.
 */
var StrictEqDyn = /** @class */ (function (_super) {
    __extends(StrictEqDyn, _super);
    function StrictEqDyn(v) {
        return _super.call(this, IRNodeKind.STRICTEQ_DYN, "strictEqDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    StrictEqDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    StrictEqDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return StrictEqDyn;
}(Intrinsic));
exports.StrictEqDyn = StrictEqDyn;
var StrictNotEqDyn = /** @class */ (function (_super) {
    __extends(StrictNotEqDyn, _super);
    function StrictNotEqDyn(v) {
        return _super.call(this, IRNodeKind.STRICTNOTEQ_DYN, "strictNotEqDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    StrictNotEqDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    StrictNotEqDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return StrictNotEqDyn;
}(Intrinsic));
exports.StrictNotEqDyn = StrictNotEqDyn;
var ExpDyn = /** @class */ (function (_super) {
    __extends(ExpDyn, _super);
    function ExpDyn(v) {
        return _super.call(this, IRNodeKind.EXP_DYN, "expDyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    ExpDyn.prototype.resultType = function () {
        return ResultType.Int;
    };
    ExpDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return ExpDyn;
}(Intrinsic));
exports.ExpDyn = ExpDyn;
/**
 * The instruction returns the type of object.
 * return string value:"undefined","boolean","number","bigint", "string"
 * "symbol","function","object"
 */
var TypeOfDyn = /** @class */ (function (_super) {
    __extends(TypeOfDyn, _super);
    function TypeOfDyn() {
        return _super.call(this, IRNodeKind.TYPEOF_DYN, "typeofDyn", [], [
            []
        ]) || this;
    }
    TypeOfDyn.prototype.resultType = function () {
        return ResultType.Obj;
    };
    TypeOfDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return TypeOfDyn;
}(Intrinsic));
exports.TypeOfDyn = TypeOfDyn;
/**
 *The instruction calls a function getPropertiesIterator() to transform
 *the obj(in Acc) to an iterator that has the next() method to iterate the obj .
 */
var GetPropertiesIterator = /** @class */ (function (_super) {
    __extends(GetPropertiesIterator, _super);
    function GetPropertiesIterator() {
        return _super.call(this, IRNodeKind.GET_PROP_ITERATOR, "getPropIterator", [], [
            []
        ]) || this;
    }
    GetPropertiesIterator.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    GetPropertiesIterator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GetPropertiesIterator;
}(Intrinsic));
exports.GetPropertiesIterator = GetPropertiesIterator;
/**
 * The instruction returns true if the specified property is in the specified object or its prototype chain
 */
var IsInDyn = /** @class */ (function (_super) {
    __extends(IsInDyn, _super);
    function IsInDyn(v) {
        return _super.call(this, IRNodeKind.IS_IN_DYN, "isinDyn", [v], [[new FormatItem(OperandKind.SrcVReg, 8)]]) || this;
    }
    IsInDyn.prototype.resultType = function () {
        return ResultType.Obj;
    };
    IsInDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return IsInDyn;
}(Intrinsic));
exports.IsInDyn = IsInDyn;
/**
 * The instruction tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
 */
var InstanceOfDyn = /** @class */ (function (_super) {
    __extends(InstanceOfDyn, _super);
    function InstanceOfDyn(v) {
        return _super.call(this, IRNodeKind.INSTANCE_OF_DYN, "instanceofDyn", [v], [[new FormatItem(OperandKind.SrcVReg, 8)]]) || this;
    }
    InstanceOfDyn.prototype.resultType = function () {
        return ResultType.Obj;
    };
    InstanceOfDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return InstanceOfDyn;
}(Intrinsic));
exports.InstanceOfDyn = InstanceOfDyn;
var Debugger = /** @class */ (function (_super) {
    __extends(Debugger, _super);
    function Debugger() {
        return _super.call(this, IRNodeKind.DEBUGGER, "debugger", [], []) || this;
    }
    Debugger.prototype.resultType = function () {
        return ResultType.None;
    };
    Debugger.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Debugger;
}(Intrinsic));
exports.Debugger = Debugger;
/**
 * The instruction is used, when the input parameters of the Call operation are contained the SpreadElement.
 */
var CallSpread = /** @class */ (function (_super) {
    __extends(CallSpread, _super);
    function CallSpread(vs1, vs2, v3) {
        return _super.call(this, IRNodeKind.CALL_SPREAD, "callspreadDyn", [vs1, vs2, v3], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    CallSpread.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallSpread.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallSpread;
}(Intrinsic));
exports.CallSpread = CallSpread;
/**
 * The instruction is used, when the input parameters of the New operation are contained the SpreadElement.
 */
var NewobjSpread = /** @class */ (function (_super) {
    __extends(NewobjSpread, _super);
    function NewobjSpread(vs1, vs2) {
        return _super.call(this, IRNodeKind.NEWOBJ_SPREAD, "newobjspreadDyn", [vs1, vs2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    NewobjSpread.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    NewobjSpread.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NewobjSpread;
}(Intrinsic));
exports.NewobjSpread = NewobjSpread;
/**
 * The instruction is used, create one lexical environment, return one lexical env to acc.
 */
var NewLexEnv = /** @class */ (function (_super) {
    __extends(NewLexEnv, _super);
    function NewLexEnv(numVars, funcObj) {
        return _super.call(this, IRNodeKind.NEWLEXENV_DYN, "newlexenvDyn", [numVars, funcObj], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    NewLexEnv.prototype.resultType = function () {
        return ResultType.Obj;
    };
    NewLexEnv.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NewLexEnv;
}(Intrinsic));
exports.NewLexEnv = NewLexEnv;
/**
 * The instruction is used, load env of current execute context to acc.
 */
var LdLexEnv = /** @class */ (function (_super) {
    __extends(LdLexEnv, _super);
    function LdLexEnv(funcObj) {
        return _super.call(this, IRNodeKind.LDLEXENV_DYN, "ldlexenvDyn", [funcObj], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LdLexEnv.prototype.resultType = function () {
        return ResultType.Obj;
    };
    LdLexEnv.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdLexEnv;
}(Intrinsic));
exports.LdLexEnv = LdLexEnv;
/**
 * The instruction is used, store one variable to lexenv, no return.
 */
var StLexVar = /** @class */ (function (_super) {
    __extends(StLexVar, _super);
    function StLexVar(env, scopeId, slotId, value) {
        return _super.call(this, IRNodeKind.STLEXVARDYN, "StLexVarDyn", [scopeId, slotId, env, value], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    StLexVar.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    StLexVar.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StLexVar;
}(Intrinsic));
exports.StLexVar = StLexVar;
/**
 * The instruction is used to get unmapped arguments of the current function.
 */
var GetUnmappedArgs = /** @class */ (function (_super) {
    __extends(GetUnmappedArgs, _super);
    function GetUnmappedArgs() {
        return _super.call(this, IRNodeKind.GETUNMAPPEDARGS, "getUnmappedArgs", [], [[]]) || this;
    }
    GetUnmappedArgs.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    GetUnmappedArgs.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GetUnmappedArgs;
}(Intrinsic));
exports.GetUnmappedArgs = GetUnmappedArgs;
/**
 * The instruction is used, store one variable ref to lexenv.
 */
var LdLexVar = /** @class */ (function (_super) {
    __extends(LdLexVar, _super);
    function LdLexVar(env, scopeId, slotId) {
        return _super.call(this, IRNodeKind.LDLEXVARDYN, "LdLexVarDyn", [scopeId, slotId, env], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LdLexVar.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdLexVar.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdLexVar;
}(Intrinsic));
exports.LdLexVar = LdLexVar;
var VirtualIns = /** @class */ (function (_super) {
    __extends(VirtualIns, _super);
    function VirtualIns(mnemonic) {
        var _this = _super.call(this, IRNodeKind.VIRTUALINS_DYN, mnemonic, [], []) || this;
        _this.mnemonic = mnemonic;
        _this.tempRegs = [];
        return _this;
    }
    VirtualIns.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    VirtualIns.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return VirtualIns;
}(IRNode));
exports.VirtualIns = VirtualIns;
var Toboolean = /** @class */ (function (_super) {
    __extends(Toboolean, _super);
    function Toboolean() {
        return _super.call(this, IRNodeKind.TOBOOLEAN, "toboolean", [], [
            []
        ]) || this;
    }
    Toboolean.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    Toboolean.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Toboolean;
}(Intrinsic));
exports.Toboolean = Toboolean;
/**
 * the pseudo instruction throw reference error if vs1 == hole
 */
var ThrowUndefinedIfHole = /** @class */ (function (_super) {
    __extends(ThrowUndefinedIfHole, _super);
    function ThrowUndefinedIfHole(vs1, vs2) {
        return _super.call(this, IRNodeKind.THROWUNDEFINEDIFHOLE, "throwUndefinedIfHole", [vs1, vs2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    ThrowUndefinedIfHole.prototype.resultType = function () {
        return ResultType.None;
    };
    ThrowUndefinedIfHole.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ThrowUndefinedIfHole;
}(Intrinsic));
exports.ThrowUndefinedIfHole = ThrowUndefinedIfHole;
var ThrowConstAssignment = /** @class */ (function (_super) {
    __extends(ThrowConstAssignment, _super);
    function ThrowConstAssignment(vs1) {
        return _super.call(this, IRNodeKind.THROWCONSTASSIGNMENT, "throwConstAssignment", [vs1], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    ThrowConstAssignment.prototype.resultType = function () {
        return ResultType.None;
    };
    ThrowConstAssignment.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ThrowConstAssignment;
}(Intrinsic));
exports.ThrowConstAssignment = ThrowConstAssignment;
var ThrowThrowNotExists = /** @class */ (function (_super) {
    __extends(ThrowThrowNotExists, _super);
    function ThrowThrowNotExists() {
        return _super.call(this, IRNodeKind.THROWTHROWNOTEXISTS, "ThrowThrowNotExists", [], []) || this;
    }
    ThrowThrowNotExists.prototype.resultType = function () {
        return ResultType.None;
    };
    ThrowThrowNotExists.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ThrowThrowNotExists;
}(Intrinsic));
exports.ThrowThrowNotExists = ThrowThrowNotExists;
/**
 * The pseudo instruction calls the runtime to create a GeneratorFunction instance.
 * instance and bind it with code. The resulting instance will
 * be stored into the accumulator.
 */
var DefineGeneratorfuncDyn = /** @class */ (function (_super) {
    __extends(DefineGeneratorfuncDyn, _super);
    function DefineGeneratorfuncDyn(id, env) {
        return _super.call(this, IRNodeKind.DEFINE_GENERATOR_FUNC, "defineGeneratorFunc", [id, env], [
            [new FormatItem(OperandKind.Id, 32), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    DefineGeneratorfuncDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefineGeneratorfuncDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DefineGeneratorfuncDyn;
}(Intrinsic));
exports.DefineGeneratorfuncDyn = DefineGeneratorfuncDyn;
/**
 * The pseudo instruction calls the runtime to create a GeneratorObj instance.
 */
var CreateGeneratorObjDyn = /** @class */ (function (_super) {
    __extends(CreateGeneratorObjDyn, _super);
    function CreateGeneratorObjDyn(funcObj) {
        return _super.call(this, IRNodeKind.CREATE_GENERATOR_OBJ, "createGeneratorObj", [funcObj], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    CreateGeneratorObjDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CreateGeneratorObjDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateGeneratorObjDyn;
}(Intrinsic));
exports.CreateGeneratorObjDyn = CreateGeneratorObjDyn;
/**
 * The pseudo instruction calls the runtime to create a iterator instance instance by input para.
 */
var CreateIterResultObjectDyn = /** @class */ (function (_super) {
    __extends(CreateIterResultObjectDyn, _super);
    function CreateIterResultObjectDyn(value, done) {
        return _super.call(this, IRNodeKind.CREATE_ITERRESULT_OBJ, "createIterResultObj", [value, done], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    CreateIterResultObjectDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CreateIterResultObjectDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateIterResultObjectDyn;
}(Intrinsic));
exports.CreateIterResultObjectDyn = CreateIterResultObjectDyn;
/**
 * The pseudo instruction suspends execution of current generator function and returns the value yeild expression created.
 */
var SuspendGeneratorDyn = /** @class */ (function (_super) {
    __extends(SuspendGeneratorDyn, _super);
    function SuspendGeneratorDyn(genObj, iterRslt) {
        return _super.call(this, IRNodeKind.SUSPEND_GENERATOR, "suspendGenerator", [genObj, iterRslt], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    SuspendGeneratorDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    SuspendGeneratorDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return SuspendGeneratorDyn;
}(Intrinsic));
exports.SuspendGeneratorDyn = SuspendGeneratorDyn;
/**
 * The pseudo instruction resumes execution of current generator function when the consumer called .next.
 */
var ResumeGeneratorDyn = /** @class */ (function (_super) {
    __extends(ResumeGeneratorDyn, _super);
    function ResumeGeneratorDyn(genObj) {
        return _super.call(this, IRNodeKind.RESUME_GENERATOR, "resumeGenerator", [genObj], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    ResumeGeneratorDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    ResumeGeneratorDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return ResumeGeneratorDyn;
}(Intrinsic));
exports.ResumeGeneratorDyn = ResumeGeneratorDyn;
/**
 * The pseudo instruction get resume mode, 0:return, 1:throw, 2: next.
 */
var GetResumeModeDyn = /** @class */ (function (_super) {
    __extends(GetResumeModeDyn, _super);
    function GetResumeModeDyn(genObj) {
        return _super.call(this, IRNodeKind.GET_RESUME_MODE, "getResumeMode", [genObj], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    GetResumeModeDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    GetResumeModeDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GetResumeModeDyn;
}(Intrinsic));
exports.GetResumeModeDyn = GetResumeModeDyn;
/**
 * The pseudo instruction defines the async function and returns the AsyncFunction instance.
 */
var DefineAsyncFuncDyn = /** @class */ (function (_super) {
    __extends(DefineAsyncFuncDyn, _super);
    function DefineAsyncFuncDyn(id, env) {
        return _super.call(this, IRNodeKind.DEFINE_ASYNC_FUNC, "defineAsyncFunc", [id, env], [
            [new FormatItem(OperandKind.Id, 32), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    DefineAsyncFuncDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefineAsyncFuncDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DefineAsyncFuncDyn;
}(Intrinsic));
exports.DefineAsyncFuncDyn = DefineAsyncFuncDyn;
/**
 * The pseudo instruction inits execution environment and returns the AsyncFunctionObj instance.
 */
var AsyncFunctionEnterDyn = /** @class */ (function (_super) {
    __extends(AsyncFunctionEnterDyn, _super);
    function AsyncFunctionEnterDyn() {
        return _super.call(this, IRNodeKind.ASYNC_FUNCTION_ENTER, "asyncFunctionEnter", [], [[]]) || this;
    }
    AsyncFunctionEnterDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    AsyncFunctionEnterDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return AsyncFunctionEnterDyn;
}(Intrinsic));
exports.AsyncFunctionEnterDyn = AsyncFunctionEnterDyn;
/**
 * The pseudo instruction waits the state of promise which the await expression returns
 * is changed to fulfilled.
 */
var AsyncFunctionAwaitUncaughtDyn = /** @class */ (function (_super) {
    __extends(AsyncFunctionAwaitUncaughtDyn, _super);
    function AsyncFunctionAwaitUncaughtDyn(asynFuncObj, value) {
        return _super.call(this, IRNodeKind.ASYNC_FUNCTION_AWAIT_UNCAUGHT, "asyncFunctionAwaitUncaught", [asynFuncObj, value], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    AsyncFunctionAwaitUncaughtDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    AsyncFunctionAwaitUncaughtDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return AsyncFunctionAwaitUncaughtDyn;
}(Intrinsic));
exports.AsyncFunctionAwaitUncaughtDyn = AsyncFunctionAwaitUncaughtDyn;
/**
 * The pseudo instruction returns a resovled promise instance.
 */
var AsyncFunctionResolveDyn = /** @class */ (function (_super) {
    __extends(AsyncFunctionResolveDyn, _super);
    function AsyncFunctionResolveDyn(asynFuncObj, value, canSuspend) {
        return _super.call(this, IRNodeKind.ASYNC_FUNCTION_RESOLVE, "asyncFunctionResolve", [asynFuncObj, value, canSuspend], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    AsyncFunctionResolveDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    AsyncFunctionResolveDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return AsyncFunctionResolveDyn;
}(Intrinsic));
exports.AsyncFunctionResolveDyn = AsyncFunctionResolveDyn;
/**
 * The pseudo instruction returns a rejected promise instance.
 */
var AsyncFunctionRejectDyn = /** @class */ (function (_super) {
    __extends(AsyncFunctionRejectDyn, _super);
    function AsyncFunctionRejectDyn(asynFuncObj, value, canSuspend) {
        return _super.call(this, IRNodeKind.ASYNC_FUNCTION_REJECT, "asyncFunctionReject", [asynFuncObj, value, canSuspend], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    AsyncFunctionRejectDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    AsyncFunctionRejectDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return AsyncFunctionRejectDyn;
}(Intrinsic));
exports.AsyncFunctionRejectDyn = AsyncFunctionRejectDyn;
/**
 * This pseudo instruction load hole to acc.
 */
var LdHole = /** @class */ (function (_super) {
    __extends(LdHole, _super);
    function LdHole() {
        return _super.call(this, IRNodeKind.LDHOLE, "ldHole", [], [[]]) || this;
    }
    LdHole.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdHole.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdHole;
}(Intrinsic));
exports.LdHole = LdHole;
/**
 * The pseudo instruction returns a template object.
 */
var GetTemplateObject = /** @class */ (function (_super) {
    __extends(GetTemplateObject, _super);
    function GetTemplateObject(v) {
        return _super.call(this, IRNodeKind.GET_TEMPLATE_OBJECT, "getTemplateObject", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    GetTemplateObject.prototype.resultType = function () {
        return ResultType.Obj;
    };
    GetTemplateObject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GetTemplateObject;
}(Intrinsic));
exports.GetTemplateObject = GetTemplateObject;
/**
 * The pseudo instruction will create an Array by rest parameters.
 */
var CopyRestArgs = /** @class */ (function (_super) {
    __extends(CopyRestArgs, _super);
    function CopyRestArgs(index) {
        return _super.call(this, IRNodeKind.COPY_REST_ARGS, "copyrestargs", [index], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    CopyRestArgs.prototype.resultType = function () {
        return ResultType.Obj;
    };
    CopyRestArgs.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CopyRestArgs;
}(Intrinsic));
exports.CopyRestArgs = CopyRestArgs;
var TryLdGlobalByName = /** @class */ (function (_super) {
    __extends(TryLdGlobalByName, _super);
    function TryLdGlobalByName(name) {
        var _this = _super.call(this, IRNodeKind.TRYLDGLOBALBYNAME, "TryLdGlobalByName", [name, new Imm(ResultType.Int, 0)], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
        _this.slotSize = 1;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    TryLdGlobalByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    TryLdGlobalByName.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    TryLdGlobalByName.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return TryLdGlobalByName;
}(Intrinsic));
exports.TryLdGlobalByName = TryLdGlobalByName;
var TryStGlobalByName = /** @class */ (function (_super) {
    __extends(TryStGlobalByName, _super);
    function TryStGlobalByName(key) {
        var _this = _super.call(this, IRNodeKind.TRYSTGLOBALBYNAME, "TryStGlobalByName", [key, new Imm(ResultType.Int, 0)], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
        _this.slotSize = 1;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    TryStGlobalByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    TryStGlobalByName.prototype.resultType = function () {
        return ResultType.None;
    };
    TryStGlobalByName.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return TryStGlobalByName;
}(Intrinsic));
exports.TryStGlobalByName = TryStGlobalByName;
var TryLdGlobalByValue = /** @class */ (function (_super) {
    __extends(TryLdGlobalByValue, _super);
    function TryLdGlobalByValue(key) {
        var _this = _super.call(this, IRNodeKind.TRYLDGLOBALBYVALUE, "tryLdGlobalByValue", [new Imm(ResultType.Int, 0), key], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 1;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    TryLdGlobalByValue.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    TryLdGlobalByValue.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    TryLdGlobalByValue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return TryLdGlobalByValue;
}(Intrinsic));
exports.TryLdGlobalByValue = TryLdGlobalByValue;
var TryStGlobalByValue = /** @class */ (function (_super) {
    __extends(TryStGlobalByValue, _super);
    function TryStGlobalByValue(key) {
        var _this = _super.call(this, IRNodeKind.TRYSTGLOBALBYVALUE, "tryStGlobalByValue", [new Imm(ResultType.Int, 0), key], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 1;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    TryStGlobalByValue.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    TryStGlobalByValue.prototype.resultType = function () {
        return ResultType.None;
    };
    TryStGlobalByValue.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return TryStGlobalByValue;
}(Intrinsic));
exports.TryStGlobalByValue = TryStGlobalByValue;
var LdGlobalVar = /** @class */ (function (_super) {
    __extends(LdGlobalVar, _super);
    function LdGlobalVar(key) {
        var _this = _super.call(this, IRNodeKind.LDGLOBALVAR, "LdGlobalVar", [key, new Imm(ResultType.Int, 0)], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
        _this.slotSize = 1;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    LdGlobalVar.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    LdGlobalVar.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdGlobalVar.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdGlobalVar;
}(Intrinsic));
exports.LdGlobalVar = LdGlobalVar;
var StGlobalVar = /** @class */ (function (_super) {
    __extends(StGlobalVar, _super);
    function StGlobalVar(key) {
        var _this = _super.call(this, IRNodeKind.STGLOBALVAR, "StGlobalVar", [key, new Imm(ResultType.Int, 0)], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
        _this.slotSize = 1;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StGlobalVar.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StGlobalVar.prototype.resultType = function () {
        return ResultType.None;
    };
    StGlobalVar.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StGlobalVar;
}(Intrinsic));
exports.StGlobalVar = StGlobalVar;
var LdObjByName = /** @class */ (function (_super) {
    __extends(LdObjByName, _super);
    function LdObjByName(key, obj) {
        var _this = _super.call(this, IRNodeKind.LDOBJBYNAME, "LdObjByName", [key, new Imm(ResultType.Int, 0), obj], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    LdObjByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    LdObjByName.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdObjByName.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdObjByName;
}(Intrinsic));
exports.LdObjByName = LdObjByName;
var StObjByName = /** @class */ (function (_super) {
    __extends(StObjByName, _super);
    function StObjByName(key, obj) {
        var _this = _super.call(this, IRNodeKind.STOBJBYNAME, "StObjByName", [key, new Imm(ResultType.Int, 0), obj], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StObjByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StObjByName.prototype.resultType = function () {
        return ResultType.None;
    };
    StObjByName.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StObjByName;
}(Intrinsic));
exports.StObjByName = StObjByName;
var LdObjByIndex = /** @class */ (function (_super) {
    __extends(LdObjByIndex, _super);
    function LdObjByIndex(obj, index) {
        var _this = _super.call(this, IRNodeKind.LDOBJBYINDEX, "LdObjByIndex", [new Imm(ResultType.Int, 0), obj, index], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 32), new FormatItem(OperandKind.SrcVReg, 32)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    LdObjByIndex.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    LdObjByIndex.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdObjByIndex.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdObjByIndex;
}(Intrinsic));
exports.LdObjByIndex = LdObjByIndex;
var StObjByIndex = /** @class */ (function (_super) {
    __extends(StObjByIndex, _super);
    function StObjByIndex(obj, index) {
        var _this = _super.call(this, IRNodeKind.STOBJBYINDEX, "StObjByIndex", [new Imm(ResultType.Int, 0), obj, index], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StObjByIndex.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StObjByIndex.prototype.resultType = function () {
        return ResultType.None;
    };
    StObjByIndex.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StObjByIndex;
}(Intrinsic));
exports.StObjByIndex = StObjByIndex;
var LdObjByValue = /** @class */ (function (_super) {
    __extends(LdObjByValue, _super);
    function LdObjByValue(v1, v2) {
        var _this = _super.call(this, IRNodeKind.LDOBJBYVALUE, "ldObjByValue", [new Imm(ResultType.Int, 0), v1, v2], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    LdObjByValue.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    LdObjByValue.prototype.resultType = function () {
        return ResultType.None;
    };
    LdObjByValue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdObjByValue;
}(Intrinsic));
exports.LdObjByValue = LdObjByValue;
var StObjByValue = /** @class */ (function (_super) {
    __extends(StObjByValue, _super);
    function StObjByValue(v1, v2) {
        var _this = _super.call(this, IRNodeKind.STOBJBYVALUE, "stObjByValue", [new Imm(ResultType.Int, 0), v1, v2], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    StObjByValue.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StObjByValue.prototype.resultType = function () {
        return ResultType.None;
    };
    StObjByValue.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StObjByValue;
}(Intrinsic));
exports.StObjByValue = StObjByValue;
var StOwnByName = /** @class */ (function (_super) {
    __extends(StOwnByName, _super);
    function StOwnByName(key, obj) {
        var _this = _super.call(this, IRNodeKind.STOWNBYNAME, "StOwnByName", [key, new Imm(ResultType.Int, 0), obj], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StOwnByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StOwnByName.prototype.resultType = function () {
        return ResultType.None;
    };
    StOwnByName.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StOwnByName;
}(Intrinsic));
exports.StOwnByName = StOwnByName;
var StOwnByIndex = /** @class */ (function (_super) {
    __extends(StOwnByIndex, _super);
    function StOwnByIndex(obj, index) {
        var _this = _super.call(this, IRNodeKind.STOWNBYINDEX, "StOwnByIndex", [new Imm(ResultType.Int, 0), obj, index], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StOwnByIndex.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StOwnByIndex.prototype.resultType = function () {
        return ResultType.None;
    };
    StOwnByIndex.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StOwnByIndex;
}(Intrinsic));
exports.StOwnByIndex = StOwnByIndex;
var StOwnByValue = /** @class */ (function (_super) {
    __extends(StOwnByValue, _super);
    function StOwnByValue(obj, value) {
        var _this = _super.call(this, IRNodeKind.STOWNBYVALUE, "StOwnByValue", [new Imm(ResultType.Int, 0), obj, value], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StOwnByValue.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StOwnByValue.prototype.resultType = function () {
        return ResultType.None;
    };
    StOwnByValue.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StOwnByValue;
}(Intrinsic));
exports.StOwnByValue = StOwnByValue;
var Call0Dyn = /** @class */ (function (_super) {
    __extends(Call0Dyn, _super);
    function Call0Dyn(func) {
        return _super.call(this, IRNodeKind.CALL0DYN, "Call0Dyn", [func], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Call0Dyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    Call0Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Call0Dyn;
}(Intrinsic));
exports.Call0Dyn = Call0Dyn;
var Call1Dyn = /** @class */ (function (_super) {
    __extends(Call1Dyn, _super);
    function Call1Dyn(func, arg) {
        return _super.call(this, IRNodeKind.CALL1DYN, "Call1Dyn", [func, arg], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Call1Dyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    Call1Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Call1Dyn;
}(Intrinsic));
exports.Call1Dyn = Call1Dyn;
var Call2Dyn = /** @class */ (function (_super) {
    __extends(Call2Dyn, _super);
    function Call2Dyn(func, arg0, arg1) {
        return _super.call(this, IRNodeKind.CALL2DYN, "Call2Dyn", [func, arg0, arg1], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Call2Dyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    Call2Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Call2Dyn;
}(Intrinsic));
exports.Call2Dyn = Call2Dyn;
var Call3Dyn = /** @class */ (function (_super) {
    __extends(Call3Dyn, _super);
    function Call3Dyn(func, arg0, arg1, arg2) {
        return _super.call(this, IRNodeKind.CALL3DYN, "Call3Dyn", [func, arg0, arg1, arg2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Call3Dyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    Call3Dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Call3Dyn;
}(Intrinsic));
exports.Call3Dyn = Call3Dyn;
var CalliRangeDyn = /** @class */ (function (_super) {
    __extends(CalliRangeDyn, _super);
    function CalliRangeDyn(length, args) {
        var _this = this;
        var ctors = __spreadArrays([length], args);
        var operands = [length];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALLIRANGEDYN, "CalliRangeDyn", operands, [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CalliRangeDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CalliRangeDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CalliRangeDyn;
}(Intrinsic));
exports.CalliRangeDyn = CalliRangeDyn;
var CalliThisRangeDyn = /** @class */ (function (_super) {
    __extends(CalliThisRangeDyn, _super);
    function CalliThisRangeDyn(length, args) {
        var _this = this;
        var ctors = __spreadArrays([length], args);
        var operands = [length];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALLITHISRANGEDYN, "CalliThisRangeDyn", operands, [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CalliThisRangeDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CalliThisRangeDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CalliThisRangeDyn;
}(Intrinsic));
exports.CalliThisRangeDyn = CalliThisRangeDyn;
var NewObjDynRange = /** @class */ (function (_super) {
    __extends(NewObjDynRange, _super);
    function NewObjDynRange(argNum, v) {
        var _this = this;
        var ctors = __spreadArrays([argNum], v);
        var operands = [argNum];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.NEWOBJDYNRANGE, "newobjDynrange", operands, [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    NewObjDynRange.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    NewObjDynRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NewObjDynRange;
}(Intrinsic));
exports.NewObjDynRange = NewObjDynRange;
var GetNextPropName = /** @class */ (function (_super) {
    __extends(GetNextPropName, _super);
    function GetNextPropName(iter) {
        return _super.call(this, IRNodeKind.GETNEXTPROPNAME, "getnextpropname", [iter], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    GetNextPropName.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    GetNextPropName.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GetNextPropName;
}(Intrinsic));
exports.GetNextPropName = GetNextPropName;
var ReturnUndefined = /** @class */ (function (_super) {
    __extends(ReturnUndefined, _super);
    function ReturnUndefined() {
        return _super.call(this, IRNodeKind.RETURNUNDEFINED, "ReturnUndefined", [], [
            []
        ]) || this;
    }
    ReturnUndefined.prototype.resultType = function () {
        return ResultType.None;
    };
    ReturnUndefined.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ReturnUndefined;
}(Intrinsic));
exports.ReturnUndefined = ReturnUndefined;
var CreateEmptyObject = /** @class */ (function (_super) {
    __extends(CreateEmptyObject, _super);
    function CreateEmptyObject() {
        return _super.call(this, IRNodeKind.CREATEEMPTYOBJECT, "createemptyobject", [], [[]]) || this;
    }
    CreateEmptyObject.prototype.resultType = function () {
        return ResultType.Obj;
    };
    CreateEmptyObject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateEmptyObject;
}(Intrinsic));
exports.CreateEmptyObject = CreateEmptyObject;
// this pseudo uses ACC as one argument which stores Lexical Env
var CreateObjectHavingMethod = /** @class */ (function (_super) {
    __extends(CreateObjectHavingMethod, _super);
    function CreateObjectHavingMethod(index) {
        return _super.call(this, IRNodeKind.CREATEOBJECTHAVINGMETHOD, "createobjecthavingmethod", [index], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    CreateObjectHavingMethod.prototype.resultType = function () {
        return ResultType.Obj;
    };
    CreateObjectHavingMethod.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateObjectHavingMethod;
}(Intrinsic));
exports.CreateObjectHavingMethod = CreateObjectHavingMethod;
var CreateObjectWithBuffer = /** @class */ (function (_super) {
    __extends(CreateObjectWithBuffer, _super);
    function CreateObjectWithBuffer(index) {
        return _super.call(this, IRNodeKind.CREATEOBJECTWITHBUFFER, "createobjectwithbuffer", [index], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    CreateObjectWithBuffer.prototype.resultType = function () {
        return ResultType.Obj;
    };
    CreateObjectWithBuffer.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateObjectWithBuffer;
}(Intrinsic));
exports.CreateObjectWithBuffer = CreateObjectWithBuffer;
var SetObjectWithProto = /** @class */ (function (_super) {
    __extends(SetObjectWithProto, _super);
    function SetObjectWithProto(proto, obj) {
        return _super.call(this, IRNodeKind.SETOBJECTWITHPROTO, "setobjectwithproto", [proto, obj], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    SetObjectWithProto.prototype.resultType = function () {
        return ResultType.None;
    };
    SetObjectWithProto.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return SetObjectWithProto;
}(Intrinsic));
exports.SetObjectWithProto = SetObjectWithProto;
var CopyDataProperties = /** @class */ (function (_super) {
    __extends(CopyDataProperties, _super);
    function CopyDataProperties(dstObj, srcObj) {
        return _super.call(this, IRNodeKind.COPYDATAPROPERTIES, "copydataproperties", [dstObj, srcObj], [
            [new FormatItem(OperandKind.SrcDstVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    CopyDataProperties.prototype.resultType = function () {
        return ResultType.None;
    };
    CopyDataProperties.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return CopyDataProperties;
}(Intrinsic));
exports.CopyDataProperties = CopyDataProperties;
var DefineGetterSetterByValue = /** @class */ (function (_super) {
    __extends(DefineGetterSetterByValue, _super);
    function DefineGetterSetterByValue(obj, name, getter, setter) {
        return _super.call(this, IRNodeKind.DEFINEGETTERSETTERBYVALUE, "definegettersetterbyvalue", [obj, name, getter, setter], [
            [new FormatItem(OperandKind.SrcDstVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    DefineGetterSetterByValue.prototype.resultType = function () {
        return ResultType.None;
    };
    DefineGetterSetterByValue.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return DefineGetterSetterByValue;
}(Intrinsic));
exports.DefineGetterSetterByValue = DefineGetterSetterByValue;
var CreateEmptyArray = /** @class */ (function (_super) {
    __extends(CreateEmptyArray, _super);
    function CreateEmptyArray() {
        return _super.call(this, IRNodeKind.CREATEEMPTYARRAY, "createemptyarray", [], [
            []
        ]) || this;
    }
    CreateEmptyArray.prototype.resultType = function () {
        return ResultType.Obj;
    };
    CreateEmptyArray.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateEmptyArray;
}(Intrinsic));
exports.CreateEmptyArray = CreateEmptyArray;
var CreateArrayWithBuffer = /** @class */ (function (_super) {
    __extends(CreateArrayWithBuffer, _super);
    function CreateArrayWithBuffer(index) {
        return _super.call(this, IRNodeKind.CREATEARRAYWITHBUFFER, "createarraywithbuffer", [index], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    CreateArrayWithBuffer.prototype.resultType = function () {
        return ResultType.Obj;
    };
    CreateArrayWithBuffer.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateArrayWithBuffer;
}(Intrinsic));
exports.CreateArrayWithBuffer = CreateArrayWithBuffer;
var StArraySpread = /** @class */ (function (_super) {
    __extends(StArraySpread, _super);
    function StArraySpread(array, index) {
        return _super.call(this, IRNodeKind.STARRAYSPREAD, "starrayspread", [array, index], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    StArraySpread.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    StArraySpread.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return StArraySpread;
}(Intrinsic));
exports.StArraySpread = StArraySpread;
var ThrowIfNotObject = /** @class */ (function (_super) {
    __extends(ThrowIfNotObject, _super);
    function ThrowIfNotObject(value) {
        return _super.call(this, IRNodeKind.THROWIFNOTOBJECT, "ThrowIfNotObject", [value], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    ThrowIfNotObject.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    ThrowIfNotObject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return ThrowIfNotObject;
}(Intrinsic));
exports.ThrowIfNotObject = ThrowIfNotObject;
var CreateObjectWithExcludedKeys = /** @class */ (function (_super) {
    __extends(CreateObjectWithExcludedKeys, _super);
    function CreateObjectWithExcludedKeys(index, obj, args) {
        var _this = this;
        var ctors = __spreadArrays([index, obj], args);
        var operands = [index, obj];
        ctors.shift();
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CREATEOBJECTWITHEXCLUDEDKEYS, "CreateObjectWithExcludedKeys", operands, [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CreateObjectWithExcludedKeys.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CreateObjectWithExcludedKeys.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CreateObjectWithExcludedKeys;
}(Intrinsic));
exports.CreateObjectWithExcludedKeys = CreateObjectWithExcludedKeys;
var ThrowPatternNonCoercible = /** @class */ (function (_super) {
    __extends(ThrowPatternNonCoercible, _super);
    function ThrowPatternNonCoercible() {
        return _super.call(this, IRNodeKind.THROWPATTERNNONCOERCIBLE, "ThrowPatternNonCoercible", [], [[]]) || this;
    }
    ThrowPatternNonCoercible.prototype.resultType = function () {
        return ResultType.Obj;
    };
    ThrowPatternNonCoercible.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ThrowPatternNonCoercible;
}(Intrinsic));
exports.ThrowPatternNonCoercible = ThrowPatternNonCoercible;
var GetIterator = /** @class */ (function (_super) {
    __extends(GetIterator, _super);
    function GetIterator() {
        return _super.call(this, IRNodeKind.GETITERATOR, "GetIterator", [], [
            []
        ]) || this;
    }
    GetIterator.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    GetIterator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GetIterator;
}(Intrinsic));
exports.GetIterator = GetIterator;
var GetIteratorNext = /** @class */ (function (_super) {
    __extends(GetIteratorNext, _super);
    function GetIteratorNext(iter, nextMethod) {
        return _super.call(this, IRNodeKind.GETITERATORNEXT, "GetIteratorNext", [iter, nextMethod], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    GetIteratorNext.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    GetIteratorNext.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return GetIteratorNext;
}(Intrinsic));
exports.GetIteratorNext = GetIteratorNext;
var DefineClassWithBuffer = /** @class */ (function (_super) {
    __extends(DefineClassWithBuffer, _super);
    function DefineClassWithBuffer(id, idx, env, base) {
        return _super.call(this, IRNodeKind.DEFINECLASSWITHBUFFER, "DefineClassWithBuffer", [id, idx, env, base], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    DefineClassWithBuffer.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefineClassWithBuffer.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DefineClassWithBuffer;
}(Intrinsic));
exports.DefineClassWithBuffer = DefineClassWithBuffer;
var SuperCall = /** @class */ (function (_super) {
    __extends(SuperCall, _super);
    function SuperCall(num, start) {
        return _super.call(this, IRNodeKind.SUPERCALL, "SuperCall", [num, start], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    SuperCall.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    SuperCall.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return SuperCall;
}(Intrinsic));
exports.SuperCall = SuperCall;
var SuperCallSpread = /** @class */ (function (_super) {
    __extends(SuperCallSpread, _super);
    function SuperCallSpread(vs) {
        return _super.call(this, IRNodeKind.SUPERCALLSPREAD, "SuperCallSpread", [vs], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    SuperCallSpread.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    SuperCallSpread.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return SuperCallSpread;
}(Intrinsic));
exports.SuperCallSpread = SuperCallSpread;
var CloseIterator = /** @class */ (function (_super) {
    __extends(CloseIterator, _super);
    function CloseIterator(iter) {
        return _super.call(this, IRNodeKind.CLOSEITERATOR, "CloseIterator", [iter], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    CloseIterator.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CloseIterator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CloseIterator;
}(Intrinsic));
exports.CloseIterator = CloseIterator;
var DefineMethod = /** @class */ (function (_super) {
    __extends(DefineMethod, _super);
    function DefineMethod(id, realname) {
        return _super.call(this, IRNodeKind.DEFINEMETHOD, "defineMethod", [id, realname], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    DefineMethod.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    DefineMethod.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return DefineMethod;
}(Intrinsic));
exports.DefineMethod = DefineMethod;
var LdSuperByName = /** @class */ (function (_super) {
    __extends(LdSuperByName, _super);
    function LdSuperByName(key, obj) {
        var _this = _super.call(this, IRNodeKind.LDSUPERBYNAME, "LdSuperByName", [key, new Imm(ResultType.Int, 0), obj], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    LdSuperByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    LdSuperByName.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdSuperByName.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdSuperByName;
}(Intrinsic));
exports.LdSuperByName = LdSuperByName;
var StSuperByName = /** @class */ (function (_super) {
    __extends(StSuperByName, _super);
    function StSuperByName(key, obj) {
        var _this = _super.call(this, IRNodeKind.STSUPERBYNAME, "StSuperByName", [key, new Imm(ResultType.Int, 0), obj], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StSuperByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StSuperByName.prototype.resultType = function () {
        return ResultType.None;
    };
    StSuperByName.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StSuperByName;
}(Intrinsic));
exports.StSuperByName = StSuperByName;
var LdSuperByValue = /** @class */ (function (_super) {
    __extends(LdSuperByValue, _super);
    function LdSuperByValue(v1, v2) {
        var _this = _super.call(this, IRNodeKind.LDSUPERBYVALUE, "LdSuperByValue", [new Imm(ResultType.Int, 0), v1, v2], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    LdSuperByValue.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    LdSuperByValue.prototype.resultType = function () {
        return ResultType.None;
    };
    LdSuperByValue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdSuperByValue;
}(Intrinsic));
exports.LdSuperByValue = LdSuperByValue;
var StSuperByValue = /** @class */ (function (_super) {
    __extends(StSuperByValue, _super);
    function StSuperByValue(v1, v2) {
        var _this = _super.call(this, IRNodeKind.STSUPERBYVALUE, "StSuperByValue", [new Imm(ResultType.Int, 0), v1, v2], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        _this.slotSize = 2;
        return _this;
    }
    StSuperByValue.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[0] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StSuperByValue.prototype.resultType = function () {
        return ResultType.None;
    };
    StSuperByValue.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StSuperByValue;
}(Intrinsic));
exports.StSuperByValue = StSuperByValue;
var ImportModule = /** @class */ (function (_super) {
    __extends(ImportModule, _super);
    function ImportModule(name) {
        return _super.call(this, IRNodeKind.IMPORTMODULE, "ImportModule", [name], [[new FormatItem(OperandKind.StringId, 32)]]) || this;
    }
    ImportModule.prototype.resultType = function () {
        return ResultType.Obj;
    };
    ImportModule.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return ImportModule;
}(Intrinsic));
exports.ImportModule = ImportModule;
var LdModvarByName = /** @class */ (function (_super) {
    __extends(LdModvarByName, _super);
    function LdModvarByName(varName, module) {
        var _this = _super.call(this, IRNodeKind.LDMODVARBYNAME, "LdModvarByName", [varName, new Imm(ResultType.Int, 0), module], [[new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    LdModvarByName.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    LdModvarByName.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdModvarByName.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdModvarByName;
}(Intrinsic));
exports.LdModvarByName = LdModvarByName;
var StModuleVar = /** @class */ (function (_super) {
    __extends(StModuleVar, _super);
    function StModuleVar(varName) {
        var _this = _super.call(this, IRNodeKind.STMODULEVAR, "StModuleVar", [varName, new Imm(ResultType.Int, 0)], [[new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16)]]) || this;
        _this.slotSize = 2;
        return _this;
    }
    // set slot offset, 0xff represent overflow, dont use ic for this instruction
    StModuleVar.prototype.updateICOffset = function (base) {
        var offset = this.validateIC(base, this.slotSize);
        this.operands[1] = new Imm(ResultType.Int, offset);
        return base + this.slotSize;
    };
    StModuleVar.prototype.resultType = function () {
        return ResultType.None;
    };
    StModuleVar.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StModuleVar;
}(Intrinsic));
exports.StModuleVar = StModuleVar;
var CopyModule = /** @class */ (function (_super) {
    __extends(CopyModule, _super);
    function CopyModule(v) {
        return _super.call(this, IRNodeKind.COPYMODULE, "CopyModule", [v], [[new FormatItem(OperandKind.SrcVReg, 8)]]) || this;
    }
    CopyModule.prototype.resultType = function () {
        return ResultType.None;
    };
    CopyModule.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return CopyModule;
}(Intrinsic));
exports.CopyModule = CopyModule;
var ThrowIfSuperNotCorrectCall = /** @class */ (function (_super) {
    __extends(ThrowIfSuperNotCorrectCall, _super);
    function ThrowIfSuperNotCorrectCall(num) {
        return _super.call(this, IRNodeKind.THROWIFSUPERNOTCORRECTCALL, "ThrowIfSuperNotCorrectCall", [num], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    ThrowIfSuperNotCorrectCall.prototype.resultType = function () {
        return ResultType.None;
    };
    ThrowIfSuperNotCorrectCall.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ThrowIfSuperNotCorrectCall;
}(Intrinsic));
exports.ThrowIfSuperNotCorrectCall = ThrowIfSuperNotCorrectCall;
var LdHomeObject = /** @class */ (function (_super) {
    __extends(LdHomeObject, _super);
    function LdHomeObject() {
        return _super.call(this, IRNodeKind.LDHOMEOBJECT, "LdHomeObject", [], [
            []
        ]) || this;
    }
    LdHomeObject.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    LdHomeObject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdHomeObject;
}(Intrinsic));
exports.LdHomeObject = LdHomeObject;
var Mov = /** @class */ (function (_super) {
    __extends(Mov, _super);
    function Mov(v1, v2) {
        return _super.call(this, IRNodeKind.MOV, "mov", [v1, v2], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)],
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)],
            [new FormatItem(OperandKind.DstVReg, 16), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    Mov.prototype.resultType = function () {
        return ResultType.Int;
    };
    Mov.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return Mov;
}(IRNode));
exports.Mov = Mov;
var MovWide = /** @class */ (function (_super) {
    __extends(MovWide, _super);
    function MovWide(v1, v2) {
        return _super.call(this, IRNodeKind.MOV_64, "mov.64", [v1, v2], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)],
            [new FormatItem(OperandKind.DstVReg, 16), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    MovWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    MovWide.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return MovWide;
}(IRNode));
exports.MovWide = MovWide;
var MovObj = /** @class */ (function (_super) {
    __extends(MovObj, _super);
    function MovObj(v1, v2) {
        return _super.call(this, IRNodeKind.MOV_OBJ, "mov.obj", [v1, v2], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)],
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)],
            [new FormatItem(OperandKind.DstVReg, 16), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    MovObj.prototype.resultType = function () {
        return ResultType.None;
    };
    MovObj.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return MovObj;
}(IRNode));
exports.MovObj = MovObj;
var Movi = /** @class */ (function (_super) {
    __extends(Movi, _super);
    function Movi(v, imm) {
        return _super.call(this, IRNodeKind.MOVI, "movi", [v, imm], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.Imm, 4)],
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Imm, 8)],
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Imm, 16)],
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    Movi.prototype.resultType = function () {
        return ResultType.Int;
    };
    Movi.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return Movi;
}(IRNode));
exports.Movi = Movi;
var MoviWide = /** @class */ (function (_super) {
    __extends(MoviWide, _super);
    function MoviWide(v, imm) {
        return _super.call(this, IRNodeKind.MOVI_64, "movi.64", [v, imm], [
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Imm, 64)]
        ]) || this;
    }
    MoviWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    MoviWide.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return MoviWide;
}(IRNode));
exports.MoviWide = MoviWide;
var FmoviWide = /** @class */ (function (_super) {
    __extends(FmoviWide, _super);
    function FmoviWide(v, imm) {
        return _super.call(this, IRNodeKind.FMOVI_64, "fmovi.64", [v, imm], [
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Imm, 64)]
        ]) || this;
    }
    FmoviWide.prototype.resultType = function () {
        return ResultType.Float;
    };
    FmoviWide.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return FmoviWide;
}(IRNode));
exports.FmoviWide = FmoviWide;
var MovNull = /** @class */ (function (_super) {
    __extends(MovNull, _super);
    function MovNull(v) {
        return _super.call(this, IRNodeKind.MOV_NULL, "mov.null", [v], [
            [new FormatItem(OperandKind.DstVReg, 8)]
        ]) || this;
    }
    MovNull.prototype.resultType = function () {
        return ResultType.None;
    };
    MovNull.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return MovNull;
}(IRNode));
exports.MovNull = MovNull;
var Lda = /** @class */ (function (_super) {
    __extends(Lda, _super);
    function Lda(v) {
        return _super.call(this, IRNodeKind.LDA, "lda", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Lda.prototype.resultType = function () {
        return ResultType.Int;
    };
    Lda.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Lda;
}(IRNode));
exports.Lda = Lda;
var LdaWide = /** @class */ (function (_super) {
    __extends(LdaWide, _super);
    function LdaWide(v) {
        return _super.call(this, IRNodeKind.LDA_64, "lda.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LdaWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    LdaWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaWide;
}(IRNode));
exports.LdaWide = LdaWide;
var LdaObj = /** @class */ (function (_super) {
    __extends(LdaObj, _super);
    function LdaObj(v) {
        return _super.call(this, IRNodeKind.LDA_OBJ, "lda.obj", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LdaObj.prototype.resultType = function () {
        return ResultType.None;
    };
    LdaObj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaObj;
}(IRNode));
exports.LdaObj = LdaObj;
var Ldai = /** @class */ (function (_super) {
    __extends(Ldai, _super);
    function Ldai(imm) {
        return _super.call(this, IRNodeKind.LDAI, "ldai", [imm], [
            [new FormatItem(OperandKind.Imm, 8)],
            [new FormatItem(OperandKind.Imm, 16)],
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    Ldai.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldai.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldai;
}(IRNode));
exports.Ldai = Ldai;
var LdaiWide = /** @class */ (function (_super) {
    __extends(LdaiWide, _super);
    function LdaiWide(imm) {
        return _super.call(this, IRNodeKind.LDAI_64, "ldai.64", [imm], [
            [new FormatItem(OperandKind.Imm, 64)]
        ]) || this;
    }
    LdaiWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    LdaiWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaiWide;
}(IRNode));
exports.LdaiWide = LdaiWide;
var FldaiWide = /** @class */ (function (_super) {
    __extends(FldaiWide, _super);
    function FldaiWide(imm) {
        return _super.call(this, IRNodeKind.FLDAI_64, "fldai.64", [imm], [
            [new FormatItem(OperandKind.Imm, 64)]
        ]) || this;
    }
    FldaiWide.prototype.resultType = function () {
        return ResultType.Float;
    };
    FldaiWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return FldaiWide;
}(IRNode));
exports.FldaiWide = FldaiWide;
var LdaStr = /** @class */ (function (_super) {
    __extends(LdaStr, _super);
    function LdaStr(string_id) {
        return _super.call(this, IRNodeKind.LDA_STR, "lda.str", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    LdaStr.prototype.resultType = function () {
        return ResultType.None;
    };
    LdaStr.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaStr;
}(IRNode));
exports.LdaStr = LdaStr;
var LdaType = /** @class */ (function (_super) {
    __extends(LdaType, _super);
    function LdaType(type_id) {
        return _super.call(this, IRNodeKind.LDA_TYPE, "lda.type", [type_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdaType.prototype.resultType = function () {
        return ResultType.None;
    };
    LdaType.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaType;
}(IRNode));
exports.LdaType = LdaType;
var LdaNull = /** @class */ (function (_super) {
    __extends(LdaNull, _super);
    function LdaNull() {
        return _super.call(this, IRNodeKind.LDA_NULL, "lda.null", [], [
            []
        ]) || this;
    }
    LdaNull.prototype.resultType = function () {
        return ResultType.None;
    };
    LdaNull.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaNull;
}(IRNode));
exports.LdaNull = LdaNull;
var Sta = /** @class */ (function (_super) {
    __extends(Sta, _super);
    function Sta(v) {
        return _super.call(this, IRNodeKind.STA, "sta", [v], [
            [new FormatItem(OperandKind.DstVReg, 8)]
        ]) || this;
    }
    Sta.prototype.resultType = function () {
        return ResultType.Int;
    };
    Sta.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return Sta;
}(IRNode));
exports.Sta = Sta;
var StaWide = /** @class */ (function (_super) {
    __extends(StaWide, _super);
    function StaWide(v) {
        return _super.call(this, IRNodeKind.STA_64, "sta.64", [v], [
            [new FormatItem(OperandKind.DstVReg, 8)]
        ]) || this;
    }
    StaWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    StaWide.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return StaWide;
}(IRNode));
exports.StaWide = StaWide;
var StaObj = /** @class */ (function (_super) {
    __extends(StaObj, _super);
    function StaObj(v) {
        return _super.call(this, IRNodeKind.STA_OBJ, "sta.obj", [v], [
            [new FormatItem(OperandKind.DstVReg, 8)]
        ]) || this;
    }
    StaObj.prototype.resultType = function () {
        return ResultType.None;
    };
    StaObj.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return StaObj;
}(IRNode));
exports.StaObj = StaObj;
var Jmp = /** @class */ (function (_super) {
    __extends(Jmp, _super);
    function Jmp(imm) {
        return _super.call(this, IRNodeKind.JMP, "jmp", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)],
            [new FormatItem(OperandKind.Label, 32)]
        ]) || this;
    }
    Jmp.prototype.resultType = function () {
        return ResultType.None;
    };
    Jmp.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jmp.prototype.getTarget = function () {
        return this.operands[0];
    };
    return Jmp;
}(IRNode));
exports.Jmp = Jmp;
var Cmp = /** @class */ (function (_super) {
    __extends(Cmp, _super);
    function Cmp(v) {
        return _super.call(this, IRNodeKind.CMP, "cmp", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Cmp.prototype.resultType = function () {
        return ResultType.Int;
    };
    Cmp.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Cmp;
}(IRNode));
exports.Cmp = Cmp;
var CmpWide = /** @class */ (function (_super) {
    __extends(CmpWide, _super);
    function CmpWide(v) {
        return _super.call(this, IRNodeKind.CMP_64, "cmp.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    CmpWide.prototype.resultType = function () {
        return ResultType.Int;
    };
    CmpWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CmpWide;
}(IRNode));
exports.CmpWide = CmpWide;
var Ucmp = /** @class */ (function (_super) {
    __extends(Ucmp, _super);
    function Ucmp(v) {
        return _super.call(this, IRNodeKind.UCMP, "ucmp", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ucmp.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ucmp.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ucmp;
}(IRNode));
exports.Ucmp = Ucmp;
var UcmpWide = /** @class */ (function (_super) {
    __extends(UcmpWide, _super);
    function UcmpWide(v) {
        return _super.call(this, IRNodeKind.UCMP_64, "ucmp.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    UcmpWide.prototype.resultType = function () {
        return ResultType.Int;
    };
    UcmpWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return UcmpWide;
}(IRNode));
exports.UcmpWide = UcmpWide;
var FcmplWide = /** @class */ (function (_super) {
    __extends(FcmplWide, _super);
    function FcmplWide(v) {
        return _super.call(this, IRNodeKind.FCMPL_64, "fcmpl.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    FcmplWide.prototype.resultType = function () {
        return ResultType.Int;
    };
    FcmplWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return FcmplWide;
}(IRNode));
exports.FcmplWide = FcmplWide;
var FcmpgWide = /** @class */ (function (_super) {
    __extends(FcmpgWide, _super);
    function FcmpgWide(v) {
        return _super.call(this, IRNodeKind.FCMPG_64, "fcmpg.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    FcmpgWide.prototype.resultType = function () {
        return ResultType.Int;
    };
    FcmpgWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return FcmpgWide;
}(IRNode));
exports.FcmpgWide = FcmpgWide;
var CmpObj = /** @class */ (function (_super) {
    __extends(CmpObj, _super);
    function CmpObj(v) {
        return _super.call(this, IRNodeKind.CMP_OBJ, "cmp.obj", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    CmpObj.prototype.resultType = function () {
        return ResultType.Int;
    };
    CmpObj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CmpObj;
}(IRNode));
exports.CmpObj = CmpObj;
var JeqObj = /** @class */ (function (_super) {
    __extends(JeqObj, _super);
    function JeqObj(v, imm) {
        return _super.call(this, IRNodeKind.JEQ_OBJ, "jeq.obj", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    JeqObj.prototype.resultType = function () {
        return ResultType.None;
    };
    JeqObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    JeqObj.prototype.getTarget = function () {
        return this.operands[1];
    };
    return JeqObj;
}(IRNode));
exports.JeqObj = JeqObj;
var JneObj = /** @class */ (function (_super) {
    __extends(JneObj, _super);
    function JneObj(v, imm) {
        return _super.call(this, IRNodeKind.JNE_OBJ, "jne.obj", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    JneObj.prototype.resultType = function () {
        return ResultType.None;
    };
    JneObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    JneObj.prototype.getTarget = function () {
        return this.operands[1];
    };
    return JneObj;
}(IRNode));
exports.JneObj = JneObj;
var JeqzObj = /** @class */ (function (_super) {
    __extends(JeqzObj, _super);
    function JeqzObj(imm) {
        return _super.call(this, IRNodeKind.JEQZ_OBJ, "jeqz.obj", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    JeqzObj.prototype.resultType = function () {
        return ResultType.None;
    };
    JeqzObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    JeqzObj.prototype.getTarget = function () {
        return this.operands[0];
    };
    return JeqzObj;
}(IRNode));
exports.JeqzObj = JeqzObj;
var JnezObj = /** @class */ (function (_super) {
    __extends(JnezObj, _super);
    function JnezObj(imm) {
        return _super.call(this, IRNodeKind.JNEZ_OBJ, "jnez.obj", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    JnezObj.prototype.resultType = function () {
        return ResultType.None;
    };
    JnezObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    JnezObj.prototype.getTarget = function () {
        return this.operands[0];
    };
    return JnezObj;
}(IRNode));
exports.JnezObj = JnezObj;
var Jeqz = /** @class */ (function (_super) {
    __extends(Jeqz, _super);
    function Jeqz(imm) {
        return _super.call(this, IRNodeKind.JEQZ, "jeqz", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jeqz.prototype.resultType = function () {
        return ResultType.None;
    };
    Jeqz.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jeqz.prototype.getTarget = function () {
        return this.operands[0];
    };
    return Jeqz;
}(IRNode));
exports.Jeqz = Jeqz;
var Jnez = /** @class */ (function (_super) {
    __extends(Jnez, _super);
    function Jnez(imm) {
        return _super.call(this, IRNodeKind.JNEZ, "jnez", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jnez.prototype.resultType = function () {
        return ResultType.None;
    };
    Jnez.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jnez.prototype.getTarget = function () {
        return this.operands[0];
    };
    return Jnez;
}(IRNode));
exports.Jnez = Jnez;
var Jltz = /** @class */ (function (_super) {
    __extends(Jltz, _super);
    function Jltz(imm) {
        return _super.call(this, IRNodeKind.JLTZ, "jltz", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jltz.prototype.resultType = function () {
        return ResultType.None;
    };
    Jltz.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jltz.prototype.getTarget = function () {
        return this.operands[0];
    };
    return Jltz;
}(IRNode));
exports.Jltz = Jltz;
var Jgtz = /** @class */ (function (_super) {
    __extends(Jgtz, _super);
    function Jgtz(imm) {
        return _super.call(this, IRNodeKind.JGTZ, "jgtz", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jgtz.prototype.resultType = function () {
        return ResultType.None;
    };
    Jgtz.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jgtz.prototype.getTarget = function () {
        return this.operands[0];
    };
    return Jgtz;
}(IRNode));
exports.Jgtz = Jgtz;
var Jlez = /** @class */ (function (_super) {
    __extends(Jlez, _super);
    function Jlez(imm) {
        return _super.call(this, IRNodeKind.JLEZ, "jlez", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jlez.prototype.resultType = function () {
        return ResultType.None;
    };
    Jlez.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jlez.prototype.getTarget = function () {
        return this.operands[0];
    };
    return Jlez;
}(IRNode));
exports.Jlez = Jlez;
var Jgez = /** @class */ (function (_super) {
    __extends(Jgez, _super);
    function Jgez(imm) {
        return _super.call(this, IRNodeKind.JGEZ, "jgez", [imm], [
            [new FormatItem(OperandKind.Label, 8)],
            [new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jgez.prototype.resultType = function () {
        return ResultType.None;
    };
    Jgez.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jgez.prototype.getTarget = function () {
        return this.operands[0];
    };
    return Jgez;
}(IRNode));
exports.Jgez = Jgez;
var Jeq = /** @class */ (function (_super) {
    __extends(Jeq, _super);
    function Jeq(v, imm) {
        return _super.call(this, IRNodeKind.JEQ, "jeq", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jeq.prototype.resultType = function () {
        return ResultType.None;
    };
    Jeq.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jeq.prototype.getTarget = function () {
        return this.operands[1];
    };
    return Jeq;
}(IRNode));
exports.Jeq = Jeq;
var Jne = /** @class */ (function (_super) {
    __extends(Jne, _super);
    function Jne(v, imm) {
        return _super.call(this, IRNodeKind.JNE, "jne", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jne.prototype.resultType = function () {
        return ResultType.None;
    };
    Jne.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jne.prototype.getTarget = function () {
        return this.operands[1];
    };
    return Jne;
}(IRNode));
exports.Jne = Jne;
var Jlt = /** @class */ (function (_super) {
    __extends(Jlt, _super);
    function Jlt(v, imm) {
        return _super.call(this, IRNodeKind.JLT, "jlt", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jlt.prototype.resultType = function () {
        return ResultType.None;
    };
    Jlt.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jlt.prototype.getTarget = function () {
        return this.operands[1];
    };
    return Jlt;
}(IRNode));
exports.Jlt = Jlt;
var Jgt = /** @class */ (function (_super) {
    __extends(Jgt, _super);
    function Jgt(v, imm) {
        return _super.call(this, IRNodeKind.JGT, "jgt", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jgt.prototype.resultType = function () {
        return ResultType.None;
    };
    Jgt.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jgt.prototype.getTarget = function () {
        return this.operands[1];
    };
    return Jgt;
}(IRNode));
exports.Jgt = Jgt;
var Jle = /** @class */ (function (_super) {
    __extends(Jle, _super);
    function Jle(v, imm) {
        return _super.call(this, IRNodeKind.JLE, "jle", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jle.prototype.resultType = function () {
        return ResultType.None;
    };
    Jle.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jle.prototype.getTarget = function () {
        return this.operands[1];
    };
    return Jle;
}(IRNode));
exports.Jle = Jle;
var Jge = /** @class */ (function (_super) {
    __extends(Jge, _super);
    function Jge(v, imm) {
        return _super.call(this, IRNodeKind.JGE, "jge", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Label, 4)],
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 16)]
        ]) || this;
    }
    Jge.prototype.resultType = function () {
        return ResultType.None;
    };
    Jge.prototype.resultIn = function () {
        return ResultDst.None;
    };
    Jge.prototype.getTarget = function () {
        return this.operands[1];
    };
    return Jge;
}(IRNode));
exports.Jge = Jge;
var Fadd2Wide = /** @class */ (function (_super) {
    __extends(Fadd2Wide, _super);
    function Fadd2Wide(v) {
        return _super.call(this, IRNodeKind.FADD2_64, "fadd2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fadd2Wide.prototype.resultType = function () {
        return ResultType.Float;
    };
    Fadd2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fadd2Wide;
}(IRNode));
exports.Fadd2Wide = Fadd2Wide;
var Fsub2Wide = /** @class */ (function (_super) {
    __extends(Fsub2Wide, _super);
    function Fsub2Wide(v) {
        return _super.call(this, IRNodeKind.FSUB2_64, "fsub2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fsub2Wide.prototype.resultType = function () {
        return ResultType.Float;
    };
    Fsub2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fsub2Wide;
}(IRNode));
exports.Fsub2Wide = Fsub2Wide;
var Fmul2Wide = /** @class */ (function (_super) {
    __extends(Fmul2Wide, _super);
    function Fmul2Wide(v) {
        return _super.call(this, IRNodeKind.FMUL2_64, "fmul2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fmul2Wide.prototype.resultType = function () {
        return ResultType.Float;
    };
    Fmul2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fmul2Wide;
}(IRNode));
exports.Fmul2Wide = Fmul2Wide;
var Fdiv2Wide = /** @class */ (function (_super) {
    __extends(Fdiv2Wide, _super);
    function Fdiv2Wide(v) {
        return _super.call(this, IRNodeKind.FDIV2_64, "fdiv2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fdiv2Wide.prototype.resultType = function () {
        return ResultType.Float;
    };
    Fdiv2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fdiv2Wide;
}(IRNode));
exports.Fdiv2Wide = Fdiv2Wide;
var Fmod2Wide = /** @class */ (function (_super) {
    __extends(Fmod2Wide, _super);
    function Fmod2Wide(v) {
        return _super.call(this, IRNodeKind.FMOD2_64, "fmod2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fmod2Wide.prototype.resultType = function () {
        return ResultType.Float;
    };
    Fmod2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fmod2Wide;
}(IRNode));
exports.Fmod2Wide = Fmod2Wide;
var Add2 = /** @class */ (function (_super) {
    __extends(Add2, _super);
    function Add2(v) {
        return _super.call(this, IRNodeKind.ADD2, "add2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Add2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Add2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Add2;
}(IRNode));
exports.Add2 = Add2;
var Add2Wide = /** @class */ (function (_super) {
    __extends(Add2Wide, _super);
    function Add2Wide(v) {
        return _super.call(this, IRNodeKind.ADD2_64, "add2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Add2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Add2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Add2Wide;
}(IRNode));
exports.Add2Wide = Add2Wide;
var Sub2 = /** @class */ (function (_super) {
    __extends(Sub2, _super);
    function Sub2(v) {
        return _super.call(this, IRNodeKind.SUB2, "sub2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Sub2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Sub2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Sub2;
}(IRNode));
exports.Sub2 = Sub2;
var Sub2Wide = /** @class */ (function (_super) {
    __extends(Sub2Wide, _super);
    function Sub2Wide(v) {
        return _super.call(this, IRNodeKind.SUB2_64, "sub2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Sub2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Sub2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Sub2Wide;
}(IRNode));
exports.Sub2Wide = Sub2Wide;
var Mul2 = /** @class */ (function (_super) {
    __extends(Mul2, _super);
    function Mul2(v) {
        return _super.call(this, IRNodeKind.MUL2, "mul2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Mul2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Mul2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mul2;
}(IRNode));
exports.Mul2 = Mul2;
var Mul2Wide = /** @class */ (function (_super) {
    __extends(Mul2Wide, _super);
    function Mul2Wide(v) {
        return _super.call(this, IRNodeKind.MUL2_64, "mul2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Mul2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Mul2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mul2Wide;
}(IRNode));
exports.Mul2Wide = Mul2Wide;
var And2 = /** @class */ (function (_super) {
    __extends(And2, _super);
    function And2(v) {
        return _super.call(this, IRNodeKind.AND2, "and2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    And2.prototype.resultType = function () {
        return ResultType.Int;
    };
    And2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return And2;
}(IRNode));
exports.And2 = And2;
var And2Wide = /** @class */ (function (_super) {
    __extends(And2Wide, _super);
    function And2Wide(v) {
        return _super.call(this, IRNodeKind.AND2_64, "and2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    And2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    And2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return And2Wide;
}(IRNode));
exports.And2Wide = And2Wide;
var Or2 = /** @class */ (function (_super) {
    __extends(Or2, _super);
    function Or2(v) {
        return _super.call(this, IRNodeKind.OR2, "or2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Or2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Or2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Or2;
}(IRNode));
exports.Or2 = Or2;
var Or2Wide = /** @class */ (function (_super) {
    __extends(Or2Wide, _super);
    function Or2Wide(v) {
        return _super.call(this, IRNodeKind.OR2_64, "or2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Or2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Or2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Or2Wide;
}(IRNode));
exports.Or2Wide = Or2Wide;
var Xor2 = /** @class */ (function (_super) {
    __extends(Xor2, _super);
    function Xor2(v) {
        return _super.call(this, IRNodeKind.XOR2, "xor2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Xor2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Xor2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Xor2;
}(IRNode));
exports.Xor2 = Xor2;
var Xor2Wide = /** @class */ (function (_super) {
    __extends(Xor2Wide, _super);
    function Xor2Wide(v) {
        return _super.call(this, IRNodeKind.XOR2_64, "xor2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Xor2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Xor2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Xor2Wide;
}(IRNode));
exports.Xor2Wide = Xor2Wide;
var Shl2 = /** @class */ (function (_super) {
    __extends(Shl2, _super);
    function Shl2(v) {
        return _super.call(this, IRNodeKind.SHL2, "shl2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Shl2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shl2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shl2;
}(IRNode));
exports.Shl2 = Shl2;
var Shl2Wide = /** @class */ (function (_super) {
    __extends(Shl2Wide, _super);
    function Shl2Wide(v) {
        return _super.call(this, IRNodeKind.SHL2_64, "shl2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Shl2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Shl2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shl2Wide;
}(IRNode));
exports.Shl2Wide = Shl2Wide;
var Shr2 = /** @class */ (function (_super) {
    __extends(Shr2, _super);
    function Shr2(v) {
        return _super.call(this, IRNodeKind.SHR2, "shr2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Shr2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shr2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shr2;
}(IRNode));
exports.Shr2 = Shr2;
var Shr2Wide = /** @class */ (function (_super) {
    __extends(Shr2Wide, _super);
    function Shr2Wide(v) {
        return _super.call(this, IRNodeKind.SHR2_64, "shr2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Shr2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Shr2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shr2Wide;
}(IRNode));
exports.Shr2Wide = Shr2Wide;
var Ashr2 = /** @class */ (function (_super) {
    __extends(Ashr2, _super);
    function Ashr2(v) {
        return _super.call(this, IRNodeKind.ASHR2, "ashr2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ashr2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ashr2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ashr2;
}(IRNode));
exports.Ashr2 = Ashr2;
var Ashr2Wide = /** @class */ (function (_super) {
    __extends(Ashr2Wide, _super);
    function Ashr2Wide(v) {
        return _super.call(this, IRNodeKind.ASHR2_64, "ashr2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ashr2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Ashr2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ashr2Wide;
}(IRNode));
exports.Ashr2Wide = Ashr2Wide;
var Div2 = /** @class */ (function (_super) {
    __extends(Div2, _super);
    function Div2(v) {
        return _super.call(this, IRNodeKind.DIV2, "div2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Div2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Div2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Div2;
}(IRNode));
exports.Div2 = Div2;
var Div2Wide = /** @class */ (function (_super) {
    __extends(Div2Wide, _super);
    function Div2Wide(v) {
        return _super.call(this, IRNodeKind.DIV2_64, "div2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Div2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Div2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Div2Wide;
}(IRNode));
exports.Div2Wide = Div2Wide;
var Mod2 = /** @class */ (function (_super) {
    __extends(Mod2, _super);
    function Mod2(v) {
        return _super.call(this, IRNodeKind.MOD2, "mod2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Mod2.prototype.resultType = function () {
        return ResultType.Int;
    };
    Mod2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mod2;
}(IRNode));
exports.Mod2 = Mod2;
var Mod2Wide = /** @class */ (function (_super) {
    __extends(Mod2Wide, _super);
    function Mod2Wide(v) {
        return _super.call(this, IRNodeKind.MOD2_64, "mod2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Mod2Wide.prototype.resultType = function () {
        return ResultType.Long;
    };
    Mod2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mod2Wide;
}(IRNode));
exports.Mod2Wide = Mod2Wide;
var Divu2 = /** @class */ (function (_super) {
    __extends(Divu2, _super);
    function Divu2(v) {
        return _super.call(this, IRNodeKind.DIVU2, "divu2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Divu2.prototype.resultType = function () {
        return ResultType.None;
    };
    Divu2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Divu2;
}(IRNode));
exports.Divu2 = Divu2;
var Divu2Wide = /** @class */ (function (_super) {
    __extends(Divu2Wide, _super);
    function Divu2Wide(v) {
        return _super.call(this, IRNodeKind.DIVU2_64, "divu2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Divu2Wide.prototype.resultType = function () {
        return ResultType.None;
    };
    Divu2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Divu2Wide;
}(IRNode));
exports.Divu2Wide = Divu2Wide;
var Modu2 = /** @class */ (function (_super) {
    __extends(Modu2, _super);
    function Modu2(v) {
        return _super.call(this, IRNodeKind.MODU2, "modu2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Modu2.prototype.resultType = function () {
        return ResultType.None;
    };
    Modu2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Modu2;
}(IRNode));
exports.Modu2 = Modu2;
var Modu2Wide = /** @class */ (function (_super) {
    __extends(Modu2Wide, _super);
    function Modu2Wide(v) {
        return _super.call(this, IRNodeKind.MODU2_64, "modu2.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Modu2Wide.prototype.resultType = function () {
        return ResultType.None;
    };
    Modu2Wide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Modu2Wide;
}(IRNode));
exports.Modu2Wide = Modu2Wide;
var Add = /** @class */ (function (_super) {
    __extends(Add, _super);
    function Add(v1, v2) {
        return _super.call(this, IRNodeKind.ADD, "add", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Add.prototype.resultType = function () {
        return ResultType.Int;
    };
    Add.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Add;
}(IRNode));
exports.Add = Add;
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub(v1, v2) {
        return _super.call(this, IRNodeKind.SUB, "sub", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Sub.prototype.resultType = function () {
        return ResultType.Int;
    };
    Sub.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Sub;
}(IRNode));
exports.Sub = Sub;
var Mul = /** @class */ (function (_super) {
    __extends(Mul, _super);
    function Mul(v1, v2) {
        return _super.call(this, IRNodeKind.MUL, "mul", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Mul.prototype.resultType = function () {
        return ResultType.Int;
    };
    Mul.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mul;
}(IRNode));
exports.Mul = Mul;
var And = /** @class */ (function (_super) {
    __extends(And, _super);
    function And(v1, v2) {
        return _super.call(this, IRNodeKind.AND, "and", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    And.prototype.resultType = function () {
        return ResultType.Int;
    };
    And.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return And;
}(IRNode));
exports.And = And;
var Or = /** @class */ (function (_super) {
    __extends(Or, _super);
    function Or(v1, v2) {
        return _super.call(this, IRNodeKind.OR, "or", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Or.prototype.resultType = function () {
        return ResultType.Int;
    };
    Or.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Or;
}(IRNode));
exports.Or = Or;
var Xor = /** @class */ (function (_super) {
    __extends(Xor, _super);
    function Xor(v1, v2) {
        return _super.call(this, IRNodeKind.XOR, "xor", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Xor.prototype.resultType = function () {
        return ResultType.Int;
    };
    Xor.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Xor;
}(IRNode));
exports.Xor = Xor;
var Shl = /** @class */ (function (_super) {
    __extends(Shl, _super);
    function Shl(v1, v2) {
        return _super.call(this, IRNodeKind.SHL, "shl", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Shl.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shl.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shl;
}(IRNode));
exports.Shl = Shl;
var Shr = /** @class */ (function (_super) {
    __extends(Shr, _super);
    function Shr(v1, v2) {
        return _super.call(this, IRNodeKind.SHR, "shr", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Shr.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shr.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shr;
}(IRNode));
exports.Shr = Shr;
var Ashr = /** @class */ (function (_super) {
    __extends(Ashr, _super);
    function Ashr(v1, v2) {
        return _super.call(this, IRNodeKind.ASHR, "ashr", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Ashr.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ashr.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ashr;
}(IRNode));
exports.Ashr = Ashr;
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(v1, v2) {
        return _super.call(this, IRNodeKind.DIV, "div", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Div.prototype.resultType = function () {
        return ResultType.Int;
    };
    Div.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Div;
}(IRNode));
exports.Div = Div;
var Mod = /** @class */ (function (_super) {
    __extends(Mod, _super);
    function Mod(v1, v2) {
        return _super.call(this, IRNodeKind.MOD, "mod", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Mod.prototype.resultType = function () {
        return ResultType.Int;
    };
    Mod.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Mod;
}(IRNode));
exports.Mod = Mod;
var Addi = /** @class */ (function (_super) {
    __extends(Addi, _super);
    function Addi(imm) {
        return _super.call(this, IRNodeKind.ADDI, "addi", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Addi.prototype.resultType = function () {
        return ResultType.Int;
    };
    Addi.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Addi;
}(IRNode));
exports.Addi = Addi;
var Subi = /** @class */ (function (_super) {
    __extends(Subi, _super);
    function Subi(imm) {
        return _super.call(this, IRNodeKind.SUBI, "subi", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Subi.prototype.resultType = function () {
        return ResultType.Int;
    };
    Subi.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Subi;
}(IRNode));
exports.Subi = Subi;
var Muli = /** @class */ (function (_super) {
    __extends(Muli, _super);
    function Muli(imm) {
        return _super.call(this, IRNodeKind.MULI, "muli", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Muli.prototype.resultType = function () {
        return ResultType.Int;
    };
    Muli.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Muli;
}(IRNode));
exports.Muli = Muli;
var Andi = /** @class */ (function (_super) {
    __extends(Andi, _super);
    function Andi(imm) {
        return _super.call(this, IRNodeKind.ANDI, "andi", [imm], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    Andi.prototype.resultType = function () {
        return ResultType.Int;
    };
    Andi.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Andi;
}(IRNode));
exports.Andi = Andi;
var Ori = /** @class */ (function (_super) {
    __extends(Ori, _super);
    function Ori(imm) {
        return _super.call(this, IRNodeKind.ORI, "ori", [imm], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    Ori.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ori.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ori;
}(IRNode));
exports.Ori = Ori;
var Xori = /** @class */ (function (_super) {
    __extends(Xori, _super);
    function Xori(imm) {
        return _super.call(this, IRNodeKind.XORI, "xori", [imm], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    Xori.prototype.resultType = function () {
        return ResultType.Int;
    };
    Xori.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Xori;
}(IRNode));
exports.Xori = Xori;
var Shli = /** @class */ (function (_super) {
    __extends(Shli, _super);
    function Shli(imm) {
        return _super.call(this, IRNodeKind.SHLI, "shli", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Shli.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shli.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shli;
}(IRNode));
exports.Shli = Shli;
var Shri = /** @class */ (function (_super) {
    __extends(Shri, _super);
    function Shri(imm) {
        return _super.call(this, IRNodeKind.SHRI, "shri", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Shri.prototype.resultType = function () {
        return ResultType.Int;
    };
    Shri.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Shri;
}(IRNode));
exports.Shri = Shri;
var Ashri = /** @class */ (function (_super) {
    __extends(Ashri, _super);
    function Ashri(imm) {
        return _super.call(this, IRNodeKind.ASHRI, "ashri", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Ashri.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ashri.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ashri;
}(IRNode));
exports.Ashri = Ashri;
var Divi = /** @class */ (function (_super) {
    __extends(Divi, _super);
    function Divi(imm) {
        return _super.call(this, IRNodeKind.DIVI, "divi", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Divi.prototype.resultType = function () {
        return ResultType.Int;
    };
    Divi.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Divi;
}(IRNode));
exports.Divi = Divi;
var Modi = /** @class */ (function (_super) {
    __extends(Modi, _super);
    function Modi(imm) {
        return _super.call(this, IRNodeKind.MODI, "modi", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    Modi.prototype.resultType = function () {
        return ResultType.Int;
    };
    Modi.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Modi;
}(IRNode));
exports.Modi = Modi;
var FnegWide = /** @class */ (function (_super) {
    __extends(FnegWide, _super);
    function FnegWide() {
        return _super.call(this, IRNodeKind.FNEG_64, "fneg.64", [], [
            []
        ]) || this;
    }
    FnegWide.prototype.resultType = function () {
        return ResultType.Float;
    };
    FnegWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return FnegWide;
}(IRNode));
exports.FnegWide = FnegWide;
var Neg = /** @class */ (function (_super) {
    __extends(Neg, _super);
    function Neg() {
        return _super.call(this, IRNodeKind.NEG, "neg", [], [
            []
        ]) || this;
    }
    Neg.prototype.resultType = function () {
        return ResultType.Int;
    };
    Neg.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Neg;
}(IRNode));
exports.Neg = Neg;
var NegWide = /** @class */ (function (_super) {
    __extends(NegWide, _super);
    function NegWide() {
        return _super.call(this, IRNodeKind.NEG_64, "neg.64", [], [
            []
        ]) || this;
    }
    NegWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    NegWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NegWide;
}(IRNode));
exports.NegWide = NegWide;
var Not = /** @class */ (function (_super) {
    __extends(Not, _super);
    function Not() {
        return _super.call(this, IRNodeKind.NOT, "not", [], [
            []
        ]) || this;
    }
    Not.prototype.resultType = function () {
        return ResultType.Int;
    };
    Not.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Not;
}(IRNode));
exports.Not = Not;
var NotWide = /** @class */ (function (_super) {
    __extends(NotWide, _super);
    function NotWide() {
        return _super.call(this, IRNodeKind.NOT_64, "not.64", [], [
            []
        ]) || this;
    }
    NotWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    NotWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return NotWide;
}(IRNode));
exports.NotWide = NotWide;
var Inc = /** @class */ (function (_super) {
    __extends(Inc, _super);
    function Inc() {
        return _super.call(this, IRNodeKind.INC, "inc", [], [
            []
        ]) || this;
    }
    Inc.prototype.resultType = function () {
        return ResultType.Int;
    };
    Inc.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Inc;
}(IRNode));
exports.Inc = Inc;
var Dec = /** @class */ (function (_super) {
    __extends(Dec, _super);
    function Dec() {
        return _super.call(this, IRNodeKind.DEC, "dec", [], [
            []
        ]) || this;
    }
    Dec.prototype.resultType = function () {
        return ResultType.Int;
    };
    Dec.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Dec;
}(IRNode));
exports.Dec = Dec;
var Inci = /** @class */ (function (_super) {
    __extends(Inci, _super);
    function Inci(v, imm) {
        return _super.call(this, IRNodeKind.INCI, "inci", [v, imm], [
            [new FormatItem(OperandKind.SrcDstVReg, 4), new FormatItem(OperandKind.Imm, 4)]
        ]) || this;
    }
    Inci.prototype.resultType = function () {
        return ResultType.Int;
    };
    Inci.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return Inci;
}(IRNode));
exports.Inci = Inci;
var I32tof64 = /** @class */ (function (_super) {
    __extends(I32tof64, _super);
    function I32tof64() {
        return _super.call(this, IRNodeKind.I32TOF64, "i32tof64", [], [
            []
        ]) || this;
    }
    I32tof64.prototype.resultType = function () {
        return ResultType.Float;
    };
    I32tof64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32tof64;
}(IRNode));
exports.I32tof64 = I32tof64;
var U32tof64 = /** @class */ (function (_super) {
    __extends(U32tof64, _super);
    function U32tof64() {
        return _super.call(this, IRNodeKind.U32TOF64, "u32tof64", [], [
            []
        ]) || this;
    }
    U32tof64.prototype.resultType = function () {
        return ResultType.Float;
    };
    U32tof64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32tof64;
}(IRNode));
exports.U32tof64 = U32tof64;
var I64tof64 = /** @class */ (function (_super) {
    __extends(I64tof64, _super);
    function I64tof64() {
        return _super.call(this, IRNodeKind.I64TOF64, "i64tof64", [], [
            []
        ]) || this;
    }
    I64tof64.prototype.resultType = function () {
        return ResultType.Float;
    };
    I64tof64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I64tof64;
}(IRNode));
exports.I64tof64 = I64tof64;
var U64tof64 = /** @class */ (function (_super) {
    __extends(U64tof64, _super);
    function U64tof64() {
        return _super.call(this, IRNodeKind.U64TOF64, "u64tof64", [], [
            []
        ]) || this;
    }
    U64tof64.prototype.resultType = function () {
        return ResultType.Float;
    };
    U64tof64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U64tof64;
}(IRNode));
exports.U64tof64 = U64tof64;
var F64toi32 = /** @class */ (function (_super) {
    __extends(F64toi32, _super);
    function F64toi32() {
        return _super.call(this, IRNodeKind.F64TOI32, "f64toi32", [], [
            []
        ]) || this;
    }
    F64toi32.prototype.resultType = function () {
        return ResultType.Int;
    };
    F64toi32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F64toi32;
}(IRNode));
exports.F64toi32 = F64toi32;
var F64toi64 = /** @class */ (function (_super) {
    __extends(F64toi64, _super);
    function F64toi64() {
        return _super.call(this, IRNodeKind.F64TOI64, "f64toi64", [], [
            []
        ]) || this;
    }
    F64toi64.prototype.resultType = function () {
        return ResultType.Long;
    };
    F64toi64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F64toi64;
}(IRNode));
exports.F64toi64 = F64toi64;
var F64tou32 = /** @class */ (function (_super) {
    __extends(F64tou32, _super);
    function F64tou32() {
        return _super.call(this, IRNodeKind.F64TOU32, "f64tou32", [], [
            []
        ]) || this;
    }
    F64tou32.prototype.resultType = function () {
        return ResultType.None;
    };
    F64tou32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F64tou32;
}(IRNode));
exports.F64tou32 = F64tou32;
var F64tou64 = /** @class */ (function (_super) {
    __extends(F64tou64, _super);
    function F64tou64() {
        return _super.call(this, IRNodeKind.F64TOU64, "f64tou64", [], [
            []
        ]) || this;
    }
    F64tou64.prototype.resultType = function () {
        return ResultType.None;
    };
    F64tou64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F64tou64;
}(IRNode));
exports.F64tou64 = F64tou64;
var I32toi64 = /** @class */ (function (_super) {
    __extends(I32toi64, _super);
    function I32toi64() {
        return _super.call(this, IRNodeKind.I32TOI64, "i32toi64", [], [
            []
        ]) || this;
    }
    I32toi64.prototype.resultType = function () {
        return ResultType.Long;
    };
    I32toi64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32toi64;
}(IRNode));
exports.I32toi64 = I32toi64;
var I64toi32 = /** @class */ (function (_super) {
    __extends(I64toi32, _super);
    function I64toi32() {
        return _super.call(this, IRNodeKind.I64TOI32, "i64toi32", [], [
            []
        ]) || this;
    }
    I64toi32.prototype.resultType = function () {
        return ResultType.Int;
    };
    I64toi32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I64toi32;
}(IRNode));
exports.I64toi32 = I64toi32;
var U32toi64 = /** @class */ (function (_super) {
    __extends(U32toi64, _super);
    function U32toi64() {
        return _super.call(this, IRNodeKind.U32TOI64, "u32toi64", [], [
            []
        ]) || this;
    }
    U32toi64.prototype.resultType = function () {
        return ResultType.Long;
    };
    U32toi64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32toi64;
}(IRNode));
exports.U32toi64 = U32toi64;
var Ldarr8 = /** @class */ (function (_super) {
    __extends(Ldarr8, _super);
    function Ldarr8(v) {
        return _super.call(this, IRNodeKind.LDARR_8, "ldarr.8", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ldarr8.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldarr8.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldarr8;
}(IRNode));
exports.Ldarr8 = Ldarr8;
var Ldarru8 = /** @class */ (function (_super) {
    __extends(Ldarru8, _super);
    function Ldarru8(v) {
        return _super.call(this, IRNodeKind.LDARRU_8, "ldarru.8", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ldarru8.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldarru8.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldarru8;
}(IRNode));
exports.Ldarru8 = Ldarru8;
var Ldarr16 = /** @class */ (function (_super) {
    __extends(Ldarr16, _super);
    function Ldarr16(v) {
        return _super.call(this, IRNodeKind.LDARR_16, "ldarr.16", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ldarr16.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldarr16.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldarr16;
}(IRNode));
exports.Ldarr16 = Ldarr16;
var Ldarru16 = /** @class */ (function (_super) {
    __extends(Ldarru16, _super);
    function Ldarru16(v) {
        return _super.call(this, IRNodeKind.LDARRU_16, "ldarru.16", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ldarru16.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldarru16.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldarru16;
}(IRNode));
exports.Ldarru16 = Ldarru16;
var Ldarr = /** @class */ (function (_super) {
    __extends(Ldarr, _super);
    function Ldarr(v) {
        return _super.call(this, IRNodeKind.LDARR, "ldarr", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Ldarr.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldarr.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldarr;
}(IRNode));
exports.Ldarr = Ldarr;
var LdarrWide = /** @class */ (function (_super) {
    __extends(LdarrWide, _super);
    function LdarrWide(v) {
        return _super.call(this, IRNodeKind.LDARR_64, "ldarr.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LdarrWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    LdarrWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdarrWide;
}(IRNode));
exports.LdarrWide = LdarrWide;
var Fldarr32 = /** @class */ (function (_super) {
    __extends(Fldarr32, _super);
    function Fldarr32(v) {
        return _super.call(this, IRNodeKind.FLDARR_32, "fldarr.32", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fldarr32.prototype.resultType = function () {
        return ResultType.Float;
    };
    Fldarr32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fldarr32;
}(IRNode));
exports.Fldarr32 = Fldarr32;
var FldarrWide = /** @class */ (function (_super) {
    __extends(FldarrWide, _super);
    function FldarrWide(v) {
        return _super.call(this, IRNodeKind.FLDARR_64, "fldarr.64", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    FldarrWide.prototype.resultType = function () {
        return ResultType.Float;
    };
    FldarrWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return FldarrWide;
}(IRNode));
exports.FldarrWide = FldarrWide;
var LdarrObj = /** @class */ (function (_super) {
    __extends(LdarrObj, _super);
    function LdarrObj(v) {
        return _super.call(this, IRNodeKind.LDARR_OBJ, "ldarr.obj", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LdarrObj.prototype.resultType = function () {
        return ResultType.None;
    };
    LdarrObj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdarrObj;
}(IRNode));
exports.LdarrObj = LdarrObj;
var Starr8 = /** @class */ (function (_super) {
    __extends(Starr8, _super);
    function Starr8(v1, v2) {
        return _super.call(this, IRNodeKind.STARR_8, "starr.8", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Starr8.prototype.resultType = function () {
        return ResultType.None;
    };
    Starr8.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Starr8;
}(IRNode));
exports.Starr8 = Starr8;
var Starr16 = /** @class */ (function (_super) {
    __extends(Starr16, _super);
    function Starr16(v1, v2) {
        return _super.call(this, IRNodeKind.STARR_16, "starr.16", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Starr16.prototype.resultType = function () {
        return ResultType.None;
    };
    Starr16.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Starr16;
}(IRNode));
exports.Starr16 = Starr16;
var Starr = /** @class */ (function (_super) {
    __extends(Starr, _super);
    function Starr(v1, v2) {
        return _super.call(this, IRNodeKind.STARR, "starr", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Starr.prototype.resultType = function () {
        return ResultType.None;
    };
    Starr.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Starr;
}(IRNode));
exports.Starr = Starr;
var StarrWide = /** @class */ (function (_super) {
    __extends(StarrWide, _super);
    function StarrWide(v1, v2) {
        return _super.call(this, IRNodeKind.STARR_64, "starr.64", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    StarrWide.prototype.resultType = function () {
        return ResultType.None;
    };
    StarrWide.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StarrWide;
}(IRNode));
exports.StarrWide = StarrWide;
var Fstarr32 = /** @class */ (function (_super) {
    __extends(Fstarr32, _super);
    function Fstarr32(v1, v2) {
        return _super.call(this, IRNodeKind.FSTARR_32, "fstarr.32", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Fstarr32.prototype.resultType = function () {
        return ResultType.None;
    };
    Fstarr32.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Fstarr32;
}(IRNode));
exports.Fstarr32 = Fstarr32;
var FstarrWide = /** @class */ (function (_super) {
    __extends(FstarrWide, _super);
    function FstarrWide(v1, v2) {
        return _super.call(this, IRNodeKind.FSTARR_64, "fstarr.64", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    FstarrWide.prototype.resultType = function () {
        return ResultType.None;
    };
    FstarrWide.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return FstarrWide;
}(IRNode));
exports.FstarrWide = FstarrWide;
var StarrObj = /** @class */ (function (_super) {
    __extends(StarrObj, _super);
    function StarrObj(v1, v2) {
        return _super.call(this, IRNodeKind.STARR_OBJ, "starr.obj", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    StarrObj.prototype.resultType = function () {
        return ResultType.None;
    };
    StarrObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StarrObj;
}(IRNode));
exports.StarrObj = StarrObj;
var Lenarr = /** @class */ (function (_super) {
    __extends(Lenarr, _super);
    function Lenarr(v) {
        return _super.call(this, IRNodeKind.LENARR, "lenarr", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Lenarr.prototype.resultType = function () {
        return ResultType.Int;
    };
    Lenarr.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Lenarr;
}(IRNode));
exports.Lenarr = Lenarr;
var Newarr = /** @class */ (function (_super) {
    __extends(Newarr, _super);
    function Newarr(v, type_id) {
        return _super.call(this, IRNodeKind.NEWARR, "newarr", [v, type_id], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Newarr.prototype.resultType = function () {
        return ResultType.None;
    };
    Newarr.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Newarr;
}(IRNode));
exports.Newarr = Newarr;
var Newobj = /** @class */ (function (_super) {
    __extends(Newobj, _super);
    function Newobj(type_id) {
        return _super.call(this, IRNodeKind.NEWOBJ, "newobj", [type_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Newobj.prototype.resultType = function () {
        return ResultType.None;
    };
    Newobj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Newobj;
}(IRNode));
exports.Newobj = Newobj;
var InitobjShort = /** @class */ (function (_super) {
    __extends(InitobjShort, _super);
    function InitobjShort(method_id, v1, v2) {
        return _super.call(this, IRNodeKind.INITOBJ_SHORT, "initobj.short", [method_id, v1, v2], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    InitobjShort.prototype.resultType = function () {
        return ResultType.None;
    };
    InitobjShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return InitobjShort;
}(IRNode));
exports.InitobjShort = InitobjShort;
var Initobj = /** @class */ (function (_super) {
    __extends(Initobj, _super);
    function Initobj(method_id, v1, v2, v3, v4) {
        return _super.call(this, IRNodeKind.INITOBJ, "initobj", [method_id, v1, v2, v3, v4], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
    }
    Initobj.prototype.resultType = function () {
        return ResultType.None;
    };
    Initobj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Initobj;
}(IRNode));
exports.Initobj = Initobj;
var InitobjRange = /** @class */ (function (_super) {
    __extends(InitobjRange, _super);
    function InitobjRange(method_id, v) {
        return _super.call(this, IRNodeKind.INITOBJ_RANGE, "initobj.range", [method_id, v], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    InitobjRange.prototype.resultType = function () {
        return ResultType.None;
    };
    InitobjRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return InitobjRange;
}(IRNode));
exports.InitobjRange = InitobjRange;
var Ldobj = /** @class */ (function (_super) {
    __extends(Ldobj, _super);
    function Ldobj(v, field_id) {
        return _super.call(this, IRNodeKind.LDOBJ, "ldobj", [v, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Ldobj.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldobj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldobj;
}(IRNode));
exports.Ldobj = Ldobj;
var LdobjWide = /** @class */ (function (_super) {
    __extends(LdobjWide, _super);
    function LdobjWide(v, field_id) {
        return _super.call(this, IRNodeKind.LDOBJ_64, "ldobj.64", [v, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdobjWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    LdobjWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdobjWide;
}(IRNode));
exports.LdobjWide = LdobjWide;
var LdobjObj = /** @class */ (function (_super) {
    __extends(LdobjObj, _super);
    function LdobjObj(v, field_id) {
        return _super.call(this, IRNodeKind.LDOBJ_OBJ, "ldobj.obj", [v, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdobjObj.prototype.resultType = function () {
        return ResultType.None;
    };
    LdobjObj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdobjObj;
}(IRNode));
exports.LdobjObj = LdobjObj;
var LdobjV = /** @class */ (function (_super) {
    __extends(LdobjV, _super);
    function LdobjV(v1, v2, field_id) {
        return _super.call(this, IRNodeKind.LDOBJ_V, "ldobj.v", [v1, v2, field_id], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdobjV.prototype.resultType = function () {
        return ResultType.Int;
    };
    LdobjV.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return LdobjV;
}(IRNode));
exports.LdobjV = LdobjV;
var LdobjVWide = /** @class */ (function (_super) {
    __extends(LdobjVWide, _super);
    function LdobjVWide(v1, v2, field_id) {
        return _super.call(this, IRNodeKind.LDOBJ_V_64, "ldobj.v.64", [v1, v2, field_id], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdobjVWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    LdobjVWide.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return LdobjVWide;
}(IRNode));
exports.LdobjVWide = LdobjVWide;
var LdobjVObj = /** @class */ (function (_super) {
    __extends(LdobjVObj, _super);
    function LdobjVObj(v1, v2, field_id) {
        return _super.call(this, IRNodeKind.LDOBJ_V_OBJ, "ldobj.v.obj", [v1, v2, field_id], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdobjVObj.prototype.resultType = function () {
        return ResultType.None;
    };
    LdobjVObj.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return LdobjVObj;
}(IRNode));
exports.LdobjVObj = LdobjVObj;
var Stobj = /** @class */ (function (_super) {
    __extends(Stobj, _super);
    function Stobj(v, field_id) {
        return _super.call(this, IRNodeKind.STOBJ, "stobj", [v, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Stobj.prototype.resultType = function () {
        return ResultType.None;
    };
    Stobj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Stobj;
}(IRNode));
exports.Stobj = Stobj;
var StobjWide = /** @class */ (function (_super) {
    __extends(StobjWide, _super);
    function StobjWide(v, field_id) {
        return _super.call(this, IRNodeKind.STOBJ_64, "stobj.64", [v, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    StobjWide.prototype.resultType = function () {
        return ResultType.None;
    };
    StobjWide.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StobjWide;
}(IRNode));
exports.StobjWide = StobjWide;
var StobjObj = /** @class */ (function (_super) {
    __extends(StobjObj, _super);
    function StobjObj(v, field_id) {
        return _super.call(this, IRNodeKind.STOBJ_OBJ, "stobj.obj", [v, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    StobjObj.prototype.resultType = function () {
        return ResultType.None;
    };
    StobjObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StobjObj;
}(IRNode));
exports.StobjObj = StobjObj;
var StobjV = /** @class */ (function (_super) {
    __extends(StobjV, _super);
    function StobjV(v1, v2, field_id) {
        return _super.call(this, IRNodeKind.STOBJ_V, "stobj.v", [v1, v2, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    StobjV.prototype.resultType = function () {
        return ResultType.None;
    };
    StobjV.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StobjV;
}(IRNode));
exports.StobjV = StobjV;
var StobjVWide = /** @class */ (function (_super) {
    __extends(StobjVWide, _super);
    function StobjVWide(v1, v2, field_id) {
        return _super.call(this, IRNodeKind.STOBJ_V_64, "stobj.v.64", [v1, v2, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    StobjVWide.prototype.resultType = function () {
        return ResultType.None;
    };
    StobjVWide.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StobjVWide;
}(IRNode));
exports.StobjVWide = StobjVWide;
var StobjVObj = /** @class */ (function (_super) {
    __extends(StobjVObj, _super);
    function StobjVObj(v1, v2, field_id) {
        return _super.call(this, IRNodeKind.STOBJ_V_OBJ, "stobj.v.obj", [v1, v2, field_id], [
            [new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    StobjVObj.prototype.resultType = function () {
        return ResultType.None;
    };
    StobjVObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StobjVObj;
}(IRNode));
exports.StobjVObj = StobjVObj;
var Ldstatic = /** @class */ (function (_super) {
    __extends(Ldstatic, _super);
    function Ldstatic(field_id) {
        return _super.call(this, IRNodeKind.LDSTATIC, "ldstatic", [field_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Ldstatic.prototype.resultType = function () {
        return ResultType.Int;
    };
    Ldstatic.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Ldstatic;
}(IRNode));
exports.Ldstatic = Ldstatic;
var LdstaticWide = /** @class */ (function (_super) {
    __extends(LdstaticWide, _super);
    function LdstaticWide(field_id) {
        return _super.call(this, IRNodeKind.LDSTATIC_64, "ldstatic.64", [field_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdstaticWide.prototype.resultType = function () {
        return ResultType.Long;
    };
    LdstaticWide.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdstaticWide;
}(IRNode));
exports.LdstaticWide = LdstaticWide;
var LdstaticObj = /** @class */ (function (_super) {
    __extends(LdstaticObj, _super);
    function LdstaticObj(field_id) {
        return _super.call(this, IRNodeKind.LDSTATIC_OBJ, "ldstatic.obj", [field_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    LdstaticObj.prototype.resultType = function () {
        return ResultType.None;
    };
    LdstaticObj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdstaticObj;
}(IRNode));
exports.LdstaticObj = LdstaticObj;
var Ststatic = /** @class */ (function (_super) {
    __extends(Ststatic, _super);
    function Ststatic(field_id) {
        return _super.call(this, IRNodeKind.STSTATIC, "ststatic", [field_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Ststatic.prototype.resultType = function () {
        return ResultType.None;
    };
    Ststatic.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Ststatic;
}(IRNode));
exports.Ststatic = Ststatic;
var StstaticWide = /** @class */ (function (_super) {
    __extends(StstaticWide, _super);
    function StstaticWide(field_id) {
        return _super.call(this, IRNodeKind.STSTATIC_64, "ststatic.64", [field_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    StstaticWide.prototype.resultType = function () {
        return ResultType.None;
    };
    StstaticWide.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StstaticWide;
}(IRNode));
exports.StstaticWide = StstaticWide;
var StstaticObj = /** @class */ (function (_super) {
    __extends(StstaticObj, _super);
    function StstaticObj(field_id) {
        return _super.call(this, IRNodeKind.STSTATIC_OBJ, "ststatic.obj", [field_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    StstaticObj.prototype.resultType = function () {
        return ResultType.None;
    };
    StstaticObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return StstaticObj;
}(IRNode));
exports.StstaticObj = StstaticObj;
var Return = /** @class */ (function (_super) {
    __extends(Return, _super);
    function Return() {
        return _super.call(this, IRNodeKind.RETURN, "return", [], [
            []
        ]) || this;
    }
    Return.prototype.resultType = function () {
        return ResultType.None;
    };
    Return.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Return;
}(IRNode));
exports.Return = Return;
var ReturnWide = /** @class */ (function (_super) {
    __extends(ReturnWide, _super);
    function ReturnWide() {
        return _super.call(this, IRNodeKind.RETURN_64, "return.64", [], [
            []
        ]) || this;
    }
    ReturnWide.prototype.resultType = function () {
        return ResultType.None;
    };
    ReturnWide.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ReturnWide;
}(IRNode));
exports.ReturnWide = ReturnWide;
var ReturnObj = /** @class */ (function (_super) {
    __extends(ReturnObj, _super);
    function ReturnObj() {
        return _super.call(this, IRNodeKind.RETURN_OBJ, "return.obj", [], [
            []
        ]) || this;
    }
    ReturnObj.prototype.resultType = function () {
        return ResultType.None;
    };
    ReturnObj.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ReturnObj;
}(IRNode));
exports.ReturnObj = ReturnObj;
var ReturnVoid = /** @class */ (function (_super) {
    __extends(ReturnVoid, _super);
    function ReturnVoid() {
        return _super.call(this, IRNodeKind.RETURN_VOID, "return.void", [], [
            []
        ]) || this;
    }
    ReturnVoid.prototype.resultType = function () {
        return ResultType.None;
    };
    ReturnVoid.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ReturnVoid;
}(IRNode));
exports.ReturnVoid = ReturnVoid;
var Throw = /** @class */ (function (_super) {
    __extends(Throw, _super);
    function Throw() {
        return _super.call(this, IRNodeKind.THROW, "throw", [], [
            []
        ]) || this;
    }
    Throw.prototype.resultType = function () {
        return ResultType.None;
    };
    Throw.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Throw;
}(IRNode));
exports.Throw = Throw;
var Checkcast = /** @class */ (function (_super) {
    __extends(Checkcast, _super);
    function Checkcast(type_id) {
        return _super.call(this, IRNodeKind.CHECKCAST, "checkcast", [type_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Checkcast.prototype.resultType = function () {
        return ResultType.None;
    };
    Checkcast.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Checkcast;
}(IRNode));
exports.Checkcast = Checkcast;
var Isinstance = /** @class */ (function (_super) {
    __extends(Isinstance, _super);
    function Isinstance(type_id) {
        return _super.call(this, IRNodeKind.ISINSTANCE, "isinstance", [type_id], [
            [new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Isinstance.prototype.resultType = function () {
        return ResultType.Int;
    };
    Isinstance.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Isinstance;
}(IRNode));
exports.Isinstance = Isinstance;
var CallShort = /** @class */ (function (_super) {
    __extends(CallShort, _super);
    function CallShort(method_id, v1, v2) {
        var _this = this;
        var ctors = [method_id, v1, v2];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_SHORT, "call.short", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallShort;
}(IRNode));
exports.CallShort = CallShort;
var Call = /** @class */ (function (_super) {
    __extends(Call, _super);
    function Call(method_id, v1, v2, v3, v4) {
        var _this = this;
        var ctors = [method_id, v1, v2, v3, v4];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL, "call", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    Call.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    Call.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Call;
}(IRNode));
exports.Call = Call;
var CallRange = /** @class */ (function (_super) {
    __extends(CallRange, _super);
    function CallRange(method_id, v) {
        var _this = this;
        var ctors = __spreadArrays([method_id], v);
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_RANGE, "call.range", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CallRange.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallRange;
}(IRNode));
exports.CallRange = CallRange;
var CallVirtShort = /** @class */ (function (_super) {
    __extends(CallVirtShort, _super);
    function CallVirtShort(method_id, v1, v2) {
        var _this = this;
        var ctors = [method_id, v1, v2];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_VIRT_SHORT, "call.virt.short", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallVirtShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallVirtShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallVirtShort;
}(IRNode));
exports.CallVirtShort = CallVirtShort;
var CallVirt = /** @class */ (function (_super) {
    __extends(CallVirt, _super);
    function CallVirt(method_id, v1, v2, v3, v4) {
        var _this = this;
        var ctors = [method_id, v1, v2, v3, v4];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_VIRT, "call.virt", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallVirt.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallVirt.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallVirt;
}(IRNode));
exports.CallVirt = CallVirt;
var CallVirtRange = /** @class */ (function (_super) {
    __extends(CallVirtRange, _super);
    function CallVirtRange(method_id, v) {
        var _this = this;
        var ctors = [method_id, v];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_VIRT_RANGE, "call.virt.range", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CallVirtRange.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallVirtRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallVirtRange;
}(IRNode));
exports.CallVirtRange = CallVirtRange;
var CallDynShort = /** @class */ (function (_super) {
    __extends(CallDynShort, _super);
    function CallDynShort(callsite_id, v1, v2) {
        var _this = this;
        var ctors = [callsite_id, v1, v2];
        var operands = [callsite_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_DYN_SHORT, "call.dyn.short", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallDynShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallDynShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallDynShort;
}(IRNode));
exports.CallDynShort = CallDynShort;
var CallDyn = /** @class */ (function (_super) {
    __extends(CallDyn, _super);
    function CallDyn(callsite_id, v1, v2, v3, v4) {
        var _this = this;
        var ctors = [callsite_id, v1, v2, v3, v4];
        var operands = [callsite_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_DYN, "call.dyn", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallDyn;
}(IRNode));
exports.CallDyn = CallDyn;
var CallDynRange = /** @class */ (function (_super) {
    __extends(CallDynRange, _super);
    function CallDynRange(callsite_id, v) {
        var _this = this;
        var ctors = [callsite_id, v];
        var operands = [callsite_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_DYN_RANGE, "call.dyn.range", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CallDynRange.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallDynRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallDynRange;
}(IRNode));
exports.CallDynRange = CallDynRange;
var MovDyn = /** @class */ (function (_super) {
    __extends(MovDyn, _super);
    function MovDyn(v1, v2) {
        return _super.call(this, IRNodeKind.MOV_DYN, "mov.dyn", [v1, v2], [
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)],
            [new FormatItem(OperandKind.DstVReg, 16), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
    }
    MovDyn.prototype.resultType = function () {
        return ResultType.None;
    };
    MovDyn.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return MovDyn;
}(IRNode));
exports.MovDyn = MovDyn;
var LdaDyn = /** @class */ (function (_super) {
    __extends(LdaDyn, _super);
    function LdaDyn(v) {
        return _super.call(this, IRNodeKind.LDA_DYN, "lda.dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    LdaDyn.prototype.resultType = function () {
        return ResultType.None;
    };
    LdaDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaDyn;
}(IRNode));
exports.LdaDyn = LdaDyn;
var StaDyn = /** @class */ (function (_super) {
    __extends(StaDyn, _super);
    function StaDyn(v) {
        return _super.call(this, IRNodeKind.STA_DYN, "sta.dyn", [v], [
            [new FormatItem(OperandKind.DstVReg, 8)]
        ]) || this;
    }
    StaDyn.prototype.resultType = function () {
        return ResultType.None;
    };
    StaDyn.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return StaDyn;
}(IRNode));
exports.StaDyn = StaDyn;
var LdaiDyn = /** @class */ (function (_super) {
    __extends(LdaiDyn, _super);
    function LdaiDyn(imm) {
        return _super.call(this, IRNodeKind.LDAI_DYN, "ldai.dyn", [imm], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    LdaiDyn.prototype.resultType = function () {
        return ResultType.None;
    };
    LdaiDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return LdaiDyn;
}(IRNode));
exports.LdaiDyn = LdaiDyn;
var FldaiDyn = /** @class */ (function (_super) {
    __extends(FldaiDyn, _super);
    function FldaiDyn(imm) {
        return _super.call(this, IRNodeKind.FLDAI_DYN, "fldai.dyn", [imm], [
            [new FormatItem(OperandKind.Imm, 64)]
        ]) || this;
    }
    FldaiDyn.prototype.resultType = function () {
        return ResultType.None;
    };
    FldaiDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return FldaiDyn;
}(IRNode));
exports.FldaiDyn = FldaiDyn;
var ReturnDyn = /** @class */ (function (_super) {
    __extends(ReturnDyn, _super);
    function ReturnDyn() {
        return _super.call(this, IRNodeKind.RETURN_DYN, "return.dyn", [], [
            []
        ]) || this;
    }
    ReturnDyn.prototype.resultType = function () {
        return ResultType.None;
    };
    ReturnDyn.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return ReturnDyn;
}(IRNode));
exports.ReturnDyn = ReturnDyn;
var CalliDynShort = /** @class */ (function (_super) {
    __extends(CalliDynShort, _super);
    function CalliDynShort(imm, v1, v2, v3) {
        var _this = this;
        var ctors = [imm, v1, v2, v3];
        var operands = [imm];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALLI_DYN_SHORT, "calli.dyn.short", operands, [
            [new FormatItem(OperandKind.Imm, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CalliDynShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CalliDynShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CalliDynShort;
}(IRNode));
exports.CalliDynShort = CalliDynShort;
var CalliDyn = /** @class */ (function (_super) {
    __extends(CalliDyn, _super);
    function CalliDyn(imm, v1, v2, v3, v4, v5) {
        var _this = this;
        var ctors = [imm, v1, v2, v3, v4, v5];
        var operands = [imm];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALLI_DYN, "calli.dyn", operands, [
            [new FormatItem(OperandKind.Imm, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CalliDyn.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CalliDyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CalliDyn;
}(IRNode));
exports.CalliDyn = CalliDyn;
var CalliDynRange = /** @class */ (function (_super) {
    __extends(CalliDynRange, _super);
    function CalliDynRange(imm, v) {
        var _this = this;
        var ctors = __spreadArrays([imm], v);
        var operands = [imm];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALLI_DYN_RANGE, "calli.dyn.range", operands, [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 16)]
        ]) || this;
        return _this;
    }
    CalliDynRange.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CalliDynRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CalliDynRange;
}(IRNode));
exports.CalliDynRange = CalliDynRange;
var BuiltinAcc = /** @class */ (function (_super) {
    __extends(BuiltinAcc, _super);
    function BuiltinAcc(imm) {
        return _super.call(this, IRNodeKind.BUILTIN_ACC, "builtin.acc", [imm], [
            [new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    BuiltinAcc.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinAcc.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinAcc;
}(IRNode));
exports.BuiltinAcc = BuiltinAcc;
var BuiltinBin2 = /** @class */ (function (_super) {
    __extends(BuiltinBin2, _super);
    function BuiltinBin2(imm, v) {
        return _super.call(this, IRNodeKind.BUILTIN_BIN2, "builtin.bin2", [imm, v], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinBin2.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinBin2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinBin2;
}(IRNode));
exports.BuiltinBin2 = BuiltinBin2;
var BuiltinTern3 = /** @class */ (function (_super) {
    __extends(BuiltinTern3, _super);
    function BuiltinTern3(imm, v1, v2) {
        return _super.call(this, IRNodeKind.BUILTIN_TERN3, "builtin.tern3", [imm, v1, v2], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinTern3.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinTern3.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinTern3;
}(IRNode));
exports.BuiltinTern3 = BuiltinTern3;
var BuiltinQuatern4 = /** @class */ (function (_super) {
    __extends(BuiltinQuatern4, _super);
    function BuiltinQuatern4(imm, v1, v2, v3) {
        return _super.call(this, IRNodeKind.BUILTIN_QUATERN4, "builtin.quatern4", [imm, v1, v2, v3], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinQuatern4.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinQuatern4.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinQuatern4;
}(IRNode));
exports.BuiltinQuatern4 = BuiltinQuatern4;
var BuiltinQuin5 = /** @class */ (function (_super) {
    __extends(BuiltinQuin5, _super);
    function BuiltinQuin5(imm, v1, v2, v3, v4) {
        return _super.call(this, IRNodeKind.BUILTIN_QUIN5, "builtin.quin5", [imm, v1, v2, v3, v4], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinQuin5.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinQuin5.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinQuin5;
}(IRNode));
exports.BuiltinQuin5 = BuiltinQuin5;
var BuiltinR2i = /** @class */ (function (_super) {
    __extends(BuiltinR2i, _super);
    function BuiltinR2i(imm1, imm2, v) {
        var _this = this;
        var operands = __spreadArrays([imm1, imm2], v);
        _this = _super.call(this, IRNodeKind.BUILTIN_R2I, "builtin.r2i", operands, [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    BuiltinR2i.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinR2i.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinR2i;
}(IRNode));
exports.BuiltinR2i = BuiltinR2i;
var BuiltinR3i = /** @class */ (function (_super) {
    __extends(BuiltinR3i, _super);
    function BuiltinR3i(imm1, imm2, v1, v2) {
        return _super.call(this, IRNodeKind.BUILTIN_R3I, "builtin.r3i", [imm1, imm2, v1, v2], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinR3i.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinR3i.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinR3i;
}(IRNode));
exports.BuiltinR3i = BuiltinR3i;
var BuiltinR4i = /** @class */ (function (_super) {
    __extends(BuiltinR4i, _super);
    function BuiltinR4i(imm1, imm2, v1, v2, v3) {
        return _super.call(this, IRNodeKind.BUILTIN_R4I, "builtin.r4i", [imm1, imm2, v1, v2, v3], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinR4i.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinR4i.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinR4i;
}(IRNode));
exports.BuiltinR4i = BuiltinR4i;
var BuiltinId = /** @class */ (function (_super) {
    __extends(BuiltinId, _super);
    function BuiltinId(imm, string_id) {
        return _super.call(this, IRNodeKind.BUILTIN_ID, "builtin.id", [imm, string_id], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    BuiltinId.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinId.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinId;
}(IRNode));
exports.BuiltinId = BuiltinId;
var BuiltinMidr = /** @class */ (function (_super) {
    __extends(BuiltinMidr, _super);
    function BuiltinMidr(imm, method_id, v) {
        return _super.call(this, IRNodeKind.BUILTIN_MIDR, "builtin.midr", [imm, method_id, v], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinMidr.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinMidr.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinMidr;
}(IRNode));
exports.BuiltinMidr = BuiltinMidr;
var BuiltinIdi = /** @class */ (function (_super) {
    __extends(BuiltinIdi, _super);
    function BuiltinIdi(imm1, string_id, imm2) {
        return _super.call(this, IRNodeKind.BUILTIN_IDI, "builtin.idi", [imm1, string_id, imm2], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    BuiltinIdi.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinIdi.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinIdi;
}(IRNode));
exports.BuiltinIdi = BuiltinIdi;
var BuiltinIdr3i = /** @class */ (function (_super) {
    __extends(BuiltinIdr3i, _super);
    function BuiltinIdr3i(imm1, string_id, imm2, v) {
        return _super.call(this, IRNodeKind.BUILTIN_IDR3I, "builtin.idr3i", [imm1, string_id, imm2, v], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinIdr3i.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinIdr3i.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinIdr3i;
}(IRNode));
exports.BuiltinIdr3i = BuiltinIdr3i;
var BuiltinIdr4i = /** @class */ (function (_super) {
    __extends(BuiltinIdr4i, _super);
    function BuiltinIdr4i(imm1, string_id, imm2, v1, v2) {
        return _super.call(this, IRNodeKind.BUILTIN_IDR4I, "builtin.idr4i", [imm1, string_id, imm2, v1, v2], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinIdr4i.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinIdr4i.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinIdr4i;
}(IRNode));
exports.BuiltinIdr4i = BuiltinIdr4i;
var BuiltinI2r3 = /** @class */ (function (_super) {
    __extends(BuiltinI2r3, _super);
    function BuiltinI2r3(imm1, imm2, imm3, v) {
        return _super.call(this, IRNodeKind.BUILTIN_I2R3, "builtin.i2r3", [imm1, imm2, imm3, v], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinI2r3.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinI2r3.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinI2r3;
}(IRNode));
exports.BuiltinI2r3 = BuiltinI2r3;
var BuiltinI2r4 = /** @class */ (function (_super) {
    __extends(BuiltinI2r4, _super);
    function BuiltinI2r4(imm1, imm2, imm3, v1, v2) {
        return _super.call(this, IRNodeKind.BUILTIN_I2R4, "builtin.i2r4", [imm1, imm2, imm3, v1, v2], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinI2r4.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinI2r4.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinI2r4;
}(IRNode));
exports.BuiltinI2r4 = BuiltinI2r4;
var BuiltinImm = /** @class */ (function (_super) {
    __extends(BuiltinImm, _super);
    function BuiltinImm(imm1, imm2) {
        return _super.call(this, IRNodeKind.BUILTIN_IMM, "builtin.imm", [imm1, imm2], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    BuiltinImm.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinImm.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinImm;
}(IRNode));
exports.BuiltinImm = BuiltinImm;
var BuiltinImr2 = /** @class */ (function (_super) {
    __extends(BuiltinImr2, _super);
    function BuiltinImr2(imm1, method_id, imm2, v1, v2) {
        return _super.call(this, IRNodeKind.BUILTIN_IMR2, "builtin.imr2", [imm1, method_id, imm2, v1, v2], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    BuiltinImr2.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinImr2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinImr2;
}(IRNode));
exports.BuiltinImr2 = BuiltinImr2;
var BuiltinIdr3 = /** @class */ (function (_super) {
    __extends(BuiltinIdr3, _super);
    function BuiltinIdr3(imm, v1, method_id) {
        return _super.call(this, IRNodeKind.BUILTIN_IDR3, "builtin.idr3", [imm, v1, method_id], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    BuiltinIdr3.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinIdr3.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinIdr3;
}(IRNode));
exports.BuiltinIdr3 = BuiltinIdr3;
var BuiltinIdr4 = /** @class */ (function (_super) {
    __extends(BuiltinIdr4, _super);
    function BuiltinIdr4(imm, v1, v2, method_id) {
        return _super.call(this, IRNodeKind.BUILTIN_IDR4, "builtin.idr4", [imm, v1, v2, method_id], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    BuiltinIdr4.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinIdr4.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinIdr4;
}(IRNode));
exports.BuiltinIdr4 = BuiltinIdr4;
var BuiltinIdr6 = /** @class */ (function (_super) {
    __extends(BuiltinIdr6, _super);
    function BuiltinIdr6(imm, v1, v2, v3, v4, method_id) {
        return _super.call(this, IRNodeKind.BUILTIN_IDR6, "builtin.idr6", [imm, v1, v2, v3, v4, method_id], [
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    BuiltinIdr6.prototype.resultType = function () {
        return ResultType.None;
    };
    BuiltinIdr6.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return BuiltinIdr6;
}(IRNode));
exports.BuiltinIdr6 = BuiltinIdr6;
//# sourceMappingURL=irnodes.js.map