import { VReg } from "../irnodes";
import { PandaGen } from "../pandagen";
export declare enum CacheList {
    MIN = 0,
    NaN = 0,
    HOLE = 1,
    Infinity = 2,
    undefined = 3,
    Symbol = 4,
    Null = 5,
    Global = 6,
    LexEnv = 7,
    True = 8,
    False = 9,
    MAX = 10
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