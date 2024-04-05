export function GetCurrentDate(splitChar: string): string {
  const date = new Date(Date.now());
  return (
    date.getDay() +
    splitChar +
    // NOTE: who in the hell designed the month is zero-based, but not the rest?
    (date.getMonth() + 1) +
    splitChar +
    date.getFullYear()
  );
}

export function GetDaysInMonth(month: number, year: number): number {
  // NOTE: month-date-year
  const date1 = new Date(`${month}-01-${year}`);
  let date2;
  if (month === 12) {
    date2 = new Date(`01-01-${year + 1}`);
  } else {
    date2 = new Date(`${month + 1}-01-${year}`);
  }

  const theDaysBetween =
    (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
  return theDaysBetween;
}

export function CheckWeekend(
  date: number,
  month: number,
  year: number,
): boolean {
  const day = new Date(`${month}-${date}-${year}`);

  if (day.getDay() === 0 || day.getDay() === 6) return true;
  return false;
}

export function GetMins(hours: number, minutes: number): number {
  return hours * 60 + minutes;
}

export function CalDaysHasPassed(): number {
  const now = new Date(Date.now());
  // NOTE: if you know you know lmao
  const skrillex = new Date(`01-01-${now.getFullYear()}`);

  const theDaysBetween = Math.floor(
    (now.getTime() - skrillex.getTime()) / (1000 * 60 * 60 * 24),
  );
  return theDaysBetween;
}

export function CalAges(year: number, month: number, day: number): number {
  const currentYear = new Date(Date.now()).getFullYear();
  // NOTE: well I guess I should substract two dates and calculate the exact year, but who calculates their age like that?
  return currentYear - year;
}

export function GetFirstDayOfTheWeek(): string {
  const date = new Date(Date.now());
  const dayOfTheWeek = date.getDay();

  // NOTE: is Sunday or Monday first of the week?
  // Jesus I hate Christian....
  const result = new Date(date.getTime() - dayOfTheWeek * 24 * 60 * 60 * 1000);
  return result.toDateString();
}

export function GetLastDayOfMonth(): string {
  const date = new Date(Date.now());
  let firstOfNextMonth;
  if (date.getMonth() === 11) {
    firstOfNextMonth = new Date(`01-01-${date.getFullYear() + 1}`);
  } else {
    firstOfNextMonth = new Date(
      `${date.getMonth() + 2}-01-${date.getFullYear()}`,
    );
  }

  const lastOfThisMonth = new Date(
    firstOfNextMonth.getTime() - 24 * 60 * 60 * 1000,
  );
  return lastOfThisMonth.toDateString();
}

export function NewYearCountdown(): string {
  const now = new Date(Date.now());
  const timeRemaining =
    new Date(`01-01-${now.getFullYear() + 1}`).getTime() - now.getTime();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

export function CalTimeAdded(time: string, secondsAdded: number): string {
  const [hours, minutes, seconds] = time.split(":");
  const date = new Date();
  date.setHours(+hours);
  date.setMinutes(+minutes);
  date.setSeconds(+seconds);

  const newDate = new Date(date.getTime() + secondsAdded * 1000);
  return `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
}

interface IaData {
  a: number[];
  b: {
    c: number;
  };
}
interface IData {
  name: string;
  age: number;
  isStatus: boolean;
  a: IaData;
  c: string[];
}
export function ResetData(data: IData) {
  data.name = "";
  data.age = 0;
  data.isStatus = false;
  data.a.a.forEach((e) => (e = 0));
  data.a.b.c = 0;
  data.c.forEach((e) => (e = ""));
}
