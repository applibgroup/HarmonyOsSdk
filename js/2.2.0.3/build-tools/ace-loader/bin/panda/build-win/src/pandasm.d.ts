import { DebugPosInfo, VariableDebugInfo } from "./debuginfo";
import { LiteralBuffer } from "./base/literal";
export declare class Metadata {
    attribute: string;
    constructor(attribute?: string);
}
export declare class Signature {
    retType: string;
    params: Array<string>;
    constructor(retType: string, params?: Array<string>);
}
export declare class Ins {
    opcode: string;
    regs: Array<number>;
    ids: Array<string>;
    imms: Array<number>;
    label: string;
    debug_pos_info: DebugPosInfo;
    constructor(opcode: string, regs: number[] | undefined, ids: string[] | undefined, imms: number[] | undefined, label: string | undefined, debug_pos_info: DebugPosInfo);
}
export declare class Function {
    name: string;
    signature: Signature;
    regs_num: number;
    ins: Array<Ins>;
    labels: Array<string>;
    metadata: Metadata;
    catchTables: Array<CatchTable>;
    variables: Array<VariableDebugInfo>;
    sourceFile: string;
    sourceCode: string;
    icSize: number;
    parameterLength: number;
    funcName: string;
    constructor(name: string, signature: Signature, regs_num?: number, ins?: Array<Ins>, labels?: Array<string>, variables?: Array<VariableDebugInfo>, sourceFile?: string, sourceCode?: string, icSize?: number, parameterLength?: number, funcName?: string);
}
export declare class Record {
    name: string;
    whole_line: string;
    bound_left: number;
    bound_right: number;
    line_number: number;
    metadata: Metadata;
    constructor(name: string, whole_line: string, bound_left: number, bound_right: number, line_number: number);
}
export declare class Program {
    functions: Array<Function>;
    records: Array<Record>;
    strings: Set<string>;
    strings_arr: Array<string>;
    literalArrays: Array<LiteralBuffer>;
    module_mode: boolean;
    debug_mode: boolean;
    log_enabled: boolean;
    opt_level: number;
    opt_log_level: string;
    constructor();
    finalize(): void;
}
export declare class CatchTable {
    tryBeginLabel: string;
    tryEndLabel: string;
    catchBeginLabel: string;
    constructor(tryBeginLabel: string, tryEndLabel: string, catchBeginLabel: string);
}
export interface Emmiter {
    generate_program: (filename: string, program: Program) => string;
}
//# sourceMappingURL=pandasm.d.ts.map