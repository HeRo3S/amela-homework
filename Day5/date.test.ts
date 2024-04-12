import {
  CalDaysHasPassed,
  CalTimeAdded,
  CheckWeekend,
  GetCurrentDate,
  GetDaysInMonth,
  GetFirstDayOfTheWeek,
  GetLastDayOfMonth,
  NewYearCountdown,
} from "./date";
test("date ex1", () => {
  expect(GetCurrentDate("/")).toBe("5/4/2024");
});

test("date ex2", () => {
  expect(GetDaysInMonth(2, 2024)).toBe(29);
});

test("date ex3", () => {
  expect(CheckWeekend(6, 4, 2024)).toBe(true);
  expect(CheckWeekend(5, 4, 2024)).toBe(false);
});

test("date ex4", () => {
  expect(CalDaysHasPassed()).toBe(95);
});

test("date ex5", () => {
  expect(GetFirstDayOfTheWeek()).toBe("Sun Mar 31 2024");
});

test("date ex6", () => {
  expect(GetLastDayOfMonth()).toBe("Tue Apr 30 2024");
});

test("date ex7", () => {
  expect(NewYearCountdown()).toBeTruthy();
});

test("date ex8", () => {
  expect(CalTimeAdded("9:20:56", 7)).toBe("9:21:3");
});
