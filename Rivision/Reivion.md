# Typescript

### Basics

- Types
  - define variable using name: string, number, boolean, any, never.
    ```
    let myName: string = "Zilen"
    console.log(myName); //"zilen"

    ```
  - **any:** `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.
    ```
    let dbID: any = "123"
    let dbID: any = 123

    ```
  - **Arrays:** string[] or Array<string>
    ```
    const superHeros: string[] = []
    superHeros.push("batman", "superman")

    const strength: Array<number> = []
    strength.push(39);

    const graph: number[][] = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    ```
  - **Function:** return either boolean or string (union operator -> |)
    ```
    function setName(name: String, id: number, isActive: boolean = true): boolean | string { //take string as arg1, number as arg2 and boolean as arg3
        console.log(name);
        if (id > 5) {
            return true;
        }
        return "Error 404"
    }
    console.log(setName("Modi", 2));

    ```
    ```
    const heros = ["batman", "superman", "aquaman"]
    // const heros = [1, 2, 3] //error because it's number
    heros.map((hero: string): void => {
        console.log(`Hero is ${hero}`);
    })

    ```
  - **Object:**
    ```
    function createUser({ name: string, isActive: boolean }) { }

    // createUser({ name: "zilen", isActive: true, email: "a@com" }) //not run
    let newUser = { name: "zilen", isActive: true, email: "a@com" }
    createUser(newUser) //no error

    type User = {
        readonly _id: number, //just read
        name: string,
        email: string,
        isActive: boolean,
        creditCard?: string //optional -> ?
    }

    ```
  - **Union Types:**
    ```
    function printId(id: number | string) {
      console.log("Your ID is: " + id);
    }

    printId(101);

    printId("202");

    printId({ myID: 22342 }); //Error

    ```
    ```
    function printId(id: number | string) {
      console.log(id.toUpperCase()); //this gives error coz id maybe number
    }

    ```
    ```
    let dbid: string | number = 12 // union op -> |
    dbid = "12"

    const data: (string | number)[] = [1, "2"]
    let pie: 3.14 = 3.14
    // pie = 3.145 //Type '3.145' is not assignable to type '3.14'

    let seatAllotement: "aisle" | "middle" | "window"
    seatAllotement = "window";

    ```
    **Solution:** The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
    ```
    function printId(id: number | string) {
      if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
      } else {
        // Here, id is of type 'number'
        console.log(id);
      }
    }

    ```
  - **Type alias:**
    ```
    type User = {
        readonly _id: number, //just read
        name: string,
        email: string,
        isActive: boolean,
        creditCard?: string //optional -> ?
    }

    //combination based on old type using &
    type Student = User & {
        enroll: number
    }

    function createUser(user: Student): User { return user }
    let myUser = { _id: 324, name: "zilen", email: "z@com", isActive: true, enroll: 34 }
    createUser(myUser)
    myUser._id = 10 // _id is readonly

    ```
  - **Tuple:**
    ```
    let user: [string, number, boolean] = ["zilen", 123, true]

    type User = [string, number, boolean]
    let myUser: User = ["zilen", 123, true]
    myUser.push(90) //bugggggggggggggggggg

    //make it readonly

    type pairType1 = readonly [string, number];
    let x: pairType1 = ["Zilen", 23];

    x.push(4); //error

    ```
  - **Interface:** broad view of class.
    ```
    interface Car {
        name: string,
        color: string,
        setGear(num: number): void
        setHighSpeed: (num: number) => void
        readonly numberPlat: string
        isManual?: boolean
    }

    //reopening interface
    interface Car {
        capacity: number
    }

    //inherit interface
    interface Honda extends Car {
        name: "Honda City" | "Honda Jazz" | "Honda Amaze"
    }

    const city: Honda = {
        name: "Honda Amaze",
        color: "brown",
        setGear: (num) => {
            console.log("Gears : ", num);
        },
        setHighSpeed(num) {
            console.log("High Speed : ", num);
        },
        numberPlat: "GJ 1 1001",
        isManual: true,
        capacity: 7
    }

    // city.setGear(6);

    console.log(city);

    ```
  - **Enum:**
    ```
    enum colors {
        RED,
        GREEN = 12,
        BLUE //colors.BLUE = 13
    }

    console.log(colors.RED);

    ```
  - **unknown:** An `unknown` type variable, same as `any`, accepts any value. But when trying to use the `unknown` variable, TypeScript enforces a type check. Exactly what you need!
    ```
    function invokeAnything(callback: unknown) {
        if (typeof callback === 'function') {
            callback();
        }
        // callback() //error show
    }

    invokeAnything(1);

    ```
  - I/O
    ```jsx
    declare function handleRequest(url: string, method: "GET" | "POST"): void;

    const req1 = { url: "https://example.com", method: "GET" };
    handleRequest(req1.url, req1.method); //error method is string not GET | POST
    ```
    Sol 1:
    ```jsx
    const req1 = { url: "https://example.com", method: "GET" } as const;
    ```
    - Define “as const” we can’t change “GET” to anything.
    Sol 2:
    ```jsx
    type RequestType1 = {
      url: string,
      method: "GET" | "POST",
    };
    const req2: RequestType1 = { url: "https://example.com", method: "GET" };
    handleRequest(req2.url, req2.method);
    ```
- Narrowing
  - Narrowing is technique to narrow down union operation using if/else if.
    ```
    function solve(dbID: string | number) {
        if (typeof dbID === "string") {
            return dbID.length;
        }
        return dbID;
    }

    ```
  - Check narrowing using `in` keyword.
    ```
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };

    function move(animal: Fish | Bird) {
        if ("swim" in animal) {
            return animal.swim();
        }
        return animal.fly();
    }

    ```
  - **instanceof** narrowing:
    ```
    function logValue(x: Date | string) {
        if (x instanceof Date) {
            console.log(x.toUTCString());
        } else {
            console.log(x.toUpperCase());
        }
    }

    ```
  - **Assignments**
    ```
    let x = Math.random() < 0.5 ? 10 : "hello world!";
    x = true // Error -> x = string | number

    ```
  - **Predicates:**
    ```
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };

    declare function getSmallPet(): Fish | Bird;

    function isFish(pet: Fish | Bird): boolean {
        return (pet as Fish).swim !== undefined;
    }

    let pet = getSmallPet();

    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }

    ```
    - isFish return some value but it forget when times to call methods, that's why predicates is necessary.
    - The pet is Fish syntax in the isFish function is a type predicate that helps TypeScript understand that if the function returns true, then the object being checked is a Fish.
    - **Solution:**
      ```
      type Fish = { swim: () => void };
      type Bird = { fly: () => void };

      declare function getSmallPet(): Fish | Bird;

      function isFish(pet: Fish | Bird): pet is Fish {
          return (pet as Fish).swim !== undefined;
      }

      let pet = getSmallPet();

      if (isFish(pet)) {
          pet.swim();
      } else {
          pet.fly();
      }

      ```
    - **Example 2:**
      ```
      declare function getType(): string | number;

      function isString(type: string | number): type is string {
          return typeof type === "string";
      }

      let type = getType();

      //to resolve we have to return true then string
      if (isString(type)) {
          type; //pet is string | number
      } else {
          type; //pet is string | number
      }

      ```
  - **Discriminated unions:** Define interface with something that can identify which interface is that.
    ```
    interface Circle {
        kind: "circle",
        radius: number
    }

    interface Square {
        kind: "square",
        length: number
    }

    type Shape = Circle | Square;

    function getArea(shape: Shape) {
        if (shape.kind === "circle") {
            return Math.PI * shape.radius ** 2
        }
        return shape.length * shape.length;
    }

    ```
  - When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a **`never`** type to represent a state which shouldn’t exist.
    ```
    interface Circle {
        kind: "circle",
        radius: number
    }

    interface Square {
        kind: "square",
        length: number
    }

    type Shape = Circle | Square;

    function getArea(shape: Shape) {
        switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.length * shape.length;
            default:
                const _exhaustiveCheck: never = shape;
                return _exhaustiveCheck;
        }
    }

    ```
- Functions
  - Define callback function types
    ```jsx
    type fn = {
      (a: string[]): void,
    };

    declare function print(callback_fn: fn): void;

    declare function callback_fn(strs: string[]): void;

    print(callback_fn);
    ```
  - Call signature is not possible in function expression. Call signature is known as we can call definition with fn name;
    ```jsx
    type fn = {
      des: string,
      (a: string[]): void,
    };

    declare function print(callback_fn: fn): void;

    declare function callback_fn(strs: string[]): void;

    callback_fn.des = "Zilen";
    print(callback_fn);
    ```
  - Using new before () : Constructor signature
    ```jsx
    type fn = {
      new(a: string): void,
    };

    function print(callback_fn: fn): void {
      return new callback_fn("zilen");
    }
    ```
  - Both
    ```jsx
    type fn = {
      new(a: string): void, //using new
      (n?: number): void, //nomally
    };

    function print1(callback_fn: fn): void {
      return new callback_fn("Zilen");
    }

    function print2(callback_fn: fn): void {
      return callback_fn();
    }
    ```
  - When we have to constraint for two related value like string and array for {length:number} but number don’t have length property.
    ```jsx
    function firstElement<Type extends { length: number }>(arr: Type): number {
      return arr.length;
    }

    let arr1 = firstElement(["1"]);
    let arr2 = firstElement<string>("zilen");
    // let arr3 = firstElement<number>(1000); // error number don't have length
    ```
  - Function overloading: Different parameters and its type, **return value will be same**.
    ```jsx
    function fn(x: number): void;
    function fn(x: string): void;
    function fn(x: number | string): void {
      console.log(x);
    }

    console.log(fn("Zilen"));
    console.log(fn(10));
    // console.log(fn(true)); // error not match overload function

    // function fn(x: number | string): void; Solution
    // fn(Math.random() > 0.5 ? "Zilen" : 10); // error not match overload function
    ```
- Generics
  - TypeScript generics allow you to write the reusable and generalized form of functions, classes, and interfaces.
  - **Function Generics:**
    ```
    function print<T>(arg: T): void {
        console.log(arg);
    }

    print<string>("Zilen") //zilen

    ```
    ```
    function getRandomElement<T>(items: T[]): T {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

    let num = getRandomElement<number>([1, 2, 3, 4, 5, 6, 7])
    console.log(num); //4

    ```
  - The `merge()` function expects two objects. However, it doesn’t prevent you from passing a non-object like this:
    ```
    function merge<U, V>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }

    ```
    ```
    let person = merge(
        { name: 'John' },
        25
    );

    ```
  - In order to denote the constraint, you use the `extends` keyword. For example:
    ```
    function merge<U extends object, V extends object>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }

    ```
  - The following `prop()` function accepts an object and a property name. It returns the value of the property.
    ```
    function prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    ```
    - Issue is when we are trying to access key which not exists, Then it’s give error. So, using keyof Type, We get union of all keys.
      ```
      function prop<T>(obj: T, key: "name" | "id") {
          return obj[key];
      }
      prop({ name: "Zilen" }, "name")

      ```
    - Same as above:
      ```
      function prop<T, U extends keyof T>(obj: T, key: U) {
          return obj[key];
      }
      prop({ name: "Zilen" }, "name")

      ```
  - **Generics Class:**
    ```
    class Stack<T> {
        private elements: T[] = [];

        constructor(private size: number) {
        }
        isEmpty(): boolean {
            return this.elements.length === 0;
        }
        isFull(): boolean {
            return this.elements.length === this.size;
        }
        push(element: T): void {
            if (this.elements.length === this.size) {
                throw new Error('The stack is overflow!');
            }
            this.elements.push(element);

        }
        pop(): T {
            if (this.elements.length !== 0) {
                return this.elements.pop()!;
            }
            throw new Error('The stack is empty!');
        }
    }

    let stack = new Stack<number>(5)

    ```
  - **Generics type alias:**
    ```
    type Pair<KeyT, ValueT> = {
      key: KeyT;
      value: ValueT;
    };

    let p1: Pair<number, string> = {
      key: 876876,
      value: "Zilen",
    };
    ```
  - **Generics Interface:**
    ```
    interface Pair<K, V> {
        name: K;
        marks: V;
    }

    let arrPair: Pair<string, number[]>[] = [];
    arrPair.push({ name: "Zilen", marks: [89, 95, 83] })
    arrPair.push({ name: "Vivek", marks: [91, 95, 84] })
    console.log(arrPair);

    ```
    ```
    interface Pair<T, V> {
      key: T;
      value: V;
    }

    type User = {
      name: string;
      age: number;
      location?: string;
    };

    let users: Pair<string, User>[] = [];

    let u1: Pair<string, User> = {
      key: "67562",
      value: {
        name: "Zilen",
        age: 21,
      },
    };

    let u2: Pair<string, User> = {
      key: "57634",
      value: {
        name: "Om",
        age: 21,
      },
    };

    users.push(u1, u2);
    ```
- Classes
  - Basics classes and getter setter
    - If `get` exists but no `set`, the property is automatically `readonly`
    - If the type of the setter parameter is not specified, it is inferred from the return type of the getter
    - Getters and setters must have the same [Member Visibility](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
    ```
    class Animal {
      readonly name: string = "undefined";
      constructor(name: string) {
        this.name = name;
      }
      changeName(name: string) {
        // this.name = name; //error readonly
      }
    }

    class Dog extends Animal {
      type: string;
      _age: number = 0;
      constructor(name: string, type: string) {
        super(name);
        this.type = type;
      }
      set age(value: number) {
        this._age = value;
      }
      get age(): number {
        return this._age;
      }
    }

    const dog1 = new Dog("Dog", "Labrador");
    dog1.age = 5;
    console.log(dog1.age);
    ```
  - Call signature
    ```
    class MyClass {
      [s: string]: number | ((s: string) => number);

      salary = 20000;

      age = (s: string): number => {
        return Number(s);
      };
    }
    ```
  - **The private modifier:** The `private` modifier limits the visibility to the same-class only. When you add the `private` modifier to a property or method, you can access that property or method within the same class.
    ```
    private ssn: string;
    private firstName: string;
    private lastName: string;

    ```
  - **The public modifier:** The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.
    ```
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    ```
  - **The protected modifier:**
    The `protected` modifier allows properties and methods of a class to be accessible within same class and within subclasses.
    When a class (child class) inherits from another class (parent class), it is a subclass of the parent class. The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.
    ```
    protected ssn: string;

    ```
  - **Inheritance:**
    ```
    class Person {
        protected ssn: string;
        private firstName: string;
        private lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.ssn = "34"
        }

        public getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    class Employee extends Person {
        constructor(
            firstName: string,
            lastName: string,
            private jobTitle: string) {

            super(firstName, lastName);
        }
        public getJob(): string {
            return `Job title: ${this.jobTitle}`
        }
    }

    let person = new Employee('Zilen', 'Modi', "React Developer");
    console.log(person.getJob());

    ```
  - **Method Overriding:**
    ```
    class Person {
        protected ssn: string;
        private firstName: string;
        private lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.ssn = "34"
        }

        public getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    class Employee extends Person {
        constructor(
            firstName: string,
            lastName: string,
            private jobTitle: string) {

            super(firstName, lastName);
        }
    		//overriding using super keyword
        public getDesc(): string {
            return super.getFullName() + ` and Job title: ${this.jobTitle}`
        }
    }

    let person = new Employee('Zilen', 'Modi', "React Developer");
    console.log(person.getDesc());

    ```
  ### Abstract Class
  - An abstract class is typically used to define common behaviors for derived classes to extend. Unlike a regular class, an abstract class cannot be instantiated directly.
  - The following shows the `Employee` abstract class that has the `getSalary()` abstract method:
    ```
    class Person {
        protected ssn: string;
        private firstName: string;
        private lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.ssn = "34"
        }

        public getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    abstract class Employee extends Person {
        constructor(
            firstName: string,
            lastName: string,
            private jobTitle: string) {

            super(firstName, lastName);
        }
        public getDesc(): string {
            return super.getFullName() + ` and Job title: ${this.jobTitle}`
        }
        abstract getSalary(): number;
    }

    class FullTimeEmployee extends Employee {
        constructor(firstName: string,
            lastName: string,
            jobTitle: string) {
            super(firstName, lastName, jobTitle)
        }
        getSalary() {
            return 50000;
        }
    }

    let person = new FullTimeEmployee('Zilen', 'Modi', "React Developer");
    console.log(person.getSalary());

    ```
  - **Pizza Store example**
    ```
    interface Pizza {
      name: string;
      price: number;
      toppings: string[];
    }

    abstract class PizzaStore {
      protected abstract createPizza(type: string): Pizza;

      orderPizza(type: string): Pizza {
        const pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
      }
    }

    class MargheritaPizza implements Pizza {
      name = "Margherita";
      price = 8.99;
      toppings = ["Tomato", "Mozzarella", "Basil"];

      prepare() {
        console.log(`Preparing ${this.name} pizza...`);
      }

      bake() {
        console.log(`Baking ${this.name} pizza...`);
      }

      cut() {
        console.log(`Cutting ${this.name} pizza into slices...`);
      }

      box() {
        console.log(`Placing ${this.name} pizza in a box...`);
      }
    }

    class PepperoniPizza implements Pizza {
      name = "Pepperoni";
      price = 9.99;
      toppings = ["Tomato", "Pepperoni", "Cheese"];

      prepare() {
        console.log(`Preparing ${this.name} pizza...`);
      }

      bake() {
        console.log(`Baking ${this.name} pizza...`);
      }

      cut() {
        console.log(`Cutting ${this.name} pizza into slices...`);
      }

      box() {
        console.log(`Placing ${this.name} pizza in a box...`);
      }
    }

    class PaneerPizza implements Pizza {
      name = "Pepperoni";
      price = 9.99;
      toppings = ["Tomato", "Pepperoni", "Cheese"];

      prepare() {
        console.log(`Preparing ${this.name} pizza...`);
      }

      bake() {
        console.log(`Baking ${this.name} pizza...`);
      }

      cut() {
        console.log(`Cutting ${this.name} pizza into slices...`);
      }

      box() {
        console.log(`Placing ${this.name} pizza in a box...`);
      }
    }

    class NewYorkPizzaStore extends PizzaStore {
      protected createPizza(type: string): Pizza {
        if (type === "margherita") {
          return new MargheritaPizza();
        } else if (type === "pepperoni") {
          return new PepperoniPizza();
        } else {
          throw new Error(`Invalid pizza type: ${type}`);
        }
      }
    }

    class ChicagoPizzaStore extends PizzaStore {
      protected createPizza(type: string): Pizza {
        if (type === "paneer") {
          return new PaneerPizza();
        } else if (type === "pepperoni") {
          return new PepperoniPizza();
        } else {
          throw new Error(`Invalid pizza type: ${type}`);
        }
      }
    }

    // Example usage
    const nyPizzaStore = new NewYorkPizzaStore();
    const margheritaPizza = nyPizzaStore.orderPizza("margherita");
    console.log(margheritaPizza);

    const pepperoniPizza = nyPizzaStore.orderPizza("pepperoni");
    console.log(pepperoniPizza);
    ```
- Declare
  1. Declare Variables:

     ```
     declare let myLibrary: any;
     ```

     This declares a variable **`myLibrary`** without defining its type. It indicates that **`myLibrary`** is defined externally, and the type checking is deferred to runtime or other means (e.g., through type declaration files).

  2. Declare Functions:

     ```
     declare function myFunction(param: string): void;
     ```

     This declares a function **`myFunction`** without providing an implementation. It specifies the function's signature, including the parameter types and the return type.

  3. Declare Classes:

     ```
     declare class MyClass {
       constructor(param: string);
       myMethod(): void;
     }
     ```

     This declares a class **`MyClass`** without defining its implementation. It outlines the constructor signature and the available methods of the class.

  4. Declare Modules/Namespace:

     ```
     declare namespace MyModule {
       let myVariable: number;
       function myFunction(): string;
     }
     ```

     This declares a module or namespace **`MyModule`** without specifying its internal structure. It indicates the existence of a module with the specified name and the availability of variables and functions within that module.
- Advance Types
  - Key of Opeartor: Return all key with union as type.
    ```
    type AB = keyof { a: number; b: string }; // "a" | "b"
    ```
    ```
    type Arrayish = { [n: number]: unknown };
    type A = keyof Arrayish; // "number"
    ```
    ```
    type Arrayish = { [n: string]: unknown };
    type A = keyof Arrayish; // "number" | "string"
    ```
    - At above example [n: string], So it can be number also like [0] and [”0”] are same.
  - Type of Operator: Return type of variable or function.
    ```
    let x: string = "Zilen";
    let y: number = 10;
    type AB = typeof x | typeof y; // string | number
    ```
    ```
    type fn = (a: string) => number;
    type RType = ReturnType<fn>; // number
    ```
  - Index access Type.
    ```
    type TType = {
      name: string;
      age: number;
    };

    type UType1 = TType["name"]; // string
    type UType2 = TType[keyof TType]; // string | number

    // const key = "age";
    // type Age = TType[key]; //key refereed to value, but used as type.

    type key = "age";
    type Age = TType[key]; //key used as type.
    ```
  - Conditional Types: Very Useful to return type conditionally.
    1. number → string | string → number

       ```
       type NumberOrString<T extends number | string> = T extends number
         ? string
         : number;

       function createLabel<T extends number | string>(
         NumOrStr: T
       ): NumberOrString<T> {
         throw "unimplemented";
       }

       let a = createLabel<string>("typescript");
       let b = createLabel<number>(2.8);
       ```

    2. Conditional based return

       ```
       type API = {
         id: string;
       };

       // type IdType<T extends { id: unknown }> = T["id"];
       type IdType<T> = T extends { id: unknown } ? T["id"] : never;

       type IdMessageType = IdType<API>;

       let id: IdMessageType = "454";
       ```

    3. Simple

       ```
       type ToArray<Type> = Type extends any ? Type[] : never;

       type BolArr = ToArray<string>;
       ```
  - Mapped Type
    - [key: string] : boolean
    - [Property in keyof Type] : Type[Property]
    - -readonly and -? ⇒ remove both using “-”.
    ```
    type User = {
      name: string;
      age: number;
      city: string;
    };

    type StringKey = {
      [key: string]: boolean;
    };

    type OnlyBoolVal<Type> = {
      -readonly [Property in keyof Type]-?: boolean;
    };
    ```
    1. Example
    ```
    type User = {
      name: string;
      age: number;
      city: string;
    };

    type OnlyGetFunction<Type> = {
      [Property in keyof Type as `set${Capitalize<string & Property>}`]: (
        Property: Type[Property]
      ) => void;
    };

    let getUser: OnlyGetFunction<User> = {
      setName(name: string) {
        console.log(name);
      },
      setAge(age: number) {
        console.log(age);
      },
      setCity(city: string) {
        console.log(city);
      },
    };

    getUser.setName("Zilen Modi");
    ```
    - Conditional Type
    ```
    [Property in keyof Type]: Type[Property] extends any? any : never;
    ```
  - Template Literals
    ```
    type size = "small" | "medium" | "large";
    type color = "primary" | "secondary"

    type styles = `${size}-${color}`

    ```
    Output:
    ```
    "small-primary" | "small-secondary" | "medium-primary" | "medium-secondary" | "large-primary" | "large-secondary"
    ```
- My Utility Class
  - MyPartial
    ```
    type MyPartial<T> = {
      [key in keyof T]?: T[key];
    };
    ```
  - MyRequired
    ```
    type MyRequired<T> = {
      [key in keyof T]-?: T[key];
    };
    ```
  - MyReadonly
    ```
    type MyReadonly<T> = {
      +readonly [key in keyof T]: T[key];
    };
    ```
  - MyRecord
    ```
    type MyRecord<K extends string, V> = {
      [key in K]: V;
    };
    ```
    - Example 1:
    ```
    type Colors = "Red" | "Blue" | "Black";

    type ColorsObj<T extends string> = {
      [ket in T]?: number;
    };

    type ColorObjType = ColorsObj<Colors>;

    let myObj: MyRecord<string, ColorObjType> = {
      Zilen: {
        Red: 10,
      },
      Vivek: {
        Blue: 20,
        Black: 30,
      },
      Abhi: {
        Red: 50,
      },
    };
    ```
    - Example 2:
    ```
    type MyRecord<K extends string, V> = {
      [key in K]: V;
    };

    type MyPartial<T> = {
      [key in keyof T]?: T[key];
    };

    type Colors = "Red" | "Blue" | "Black";

    let yourObj: MyRecord<string, MyPartial<MyRecord<Colors, number>>> = {
      Zilen: {
        Red: 10,
      },
      Vivek: {
        Blue: 20,
        Black: 30,
      },
      Abhi: {
        Red: 50,
      },
    };
    ```
  - MyPick
    ```
    type MyPick<T, P extends keyof T> = {
      [key in P]: T[key];
    };
    ```
    - Example 1:
    ```
    type MyPick<T, P extends keyof T> = {
      [key in P]: T[key];
    };

    interface User {
      name: string;
      age: number;
    }

    type UserPreview = MyPick<User, "age">;

    const user: UserPreview = {
      age: 21,
    };

    console.log(user); // { age: 23 }
    ```
  - MyOmit
    ```
    type MyOmit<T, P extends keyof T> = {
      [key in keyof T as key extends P ? never : key]: T[key];
    };
    ```
    - Example 1:
    ```
    interface User {
      name: string;
      age: number;
      city: string;
    }

    type UserPreview = MyOmit<User, "age">;

    const user: UserPreview = {
      name: "zilen",
      city: "adi",
    };

    console.log(user); // {name: "zilen",city: "adi", }
    ```
  - MyExclude
    ```
    type MyExclude<T, U> = T extends U ? never : T;
    ```
    - Example 1:
    ```
    type A = "a" | "b" | "c";
    type B = "c";

    type MyExcludeType = MyExclude<A, B>;
    ```
  - MyExtract
    ```
    type MyExtract<T, U> = T extends U ? T : never;
    ```
    - Example 1:
    ```
    type A = "a" | "b" | "c";
    type B = "c" | "f";

    type MyExcludeType = MyExtract<A, B>; //"c"
    ```
  - MyNonNullable
    ```
    type MyNonNullable<T> = T extends null | undefined ? never : T;
    ```
    - Example 1:
    ```
    type T0 = MyNonNullable<string | number | undefined>; // "string" | "number"

    type T1 = MyNonNullable<string[] | null | undefined>; // "string[]"
    ```
