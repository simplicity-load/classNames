import {
  filterPredicatedValues,
  isPredicateMap,
} from "./filterPredicatedValues";

const filterPredicatedValuesCases: {
  input: [any, boolean][];
  expected: any[];
}[] = [
  {
    input: [
      ["apple", true],
      ["banana", false],
      ["cherry", true],
    ],
    expected: ["apple", "cherry"],
  },
  {
    input: [
      ["dog", true],
      ["cat", true],
      ["mouse", false],
    ],
    expected: ["dog", "cat"],
  },
  {
    input: [
      ["item1", false],
      ["item2", false],
    ],
    expected: [],
  },
  {
    input: [["singleItem", true]],
    expected: ["singleItem"],
  },
  {
    input: [],
    expected: [],
  },
  {
    input: [
      ["foo", true],
      ["bar", true],
      ["baz", false],
      ["qux", true],
    ],
    expected: ["foo", "bar", "qux"],
  },
];

const isEqualArr = (x: any[], y: any[]): boolean => {
  if (x.length !== y.length) return false;
  return x.every((item, i) => item === y[i]);
};

filterPredicatedValuesCases.forEach(({ input, expected }) => {
  const result = filterPredicatedValues(input);
  if (isEqualArr(result, expected)) {
    throw new Error("filterPredicatedValues failed");
  }
});

const isPredicateMapCases: {
  input: Record<any, any>;
  expected: boolean;
}[] = [
  {
    input: { key1: true, key2: false },
    expected: true,
  },
  {
    input: { 1: true, 2: false },
    expected: true,
  },
  {
    input: { [Symbol("sym")]: true, [Symbol("sym2")]: false },
    expected: true,
  },
  {
    input: { key1: true, key2: null },
    expected: false,
  },
  {
    input: { key1: true, key2: 1 },
    expected: false,
  },
  {
    input: { key1: true, key2: "value" },
    expected: false,
  },
  {
    input: { 1: true, 2: "string" },
    expected: false,
  },
  {
    input: { [Symbol("sym")]: true, key: "not boolean" },
    expected: false,
  },
  {
    input: {},
    expected: true,
  },
];

isPredicateMapCases.forEach(({ input, expected }) => {
  const result = isPredicateMap(input);
  if (result !== expected) {
    throw new Error("isPredicate failed");
  }
});
