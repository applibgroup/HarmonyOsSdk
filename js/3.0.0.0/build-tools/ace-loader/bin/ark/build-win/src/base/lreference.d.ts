import { PandaGen } from "src/pandagen";
import * as ts from "typescript";
import { Compiler } from "../compiler";
import { VReg } from "../irnodes";
import { Scope } from "../scope";
import { Variable } from "../variable";
declare enum ReferenceKind {
    MemberAccess = 0,
    LocalOrGlobal = 1,
    Destructuring = 2
}
export declare class LReference {
    private node;
    private compiler;
    private refKind;
    private isDeclaration;
    private obj;
    private prop;
    private propLiteral;
    readonly variable: {
        scope: Scope | undefined;
        level: number;
        v: Variable | undefined;
    } | undefined;
    private destructuringTarget;
    constructor(node: ts.Node, compiler: Compiler, isDeclaration: boolean, refKind: ReferenceKind, variable: {
        scope: Scope | undefined;
        level: number;
        v: Variable | undefined;
    } | undefined);
    getValue(): void;
    setValue(): void;
    setObjectAndProperty(pandaGen: PandaGen, obj: VReg, prop: VReg | number | string): void;
    static generateLReference(compiler: Compiler, node: ts.Node, isDeclaration: boolean): LReference;
}
export {};
//# sourceMappingURL=lreference.d.ts.map