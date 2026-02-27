// type annotations

const myName: string = "Higor"
const myAge: number = 30
const isStudent: boolean = true

// observação: essa tipagem pode receber qualquer tipo de valor, o que não é recomendado. O tipo "any" é uma forma de desativar a verificação de tipos em TypeScript, permitindo que uma variável possa receber qualquer tipo de valor. No entanto, isso pode levar a erros de runtime, pois o TypeScript não terá informações sobre o tipo da variável e não poderá fornecer verificações de tipo ou autocompletar. É recomendado evitar o uso do tipo "any" sempre que possível e usar tipos mais específicos para garantir a segurança de tipo em seu código. São utilizados para situações em que o tipo de dado é desconhecido ou pode variar, mas é importante usá-los com cuidado para evitar problemas de tipo e garantir a segurança do código.

const all: any = "qualquer coisa"

// observação 2: null e undefined, embora sejam tipos de dados, não são muito utilizados em TypeScript, pois podem levar a erros de runtime. Em vez disso, é recomendado usar o tipo "null" ou "undefined" explicitamente quando necessário. São tipos de dados que representam a ausência de valor, mas é importante usá-los com cuidado para evitar problemas de null reference ou undefined behavior. usamos junto com outros tipos para indicar que uma variável pode ser nula ou indefinida, por exemplo: "string | null" ou "number | undefined". Isso ajuda a garantir a segurança de tipo em seu código e evitar erros de runtime relacionados a valores nulos ou indefinidos.

let myNull: null = null
let myUndefined: undefined = undefined

// obeservaçã 3: simble e bigInt, são tipos de dados que representam valores primitivos em JavaScript. O tipo "symbol" é usado para criar identificadores únicos, enquanto o tipo "bigint" é usado para representar números inteiros muito grandes. Ambos os tipos são úteis em situações específicas, mas não são tão comuns quanto outros tipos de dados em TypeScript. O tipo "symbol" é frequentemente usado para criar chaves únicas em objetos ou para definir propriedades privadas, enquanto o tipo "bigint" é útil para lidar com números inteiros que excedem o limite do tipo "number". É importante usar esses tipos de dados com cuidado e entender suas características e limitações para garantir a segurança de tipo em seu código.

const mySymbol: symbol = Symbol("mySymbol")
const myBigInt: bigint = 9007199254740991n

// Anotando tipos de funções

function sum(a: number , b: number): number {
    return a + b;
}

// Argumentos opcionais

function greet(name: string, greeting?: string) {

}

// inferência de tipos

const animal = {
    name: "Dog",
    age: 5
}

// encaixando valores

const filter = (value: number) => value < 0;

const numbers = [1, -2, 3, -4, 5];

numbers.filter(filter)