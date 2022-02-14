"use strict";
// Copyright (c) 2021 Huawei Device Co., Ltd.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
exports.EcmaStownbynamewithnameset = exports.EcmaStownbyvaluewithnameset = exports.EcmaStclasstoglobalrecord = exports.EcmaStlettoglobalrecord = exports.EcmaStconsttoglobalrecord = exports.EcmaIsfalse = exports.EcmaIstrue = exports.EcmaCreateregexpwithliteral = exports.EcmaLdmodvarbyname = exports.EcmaStsuperbyname = exports.EcmaLdsuperbyname = exports.EcmaStownbyname = exports.EcmaStobjbyname = exports.EcmaLdobjbyname = exports.EcmaStglobalvar = exports.EcmaLdglobalvar = exports.EcmaTrystglobalbyname = exports.EcmaTryldglobalbyname = exports.EcmaStmodulevar = exports.EcmaImportmodule = exports.EcmaDefineclasswithbuffer = exports.EcmaStlexvardyn = exports.EcmaLdlexvardyn = exports.EcmaCreateobjectwithbuffer = exports.EcmaThrowifsupernotcorrectcall = exports.EcmaCreateobjecthavingmethod = exports.EcmaCreatearraywithbuffer = exports.EcmaCopyrestargs = exports.EcmaNewlexenvdyn = exports.EcmaDefinemethod = exports.EcmaDefineasyncfunc = exports.EcmaDefinegeneratorfunc = exports.EcmaDefinencfuncdyn = exports.EcmaDefinefuncdyn = exports.EcmaCreateobjectwithexcludedkeys = exports.EcmaSupercall = exports.EcmaCallithisrangedyn = exports.EcmaCallirangedyn = exports.EcmaNewobjdynrange = exports.EcmaDefinegettersetterbyvalue = exports.EcmaCallargs3dyn = exports.EcmaCallargs2dyn = exports.EcmaAsyncfunctionreject = exports.EcmaAsyncfunctionresolve = exports.EcmaCallspreaddyn = exports.EcmaStownbyindex = exports.EcmaStobjbyindex = exports.EcmaLdobjbyindex = exports.EcmaStsuperbyvalue = exports.EcmaLdsuperbyvalue = exports.EcmaStownbyvalue = exports.EcmaStobjbyvalue = exports.EcmaLdobjbyvalue = exports.EcmaSetobjectwithproto = exports.EcmaGetiteratornext = exports.EcmaStarrayspread = exports.EcmaCopydataproperties = exports.EcmaCallarg1dyn = exports.EcmaThrowundefinedifhole = exports.EcmaAsyncfunctionawaituncaught = exports.EcmaSuspendgenerator = exports.EcmaCreateiterresultobj = exports.EcmaNewobjspreaddyn = exports.EcmaDelobjprop = exports.EcmaSupercallspread = exports.EcmaCopymodule = exports.EcmaCloseiterator = exports.EcmaIternext = exports.EcmaThrowifnotobject = exports.EcmaCallarg0dyn = exports.EcmaGetnextpropname = exports.EcmaGettemplateobject = exports.EcmaThrowconstassignment = exports.EcmaCreategeneratorobj = exports.EcmaGetresumemode = exports.EcmaResumegenerator = exports.EcmaStricteqdyn = exports.EcmaStrictnoteqdyn = exports.EcmaInstanceofdyn = exports.EcmaIsindyn = exports.EcmaExpdyn = exports.EcmaDecdyn = exports.EcmaIncdyn = exports.EcmaNotdyn = exports.EcmaNegdyn = exports.EcmaTonumber = exports.EcmaXor2dyn = exports.EcmaOr2dyn = exports.EcmaAnd2dyn = exports.EcmaAshr2dyn = exports.EcmaShr2dyn = exports.EcmaShl2dyn = exports.EcmaGreatereqdyn = exports.EcmaGreaterdyn = exports.EcmaLesseqdyn = exports.EcmaLessdyn = exports.EcmaNoteqdyn = exports.EcmaEqdyn = exports.EcmaMod2dyn = exports.EcmaDiv2dyn = exports.EcmaMul2dyn = exports.EcmaSub2dyn = exports.EcmaAdd2dyn = exports.EcmaDebugger = exports.EcmaThrowdeletesuperproperty = exports.U64tou32 = exports.EcmaLdhomeobject = exports.U64toi32 = exports.EcmaThrowpatternnoncoercible = exports.U32tou8 = exports.EcmaThrowthrownotexists = exports.U32toi8 = exports.EcmaGetiterator = exports.Ashr = exports.U32tou16 = exports.EcmaCreateemptyarray = exports.Shr = exports.U32toi16 = exports.F64tof32 = exports.EcmaCreateemptyobject = exports.Shl = exports.U32toi64 = exports.F32tou64 = exports.EcmaReturnundefined = exports.Xor = exports.I64toi32 = exports.F32tou32 = exports.EcmaLdhole = exports.Or = exports.I32tou8 = exports.F32toi64 = exports.EcmaAsyncfunctionenter = exports.And = exports.I32toi8 = exports.F32toi32 = exports.EcmaGetpropiterator = exports.Xori = exports.I32tou16 = exports.F32tof64 = exports.EcmaGetunmappedargs = exports.Ashr2Wide = exports.I32toi16 = exports.U64tof32 = exports.EcmaPoplexenvdyn = exports.Ashr2 = exports.I32toi64 = exports.I64tof32 = exports.EcmaLdlexenvdyn = exports.Shr2Wide = exports.U64tou1 = exports.U32tof32 = exports.EcmaTypeofdyn = exports.Shr2 = exports.U32tou1 = exports.I32tof32 = exports.EcmaThrowdyn = exports.Shl2Wide = exports.I64tou1 = exports.Fmod2 = exports.EcmaLdfalse = exports.Shl2 = exports.I32tou1 = exports.Fdiv2 = exports.EcmaLdtrue = exports.CallePolymorphic = exports.Xor2Wide = exports.F64tou64 = exports.Fmul2 = exports.EcmaLdglobal = exports.CallPolymorphic = exports.Xor2 = exports.F64tou32 = exports.Fsub2 = exports.EcmaLdsymbol = exports.CallePolymorphicRange = exports.Or2Wide = exports.Modu2Wide = exports.F64toi64 = exports.Fadd2 = exports.EcmaLdnull = exports.CallPolymorphicRange = exports.Or2 = exports.Modu2 = exports.F64toi32 = exports.Fneg = exports.EcmaLdundefined = exports.CallePolymorphicShort = exports.And2Wide = exports.Divu2Wide = exports.U64tof64 = exports.Fcmpg = exports.EcmaLdglobalthis = exports.CallPolymorphicShort = exports.And2 = exports.Divu2 = exports.I64tof64 = exports.Fcmpl = exports.EcmaLdinfinity = exports.Monitorexit = exports.NotWide = exports.UcmpWide = exports.U32tof64 = exports.Fldai = exports.EcmaLdnan = exports.Monitorenter = exports.Not = exports.Ucmp = exports.I32tof64 = exports.Fmovi = exports.CalliDynRange = exports.CalliDyn = exports.CalliDynShort = exports.ReturnDyn = exports.FldaiDyn = exports.LdaiDyn = exports.StaDyn = exports.LdaDyn = exports.MovDyn = exports.CallVirtAcc = exports.CallVirtAccShort = exports.CallVirtRange = exports.CallVirt = exports.CallVirtShort = exports.CallAcc = exports.CallAccShort = exports.CallRange = exports.Call = exports.CallShort = exports.Isinstance = exports.Checkcast = exports.Throw = exports.ReturnVoid = exports.ReturnObj = exports.ReturnWide = exports.Return = exports.StstaticObj = exports.StstaticWide = exports.Ststatic = exports.LdstaticObj = exports.LdstaticWide = exports.Ldstatic = exports.StobjVObj = exports.StobjVWide = exports.StobjV = exports.LdobjVObj = exports.LdobjVWide = exports.LdobjV = exports.StobjObj = exports.StobjWide = exports.Stobj = exports.LdobjObj = exports.LdobjWide = exports.Ldobj = exports.InitobjRange = exports.Initobj = exports.InitobjShort = exports.Newobj = exports.Newarr = exports.Lenarr = exports.StarrObj = exports.FstarrWide = exports.Fstarr32 = exports.StarrWide = exports.Starr = exports.Starr16 = exports.Starr8 = exports.LdarrObj = exports.FldarrWide = exports.Fldarr32 = exports.LdarrWide = exports.Ldarr = exports.Ldarru16 = exports.Ldarr16 = exports.Ldarru8 = exports.Ldarr8 = exports.Inci = exports.Mod = exports.Div = exports.Mul = exports.Sub = exports.Add = exports.Modi = exports.Divi = exports.Ashri = exports.Shri = exports.Shli = exports.Ori = exports.Andi = exports.Muli = exports.Subi = exports.Addi = exports.Mod2Wide = exports.Mod2 = exports.Div2Wide = exports.Div2 = exports.Fmod2Wide = exports.Fdiv2Wide = exports.Fmul2Wide = exports.Fsub2Wide = exports.Fadd2Wide = exports.Mul2Wide = exports.Mul2 = exports.Sub2Wide = exports.Sub2 = exports.Add2Wide = exports.Add2 = exports.NegWide = exports.Neg = exports.FnegWide = exports.Jge = exports.Jle = exports.Jgt = exports.Jlt = exports.Jne = exports.Jeq = exports.Jgez = exports.Jlez = exports.Jgtz = exports.Jltz = exports.Jnez = exports.Jeqz = exports.JnezObj = exports.JeqzObj = exports.JneObj = exports.JeqObj = exports.Jmp = exports.FcmpgWide = exports.FcmplWide = exports.CmpWide = exports.StaObj = exports.StaWide = exports.Sta = exports.LdaNull = exports.LdaType = exports.LdaConst = exports.LdaStr = exports.FldaiWide = exports.LdaiWide = exports.Ldai = exports.LdaObj = exports.LdaWide = exports.Lda = exports.MovNull = exports.FmoviWide = exports.MoviWide = exports.Movi = exports.MovObj = exports.MovWide = exports.Mov = exports.Nop = exports.DebugInsPlaceHolder = exports.Label = exports.Imm = exports.VReg = exports.Intrinsic = exports.IRNode = exports.FormatItem = exports.OperandKind = exports.BuiltIns = exports.ResultDst = exports.ResultType = exports.getInstructionSize = exports.IRNodeKind = void 0;
var ts = __importStar(require("typescript"));
var debuginfo_1 = require("./debuginfo");
var IRNodeKind;
(function (IRNodeKind) {
    IRNodeKind[IRNodeKind["VREG"] = 0] = "VREG";
    IRNodeKind[IRNodeKind["IMM"] = 1] = "IMM";
    IRNodeKind[IRNodeKind["LABEL"] = 2] = "LABEL";
    IRNodeKind[IRNodeKind["VIRTUALINS_DYN"] = 3] = "VIRTUALINS_DYN";
    IRNodeKind[IRNodeKind["DEFINE_GLOBAL_VAR"] = 4] = "DEFINE_GLOBAL_VAR";
    IRNodeKind[IRNodeKind["NOP"] = 5] = "NOP";
    IRNodeKind[IRNodeKind["MOV"] = 6] = "MOV";
    IRNodeKind[IRNodeKind["MOV_64"] = 7] = "MOV_64";
    IRNodeKind[IRNodeKind["MOV_OBJ"] = 8] = "MOV_OBJ";
    IRNodeKind[IRNodeKind["MOVI"] = 9] = "MOVI";
    IRNodeKind[IRNodeKind["MOVI_64"] = 10] = "MOVI_64";
    IRNodeKind[IRNodeKind["FMOVI_64"] = 11] = "FMOVI_64";
    IRNodeKind[IRNodeKind["MOV_NULL"] = 12] = "MOV_NULL";
    IRNodeKind[IRNodeKind["LDA"] = 13] = "LDA";
    IRNodeKind[IRNodeKind["LDA_64"] = 14] = "LDA_64";
    IRNodeKind[IRNodeKind["LDA_OBJ"] = 15] = "LDA_OBJ";
    IRNodeKind[IRNodeKind["LDAI"] = 16] = "LDAI";
    IRNodeKind[IRNodeKind["LDAI_64"] = 17] = "LDAI_64";
    IRNodeKind[IRNodeKind["FLDAI_64"] = 18] = "FLDAI_64";
    IRNodeKind[IRNodeKind["LDA_STR"] = 19] = "LDA_STR";
    IRNodeKind[IRNodeKind["LDA_CONST"] = 20] = "LDA_CONST";
    IRNodeKind[IRNodeKind["LDA_TYPE"] = 21] = "LDA_TYPE";
    IRNodeKind[IRNodeKind["LDA_NULL"] = 22] = "LDA_NULL";
    IRNodeKind[IRNodeKind["STA"] = 23] = "STA";
    IRNodeKind[IRNodeKind["STA_64"] = 24] = "STA_64";
    IRNodeKind[IRNodeKind["STA_OBJ"] = 25] = "STA_OBJ";
    IRNodeKind[IRNodeKind["CMP_64"] = 26] = "CMP_64";
    IRNodeKind[IRNodeKind["FCMPL_64"] = 27] = "FCMPL_64";
    IRNodeKind[IRNodeKind["FCMPG_64"] = 28] = "FCMPG_64";
    IRNodeKind[IRNodeKind["JMP"] = 29] = "JMP";
    IRNodeKind[IRNodeKind["JEQ_OBJ"] = 30] = "JEQ_OBJ";
    IRNodeKind[IRNodeKind["JNE_OBJ"] = 31] = "JNE_OBJ";
    IRNodeKind[IRNodeKind["JEQZ_OBJ"] = 32] = "JEQZ_OBJ";
    IRNodeKind[IRNodeKind["JNEZ_OBJ"] = 33] = "JNEZ_OBJ";
    IRNodeKind[IRNodeKind["JEQZ"] = 34] = "JEQZ";
    IRNodeKind[IRNodeKind["JNEZ"] = 35] = "JNEZ";
    IRNodeKind[IRNodeKind["JLTZ"] = 36] = "JLTZ";
    IRNodeKind[IRNodeKind["JGTZ"] = 37] = "JGTZ";
    IRNodeKind[IRNodeKind["JLEZ"] = 38] = "JLEZ";
    IRNodeKind[IRNodeKind["JGEZ"] = 39] = "JGEZ";
    IRNodeKind[IRNodeKind["JEQ"] = 40] = "JEQ";
    IRNodeKind[IRNodeKind["JNE"] = 41] = "JNE";
    IRNodeKind[IRNodeKind["JLT"] = 42] = "JLT";
    IRNodeKind[IRNodeKind["JGT"] = 43] = "JGT";
    IRNodeKind[IRNodeKind["JLE"] = 44] = "JLE";
    IRNodeKind[IRNodeKind["JGE"] = 45] = "JGE";
    IRNodeKind[IRNodeKind["FNEG_64"] = 46] = "FNEG_64";
    IRNodeKind[IRNodeKind["NEG"] = 47] = "NEG";
    IRNodeKind[IRNodeKind["NEG_64"] = 48] = "NEG_64";
    IRNodeKind[IRNodeKind["ADD2"] = 49] = "ADD2";
    IRNodeKind[IRNodeKind["ADD2_64"] = 50] = "ADD2_64";
    IRNodeKind[IRNodeKind["SUB2"] = 51] = "SUB2";
    IRNodeKind[IRNodeKind["SUB2_64"] = 52] = "SUB2_64";
    IRNodeKind[IRNodeKind["MUL2"] = 53] = "MUL2";
    IRNodeKind[IRNodeKind["MUL2_64"] = 54] = "MUL2_64";
    IRNodeKind[IRNodeKind["FADD2_64"] = 55] = "FADD2_64";
    IRNodeKind[IRNodeKind["FSUB2_64"] = 56] = "FSUB2_64";
    IRNodeKind[IRNodeKind["FMUL2_64"] = 57] = "FMUL2_64";
    IRNodeKind[IRNodeKind["FDIV2_64"] = 58] = "FDIV2_64";
    IRNodeKind[IRNodeKind["FMOD2_64"] = 59] = "FMOD2_64";
    IRNodeKind[IRNodeKind["DIV2"] = 60] = "DIV2";
    IRNodeKind[IRNodeKind["DIV2_64"] = 61] = "DIV2_64";
    IRNodeKind[IRNodeKind["MOD2"] = 62] = "MOD2";
    IRNodeKind[IRNodeKind["MOD2_64"] = 63] = "MOD2_64";
    IRNodeKind[IRNodeKind["ADDI"] = 64] = "ADDI";
    IRNodeKind[IRNodeKind["SUBI"] = 65] = "SUBI";
    IRNodeKind[IRNodeKind["MULI"] = 66] = "MULI";
    IRNodeKind[IRNodeKind["ANDI"] = 67] = "ANDI";
    IRNodeKind[IRNodeKind["ORI"] = 68] = "ORI";
    IRNodeKind[IRNodeKind["SHLI"] = 69] = "SHLI";
    IRNodeKind[IRNodeKind["SHRI"] = 70] = "SHRI";
    IRNodeKind[IRNodeKind["ASHRI"] = 71] = "ASHRI";
    IRNodeKind[IRNodeKind["DIVI"] = 72] = "DIVI";
    IRNodeKind[IRNodeKind["MODI"] = 73] = "MODI";
    IRNodeKind[IRNodeKind["ADD"] = 74] = "ADD";
    IRNodeKind[IRNodeKind["SUB"] = 75] = "SUB";
    IRNodeKind[IRNodeKind["MUL"] = 76] = "MUL";
    IRNodeKind[IRNodeKind["DIV"] = 77] = "DIV";
    IRNodeKind[IRNodeKind["MOD"] = 78] = "MOD";
    IRNodeKind[IRNodeKind["INCI"] = 79] = "INCI";
    IRNodeKind[IRNodeKind["LDARR_8"] = 80] = "LDARR_8";
    IRNodeKind[IRNodeKind["LDARRU_8"] = 81] = "LDARRU_8";
    IRNodeKind[IRNodeKind["LDARR_16"] = 82] = "LDARR_16";
    IRNodeKind[IRNodeKind["LDARRU_16"] = 83] = "LDARRU_16";
    IRNodeKind[IRNodeKind["LDARR"] = 84] = "LDARR";
    IRNodeKind[IRNodeKind["LDARR_64"] = 85] = "LDARR_64";
    IRNodeKind[IRNodeKind["FLDARR_32"] = 86] = "FLDARR_32";
    IRNodeKind[IRNodeKind["FLDARR_64"] = 87] = "FLDARR_64";
    IRNodeKind[IRNodeKind["LDARR_OBJ"] = 88] = "LDARR_OBJ";
    IRNodeKind[IRNodeKind["STARR_8"] = 89] = "STARR_8";
    IRNodeKind[IRNodeKind["STARR_16"] = 90] = "STARR_16";
    IRNodeKind[IRNodeKind["STARR"] = 91] = "STARR";
    IRNodeKind[IRNodeKind["STARR_64"] = 92] = "STARR_64";
    IRNodeKind[IRNodeKind["FSTARR_32"] = 93] = "FSTARR_32";
    IRNodeKind[IRNodeKind["FSTARR_64"] = 94] = "FSTARR_64";
    IRNodeKind[IRNodeKind["STARR_OBJ"] = 95] = "STARR_OBJ";
    IRNodeKind[IRNodeKind["LENARR"] = 96] = "LENARR";
    IRNodeKind[IRNodeKind["NEWARR"] = 97] = "NEWARR";
    IRNodeKind[IRNodeKind["NEWOBJ"] = 98] = "NEWOBJ";
    IRNodeKind[IRNodeKind["INITOBJ_SHORT"] = 99] = "INITOBJ_SHORT";
    IRNodeKind[IRNodeKind["INITOBJ"] = 100] = "INITOBJ";
    IRNodeKind[IRNodeKind["INITOBJ_RANGE"] = 101] = "INITOBJ_RANGE";
    IRNodeKind[IRNodeKind["LDOBJ"] = 102] = "LDOBJ";
    IRNodeKind[IRNodeKind["LDOBJ_64"] = 103] = "LDOBJ_64";
    IRNodeKind[IRNodeKind["LDOBJ_OBJ"] = 104] = "LDOBJ_OBJ";
    IRNodeKind[IRNodeKind["STOBJ"] = 105] = "STOBJ";
    IRNodeKind[IRNodeKind["STOBJ_64"] = 106] = "STOBJ_64";
    IRNodeKind[IRNodeKind["STOBJ_OBJ"] = 107] = "STOBJ_OBJ";
    IRNodeKind[IRNodeKind["LDOBJ_V"] = 108] = "LDOBJ_V";
    IRNodeKind[IRNodeKind["LDOBJ_V_64"] = 109] = "LDOBJ_V_64";
    IRNodeKind[IRNodeKind["LDOBJ_V_OBJ"] = 110] = "LDOBJ_V_OBJ";
    IRNodeKind[IRNodeKind["STOBJ_V"] = 111] = "STOBJ_V";
    IRNodeKind[IRNodeKind["STOBJ_V_64"] = 112] = "STOBJ_V_64";
    IRNodeKind[IRNodeKind["STOBJ_V_OBJ"] = 113] = "STOBJ_V_OBJ";
    IRNodeKind[IRNodeKind["LDSTATIC"] = 114] = "LDSTATIC";
    IRNodeKind[IRNodeKind["LDSTATIC_64"] = 115] = "LDSTATIC_64";
    IRNodeKind[IRNodeKind["LDSTATIC_OBJ"] = 116] = "LDSTATIC_OBJ";
    IRNodeKind[IRNodeKind["STSTATIC"] = 117] = "STSTATIC";
    IRNodeKind[IRNodeKind["STSTATIC_64"] = 118] = "STSTATIC_64";
    IRNodeKind[IRNodeKind["STSTATIC_OBJ"] = 119] = "STSTATIC_OBJ";
    IRNodeKind[IRNodeKind["RETURN"] = 120] = "RETURN";
    IRNodeKind[IRNodeKind["RETURN_64"] = 121] = "RETURN_64";
    IRNodeKind[IRNodeKind["RETURN_OBJ"] = 122] = "RETURN_OBJ";
    IRNodeKind[IRNodeKind["RETURN_VOID"] = 123] = "RETURN_VOID";
    IRNodeKind[IRNodeKind["THROW"] = 124] = "THROW";
    IRNodeKind[IRNodeKind["CHECKCAST"] = 125] = "CHECKCAST";
    IRNodeKind[IRNodeKind["ISINSTANCE"] = 126] = "ISINSTANCE";
    IRNodeKind[IRNodeKind["CALL_SHORT"] = 127] = "CALL_SHORT";
    IRNodeKind[IRNodeKind["CALL"] = 128] = "CALL";
    IRNodeKind[IRNodeKind["CALL_RANGE"] = 129] = "CALL_RANGE";
    IRNodeKind[IRNodeKind["CALL_ACC_SHORT"] = 130] = "CALL_ACC_SHORT";
    IRNodeKind[IRNodeKind["CALL_ACC"] = 131] = "CALL_ACC";
    IRNodeKind[IRNodeKind["CALL_VIRT_SHORT"] = 132] = "CALL_VIRT_SHORT";
    IRNodeKind[IRNodeKind["CALL_VIRT"] = 133] = "CALL_VIRT";
    IRNodeKind[IRNodeKind["CALL_VIRT_RANGE"] = 134] = "CALL_VIRT_RANGE";
    IRNodeKind[IRNodeKind["CALL_VIRT_ACC_SHORT"] = 135] = "CALL_VIRT_ACC_SHORT";
    IRNodeKind[IRNodeKind["CALL_VIRT_ACC"] = 136] = "CALL_VIRT_ACC";
    IRNodeKind[IRNodeKind["MOV_DYN"] = 137] = "MOV_DYN";
    IRNodeKind[IRNodeKind["LDA_DYN"] = 138] = "LDA_DYN";
    IRNodeKind[IRNodeKind["STA_DYN"] = 139] = "STA_DYN";
    IRNodeKind[IRNodeKind["LDAI_DYN"] = 140] = "LDAI_DYN";
    IRNodeKind[IRNodeKind["FLDAI_DYN"] = 141] = "FLDAI_DYN";
    IRNodeKind[IRNodeKind["RETURN_DYN"] = 142] = "RETURN_DYN";
    IRNodeKind[IRNodeKind["CALLI_DYN_SHORT"] = 143] = "CALLI_DYN_SHORT";
    IRNodeKind[IRNodeKind["CALLI_DYN"] = 144] = "CALLI_DYN";
    IRNodeKind[IRNodeKind["CALLI_DYN_RANGE"] = 145] = "CALLI_DYN_RANGE";
    IRNodeKind[IRNodeKind["FMOVI"] = 146] = "FMOVI";
    IRNodeKind[IRNodeKind["I32TOF64"] = 147] = "I32TOF64";
    IRNodeKind[IRNodeKind["UCMP"] = 148] = "UCMP";
    IRNodeKind[IRNodeKind["NOT"] = 149] = "NOT";
    IRNodeKind[IRNodeKind["MONITORENTER"] = 150] = "MONITORENTER";
    IRNodeKind[IRNodeKind["ECMA_LDNAN"] = 151] = "ECMA_LDNAN";
    IRNodeKind[IRNodeKind["FLDAI"] = 152] = "FLDAI";
    IRNodeKind[IRNodeKind["U32TOF64"] = 153] = "U32TOF64";
    IRNodeKind[IRNodeKind["UCMP_64"] = 154] = "UCMP_64";
    IRNodeKind[IRNodeKind["NOT_64"] = 155] = "NOT_64";
    IRNodeKind[IRNodeKind["MONITOREXIT"] = 156] = "MONITOREXIT";
    IRNodeKind[IRNodeKind["ECMA_LDINFINITY"] = 157] = "ECMA_LDINFINITY";
    IRNodeKind[IRNodeKind["FCMPL"] = 158] = "FCMPL";
    IRNodeKind[IRNodeKind["I64TOF64"] = 159] = "I64TOF64";
    IRNodeKind[IRNodeKind["DIVU2"] = 160] = "DIVU2";
    IRNodeKind[IRNodeKind["AND2"] = 161] = "AND2";
    IRNodeKind[IRNodeKind["CALL_POLYMORPHIC_SHORT"] = 162] = "CALL_POLYMORPHIC_SHORT";
    IRNodeKind[IRNodeKind["ECMA_LDGLOBALTHIS"] = 163] = "ECMA_LDGLOBALTHIS";
    IRNodeKind[IRNodeKind["FCMPG"] = 164] = "FCMPG";
    IRNodeKind[IRNodeKind["U64TOF64"] = 165] = "U64TOF64";
    IRNodeKind[IRNodeKind["DIVU2_64"] = 166] = "DIVU2_64";
    IRNodeKind[IRNodeKind["AND2_64"] = 167] = "AND2_64";
    IRNodeKind[IRNodeKind["CALLE_POLYMORPHIC_SHORT"] = 168] = "CALLE_POLYMORPHIC_SHORT";
    IRNodeKind[IRNodeKind["ECMA_LDUNDEFINED"] = 169] = "ECMA_LDUNDEFINED";
    IRNodeKind[IRNodeKind["FNEG"] = 170] = "FNEG";
    IRNodeKind[IRNodeKind["F64TOI32"] = 171] = "F64TOI32";
    IRNodeKind[IRNodeKind["MODU2"] = 172] = "MODU2";
    IRNodeKind[IRNodeKind["OR2"] = 173] = "OR2";
    IRNodeKind[IRNodeKind["CALL_POLYMORPHIC_RANGE"] = 174] = "CALL_POLYMORPHIC_RANGE";
    IRNodeKind[IRNodeKind["ECMA_LDNULL"] = 175] = "ECMA_LDNULL";
    IRNodeKind[IRNodeKind["FADD2"] = 176] = "FADD2";
    IRNodeKind[IRNodeKind["F64TOI64"] = 177] = "F64TOI64";
    IRNodeKind[IRNodeKind["MODU2_64"] = 178] = "MODU2_64";
    IRNodeKind[IRNodeKind["OR2_64"] = 179] = "OR2_64";
    IRNodeKind[IRNodeKind["CALLE_POLYMORPHIC_RANGE"] = 180] = "CALLE_POLYMORPHIC_RANGE";
    IRNodeKind[IRNodeKind["ECMA_LDSYMBOL"] = 181] = "ECMA_LDSYMBOL";
    IRNodeKind[IRNodeKind["FSUB2"] = 182] = "FSUB2";
    IRNodeKind[IRNodeKind["F64TOU32"] = 183] = "F64TOU32";
    IRNodeKind[IRNodeKind["XOR2"] = 184] = "XOR2";
    IRNodeKind[IRNodeKind["CALL_POLYMORPHIC"] = 185] = "CALL_POLYMORPHIC";
    IRNodeKind[IRNodeKind["ECMA_LDGLOBAL"] = 186] = "ECMA_LDGLOBAL";
    IRNodeKind[IRNodeKind["FMUL2"] = 187] = "FMUL2";
    IRNodeKind[IRNodeKind["F64TOU64"] = 188] = "F64TOU64";
    IRNodeKind[IRNodeKind["XOR2_64"] = 189] = "XOR2_64";
    IRNodeKind[IRNodeKind["CALLE_POLYMORPHIC"] = 190] = "CALLE_POLYMORPHIC";
    IRNodeKind[IRNodeKind["ECMA_LDTRUE"] = 191] = "ECMA_LDTRUE";
    IRNodeKind[IRNodeKind["FDIV2"] = 192] = "FDIV2";
    IRNodeKind[IRNodeKind["I32TOU1"] = 193] = "I32TOU1";
    IRNodeKind[IRNodeKind["SHL2"] = 194] = "SHL2";
    IRNodeKind[IRNodeKind["ECMA_LDFALSE"] = 195] = "ECMA_LDFALSE";
    IRNodeKind[IRNodeKind["FMOD2"] = 196] = "FMOD2";
    IRNodeKind[IRNodeKind["I64TOU1"] = 197] = "I64TOU1";
    IRNodeKind[IRNodeKind["SHL2_64"] = 198] = "SHL2_64";
    IRNodeKind[IRNodeKind["ECMA_THROWDYN"] = 199] = "ECMA_THROWDYN";
    IRNodeKind[IRNodeKind["I32TOF32"] = 200] = "I32TOF32";
    IRNodeKind[IRNodeKind["U32TOU1"] = 201] = "U32TOU1";
    IRNodeKind[IRNodeKind["SHR2"] = 202] = "SHR2";
    IRNodeKind[IRNodeKind["ECMA_TYPEOFDYN"] = 203] = "ECMA_TYPEOFDYN";
    IRNodeKind[IRNodeKind["U32TOF32"] = 204] = "U32TOF32";
    IRNodeKind[IRNodeKind["U64TOU1"] = 205] = "U64TOU1";
    IRNodeKind[IRNodeKind["SHR2_64"] = 206] = "SHR2_64";
    IRNodeKind[IRNodeKind["ECMA_LDLEXENVDYN"] = 207] = "ECMA_LDLEXENVDYN";
    IRNodeKind[IRNodeKind["I64TOF32"] = 208] = "I64TOF32";
    IRNodeKind[IRNodeKind["I32TOI64"] = 209] = "I32TOI64";
    IRNodeKind[IRNodeKind["ASHR2"] = 210] = "ASHR2";
    IRNodeKind[IRNodeKind["ECMA_POPLEXENVDYN"] = 211] = "ECMA_POPLEXENVDYN";
    IRNodeKind[IRNodeKind["U64TOF32"] = 212] = "U64TOF32";
    IRNodeKind[IRNodeKind["I32TOI16"] = 213] = "I32TOI16";
    IRNodeKind[IRNodeKind["ASHR2_64"] = 214] = "ASHR2_64";
    IRNodeKind[IRNodeKind["ECMA_GETUNMAPPEDARGS"] = 215] = "ECMA_GETUNMAPPEDARGS";
    IRNodeKind[IRNodeKind["F32TOF64"] = 216] = "F32TOF64";
    IRNodeKind[IRNodeKind["I32TOU16"] = 217] = "I32TOU16";
    IRNodeKind[IRNodeKind["XORI"] = 218] = "XORI";
    IRNodeKind[IRNodeKind["ECMA_GETPROPITERATOR"] = 219] = "ECMA_GETPROPITERATOR";
    IRNodeKind[IRNodeKind["F32TOI32"] = 220] = "F32TOI32";
    IRNodeKind[IRNodeKind["I32TOI8"] = 221] = "I32TOI8";
    IRNodeKind[IRNodeKind["AND"] = 222] = "AND";
    IRNodeKind[IRNodeKind["ECMA_ASYNCFUNCTIONENTER"] = 223] = "ECMA_ASYNCFUNCTIONENTER";
    IRNodeKind[IRNodeKind["F32TOI64"] = 224] = "F32TOI64";
    IRNodeKind[IRNodeKind["I32TOU8"] = 225] = "I32TOU8";
    IRNodeKind[IRNodeKind["OR"] = 226] = "OR";
    IRNodeKind[IRNodeKind["ECMA_LDHOLE"] = 227] = "ECMA_LDHOLE";
    IRNodeKind[IRNodeKind["F32TOU32"] = 228] = "F32TOU32";
    IRNodeKind[IRNodeKind["I64TOI32"] = 229] = "I64TOI32";
    IRNodeKind[IRNodeKind["XOR"] = 230] = "XOR";
    IRNodeKind[IRNodeKind["ECMA_RETURNUNDEFINED"] = 231] = "ECMA_RETURNUNDEFINED";
    IRNodeKind[IRNodeKind["F32TOU64"] = 232] = "F32TOU64";
    IRNodeKind[IRNodeKind["U32TOI64"] = 233] = "U32TOI64";
    IRNodeKind[IRNodeKind["SHL"] = 234] = "SHL";
    IRNodeKind[IRNodeKind["ECMA_CREATEEMPTYOBJECT"] = 235] = "ECMA_CREATEEMPTYOBJECT";
    IRNodeKind[IRNodeKind["F64TOF32"] = 236] = "F64TOF32";
    IRNodeKind[IRNodeKind["U32TOI16"] = 237] = "U32TOI16";
    IRNodeKind[IRNodeKind["SHR"] = 238] = "SHR";
    IRNodeKind[IRNodeKind["ECMA_CREATEEMPTYARRAY"] = 239] = "ECMA_CREATEEMPTYARRAY";
    IRNodeKind[IRNodeKind["U32TOU16"] = 240] = "U32TOU16";
    IRNodeKind[IRNodeKind["ASHR"] = 241] = "ASHR";
    IRNodeKind[IRNodeKind["ECMA_GETITERATOR"] = 242] = "ECMA_GETITERATOR";
    IRNodeKind[IRNodeKind["U32TOI8"] = 243] = "U32TOI8";
    IRNodeKind[IRNodeKind["ECMA_THROWTHROWNOTEXISTS"] = 244] = "ECMA_THROWTHROWNOTEXISTS";
    IRNodeKind[IRNodeKind["U32TOU8"] = 245] = "U32TOU8";
    IRNodeKind[IRNodeKind["ECMA_THROWPATTERNNONCOERCIBLE"] = 246] = "ECMA_THROWPATTERNNONCOERCIBLE";
    IRNodeKind[IRNodeKind["U64TOI32"] = 247] = "U64TOI32";
    IRNodeKind[IRNodeKind["ECMA_LDHOMEOBJECT"] = 248] = "ECMA_LDHOMEOBJECT";
    IRNodeKind[IRNodeKind["U64TOU32"] = 249] = "U64TOU32";
    IRNodeKind[IRNodeKind["ECMA_THROWDELETESUPERPROPERTY"] = 250] = "ECMA_THROWDELETESUPERPROPERTY";
    IRNodeKind[IRNodeKind["ECMA_DEBUGGER"] = 251] = "ECMA_DEBUGGER";
    IRNodeKind[IRNodeKind["ECMA_ADD2DYN"] = 252] = "ECMA_ADD2DYN";
    IRNodeKind[IRNodeKind["ECMA_SUB2DYN"] = 253] = "ECMA_SUB2DYN";
    IRNodeKind[IRNodeKind["ECMA_MUL2DYN"] = 254] = "ECMA_MUL2DYN";
    IRNodeKind[IRNodeKind["ECMA_DIV2DYN"] = 255] = "ECMA_DIV2DYN";
    IRNodeKind[IRNodeKind["ECMA_MOD2DYN"] = 256] = "ECMA_MOD2DYN";
    IRNodeKind[IRNodeKind["ECMA_EQDYN"] = 257] = "ECMA_EQDYN";
    IRNodeKind[IRNodeKind["ECMA_NOTEQDYN"] = 258] = "ECMA_NOTEQDYN";
    IRNodeKind[IRNodeKind["ECMA_LESSDYN"] = 259] = "ECMA_LESSDYN";
    IRNodeKind[IRNodeKind["ECMA_LESSEQDYN"] = 260] = "ECMA_LESSEQDYN";
    IRNodeKind[IRNodeKind["ECMA_GREATERDYN"] = 261] = "ECMA_GREATERDYN";
    IRNodeKind[IRNodeKind["ECMA_GREATEREQDYN"] = 262] = "ECMA_GREATEREQDYN";
    IRNodeKind[IRNodeKind["ECMA_SHL2DYN"] = 263] = "ECMA_SHL2DYN";
    IRNodeKind[IRNodeKind["ECMA_SHR2DYN"] = 264] = "ECMA_SHR2DYN";
    IRNodeKind[IRNodeKind["ECMA_ASHR2DYN"] = 265] = "ECMA_ASHR2DYN";
    IRNodeKind[IRNodeKind["ECMA_AND2DYN"] = 266] = "ECMA_AND2DYN";
    IRNodeKind[IRNodeKind["ECMA_OR2DYN"] = 267] = "ECMA_OR2DYN";
    IRNodeKind[IRNodeKind["ECMA_XOR2DYN"] = 268] = "ECMA_XOR2DYN";
    IRNodeKind[IRNodeKind["ECMA_TONUMBER"] = 269] = "ECMA_TONUMBER";
    IRNodeKind[IRNodeKind["ECMA_NEGDYN"] = 270] = "ECMA_NEGDYN";
    IRNodeKind[IRNodeKind["ECMA_NOTDYN"] = 271] = "ECMA_NOTDYN";
    IRNodeKind[IRNodeKind["ECMA_INCDYN"] = 272] = "ECMA_INCDYN";
    IRNodeKind[IRNodeKind["ECMA_DECDYN"] = 273] = "ECMA_DECDYN";
    IRNodeKind[IRNodeKind["ECMA_EXPDYN"] = 274] = "ECMA_EXPDYN";
    IRNodeKind[IRNodeKind["ECMA_ISINDYN"] = 275] = "ECMA_ISINDYN";
    IRNodeKind[IRNodeKind["ECMA_INSTANCEOFDYN"] = 276] = "ECMA_INSTANCEOFDYN";
    IRNodeKind[IRNodeKind["ECMA_STRICTNOTEQDYN"] = 277] = "ECMA_STRICTNOTEQDYN";
    IRNodeKind[IRNodeKind["ECMA_STRICTEQDYN"] = 278] = "ECMA_STRICTEQDYN";
    IRNodeKind[IRNodeKind["ECMA_RESUMEGENERATOR"] = 279] = "ECMA_RESUMEGENERATOR";
    IRNodeKind[IRNodeKind["ECMA_GETRESUMEMODE"] = 280] = "ECMA_GETRESUMEMODE";
    IRNodeKind[IRNodeKind["ECMA_CREATEGENERATOROBJ"] = 281] = "ECMA_CREATEGENERATOROBJ";
    IRNodeKind[IRNodeKind["ECMA_THROWCONSTASSIGNMENT"] = 282] = "ECMA_THROWCONSTASSIGNMENT";
    IRNodeKind[IRNodeKind["ECMA_GETTEMPLATEOBJECT"] = 283] = "ECMA_GETTEMPLATEOBJECT";
    IRNodeKind[IRNodeKind["ECMA_GETNEXTPROPNAME"] = 284] = "ECMA_GETNEXTPROPNAME";
    IRNodeKind[IRNodeKind["ECMA_CALLARG0DYN"] = 285] = "ECMA_CALLARG0DYN";
    IRNodeKind[IRNodeKind["ECMA_THROWIFNOTOBJECT"] = 286] = "ECMA_THROWIFNOTOBJECT";
    IRNodeKind[IRNodeKind["ECMA_ITERNEXT"] = 287] = "ECMA_ITERNEXT";
    IRNodeKind[IRNodeKind["ECMA_CLOSEITERATOR"] = 288] = "ECMA_CLOSEITERATOR";
    IRNodeKind[IRNodeKind["ECMA_COPYMODULE"] = 289] = "ECMA_COPYMODULE";
    IRNodeKind[IRNodeKind["ECMA_SUPERCALLSPREAD"] = 290] = "ECMA_SUPERCALLSPREAD";
    IRNodeKind[IRNodeKind["ECMA_DELOBJPROP"] = 291] = "ECMA_DELOBJPROP";
    IRNodeKind[IRNodeKind["ECMA_NEWOBJSPREADDYN"] = 292] = "ECMA_NEWOBJSPREADDYN";
    IRNodeKind[IRNodeKind["ECMA_CREATEITERRESULTOBJ"] = 293] = "ECMA_CREATEITERRESULTOBJ";
    IRNodeKind[IRNodeKind["ECMA_SUSPENDGENERATOR"] = 294] = "ECMA_SUSPENDGENERATOR";
    IRNodeKind[IRNodeKind["ECMA_ASYNCFUNCTIONAWAITUNCAUGHT"] = 295] = "ECMA_ASYNCFUNCTIONAWAITUNCAUGHT";
    IRNodeKind[IRNodeKind["ECMA_THROWUNDEFINEDIFHOLE"] = 296] = "ECMA_THROWUNDEFINEDIFHOLE";
    IRNodeKind[IRNodeKind["ECMA_CALLARG1DYN"] = 297] = "ECMA_CALLARG1DYN";
    IRNodeKind[IRNodeKind["ECMA_COPYDATAPROPERTIES"] = 298] = "ECMA_COPYDATAPROPERTIES";
    IRNodeKind[IRNodeKind["ECMA_STARRAYSPREAD"] = 299] = "ECMA_STARRAYSPREAD";
    IRNodeKind[IRNodeKind["ECMA_GETITERATORNEXT"] = 300] = "ECMA_GETITERATORNEXT";
    IRNodeKind[IRNodeKind["ECMA_SETOBJECTWITHPROTO"] = 301] = "ECMA_SETOBJECTWITHPROTO";
    IRNodeKind[IRNodeKind["ECMA_LDOBJBYVALUE"] = 302] = "ECMA_LDOBJBYVALUE";
    IRNodeKind[IRNodeKind["ECMA_STOBJBYVALUE"] = 303] = "ECMA_STOBJBYVALUE";
    IRNodeKind[IRNodeKind["ECMA_STOWNBYVALUE"] = 304] = "ECMA_STOWNBYVALUE";
    IRNodeKind[IRNodeKind["ECMA_LDSUPERBYVALUE"] = 305] = "ECMA_LDSUPERBYVALUE";
    IRNodeKind[IRNodeKind["ECMA_STSUPERBYVALUE"] = 306] = "ECMA_STSUPERBYVALUE";
    IRNodeKind[IRNodeKind["ECMA_LDOBJBYINDEX"] = 307] = "ECMA_LDOBJBYINDEX";
    IRNodeKind[IRNodeKind["ECMA_STOBJBYINDEX"] = 308] = "ECMA_STOBJBYINDEX";
    IRNodeKind[IRNodeKind["ECMA_STOWNBYINDEX"] = 309] = "ECMA_STOWNBYINDEX";
    IRNodeKind[IRNodeKind["ECMA_CALLSPREADDYN"] = 310] = "ECMA_CALLSPREADDYN";
    IRNodeKind[IRNodeKind["ECMA_ASYNCFUNCTIONRESOLVE"] = 311] = "ECMA_ASYNCFUNCTIONRESOLVE";
    IRNodeKind[IRNodeKind["ECMA_ASYNCFUNCTIONREJECT"] = 312] = "ECMA_ASYNCFUNCTIONREJECT";
    IRNodeKind[IRNodeKind["ECMA_CALLARGS2DYN"] = 313] = "ECMA_CALLARGS2DYN";
    IRNodeKind[IRNodeKind["ECMA_CALLARGS3DYN"] = 314] = "ECMA_CALLARGS3DYN";
    IRNodeKind[IRNodeKind["ECMA_DEFINEGETTERSETTERBYVALUE"] = 315] = "ECMA_DEFINEGETTERSETTERBYVALUE";
    IRNodeKind[IRNodeKind["ECMA_NEWOBJDYNRANGE"] = 316] = "ECMA_NEWOBJDYNRANGE";
    IRNodeKind[IRNodeKind["ECMA_CALLIRANGEDYN"] = 317] = "ECMA_CALLIRANGEDYN";
    IRNodeKind[IRNodeKind["ECMA_CALLITHISRANGEDYN"] = 318] = "ECMA_CALLITHISRANGEDYN";
    IRNodeKind[IRNodeKind["ECMA_SUPERCALL"] = 319] = "ECMA_SUPERCALL";
    IRNodeKind[IRNodeKind["ECMA_CREATEOBJECTWITHEXCLUDEDKEYS"] = 320] = "ECMA_CREATEOBJECTWITHEXCLUDEDKEYS";
    IRNodeKind[IRNodeKind["ECMA_DEFINEFUNCDYN"] = 321] = "ECMA_DEFINEFUNCDYN";
    IRNodeKind[IRNodeKind["ECMA_DEFINENCFUNCDYN"] = 322] = "ECMA_DEFINENCFUNCDYN";
    IRNodeKind[IRNodeKind["ECMA_DEFINEGENERATORFUNC"] = 323] = "ECMA_DEFINEGENERATORFUNC";
    IRNodeKind[IRNodeKind["ECMA_DEFINEASYNCFUNC"] = 324] = "ECMA_DEFINEASYNCFUNC";
    IRNodeKind[IRNodeKind["ECMA_DEFINEMETHOD"] = 325] = "ECMA_DEFINEMETHOD";
    IRNodeKind[IRNodeKind["ECMA_NEWLEXENVDYN"] = 326] = "ECMA_NEWLEXENVDYN";
    IRNodeKind[IRNodeKind["ECMA_COPYRESTARGS"] = 327] = "ECMA_COPYRESTARGS";
    IRNodeKind[IRNodeKind["ECMA_CREATEARRAYWITHBUFFER"] = 328] = "ECMA_CREATEARRAYWITHBUFFER";
    IRNodeKind[IRNodeKind["ECMA_CREATEOBJECTHAVINGMETHOD"] = 329] = "ECMA_CREATEOBJECTHAVINGMETHOD";
    IRNodeKind[IRNodeKind["ECMA_THROWIFSUPERNOTCORRECTCALL"] = 330] = "ECMA_THROWIFSUPERNOTCORRECTCALL";
    IRNodeKind[IRNodeKind["ECMA_CREATEOBJECTWITHBUFFER"] = 331] = "ECMA_CREATEOBJECTWITHBUFFER";
    IRNodeKind[IRNodeKind["ECMA_LDLEXVARDYN"] = 332] = "ECMA_LDLEXVARDYN";
    IRNodeKind[IRNodeKind["ECMA_STLEXVARDYN"] = 333] = "ECMA_STLEXVARDYN";
    IRNodeKind[IRNodeKind["ECMA_DEFINECLASSWITHBUFFER"] = 334] = "ECMA_DEFINECLASSWITHBUFFER";
    IRNodeKind[IRNodeKind["ECMA_IMPORTMODULE"] = 335] = "ECMA_IMPORTMODULE";
    IRNodeKind[IRNodeKind["ECMA_STMODULEVAR"] = 336] = "ECMA_STMODULEVAR";
    IRNodeKind[IRNodeKind["ECMA_TRYLDGLOBALBYNAME"] = 337] = "ECMA_TRYLDGLOBALBYNAME";
    IRNodeKind[IRNodeKind["ECMA_TRYSTGLOBALBYNAME"] = 338] = "ECMA_TRYSTGLOBALBYNAME";
    IRNodeKind[IRNodeKind["ECMA_LDGLOBALVAR"] = 339] = "ECMA_LDGLOBALVAR";
    IRNodeKind[IRNodeKind["ECMA_STGLOBALVAR"] = 340] = "ECMA_STGLOBALVAR";
    IRNodeKind[IRNodeKind["ECMA_LDOBJBYNAME"] = 341] = "ECMA_LDOBJBYNAME";
    IRNodeKind[IRNodeKind["ECMA_STOBJBYNAME"] = 342] = "ECMA_STOBJBYNAME";
    IRNodeKind[IRNodeKind["ECMA_STOWNBYNAME"] = 343] = "ECMA_STOWNBYNAME";
    IRNodeKind[IRNodeKind["ECMA_LDSUPERBYNAME"] = 344] = "ECMA_LDSUPERBYNAME";
    IRNodeKind[IRNodeKind["ECMA_STSUPERBYNAME"] = 345] = "ECMA_STSUPERBYNAME";
    IRNodeKind[IRNodeKind["ECMA_LDMODVARBYNAME"] = 346] = "ECMA_LDMODVARBYNAME";
    IRNodeKind[IRNodeKind["ECMA_CREATEREGEXPWITHLITERAL"] = 347] = "ECMA_CREATEREGEXPWITHLITERAL";
    IRNodeKind[IRNodeKind["ECMA_ISTRUE"] = 348] = "ECMA_ISTRUE";
    IRNodeKind[IRNodeKind["ECMA_ISFALSE"] = 349] = "ECMA_ISFALSE";
    IRNodeKind[IRNodeKind["ECMA_STCONSTTOGLOBALRECORD"] = 350] = "ECMA_STCONSTTOGLOBALRECORD";
    IRNodeKind[IRNodeKind["ECMA_STLETTOGLOBALRECORD"] = 351] = "ECMA_STLETTOGLOBALRECORD";
    IRNodeKind[IRNodeKind["ECMA_STCLASSTOGLOBALRECORD"] = 352] = "ECMA_STCLASSTOGLOBALRECORD";
    IRNodeKind[IRNodeKind["ECMA_STOWNBYVALUEWITHNAMESET"] = 353] = "ECMA_STOWNBYVALUEWITHNAMESET";
    IRNodeKind[IRNodeKind["ECMA_STOWNBYNAMEWITHNAMESET"] = 354] = "ECMA_STOWNBYNAMEWITHNAMESET";
})(IRNodeKind = exports.IRNodeKind || (exports.IRNodeKind = {}));
function getInstructionSize(opcode) {
    switch (opcode) {
        case IRNodeKind.NOP:
            return 1;
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
        case IRNodeKind.LDA_CONST:
            return 6;
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
        case IRNodeKind.CMP_64:
            return 2;
        case IRNodeKind.FCMPL_64:
            return 2;
        case IRNodeKind.FCMPG_64:
            return 2;
        case IRNodeKind.JMP:
            return 2;
        case IRNodeKind.JMP:
            return 3;
        case IRNodeKind.JMP:
            return 5;
        case IRNodeKind.JEQ_OBJ:
            return 3;
        case IRNodeKind.JEQ_OBJ:
            return 4;
        case IRNodeKind.JNE_OBJ:
            return 3;
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
            return 3;
        case IRNodeKind.JEQ:
            return 4;
        case IRNodeKind.JNE:
            return 3;
        case IRNodeKind.JNE:
            return 4;
        case IRNodeKind.JLT:
            return 3;
        case IRNodeKind.JLT:
            return 4;
        case IRNodeKind.JGT:
            return 3;
        case IRNodeKind.JGT:
            return 4;
        case IRNodeKind.JLE:
            return 3;
        case IRNodeKind.JLE:
            return 4;
        case IRNodeKind.JGE:
            return 3;
        case IRNodeKind.JGE:
            return 4;
        case IRNodeKind.FNEG_64:
            return 1;
        case IRNodeKind.NEG:
            return 1;
        case IRNodeKind.NEG_64:
            return 1;
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
        case IRNodeKind.DIV2:
            return 2;
        case IRNodeKind.DIV2_64:
            return 2;
        case IRNodeKind.MOD2:
            return 2;
        case IRNodeKind.MOD2_64:
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
        case IRNodeKind.ADD:
            return 2;
        case IRNodeKind.SUB:
            return 2;
        case IRNodeKind.MUL:
            return 2;
        case IRNodeKind.DIV:
            return 2;
        case IRNodeKind.MOD:
            return 2;
        case IRNodeKind.INCI:
            return 2;
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
            return 4;
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
        case IRNodeKind.STOBJ:
            return 4;
        case IRNodeKind.STOBJ_64:
            return 4;
        case IRNodeKind.STOBJ_OBJ:
            return 4;
        case IRNodeKind.LDOBJ_V:
            return 4;
        case IRNodeKind.LDOBJ_V_64:
            return 4;
        case IRNodeKind.LDOBJ_V_OBJ:
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
            return 2;
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
        case IRNodeKind.CALL_ACC_SHORT:
            return 4;
        case IRNodeKind.CALL_ACC:
            return 5;
        case IRNodeKind.CALL_VIRT_SHORT:
            return 4;
        case IRNodeKind.CALL_VIRT:
            return 5;
        case IRNodeKind.CALL_VIRT_RANGE:
            return 4;
        case IRNodeKind.CALL_VIRT_ACC_SHORT:
            return 4;
        case IRNodeKind.CALL_VIRT_ACC:
            return 5;
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
        case IRNodeKind.FMOVI:
            return 7;
        case IRNodeKind.I32TOF64:
            return 2;
        case IRNodeKind.UCMP:
            return 3;
        case IRNodeKind.NOT:
            return 2;
        case IRNodeKind.MONITORENTER:
            return 2;
        case IRNodeKind.ECMA_LDNAN:
            return 2;
        case IRNodeKind.FLDAI:
            return 6;
        case IRNodeKind.U32TOF64:
            return 2;
        case IRNodeKind.UCMP_64:
            return 3;
        case IRNodeKind.NOT_64:
            return 2;
        case IRNodeKind.MONITOREXIT:
            return 2;
        case IRNodeKind.ECMA_LDINFINITY:
            return 2;
        case IRNodeKind.FCMPL:
            return 3;
        case IRNodeKind.I64TOF64:
            return 2;
        case IRNodeKind.DIVU2:
            return 3;
        case IRNodeKind.AND2:
            return 3;
        case IRNodeKind.CALL_POLYMORPHIC_SHORT:
            return 5;
        case IRNodeKind.ECMA_LDGLOBALTHIS:
            return 2;
        case IRNodeKind.FCMPG:
            return 3;
        case IRNodeKind.U64TOF64:
            return 2;
        case IRNodeKind.DIVU2_64:
            return 3;
        case IRNodeKind.AND2_64:
            return 3;
        case IRNodeKind.CALLE_POLYMORPHIC_SHORT:
            return 5;
        case IRNodeKind.ECMA_LDUNDEFINED:
            return 2;
        case IRNodeKind.FNEG:
            return 2;
        case IRNodeKind.F64TOI32:
            return 2;
        case IRNodeKind.MODU2:
            return 3;
        case IRNodeKind.OR2:
            return 3;
        case IRNodeKind.CALL_POLYMORPHIC_RANGE:
            return 5;
        case IRNodeKind.ECMA_LDNULL:
            return 2;
        case IRNodeKind.FADD2:
            return 3;
        case IRNodeKind.F64TOI64:
            return 2;
        case IRNodeKind.MODU2_64:
            return 3;
        case IRNodeKind.OR2_64:
            return 3;
        case IRNodeKind.CALLE_POLYMORPHIC_RANGE:
            return 5;
        case IRNodeKind.ECMA_LDSYMBOL:
            return 2;
        case IRNodeKind.FSUB2:
            return 3;
        case IRNodeKind.F64TOU32:
            return 2;
        case IRNodeKind.XOR2:
            return 3;
        case IRNodeKind.CALL_POLYMORPHIC:
            return 6;
        case IRNodeKind.ECMA_LDGLOBAL:
            return 2;
        case IRNodeKind.FMUL2:
            return 3;
        case IRNodeKind.F64TOU64:
            return 2;
        case IRNodeKind.XOR2_64:
            return 3;
        case IRNodeKind.CALLE_POLYMORPHIC:
            return 6;
        case IRNodeKind.ECMA_LDTRUE:
            return 2;
        case IRNodeKind.FDIV2:
            return 3;
        case IRNodeKind.I32TOU1:
            return 2;
        case IRNodeKind.SHL2:
            return 3;
        case IRNodeKind.ECMA_LDFALSE:
            return 2;
        case IRNodeKind.FMOD2:
            return 3;
        case IRNodeKind.I64TOU1:
            return 2;
        case IRNodeKind.SHL2_64:
            return 3;
        case IRNodeKind.ECMA_THROWDYN:
            return 2;
        case IRNodeKind.I32TOF32:
            return 2;
        case IRNodeKind.U32TOU1:
            return 2;
        case IRNodeKind.SHR2:
            return 3;
        case IRNodeKind.ECMA_TYPEOFDYN:
            return 2;
        case IRNodeKind.U32TOF32:
            return 2;
        case IRNodeKind.U64TOU1:
            return 2;
        case IRNodeKind.SHR2_64:
            return 3;
        case IRNodeKind.ECMA_LDLEXENVDYN:
            return 2;
        case IRNodeKind.I64TOF32:
            return 2;
        case IRNodeKind.I32TOI64:
            return 2;
        case IRNodeKind.ASHR2:
            return 3;
        case IRNodeKind.ECMA_POPLEXENVDYN:
            return 2;
        case IRNodeKind.U64TOF32:
            return 2;
        case IRNodeKind.I32TOI16:
            return 2;
        case IRNodeKind.ASHR2_64:
            return 3;
        case IRNodeKind.ECMA_GETUNMAPPEDARGS:
            return 2;
        case IRNodeKind.F32TOF64:
            return 2;
        case IRNodeKind.I32TOU16:
            return 2;
        case IRNodeKind.XORI:
            return 6;
        case IRNodeKind.ECMA_GETPROPITERATOR:
            return 2;
        case IRNodeKind.F32TOI32:
            return 2;
        case IRNodeKind.I32TOI8:
            return 2;
        case IRNodeKind.AND:
            return 3;
        case IRNodeKind.ECMA_ASYNCFUNCTIONENTER:
            return 2;
        case IRNodeKind.F32TOI64:
            return 2;
        case IRNodeKind.I32TOU8:
            return 2;
        case IRNodeKind.OR:
            return 3;
        case IRNodeKind.ECMA_LDHOLE:
            return 2;
        case IRNodeKind.F32TOU32:
            return 2;
        case IRNodeKind.I64TOI32:
            return 2;
        case IRNodeKind.XOR:
            return 3;
        case IRNodeKind.ECMA_RETURNUNDEFINED:
            return 2;
        case IRNodeKind.F32TOU64:
            return 2;
        case IRNodeKind.U32TOI64:
            return 2;
        case IRNodeKind.SHL:
            return 3;
        case IRNodeKind.ECMA_CREATEEMPTYOBJECT:
            return 2;
        case IRNodeKind.F64TOF32:
            return 2;
        case IRNodeKind.U32TOI16:
            return 2;
        case IRNodeKind.SHR:
            return 3;
        case IRNodeKind.ECMA_CREATEEMPTYARRAY:
            return 2;
        case IRNodeKind.U32TOU16:
            return 2;
        case IRNodeKind.ASHR:
            return 3;
        case IRNodeKind.ECMA_GETITERATOR:
            return 2;
        case IRNodeKind.U32TOI8:
            return 2;
        case IRNodeKind.ECMA_THROWTHROWNOTEXISTS:
            return 2;
        case IRNodeKind.U32TOU8:
            return 2;
        case IRNodeKind.ECMA_THROWPATTERNNONCOERCIBLE:
            return 2;
        case IRNodeKind.U64TOI32:
            return 2;
        case IRNodeKind.ECMA_LDHOMEOBJECT:
            return 2;
        case IRNodeKind.U64TOU32:
            return 2;
        case IRNodeKind.ECMA_THROWDELETESUPERPROPERTY:
            return 2;
        case IRNodeKind.ECMA_DEBUGGER:
            return 2;
        case IRNodeKind.ECMA_ADD2DYN:
            return 3;
        case IRNodeKind.ECMA_SUB2DYN:
            return 3;
        case IRNodeKind.ECMA_MUL2DYN:
            return 3;
        case IRNodeKind.ECMA_DIV2DYN:
            return 3;
        case IRNodeKind.ECMA_MOD2DYN:
            return 3;
        case IRNodeKind.ECMA_EQDYN:
            return 3;
        case IRNodeKind.ECMA_NOTEQDYN:
            return 3;
        case IRNodeKind.ECMA_LESSDYN:
            return 3;
        case IRNodeKind.ECMA_LESSEQDYN:
            return 3;
        case IRNodeKind.ECMA_GREATERDYN:
            return 3;
        case IRNodeKind.ECMA_GREATEREQDYN:
            return 3;
        case IRNodeKind.ECMA_SHL2DYN:
            return 3;
        case IRNodeKind.ECMA_SHR2DYN:
            return 3;
        case IRNodeKind.ECMA_ASHR2DYN:
            return 3;
        case IRNodeKind.ECMA_AND2DYN:
            return 3;
        case IRNodeKind.ECMA_OR2DYN:
            return 3;
        case IRNodeKind.ECMA_XOR2DYN:
            return 3;
        case IRNodeKind.ECMA_TONUMBER:
            return 3;
        case IRNodeKind.ECMA_NEGDYN:
            return 3;
        case IRNodeKind.ECMA_NOTDYN:
            return 3;
        case IRNodeKind.ECMA_INCDYN:
            return 3;
        case IRNodeKind.ECMA_DECDYN:
            return 3;
        case IRNodeKind.ECMA_EXPDYN:
            return 3;
        case IRNodeKind.ECMA_ISINDYN:
            return 3;
        case IRNodeKind.ECMA_INSTANCEOFDYN:
            return 3;
        case IRNodeKind.ECMA_STRICTNOTEQDYN:
            return 3;
        case IRNodeKind.ECMA_STRICTEQDYN:
            return 3;
        case IRNodeKind.ECMA_RESUMEGENERATOR:
            return 3;
        case IRNodeKind.ECMA_GETRESUMEMODE:
            return 3;
        case IRNodeKind.ECMA_CREATEGENERATOROBJ:
            return 3;
        case IRNodeKind.ECMA_THROWCONSTASSIGNMENT:
            return 3;
        case IRNodeKind.ECMA_GETTEMPLATEOBJECT:
            return 3;
        case IRNodeKind.ECMA_GETNEXTPROPNAME:
            return 3;
        case IRNodeKind.ECMA_CALLARG0DYN:
            return 3;
        case IRNodeKind.ECMA_THROWIFNOTOBJECT:
            return 3;
        case IRNodeKind.ECMA_ITERNEXT:
            return 3;
        case IRNodeKind.ECMA_CLOSEITERATOR:
            return 3;
        case IRNodeKind.ECMA_COPYMODULE:
            return 3;
        case IRNodeKind.ECMA_SUPERCALLSPREAD:
            return 3;
        case IRNodeKind.ECMA_DELOBJPROP:
            return 4;
        case IRNodeKind.ECMA_NEWOBJSPREADDYN:
            return 4;
        case IRNodeKind.ECMA_CREATEITERRESULTOBJ:
            return 4;
        case IRNodeKind.ECMA_SUSPENDGENERATOR:
            return 4;
        case IRNodeKind.ECMA_ASYNCFUNCTIONAWAITUNCAUGHT:
            return 4;
        case IRNodeKind.ECMA_THROWUNDEFINEDIFHOLE:
            return 4;
        case IRNodeKind.ECMA_CALLARG1DYN:
            return 4;
        case IRNodeKind.ECMA_COPYDATAPROPERTIES:
            return 4;
        case IRNodeKind.ECMA_STARRAYSPREAD:
            return 4;
        case IRNodeKind.ECMA_GETITERATORNEXT:
            return 4;
        case IRNodeKind.ECMA_SETOBJECTWITHPROTO:
            return 4;
        case IRNodeKind.ECMA_LDOBJBYVALUE:
            return 4;
        case IRNodeKind.ECMA_STOBJBYVALUE:
            return 4;
        case IRNodeKind.ECMA_STOWNBYVALUE:
            return 4;
        case IRNodeKind.ECMA_LDSUPERBYVALUE:
            return 4;
        case IRNodeKind.ECMA_STSUPERBYVALUE:
            return 4;
        case IRNodeKind.ECMA_LDOBJBYINDEX:
            return 7;
        case IRNodeKind.ECMA_STOBJBYINDEX:
            return 7;
        case IRNodeKind.ECMA_STOWNBYINDEX:
            return 7;
        case IRNodeKind.ECMA_CALLSPREADDYN:
            return 5;
        case IRNodeKind.ECMA_ASYNCFUNCTIONRESOLVE:
            return 5;
        case IRNodeKind.ECMA_ASYNCFUNCTIONREJECT:
            return 5;
        case IRNodeKind.ECMA_CALLARGS2DYN:
            return 5;
        case IRNodeKind.ECMA_CALLARGS3DYN:
            return 6;
        case IRNodeKind.ECMA_DEFINEGETTERSETTERBYVALUE:
            return 6;
        case IRNodeKind.ECMA_NEWOBJDYNRANGE:
            return 5;
        case IRNodeKind.ECMA_CALLIRANGEDYN:
            return 5;
        case IRNodeKind.ECMA_CALLITHISRANGEDYN:
            return 5;
        case IRNodeKind.ECMA_SUPERCALL:
            return 5;
        case IRNodeKind.ECMA_CREATEOBJECTWITHEXCLUDEDKEYS:
            return 6;
        case IRNodeKind.ECMA_DEFINEFUNCDYN:
            return 7;
        case IRNodeKind.ECMA_DEFINENCFUNCDYN:
            return 7;
        case IRNodeKind.ECMA_DEFINEGENERATORFUNC:
            return 7;
        case IRNodeKind.ECMA_DEFINEASYNCFUNC:
            return 7;
        case IRNodeKind.ECMA_DEFINEMETHOD:
            return 7;
        case IRNodeKind.ECMA_NEWLEXENVDYN:
            return 4;
        case IRNodeKind.ECMA_COPYRESTARGS:
            return 4;
        case IRNodeKind.ECMA_CREATEARRAYWITHBUFFER:
            return 4;
        case IRNodeKind.ECMA_CREATEOBJECTHAVINGMETHOD:
            return 4;
        case IRNodeKind.ECMA_THROWIFSUPERNOTCORRECTCALL:
            return 4;
        case IRNodeKind.ECMA_CREATEOBJECTWITHBUFFER:
            return 4;
        case IRNodeKind.ECMA_LDLEXVARDYN:
            return 3;
        case IRNodeKind.ECMA_LDLEXVARDYN:
            return 4;
        case IRNodeKind.ECMA_LDLEXVARDYN:
            return 6;
        case IRNodeKind.ECMA_STLEXVARDYN:
            return 4;
        case IRNodeKind.ECMA_STLEXVARDYN:
            return 5;
        case IRNodeKind.ECMA_STLEXVARDYN:
            return 7;
        case IRNodeKind.ECMA_DEFINECLASSWITHBUFFER:
            return 10;
        case IRNodeKind.ECMA_IMPORTMODULE:
            return 6;
        case IRNodeKind.ECMA_STMODULEVAR:
            return 6;
        case IRNodeKind.ECMA_TRYLDGLOBALBYNAME:
            return 6;
        case IRNodeKind.ECMA_TRYSTGLOBALBYNAME:
            return 6;
        case IRNodeKind.ECMA_LDGLOBALVAR:
            return 6;
        case IRNodeKind.ECMA_STGLOBALVAR:
            return 6;
        case IRNodeKind.ECMA_LDOBJBYNAME:
            return 7;
        case IRNodeKind.ECMA_STOBJBYNAME:
            return 7;
        case IRNodeKind.ECMA_STOWNBYNAME:
            return 7;
        case IRNodeKind.ECMA_LDSUPERBYNAME:
            return 7;
        case IRNodeKind.ECMA_STSUPERBYNAME:
            return 7;
        case IRNodeKind.ECMA_LDMODVARBYNAME:
            return 7;
        case IRNodeKind.ECMA_CREATEREGEXPWITHLITERAL:
            return 7;
        case IRNodeKind.ECMA_ISTRUE:
            return 2;
        case IRNodeKind.ECMA_ISFALSE:
            return 2;
        case IRNodeKind.ECMA_STCONSTTOGLOBALRECORD:
            return 6;
        case IRNodeKind.ECMA_STLETTOGLOBALRECORD:
            return 6;
        case IRNodeKind.ECMA_STCLASSTOGLOBALRECORD:
            return 6;
        case IRNodeKind.ECMA_STOWNBYVALUEWITHNAMESET:
            return 4;
        case IRNodeKind.ECMA_STOWNBYNAMEWITHNAMESET:
            return 7;
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
var Nop = /** @class */ (function (_super) {
    __extends(Nop, _super);
    function Nop() {
        return _super.call(this, IRNodeKind.NOP, "nop", [], [
            []
        ]) || this;
    }
    Nop.prototype.resultType = function () {
        return ResultType.None;
    };
    Nop.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Nop;
}(IRNode));
exports.Nop = Nop;
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
        return ResultType.None;
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
var LdaConst = /** @class */ (function (_super) {
    __extends(LdaConst, _super);
    function LdaConst(v, literalarray_id) {
        return _super.call(this, IRNodeKind.LDA_CONST, "lda.const", [v, literalarray_id], [
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Id, 32)]
        ]) || this;
    }
    LdaConst.prototype.resultType = function () {
        return ResultType.None;
    };
    LdaConst.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return LdaConst;
}(IRNode));
exports.LdaConst = LdaConst;
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
var JeqObj = /** @class */ (function (_super) {
    __extends(JeqObj, _super);
    function JeqObj(v, imm) {
        return _super.call(this, IRNodeKind.JEQ_OBJ, "jeq.obj", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Label, 8)],
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
        return ResultType.None;
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
    function Newarr(v1, v2, type_id) {
        return _super.call(this, IRNodeKind.NEWARR, "newarr", [v1, v2, type_id], [
            [new FormatItem(OperandKind.DstVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Newarr.prototype.resultType = function () {
        return ResultType.None;
    };
    Newarr.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return Newarr;
}(IRNode));
exports.Newarr = Newarr;
var Newobj = /** @class */ (function (_super) {
    __extends(Newobj, _super);
    function Newobj(v, type_id) {
        return _super.call(this, IRNodeKind.NEWOBJ, "newobj", [v, type_id], [
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Id, 16)]
        ]) || this;
    }
    Newobj.prototype.resultType = function () {
        return ResultType.None;
    };
    Newobj.prototype.resultIn = function () {
        return ResultDst.VReg;
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
        return ResultType.None;
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
        return ResultType.None;
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
    function Throw(v) {
        return _super.call(this, IRNodeKind.THROW, "throw", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
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
var CallAccShort = /** @class */ (function (_super) {
    __extends(CallAccShort, _super);
    function CallAccShort(method_id, v, imm) {
        var _this = this;
        var ctors = [method_id, v, imm];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_ACC_SHORT, "call.acc.short", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Imm, 4)]
        ]) || this;
        return _this;
    }
    CallAccShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallAccShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallAccShort;
}(IRNode));
exports.CallAccShort = CallAccShort;
var CallAcc = /** @class */ (function (_super) {
    __extends(CallAcc, _super);
    function CallAcc(method_id, v1, v2, v3, imm) {
        var _this = this;
        var ctors = [method_id, v1, v2, v3, imm];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_ACC, "call.acc", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Imm, 4)]
        ]) || this;
        return _this;
    }
    CallAcc.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallAcc.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallAcc;
}(IRNode));
exports.CallAcc = CallAcc;
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
var CallVirtAccShort = /** @class */ (function (_super) {
    __extends(CallVirtAccShort, _super);
    function CallVirtAccShort(method_id, v, imm) {
        var _this = this;
        var ctors = [method_id, v, imm];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_VIRT_ACC_SHORT, "call.virt.acc.short", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Imm, 4)]
        ]) || this;
        return _this;
    }
    CallVirtAccShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallVirtAccShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallVirtAccShort;
}(IRNode));
exports.CallVirtAccShort = CallVirtAccShort;
var CallVirtAcc = /** @class */ (function (_super) {
    __extends(CallVirtAcc, _super);
    function CallVirtAcc(method_id, v1, v2, v3, imm) {
        var _this = this;
        var ctors = [method_id, v1, v2, v3, imm];
        var operands = [method_id];
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.CALL_VIRT_ACC, "call.virt.acc", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.Imm, 4)]
        ]) || this;
        return _this;
    }
    CallVirtAcc.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallVirtAcc.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallVirtAcc;
}(IRNode));
exports.CallVirtAcc = CallVirtAcc;
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
var Fmovi = /** @class */ (function (_super) {
    __extends(Fmovi, _super);
    function Fmovi(v, imm) {
        return _super.call(this, IRNodeKind.FMOVI, "fmovi", [v, imm], [
            [new FormatItem(OperandKind.DstVReg, 8), new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    Fmovi.prototype.resultType = function () {
        return ResultType.None;
    };
    Fmovi.prototype.resultIn = function () {
        return ResultDst.VReg;
    };
    return Fmovi;
}(IRNode));
exports.Fmovi = Fmovi;
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
var Monitorenter = /** @class */ (function (_super) {
    __extends(Monitorenter, _super);
    function Monitorenter() {
        return _super.call(this, IRNodeKind.MONITORENTER, "monitorenter", [], [
            []
        ]) || this;
    }
    Monitorenter.prototype.resultType = function () {
        return ResultType.None;
    };
    Monitorenter.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Monitorenter;
}(IRNode));
exports.Monitorenter = Monitorenter;
var EcmaLdnan = /** @class */ (function (_super) {
    __extends(EcmaLdnan, _super);
    function EcmaLdnan() {
        return _super.call(this, IRNodeKind.ECMA_LDNAN, "ecma.ldnan", [], [
            []
        ]) || this;
    }
    EcmaLdnan.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdnan.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdnan;
}(Intrinsic));
exports.EcmaLdnan = EcmaLdnan;
var Fldai = /** @class */ (function (_super) {
    __extends(Fldai, _super);
    function Fldai(imm) {
        return _super.call(this, IRNodeKind.FLDAI, "fldai", [imm], [
            [new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    Fldai.prototype.resultType = function () {
        return ResultType.None;
    };
    Fldai.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fldai;
}(IRNode));
exports.Fldai = Fldai;
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
var Monitorexit = /** @class */ (function (_super) {
    __extends(Monitorexit, _super);
    function Monitorexit() {
        return _super.call(this, IRNodeKind.MONITOREXIT, "monitorexit", [], [
            []
        ]) || this;
    }
    Monitorexit.prototype.resultType = function () {
        return ResultType.None;
    };
    Monitorexit.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return Monitorexit;
}(IRNode));
exports.Monitorexit = Monitorexit;
var EcmaLdinfinity = /** @class */ (function (_super) {
    __extends(EcmaLdinfinity, _super);
    function EcmaLdinfinity() {
        return _super.call(this, IRNodeKind.ECMA_LDINFINITY, "ecma.ldinfinity", [], [
            []
        ]) || this;
    }
    EcmaLdinfinity.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdinfinity.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdinfinity;
}(Intrinsic));
exports.EcmaLdinfinity = EcmaLdinfinity;
var Fcmpl = /** @class */ (function (_super) {
    __extends(Fcmpl, _super);
    function Fcmpl(v) {
        return _super.call(this, IRNodeKind.FCMPL, "fcmpl", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fcmpl.prototype.resultType = function () {
        return ResultType.Int;
    };
    Fcmpl.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fcmpl;
}(IRNode));
exports.Fcmpl = Fcmpl;
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
var CallPolymorphicShort = /** @class */ (function (_super) {
    __extends(CallPolymorphicShort, _super);
    function CallPolymorphicShort(method_id, v1, v2) {
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
        _this = _super.call(this, IRNodeKind.CALL_POLYMORPHIC_SHORT, "call.polymorphic.short", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallPolymorphicShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallPolymorphicShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallPolymorphicShort;
}(IRNode));
exports.CallPolymorphicShort = CallPolymorphicShort;
var EcmaLdglobalthis = /** @class */ (function (_super) {
    __extends(EcmaLdglobalthis, _super);
    function EcmaLdglobalthis() {
        return _super.call(this, IRNodeKind.ECMA_LDGLOBALTHIS, "ecma.ldglobalthis", [], [
            []
        ]) || this;
    }
    EcmaLdglobalthis.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdglobalthis.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdglobalthis;
}(Intrinsic));
exports.EcmaLdglobalthis = EcmaLdglobalthis;
var Fcmpg = /** @class */ (function (_super) {
    __extends(Fcmpg, _super);
    function Fcmpg(v) {
        return _super.call(this, IRNodeKind.FCMPG, "fcmpg", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fcmpg.prototype.resultType = function () {
        return ResultType.Int;
    };
    Fcmpg.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fcmpg;
}(IRNode));
exports.Fcmpg = Fcmpg;
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
var CallePolymorphicShort = /** @class */ (function (_super) {
    __extends(CallePolymorphicShort, _super);
    function CallePolymorphicShort(method_id, v1, v2) {
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
        _this = _super.call(this, IRNodeKind.CALLE_POLYMORPHIC_SHORT, "calle.polymorphic.short", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallePolymorphicShort.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallePolymorphicShort.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallePolymorphicShort;
}(IRNode));
exports.CallePolymorphicShort = CallePolymorphicShort;
var EcmaLdundefined = /** @class */ (function (_super) {
    __extends(EcmaLdundefined, _super);
    function EcmaLdundefined() {
        return _super.call(this, IRNodeKind.ECMA_LDUNDEFINED, "ecma.ldundefined", [], [
            []
        ]) || this;
    }
    EcmaLdundefined.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdundefined.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdundefined;
}(Intrinsic));
exports.EcmaLdundefined = EcmaLdundefined;
var Fneg = /** @class */ (function (_super) {
    __extends(Fneg, _super);
    function Fneg() {
        return _super.call(this, IRNodeKind.FNEG, "fneg", [], [
            []
        ]) || this;
    }
    Fneg.prototype.resultType = function () {
        return ResultType.None;
    };
    Fneg.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fneg;
}(IRNode));
exports.Fneg = Fneg;
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
var CallPolymorphicRange = /** @class */ (function (_super) {
    __extends(CallPolymorphicRange, _super);
    function CallPolymorphicRange(method_id, v) {
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
        _this = _super.call(this, IRNodeKind.CALL_POLYMORPHIC_RANGE, "call.polymorphic.range", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CallPolymorphicRange.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallPolymorphicRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallPolymorphicRange;
}(IRNode));
exports.CallPolymorphicRange = CallPolymorphicRange;
var EcmaLdnull = /** @class */ (function (_super) {
    __extends(EcmaLdnull, _super);
    function EcmaLdnull() {
        return _super.call(this, IRNodeKind.ECMA_LDNULL, "ecma.ldnull", [], [
            []
        ]) || this;
    }
    EcmaLdnull.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdnull.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdnull;
}(Intrinsic));
exports.EcmaLdnull = EcmaLdnull;
var Fadd2 = /** @class */ (function (_super) {
    __extends(Fadd2, _super);
    function Fadd2(v) {
        return _super.call(this, IRNodeKind.FADD2, "fadd2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fadd2.prototype.resultType = function () {
        return ResultType.None;
    };
    Fadd2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fadd2;
}(IRNode));
exports.Fadd2 = Fadd2;
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
var CallePolymorphicRange = /** @class */ (function (_super) {
    __extends(CallePolymorphicRange, _super);
    function CallePolymorphicRange(method_id, v) {
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
        _this = _super.call(this, IRNodeKind.CALLE_POLYMORPHIC_RANGE, "calle.polymorphic.range", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    CallePolymorphicRange.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallePolymorphicRange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallePolymorphicRange;
}(IRNode));
exports.CallePolymorphicRange = CallePolymorphicRange;
var EcmaLdsymbol = /** @class */ (function (_super) {
    __extends(EcmaLdsymbol, _super);
    function EcmaLdsymbol() {
        return _super.call(this, IRNodeKind.ECMA_LDSYMBOL, "ecma.ldsymbol", [], [
            []
        ]) || this;
    }
    EcmaLdsymbol.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdsymbol.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdsymbol;
}(Intrinsic));
exports.EcmaLdsymbol = EcmaLdsymbol;
var Fsub2 = /** @class */ (function (_super) {
    __extends(Fsub2, _super);
    function Fsub2(v) {
        return _super.call(this, IRNodeKind.FSUB2, "fsub2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fsub2.prototype.resultType = function () {
        return ResultType.None;
    };
    Fsub2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fsub2;
}(IRNode));
exports.Fsub2 = Fsub2;
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
var CallPolymorphic = /** @class */ (function (_super) {
    __extends(CallPolymorphic, _super);
    function CallPolymorphic(method_id, v1, v2, v3, v4) {
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
        _this = _super.call(this, IRNodeKind.CALL_POLYMORPHIC, "call.polymorphic", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallPolymorphic.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallPolymorphic.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallPolymorphic;
}(IRNode));
exports.CallPolymorphic = CallPolymorphic;
var EcmaLdglobal = /** @class */ (function (_super) {
    __extends(EcmaLdglobal, _super);
    function EcmaLdglobal() {
        return _super.call(this, IRNodeKind.ECMA_LDGLOBAL, "ecma.ldglobal", [], [
            []
        ]) || this;
    }
    EcmaLdglobal.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdglobal.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdglobal;
}(Intrinsic));
exports.EcmaLdglobal = EcmaLdglobal;
var Fmul2 = /** @class */ (function (_super) {
    __extends(Fmul2, _super);
    function Fmul2(v) {
        return _super.call(this, IRNodeKind.FMUL2, "fmul2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fmul2.prototype.resultType = function () {
        return ResultType.None;
    };
    Fmul2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fmul2;
}(IRNode));
exports.Fmul2 = Fmul2;
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
var CallePolymorphic = /** @class */ (function (_super) {
    __extends(CallePolymorphic, _super);
    function CallePolymorphic(method_id, v1, v2, v3, v4) {
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
        _this = _super.call(this, IRNodeKind.CALLE_POLYMORPHIC, "calle.polymorphic", operands, [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4), new FormatItem(OperandKind.SrcVReg, 4)]
        ]) || this;
        return _this;
    }
    CallePolymorphic.prototype.resultType = function () {
        return ResultType.Unknown;
    };
    CallePolymorphic.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return CallePolymorphic;
}(IRNode));
exports.CallePolymorphic = CallePolymorphic;
var EcmaLdtrue = /** @class */ (function (_super) {
    __extends(EcmaLdtrue, _super);
    function EcmaLdtrue() {
        return _super.call(this, IRNodeKind.ECMA_LDTRUE, "ecma.ldtrue", [], [
            []
        ]) || this;
    }
    EcmaLdtrue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdtrue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdtrue;
}(Intrinsic));
exports.EcmaLdtrue = EcmaLdtrue;
var Fdiv2 = /** @class */ (function (_super) {
    __extends(Fdiv2, _super);
    function Fdiv2(v) {
        return _super.call(this, IRNodeKind.FDIV2, "fdiv2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fdiv2.prototype.resultType = function () {
        return ResultType.None;
    };
    Fdiv2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fdiv2;
}(IRNode));
exports.Fdiv2 = Fdiv2;
var I32tou1 = /** @class */ (function (_super) {
    __extends(I32tou1, _super);
    function I32tou1() {
        return _super.call(this, IRNodeKind.I32TOU1, "i32tou1", [], [
            []
        ]) || this;
    }
    I32tou1.prototype.resultType = function () {
        return ResultType.None;
    };
    I32tou1.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32tou1;
}(IRNode));
exports.I32tou1 = I32tou1;
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
var EcmaLdfalse = /** @class */ (function (_super) {
    __extends(EcmaLdfalse, _super);
    function EcmaLdfalse() {
        return _super.call(this, IRNodeKind.ECMA_LDFALSE, "ecma.ldfalse", [], [
            []
        ]) || this;
    }
    EcmaLdfalse.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdfalse.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdfalse;
}(Intrinsic));
exports.EcmaLdfalse = EcmaLdfalse;
var Fmod2 = /** @class */ (function (_super) {
    __extends(Fmod2, _super);
    function Fmod2(v) {
        return _super.call(this, IRNodeKind.FMOD2, "fmod2", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    Fmod2.prototype.resultType = function () {
        return ResultType.None;
    };
    Fmod2.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return Fmod2;
}(IRNode));
exports.Fmod2 = Fmod2;
var I64tou1 = /** @class */ (function (_super) {
    __extends(I64tou1, _super);
    function I64tou1() {
        return _super.call(this, IRNodeKind.I64TOU1, "i64tou1", [], [
            []
        ]) || this;
    }
    I64tou1.prototype.resultType = function () {
        return ResultType.None;
    };
    I64tou1.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I64tou1;
}(IRNode));
exports.I64tou1 = I64tou1;
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
var EcmaThrowdyn = /** @class */ (function (_super) {
    __extends(EcmaThrowdyn, _super);
    function EcmaThrowdyn() {
        return _super.call(this, IRNodeKind.ECMA_THROWDYN, "ecma.throwdyn", [], [
            []
        ]) || this;
    }
    EcmaThrowdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowdyn;
}(Intrinsic));
exports.EcmaThrowdyn = EcmaThrowdyn;
var I32tof32 = /** @class */ (function (_super) {
    __extends(I32tof32, _super);
    function I32tof32() {
        return _super.call(this, IRNodeKind.I32TOF32, "i32tof32", [], [
            []
        ]) || this;
    }
    I32tof32.prototype.resultType = function () {
        return ResultType.None;
    };
    I32tof32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32tof32;
}(IRNode));
exports.I32tof32 = I32tof32;
var U32tou1 = /** @class */ (function (_super) {
    __extends(U32tou1, _super);
    function U32tou1() {
        return _super.call(this, IRNodeKind.U32TOU1, "u32tou1", [], [
            []
        ]) || this;
    }
    U32tou1.prototype.resultType = function () {
        return ResultType.None;
    };
    U32tou1.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32tou1;
}(IRNode));
exports.U32tou1 = U32tou1;
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
var EcmaTypeofdyn = /** @class */ (function (_super) {
    __extends(EcmaTypeofdyn, _super);
    function EcmaTypeofdyn() {
        return _super.call(this, IRNodeKind.ECMA_TYPEOFDYN, "ecma.typeofdyn", [], [
            []
        ]) || this;
    }
    EcmaTypeofdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaTypeofdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaTypeofdyn;
}(Intrinsic));
exports.EcmaTypeofdyn = EcmaTypeofdyn;
var U32tof32 = /** @class */ (function (_super) {
    __extends(U32tof32, _super);
    function U32tof32() {
        return _super.call(this, IRNodeKind.U32TOF32, "u32tof32", [], [
            []
        ]) || this;
    }
    U32tof32.prototype.resultType = function () {
        return ResultType.None;
    };
    U32tof32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32tof32;
}(IRNode));
exports.U32tof32 = U32tof32;
var U64tou1 = /** @class */ (function (_super) {
    __extends(U64tou1, _super);
    function U64tou1() {
        return _super.call(this, IRNodeKind.U64TOU1, "u64tou1", [], [
            []
        ]) || this;
    }
    U64tou1.prototype.resultType = function () {
        return ResultType.None;
    };
    U64tou1.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U64tou1;
}(IRNode));
exports.U64tou1 = U64tou1;
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
var EcmaLdlexenvdyn = /** @class */ (function (_super) {
    __extends(EcmaLdlexenvdyn, _super);
    function EcmaLdlexenvdyn() {
        return _super.call(this, IRNodeKind.ECMA_LDLEXENVDYN, "ecma.ldlexenvdyn", [], [
            []
        ]) || this;
    }
    EcmaLdlexenvdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdlexenvdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdlexenvdyn;
}(Intrinsic));
exports.EcmaLdlexenvdyn = EcmaLdlexenvdyn;
var I64tof32 = /** @class */ (function (_super) {
    __extends(I64tof32, _super);
    function I64tof32() {
        return _super.call(this, IRNodeKind.I64TOF32, "i64tof32", [], [
            []
        ]) || this;
    }
    I64tof32.prototype.resultType = function () {
        return ResultType.None;
    };
    I64tof32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I64tof32;
}(IRNode));
exports.I64tof32 = I64tof32;
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
var EcmaPoplexenvdyn = /** @class */ (function (_super) {
    __extends(EcmaPoplexenvdyn, _super);
    function EcmaPoplexenvdyn() {
        return _super.call(this, IRNodeKind.ECMA_POPLEXENVDYN, "ecma.poplexenvdyn", [], [
            []
        ]) || this;
    }
    EcmaPoplexenvdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaPoplexenvdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaPoplexenvdyn;
}(Intrinsic));
exports.EcmaPoplexenvdyn = EcmaPoplexenvdyn;
var U64tof32 = /** @class */ (function (_super) {
    __extends(U64tof32, _super);
    function U64tof32() {
        return _super.call(this, IRNodeKind.U64TOF32, "u64tof32", [], [
            []
        ]) || this;
    }
    U64tof32.prototype.resultType = function () {
        return ResultType.None;
    };
    U64tof32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U64tof32;
}(IRNode));
exports.U64tof32 = U64tof32;
var I32toi16 = /** @class */ (function (_super) {
    __extends(I32toi16, _super);
    function I32toi16() {
        return _super.call(this, IRNodeKind.I32TOI16, "i32toi16", [], [
            []
        ]) || this;
    }
    I32toi16.prototype.resultType = function () {
        return ResultType.None;
    };
    I32toi16.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32toi16;
}(IRNode));
exports.I32toi16 = I32toi16;
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
var EcmaGetunmappedargs = /** @class */ (function (_super) {
    __extends(EcmaGetunmappedargs, _super);
    function EcmaGetunmappedargs() {
        return _super.call(this, IRNodeKind.ECMA_GETUNMAPPEDARGS, "ecma.getunmappedargs", [], [
            []
        ]) || this;
    }
    EcmaGetunmappedargs.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGetunmappedargs.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGetunmappedargs;
}(Intrinsic));
exports.EcmaGetunmappedargs = EcmaGetunmappedargs;
var F32tof64 = /** @class */ (function (_super) {
    __extends(F32tof64, _super);
    function F32tof64() {
        return _super.call(this, IRNodeKind.F32TOF64, "f32tof64", [], [
            []
        ]) || this;
    }
    F32tof64.prototype.resultType = function () {
        return ResultType.Float;
    };
    F32tof64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F32tof64;
}(IRNode));
exports.F32tof64 = F32tof64;
var I32tou16 = /** @class */ (function (_super) {
    __extends(I32tou16, _super);
    function I32tou16() {
        return _super.call(this, IRNodeKind.I32TOU16, "i32tou16", [], [
            []
        ]) || this;
    }
    I32tou16.prototype.resultType = function () {
        return ResultType.None;
    };
    I32tou16.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32tou16;
}(IRNode));
exports.I32tou16 = I32tou16;
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
var EcmaGetpropiterator = /** @class */ (function (_super) {
    __extends(EcmaGetpropiterator, _super);
    function EcmaGetpropiterator() {
        return _super.call(this, IRNodeKind.ECMA_GETPROPITERATOR, "ecma.getpropiterator", [], [
            []
        ]) || this;
    }
    EcmaGetpropiterator.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGetpropiterator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGetpropiterator;
}(Intrinsic));
exports.EcmaGetpropiterator = EcmaGetpropiterator;
var F32toi32 = /** @class */ (function (_super) {
    __extends(F32toi32, _super);
    function F32toi32() {
        return _super.call(this, IRNodeKind.F32TOI32, "f32toi32", [], [
            []
        ]) || this;
    }
    F32toi32.prototype.resultType = function () {
        return ResultType.Int;
    };
    F32toi32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F32toi32;
}(IRNode));
exports.F32toi32 = F32toi32;
var I32toi8 = /** @class */ (function (_super) {
    __extends(I32toi8, _super);
    function I32toi8() {
        return _super.call(this, IRNodeKind.I32TOI8, "i32toi8", [], [
            []
        ]) || this;
    }
    I32toi8.prototype.resultType = function () {
        return ResultType.None;
    };
    I32toi8.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32toi8;
}(IRNode));
exports.I32toi8 = I32toi8;
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
var EcmaAsyncfunctionenter = /** @class */ (function (_super) {
    __extends(EcmaAsyncfunctionenter, _super);
    function EcmaAsyncfunctionenter() {
        return _super.call(this, IRNodeKind.ECMA_ASYNCFUNCTIONENTER, "ecma.asyncfunctionenter", [], [
            []
        ]) || this;
    }
    EcmaAsyncfunctionenter.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaAsyncfunctionenter.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaAsyncfunctionenter;
}(Intrinsic));
exports.EcmaAsyncfunctionenter = EcmaAsyncfunctionenter;
var F32toi64 = /** @class */ (function (_super) {
    __extends(F32toi64, _super);
    function F32toi64() {
        return _super.call(this, IRNodeKind.F32TOI64, "f32toi64", [], [
            []
        ]) || this;
    }
    F32toi64.prototype.resultType = function () {
        return ResultType.Long;
    };
    F32toi64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F32toi64;
}(IRNode));
exports.F32toi64 = F32toi64;
var I32tou8 = /** @class */ (function (_super) {
    __extends(I32tou8, _super);
    function I32tou8() {
        return _super.call(this, IRNodeKind.I32TOU8, "i32tou8", [], [
            []
        ]) || this;
    }
    I32tou8.prototype.resultType = function () {
        return ResultType.None;
    };
    I32tou8.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return I32tou8;
}(IRNode));
exports.I32tou8 = I32tou8;
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
var EcmaLdhole = /** @class */ (function (_super) {
    __extends(EcmaLdhole, _super);
    function EcmaLdhole() {
        return _super.call(this, IRNodeKind.ECMA_LDHOLE, "ecma.ldhole", [], [
            []
        ]) || this;
    }
    EcmaLdhole.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdhole.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdhole;
}(Intrinsic));
exports.EcmaLdhole = EcmaLdhole;
var F32tou32 = /** @class */ (function (_super) {
    __extends(F32tou32, _super);
    function F32tou32() {
        return _super.call(this, IRNodeKind.F32TOU32, "f32tou32", [], [
            []
        ]) || this;
    }
    F32tou32.prototype.resultType = function () {
        return ResultType.None;
    };
    F32tou32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F32tou32;
}(IRNode));
exports.F32tou32 = F32tou32;
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
var EcmaReturnundefined = /** @class */ (function (_super) {
    __extends(EcmaReturnundefined, _super);
    function EcmaReturnundefined() {
        return _super.call(this, IRNodeKind.ECMA_RETURNUNDEFINED, "ecma.returnundefined", [], [
            []
        ]) || this;
    }
    EcmaReturnundefined.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaReturnundefined.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaReturnundefined;
}(Intrinsic));
exports.EcmaReturnundefined = EcmaReturnundefined;
var F32tou64 = /** @class */ (function (_super) {
    __extends(F32tou64, _super);
    function F32tou64() {
        return _super.call(this, IRNodeKind.F32TOU64, "f32tou64", [], [
            []
        ]) || this;
    }
    F32tou64.prototype.resultType = function () {
        return ResultType.None;
    };
    F32tou64.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F32tou64;
}(IRNode));
exports.F32tou64 = F32tou64;
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
var EcmaCreateemptyobject = /** @class */ (function (_super) {
    __extends(EcmaCreateemptyobject, _super);
    function EcmaCreateemptyobject() {
        return _super.call(this, IRNodeKind.ECMA_CREATEEMPTYOBJECT, "ecma.createemptyobject", [], [
            []
        ]) || this;
    }
    EcmaCreateemptyobject.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreateemptyobject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreateemptyobject;
}(Intrinsic));
exports.EcmaCreateemptyobject = EcmaCreateemptyobject;
var F64tof32 = /** @class */ (function (_super) {
    __extends(F64tof32, _super);
    function F64tof32() {
        return _super.call(this, IRNodeKind.F64TOF32, "f64tof32", [], [
            []
        ]) || this;
    }
    F64tof32.prototype.resultType = function () {
        return ResultType.None;
    };
    F64tof32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return F64tof32;
}(IRNode));
exports.F64tof32 = F64tof32;
var U32toi16 = /** @class */ (function (_super) {
    __extends(U32toi16, _super);
    function U32toi16() {
        return _super.call(this, IRNodeKind.U32TOI16, "u32toi16", [], [
            []
        ]) || this;
    }
    U32toi16.prototype.resultType = function () {
        return ResultType.None;
    };
    U32toi16.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32toi16;
}(IRNode));
exports.U32toi16 = U32toi16;
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
var EcmaCreateemptyarray = /** @class */ (function (_super) {
    __extends(EcmaCreateemptyarray, _super);
    function EcmaCreateemptyarray() {
        return _super.call(this, IRNodeKind.ECMA_CREATEEMPTYARRAY, "ecma.createemptyarray", [], [
            []
        ]) || this;
    }
    EcmaCreateemptyarray.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreateemptyarray.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreateemptyarray;
}(Intrinsic));
exports.EcmaCreateemptyarray = EcmaCreateemptyarray;
var U32tou16 = /** @class */ (function (_super) {
    __extends(U32tou16, _super);
    function U32tou16() {
        return _super.call(this, IRNodeKind.U32TOU16, "u32tou16", [], [
            []
        ]) || this;
    }
    U32tou16.prototype.resultType = function () {
        return ResultType.None;
    };
    U32tou16.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32tou16;
}(IRNode));
exports.U32tou16 = U32tou16;
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
var EcmaGetiterator = /** @class */ (function (_super) {
    __extends(EcmaGetiterator, _super);
    function EcmaGetiterator() {
        return _super.call(this, IRNodeKind.ECMA_GETITERATOR, "ecma.getiterator", [], [
            []
        ]) || this;
    }
    EcmaGetiterator.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGetiterator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGetiterator;
}(Intrinsic));
exports.EcmaGetiterator = EcmaGetiterator;
var U32toi8 = /** @class */ (function (_super) {
    __extends(U32toi8, _super);
    function U32toi8() {
        return _super.call(this, IRNodeKind.U32TOI8, "u32toi8", [], [
            []
        ]) || this;
    }
    U32toi8.prototype.resultType = function () {
        return ResultType.None;
    };
    U32toi8.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32toi8;
}(IRNode));
exports.U32toi8 = U32toi8;
var EcmaThrowthrownotexists = /** @class */ (function (_super) {
    __extends(EcmaThrowthrownotexists, _super);
    function EcmaThrowthrownotexists() {
        return _super.call(this, IRNodeKind.ECMA_THROWTHROWNOTEXISTS, "ecma.throwthrownotexists", [], [
            []
        ]) || this;
    }
    EcmaThrowthrownotexists.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowthrownotexists.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowthrownotexists;
}(Intrinsic));
exports.EcmaThrowthrownotexists = EcmaThrowthrownotexists;
var U32tou8 = /** @class */ (function (_super) {
    __extends(U32tou8, _super);
    function U32tou8() {
        return _super.call(this, IRNodeKind.U32TOU8, "u32tou8", [], [
            []
        ]) || this;
    }
    U32tou8.prototype.resultType = function () {
        return ResultType.None;
    };
    U32tou8.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U32tou8;
}(IRNode));
exports.U32tou8 = U32tou8;
var EcmaThrowpatternnoncoercible = /** @class */ (function (_super) {
    __extends(EcmaThrowpatternnoncoercible, _super);
    function EcmaThrowpatternnoncoercible() {
        return _super.call(this, IRNodeKind.ECMA_THROWPATTERNNONCOERCIBLE, "ecma.throwpatternnoncoercible", [], [
            []
        ]) || this;
    }
    EcmaThrowpatternnoncoercible.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowpatternnoncoercible.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowpatternnoncoercible;
}(Intrinsic));
exports.EcmaThrowpatternnoncoercible = EcmaThrowpatternnoncoercible;
var U64toi32 = /** @class */ (function (_super) {
    __extends(U64toi32, _super);
    function U64toi32() {
        return _super.call(this, IRNodeKind.U64TOI32, "u64toi32", [], [
            []
        ]) || this;
    }
    U64toi32.prototype.resultType = function () {
        return ResultType.Int;
    };
    U64toi32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U64toi32;
}(IRNode));
exports.U64toi32 = U64toi32;
var EcmaLdhomeobject = /** @class */ (function (_super) {
    __extends(EcmaLdhomeobject, _super);
    function EcmaLdhomeobject() {
        return _super.call(this, IRNodeKind.ECMA_LDHOMEOBJECT, "ecma.ldhomeobject", [], [
            []
        ]) || this;
    }
    EcmaLdhomeobject.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdhomeobject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdhomeobject;
}(Intrinsic));
exports.EcmaLdhomeobject = EcmaLdhomeobject;
var U64tou32 = /** @class */ (function (_super) {
    __extends(U64tou32, _super);
    function U64tou32() {
        return _super.call(this, IRNodeKind.U64TOU32, "u64tou32", [], [
            []
        ]) || this;
    }
    U64tou32.prototype.resultType = function () {
        return ResultType.None;
    };
    U64tou32.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return U64tou32;
}(IRNode));
exports.U64tou32 = U64tou32;
var EcmaThrowdeletesuperproperty = /** @class */ (function (_super) {
    __extends(EcmaThrowdeletesuperproperty, _super);
    function EcmaThrowdeletesuperproperty() {
        return _super.call(this, IRNodeKind.ECMA_THROWDELETESUPERPROPERTY, "ecma.throwdeletesuperproperty", [], [
            []
        ]) || this;
    }
    EcmaThrowdeletesuperproperty.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowdeletesuperproperty.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowdeletesuperproperty;
}(Intrinsic));
exports.EcmaThrowdeletesuperproperty = EcmaThrowdeletesuperproperty;
var EcmaDebugger = /** @class */ (function (_super) {
    __extends(EcmaDebugger, _super);
    function EcmaDebugger() {
        return _super.call(this, IRNodeKind.ECMA_DEBUGGER, "ecma.debugger", [], [
            []
        ]) || this;
    }
    EcmaDebugger.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDebugger.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDebugger;
}(Intrinsic));
exports.EcmaDebugger = EcmaDebugger;
var EcmaAdd2dyn = /** @class */ (function (_super) {
    __extends(EcmaAdd2dyn, _super);
    function EcmaAdd2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_ADD2DYN, "ecma.add2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaAdd2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaAdd2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaAdd2dyn;
}(Intrinsic));
exports.EcmaAdd2dyn = EcmaAdd2dyn;
var EcmaSub2dyn = /** @class */ (function (_super) {
    __extends(EcmaSub2dyn, _super);
    function EcmaSub2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_SUB2DYN, "ecma.sub2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaSub2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaSub2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaSub2dyn;
}(Intrinsic));
exports.EcmaSub2dyn = EcmaSub2dyn;
var EcmaMul2dyn = /** @class */ (function (_super) {
    __extends(EcmaMul2dyn, _super);
    function EcmaMul2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_MUL2DYN, "ecma.mul2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaMul2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaMul2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaMul2dyn;
}(Intrinsic));
exports.EcmaMul2dyn = EcmaMul2dyn;
var EcmaDiv2dyn = /** @class */ (function (_super) {
    __extends(EcmaDiv2dyn, _super);
    function EcmaDiv2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_DIV2DYN, "ecma.div2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDiv2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDiv2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDiv2dyn;
}(Intrinsic));
exports.EcmaDiv2dyn = EcmaDiv2dyn;
var EcmaMod2dyn = /** @class */ (function (_super) {
    __extends(EcmaMod2dyn, _super);
    function EcmaMod2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_MOD2DYN, "ecma.mod2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaMod2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaMod2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaMod2dyn;
}(Intrinsic));
exports.EcmaMod2dyn = EcmaMod2dyn;
var EcmaEqdyn = /** @class */ (function (_super) {
    __extends(EcmaEqdyn, _super);
    function EcmaEqdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_EQDYN, "ecma.eqdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaEqdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaEqdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaEqdyn;
}(Intrinsic));
exports.EcmaEqdyn = EcmaEqdyn;
var EcmaNoteqdyn = /** @class */ (function (_super) {
    __extends(EcmaNoteqdyn, _super);
    function EcmaNoteqdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_NOTEQDYN, "ecma.noteqdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaNoteqdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaNoteqdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaNoteqdyn;
}(Intrinsic));
exports.EcmaNoteqdyn = EcmaNoteqdyn;
var EcmaLessdyn = /** @class */ (function (_super) {
    __extends(EcmaLessdyn, _super);
    function EcmaLessdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_LESSDYN, "ecma.lessdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaLessdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLessdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLessdyn;
}(Intrinsic));
exports.EcmaLessdyn = EcmaLessdyn;
var EcmaLesseqdyn = /** @class */ (function (_super) {
    __extends(EcmaLesseqdyn, _super);
    function EcmaLesseqdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_LESSEQDYN, "ecma.lesseqdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaLesseqdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLesseqdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLesseqdyn;
}(Intrinsic));
exports.EcmaLesseqdyn = EcmaLesseqdyn;
var EcmaGreaterdyn = /** @class */ (function (_super) {
    __extends(EcmaGreaterdyn, _super);
    function EcmaGreaterdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_GREATERDYN, "ecma.greaterdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaGreaterdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGreaterdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGreaterdyn;
}(Intrinsic));
exports.EcmaGreaterdyn = EcmaGreaterdyn;
var EcmaGreatereqdyn = /** @class */ (function (_super) {
    __extends(EcmaGreatereqdyn, _super);
    function EcmaGreatereqdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_GREATEREQDYN, "ecma.greatereqdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaGreatereqdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGreatereqdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGreatereqdyn;
}(Intrinsic));
exports.EcmaGreatereqdyn = EcmaGreatereqdyn;
var EcmaShl2dyn = /** @class */ (function (_super) {
    __extends(EcmaShl2dyn, _super);
    function EcmaShl2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_SHL2DYN, "ecma.shl2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaShl2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaShl2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaShl2dyn;
}(Intrinsic));
exports.EcmaShl2dyn = EcmaShl2dyn;
var EcmaShr2dyn = /** @class */ (function (_super) {
    __extends(EcmaShr2dyn, _super);
    function EcmaShr2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_SHR2DYN, "ecma.shr2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaShr2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaShr2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaShr2dyn;
}(Intrinsic));
exports.EcmaShr2dyn = EcmaShr2dyn;
var EcmaAshr2dyn = /** @class */ (function (_super) {
    __extends(EcmaAshr2dyn, _super);
    function EcmaAshr2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_ASHR2DYN, "ecma.ashr2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaAshr2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaAshr2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaAshr2dyn;
}(Intrinsic));
exports.EcmaAshr2dyn = EcmaAshr2dyn;
var EcmaAnd2dyn = /** @class */ (function (_super) {
    __extends(EcmaAnd2dyn, _super);
    function EcmaAnd2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_AND2DYN, "ecma.and2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaAnd2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaAnd2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaAnd2dyn;
}(Intrinsic));
exports.EcmaAnd2dyn = EcmaAnd2dyn;
var EcmaOr2dyn = /** @class */ (function (_super) {
    __extends(EcmaOr2dyn, _super);
    function EcmaOr2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_OR2DYN, "ecma.or2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaOr2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaOr2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaOr2dyn;
}(Intrinsic));
exports.EcmaOr2dyn = EcmaOr2dyn;
var EcmaXor2dyn = /** @class */ (function (_super) {
    __extends(EcmaXor2dyn, _super);
    function EcmaXor2dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_XOR2DYN, "ecma.xor2dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaXor2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaXor2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaXor2dyn;
}(Intrinsic));
exports.EcmaXor2dyn = EcmaXor2dyn;
var EcmaTonumber = /** @class */ (function (_super) {
    __extends(EcmaTonumber, _super);
    function EcmaTonumber(v) {
        return _super.call(this, IRNodeKind.ECMA_TONUMBER, "ecma.tonumber", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaTonumber.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaTonumber.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaTonumber;
}(Intrinsic));
exports.EcmaTonumber = EcmaTonumber;
var EcmaNegdyn = /** @class */ (function (_super) {
    __extends(EcmaNegdyn, _super);
    function EcmaNegdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_NEGDYN, "ecma.negdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaNegdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaNegdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaNegdyn;
}(Intrinsic));
exports.EcmaNegdyn = EcmaNegdyn;
var EcmaNotdyn = /** @class */ (function (_super) {
    __extends(EcmaNotdyn, _super);
    function EcmaNotdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_NOTDYN, "ecma.notdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaNotdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaNotdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaNotdyn;
}(Intrinsic));
exports.EcmaNotdyn = EcmaNotdyn;
var EcmaIncdyn = /** @class */ (function (_super) {
    __extends(EcmaIncdyn, _super);
    function EcmaIncdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_INCDYN, "ecma.incdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaIncdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaIncdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaIncdyn;
}(Intrinsic));
exports.EcmaIncdyn = EcmaIncdyn;
var EcmaDecdyn = /** @class */ (function (_super) {
    __extends(EcmaDecdyn, _super);
    function EcmaDecdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_DECDYN, "ecma.decdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDecdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDecdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDecdyn;
}(Intrinsic));
exports.EcmaDecdyn = EcmaDecdyn;
var EcmaExpdyn = /** @class */ (function (_super) {
    __extends(EcmaExpdyn, _super);
    function EcmaExpdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_EXPDYN, "ecma.expdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaExpdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaExpdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaExpdyn;
}(Intrinsic));
exports.EcmaExpdyn = EcmaExpdyn;
var EcmaIsindyn = /** @class */ (function (_super) {
    __extends(EcmaIsindyn, _super);
    function EcmaIsindyn(v) {
        return _super.call(this, IRNodeKind.ECMA_ISINDYN, "ecma.isindyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaIsindyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaIsindyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaIsindyn;
}(Intrinsic));
exports.EcmaIsindyn = EcmaIsindyn;
var EcmaInstanceofdyn = /** @class */ (function (_super) {
    __extends(EcmaInstanceofdyn, _super);
    function EcmaInstanceofdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_INSTANCEOFDYN, "ecma.instanceofdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaInstanceofdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaInstanceofdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaInstanceofdyn;
}(Intrinsic));
exports.EcmaInstanceofdyn = EcmaInstanceofdyn;
var EcmaStrictnoteqdyn = /** @class */ (function (_super) {
    __extends(EcmaStrictnoteqdyn, _super);
    function EcmaStrictnoteqdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_STRICTNOTEQDYN, "ecma.strictnoteqdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStrictnoteqdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStrictnoteqdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStrictnoteqdyn;
}(Intrinsic));
exports.EcmaStrictnoteqdyn = EcmaStrictnoteqdyn;
var EcmaStricteqdyn = /** @class */ (function (_super) {
    __extends(EcmaStricteqdyn, _super);
    function EcmaStricteqdyn(v) {
        return _super.call(this, IRNodeKind.ECMA_STRICTEQDYN, "ecma.stricteqdyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStricteqdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStricteqdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStricteqdyn;
}(Intrinsic));
exports.EcmaStricteqdyn = EcmaStricteqdyn;
var EcmaResumegenerator = /** @class */ (function (_super) {
    __extends(EcmaResumegenerator, _super);
    function EcmaResumegenerator(v) {
        return _super.call(this, IRNodeKind.ECMA_RESUMEGENERATOR, "ecma.resumegenerator", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaResumegenerator.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaResumegenerator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaResumegenerator;
}(Intrinsic));
exports.EcmaResumegenerator = EcmaResumegenerator;
var EcmaGetresumemode = /** @class */ (function (_super) {
    __extends(EcmaGetresumemode, _super);
    function EcmaGetresumemode(v) {
        return _super.call(this, IRNodeKind.ECMA_GETRESUMEMODE, "ecma.getresumemode", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaGetresumemode.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGetresumemode.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGetresumemode;
}(Intrinsic));
exports.EcmaGetresumemode = EcmaGetresumemode;
var EcmaCreategeneratorobj = /** @class */ (function (_super) {
    __extends(EcmaCreategeneratorobj, _super);
    function EcmaCreategeneratorobj(v) {
        return _super.call(this, IRNodeKind.ECMA_CREATEGENERATOROBJ, "ecma.creategeneratorobj", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCreategeneratorobj.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreategeneratorobj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreategeneratorobj;
}(Intrinsic));
exports.EcmaCreategeneratorobj = EcmaCreategeneratorobj;
var EcmaThrowconstassignment = /** @class */ (function (_super) {
    __extends(EcmaThrowconstassignment, _super);
    function EcmaThrowconstassignment(v) {
        return _super.call(this, IRNodeKind.ECMA_THROWCONSTASSIGNMENT, "ecma.throwconstassignment", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaThrowconstassignment.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowconstassignment.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowconstassignment;
}(Intrinsic));
exports.EcmaThrowconstassignment = EcmaThrowconstassignment;
var EcmaGettemplateobject = /** @class */ (function (_super) {
    __extends(EcmaGettemplateobject, _super);
    function EcmaGettemplateobject(v) {
        return _super.call(this, IRNodeKind.ECMA_GETTEMPLATEOBJECT, "ecma.gettemplateobject", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaGettemplateobject.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGettemplateobject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGettemplateobject;
}(Intrinsic));
exports.EcmaGettemplateobject = EcmaGettemplateobject;
var EcmaGetnextpropname = /** @class */ (function (_super) {
    __extends(EcmaGetnextpropname, _super);
    function EcmaGetnextpropname(v) {
        return _super.call(this, IRNodeKind.ECMA_GETNEXTPROPNAME, "ecma.getnextpropname", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaGetnextpropname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGetnextpropname.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGetnextpropname;
}(Intrinsic));
exports.EcmaGetnextpropname = EcmaGetnextpropname;
var EcmaCallarg0dyn = /** @class */ (function (_super) {
    __extends(EcmaCallarg0dyn, _super);
    function EcmaCallarg0dyn(v) {
        return _super.call(this, IRNodeKind.ECMA_CALLARG0DYN, "ecma.callarg0dyn", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCallarg0dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCallarg0dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCallarg0dyn;
}(Intrinsic));
exports.EcmaCallarg0dyn = EcmaCallarg0dyn;
var EcmaThrowifnotobject = /** @class */ (function (_super) {
    __extends(EcmaThrowifnotobject, _super);
    function EcmaThrowifnotobject(v) {
        return _super.call(this, IRNodeKind.ECMA_THROWIFNOTOBJECT, "ecma.throwifnotobject", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaThrowifnotobject.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowifnotobject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowifnotobject;
}(Intrinsic));
exports.EcmaThrowifnotobject = EcmaThrowifnotobject;
var EcmaIternext = /** @class */ (function (_super) {
    __extends(EcmaIternext, _super);
    function EcmaIternext(v) {
        return _super.call(this, IRNodeKind.ECMA_ITERNEXT, "ecma.iternext", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaIternext.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaIternext.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaIternext;
}(Intrinsic));
exports.EcmaIternext = EcmaIternext;
var EcmaCloseiterator = /** @class */ (function (_super) {
    __extends(EcmaCloseiterator, _super);
    function EcmaCloseiterator(v) {
        return _super.call(this, IRNodeKind.ECMA_CLOSEITERATOR, "ecma.closeiterator", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCloseiterator.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCloseiterator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCloseiterator;
}(Intrinsic));
exports.EcmaCloseiterator = EcmaCloseiterator;
var EcmaCopymodule = /** @class */ (function (_super) {
    __extends(EcmaCopymodule, _super);
    function EcmaCopymodule(v) {
        return _super.call(this, IRNodeKind.ECMA_COPYMODULE, "ecma.copymodule", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCopymodule.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCopymodule.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCopymodule;
}(Intrinsic));
exports.EcmaCopymodule = EcmaCopymodule;
var EcmaSupercallspread = /** @class */ (function (_super) {
    __extends(EcmaSupercallspread, _super);
    function EcmaSupercallspread(v) {
        return _super.call(this, IRNodeKind.ECMA_SUPERCALLSPREAD, "ecma.supercallspread", [v], [
            [new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaSupercallspread.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaSupercallspread.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaSupercallspread;
}(Intrinsic));
exports.EcmaSupercallspread = EcmaSupercallspread;
var EcmaDelobjprop = /** @class */ (function (_super) {
    __extends(EcmaDelobjprop, _super);
    function EcmaDelobjprop(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_DELOBJPROP, "ecma.delobjprop", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDelobjprop.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDelobjprop.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDelobjprop;
}(Intrinsic));
exports.EcmaDelobjprop = EcmaDelobjprop;
var EcmaNewobjspreaddyn = /** @class */ (function (_super) {
    __extends(EcmaNewobjspreaddyn, _super);
    function EcmaNewobjspreaddyn(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_NEWOBJSPREADDYN, "ecma.newobjspreaddyn", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaNewobjspreaddyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaNewobjspreaddyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaNewobjspreaddyn;
}(Intrinsic));
exports.EcmaNewobjspreaddyn = EcmaNewobjspreaddyn;
var EcmaCreateiterresultobj = /** @class */ (function (_super) {
    __extends(EcmaCreateiterresultobj, _super);
    function EcmaCreateiterresultobj(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_CREATEITERRESULTOBJ, "ecma.createiterresultobj", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCreateiterresultobj.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreateiterresultobj.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreateiterresultobj;
}(Intrinsic));
exports.EcmaCreateiterresultobj = EcmaCreateiterresultobj;
var EcmaSuspendgenerator = /** @class */ (function (_super) {
    __extends(EcmaSuspendgenerator, _super);
    function EcmaSuspendgenerator(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_SUSPENDGENERATOR, "ecma.suspendgenerator", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaSuspendgenerator.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaSuspendgenerator.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaSuspendgenerator;
}(Intrinsic));
exports.EcmaSuspendgenerator = EcmaSuspendgenerator;
var EcmaAsyncfunctionawaituncaught = /** @class */ (function (_super) {
    __extends(EcmaAsyncfunctionawaituncaught, _super);
    function EcmaAsyncfunctionawaituncaught(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_ASYNCFUNCTIONAWAITUNCAUGHT, "ecma.asyncfunctionawaituncaught", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaAsyncfunctionawaituncaught.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaAsyncfunctionawaituncaught.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaAsyncfunctionawaituncaught;
}(Intrinsic));
exports.EcmaAsyncfunctionawaituncaught = EcmaAsyncfunctionawaituncaught;
var EcmaThrowundefinedifhole = /** @class */ (function (_super) {
    __extends(EcmaThrowundefinedifhole, _super);
    function EcmaThrowundefinedifhole(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_THROWUNDEFINEDIFHOLE, "ecma.throwundefinedifhole", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaThrowundefinedifhole.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowundefinedifhole.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowundefinedifhole;
}(Intrinsic));
exports.EcmaThrowundefinedifhole = EcmaThrowundefinedifhole;
var EcmaCallarg1dyn = /** @class */ (function (_super) {
    __extends(EcmaCallarg1dyn, _super);
    function EcmaCallarg1dyn(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_CALLARG1DYN, "ecma.callarg1dyn", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCallarg1dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCallarg1dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCallarg1dyn;
}(Intrinsic));
exports.EcmaCallarg1dyn = EcmaCallarg1dyn;
var EcmaCopydataproperties = /** @class */ (function (_super) {
    __extends(EcmaCopydataproperties, _super);
    function EcmaCopydataproperties(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_COPYDATAPROPERTIES, "ecma.copydataproperties", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCopydataproperties.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCopydataproperties.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCopydataproperties;
}(Intrinsic));
exports.EcmaCopydataproperties = EcmaCopydataproperties;
var EcmaStarrayspread = /** @class */ (function (_super) {
    __extends(EcmaStarrayspread, _super);
    function EcmaStarrayspread(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_STARRAYSPREAD, "ecma.starrayspread", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStarrayspread.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStarrayspread.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStarrayspread;
}(Intrinsic));
exports.EcmaStarrayspread = EcmaStarrayspread;
var EcmaGetiteratornext = /** @class */ (function (_super) {
    __extends(EcmaGetiteratornext, _super);
    function EcmaGetiteratornext(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_GETITERATORNEXT, "ecma.getiteratornext", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaGetiteratornext.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaGetiteratornext.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaGetiteratornext;
}(Intrinsic));
exports.EcmaGetiteratornext = EcmaGetiteratornext;
var EcmaSetobjectwithproto = /** @class */ (function (_super) {
    __extends(EcmaSetobjectwithproto, _super);
    function EcmaSetobjectwithproto(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_SETOBJECTWITHPROTO, "ecma.setobjectwithproto", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaSetobjectwithproto.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaSetobjectwithproto.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaSetobjectwithproto;
}(Intrinsic));
exports.EcmaSetobjectwithproto = EcmaSetobjectwithproto;
var EcmaLdobjbyvalue = /** @class */ (function (_super) {
    __extends(EcmaLdobjbyvalue, _super);
    function EcmaLdobjbyvalue(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_LDOBJBYVALUE, "ecma.ldobjbyvalue", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaLdobjbyvalue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdobjbyvalue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdobjbyvalue;
}(Intrinsic));
exports.EcmaLdobjbyvalue = EcmaLdobjbyvalue;
var EcmaStobjbyvalue = /** @class */ (function (_super) {
    __extends(EcmaStobjbyvalue, _super);
    function EcmaStobjbyvalue(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_STOBJBYVALUE, "ecma.stobjbyvalue", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStobjbyvalue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStobjbyvalue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStobjbyvalue;
}(Intrinsic));
exports.EcmaStobjbyvalue = EcmaStobjbyvalue;
var EcmaStownbyvalue = /** @class */ (function (_super) {
    __extends(EcmaStownbyvalue, _super);
    function EcmaStownbyvalue(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_STOWNBYVALUE, "ecma.stownbyvalue", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStownbyvalue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStownbyvalue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStownbyvalue;
}(Intrinsic));
exports.EcmaStownbyvalue = EcmaStownbyvalue;
var EcmaLdsuperbyvalue = /** @class */ (function (_super) {
    __extends(EcmaLdsuperbyvalue, _super);
    function EcmaLdsuperbyvalue(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_LDSUPERBYVALUE, "ecma.ldsuperbyvalue", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaLdsuperbyvalue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdsuperbyvalue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdsuperbyvalue;
}(Intrinsic));
exports.EcmaLdsuperbyvalue = EcmaLdsuperbyvalue;
var EcmaStsuperbyvalue = /** @class */ (function (_super) {
    __extends(EcmaStsuperbyvalue, _super);
    function EcmaStsuperbyvalue(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_STSUPERBYVALUE, "ecma.stsuperbyvalue", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStsuperbyvalue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStsuperbyvalue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStsuperbyvalue;
}(Intrinsic));
exports.EcmaStsuperbyvalue = EcmaStsuperbyvalue;
var EcmaLdobjbyindex = /** @class */ (function (_super) {
    __extends(EcmaLdobjbyindex, _super);
    function EcmaLdobjbyindex(v, imm) {
        return _super.call(this, IRNodeKind.ECMA_LDOBJBYINDEX, "ecma.ldobjbyindex", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    EcmaLdobjbyindex.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdobjbyindex.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdobjbyindex;
}(Intrinsic));
exports.EcmaLdobjbyindex = EcmaLdobjbyindex;
var EcmaStobjbyindex = /** @class */ (function (_super) {
    __extends(EcmaStobjbyindex, _super);
    function EcmaStobjbyindex(v, imm) {
        return _super.call(this, IRNodeKind.ECMA_STOBJBYINDEX, "ecma.stobjbyindex", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    EcmaStobjbyindex.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStobjbyindex.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStobjbyindex;
}(Intrinsic));
exports.EcmaStobjbyindex = EcmaStobjbyindex;
var EcmaStownbyindex = /** @class */ (function (_super) {
    __extends(EcmaStownbyindex, _super);
    function EcmaStownbyindex(v, imm) {
        return _super.call(this, IRNodeKind.ECMA_STOWNBYINDEX, "ecma.stownbyindex", [v, imm], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.Imm, 32)]
        ]) || this;
    }
    EcmaStownbyindex.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStownbyindex.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStownbyindex;
}(Intrinsic));
exports.EcmaStownbyindex = EcmaStownbyindex;
var EcmaCallspreaddyn = /** @class */ (function (_super) {
    __extends(EcmaCallspreaddyn, _super);
    function EcmaCallspreaddyn(v1, v2, v3) {
        return _super.call(this, IRNodeKind.ECMA_CALLSPREADDYN, "ecma.callspreaddyn", [v1, v2, v3], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCallspreaddyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCallspreaddyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCallspreaddyn;
}(Intrinsic));
exports.EcmaCallspreaddyn = EcmaCallspreaddyn;
var EcmaAsyncfunctionresolve = /** @class */ (function (_super) {
    __extends(EcmaAsyncfunctionresolve, _super);
    function EcmaAsyncfunctionresolve(v1, v2, v3) {
        return _super.call(this, IRNodeKind.ECMA_ASYNCFUNCTIONRESOLVE, "ecma.asyncfunctionresolve", [v1, v2, v3], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaAsyncfunctionresolve.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaAsyncfunctionresolve.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaAsyncfunctionresolve;
}(Intrinsic));
exports.EcmaAsyncfunctionresolve = EcmaAsyncfunctionresolve;
var EcmaAsyncfunctionreject = /** @class */ (function (_super) {
    __extends(EcmaAsyncfunctionreject, _super);
    function EcmaAsyncfunctionreject(v1, v2, v3) {
        return _super.call(this, IRNodeKind.ECMA_ASYNCFUNCTIONREJECT, "ecma.asyncfunctionreject", [v1, v2, v3], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaAsyncfunctionreject.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaAsyncfunctionreject.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaAsyncfunctionreject;
}(Intrinsic));
exports.EcmaAsyncfunctionreject = EcmaAsyncfunctionreject;
var EcmaCallargs2dyn = /** @class */ (function (_super) {
    __extends(EcmaCallargs2dyn, _super);
    function EcmaCallargs2dyn(v1, v2, v3) {
        return _super.call(this, IRNodeKind.ECMA_CALLARGS2DYN, "ecma.callargs2dyn", [v1, v2, v3], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCallargs2dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCallargs2dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCallargs2dyn;
}(Intrinsic));
exports.EcmaCallargs2dyn = EcmaCallargs2dyn;
var EcmaCallargs3dyn = /** @class */ (function (_super) {
    __extends(EcmaCallargs3dyn, _super);
    function EcmaCallargs3dyn(v1, v2, v3, v4) {
        return _super.call(this, IRNodeKind.ECMA_CALLARGS3DYN, "ecma.callargs3dyn", [v1, v2, v3, v4], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaCallargs3dyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCallargs3dyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCallargs3dyn;
}(Intrinsic));
exports.EcmaCallargs3dyn = EcmaCallargs3dyn;
var EcmaDefinegettersetterbyvalue = /** @class */ (function (_super) {
    __extends(EcmaDefinegettersetterbyvalue, _super);
    function EcmaDefinegettersetterbyvalue(v1, v2, v3, v4) {
        return _super.call(this, IRNodeKind.ECMA_DEFINEGETTERSETTERBYVALUE, "ecma.definegettersetterbyvalue", [v1, v2, v3, v4], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDefinegettersetterbyvalue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDefinegettersetterbyvalue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDefinegettersetterbyvalue;
}(Intrinsic));
exports.EcmaDefinegettersetterbyvalue = EcmaDefinegettersetterbyvalue;
var EcmaNewobjdynrange = /** @class */ (function (_super) {
    __extends(EcmaNewobjdynrange, _super);
    function EcmaNewobjdynrange(imm, v) {
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
        _this = _super.call(this, IRNodeKind.ECMA_NEWOBJDYNRANGE, "ecma.newobjdynrange", operands, [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    EcmaNewobjdynrange.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaNewobjdynrange.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaNewobjdynrange;
}(Intrinsic));
exports.EcmaNewobjdynrange = EcmaNewobjdynrange;
var EcmaCallirangedyn = /** @class */ (function (_super) {
    __extends(EcmaCallirangedyn, _super);
    function EcmaCallirangedyn(imm, v) {
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
        _this = _super.call(this, IRNodeKind.ECMA_CALLIRANGEDYN, "ecma.callirangedyn", operands, [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    EcmaCallirangedyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCallirangedyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCallirangedyn;
}(Intrinsic));
exports.EcmaCallirangedyn = EcmaCallirangedyn;
var EcmaCallithisrangedyn = /** @class */ (function (_super) {
    __extends(EcmaCallithisrangedyn, _super);
    function EcmaCallithisrangedyn(imm, v) {
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
        _this = _super.call(this, IRNodeKind.ECMA_CALLITHISRANGEDYN, "ecma.callithisrangedyn", operands, [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    EcmaCallithisrangedyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCallithisrangedyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCallithisrangedyn;
}(Intrinsic));
exports.EcmaCallithisrangedyn = EcmaCallithisrangedyn;
var EcmaSupercall = /** @class */ (function (_super) {
    __extends(EcmaSupercall, _super);
    function EcmaSupercall(imm, v) {
        return _super.call(this, IRNodeKind.ECMA_SUPERCALL, "ecma.supercall", [imm, v], [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaSupercall.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaSupercall.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaSupercall;
}(Intrinsic));
exports.EcmaSupercall = EcmaSupercall;
var EcmaCreateobjectwithexcludedkeys = /** @class */ (function (_super) {
    __extends(EcmaCreateobjectwithexcludedkeys, _super);
    function EcmaCreateobjectwithexcludedkeys(imm, v1, v2) {
        var _this = this;
        var ctors = __spreadArrays([imm, v1], v2);
        var operands = [imm, v1];
        ctors.shift();
        ctors.shift();
        while (!!(ctors && ctors.length)) {
            var ctor = ctors.shift();
            if (ctor != undefined) {
                operands.push(ctor);
            }
        }
        _this = _super.call(this, IRNodeKind.ECMA_CREATEOBJECTWITHEXCLUDEDKEYS, "ecma.createobjectwithexcludedkeys", operands, [
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
        return _this;
    }
    EcmaCreateobjectwithexcludedkeys.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreateobjectwithexcludedkeys.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreateobjectwithexcludedkeys;
}(Intrinsic));
exports.EcmaCreateobjectwithexcludedkeys = EcmaCreateobjectwithexcludedkeys;
var EcmaDefinefuncdyn = /** @class */ (function (_super) {
    __extends(EcmaDefinefuncdyn, _super);
    function EcmaDefinefuncdyn(method_id, imm, v) {
        return _super.call(this, IRNodeKind.ECMA_DEFINEFUNCDYN, "ecma.definefuncdyn", [method_id, imm, v], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDefinefuncdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDefinefuncdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDefinefuncdyn;
}(Intrinsic));
exports.EcmaDefinefuncdyn = EcmaDefinefuncdyn;
var EcmaDefinencfuncdyn = /** @class */ (function (_super) {
    __extends(EcmaDefinencfuncdyn, _super);
    function EcmaDefinencfuncdyn(method_id, imm, v) {
        return _super.call(this, IRNodeKind.ECMA_DEFINENCFUNCDYN, "ecma.definencfuncdyn", [method_id, imm, v], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDefinencfuncdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDefinencfuncdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDefinencfuncdyn;
}(Intrinsic));
exports.EcmaDefinencfuncdyn = EcmaDefinencfuncdyn;
var EcmaDefinegeneratorfunc = /** @class */ (function (_super) {
    __extends(EcmaDefinegeneratorfunc, _super);
    function EcmaDefinegeneratorfunc(method_id, imm, v) {
        return _super.call(this, IRNodeKind.ECMA_DEFINEGENERATORFUNC, "ecma.definegeneratorfunc", [method_id, imm, v], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDefinegeneratorfunc.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDefinegeneratorfunc.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDefinegeneratorfunc;
}(Intrinsic));
exports.EcmaDefinegeneratorfunc = EcmaDefinegeneratorfunc;
var EcmaDefineasyncfunc = /** @class */ (function (_super) {
    __extends(EcmaDefineasyncfunc, _super);
    function EcmaDefineasyncfunc(method_id, imm, v) {
        return _super.call(this, IRNodeKind.ECMA_DEFINEASYNCFUNC, "ecma.defineasyncfunc", [method_id, imm, v], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDefineasyncfunc.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDefineasyncfunc.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDefineasyncfunc;
}(Intrinsic));
exports.EcmaDefineasyncfunc = EcmaDefineasyncfunc;
var EcmaDefinemethod = /** @class */ (function (_super) {
    __extends(EcmaDefinemethod, _super);
    function EcmaDefinemethod(method_id, imm, v) {
        return _super.call(this, IRNodeKind.ECMA_DEFINEMETHOD, "ecma.definemethod", [method_id, imm, v], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDefinemethod.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDefinemethod.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDefinemethod;
}(Intrinsic));
exports.EcmaDefinemethod = EcmaDefinemethod;
var EcmaNewlexenvdyn = /** @class */ (function (_super) {
    __extends(EcmaNewlexenvdyn, _super);
    function EcmaNewlexenvdyn(imm) {
        return _super.call(this, IRNodeKind.ECMA_NEWLEXENVDYN, "ecma.newlexenvdyn", [imm], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    EcmaNewlexenvdyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaNewlexenvdyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaNewlexenvdyn;
}(Intrinsic));
exports.EcmaNewlexenvdyn = EcmaNewlexenvdyn;
var EcmaCopyrestargs = /** @class */ (function (_super) {
    __extends(EcmaCopyrestargs, _super);
    function EcmaCopyrestargs(imm) {
        return _super.call(this, IRNodeKind.ECMA_COPYRESTARGS, "ecma.copyrestargs", [imm], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    EcmaCopyrestargs.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCopyrestargs.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCopyrestargs;
}(Intrinsic));
exports.EcmaCopyrestargs = EcmaCopyrestargs;
var EcmaCreatearraywithbuffer = /** @class */ (function (_super) {
    __extends(EcmaCreatearraywithbuffer, _super);
    function EcmaCreatearraywithbuffer(imm) {
        return _super.call(this, IRNodeKind.ECMA_CREATEARRAYWITHBUFFER, "ecma.createarraywithbuffer", [imm], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    EcmaCreatearraywithbuffer.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreatearraywithbuffer.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreatearraywithbuffer;
}(Intrinsic));
exports.EcmaCreatearraywithbuffer = EcmaCreatearraywithbuffer;
var EcmaCreateobjecthavingmethod = /** @class */ (function (_super) {
    __extends(EcmaCreateobjecthavingmethod, _super);
    function EcmaCreateobjecthavingmethod(imm) {
        return _super.call(this, IRNodeKind.ECMA_CREATEOBJECTHAVINGMETHOD, "ecma.createobjecthavingmethod", [imm], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    EcmaCreateobjecthavingmethod.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreateobjecthavingmethod.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreateobjecthavingmethod;
}(Intrinsic));
exports.EcmaCreateobjecthavingmethod = EcmaCreateobjecthavingmethod;
var EcmaThrowifsupernotcorrectcall = /** @class */ (function (_super) {
    __extends(EcmaThrowifsupernotcorrectcall, _super);
    function EcmaThrowifsupernotcorrectcall(imm) {
        return _super.call(this, IRNodeKind.ECMA_THROWIFSUPERNOTCORRECTCALL, "ecma.throwifsupernotcorrectcall", [imm], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    EcmaThrowifsupernotcorrectcall.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaThrowifsupernotcorrectcall.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaThrowifsupernotcorrectcall;
}(Intrinsic));
exports.EcmaThrowifsupernotcorrectcall = EcmaThrowifsupernotcorrectcall;
var EcmaCreateobjectwithbuffer = /** @class */ (function (_super) {
    __extends(EcmaCreateobjectwithbuffer, _super);
    function EcmaCreateobjectwithbuffer(imm) {
        return _super.call(this, IRNodeKind.ECMA_CREATEOBJECTWITHBUFFER, "ecma.createobjectwithbuffer", [imm], [
            [new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    EcmaCreateobjectwithbuffer.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreateobjectwithbuffer.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreateobjectwithbuffer;
}(Intrinsic));
exports.EcmaCreateobjectwithbuffer = EcmaCreateobjectwithbuffer;
var EcmaLdlexvardyn = /** @class */ (function (_super) {
    __extends(EcmaLdlexvardyn, _super);
    function EcmaLdlexvardyn(imm1, imm2) {
        return _super.call(this, IRNodeKind.ECMA_LDLEXVARDYN, "ecma.ldlexvardyn", [imm1, imm2], [
            [new FormatItem(OperandKind.Imm, 4), new FormatItem(OperandKind.Imm, 4)],
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 8)],
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.Imm, 16)]
        ]) || this;
    }
    EcmaLdlexvardyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdlexvardyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdlexvardyn;
}(Intrinsic));
exports.EcmaLdlexvardyn = EcmaLdlexvardyn;
var EcmaStlexvardyn = /** @class */ (function (_super) {
    __extends(EcmaStlexvardyn, _super);
    function EcmaStlexvardyn(imm1, imm2, v) {
        return _super.call(this, IRNodeKind.ECMA_STLEXVARDYN, "ecma.stlexvardyn", [imm1, imm2, v], [
            [new FormatItem(OperandKind.Imm, 4), new FormatItem(OperandKind.Imm, 4), new FormatItem(OperandKind.SrcVReg, 8)],
            [new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.Imm, 8), new FormatItem(OperandKind.SrcVReg, 8)],
            [new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStlexvardyn.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStlexvardyn.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStlexvardyn;
}(Intrinsic));
exports.EcmaStlexvardyn = EcmaStlexvardyn;
var EcmaDefineclasswithbuffer = /** @class */ (function (_super) {
    __extends(EcmaDefineclasswithbuffer, _super);
    function EcmaDefineclasswithbuffer(method_id, imm1, imm2, v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_DEFINECLASSWITHBUFFER, "ecma.defineclasswithbuffer", [method_id, imm1, imm2, v1, v2], [
            [new FormatItem(OperandKind.Id, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.Imm, 16), new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaDefineclasswithbuffer.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaDefineclasswithbuffer.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaDefineclasswithbuffer;
}(Intrinsic));
exports.EcmaDefineclasswithbuffer = EcmaDefineclasswithbuffer;
var EcmaImportmodule = /** @class */ (function (_super) {
    __extends(EcmaImportmodule, _super);
    function EcmaImportmodule(string_id) {
        return _super.call(this, IRNodeKind.ECMA_IMPORTMODULE, "ecma.importmodule", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaImportmodule.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaImportmodule.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaImportmodule;
}(Intrinsic));
exports.EcmaImportmodule = EcmaImportmodule;
var EcmaStmodulevar = /** @class */ (function (_super) {
    __extends(EcmaStmodulevar, _super);
    function EcmaStmodulevar(string_id) {
        return _super.call(this, IRNodeKind.ECMA_STMODULEVAR, "ecma.stmodulevar", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaStmodulevar.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStmodulevar.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStmodulevar;
}(Intrinsic));
exports.EcmaStmodulevar = EcmaStmodulevar;
var EcmaTryldglobalbyname = /** @class */ (function (_super) {
    __extends(EcmaTryldglobalbyname, _super);
    function EcmaTryldglobalbyname(string_id) {
        return _super.call(this, IRNodeKind.ECMA_TRYLDGLOBALBYNAME, "ecma.tryldglobalbyname", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaTryldglobalbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaTryldglobalbyname.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaTryldglobalbyname;
}(Intrinsic));
exports.EcmaTryldglobalbyname = EcmaTryldglobalbyname;
var EcmaTrystglobalbyname = /** @class */ (function (_super) {
    __extends(EcmaTrystglobalbyname, _super);
    function EcmaTrystglobalbyname(string_id) {
        return _super.call(this, IRNodeKind.ECMA_TRYSTGLOBALBYNAME, "ecma.trystglobalbyname", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaTrystglobalbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaTrystglobalbyname.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaTrystglobalbyname;
}(Intrinsic));
exports.EcmaTrystglobalbyname = EcmaTrystglobalbyname;
var EcmaLdglobalvar = /** @class */ (function (_super) {
    __extends(EcmaLdglobalvar, _super);
    function EcmaLdglobalvar(string_id) {
        return _super.call(this, IRNodeKind.ECMA_LDGLOBALVAR, "ecma.ldglobalvar", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaLdglobalvar.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdglobalvar.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdglobalvar;
}(Intrinsic));
exports.EcmaLdglobalvar = EcmaLdglobalvar;
var EcmaStglobalvar = /** @class */ (function (_super) {
    __extends(EcmaStglobalvar, _super);
    function EcmaStglobalvar(string_id) {
        return _super.call(this, IRNodeKind.ECMA_STGLOBALVAR, "ecma.stglobalvar", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaStglobalvar.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStglobalvar.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStglobalvar;
}(Intrinsic));
exports.EcmaStglobalvar = EcmaStglobalvar;
var EcmaLdobjbyname = /** @class */ (function (_super) {
    __extends(EcmaLdobjbyname, _super);
    function EcmaLdobjbyname(string_id, v) {
        return _super.call(this, IRNodeKind.ECMA_LDOBJBYNAME, "ecma.ldobjbyname", [string_id, v], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaLdobjbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdobjbyname.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdobjbyname;
}(Intrinsic));
exports.EcmaLdobjbyname = EcmaLdobjbyname;
var EcmaStobjbyname = /** @class */ (function (_super) {
    __extends(EcmaStobjbyname, _super);
    function EcmaStobjbyname(string_id, v) {
        return _super.call(this, IRNodeKind.ECMA_STOBJBYNAME, "ecma.stobjbyname", [string_id, v], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStobjbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStobjbyname.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStobjbyname;
}(Intrinsic));
exports.EcmaStobjbyname = EcmaStobjbyname;
var EcmaStownbyname = /** @class */ (function (_super) {
    __extends(EcmaStownbyname, _super);
    function EcmaStownbyname(string_id, v) {
        return _super.call(this, IRNodeKind.ECMA_STOWNBYNAME, "ecma.stownbyname", [string_id, v], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStownbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStownbyname.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStownbyname;
}(Intrinsic));
exports.EcmaStownbyname = EcmaStownbyname;
var EcmaLdsuperbyname = /** @class */ (function (_super) {
    __extends(EcmaLdsuperbyname, _super);
    function EcmaLdsuperbyname(string_id, v) {
        return _super.call(this, IRNodeKind.ECMA_LDSUPERBYNAME, "ecma.ldsuperbyname", [string_id, v], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaLdsuperbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdsuperbyname.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdsuperbyname;
}(Intrinsic));
exports.EcmaLdsuperbyname = EcmaLdsuperbyname;
var EcmaStsuperbyname = /** @class */ (function (_super) {
    __extends(EcmaStsuperbyname, _super);
    function EcmaStsuperbyname(string_id, v) {
        return _super.call(this, IRNodeKind.ECMA_STSUPERBYNAME, "ecma.stsuperbyname", [string_id, v], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStsuperbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStsuperbyname.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStsuperbyname;
}(Intrinsic));
exports.EcmaStsuperbyname = EcmaStsuperbyname;
var EcmaLdmodvarbyname = /** @class */ (function (_super) {
    __extends(EcmaLdmodvarbyname, _super);
    function EcmaLdmodvarbyname(string_id, v) {
        return _super.call(this, IRNodeKind.ECMA_LDMODVARBYNAME, "ecma.ldmodvarbyname", [string_id, v], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaLdmodvarbyname.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaLdmodvarbyname.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaLdmodvarbyname;
}(Intrinsic));
exports.EcmaLdmodvarbyname = EcmaLdmodvarbyname;
var EcmaCreateregexpwithliteral = /** @class */ (function (_super) {
    __extends(EcmaCreateregexpwithliteral, _super);
    function EcmaCreateregexpwithliteral(string_id, imm) {
        return _super.call(this, IRNodeKind.ECMA_CREATEREGEXPWITHLITERAL, "ecma.createregexpwithliteral", [string_id, imm], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.Imm, 8)]
        ]) || this;
    }
    EcmaCreateregexpwithliteral.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaCreateregexpwithliteral.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaCreateregexpwithliteral;
}(Intrinsic));
exports.EcmaCreateregexpwithliteral = EcmaCreateregexpwithliteral;
var EcmaIstrue = /** @class */ (function (_super) {
    __extends(EcmaIstrue, _super);
    function EcmaIstrue() {
        return _super.call(this, IRNodeKind.ECMA_ISTRUE, "ecma.istrue", [], [
            []
        ]) || this;
    }
    EcmaIstrue.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaIstrue.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaIstrue;
}(Intrinsic));
exports.EcmaIstrue = EcmaIstrue;
var EcmaIsfalse = /** @class */ (function (_super) {
    __extends(EcmaIsfalse, _super);
    function EcmaIsfalse() {
        return _super.call(this, IRNodeKind.ECMA_ISFALSE, "ecma.isfalse", [], [
            []
        ]) || this;
    }
    EcmaIsfalse.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaIsfalse.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaIsfalse;
}(Intrinsic));
exports.EcmaIsfalse = EcmaIsfalse;
var EcmaStconsttoglobalrecord = /** @class */ (function (_super) {
    __extends(EcmaStconsttoglobalrecord, _super);
    function EcmaStconsttoglobalrecord(string_id) {
        return _super.call(this, IRNodeKind.ECMA_STCONSTTOGLOBALRECORD, "ecma.stconsttoglobalrecord", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaStconsttoglobalrecord.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStconsttoglobalrecord.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStconsttoglobalrecord;
}(Intrinsic));
exports.EcmaStconsttoglobalrecord = EcmaStconsttoglobalrecord;
var EcmaStlettoglobalrecord = /** @class */ (function (_super) {
    __extends(EcmaStlettoglobalrecord, _super);
    function EcmaStlettoglobalrecord(string_id) {
        return _super.call(this, IRNodeKind.ECMA_STLETTOGLOBALRECORD, "ecma.stlettoglobalrecord", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaStlettoglobalrecord.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStlettoglobalrecord.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStlettoglobalrecord;
}(Intrinsic));
exports.EcmaStlettoglobalrecord = EcmaStlettoglobalrecord;
var EcmaStclasstoglobalrecord = /** @class */ (function (_super) {
    __extends(EcmaStclasstoglobalrecord, _super);
    function EcmaStclasstoglobalrecord(string_id) {
        return _super.call(this, IRNodeKind.ECMA_STCLASSTOGLOBALRECORD, "ecma.stclasstoglobalrecord", [string_id], [
            [new FormatItem(OperandKind.StringId, 32)]
        ]) || this;
    }
    EcmaStclasstoglobalrecord.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStclasstoglobalrecord.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStclasstoglobalrecord;
}(Intrinsic));
exports.EcmaStclasstoglobalrecord = EcmaStclasstoglobalrecord;
var EcmaStownbyvaluewithnameset = /** @class */ (function (_super) {
    __extends(EcmaStownbyvaluewithnameset, _super);
    function EcmaStownbyvaluewithnameset(v1, v2) {
        return _super.call(this, IRNodeKind.ECMA_STOWNBYVALUEWITHNAMESET, "ecma.stownbyvaluewithnameset", [v1, v2], [
            [new FormatItem(OperandKind.SrcVReg, 8), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStownbyvaluewithnameset.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStownbyvaluewithnameset.prototype.resultIn = function () {
        return ResultDst.Acc;
    };
    return EcmaStownbyvaluewithnameset;
}(Intrinsic));
exports.EcmaStownbyvaluewithnameset = EcmaStownbyvaluewithnameset;
var EcmaStownbynamewithnameset = /** @class */ (function (_super) {
    __extends(EcmaStownbynamewithnameset, _super);
    function EcmaStownbynamewithnameset(string_id, v) {
        return _super.call(this, IRNodeKind.ECMA_STOWNBYNAMEWITHNAMESET, "ecma.stownbynamewithnameset", [string_id, v], [
            [new FormatItem(OperandKind.StringId, 32), new FormatItem(OperandKind.SrcVReg, 8)]
        ]) || this;
    }
    EcmaStownbynamewithnameset.prototype.resultType = function () {
        return ResultType.None;
    };
    EcmaStownbynamewithnameset.prototype.resultIn = function () {
        return ResultDst.None;
    };
    return EcmaStownbynamewithnameset;
}(Intrinsic));
exports.EcmaStownbynamewithnameset = EcmaStownbynamewithnameset;
//# sourceMappingURL=irnodes.js.map