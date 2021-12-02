import { PandaGen } from "./pandagen";
import * as ts from "typescript";
import { DebugPosInfo, NodeKind } from "./debuginfo";
export declare enum IRNodeKind {
    VREG = 0,
    IMM = 1,
    LABEL = 2,
    LD_NAN = 3,
    LD_INFINITY = 4,
    LD_GLOBALTHIS = 5,
    LD_UNDEFINED = 6,
    LD_BOOLEAN = 7,
    LD_NUMBER = 8,
    LD_STRING = 9,
    LD_BIGINT = 10,
    LD_SYMBOL = 11,
    LD_REGEXP = 12,
    LD_NULL = 13,
    LD_OBJECT = 14,
    LD_FUNCTION = 15,
    LD_GLOBAL = 16,
    LD_True = 17,
    LD_False = 18,
    ADD2_DYN = 19,
    SUB2_DYN = 20,
    MUL2_DYN = 21,
    DIV2_DYN = 22,
    MOD2_DYN = 23,
    EQ_DYN = 24,
    NOTEQ_DYN = 25,
    LESS_DYN = 26,
    LESSEQ_DYN = 27,
    GREATER_DYN = 28,
    GREATEREQ_DYN = 29,
    LDGLOBAL_DYN = 30,
    TONUMBER = 31,
    SHL2_DYN = 32,
    SHR2_DYN = 33,
    ASHR2_DYN = 34,
    AND2_DYN = 35,
    OR2_DYN = 36,
    XOR2_DYN = 37,
    NEG_DYN = 38,
    NOT_DYN = 39,
    INC_DYN = 40,
    DEC_DYN = 41,
    THROW_DYN = 42,
    DEFINE_GLOBAL_VAR = 43,
    DEFINE_LOCAL_VAR = 44,
    DEFINEFUNC_DYN = 45,
    DEFINE_NCFUNC_DYN = 46,
    STRICTEQ_DYN = 47,
    STRICTNOTEQ_DYN = 48,
    EXP_DYN = 49,
    TYPEOF_DYN = 50,
    GET_PROP_ITERATOR = 51,
    DEL_OBJ_PROP = 52,
    IS_IN_DYN = 53,
    INSTANCE_OF_DYN = 54,
    DEBUGGER = 55,
    CALL_SPREAD = 56,
    NEWOBJ_SPREAD = 57,
    NEWLEXENV_DYN = 58,
    LDLEXENV_DYN = 59,
    STLEXVARDYN = 60,
    LDLEXVARDYN = 61,
    VIRTUALINS_DYN = 62,
    TOBOOLEAN = 63,
    GETUNMAPPEDARGS = 64,
    THROWUNDEFINEDIFHOLE = 65,
    THROWCONSTASSIGNMENT = 66,
    THROWTHROWNOTEXISTS = 67,
    DEFINE_GENERATOR_FUNC = 68,
    CREATE_GENERATOR_OBJ = 69,
    CREATE_ITERRESULT_OBJ = 70,
    SUSPEND_GENERATOR = 71,
    RESUME_GENERATOR = 72,
    GET_RESUME_MODE = 73,
    DEFINE_ASYNC_FUNC = 74,
    ASYNC_FUNCTION_ENTER = 75,
    ASYNC_FUNCTION_AWAIT_UNCAUGHT = 76,
    ASYNC_FUNCTION_RESOLVE = 77,
    ASYNC_FUNCTION_REJECT = 78,
    LDHOLE = 79,
    GET_TEMPLATE_OBJECT = 80,
    COPY_REST_ARGS = 81,
    TRYLDGLOBALBYNAME = 82,
    TRYSTGLOBALBYNAME = 83,
    TRYLDGLOBALBYVALUE = 84,
    TRYSTGLOBALBYVALUE = 85,
    LDGLOBALVAR = 86,
    STGLOBALVAR = 87,
    LDOBJBYNAME = 88,
    STOBJBYNAME = 89,
    LDOBJBYINDEX = 90,
    STOBJBYINDEX = 91,
    LDOBJBYVALUE = 92,
    STOBJBYVALUE = 93,
    STOWNBYNAME = 94,
    STOWNBYINDEX = 95,
    STOWNBYVALUE = 96,
    CALL0DYN = 97,
    CALL1DYN = 98,
    CALL2DYN = 99,
    CALL3DYN = 100,
    CALLIRANGEDYN = 101,
    CALLITHISRANGEDYN = 102,
    NEWOBJDYNRANGE = 103,
    GETNEXTPROPNAME = 104,
    RETURNUNDEFINED = 105,
    CREATEEMPTYOBJECT = 106,
    CREATEOBJECTHAVINGMETHOD = 107,
    CREATEOBJECTWITHBUFFER = 108,
    DEFINECLASSWITHBUFFER = 109,
    SETOBJECTWITHPROTO = 110,
    CREATEOBJECTWITHEXCLUDEDKEYS = 111,
    COPYDATAPROPERTIES = 112,
    DEFINEGETTERSETTERBYVALUE = 113,
    CREATEEMPTYARRAY = 114,
    CREATEARRAYWITHBUFFER = 115,
    STARRAYSPREAD = 116,
    THROWIFNOTOBJECT = 117,
    THROWPATTERNNONCOERCIBLE = 118,
    GETITERATOR = 119,
    GETITERATORNEXT = 120,
    CLOSEITERATOR = 121,
    SUPERCALL = 122,
    SUPERCALLSPREAD = 123,
    DEFINEMETHOD = 124,
    LDSUPERBYNAME = 125,
    STSUPERBYNAME = 126,
    LDSUPERBYVALUE = 127,
    STSUPERBYVALUE = 128,
    IMPORTMODULE = 129,
    LDMODVARBYNAME = 130,
    STMODULEVAR = 131,
    COPYMODULE = 132,
    THROWIFSUPERNOTCORRECTCALL = 133,
    LDHOMEOBJECT = 134,
    MOV = 135,
    MOV_64 = 136,
    MOV_OBJ = 137,
    MOVI = 138,
    MOVI_64 = 139,
    FMOVI_64 = 140,
    MOV_NULL = 141,
    LDA = 142,
    LDA_64 = 143,
    LDA_OBJ = 144,
    LDAI = 145,
    LDAI_64 = 146,
    FLDAI_64 = 147,
    LDA_STR = 148,
    LDA_TYPE = 149,
    LDA_NULL = 150,
    STA = 151,
    STA_64 = 152,
    STA_OBJ = 153,
    JMP = 154,
    CMP = 155,
    CMP_64 = 156,
    UCMP = 157,
    UCMP_64 = 158,
    FCMPL_64 = 159,
    FCMPG_64 = 160,
    CMP_OBJ = 161,
    JEQ_OBJ = 162,
    JNE_OBJ = 163,
    JEQZ_OBJ = 164,
    JNEZ_OBJ = 165,
    JEQZ = 166,
    JNEZ = 167,
    JLTZ = 168,
    JGTZ = 169,
    JLEZ = 170,
    JGEZ = 171,
    JEQ = 172,
    JNE = 173,
    JLT = 174,
    JGT = 175,
    JLE = 176,
    JGE = 177,
    FADD2_64 = 178,
    FSUB2_64 = 179,
    FMUL2_64 = 180,
    FDIV2_64 = 181,
    FMOD2_64 = 182,
    ADD2 = 183,
    ADD2_64 = 184,
    SUB2 = 185,
    SUB2_64 = 186,
    MUL2 = 187,
    MUL2_64 = 188,
    AND2 = 189,
    AND2_64 = 190,
    OR2 = 191,
    OR2_64 = 192,
    XOR2 = 193,
    XOR2_64 = 194,
    SHL2 = 195,
    SHL2_64 = 196,
    SHR2 = 197,
    SHR2_64 = 198,
    ASHR2 = 199,
    ASHR2_64 = 200,
    DIV2 = 201,
    DIV2_64 = 202,
    MOD2 = 203,
    MOD2_64 = 204,
    DIVU2 = 205,
    DIVU2_64 = 206,
    MODU2 = 207,
    MODU2_64 = 208,
    ADD = 209,
    SUB = 210,
    MUL = 211,
    AND = 212,
    OR = 213,
    XOR = 214,
    SHL = 215,
    SHR = 216,
    ASHR = 217,
    DIV = 218,
    MOD = 219,
    ADDI = 220,
    SUBI = 221,
    MULI = 222,
    ANDI = 223,
    ORI = 224,
    XORI = 225,
    SHLI = 226,
    SHRI = 227,
    ASHRI = 228,
    DIVI = 229,
    MODI = 230,
    FNEG_64 = 231,
    NEG = 232,
    NEG_64 = 233,
    NOT = 234,
    NOT_64 = 235,
    INC = 236,
    DEC = 237,
    INCI = 238,
    I32TOF64 = 239,
    U32TOF64 = 240,
    I64TOF64 = 241,
    U64TOF64 = 242,
    F64TOI32 = 243,
    F64TOI64 = 244,
    F64TOU32 = 245,
    F64TOU64 = 246,
    I32TOI64 = 247,
    I64TOI32 = 248,
    U32TOI64 = 249,
    LDARR_8 = 250,
    LDARRU_8 = 251,
    LDARR_16 = 252,
    LDARRU_16 = 253,
    LDARR = 254,
    LDARR_64 = 255,
    FLDARR_32 = 256,
    FLDARR_64 = 257,
    LDARR_OBJ = 258,
    STARR_8 = 259,
    STARR_16 = 260,
    STARR = 261,
    STARR_64 = 262,
    FSTARR_32 = 263,
    FSTARR_64 = 264,
    STARR_OBJ = 265,
    LENARR = 266,
    NEWARR = 267,
    NEWOBJ = 268,
    INITOBJ_SHORT = 269,
    INITOBJ = 270,
    INITOBJ_RANGE = 271,
    LDOBJ = 272,
    LDOBJ_64 = 273,
    LDOBJ_OBJ = 274,
    LDOBJ_V = 275,
    LDOBJ_V_64 = 276,
    LDOBJ_V_OBJ = 277,
    STOBJ = 278,
    STOBJ_64 = 279,
    STOBJ_OBJ = 280,
    STOBJ_V = 281,
    STOBJ_V_64 = 282,
    STOBJ_V_OBJ = 283,
    LDSTATIC = 284,
    LDSTATIC_64 = 285,
    LDSTATIC_OBJ = 286,
    STSTATIC = 287,
    STSTATIC_64 = 288,
    STSTATIC_OBJ = 289,
    RETURN = 290,
    RETURN_64 = 291,
    RETURN_OBJ = 292,
    RETURN_VOID = 293,
    THROW = 294,
    CHECKCAST = 295,
    ISINSTANCE = 296,
    CALL_SHORT = 297,
    CALL = 298,
    CALL_RANGE = 299,
    CALL_VIRT_SHORT = 300,
    CALL_VIRT = 301,
    CALL_VIRT_RANGE = 302,
    CALL_DYN_SHORT = 303,
    CALL_DYN = 304,
    CALL_DYN_RANGE = 305,
    MOV_DYN = 306,
    LDA_DYN = 307,
    STA_DYN = 308,
    LDAI_DYN = 309,
    FLDAI_DYN = 310,
    RETURN_DYN = 311,
    CALLI_DYN_SHORT = 312,
    CALLI_DYN = 313,
    CALLI_DYN_RANGE = 314,
    BUILTIN_ACC = 315,
    BUILTIN_BIN2 = 316,
    BUILTIN_TERN3 = 317,
    BUILTIN_QUATERN4 = 318,
    BUILTIN_QUIN5 = 319,
    BUILTIN_R2I = 320,
    BUILTIN_R3I = 321,
    BUILTIN_R4I = 322,
    BUILTIN_ID = 323,
    BUILTIN_MIDR = 324,
    BUILTIN_IDI = 325,
    BUILTIN_IDR3I = 326,
    BUILTIN_IDR4I = 327,
    BUILTIN_I2R3 = 328,
    BUILTIN_I2R4 = 329,
    BUILTIN_IMM = 330,
    BUILTIN_IMR2 = 331,
    BUILTIN_IDR3 = 332,
    BUILTIN_IDR4 = 333,
    BUILTIN_IDR6 = 334
}
export declare function getInstructionSize(opcode: IRNodeKind): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare enum ResultType {
    None = 0,
    Unknown = 1,
    Int = 2,
    Long = 3,
    Float = 4,
    Obj = 5,
    Boolean = 6
}
export declare enum ResultDst {
    None = 0,
    Acc = 1,
    VReg = 2
}
export declare enum BuiltIns {
    NaN = 0,
    Infinity = 1,
    globalThis = 2,
    undefined = 3,
    Boolean = 4,
    Number = 5,
    String = 6,
    BigInt = 7,
    Symbol = 8,
    Null = 9,
    Object = 10,
    Function = 11,
    Global = 12,
    True = 13,
    False = 14,
    LexEnv = 15,
    MAX_BUILTIN = 16
}
export declare type OperandType = VReg | Imm | Label | string | number;
export declare enum OperandKind {
    SrcVReg = 0,
    DstVReg = 1,
    SrcDstVReg = 2,
    Imm = 3,
    Id = 4,
    StringId = 5,
    Label = 6
}
export declare namespace OperandKind {
}
export declare class FormatItem {
    readonly kind: OperandKind;
    readonly bitwidth: number;
    constructor(kind: OperandKind, bitwidth: number);
}
export declare type Format = FormatItem[];
export declare abstract class IRNode {
    readonly kind: IRNodeKind;
    readonly mnemonic: string;
    readonly operands: OperandType[];
    readonly formats: Format[];
    private node;
    constructor(kind: IRNodeKind, mnemonic: string, operands: OperandType[], formats: Format[]);
    debugPosInfo: DebugPosInfo;
    abstract resultType(): ResultType;
    abstract resultIn(): ResultDst;
    toString(): string;
    setNode(node: ts.Node | NodeKind): void;
    getNodeName(): string;
}
export declare abstract class Intrinsic extends IRNode {
    readonly kind: IRNodeKind;
    readonly mnemonic: string;
    readonly operands: OperandType[];
    readonly formats: Format[];
    slotSize: number;
    constructor(kind: IRNodeKind, mnemonic: string, operands: OperandType[], formats: Format[]);
    toString(): string;
    hasIC(): boolean;
    updateICOffset(base: number): number;
    validateIC(offset: number, slotSize: number): number;
}
export declare class VReg {
    private static global_id;
    readonly id: number;
    num: number;
    private stacktrace;
    toString(): string;
    constructor();
    getStackTrace(): (undefined | string);
    setStackTrace(stack?: null): void;
}
export declare class Imm extends IRNode {
    private type;
    readonly value: number;
    constructor(type: ResultType, value: number);
    static zero(): Imm;
    static one(): Imm;
    resultType(): ResultType;
    resultIn(): ResultDst;
    toString(): string;
}
export declare class Label extends IRNode {
    private static global_id;
    readonly id: number;
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
    toString(): string;
}
export declare class DebugInsPlaceHolder extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdNaN extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdInfinity extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdGlobalThis extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdUndefined extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdBoolean extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdNumber extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdString extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdBigInt extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdSymbol extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdRegExp extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdNull extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdObject extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdFunction extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdGlobal extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdTrue extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdFalse extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Add2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sub2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mul2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Div2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mod2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EqDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NotEqDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LessDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LessEqDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class GreaterDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class GreaterEqDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shl2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shr2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashr2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class And2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Or2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xor2Dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
* Tonumber instruction convert object to number
*/
export declare class Tonumber extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NegDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NotDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class IncDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class DecDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ThrowDyn extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction removes the property from Object
 * v1 stores the obj and v2 stores the prop before calling it
 * the result is a boolean value which stored in acc in the end
 */
