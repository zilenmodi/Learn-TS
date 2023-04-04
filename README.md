### Basics

- Narrowing is technique to narrow down union operation using if/else if.
    
    ```jsx
    function solve(dbID: string | number) {
        if (typeof dbID === "string") {
            return dbID.length;
        }
        return dbID;
    }
    ```
    
- Check narrowing using `in` keyword.
    
    ```jsx
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
    
    ```jsx
    function logValue(x: Date | string) {
        if (x instanceof Date) {
            console.log(x.toUTCString());
        } else {
            console.log(x.toUpperCase());
        }
    }
    ```
    
- **Assignments**
    
    ```jsx
    let x = Math.random() < 0.5 ? 10 : "hello world!";
    x = true // Error -> x = string | number
    ```
    
- **Predicates:**
    
    ```jsx
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
        
        ```jsx
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
        
        ```jsx
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
    
    ```jsx
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
    
    ```jsx
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