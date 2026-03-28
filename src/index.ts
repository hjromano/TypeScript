export class Player {
    name: string;
    health: number | undefined;
    constructor(name: string){
        this.name = name;
        this.health = 100;
    }

}

const player1 = new Player("Higor");

player1.health;