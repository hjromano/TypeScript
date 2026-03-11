

interface Robot {
    name: string;
    fuel:string;
}

interface Human {
    name: string;
    age: number;
}

type Cyborg = Robot & Human;

const cyborg1: Cyborg = {
    name: "Cyborg1",
    fuel: "Electricity",
    age: 5
}