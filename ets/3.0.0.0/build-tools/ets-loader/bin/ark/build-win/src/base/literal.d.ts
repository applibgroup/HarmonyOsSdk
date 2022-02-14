export declare enum LiteralTag {
    BOOLEAN = 1,
    INTEGER = 2,
    DOUBLE = 4,
    STRING = 5,
    METHOD = 6,
    GENERATOR = 7,
    ACCESSOR = 8,
    METHODAFFILIATE = 9,
    NULLVALUE = 255
}
export declare class Literal {
    private tag;
    private value;
    constructor(tag: LiteralTag, value: any);
    getTag(): LiteralTag;
    getValue(): any;
}
export declare class LiteralBuffer {
    private literalBuffer;
    constructor();
    addLiterals(...literals: Array<Literal>): void;
    isEmpty(): boolean;
}
//# sourceMappingURL=literal.d.ts.map