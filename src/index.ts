class Player {
    public name: string;
    public nickname: string;
    public health: number;

    constructor(name: string, nickname: string)
    constructor(name: string, health: number)
    constructor(name: string, arg: string | number) {
        this.name = name;
        if (typeof arg === 'string') {
            this.nickname = arg;
            this.health = 100; // Default health
        } else {
            this.health = arg;
            this.nickname = name; // Default nickname is the same as name
        }
    }
}

const higor = new Player('Higor', 'Hig');
const maria = new Player('Maria', 80);