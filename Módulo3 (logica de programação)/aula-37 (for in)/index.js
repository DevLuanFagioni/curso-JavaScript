// For in -> lê os índices do array ou chaves do objeto

const pessoa = {
    nome: 'Luan',
    sobrenome: 'Fagioni',
    idade: 21
};
  
for (let chave in pessoa) {
console.log(chave, pessoa[chave]);
};
  

// const frutas = ['pera', 'maca', 'uva']

// for (let index in frutas) {
//   console.log(frutas[index]);
// }

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
