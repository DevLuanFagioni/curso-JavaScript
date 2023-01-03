const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: <b>${nome}</b> <br />`;

const quantidadeLetras = nome.length
document.body.innerHTML += `Seu nome tem <b>${quantidadeLetras}</b>  letras <br />`;

const segundaLetra = nome[1]
document.body.innerHTML += `A segunda letra do seu nome é: <b>${segundaLetra}</b>  <br />`;

const primeiroIndice = nome.indexOf('l')
document.body.innerHTML += `Qual o primeiro índice da letra no seu nome? <b>${primeiroIndice}</b>  <br />`;

const ultimoIndice = nome.indexOf('n')
document.body.innerHTML += `Qual o último índice da letra no seu nome? <b>${ultimoIndice}</b> <br />`;

const ultimasLetras = nome.slice(-3)
document.body.innerHTML += `As últimas 3 letras do seu nome são: <b>${ultimasLetras}</b> <br />`;

const palavraNome = nome.split(' ')
document.body.innerHTML += `As palavras do seu nome são: <b>${palavraNome}</b> <br />`;

const nomeMaisculo = nome.toUpperCase()
document.body.innerHTML += `Seu nome com letras maiúsculas: <b>${nomeMaisculo}</b> <br />`;

const nomeMinusculo = nome.toLowerCase()
document.body.innerHTML += `Seu nome com letras minúsculas: <b>${nomeMinusculo}</b> <br />`;