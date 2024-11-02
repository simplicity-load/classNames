"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = void 0;
const filterPredicatedValues_1 = require("./filterPredicatedValues");
const classNames = (...args) => {
    const classnames = args.reduce((acc, arg) => {
        if (typeof arg === "string")
            return acc.concat(arg);
        if ((0, filterPredicatedValues_1.isPredicateMap)(arg))
            return acc.concat((0, filterPredicatedValues_1.filterPredicatedValues)(arg).map(String));
        throw new Error("Arguments must be either string or boolean map!");
    }, []);
    return classnames.join(" ");
};
exports.classNames = classNames;
