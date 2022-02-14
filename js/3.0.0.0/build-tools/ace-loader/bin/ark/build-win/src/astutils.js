"use strict";
/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.getVarDeclarationKind = void 0;
var ts = __importStar(require("typescript"));
var variable_1 = require("./variable");
function getVarDeclarationKind(decl) {
    if (decl.parent.kind == ts.SyntaxKind.VariableDeclarationList) {
        var declList = decl.parent;
        if ((declList.flags & ts.NodeFlags.Let) != 0) {
            return variable_1.VarDeclarationKind.LET;
        }
        else if ((declList.flags & ts.NodeFlags.Const) != 0) {
            return variable_1.VarDeclarationKind.CONST;
        }
        else {
            return variable_1.VarDeclarationKind.VAR;
        }
    }
    else if (decl.parent.kind == ts.SyntaxKind.CatchClause) {
        return variable_1.VarDeclarationKind.LET;
    }
    else {
        throw new Error("VariableDeclaration inside " + ts.SyntaxKind[decl.parent] + " is not implemented");
    }
}
exports.getVarDeclarationKind = getVarDeclarationKind;
//# sourceMappingURL=astutils.js.map