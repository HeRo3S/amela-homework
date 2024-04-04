// import { log } from "console";
export default function checkSymetricalString(s: string): boolean {
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

// console.log(checkSymetricalString("Race car"));

