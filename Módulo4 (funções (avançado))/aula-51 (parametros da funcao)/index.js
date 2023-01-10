// na funcao quando chamamos por ela podemos adicionar alguns argumentos, mesmo se a funcao nao tiver nenhum parametro esses argumentos enviados serão guardados mas não serão mostrado, uma forma de mostrar é utilizando a funcao arguments mas apenas em funcoes que utilizam a palavra function, no caso de arrow function nao funcionaria

function funcao() {
    console.log(arguments)
}
funcao(1, 2, 3, 4, 5)

// tambem podemos fazer com arrow function desta forma

const arrow = (...args) => {
    console.log(args);
};
arrow(1, 2, 3, 4, 5);


// mesmo sem a funcao esperar parametros conseguimos trabalhar com os argumentos enviados

function funcao2() {
    total = 0
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total)
}
funcao2(1, 2, 3, 4, 5)

// se a funcao espera um parametro  e o argumento nao for enviado irá retornar para o parametro um valor padrao que é undefined, mas podemos alterar o valor padrao que o parametro recebe

function soma(a, b = 0) {  // maneira moderna
    // b = b || 0  // maneira antiga
    console.log(a + b)
}
soma(2)

// podemos usar o valor padrao atribuito ao parametro passando undefined como argumento
function soma2(a, b = 2, c = 4) {
    console.log(a + b + c)
}
soma2(2, undefined, 4)


// tambem podemos fazer uma atribuição via desestruturação com objetos e arrays

function objeto({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
objeto({ nome: 'Luan', sobrenome: 'Fagioni', idade: 21 })

function array([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade)
}
array(['Luan', 'Fagioni', 21])


// tambem podemos guardar todos os argumentos enviados a mais do que o esperado pela funcao e guardalos em um parameteo usando o ...

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)

// tambem podemos fazer desta forma

function conta2(operador, acumulador, numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta2('+', 0, [20, 30, 40, 50])

// ou desta

const conta3 = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta3('+', 0, 20, 30, 40, 50)
