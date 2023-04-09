
// Objeto Literal
const pessoa1 = {
    nome: 'luan',
    sobreNome: 'Fagioni'
};

// Objeto Construtor
const pessoa2 = new Object();
pessoa2.nome = 'luan';
pessoa2.sobreNome = 'Fagioni';

// podemos apagar chaves de objetos da seguinte forma
delete pessoa2.nome;

//lembrando que podemos trabalhar com metotos dentro do objeto literal
const pessoa3 = {
    nome: 'Luan',
    falarNome(){
        console.log(`${this.nome} está dando oi `)
    }
}
pessoa3.falarNome()

// tambem podemos fazer isto com objeto contrutor
pessoa2.falarNome = function(){
    console.log(`${this.sobreNome} está dando oi `)
}
pessoa2.falarNome()


//podemos tambem retornar valores dentro de um metodo
const pessoa4 = {
    nome: 'luan',
    sobreNome: 'Fagioni',
    idade: 21,
    dataNascimento(){
        const dataAtual = new Date()
        return dataAtual.getFullYear() - this.idade;
    }
};
console.log(pessoa4.dataNascimento())


// Factory functions 
function criaPessoa(nome, sobreNome){
    return {
        nome,
        sobreNome,
        nomeCompleto(){
            return `${this.nome} ${this.sobreNome}`
        }
    };
}

const p2 = criaPessoa('Luan', 'Fagioni');
console.log(p2.nomeCompleto())


// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luan', 'Fagioni');
console.log(p1.nome, p1.sobreNome);
