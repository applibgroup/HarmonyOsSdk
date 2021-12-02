import * as ts from "typescript";
import { PandaGen } from "./pandagen";
import { Recorder } from "./recorder";
import { FuncDecl, Scope, VarDecl } from "./scope";
export declare function hoisting(rootNode: ts.SourceFile | ts.FunctionLikeDeclaration, pandaGen: PandaGen, recorder: Recorder): void;
export declare function hoistVar(decl: VarDecl, scope: Scope, pandaGen: PandaGen): void;
export declare function hoistFunction(decl: FuncDecl, scope: Scope, pandaGen: PandaGen): void;
export declare function hoistFunctionInBlock(scope: Scope, pandaGen: PandaGen, strictMode: boolean): void;
//# sourceMappingURL=hoisting.d.ts.map