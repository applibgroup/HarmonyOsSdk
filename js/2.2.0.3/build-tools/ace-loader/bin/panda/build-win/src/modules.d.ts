import * as ts from "typescript";
import { PandaGen } from "./pandagen";
import { ModuleScope } from "./scope";
export declare class ModuleStmt {
    private node;
    private moduleRequest;
    private namespace;
    private bingdingNameMap;
    private isCopy;
    constructor(node: ts.Node, moduleRequest?: string);
    getNode(): ts.Node;
    getModuleRequest(): string;
    addLocalName(localName: string, importName: string): void;
    getBindingNameMap(): Map<string, string>;
    setNameSpace(namespace: string): void;
    getNameSpace(): string;
    setCopyFlag(isCopy: boolean): void;
    getCopyFlag(): boolean;
}
export declare function setImport(importStmts: Array<ModuleStmt>, moduleScope: ModuleScope, pandagen: PandaGen): void;
export declare function setExportBinding(exportStmts: Array<ModuleStmt>, moduleScope: ModuleScope, pandagen: PandaGen): void;
//# sourceMappingURL=modules.d.ts.map