// break, continue vai permitir que você tenha controle de quando por exemplo pular um elemento ou quando por exemplo quebrar o laço e terminar ele a qualquer momento, eles irão funcionar em todos os laços de repetição

// Continue continua para próxima iteração
// Break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
} 

//observação: o uso do break é otimo para poupar o desempenho do navegador/computador, por exemplo de tivermos uma lista de 500 elementos e queremos encontrar um valor dentro dessa lista iriamos percorrer por toda a lista para encontrar, mas com o break podemos parar de percorrer toda essa lista a partir do momento que conseguimos encontrar o que queriamos