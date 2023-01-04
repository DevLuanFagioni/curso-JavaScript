// console.log('linha 0')
// console.log('linha 1')
// console.log('linha 2')
// console.log('linha 3')
// console.log('linha 4')
// console.log('linha 5')

// para trabalhar com o for a gente irá precisar de 3 coisas,  primeira criar uma variavel dentro dos parenteses, segunda criar uma condiçao que ira parar o laço e terceira incrementar ou decrementar nosso laço
// for(primeira; segunda; terceira){

// }

// i = index
// for(let i = -100; i <= 200; i += 10){
//     console.log(`Linha ${i}`)
// }

//checando se o numero é par ou impar
for(let i = 0; i <=10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar'; ;
    console.log(i, par)
}

// percorrendo os indices de um array
const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`, frutas[i])
}
