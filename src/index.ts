export class Player {
    private name: string;
    private health: number;
    constructor(name: string){
        this.name = name;
        this.health = 100;
    }
    public getName(){
        return this.name;
    }
    public getHealth(){
        return this.health;
    }
    public damage(amount: number, damager?: Player){
        const updatedHealth = this.health - amount;
        console.log(damager
            ? `${damager.getName()} causou ${amount} de dano em ${this.name}.`
            : `${this.name} recebeu ${amount} de dano.`

        )

        if(updatedHealth <= 0){
            this.health = 0;
            this.die();
            return
        }
        this.health = updatedHealth;
    }
    private die(damager?: Player){
        if(damager){
            console.log(`${this.name} foi morto por ${damager.getName()}.`);
            return;
        }
        console.log(this.name + " morreu!");
    }

}


const Higuito = new Player("Higuito");
const Maradona = new Player("Maradona");

Higuito.damage(30, Maradona);


