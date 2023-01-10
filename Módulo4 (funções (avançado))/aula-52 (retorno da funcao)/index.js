// return - retorna um valor e termina a funcao
// existem funcoes que nao retornam nenhum valor mas fazem algo util, como exemplo o alert() ou tbm
// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'
// })

// podemos retornar qualquer valor em uma funcao, fizemos isso algumas vezes de maneira simpes mas tambem podemos fazer desta forma

function duplica(n) {
    return n * 2;
}



function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

console.log('')
// ao invez de fazer varias funcoes repetidamente, poderiamos criar uma funcao que retorna uma funcao 

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador;
    };
}

const duplicaB = criaMultiplicador(2);
const triplicaB = criaMultiplicador(3);
const quadriplicaB = criaMultiplicador(4);

console.log(duplicaB(2));
console.log(triplicaB(2));
console.log(quadriplicaB(2));