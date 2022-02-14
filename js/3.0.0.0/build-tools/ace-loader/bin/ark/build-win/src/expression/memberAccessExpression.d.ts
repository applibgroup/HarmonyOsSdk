import * as ts from "typescript";
import { Compiler } from "../compiler";
import { VReg } from "../irnodes";
export declare function compileMemberAccessExpression(node: ts.ElementAccessExpression | ts.PropertyAccessExpression, compiler: Compiler): void;
export declare function getObjAndProp(node: ts.ElementAccessExpression | ts.PropertyAccessExpression, objReg: VReg, propReg: VReg, compiler: Compiler): {
    obj: VReg;
    prop: string | number | VReg;
};
export declare function isValidIndex(num: number): boolean;
//# sourceMappingURL=memberAccessExpression.d.ts.map