import { Intrinsic, IRNode, VReg } from "./irnodes";
import { PandaGen } from "./pandagen";
import { Pass } from "./pass";
export declare class IntrinsicExpanderInternal {
    private temps;
    getTemp(): VReg;
    freeTemps(temps: VReg[]): void;
    intrinsicDeclRec(ins: Intrinsic): void;
    expandInstruction(ins: Intrinsic): [IRNode[], VReg[]];
    run(pg: PandaGen): void;
}
export declare class IntrinsicExpander implements Pass {
    run(pg: PandaGen): void;
}
//# sourceMappingURL=intrinsicExpander.d.ts.map