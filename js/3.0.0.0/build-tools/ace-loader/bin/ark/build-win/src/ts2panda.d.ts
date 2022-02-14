import { PandaGen } from "./pandagen";
import { Ins, Signature } from "./pandasm";
export declare class Ts2Panda {
    static strings: Set<string>;
    static labelPrefix: string;
    static jsonString: string;
    constructor();
    static getFuncSignature(pg: PandaGen): Signature;
    static getFuncInsnsAndRegsNum(pg: PandaGen): {
        insns: Ins[];
        regsNum: number;
        labels: string[];
    };
    static dumpStringsArray(ts2abc: any): void;
    static dumpConstantPool(ts2abc: any): void;
    static dumpCmdOptions(ts2abc: any): void;
    static dumpPandaGen(pg: PandaGen, ts2abc: any): void;
    static clearDumpData(): void;
}
//# sourceMappingURL=ts2panda.d.ts.map