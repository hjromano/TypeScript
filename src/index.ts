function loglength<T extends { length: number }>(item: T){
    console.log(item.length);
}

const numbers = [1, 2, 3, 4, 5];
const myobj = { length: 10};
const myName = "John Doe";

loglength(numbers);
loglength(myobj);
loglength(myName);