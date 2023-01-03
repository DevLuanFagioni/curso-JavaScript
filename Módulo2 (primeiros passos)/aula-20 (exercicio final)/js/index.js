function escopoGlobal() {

    // const form = document.querySelector('#form');

    // let contador = 1;
    // function eventoForm (event){
    //     event.preventDefault() // irá previnir o que o evento faria por padrao, no caso não ira enviar o formulario
    //     console.log(`formulario nao foi enviado ${contador} `)
    //     contador++
    // }

    // form.addEventListener('submit', eventoForm) // este comando addEventListener irá verificar o acontecimento de um evento, caso este evento aconteca ele irá executar algo

    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    const pessoas = []

    function eventoForm (event){
        event.preventDefault()

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas)

        resultado.innerHTML += '<hr>'
        resultado.innerHTML += `<p> Seu nome é: <b>${nome.value}</b></p>`
        resultado.innerHTML += `<p> Seu sobrenome é: <b>${sobrenome.value}</b></p>`
        resultado.innerHTML += `<p> Seu peso é: <b>${peso.value}</b></p>`
        resultado.innerHTML += `<p> Sua altura é: <b>${altura.value}</b></p>`
        resultado.innerHTML += '<hr>'
     
        
    }
    form.addEventListener('submit', eventoForm) 

}
escopoGlobal();
