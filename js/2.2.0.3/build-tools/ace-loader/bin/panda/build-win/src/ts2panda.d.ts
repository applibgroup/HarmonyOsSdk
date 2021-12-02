import { PandaGen } from "./pandagen";
import { Ins, Program, Signature } from "./pandasm";
export declare class Ts2Panda {
    private labels;
    private pg;
    readonly labelPrefix = "LABEL_";
    readonly opcodePrefix = "panda::pandasm::Opcode::";
    static program: Program;
    constructor(pg: PandaGen);
    static dumpHeader(): void;
    getFuncSignature(): Signature;
    getFuncInsnsAndRegsNum(): {
        insns: Ins[];
        regsNum: number;
        labels: string[];
    };
    static dumpConstantPool(): void;
    dump(): void;
    static dumpToJsonFile(data: string, jsonFileName: string): void;
    static dumpToBinFile(filename: string): void;
}
//# sourceMappingURL=ts2panda.d.ts.map