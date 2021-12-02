import * as ts from "typescript";
import { VReg } from "../irnodes";
import { PandaGen } from "../pandagen";
export declare class Iterator {
    private iterRecord;
    private iterDone;
    private iterValue;
    private pandaGen;
    private node;
    constructor(iterRecord: {
        iterator: VReg;
        nextMethod: VReg;
    }, iterDone: VReg, iterValue: VReg, pandaGen: PandaGen, node: ts.Node);
    getIterator(): void;
    /**
     *  iterResult = nextMethod.call(iterator);
     *  if (!isObject(iterResult)) {
     *      throw TypeError
     *  }
     * */
    callNext(iterResult: VReg): void;
    iteratorComplete(iterResult: VReg): void;
    iteratorValue(iterResult: VReg): void;
    close(): void;
    getCurrentValue(): VReg;
    getCurrrentDone(): VReg;
}
//# sourceMappingURL=iterator.d.ts.map