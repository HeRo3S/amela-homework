export default function repeatStringNTimes(s: string, n: number): string {
  let result = s;
  for (let i = n - 2; i >= 0; i--) {
    result = result + "-" + s;
  }
  return result;
}
