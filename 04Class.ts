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

export { }