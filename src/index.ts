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


// Criando novas interfaces a partir de outras

// interface Admin extends User {
  // name: string;
  // createAt: Date;
  // wallet?: UserWallet;
 //  ban(user: User): void;
 //  kick(user: User): void;
// }

interface Admin extends User {
    ban(user: User): void;
    kick(user: User): void;
}

function promoteUser(user: User): Admin {
    return {
        ...user,
        ban(usertoBan) {
            console.log(usertoBan, "foi banido por", this.name)
        },
        kick(usertoKick) {
            console.log(usertoKick, "foi kickado por", this.name)
        },
    }
}

const adminHigor = promoteUser(higor);

function adminActions(admin: Admin) {
}

adminActions(adminHigor);