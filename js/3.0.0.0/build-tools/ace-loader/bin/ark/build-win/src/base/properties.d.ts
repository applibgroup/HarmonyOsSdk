import * as ts from "typescript";
export declare enum PropertyKind {
    Variable = 0,
    Constant = 1,
    Computed = 2,
    Prototype = 3,
    Accessor = 4,
    Spread = 5
}
export declare class Property {
    private propKind;
    private valueNode;
    private setterNode;
    private getterNode;
    private compiled;
    private redeclared;
    private name;
    constructor(propKind: PropertyKind, name: string | number | ts.ComputedPropertyName | undefined);
    setCompiled(): void;
    setRedeclared(): void;
    isCompiled(): boolean;
    isRedeclared(): boolean;
    getName(): string | number | ts.ComputedPropertyName;
    getKind(): PropertyKind;
    getValue(): ts.Node;
    getGetter(): ts.GetAccessorDeclaration | undefined;
    getSetter(): ts.SetAccessorDeclaration | undefined;
    setValue(valueNode: ts.Node): void;
    setGetter(getter: ts.GetAccessorDeclaration): void;
    setSetter(setter: ts.SetAccessorDeclaration): void;
    setKind(propKind: PropertyKind): void;
}
export declare function generatePropertyFromExpr(expr: ts.ObjectLiteralExpression): Property[];
export declare function isConstantExpr(node: ts.Node): boolean;
export declare function propertyKeyAsString(propName: string | number): string;
export declare function getPropName(propertyName: ts.PropertyName): string | number | ts.ComputedPropertyName;
//# sourceMappingURL=properties.d.ts.map