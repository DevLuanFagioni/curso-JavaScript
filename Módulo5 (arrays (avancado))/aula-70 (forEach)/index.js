// forEach irá iterar sobre o array, parecido com o for of e for in

const a1 = [10, 20, 30];
let total = 0;

a1.forEach(valor => {
    total += valor;
});

console.log(total);