### Basics

- **Class Syntax:**
    
    ```jsx
    class Person {
        ssn: string;
        firstName: string;
        lastName: string;
    
        constructor(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }
    
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    
    let person = new Person('071', 'Zilen', 'Modi');
    console.log(person.getFullName());
    ```
    
- **The private modifier:** The `private` modifier limits the visibility to the same-class only. When you add the `private` modifier to a property or method, you can access that property or method within the same class.
    
    ```jsx
    private ssn: string;
    private firstName: string;
    private lastName: string;
    ```
    
- **The public modifier:** The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.
    
    ```jsx
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    ```
    
- **The protected modifier:**
    
    The `protected` modifier allows properties and methods of a class to be accessible within same class and within subclasses.
    
    When a class (child class) inherits from another class (parent class), it is a subclass of the parent class. The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.
    
    ```jsx
    protected ssn: string;
    ```
    
- **Inheritance:**
    
    ```jsx
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
    
    ```jsx
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
    
    ```jsx
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