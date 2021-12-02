import { VReg } from "../irnodes";
import { PandaGen } from "../pandagen";
export declare enum CacheList {
    MIN = 0,
    NaN = 0,
    HOLE = 1,
    Infinity = 2,
    undefined = 3,
    Boolean = 4,
    Number = 5,
    String = 6,
    BigInt = 7,
    Symbol = 8,
    RegExp = 9,
    Null = 10,
    Object = 11,
    Function = 12,
    Global = 13,
    LexEnv = 14,
    True = 15,
    False = 16,
    MAX = 17
}
declare class CacheItem {
    constructor(handler: Function);
    private flag;
    private vreg;
    private expander;
    isNeeded(): boolean;
    getCache(): VReg;
    getExpander(): Function;
}
export declare class VregisterCache {
    private cache;
    constructor();
    getCache(index: CacheList): CacheItem;
}
export declare function getVregisterCache(pandaGen: PandaGen, index: CacheList): VReg;
export {};
//# sourceMappingURL=vregisterCache.d.ts.map