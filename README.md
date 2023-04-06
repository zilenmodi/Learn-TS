### Basics

- TypeScript generics allow you to write the reusable and generalized form of functions, classes, and interfaces.
- **Function Generics:**
    
    ```jsx
    function print<T>(arg: T): void {
        console.log(arg);
    }
    
    print<string>("Zilen") //zilen
    ```
    
    ```jsx
    function getRandomElement<T>(items: T[]): T {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }
    
    let num = getRandomElement<number>([1, 2, 3, 4, 5, 6, 7])
    console.log(num); //4
    ```
    
- The `merge()` function expects two objects. However, it doesn’t prevent you from passing a non-object like this:
    
    ```jsx
    function merge<U, V>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }
    ```
    
    ```jsx
    let person = merge(
        { name: 'John' },
        25
    );
    ```
    
- In order to denote the constraint, you use the `extends` keyword. For example:
    
    ```jsx
    function merge<U extends object, V extends object>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }
    ```
    
- The following `prop()` function accepts an object and a property name. It returns the value of the property.
    
    ```jsx
    function prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    ```
    
    - Issue is when we are trying to access key which not exists, Then it’s give error. So, using keyof Type, We get union of all keys.
        
        ```jsx
        function prop<T>(obj: T, key: "name" | "id") {
            return obj[key];
        }
        prop({ name: "Zilen" }, "name")
        ```
        
    - Same as above:
        
        ```jsx
        function prop<T, U extends keyof T>(obj: T, key: U) {
            return obj[key];
        }
        prop({ name: "Zilen" }, "name")
        ```
        
- **Generics Class:**
    
    ```jsx
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
    
- **Generics Interface:**
    
    ```jsx
    interface Pair<K, V> {
        name: K;
        marks: V;
    }
    
    let arrPair: Pair<string, number[]>[] = [];
    arrPair.push({ name: "Zilen", marks: [89, 95, 83] })
    arrPair.push({ name: "Vivek", marks: [91, 95, 84] })
    console.log(arrPair);
    ```