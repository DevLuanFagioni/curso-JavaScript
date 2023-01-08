function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// setInterval executa acoes com um intervalo de tempo especificado
// setTimeout irá executar apos um tempo especificado
// o tempo é adicionado em milisegundos, a cada 1000 milisegundo vale por 1 segundo

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer); // para de executar o setInterval 
}, 3000);

setTimeout(function () {
    console.log('Olá mundo!');
}, 5000);