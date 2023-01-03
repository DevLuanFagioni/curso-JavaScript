let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras
console.log(a, b, c)



const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const primeiroNumero = numeros[0];
// const segundoNumero = numeros[1];
const [primeiroNumero, segundoNumero] = numeros
console.log(primeiroNumero, segundoNumero)


// conseguimos tambem pegar o restante do array utilizando o ...
// ... rest, ... spread
const numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [um, dois, ...resto] = numeros2
console.log(um, dois)
console.log(resto)

// tambem podemos pular indices do array
const numeros3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiro, , terceiro, , quinto] = numeros3
console.log(primeiro, terceiro, quinto)



//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros4 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros4;
console.log(lista3[2]);

console.log(numeros4[2][2])