export declare class DelObjProp extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction is used to hoist the global variables
 */
export declare class DefineGlobalVar extends Intrinsic {
    constructor(id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction is used to hoist the global variables
 */
export declare class DefineLocalVar extends Intrinsic {
    constructor(vreg: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction is defined the arrow function
 */
export declare class DefineNCFuncDyn extends Intrinsic {
    constructor(id: string, env: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction calls the runtime to create a Function
 * instance and bind it with code. The resulting instance will
 * be stored into the accumulator.
 */
export declare class DefinefuncDyn extends Intrinsic {
    constructor(id: string, env: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The following two instructions implement strict comparison operator '===' and '!=='
 * It writes '1' to the accumulator if the it is true.
 * In another case it writes '0' to the accumulator.
 */
export declare class StrictEqDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StrictNotEqDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ExpDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction returns the type of object.
 * return string value:"undefined","boolean","number","bigint", "string"
 * "symbol","function","object"
 */
export declare class TypeOfDyn extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 *The instruction calls a function getPropertiesIterator() to transform
 *the obj(in Acc) to an iterator that has the next() method to iterate the obj .
 */
export declare class GetPropertiesIterator extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction returns true if the specified property is in the specified object or its prototype chain
 */
export declare class IsInDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
 */
export declare class InstanceOfDyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Debugger extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction is used, when the input parameters of the Call operation are contained the SpreadElement.
 */
export declare class CallSpread extends Intrinsic {
    constructor(vs1: VReg, vs2: VReg, v3: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction is used, when the input parameters of the New operation are contained the SpreadElement.
 */
export declare class NewobjSpread extends Intrinsic {
    constructor(vs1: VReg, vs2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction is used, create one lexical environment, return one lexical env to acc.
 */
export declare class NewLexEnv extends Intrinsic {
    constructor(numVars: VReg, funcObj: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction is used, load env of current execute context to acc.
 */
export declare class LdLexEnv extends Intrinsic {
    constructor(funcObj: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction is used, store one variable to lexenv, no return.
 */
export declare class StLexVar extends Intrinsic {
    constructor(env: VReg, scopeId: Imm, slotId: Imm, value: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction is used to get unmapped arguments of the current function.
 */
export declare class GetUnmappedArgs extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The instruction is used, store one variable ref to lexenv.
 */
export declare class LdLexVar extends Intrinsic {
    constructor(env: VReg, scopeId: Imm, slotId: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare abstract class VirtualIns extends IRNode {
    readonly mnemonic: string;
    tempRegs: VReg[];
    constructor(mnemonic: string);
    abstract expand(pg: PandaGen): IRNode[];
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Toboolean extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * the pseudo instruction throw reference error if vs1 == hole
 */
export declare class ThrowUndefinedIfHole extends Intrinsic {
    constructor(vs1: VReg, vs2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ThrowConstAssignment extends Intrinsic {
    constructor(vs1: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ThrowThrowNotExists extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction calls the runtime to create a GeneratorFunction instance.
 * instance and bind it with code. The resulting instance will
 * be stored into the accumulator.
 */
export declare class DefineGeneratorfuncDyn extends Intrinsic {
    constructor(id: string, env: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction calls the runtime to create a GeneratorObj instance.
 */
export declare class CreateGeneratorObjDyn extends Intrinsic {
    constructor(funcObj: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction calls the runtime to create a iterator instance instance by input para.
 */
export declare class CreateIterResultObjectDyn extends Intrinsic {
    constructor(value: VReg, done: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction suspends execution of current generator function and returns the value yeild expression created.
 */
export declare class SuspendGeneratorDyn extends Intrinsic {
    constructor(genObj: VReg, iterRslt: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction resumes execution of current generator function when the consumer called .next.
 */
export declare class ResumeGeneratorDyn extends Intrinsic {
    constructor(genObj: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction get resume mode, 0:return, 1:throw, 2: next.
 */
export declare class GetResumeModeDyn extends Intrinsic {
    constructor(genObj: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction defines the async function and returns the AsyncFunction instance.
 */
export declare class DefineAsyncFuncDyn extends Intrinsic {
    constructor(id: string, env: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction inits execution environment and returns the AsyncFunctionObj instance.
 */
export declare class AsyncFunctionEnterDyn extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction waits the state of promise which the await expression returns
 * is changed to fulfilled.
 */
export declare class AsyncFunctionAwaitUncaughtDyn extends Intrinsic {
    constructor(asynFuncObj: VReg, value: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction returns a resovled promise instance.
 */
export declare class AsyncFunctionResolveDyn extends Intrinsic {
    constructor(asynFuncObj: VReg, value: VReg, canSuspend: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction returns a rejected promise instance.
 */
export declare class AsyncFunctionRejectDyn extends Intrinsic {
    constructor(asynFuncObj: VReg, value: VReg, canSuspend: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * This pseudo instruction load hole to acc.
 */
export declare class LdHole extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction returns a template object.
 */
export declare class GetTemplateObject extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
/**
 * The pseudo instruction will create an Array by rest parameters.
 */
export declare class CopyRestArgs extends Intrinsic {
    constructor(index: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class TryLdGlobalByName extends Intrinsic {
    constructor(name: string);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class TryStGlobalByName extends Intrinsic {
    constructor(key: string);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class TryLdGlobalByValue extends Intrinsic {
    constructor(key: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class TryStGlobalByValue extends Intrinsic {
    constructor(key: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdGlobalVar extends Intrinsic {
    constructor(key: string);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StGlobalVar extends Intrinsic {
    constructor(key: string);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdObjByName extends Intrinsic {
    constructor(key: string, obj: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StObjByName extends Intrinsic {
    constructor(key: string, obj: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdObjByIndex extends Intrinsic {
    constructor(obj: VReg, index: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StObjByIndex extends Intrinsic {
    constructor(obj: VReg, index: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdObjByValue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StObjByValue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StOwnByName extends Intrinsic {
    constructor(key: string, obj: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StOwnByIndex extends Intrinsic {
    constructor(obj: VReg, index: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StOwnByValue extends Intrinsic {
    constructor(obj: VReg, value: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Call0Dyn extends Intrinsic {
    constructor(func: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Call1Dyn extends Intrinsic {
    constructor(func: VReg, arg: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Call2Dyn extends Intrinsic {
    constructor(func: VReg, arg0: VReg, arg1: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Call3Dyn extends Intrinsic {
    constructor(func: VReg, arg0: VReg, arg1: VReg, arg2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliRangeDyn extends Intrinsic {
    constructor(length: Imm, args: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliThisRangeDyn extends Intrinsic {
    constructor(length: Imm, args: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NewObjDynRange extends Intrinsic {
    constructor(argNum: Imm, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class GetNextPropName extends Intrinsic {
    constructor(iter: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnUndefined extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CreateEmptyObject extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CreateObjectHavingMethod extends Intrinsic {
    constructor(index: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CreateObjectWithBuffer extends Intrinsic {
    constructor(index: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class SetObjectWithProto extends Intrinsic {
    constructor(proto: VReg, obj: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CopyDataProperties extends Intrinsic {
    constructor(dstObj: VReg, srcObj: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class DefineGetterSetterByValue extends Intrinsic {
    constructor(obj: VReg, name: VReg, getter: VReg, setter: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CreateEmptyArray extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CreateArrayWithBuffer extends Intrinsic {
    constructor(index: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StArraySpread extends Intrinsic {
    constructor(array: VReg, index: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ThrowIfNotObject extends Intrinsic {
    constructor(value: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CreateObjectWithExcludedKeys extends Intrinsic {
    constructor(index: Imm, obj: VReg, args: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ThrowPatternNonCoercible extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class GetIterator extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class GetIteratorNext extends Intrinsic {
    constructor(iter: VReg, nextMethod: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class DefineClassWithBuffer extends Intrinsic {
    constructor(id: string, idx: Imm, env: VReg, base: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class SuperCall extends Intrinsic {
    constructor(num: Imm, start: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class SuperCallSpread extends Intrinsic {
    constructor(vs: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CloseIterator extends Intrinsic {
    constructor(iter: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class DefineMethod extends Intrinsic {
    constructor(id: string, realname: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdSuperByName extends Intrinsic {
    constructor(key: string, obj: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StSuperByName extends Intrinsic {
    constructor(key: string, obj: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdSuperByValue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StSuperByValue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ImportModule extends Intrinsic {
    constructor(name: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdModvarByName extends Intrinsic {
    constructor(varName: string, module: VReg);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StModuleVar extends Intrinsic {
    constructor(varName: string);
    updateICOffset(base: number): number;
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CopyModule extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ThrowIfSuperNotCorrectCall extends Intrinsic {
    constructor(num: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdHomeObject extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mov extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovObj extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Movi extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MoviWide extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FmoviWide extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovNull extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Lda extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaObj extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldai extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaiWide extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FldaiWide extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaStr extends IRNode {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaType extends IRNode {
    constructor(type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaNull extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sta extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StaWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StaObj extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Jmp extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Cmp extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CmpWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ucmp extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class UcmpWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FcmplWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FcmpgWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CmpObj extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class JeqObj extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class JneObj extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class JeqzObj extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class JnezObj extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jeqz extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jnez extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jltz extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jgtz extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jlez extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jgez extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jeq extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jne extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jlt extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jgt extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jle extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jge extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Fadd2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fsub2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fmul2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fdiv2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fmod2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Add2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Add2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sub2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sub2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mul2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mul2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class And2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class And2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Or2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Or2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xor2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xor2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shl2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shl2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shr2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shr2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashr2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashr2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Div2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Div2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mod2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mod2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Divu2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Divu2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Modu2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Modu2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Add extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sub extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mul extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class And extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Or extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xor extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shl extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shr extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashr extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Div extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mod extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Addi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Subi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Muli extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Andi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ori extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xori extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shli extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shri extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashri extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Divi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Modi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FnegWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Neg extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NegWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Not extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NotWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Inc extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Dec extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Inci extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I64tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U64tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64toi32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64toi64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64tou32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64tou64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32toi64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I64toi32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32toi64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarr8 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarru8 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarr16 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarru16 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarr extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdarrWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fldarr32 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FldarrWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdarrObj extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Starr8 extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Starr16 extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Starr extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StarrWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fstarr32 extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FstarrWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StarrObj extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Lenarr extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Newarr extends IRNode {
    constructor(v: VReg, type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Newobj extends IRNode {
    constructor(type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class InitobjShort extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Initobj extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg, v3: VReg, v4: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class InitobjRange extends IRNode {
    constructor(method_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldobj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjWide extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjObj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjV extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjVWide extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjVObj extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Stobj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjWide extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjObj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjV extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjVWide extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjVObj extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldstatic extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdstaticWide extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdstaticObj extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ststatic extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StstaticWide extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StstaticObj extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Return extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnObj extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnVoid extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Throw extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Checkcast extends IRNode {
    constructor(type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Isinstance extends IRNode {
    constructor(type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallShort extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Call extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallRange extends IRNode {
    constructor(method_id: string, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirtShort extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirt extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirtRange extends IRNode {
    constructor(method_id: string, v?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallDynShort extends IRNode {
    constructor(callsite_id: string, v1?: VReg, v2?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallDyn extends IRNode {
    constructor(callsite_id: string, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallDynRange extends IRNode {
    constructor(callsite_id: string, v?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovDyn extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaDyn extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StaDyn extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaiDyn extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FldaiDyn extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnDyn extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliDynShort extends IRNode {
    constructor(imm: Imm, v1?: VReg, v2?: VReg, v3?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliDyn extends IRNode {
    constructor(imm: Imm, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg, v5?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliDynRange extends IRNode {
    constructor(imm: Imm, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinAcc extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinBin2 extends IRNode {
    constructor(imm: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinTern3 extends IRNode {
    constructor(imm: Imm, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinQuatern4 extends IRNode {
    constructor(imm: Imm, v1: VReg, v2: VReg, v3: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinQuin5 extends IRNode {
    constructor(imm: Imm, v1: VReg, v2: VReg, v3: VReg, v4: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinR2i extends IRNode {
    constructor(imm1: Imm, imm2: Imm, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinR3i extends IRNode {
    constructor(imm1: Imm, imm2: Imm, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinR4i extends IRNode {
    constructor(imm1: Imm, imm2: Imm, v1: VReg, v2: VReg, v3: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinId extends IRNode {
    constructor(imm: Imm, string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinMidr extends IRNode {
    constructor(imm: Imm, method_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinIdi extends IRNode {
    constructor(imm1: Imm, string_id: string, imm2: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinIdr3i extends IRNode {
    constructor(imm1: Imm, string_id: string, imm2: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinIdr4i extends IRNode {
    constructor(imm1: Imm, string_id: string, imm2: Imm, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinI2r3 extends IRNode {
    constructor(imm1: Imm, imm2: Imm, imm3: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinI2r4 extends IRNode {
    constructor(imm1: Imm, imm2: Imm, imm3: Imm, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinImm extends IRNode {
    constructor(imm1: Imm, imm2: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinImr2 extends IRNode {
    constructor(imm1: Imm, method_id: string, imm2: Imm, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinIdr3 extends IRNode {
    constructor(imm: Imm, v1: VReg, method_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinIdr4 extends IRNode {
    constructor(imm: Imm, v1: VReg, v2: VReg, method_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class BuiltinIdr6 extends IRNode {
    constructor(imm: Imm, v1: VReg, v2: VReg, v3: VReg, v4: VReg, method_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
//# sourceMappingURL=irnodes.d.ts.map