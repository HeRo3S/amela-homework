export function CalGlobularVolume(radius: number): number {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

export function CalSumBetweens(a: number, b: number): number {
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}

export function CheckPrime(n: number): boolean {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function CalSmallerPrimesSum(n: number): number {
  if (n < 2) return 0;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (CheckPrime(i)) sum += i;
  }
  return sum;
}

export function CalDivisors(n: number): number {
  if (n < 1) return 0;
  let sum = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) sum += i + (n / i);
  }
  return sum;
}

// Number exc 6
export function RearrangeMinNum(n: number): number {
  let string = n.toString();
  let swap = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length - 1 - i; j++) {
      if (string[j] > string[j + 1]) {
        swap = string[j];
        string =
          string.slice(0, j) + string[j + 1] + swap + string.slice(j + 2);
        console.log(string);
      }
    }
  }
  return +string;
}
