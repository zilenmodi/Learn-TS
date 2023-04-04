### Basics

- define variable using name: string, number, boolean, any, never.
    
    ```jsx
    let myName: string = "Zilen"
    console.log(myName); //"zilen"
    ```
    
- **any:** `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.
    
    ```jsx
    let dbID: any = "123"
    let dbID: any = 123
    ```
    
- **Arrays:** string[] or Array<string>
    
    ```jsx
    const superHeros: string[] = []
    superHeros.push("batman", "superman")
    
    const strength: Array<number> = []
    strength.push(39);
    
    const graph: number[][] = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    ```
    
- ******************Function:****************** return either boolean or string (union operator -> |)
    
    ```jsx
    function setName(name: String, id: number, isActive: boolean = true): boolean | string { //take string as arg1, number as arg2 and boolean as arg3
        console.log(name);
        if (id > 5) {
            return true;
        }
        return "Error 404"
    }
    console.log(setName("Modi", 2));
    ```
    
    ```jsx
    const heros = ["batman", "superman", "aquaman"]
    // const heros = [1, 2, 3] //error because it's number
    heros.map((hero: string): void => {
        console.log(`Hero is ${hero}`);
    })
    ```
    
- **************Object:**************
    
    ```jsx
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
    
    ```jsx
    function printId(id: number | string) {
      console.log("Your ID is: " + id);
    }
    
    printId(101);
    
    printId("202");
    
    printId({ myID: 22342 }); //Error
    ```
    
    ```jsx
    function printId(id: number | string) {
      console.log(id.toUpperCase()); //this gives error coz id maybe number
    }
    ```
    
    ```jsx
    let dbid: string | number = 12 // union op -> |
    dbid = "12"
    
    const data: (string | number)[] = [1, "2"]
    let pie: 3.14 = 3.14
    // pie = 3.145 //Type '3.145' is not assignable to type '3.14'
    
    let seatAllotement: "aisle" | "middle" | "window"
    seatAllotement = "window";
    ```
    
    **Solution:** The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
    
    ```jsx
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
    
    ```jsx
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
    
    ```jsx
    let user: [string, number, boolean] = ["zilen", 123, true]
    
    type User = [string, number, boolean]
    let myUser: User = ["zilen", 123, true]
    myUser.push(90) //bugggggggggggggggggg
    ```
    
- **Interface:** broad view of class.
    
    ```jsx
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
    
    ```jsx
    enum colors {
        RED,
        GREEN = 12,
        BLUE //colors.BLUE = 13
    }
    
    console.log(colors.RED);
    ```
    
- ****unknown:**** An `unknown` type variable, same as `any`, accepts any value. But when trying to use the `unknown` variable, TypeScript enforces a type check. Exactly what you need!
    
    ```jsx
    function invokeAnything(callback: unknown) {
        if (typeof callback === 'function') {
            callback();
        }
        // callback() //error show
    }
    
    invokeAnything(1);
    ```
