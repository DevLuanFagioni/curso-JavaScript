const pessoa = {
    // nome: 'Luan',
    sobrenome: 'Fagioni',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        // numero: 320
    }
};

// Atribuição via desestruturação
const { nome = 'nome não existe', sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);

const { endereco: {rua: r, numero: n = 123} } = pessoa
console.log(r, n)