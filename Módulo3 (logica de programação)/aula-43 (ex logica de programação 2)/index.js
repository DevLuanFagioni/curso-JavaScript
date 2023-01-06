// Escreve uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number) e que retorne true se a imagem estiver no moto paisagem
// modo paisagem = 1920 por 1080
// modo retrado = 1080 por 1920

const ePaisagem = (l, a) => l > a ? true : false // neste caso nao precisamos retornar true e false por que a propria condição ja faz isso pra gente entao a melhor forma seria 
const ePaisagem2 = (l, a) => l > a
console.log(ePaisagem2(1920, 1080))