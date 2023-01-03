//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 
// alunos = 123; // podemos alterar o valor de alunos de indice para qualque outro tipo de dado

console.log(typeof alunos); // irar retornar objeto
console.log(alunos instanceof Array); // para verificar que estamos trabalhando com array utilizamos este comando

// alunos.push('Luiza');
// alunos.push('Eduardo');

// console.log(alunos.slice(0, -2)); // podemos fatiar o array retornando os valores dos indices que foi fatiado

// delete alunos[1]; // deleta o valor do indice mas o indice não é removido do array
// console.log(alunos[1]);

// const removido = alunos.shift(); // remove um indice no começo
// console.log(removido);
// console.log(alunos);

// alunos.unshift('Fábio'); // Adiciona no começo
// alunos.unshift('Luiza');

// alunos.push('Luiza'); // Adiciona no fim
// alunos.push('Fábio');

// observação: geralmente é adicionado sempre no fim para não ter que mover todos os outros indices podendo alterar comandos ja feitos anteriomente e tambem o tempo de execução é maior por conta de mover todos os indices ao inves de apenas adicionar mais um

// alunos[alunos.length] = 'Luiza';  // Adiciona no fim
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Luiza'; // Adicionando

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);