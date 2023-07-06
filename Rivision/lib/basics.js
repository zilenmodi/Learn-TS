"use strict";
let obj1 = { x: 0 };
let str1 = "Zilen Modi";
let num1 = 123;
// str1 += num1; //error
let flag = true;
let notDefined = undefined;
let notPresent = null;
let obj2 = () => {
    console.log("Hello");
};
// console.log(str1 == num1); //error
function greet(name) {
    console.log(`Hello, ${name}`);
}
// greet(5); //error
// greet("Zilen");
function printName(obj) {
    if (obj.lastName !== undefined) {
        console.log(`Hello, ${obj.firstName} ${obj.lastName}`);
    }
    else {
        console.log(`Hello, ${obj.firstName}`);
    }
}
// printName({ firstName: "zilen", lastName: "Modi" });
let var1 = "5";
let var2 = "5";
let user1 = {
    name: "Zilen Modi",
    age: 21,
};
let vehicle1 = {
    name: "Activa",
    modelNo: 9878,
};
console.log(vehicle1);
