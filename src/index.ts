export class Player {
    name: string;
    private health: number;
    constructor(name: string){
        this.name = name;
        this.health = 100;
    }
    
    public getHealth(){
        return this.health;
    }
    public damage(amount: number){
        const updatedHealth = this.health - amount;

        if(updatedHealth <= 0){
            this.health = 0;
            this.die();
            return
        }
        this.health = updatedHealth;
    }
    private die(){
        console.log(this.name + " morreu!");
    }

}


const player1 = new Player("Higor");
player1.damage(30);
