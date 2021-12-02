import * as ts from "typescript";
export declare class CmdOptions {
    private static parsedResult;
    private static options;
    static isEnableDebugLog(): boolean;
    static isAssemblyMode(): boolean;
    static isDebugMode(): boolean;
    static isModules(): boolean;
    static isVariantBytecode(): boolean;
    static getOptLevel(): number;
    static getOptLogLevel(): string;
    static showASTStatistics(): boolean;
    static showHistogramStatistics(): boolean;
    static showHoistingStatistics(): boolean;
    static getOutputBinName(): string;
    static getTimeOut(): Number;
    static showHelp(): void;
    static isBcVersion(): boolean;
    static getVersion(isBcVersion?: boolean): void;
    static isBcMinVersion(): boolean;
    static parseUserCmd(args: string[]): ts.ParsedCommandLine | undefined;
}
//# sourceMappingURL=cmdOptions.d.ts.map