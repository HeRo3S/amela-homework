export function GetObjectKeys(obj: Object): string[] {
  return Object.keys(obj);
}

export function GetObjectValues(obj: Object): any[] {
  return GetObjectKeys(obj).map((e) => obj[e as keyof typeof obj]);
}

export function IsKeyExist(obj: Object, key: string): boolean {
  return GetObjectKeys(obj).includes(key);
}

export function GetObjectLength(obj: Object): number {
  return GetObjectKeys(obj).length;
}

interface IObject {
  name: string;
  age: number;
  isStatus: boolean;
}
export function FetchUsers(users: IObject[]): IObject[] {
  return users.filter((u) => {
    return u.age > 25 && u.isStatus;
  });
}
