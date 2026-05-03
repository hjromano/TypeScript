function isEqual<T>(a: T, b: T): boolean {
    return a === b;
}

isEqual(1, 1); // true
isEqual('hello', 'hello'); // true
isEqual(1, 2); // false

