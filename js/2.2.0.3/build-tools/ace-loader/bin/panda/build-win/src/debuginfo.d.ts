import * as ts from "typescript";
import { IRNode } from "./irnodes";
import { PandaGen } from "./pandagen";
import { Scope } from "./scope";
export declare class DebugPosInfo {
    private boundLeft;
    private boundRight;
    private sourecLineNum;
    private sourecColumnNum;
    private wholeLine;
    private nodeKind;
    constructor();
    setDebugPosInfoNodeState(extendedNode: ts.Node | NodeKind): void;
    getDebugPosInfoNodeState(): NodeKind;
    setBoundLeft(boundLeft: number): void;
    getBoundLeft(): number;
    setBoundRight(boundRight: number): void;
    getBoundRight(): number;
    setSourecLineNum(sourecLineNum: number): void;
    getSourecLineNum(): number;
    setSourecColumnNum(sourecColumnNum: number): void;
    getSourecColumnNum(): number;
    setWholeLine(wholeLine: string): void;
    getWholeLine(): string;
}
export declare class VariableDebugInfo {
    private name;
    private variable;
    private signature;
    private signatureType;
    private reg;
    private start;
    private length;
    constructor(name: string, signature: string, signatureType: string, reg: number, start?: number, length?: number);
    setStart(start: number): void;
    getStart(): number;
    setLength(length: number): void;
}
export declare enum NodeKind {
    Normal = 0,
    Invalid = 1,
    FirstNodeOfFunction = 2
}
export declare class DebugInfo {
    private static scopeArray;
    private static lastNode;
    constructor();
    static isNode(extendedNode: ts.Node | NodeKind): boolean;
    static updateLastNode(lastNode: ts.Node | NodeKind): void;
    static getLastNode(): ts.Node;
    static setPosInfoForUninitializeIns(posInfo: DebugPosInfo, pandaGen: PandaGen): void;
    static addScope(scope: Scope): void;
    static getScopeArray(): Scope[];
    static clearScopeArray(): void;
    static setDebuginfoForIns(node: ts.Node | NodeKind, ...insns: IRNode[]): void;
    private static matchFormat;
    private static getIRNodeWholeLength;
    private static setVariablesDebugInfoInternal;
    private static setPosDebugInfo;
    private static removeDebugIns;
    private static setVariablesDebugInfo;
    static setDebugInfo(pandaGen: PandaGen): void;
    static setSourceFileDebugInfo(pandaGen: PandaGen, node: ts.SourceFile | ts.FunctionLikeDeclaration): void;
    static copyDebugInfo(insn: IRNode, expansion: IRNode[]): void;
    static addDebugIns(scope: Scope, pandaGen: PandaGen, isStart: boolean): void;
}
//# sourceMappingURL=debuginfo.d.ts.map