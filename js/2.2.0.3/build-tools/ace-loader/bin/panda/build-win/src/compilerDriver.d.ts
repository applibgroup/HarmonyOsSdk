import * as ts from "typescript";
import { CompilerStatistics } from "./compilerStatistics";
import { PandaGen } from "./pandagen";
import { Pass } from "./pass";
import { GlobalScope, Scope, VariableScope } from "./scope";
export declare class PendingCompilationUnit {
    readonly decl: ts.FunctionLikeDeclaration;
    readonly scope: Scope;
    readonly internalName: string;
    constructor(decl: ts.FunctionLikeDeclaration, scope: Scope, internalName: string);
}
/**
 * The class which drives the compilation process.
 * It handles all dependencies and run passes.
 */
export declare class CompilerDriver {
    private passes;
    private compilationUnits;
    pendingCompilationUnits: PendingCompilationUnit[];
    private outputFileName;
    private functionId;
    private funcIdMap;
    private statistics;
    constructor(outputFileName: string);
    getStatistics(): CompilerStatistics;
    setCustomPasses(passes: Pass[]): void;
    addCompilationUnit(decl: ts.FunctionLikeDeclaration, scope: Scope): string;
    kind2String(kind: ts.SyntaxKind): string;
    getASTStatistics(node: ts.Node, statics: number[]): void;
    postOrderAnalysis(scope: GlobalScope): VariableScope[];
    compile(node: ts.SourceFile): void;
    private compileImpl;
    showStatistics(): void;
    getFuncId(node: ts.SourceFile | ts.FunctionLikeDeclaration | ts.ClassLikeDeclaration): number;
    /**
     * Internal name is used to indentify a function in panda file
     * Runtime uses this name to bind code and a Function object
     */
    getFuncInternalName(node: ts.SourceFile | ts.FunctionLikeDeclaration): string;
    getInternalNameForCtor(node: ts.ClassLikeDeclaration): string;
    writeBinaryFile(): void;
    dumpTs2Panda(filename: string): void;
    getCompilationUnits(): PandaGen[];
    private getParametersCount;
}
//# sourceMappingURL=compilerDriver.d.ts.map