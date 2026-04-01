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

const dog = new Animal("Rex", 5);
dog.MakeSound();