import * as ts from "typescript";
import { DebugInsPlaceHolder } from "./irnodes";
import { LocalVariable, VarDeclarationKind, Variable } from "./variable";
export declare enum InitStatus {
    INITIALIZED = 0,
    UNINITIALIZED = 1
}
export declare abstract class Decl {
    name: string;
    node: ts.Node;
    constructor(name: string, node: ts.Node);
}
export declare class VarDecl extends Decl {
    constructor(varName: string, node: ts.Node);
}
export declare class LetDecl extends Decl {
    constructor(letName: string, node: ts.Node);
}
export declare class ConstDecl extends Decl {
    constructor(constName: string, node: ts.Node);
}
export declare class ModDecl extends Decl {
    constructor(localName: string, node: ts.Node);
}
export declare class FuncDecl extends Decl {
    readonly index: number;
    constructor(funcName: string, node: ts.Node, index: number);
}
export declare class ClassDecl extends Decl {
    readonly index: number;
    constructor(className: string, node: ts.Node, index: number);
}
export declare class CatchParameter extends Decl {
    constructor(CpName: string, node: ts.Node);
}
export declare class FunctionParameter extends Decl {
    constructor(FpName: string, node: ts.Node);
}
export declare abstract class Scope {
    protected debugTag: string;
    protected globals: Variable[];
    protected locals: Variable[];
    protected name2variable: Map<string, Variable>;
    protected decls: Decl[];
    protected parent: Scope | undefined;
    protected startIns: DebugInsPlaceHolder;
    protected endIns: DebugInsPlaceHolder;
    constructor();
    abstract add(name: string, declKind: VarDeclarationKind, status?: InitStatus): Variable | undefined;
    getName2variable(): Map<string, Variable>;
    getScopeStartIns(): DebugInsPlaceHolder;
    setScopeStartIns(startIns: DebugInsPlaceHolder): void;
    setScopeEndIns(endIns: DebugInsPlaceHolder): void;
    getScopeEndIns(): DebugInsPlaceHolder;
    setParent(parentScope: Scope | undefined): void;
    getParent(): Scope | undefined;
    getRootScope(): Scope;
    getNearestVariableScope(): VariableScope | undefined;
    getNthVariableScope(level: number): VariableScope | undefined;
    findLocal(name: string): Variable | undefined;
    find(name: string): {
        scope: Scope | undefined;
        level: number;
        v: Variable | undefined;
    };
    abstract setLexVar(v: Variable, srcScope: Scope): void;
    setDecls(decl: Decl): void;
    hasDecl(decl: Decl): boolean;
    getDecls(): Decl[];
}
export declare abstract class VariableScope extends Scope {
    protected startLexIdx: number;
    protected needCreateLexEnv: boolean;
    protected parameters: LocalVariable[];
    protected useArgs: boolean;
    protected node: ts.Node | undefined;
    protected parentVariableScope: VariableScope | null;
    protected childVariableScope: VariableScope[];
    getBindingNode(): ts.Node | undefined;
    setParentVariableScope(scope: VariableScope): void;
    getParentVariableScope(): VariableScope | null;
    getChildVariableScope(): VariableScope[];
    addChildVariableScope(scope: VariableScope): void;
    addParameter(name: string, declKind: VarDeclarationKind, argIdx: number): Variable | undefined;
    addFuncName(funcName: string): void;
    hasLexEnv(): boolean;
    pendingCreateEnv(): void;
    getNumLexEnv(): number;
    getParametersCount(): number;
    getParameters(): LocalVariable[];
    getLexVarIdx(): number;
    setLexVar(v: Variable, referenceScop: Scope): void;
    setUseArgs(value: boolean): void;
    getUseArgs(): boolean;
}
export declare class GlobalScope extends VariableScope {
    constructor(node?: ts.SourceFile);
    add(name: string, declKind: VarDeclarationKind, status?: InitStatus): Variable | undefined;
}
export declare class ModuleScope extends VariableScope {
    constructor(node?: ts.SourceFile | ts.ModuleBlock);
    add(name: string, declKind: VarDeclarationKind, status?: InitStatus): Variable | undefined;
}
export declare class FunctionScope extends VariableScope {
    private parameterLength;
    private funcName;
    constructor(parent?: Scope, node?: ts.FunctionLikeDeclaration);
    setParameterLength(length: number): void;
    getParameterLength(): number;
    setFuncName(name: string): void;
    getFuncName(): string;
    getParent(): Scope | undefined;
    add(name: string, declKind: VarDeclarationKind, status?: InitStatus): Variable | undefined;
}
export declare class LocalScope extends Scope {
    constructor(parent: Scope);
    setLexVar(v: Variable, srcScope: Scope): void;
    add(name: string, declKind: VarDeclarationKind, status?: InitStatus): Variable | undefined;
}
//# sourceMappingURL=scope.d.ts.map