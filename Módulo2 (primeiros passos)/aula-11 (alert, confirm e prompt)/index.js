// essas funções estão relacionas a window(janela) do navegador

// é uma função que aparece um alerta em forma de modal no seu navegador
// alert('Mensagem') ou window.alert('Mensagem')

// exibe uma um modal de confirmação retornando false ou true
// window.confirm('mensagem')

// exibe um campo para o usuario preencher retornando o valor do campo
// window.prompt


// podemos armarzenar o valor que a função irá retornar ex

// const confirma = confirm('voce realmente deseja fazer isso?')
// console.log(confirma)

let num1 = prompt('digite o primeiro numero')
console.log(num1)

let num2 = prompt('digite o segundo numero')
console.log(num2)

num1 = Number(num1)
num2 = Number(num2)

const soma = num1 + num2 

alert(`o resultado da operação foi ${soma}`)

// utilizando template strings tambem podemos fazer as operações dentro do ${} ex:

// alert(`o resultado da operação foi ${num1 + num2}`)
