// podemos agrupar informações em uma variavel atrazes de um objeto com {}

const pessoa1 = {
    nome: 'Luan',
    sobreNome: 'Fagioni',
    idade: 21
};

const pessoa2 = {
    nome: 'Ana',
    sobreNome: 'Carolina',
    idade: 19
};

//podemos acessar essas informações(atributos) da sequinte forma:
// console.log(pessoa1.nome)
// console.log(pessoa1.sobreNome)
// console.log(pessoa1.idade)

// podemos fazer isso de uma forma melhor utilizando funcoes

// function criaPessoa (nome, sobreNome, idade){
//     return {
//         nome: nome,
//         sobreNome: sobreNome,
//         idade: idade
//     };
// }
// const pessoa3 = criaPessoa('luan', 'fagioni', 21)
// const pessoa4 = criaPessoa('ana', 'carolina', 19)

//podemos melhoras esta funcao, estamos retornando um atributo com o mesmo nome que os parametros, estamos repetindo o mesmo nome, neste caso para simplificar podemos adicionar apenas um dos nomes que o javaScript entendera que será um atributo esperando um valor com o mesmo nome

// function criaPessoa (nome, sobreNome, idade){
//     return {
//         nome,
//         sobreNome,
//         idade
//     };
// }

// const pessoa3 = criaPessoa('luan', 'fagioni', 21)
// const pessoa4 = criaPessoa('ana', 'carolina', 19)
// console.log(pessoa3.nome, pessoa4.sobreNome)

// podemos melhoras ainda mais, para questoes de organização quanto menas linhas de codigos tivermos melhor porque evita poluicao visual e cansaço 

// function criaPessoa (nome, sobreNome, idade){
//     return {  nome,  sobreNome,  idade };
// };

// const pessoa3 = criaPessoa('luan', 'fagioni', 21)
// const pessoa4 = criaPessoa('ana', 'carolina', 19)
// console.log(pessoa3.nome, pessoa4.sobreNome)

// para conhecermos um pouco mais sobre objetos alem de adicionar atributos dentro dele tambem podemos adicionar metodos, que irá executar uma ação(parecido com funcao)

// const pessoa5 = {
//     nome: 'Luan',
//     sobreNome: 'Fagioni',
//     idade: 21,

//     fala(){
//         console.log('Olá mundo')
//     }
// };
// pessoa5.fala()

// podemos utilizar o this para falar que queremos neste caso chamar pelo objeto e assim podemos chamar por um atributo dentro do proprio objeto

// const pessoa5 = {
//     nome: 'Luan',
//     sobreNome: 'Fagioni',
//     idade: 21,

//     fala(){
//         console.log(`${this.nome} ${this.sobreNome} deseja boas vindas!`)
//     }
// };
// pessoa5.fala()

// podemos tambem alterar os atributos atravez dos metodos

const pessoa5 = {
    nome: 'Luan',
    sobreNome: 'Fagioni',
    idade: 21,

    fala(){
        console.log(`${this.idade} é a idade atual de ${this.nome} ${this.sobreNome} `)
    },

    adicionaIdade(){
        this.idade++
    }
};

pessoa5.fala()
pessoa5.adicionaIdade()
pessoa5.fala()
