import ts from "typescript";
import { Compiler } from "./compiler";
import { NodeKind } from "./debuginfo";
import { IRNode } from "./irnodes";
import { PandaGen } from "./pandagen";
import { Scope } from "./scope";
import { Variable } from "./variable";
declare abstract class VariableAccessBase {
    variable: Variable;
    scope: Scope;
    level: number;
    constructor(scope: Scope, level: number, variable: Variable);
    isLexVar(): boolean;
    getEnvSlotOfVar(): number | undefined;
    abstract expand(pandaGen: PandaGen, compiler: Compiler): Array<IRNode>;
}
export declare class VariableAccessLoad extends VariableAccessBase {
    constructor(scope: Scope, level: number, variable: Variable);
    expand(pandaGen: PandaGen): Array<IRNode>;
    private loadLocalVar;
    private loadLexEnvVar;
}
export declare class VariableAcessStore extends VariableAccessBase {
    node: ts.Node | NodeKind;
    isDeclaration: boolean;
    constructor(scope: Scope, level: number, variable: Variable, isDeclaration: boolean, node: ts.Node | NodeKind);
    expand(pandaGen: PandaGen): Array<IRNode>;
    private storeLocalVar;
    private storeLexEnvVar;
}
export {};
//# sourceMappingURL=lexenv.d.ts.map