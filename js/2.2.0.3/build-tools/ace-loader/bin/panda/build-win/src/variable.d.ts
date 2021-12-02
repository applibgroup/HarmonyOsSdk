import { VReg } from "./irnodes";
import { InitStatus, VariableScope } from "./scope";
export declare enum VarDeclarationKind {
    NONE = 0,
    LET = 1,
    CONST = 2,
    VAR = 3,
    FUNCTION = 4,
    MODULE = 5,
    CLASS = 6
}
export declare abstract class Variable {
    readonly declKind: VarDeclarationKind;
    private vreg;
    private name;
    isLexVar: boolean;
    idxLex: number;
    constructor(declKind: VarDeclarationKind, name: string);
    bindVreg(vreg: VReg): void;
    hasAlreadyBinded(): boolean;
    getVreg(): VReg;
    getName(): string;
    setLexVar(scope: VariableScope): void;
    clearLexVar(): void;
    isLet(): boolean;
    isConst(): boolean;
    isLetOrConst(): boolean;
    isVar(): boolean;
    isNone(): boolean;
    isClass(): boolean;
}
export declare class LocalVariable extends Variable {
    status: InitStatus | null;
    isExport: boolean;
    exportedName: string;
    constructor(declKind: VarDeclarationKind, name: string, status?: InitStatus);
    initialize(): void;
    isInitialized(): boolean;
    setExport(): void;
    isExportVar(): boolean;
    setExportedName(name: string): void;
    getExportedName(): string;
}
export declare class ModuleVariable extends LocalVariable {
    private module;
    private exoticName;
    constructor(declKind: VarDeclarationKind, name: string, status: InitStatus);
    bindModuleVreg(vreg: VReg): void;
    setExoticName(exoticName: string): void;
    getExoticName(): string;
    getModule(): VReg;
}
export declare class GlobalVariable extends Variable {
    constructor(declKind: VarDeclarationKind, name: string);
}
//# sourceMappingURL=variable.d.ts.map