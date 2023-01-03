// let num1 = 1
// let num2 = 2

// toString() tranforma temporariamente um number em uma string
// console.log(num1.toString() + num2)
// console.log(typeof num1)

// toString() tranforma um number em uma string
// num1 = num1.toString()
// console.log(typeof num1)

// toFixed conseguimos formatar quantas casas decimais queremos no number
// let num3 = 15.356789089
// console.log(num3.toFixed(2))

// Number.isInteger() verifica se o valor é um numero inteiro ou nao, retornando booleano
// console.log(Number.isInteger(num3))
// console.log(Number.isInteger(num2))

// Number.isNaN() verifica se a conta é invalida, retornando booleano
// let temp = num1 * 'ola'
// console.log(Number.isNaN(temp))

// let temp2 = num1 * '5'
// console.log(Number.isNaN(temp2))


// temos um problema em javaScript com questoes de casas decimais por exemplo: 
let num1 = 0.7
let num2 = 0.1
num1 = num1 + num2 // ou num1 += num2
console.log(num1)

// para corrigir isto podemos fazer desta atraves de funções
num1 = Number(num1.toFixed(2))
console.log(num1)

// tambem conseguimos resolver atravez de operações
let num3 = 0.7
num3 = ((num3 * 100) + (num2 * 100)) / 100
console.log(num3)