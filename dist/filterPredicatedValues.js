"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPredicateMap = exports.filterPredicatedValues = void 0;
const filterPredicatedValues = (x) => {
    if ((0, exports.isPredicateMap)(x))
        return (0, exports.filterPredicatedValues)(predicateMapToArr(x));
    return x.filter(([, predicate]) => predicate).map(([value]) => value);
};
exports.filterPredicatedValues = filterPredicatedValues;
const isPredicateMap = (x) => {
    if (!x || typeof x !== "object")
        return false;
    return Object.entries(x).every(([k, v]) => ["string", "number", "symbol"].includes(typeof k) &&
        typeof v === "boolean");
};
exports.isPredicateMap = isPredicateMap;
const predicateMapToArr = (x) => Object.entries(x);
