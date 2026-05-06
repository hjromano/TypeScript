class MyCustomArray<T> {
    private items: T[] = [];

    public add(item: T){
        this.items.unshift(item);
    }
    public remove(){
        return this.items.shift()
    }
    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const myCustomStringArr = new MyCustomArray<string>();
myCustomStringArr.add("Hello");
const removed = myCustomStringArr.remove();

const myCustomNumberArr = new MyCustomArray<number>();
myCustomNumberArr.add(42);

interface Player {
    name: string;
    health: number;
    shield: number;
    isDead: boolean;
}

const players = new MyCustomArray<Player>();

players.add({ name: "Player1", health: 100, shield: 50, isDead: false });

const removedPlayer = players.remove();
if (removedPlayer) {
    removedPlayer.name
}