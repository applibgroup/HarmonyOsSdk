import * as ts from "typescript";
import { Compiler } from "../compiler";
import { VReg } from "../irnodes";
export declare function compileCallExpression(expr: ts.CallExpression, compiler: Compiler, inTailPos?: boolean): void;
export declare function getHiddenParameters(expr: ts.Expression, compiler: Compiler): {
    arguments: VReg[];
    passThis: boolean;
};
export declare function emitCall(expr: ts.CallExpression, args: VReg[], passThis: boolean, compiler: Compiler): void;
//# sourceMappingURL=callExpression.d.ts.map