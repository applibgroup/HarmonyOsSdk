import * as ts from "typescript";
import { Compiler } from "./compiler";
import { CompilerDriver } from "./compilerDriver";
import { PandaGen } from "./pandagen";
import { Recorder } from "./recorder";
import { FuncDecl, Scope, VarDecl } from "./scope";
export declare function hoisting(rootNode: ts.SourceFile | ts.FunctionLikeDeclaration, pandaGen: PandaGen, recorder: Recorder, compiler: Compiler): void;
export declare function hoistVar(decl: VarDecl, scope: Scope, pandaGen: PandaGen): void;
export declare function hoistFunction(decl: FuncDecl, scope: Scope, pandaGen: PandaGen, compiler: Compiler, compilerDriver: CompilerDriver): void;
export declare function hoistFunctionInBlock(scope: Scope, pandaGen: PandaGen, strictMode: boolean, compiler: Compiler): void;
//# sourceMappingURL=hoisting.d.ts.map