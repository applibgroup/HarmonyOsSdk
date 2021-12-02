import * as ts from "typescript";
import { Compiler } from "src/compiler";
import { VReg } from "../irnodes";
import { PandaGen } from "src/pandagen";
export declare enum IteratorType {
    Normal = 0,
    Async = 1
}
export declare class IteratorRecord {
    private type;
    private object;
    private nextMethod;
    constructor(object: VReg, nextMethod: VReg, type?: IteratorType);
    getType(): IteratorType;
    getObject(): VReg;
    getNextMethod(): VReg;
}
export declare function compileForOfStatement(stmt: ts.ForOfStatement, compiler: Compiler): void;
export declare function getIteratorRecord(pandagen: PandaGen, node: ts.Node, nextMethod: VReg, object: VReg, type: IteratorType): IteratorRecord;
//# sourceMappingURL=forOfStatement.d.ts.map