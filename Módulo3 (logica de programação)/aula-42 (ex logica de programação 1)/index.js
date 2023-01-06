// Escreve uma função que recebe 2 numeros e retorne o maior deles

// primeira forma
function recebeNum (num1, num2){
    const maior = Math.max(num1, num2)
    return maior
}
const numero = recebeNum(10, 30)
console.log(numero)

// segunda forma
function max(x, y){
    if(x < y){
        return y
    } else {
        return x
    }
}
console.log(max(5,6))

// terceira forma
function max2(x, y){
    if(x < y) return y;
    return x
}
console.log(max2(8,9))
 
// quarta forma
const max3 = (x,y) => x < y ? y : x
console.log(max3(1,2))