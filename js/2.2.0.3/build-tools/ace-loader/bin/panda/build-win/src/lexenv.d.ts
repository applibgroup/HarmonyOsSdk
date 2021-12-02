import { IRNode, VirtualIns } from "./irnodes";
import { PandaGen } from "./pandagen";
import { Scope } from "./scope";
import { Variable } from "./variable";
export declare class VirtualLoadVar extends VirtualIns {
    variable: Variable;
    level: number;
    scope: Scope;
    constructor(scope: Scope, level: number, v: Variable);
    expand(pg: PandaGen): IRNode[];
    private expandNormalVar;
    private expandLexVar;
}
export declare class VirtualStoreVar extends VirtualIns {
    variable: Variable;
    level: number;
    scope: Scope;
    isDeclaration: boolean;
    constructor(scope: Scope, level: number, v: Variable, isDeclaration: boolean);
    private expandNormalVar;
    private expandStoreLexVar;
    expand(pg: PandaGen): IRNode[];
}
//# sourceMappingURL=lexenv.d.ts.map