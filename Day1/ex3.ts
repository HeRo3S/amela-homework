export default function x10String(s: string): string {
  let result = s;
  for (let i = 8; i >= 0; i--) {
    result += s;
  }
  return result;
}
