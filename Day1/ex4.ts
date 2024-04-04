export default function repeatString(s: string): string {
  let result = s;
  for (let i = 8; i >= 0; i--) {
    result = result + "-" + s;
  }
  return result;
}
