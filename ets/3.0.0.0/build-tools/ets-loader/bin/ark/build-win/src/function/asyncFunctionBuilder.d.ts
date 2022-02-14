import ts from "typescript";
import { NodeKind } from "../debuginfo";
import { VReg } from "../irnodes";
import { PandaGen } from "../pandagen";
/**
 * async function foo() {
 *     await 'promise obj';
 * }
 */
export declare class AsyncFunctionBuilder {
    private pandaGen;
    private beginLabel;
    private endLabel;
    private asyncObj;
    private retVal;
    constructor(pandaGen: PandaGen);
    prepare(node: ts.Node): void;
    await(node: ts.Node, value: VReg): void;
    private handleMode;
    resolve(node: ts.Node | NodeKind, value: VReg): void;
    cleanUp(node: ts.Node): void;
}
//# sourceMappingURL=asyncFunctionBuilder.d.ts.map