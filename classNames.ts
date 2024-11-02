import {
  filterPredicatedValues,
  isPredicateMap,
} from "./filterPredicatedValues";

type Opt = Record<string, boolean>;

export const classNames = (...args: (string | Opt)[]): string => {
  const classnames = args.reduce<string[]>((acc, arg) => {
    if (typeof arg === "string") return acc.concat(arg);
    if (isPredicateMap(arg))
      return acc.concat(filterPredicatedValues(arg).map(String));
    throw new Error("Arguments must be either string or boolean map!");
  }, []);
  return classnames.join(" ");
};
