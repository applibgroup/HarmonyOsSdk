import { Label } from "./irnodes";
import { PandaGen } from "./pandagen";
export declare class IntrinsicInfo {
    readonly intrinsicName: string;
    readonly argsNum: number;
    readonly returnType: string;
    constructor(intrinsicName: string, argsNum: number, returnType: string);
}
export declare class AssemblyDumper {
    private labels;
    private labelId;
    private pg;
    readonly labelPrefix = "LABEL_";
    static intrinsicRec: Map<string, IntrinsicInfo>;
    private output;
    constructor(pg: PandaGen);
    static writeLanguageTag(out: any): void;
    writeFunctionHeader(): void;
    writeFunctionBody(): void;
    writeFunctionTail(): void;
    writeFunctionCatchTable(): void;
    getLabelName(label: Label): string;
    writeLabel(label: Label): void;
    dump(): void;
    static dumpHeader(): void;
}
//# sourceMappingURL=assemblyDumper.d.ts.map