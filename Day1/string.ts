export function checkStringExist(s1: string, s2: string): boolean {
  const s1Array = s1.split(" ");
  let result = false;
  s1Array.forEach((e) => {
    console.log(e, e === s2);
    if (e === s2) {
      result = true;
    }
  });
  return result;
}

export function shortenString(s: string): string {
  const result = s.slice(0, 8) + "...";
  return result;
}

export function x10String(s: string): string {
  let result = s;
  for (let i = 8; i >= 0; i--) {
    result += s;
  }
  return result;
}

export function repeatString(s: string): string {
  let result = s;
  for (let i = 8; i >= 0; i--) {
    result = result + "-" + s;
  }
  return result;
}

export function repeatStringNTimes(s: string, n: number): string {
  let result = s;
  for (let i = n - 2; i >= 0; i--) {
    result = result + "-" + s;
  }
  return result;
}

export function reverseString(s: string): string {
  let result = "";
  const len = s.length;
  for (let i = 0; i < s.length; i++) {
    result += s[len - 1 - i];
  }
  return result;
}

// import { log } from "console";
export function checkSymetricalString(s: string): boolean {
  let lowerString = s.toLowerCase();
  lowerString = lowerString.replaceAll(" ", "");
  // console.log(lowerString);
  const len = lowerString.length;
  let over = 0;
  if (len % 2 !== 0) over = 1;

  for (let i = len / 2 - 1 - over; i >= 0; i--) {
    if (lowerString[i] !== lowerString[len - 1 - i]) {
      // log(i, lowerString[i]);
      return false;
    }
  }
  return true;
}

export function checkAllCaseUp(s: string): boolean {
  return s === s.toUpperCase();
}
