import {
  CalDivisors,
  // CalSmallerPrimesSum,
  CalSumBetweens,
  CheckPrime,
  RearrangeMinNum,
} from "./number";
import { checkAllCaseUp, checkStringExist, checkSymetricalString, repeatString, repeatStringNTimes, reverseString, shortenString, x10String } from "./string";

test("ex1 true case", () => {
  expect(checkStringExist("Amela A Beta", "Beta")).toBe(true);
});
test("ex1 false case", () => {
  expect(checkStringExist("Amela A Beta", "B")).toBe(false);
});

test("ex2", () => {
  expect(shortenString("Xin chào các bạn")).toBe("Xin chào...");
});

test("ex3", () => {
  expect(x10String("a")).toBe("aaaaaaaaaa");
});

test("ex4", () => {
  expect(repeatString("a")).toBe("a-a-a-a-a-a-a-a-a-a");
});

test("ex5", () => {
  expect(repeatStringNTimes("a", 5)).toBe("a-a-a-a-a");
});

test("ex6", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("ex7 true even length case", () => {
  expect(checkSymetricalString("Race car")).toBe(true);
});
test("ex7 true odd length case", () => {
  expect(checkSymetricalString("ab z ba")).toBe(true);
});
test("ex7 false case", () => {
  expect(checkSymetricalString("Hello world")).toBe(false);
});

test("ex8 true case", () => {
  expect(checkAllCaseUp("HELLO WORLD!")).toBe(true);
});
test("ex8 false case", () => {
  expect(checkAllCaseUp("HeLlo WORLD!")).toBe(false);
});

test("Number ex2", () => {
  expect(CalSumBetweens(3, 8)).toBe(22);
});

test("Number ex3", () => {
  expect(CheckPrime(137)).toBe(true);
});

test("Number ex5", () => {
  expect(CalDivisors(8)).toBe(1 + 2 + 4 + 8);
});

test("Number ex6", () => {
  expect(RearrangeMinNum(53751)).toBe(13557);
  expect(RearrangeMinNum(60421)).toBe(10246);
});
