// interfaces

interface UserWallet {
    coins?: number;
    credits?: number;
}

interface User {
    name: string;
    createAt: Date;
    wallet?: UserWallet;
}

interface User {
    talk(): void;
}


function createUser(name: string): User {
    return {name, createAt: new Date(), 
        talk() {
            console.log("Eu sou", name)
        },
    }
}

function updateWallet(user: User, wallet: UserWallet) {
    user.wallet = { ...user.wallet, ...wallet }
}

const higor = createUser('Higor');

updateWallet(higor, { coins: 100 });