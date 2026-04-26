interface Fish {
    swin: () => void;
}

interface Bird {
    fly: () => void;
}

function move(animal: Fish | Bird) {
    if ('swin' in animal) {
        animal.swin()
        return;
    }
    animal.fly()
}