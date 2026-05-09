function combine <T extends number | string> (a: T, b: T): string {
    return `${a}${b}`;
}

combine(10, 22);
combine('Hello', 'World');
combine(10, 'World'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.