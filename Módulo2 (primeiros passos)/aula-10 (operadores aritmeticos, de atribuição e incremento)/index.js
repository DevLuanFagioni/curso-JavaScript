// Operadores atitmeticos
// + Adição / concatenação
// - subtracao
// / divisao
// * multiplicacao
// ** potenciacao
// % resto da divisao

// Precedencia, algumas operações são feitas primeiro que outras ex
// podemos alterar a precedencia com ()
const num1 = 5
const num2 = 2
const num3 = 10
console.log(num1 + num2 * num3)

// correto será 
console.log(num1 + num2 * num3)

// ordem das precedencias
//     ()
//     **
//     *, /, %
//     +, -


// Incremento e decremento
// modifica o valor da varivel adicionando 1 ao valor
// sabendo disso não podemos utilizar const por que está variavel não pode ser modificado o valor


let contador = 1
contador++ // 2
contador++ // 3
++contador // 4
++contador // 5
--contador // 4
contador-- // 3
console.log(contador)


let contador2 = 0
contador += 2
console.log()


// Correção
// js tentara corrigir as operações por mais que estamos fazendo uma operação com tipos de dados diferentes

const a = 10
const b = '5'
console.log(a + b)


// parseInt()  converte uma string para um numero inteiro nao retornando casas decimais já o parseFloat() converte para um numero e entende as casas decimais e temos tambem o Number() que faz a conversão sem nenhuma destinção
const c = 10
const d = Number('5')
console.log(c + d)