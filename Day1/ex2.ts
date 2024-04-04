export default function shortenString(s: string): string {
  const result = s.slice(0, 8) + "...";
  return result;
}
