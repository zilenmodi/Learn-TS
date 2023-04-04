"use strict";
// <--------- types ------------->
Object.defineProperty(exports, "__esModule", { value: true });
//define variable using name: string, number, boolean, any, never
// let myName: string = "Zilen"
// console.log(myName);
// let dbID: any = 123
// return either boolean or string (union operator -> |)
// function setName(name: String, id: number, isActive: boolean = true): boolean | string { //take string as arg1, number as arg2 and boolean as arg3
//     console.log(name);
//     if (id > 5) {
//         return true;
//     }
//     return "Error 404"
// }
// console.log(setName("Modi", 2));
// <------------------- define function types and return types -------------->
// const heros = ["batman", "superman", "aquaman"]
// // const heros = [1, 2, 3]
// heros.map((hero: string): void => {
//     console.log(`Hero is ${hero}`);
// })
// <---------------- object ------------>
// function createUser({ name: string, isActive: boolean }) { }
// // createUser({ name: "zilen", isActive: true, email: "a@com" }) //not run
// let newUser = { name: "zilen", isActive: true, email: "a@com" }
// createUser(newUser) //no error
// type User = {
//     readonly _id: number, //just read
//     name: string,
//     email: string,
//     isActive: boolean,
//     creditCard?: string //optional -> ?
// }
// <---------------- combination based on old type --------------->
// type Student = User & {
//     enroll: number
// }
// function createUser(user: Student): User { return user }
// let myUser = { _id: 324, name: "zilen", email: "z@com", isActive: true, enroll: 34 }
// createUser(myUser)
// myUser._id = 10 // _id is readonly
// <----------------- Array ---------------------->
// const superHeros: string[] = []
// superHeros.push("batman", "superman")
// const strength: Array<number> = []
// strength.push(39);
// const graph: number[][] = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// <-------------------union-------------->
// let dbid: string | number = 12 // union op -> |
// dbid = "12"
// const data: (string | number)[] = [1, "2"]
// let pie: 3.14 = 3.14
// // pie = 3.145 //Type '3.145' is not assignable to type '3.14'
// let seatAllotement: "aisle" | "middle" | "window"
// seatAllotement = "window";
// <---------------- tuple -------------------->
// let user: [string, number, boolean] = ["zilen", 123, true]
// type User = [string, number, boolean]
// let myUser: User = ["zilen", 123, true]
// myUser.push(90) //bugggggggggggggggggg
// enum colors {
//     RED,
//     GREEN = 12,
//     BLUE //colors.BLUE = 13
// }
// console.log(colors);
// <----------------- Interface -------------------->
// //broad view of class
// interface Car {
//     name: string,
//     color: string,
//     setGear(num: number): void
//     setHighSpeed: (num: number) => void
//     readonly numberPlat: string
//     isManual?: boolean
// }
// //reopening interface
// interface Car {
//     capacity: number
// }
// //inherit interface
// interface Honda extends Car {
//     name: "Honda City" | "Honda Jazz" | "Honda Amaze"
// }
// const city: Honda = {
//     name: "Honda Amaze",
//     color: "brown",
//     setGear: (num) => {
//         console.log("Gears : ", num);
//     },
//     setHighSpeed(num) {
//         console.log("High Speed : ", num);
//     },
//     numberPlat: "GJ 1 1001",
//     isManual: true,
//     capacity: 7
// }
// // city.setGear(6);
// console.log(city);
//higher order function which takes more strict function
// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
// }
// function solve(str: string): void {
//     console.log(str);
// }
// greeter(solve)
function invokeAnything(callback) {
    if (typeof callback === 'function') {
        callback();
    }
    // callback() //error show
}
invokeAnything(1);
