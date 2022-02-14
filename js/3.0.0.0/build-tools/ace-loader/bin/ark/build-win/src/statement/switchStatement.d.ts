import * as ts from "typescript";
import { Label, VReg } from "../irnodes";
import { Compiler } from "../compiler";
export declare class SwitchBase {
    private stmt;
    private compiler;
    private pandaGen;
    private caseLabels;
    private switchEndLabel;
    constructor(stmt: ts.SwitchStatement, compiler: Compiler, caseNums: number, switchEndLabel: Label);
    setCasePosition(index: number): void;
    compileTagOfSwitch(tagReg: VReg): void;
    compileCaseStatements(index: number): void;
    JumpIfCase(tag: VReg, index: number): void;
    JumpToDefault(defaultIndex: number): void;
    checkDefaultNum(defaultCnt: number): void;
    break(): void;
    end(): void;
}
export declare function compileSwitchStatement(stmt: ts.SwitchStatement, compiler: Compiler): void;
//# sourceMappingURL=switchStatement.d.ts.map