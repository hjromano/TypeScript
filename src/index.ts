class Person {
    protected age: number;
    constructor(age: number) {
        this.age = age;
    }
    protected getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    private name: string;
    constructor(name: string, age: number) {
        super(age);
        this.name = name;
    }
    public introduce(): void {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.getAge()} anos.`);
    }
}

const employee = new Employee("Higor", 30);
employee.introduce(); // Olá, meu nome é Higor e tenho 30 anos.