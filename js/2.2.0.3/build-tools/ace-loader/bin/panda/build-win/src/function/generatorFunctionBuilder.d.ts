import ts from "typescript";
import { Compiler } from "../compiler";
import { VReg } from "../irnodes";
import { PandaGen } from "../pandagen";
import { Recorder } from "../recorder";
/**
 * function *foo() {
 *     yield 'a'
 * }
*/
export declare class GeneratorFunctionBuilder {
    private pandaGen;
    private compiler;
    private genObj;
    private retVal;
    constructor(pandaGen: PandaGen, compiler: Compiler);
    prepare(node: ts.Node, recorder: Recorder): void;
    yield(node: ts.Node, value: VReg): void;
    yieldStar(expr: ts.YieldExpression): void;
    private handleMode;
    cleanUp(node: ts.Node): void;
}
//# sourceMappingURL=generatorFunctionBuilder.d.ts.map