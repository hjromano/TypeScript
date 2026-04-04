interface Drivable{
    startEngine(): void;
    drive(): void;
}

class Car implements Drivable{
    startEngine(): void {
        console.log("Engine started.");
    }
    drive(): void {
        console.log("Car is driving.");
    }
}