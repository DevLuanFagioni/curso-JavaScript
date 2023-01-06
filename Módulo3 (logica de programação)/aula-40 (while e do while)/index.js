// geralmente utilizamos while e do while quando não sabemos quantas vezes nosso laço de repetição será executado, ou seja quando não sabemos o tamanho do nosso array, objeto ou nodelist

let = i = 0 // variavel de controle

while (i <= 10) {  // condição verdadeira
    console.log(i)
    i++ // incrementatacao, caso nao adicionarmos criariamos um laço infinito
}


console.log('--------------------')


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// while checa a condição e executa o codigo
while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('-------------------')

// do while execita o codigo e depois checa a condição
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);


let teste = 10

while(teste !== 10){
    console.log(teste);
}

console.log('-----------------')

do {
    console.log(teste);
} while (teste !== 10);
