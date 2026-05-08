interface Hasname {
    name: string;
}

function greet<T extends Hasname>(obj: T){
    console.log('Olá ${obj.name}!')
}

const player = {
    nick: 'Neymar'
}

const user = {
    name: 'Maria'
}

greet(user) // Olá Maria!
