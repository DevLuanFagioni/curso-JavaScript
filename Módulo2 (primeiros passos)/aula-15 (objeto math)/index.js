// Math.floor() arredonda para baixo
// Math.ceil() arredonta para cima
// Math.round() arredonta para o mais proximo

let num1 = 5.65676
let num2 = Math.round(num1)
console.log(num2)

// podemos verificar qual o maior numero em uma lista de numeros
console.log(Math.max(1,2,3,-10,-20,4,5))

// podemos verificar qual o menor numero em uma lista de numeros
console.log(Math.min(1,2,3,-10,-20,4,5))

// podemos gerar numeros aleatorios 
console.log(Math.random())

const aleatorio = Math.round(Math.random() * (10-1) + 1)
console.log(aleatorio)

// Podemos pegar a raiz quadrada de um valor
console.log(Math.sqrt(9))

// Em Js é aceito divisão por 0, isso não ira retornar erro mas retornara um valor infinity
console.log(100 / 0)