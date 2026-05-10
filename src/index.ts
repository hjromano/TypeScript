class Animal {
    constructor(public name: string) {}
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meow!");
    }
}

function createInstance<T extends Animal>(Class: new(name: string) => T, name: string) {
    return new Class(name);
}

const dog = createInstance(Dog, "Buddy");
const cat = createInstance(Cat, "Whiskers");