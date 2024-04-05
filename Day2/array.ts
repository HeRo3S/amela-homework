export function FindMinNumbers(arr: number[]): number {
  let min = arr[0];
  for (let i = 1; i < arr.len; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

export function Find2ndMaxNumbers(arr: number[]): number {
  let max1 = arr[0];
  let max2 = arr[1];
  for (let i = 0; i < arr.len; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return max2;
}

export function ReverseAlphabeticalOrderArray(arr: string[]): string[] {
  let swap = "";
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j][0] < arr[j + 1][0]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }

  return arr;
}

export function Count5Divider(): number {
  let sum = 0;
  for (let i = 0; i <= 100; i += 5) {
    sum += i;
  }
  return sum;
}

export function LeftOver2(arr: number[]): number[] {
  return arr.map((e) => e % 2);
}

export function LargestElementsLength(arr: string[]): string[] {
  let maxLen = 0;
  arr.forEach((e) => {
    if (e.length > maxLen) maxLen = e.length;
  });
  return arr.filter((e) => {
    return e.length === maxLen;
  });
}

export function Randomizer(arr: unknown[]): unknown {
  return arr[Math.ceil(Math.random() * arr.length)];
}

export function RandomizeSwap(arr: unknown[]): unknown[] {
  const a = Math.floor(Math.random() * arr.length);
  const b = Math.floor(Math.random() * arr.length);
  const swap = arr[a];
  arr[a] = arr[b];
  arr[b] = swap;
  return arr;
}

export function GetSameElements(arr1: unknown[], arr2: unknown[]): unknown[] {
  return arr1.filter((e) => arr2.includes(e));
}

export function GetDifferentElements(
  arr1: unknown[],
  arr2: unknown[],
): unknown[] {
  let sameElements = GetSameElements(arr1, arr2);
  return arr1
    .filter((e) => !sameElements.includes(e))
    .concat(arr2.filter((e) => !sameElements.includes(e)));
}

function AddSubstring(s: string, idx: number, len: number, arr: string[]) {
  if (idx + len > s.length) return false;
  arr.push(s.substring(idx, idx + len));
  AddSubstring(s, idx, len + 1, arr);
  AddSubstring(s, idx + 1, len, arr);
  return true;
}
export function GetAllSubstringList(s: string) {
  let arr: string[] = [];

  AddSubstring(s, 0, 1, arr);
  return arr.filter((e, idx) => arr.indexOf(e) === idx);
}

export function isArrayAscending(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
}
export function isArrayOddDescending(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1] || arr[i] % 2 !== 1) return false;
  }
  return true;
}
