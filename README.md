# Learn-TS
### Basics

- The `keyof` operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:
    
    ```jsx
    type Point = { x: number; y: number };
    type P = keyof Point;
    type Q = "x" | "y" //P===Q
    ```
    
- JavaScript already has a `typeof` operator you can use in an expression context:
    
    ```jsx
    let s = "hello";
    let n: typeof s; //typeof n is string
    ```
    
- Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:
    
    ```jsx
    type Points = {
        x: number;
        y: number;
    }
    
    type ReadonlyPoints = {
        readonly [key in 'x' | 'y']: number;
    }
    
    type Readonly<T> = {
        readonly [key in keyof T]: T[key];
    }
    
    let p1: Readonly<Points> = {
        x: 0,
        y: 0
    }
    ```
    
- Template Literals
    
    ```jsx
    type size = "small" | "medium" | "large";
    type color = "primary" | "secondary"
    
    type styles = `${size}-${color}`
    ```