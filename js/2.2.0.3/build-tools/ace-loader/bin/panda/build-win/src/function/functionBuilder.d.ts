import * as ts from "typescript";
import { GeneratorFunctionBuilder } from "./generatorFunctionBuilder";
import { AsyncFunctionBuilder } from "./asyncFunctionBuilder";
export declare type FunctionBuilderType = AsyncFunctionBuilder | GeneratorFunctionBuilder | FunctionBuilder;
export declare class FunctionBuilder {
    prepare(node: ts.Node): void;
    cleanUp(node: ts.Node): void;
}
//# sourceMappingURL=functionBuilder.d.ts.map