import {
  Find2ndMaxNumbers,
  FindMinNumbers,
  GetAllSubstringList,
  GetDifferentElements,
  GetSameElements,
  isArrayAscending,
  isArrayOddDescending,
  LargestElementsLength,
  LeftOver2,
  ReverseAlphabeticalOrderArray,
} from "./array";

test("ex1: min numbers test", () => {
  expect(FindMinNumbers([2, 1, 3])).toStrictEqual(1);
});

test("ex2: 2nd number largest test", () => {
  expect(Find2ndMaxNumbers([2, 1, 3, 4])).toStrictEqual(3);
});

test("ex3: reverse alphabetical order name array", () => {
  expect(ReverseAlphabeticalOrderArray(["Nam", "Hoa", "Tuấn"])).toStrictEqual([
    "Tuấn",
    "Nam",
    "Hoa",
  ]);
});

test("ex5", () => {
  expect(LeftOver2([5, 6, 7])).toStrictEqual([1, 0, 1]);
});

test("ex6", () => {
  expect(LargestElementsLength(["aba", "aa", "ad", "c", "vcd"])).toStrictEqual([
    "aba",
    "vcd",
  ]);
});

test("ex9", () => {
  expect(GetSameElements([1, 2, 3], [1, 2, 4])).toStrictEqual([1, 2]);
});

test("ex10", () => {
  expect(GetDifferentElements([1, 2, 3], [1, 2, 4])).toStrictEqual([3, 4]);
});

test("ex11", () => {
  expect(GetAllSubstringList("dog").sort()).toStrictEqual(
    ["d", "do", "dog", "o", "og", "g"].sort(),
  );
});

test("ex12", () => {
  expect(isArrayAscending([1, 3, 4, 5, 8])).toBe(true);
});
test("ex13", () => {
  expect(isArrayOddDescending([9, 7, 5, 3, 1])).toBe(true);
});
