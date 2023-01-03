// todas as strings sao indexidas, dentro das strings cara caracter corresponde a um indice por exemplo:

//               01234567
// let string = 'um texto'

// podemos utilizar o [] para escolher qual indice queremos na nossa string por exemplo:
// let string = 'um texto'
// console.log(string[4])


// funçoes que trabalham com string

//  charAt(); tras o que esta no indice selecionado ex:
//  let string = 'um texto'
//  console.log(string.charAt(6))

// indexOf(); voce ira escrever o texto que voce quer da string e a função irá retornar em que posição nos indices estará ex: 
// let string = 'um texto'
// console.log(string.indexOf('x'))

// replace() irá substituir um valor por outro ex:
// let string = 'o texto'
// console.log(string.replace('o', 'teste'))
// console.log(string.replace(/o/, '#'))
// console.log(string.replace(/o/g, '#'))


// com o atributo lenght conseguimos saber quantos caracteres tem em uma string ex:
// let string = 'o rato roeu a roupa do rei de roma.'
// console.log(string.length)

// com o atributo slice conseguimos selecionar os indices que queremos visualizar oq esta guardado ex: 
// let string = 'o rato roeu a roupa do rei de roma.'
// console.log(string.slice(2, 6))
// console.log(string.slice(-5, -1))

// com a funcao toUpperCase() conseguimos alterar todas os caracteres para maiusculo ou toLowerCase() para minusculo  ex: 
let string = 'O rato roeu a roupa do rei de roma.'
console.log(string.toUpperCase())
console.log(string.toLowerCase())
