// let obj1: any = { x: 0 };
// let str1: string = "Zilen Modi";
// let num1: number = 123;

// // str1 += num1; //error
// let flag: boolean = true;
// let notDefined: undefined = undefined;
// let notPresent: null = null;

// let obj2: unknown = () => {
//   console.log("Hello");
// };
// // console.log(str1 == num1); //error

// function greet(name: string) {
//   console.log(`Hello, ${name}`);
// }

// // greet(5); //error
// // greet("Zilen");

// function printName(obj: { firstName: string; lastName?: string }) {
//   if (obj.lastName !== undefined) {
//     console.log(`Hello, ${obj.firstName} ${obj.lastName}`);
//   } else {
//     console.log(`Hello, ${obj.firstName}`);
//   }
// }

// // printName({ firstName: "zilen", lastName: "Modi" });

// let var1: number | string = "5";
// let var2: number | string | boolean = "5";
// // console.log(var1 == var2); //true

// type User = {
//   name: string;
//   age?: number | undefined;
// };

// let user1: User = {
//   name: "Zilen Modi",
//   age: 21,
// };

// // console.log(user1);

// interface Vehicle {
//   name: string;
//   modelNo: number | string;
// }

// let vehicle1: Vehicle = {
//   name: "Activa",
//   modelNo: 9878,
// };

// console.log(vehicle1);

//----------------

// let arr1: ReadonlyArray<number> = [1, 2, 3];
// arr1[2] = 4; //error read only

// let arr1: readonly number[] = [1, 2, 3];
// arr1[2] = 4; //error read only

// function print<Type>(a: Type, b: Type): void {
//   console.log(a, b);
// }

// let addition1 = print<string>("Zilen", "Modi");
// let addition2 = print(10, 20);

// function print<Type>(a: Type[]): void {
//   console.log(a);
// }

// let addition1 = print<string>(["Zilen", "Modi"]);
// let addition2 = print([10, 20]);

// interface Pair<T, V> {
//   key: T;
//   value: V;
// }

// type User = {
//   name: string;
//   age: number;
//   location?: string;
// };

// let users: Pair<string, User>[] = [];

// let u1: Pair<string, User> = {
//   key: "67562",
//   value: {
//     name: "Zilen",
//     age: 21,
//   },
// };

// let u2: Pair<string, User> = {
//   key: "57634",
//   value: {
//     name: "Om",
//     age: 21,
//   },
// };

// users.push(u1, u2);

// function merge<T extends object, V extends object>(obj1: T, obj2: V) {
//   return { ...obj1, ...obj2 };
// }

// let objMerge1 = merge({ name: "Zilen" }, { age: 25 });
// console.log(objMerge1);

// function getValue<T extends object, V extends keyof T>(obj1: T, key1: V) {
//   return obj1[key1];
// }

// console.log(getValue({ name: "Zilen", age: 21 }, "name"));

// type Pair<KeyT, ValueT> = {
//   key: KeyT;
//   value: ValueT;
// };

// let p1: Pair<number, string> = {
//   key: 876876,
//   value: "Zilen",
// };

// type type1 = null | undefined | string;

// let x: type1 = "Zilen";

// if (x !== undefined) {
//   console.log(x);
// }

// type NumberOrString<T extends number | string> = T extends number
//   ? string
//   : number;

// function createLabel<T extends number | string>(
//   NumOrStr: T
// ): NumberOrString<T> {
//   throw "unimplemented";
// }

// let a = createLabel<string>("typescript");
// let b = createLabel<number>(2.8);

//-----------
// type Type = {
//   message: string;
// };

// type TType = {
//   name: string;
//   message: string;
// };

// type Utype<T extends Type> = Type["message"];

// let x: Utype<TType> = "zilen";

//-------------

// type API = {
//   id: string;
// };

// // type IdType<T extends { id: unknown }> = T["id"];
// type IdType<T> = T extends { id: unknown } ? T["id"] : never;

// type IdMessageType = IdType<API>;

// let id: IdMessageType = "454";

// type ToArray<Type> = Type extends any ? Type[] : never;

// type BolArr = ToArray<string>;

// let xx: BolArr = ["1"];

type OptionsFlags<Type> = {
  -readonly [Property in keyof Type as `set${Capitalize<
    string & Property
  >}`]-?: Type[Property] extends any ? Type[Property] : never;
};

type Users = {
  readonly name?: string;
  readonly age?: number;
};

let x1: OptionsFlags<Users> = {
  setName: "zilen",
  setAge: 21,
};

// x1["age"] = 23;
