import { FetchUsers, GetObjectKeys, GetObjectLength, GetObjectValues, IsKeyExist } from "./object";

let user = {
  name: "Nguyễn Tiến Đạt",
  age: 25,
  email: "support@amela.vn",
};

test("ex1", () => {
  expect(GetObjectKeys(user)).toStrictEqual(["name", "age", "email"]);
});

test("ex2", () => {
  expect(GetObjectValues(user)).toStrictEqual([
    "Nguyễn Tiến Đạt",
    25,
    "support@amela.vn",
  ]);
});

test("ex3", () => {
  expect(IsKeyExist(user, "name")).toBe(true);
  expect(IsKeyExist(user, "study")).toBe(false);
});

test("ex4", () => {
  expect(GetObjectLength(user)).toBe(3);
});

// test("ex5", () => {
//   expect(FetchUsers(user)).toBe(3);
// });
