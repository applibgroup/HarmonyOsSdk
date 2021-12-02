import { PandaGen } from "./pandagen";
export declare enum HoistingType {
    GLOBAL_VAR = 0,
    LOCAL_VAR = 1,
    GLOBAL_FUNCTION = 2,
    LOCAL_FUNCTION = 3
}
export declare class CompilerStatistics {
    private histogramMap;
    private instSizeMap;
    private numOfHoistingCases;
    private hoistingRelatedInsnNum;
    constructor();
    addHoistingRelatedInsnNum(num: number): void;
    addNumOfHoistCases(type: HoistingType): void;
    getInsHistogramStatistics(pg: PandaGen): void;
    printHistogram(verbose: boolean): void;
    printHoistStatistics(): void;
}
//# sourceMappingURL=compilerStatistics.d.ts.map