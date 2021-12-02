import * as ts from "typescript";
import { TryStatement } from "./tryStatement";
import { Label } from "../irnodes";
export declare class LabelTarget {
    private static name2LabelTarget;
    private static labelTargetStack;
    private breakTargetLabel;
    private continueTargetLabel;
    private tryStatement;
    constructor(breakTargetLabel: Label, continueTargetLabel: Label | undefined);
    getBreakTargetLabel(): Label;
    getContinueTargetLabel(): Label | undefined;
    getTryStatement(): TryStatement | undefined;
    private static isLabelTargetsEmpty;
    private static getCloseLabelTarget;
    static getCloseContinueTarget(): Label | undefined;
    static pushLabelTarget(labelTarget: LabelTarget): void;
    static popLabelTarget(): void;
    static updateName2LabelTarget(node: ts.Node, labelTarget: LabelTarget): void;
    static deleteName2LabelTarget(labelName: string): void;
    static getLabelTarget(stmt: ts.BreakOrContinueStatement): LabelTarget;
}
//# sourceMappingURL=labelTarget.d.ts.map