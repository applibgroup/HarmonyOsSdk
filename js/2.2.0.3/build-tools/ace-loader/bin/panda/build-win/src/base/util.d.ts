import * as ts from "typescript";
import { Scope } from "../scope";
export declare function containSpreadElement(args?: ts.NodeArray<ts.Expression>): boolean;
export declare function hasExportKeywordModifier(node: ts.Node): boolean;
export declare function hasDefaultKeywordModifier(node: ts.Node): boolean;
export declare function setVariableExported(varName: string, scope: Scope): void;
export declare function execute(cmd: string, args: Array<string>, isPrint?: boolean): 0 | 1;
export declare function addUnicodeEscape(text: string): string;
export declare function isBindingPattern(node: ts.Node): boolean;
export declare function isObjectBindingOrAssignmentPattern(node: ts.Node): boolean;
export declare function isArrayBindingOrAssignmentPattern(node: ts.Node): boolean;
export declare function isBindingOrAssignmentPattern(node: ts.Node): boolean;
export declare function isMemberExpression(node: ts.Node): boolean;
export declare function isUndefinedIdentifier(node: ts.Node): boolean;
export declare function isAnonymousFunctionDefinition(node: ts.Node): boolean;
//# sourceMappingURL=util.d.ts.map