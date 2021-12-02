import * as ts from "typescript";
import { Label, VReg } from "../irnodes";
import { PandaGen } from "../pandagen";
import { Compiler } from "../compiler";
export declare class SwitchBuilder {
    private stmt;
    private compiler;
    private pandaGen;
    private caseLabels;
    private switchEndLabel;
    constructor(stmt: ts.SwitchStatement, compiler: Compiler, pandaGen: PandaGen, caseNums: number, switchEndLabel: Label);
    setCaseTarget(index: number): void;
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