import * as ts from "typescript";
import { Compiler } from "../compiler";
import { VReg } from "../irnodes";
export declare function compileArrayLiteralExpression(compiler: Compiler, node: ts.ArrayLiteralExpression): void;
export declare function createArrayFromElements(node: ts.Node, compiler: Compiler, elements: ts.NodeArray<ts.Expression>, arrayObj: VReg): void;
//# sourceMappingURL=arrayLiteralExpression.d.ts.map