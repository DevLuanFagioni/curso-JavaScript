// Tipos de dados: string, number, null, boolean, symbol(veremos no futuro)

const nome = 'Luan'; // string
const nome1 = 'Luan'; // string
const nome2 = 'Luan'; // string
const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
// obs: undefined é quando o proprio javaScript entende que a variavel não aponta para um local na memória

const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
// obs: null é quando utilizamos propositalmente para definir que uma variavel não aponta para um local na memória

const aprovado = false; // Boolean = true, false (lógico)
// utilizado para fazer verificações

// console.log(typeof(nome, nome))
// console.log(typeof(num1, num1))
// console.log(typeof(sobrenomeAluno, sobrenomeAluno))
// console.log(typeof(aprovado, aprovado))
// typeof é utilizado para verificar o tipo de dados que está armazenado em uma variavel, podendo ter um valor trazendo o tipo de dado ex: typeof(nome) ou podendo ter dois valores trazendo o tipo de dado da variavel e tambem o que está armazenado nela ex: typeof(nome, nome)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2