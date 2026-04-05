abstract class Shape {
    abstract area(): number;

    describe(): void {
        console.log("Isso é uma forma geométrica.");
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
    describe(): void {
        console.log("Isso é um círculo.");
    }
}

const circle = new Circle(5);
circle.area(); // 78.53981633974483
circle.describe(); // Isso é um círculo.