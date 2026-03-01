function createUser(name) {
    return {name, createAt: new Date()}
}

const higor = createUser("Higor");

function updateWallet(user, wallet) {
    user.wallet = {...user.wallet, ...wallet}
}

updateWallet(higor, {coins: 10 })