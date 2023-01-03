// funcao é um local para armarzenar alguns comando e pode reutilizar quantas vezes quisermos no código

// function saudacao() {
//     console.log('Olá seja bem vindo')
// }
// saudacao()

// sempre que criamos uma funcao temos que executar-la para conseguimos utilizar o que foi passado dentro dela

// as funcoes podem esperar por parametros que serao dados que a funcao espera para poder ser executada

// function saudacao(nome) {
//     console.log(`Olá seja bem vindo ${nome}`)
// }
// saudacao('Luan')
// saudacao('Ana')
// saudacao('Felipe')

// temos funcoes sem retorno que apenas executara os comandos dentro dela, e temos funcoes com retorno que alem de executar o que esta sendo passado ela ira retornar um valor que podemos passar a ela

function saudacao(nome) {
     return `Olá seja bem vindo ${nome}`
}
const variavel = saudacao('Luan')
console.log(variavel)

// mais exemplos de funcoes

function soma(x, y) {
    const resultado = x + y
    return resultado
}
console.log(soma(5,3))

// tudo que fazemos dentro da funcao esta protegido no espoco dela ou seja não conseguimos acessar e alterar comandos criados dentro da funcao, alem disso todas variveis criadas dentro do escopo pode ter o mesmo nome de uma variavel que esta fora que não irá conflitar, serão variaveis diferentes
// console.log(resultado)

// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma(5,3)
// console.log(resultado)

// quando retornamos um valor com o return a função é encerrada, entao não será executado nenhum comando após retornar um valor

// function soma(x, y) {
//     const resultado = x + y
//     return resultado
//     console.log('olá mundo')
// }
// console.log(soma(5,3))


// se não enviarmos um valor que a funcao espera ela não ira retornar um erro mas irá retornar undefined ou NaN, para isso podemos atribuir um valor padrao que os parametros irão receber caso os argumentos não sejam enviados
// obersavação: para ficar mais claro sobre paremetors e argumentos é o sequinte, parametros é o que a função irá esperar de valor e argumento é o valor que será enviado para o parametro

// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma()
// console.log(resultado)


function soma(x = 0, y = 0) {
    const resultado = x + y
    return resultado
};

const resultado = soma()
console.log(resultado)

// tambem temos outras maneiras de como criar uma função, como por exemplo

// const raiz = function(r){
//     return r ** 0.5;
// };
// console.log(raiz(9))
// console.log(raiz(16))

// temos uma maneira mais moderna de criar esta funcao, que será como arrow function, eliminamos o nome function e apos os aprenteses adicionamos =>

// const raiz = (r) => {
//     return r ** 0.5;
// };
// console.log(raiz(9))
// console.log(raiz(16))

// com arrow funcion caso nossa funcao tenha apenas uma linha podemos simplificar ainda mais, removendo o return as chaves e caso tenhamos apenas um parametro esperado pela funcap tambem podemos eliminar os parenteses ficando desta forma: 

const raiz = r => r ** 0.5
  
console.log(raiz(9))
console.log(raiz(16))