// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
// irá funcionar como uma funcao normal porem tudo que esta no corpo desta funcao será um tratada como um objeto
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    // const ID = 123456;
    // const metodoInterno = function() {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
p2.metodo();