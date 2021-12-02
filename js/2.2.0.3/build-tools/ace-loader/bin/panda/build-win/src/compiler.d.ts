/**
 * The compiler implementation.
 * The compiler traverses TypeScript's AST, splits operations into sinmple ones
 * and asks Pandagen to generate bytecode.
 *
 * This file shold not contain import from irnodes.ts.
 * The interface of PandaGen shold be enoght.
 */
import * as ts from "typescript";
import { CompilerDriver } from "./compilerDriver";
import { FunctionBuilderType } from "./function/functionBuilder";
import { Label, VReg } from "./irnodes";
import { PandaGen } from "./pandagen";
import { Recorder } from "./recorder";
import { Scope } from "./scope";
import { TryBuilderBase, TryStatement } from "./statement/tryStatement";
import { Variable } from "./variable";
export declare enum ControlFlowChange {
    Continue = 0,
    Break = 1
}
export declare class Compiler {
    private debugTag;
    private rootNode;
    private pandaGen;
    private scope;
    private compilerDriver;
    private funcBuilder;
    private recorder;
    constructor(node: ts.SourceFile | ts.FunctionLikeDeclaration, pandaGen: PandaGen, compilerDriver: CompilerDriver, recorder: Recorder);
    compile(): void;
    private compileLexicalBindingForArrowFunction;
    private storeSpecialArg2LexEnv;
    private compileSourceFileOrBlock;
    private compileFunctionBody;
    private compileFunctionParameterDeclaration;
    private createFuncBuilder;
    private compileFunctionLikeDeclaration;
    compileStatement(stmt: ts.Statement): void;
    private compileBlock;
    private compileVariableStatement;
    compileVariableDeclaration(decl: ts.VariableDeclaration, isExported?: boolean): void;
    private compileIfStatement;
    private compileDoStatement;
    private compileWhileStatement;
    private compileForStatement;
    private compileContinueStatement;
    private compileBreakStatement;
    private compileLabeledStatement;
    private compileThrowStatement;
    compileFinallyBlockBeforeControlFlowChange(endTry: TryStatement | undefined, cfc: ControlFlowChange, continueTargetLabel: Label | undefined): void;
    constructTry(node: ts.Node, tryBuilder: TryBuilderBase, endLabel?: Label): void;
    private compileTryStatement;
    private compileFunctionDeclaration;
    private compileExportAssignment;
    private compileCondition;
    compileExpression(expr: ts.Expression): void;
    private compileRegularExpressionLiteral;
    private compileIdentifier;
    private compileUnscopedIdentifier;
    private compileBooleanLiteral;
    compileFunctionReturnThis(expr: ts.NewExpression | ts.CallExpression): boolean;
    private compileThisKeyword;
    private compileFunctionExpression;
    private compileDeleteExpression;
    private compileTypeOfExpression;
    private compileVoidExpression;
    private compileAwaitExpression;
    private compilePrefixUnaryExpression;
    private compilePostfixUnaryExpression;
    private compileLogicalExpression;
    private compileBinaryExpression;
    private compileConditionalExpression;
    private compileArrowFunction;
    private compileTemplateSpan;
    private compileTemplateExpression;
    private compileNoSubstitutionTemplateLiteral;
    private compileTaggedTemplateExpression;
    private compileAssignmentExpression;
    pushScope(node: ts.Node): void;
    popScope(): void;
    private getNodeName;
    getThis(node: ts.Node, res: VReg): void;
    setThis(node: ts.Node): void;
    getPandaGen(): PandaGen;
    getCurrentScope(): Scope;
    getCompilerDriver(): CompilerDriver;
    getRecorder(): Recorder;
    getFuncBuilder(): FunctionBuilderType;
    emitStore(node: ts.Node, variable: {
        scope: Scope | undefined;
        level: number;
        v: Variable | undefined;
    }, isDeclaration: boolean): void;
    emitLoad(node: ts.Node, variable: {
        scope: Scope | undefined;
        level: number;
        v: Variable | undefined;
    }): void;
}
//# sourceMappingURL=compiler.d.ts.map