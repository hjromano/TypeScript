class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    MakeSound():void {
        console.log(`${this.name} esta fazendo um som.`);
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    MakeSound(): void {
        console.log(`${this.name} esta latindo.`);
    }
}

const dog = new Dog("Rex", 5, "Labrador");
dog.MakeSound(); // Output: Rex esta latindo.
