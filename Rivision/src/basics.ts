let obj1: any = { x: 0 };
let str1: string = "Zilen Modi";
let num1: number = 123;

// str1 += num1; //error
let flag: boolean = true;
let notDefined: undefined = undefined;
let notPresent: null = null;

let obj2: unknown = () => {
  console.log("Hello");
};
// console.log(str1 == num1); //error

function greet(name: string) {
  console.log(`Hello, ${name}`);
}

// greet(5); //error
// greet("Zilen");

function printName(obj: { firstName: string; lastName?: string }) {
  if (obj.lastName !== undefined) {
    console.log(`Hello, ${obj.firstName} ${obj.lastName}`);
  } else {
    console.log(`Hello, ${obj.firstName}`);
  }
}

// printName({ firstName: "zilen", lastName: "Modi" });

let var1: number | string = "5";
let var2: number | string | boolean = "5";
// console.log(var1 == var2); //true

type User = {
  name: string;
  age?: number | undefined;
};

let user1: User = {
  name: "Zilen Modi",
  age: 21,
};

// console.log(user1);

interface Vehicle {
  name: string;
  modelNo: number | string;
}

let vehicle1: Vehicle = {
  name: "Activa",
  modelNo: 9878,
};

console.log(vehicle1);
