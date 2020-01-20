class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} performs ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has a salary of ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `software development`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `testing`;
    }
}

const dev = new Developer("Mark", 5000);
console.log(dev.getPaid()); // Mark has a salary of 5000
console.log(dev.work()); // Mark performs software development

const tester = new Tester("Bob", 3000);
console.log(tester.getPaid()); // Bob has a salary of 3000
console.log(tester.work()); // Bob performs testing
