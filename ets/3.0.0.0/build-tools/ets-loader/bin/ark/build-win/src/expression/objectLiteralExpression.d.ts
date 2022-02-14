import * as ts from "typescript";
import { Compiler } from "src/compiler";
import { PandaGen } from "../pandagen";
import { VReg } from "../irnodes";
export declare function compileObjectLiteralExpression(compiler: Compiler, expr: ts.ObjectLiteralExpression): void;
export declare function createMethodOrAccessor(pandaGen: PandaGen, compiler: Compiler, objReg: VReg, func: ts.MethodDeclaration | ts.GetAccessorDeclaration | ts.SetAccessorDeclaration | ts.ConstructorDeclaration): void;
//# sourceMappingURL=objectLiteralExpression.d.ts.map