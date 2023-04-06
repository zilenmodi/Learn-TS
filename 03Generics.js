"use strict";
// function print<T extends object>(arg: T): void {
//     console.log(arg); //{ name: 'Zilen' }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// print({ name: "Zilen" })
// type Print = <T>(arg: T) => void
// const printFn: Print = function print(arg) {
//     console.log(arg)
// }
// printFn<String>("Zilen")
// 
// interface Print1 { (arg: string): void }
// let func1: Print1 = function (arg) {
//     console.log(arg);
// }
// func1("Zilen")
// 
// type Print2 = (arg: string, id: number) => void
// let func2: Print2 = function (arg) {
//     console.log(arg);
// }
// func2("Zilen", 25)
// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     };
// }
// function merge1(obj1: object, obj2: object) {
//     return {
//         ...obj1,
//         ...obj2
//     };
// }
// merge({ name: "zilen" }, { id: 2 })
// merge1({ name: "zilen" }, { id: 2 })
// const s: string = "Zilen";
// let x: { length: number } = s;
// console.log(x);
// function prop<T, U extends keyof T>(obj: T, key: U) {
//     return obj[key];
// }
// prop({ name: "Zilen" }, "name")
// interface Person {
//     name: string
//     age: number
// }
// function verifyPerson(json: unknown): json is Person {
//     // return (
//     //     typeof json === 'object' &&
//     //     typeof (json as any).name === 'string' &&
//     //     typeof (json as any).age === 'number'
//     // )
//     console.log((json as Person).name);
//     return true;
// }
// verifyPerson({ name: "Zilen", age: 21 })
// function fail(msg: string): never {
//     throw new Error(msg)
// }
// fail("Zilen")
// let flexible: unknown = 4;
// console.log((flexible as string) + "h");
// console.log((flexible as number) + 5);
// let exp: string = "23";
// let sign: string = exp[0];
// let xyz: string = "29"
// let abc: number = xyz as unknown as number
// console.log(typeof abc); //output: string
// interface Cloner {
//     getArea(r: number): number;
// }
// interface Cloner {
//     getArea(x: number, y: number): number;
// }
// let x: Cloner = {
//     getArea(x: number, y?: number): number {
//         return y ? x * y : x;
//     },
// };
// x.getArea(23)
var Myclass = /** @class */ (function () {
    function Myclass() {
        this.getName = function (s) {
            console.log(s);
        };
        this.name = 40;
    }
    return Myclass;
}());
var x = new Myclass();
// console.log(x.name)
x.getName("ssss");
