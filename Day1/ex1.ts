export default function checkStringExist(s1: string, s2: string): boolean {
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

