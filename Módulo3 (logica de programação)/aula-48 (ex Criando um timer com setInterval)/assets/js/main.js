function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

const iniciar = document.querySelector('.iniciar');
iniciar.addEventListener('click', function(e){
    clearInterval(timer)
    iniciaRelogio()
    relogio.classList.remove('parado')
    relogio.classList.remove('zerado')
})

const pausar = document.querySelector('.pausar');
pausar.addEventListener('click', function(e){
    clearInterval(timer)
    relogio.classList.add('parado')
})

const zerar = document.querySelector('.zerar');
zerar.addEventListener('click', function(e){
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('parado')
    relogio.classList.add('zerado')
})

// abra o console no navegador e clique nos elementos na página
// document.addEventListener('click', function(event){
//     console.log(event.target)
// })

// document.addEventListener('click', function (e) {
//     const el = e.target;

        // se el(quem esta recendo o evento de toque) conter a classe zerar
//     if (el.classList.contains('zerar')) {
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         segundos = 0;
//     }

//     if (el.classList.contains('iniciar')) {
//         ;
//         clearInterval(timer);
//         iniciaRelogio();
//     }

//     if (el.classList.contains('pausar')) {
//         clearInterval(timer);
//     }
// });

// para melhoras ainda mais o codigo poderiamos adicionar tudo dentro de uma função para fugir do escopo global protegendo nosso codigo e evitando conflitos