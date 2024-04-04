export default function reverseString(s: string): string {
  let result = "";
  const len = s.length;
  for (let i = 0; i < s.length; i++) {
    result += s[len - 1 - i];
  }
  return result;
}
