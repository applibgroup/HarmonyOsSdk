import * as ts from "typescript";
import { Compiler } from "../compiler";
export declare enum RegExpFlags {
    FLAG_GLOBAL = 1,
    FLAG_IGNORECASE = 2,
    FLAG_MULTILINE = 4,
    FLAG_DOTALL = 8,
    FLAG_UTF16 = 16,
    FLAG_STICKY = 32
}
export declare function compileRegularExpressionLiteral(compiler: Compiler, regexp: ts.RegularExpressionLiteral): void;
//# sourceMappingURL=regularExpression.d.ts.map