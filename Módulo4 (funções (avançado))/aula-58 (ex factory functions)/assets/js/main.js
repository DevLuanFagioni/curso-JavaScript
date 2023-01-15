(function () {

  function criaCalculadora() {
    return {
      display: document.querySelector('.display'),

      realizaConta(){
        let conta = this.display.value
   
        try {
          conta = eval(conta)
          if(!conta){
            alert('Conta Invalida!')
            this.clearDisplay()
          }
          this.display.value = String(conta)
        } catch(e){
          alert('Conta Invalida!')
          this.clearDisplay()
        }
      },

      inicia() {
        this.cliquebotoes();
        this.pressionaEnter()
      },

      clearDisplay(){
        this.display.value = ''
      },

      apagaUm(){
        this.display.value = this.display.value.slice(0, -1)
      },

      pressionaEnter(){
         this.display.addEventListener('keypress', (e) => {
          console.log(e)
          if(keyCode === 13){
            this.realizaConta()
          }
        });
      },

      cliquebotoes() {
        document.addEventListener('click', (e) => {
          const el = e.target

          if (el.classList.contains('btn-number')) {
            this.btnParaDisplay(el.innerText);
          }

          if (el.classList.contains('btn-clear')){
            this.clearDisplay()
          }

          if(el.classList.contains('btn-del')){
            this.apagaUm()
          }

          if(el.classList.contains('btn-eq')){
            this.realizaConta()
          }
        });
      },

      btnParaDisplay(valor){
        this.display.value += valor;
      },

    }
  }

  const calculadora = criaCalculadora()
  calculadora.inicia()


})()