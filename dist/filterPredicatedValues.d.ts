export declare const filterPredicatedValues: <T>(x: [T, boolean][] | Record<T, boolean>) => T[];
type MapValues = string | number | symbol;
export declare const isPredicateMap: <T extends MapValues>(x: any) => x is Record<T, boolean>;
export {};
