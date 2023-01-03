## o que são eventos em javascript

Em JavaScript, um evento é uma ação que ocorre em uma página da web, como um clique em um botão, o carregamento da página ou o envio de um formulário. Você pode escrever código JavaScript para ser executado quando um evento ocorrer, chamado de "manipulador de eventos".

Existem muitos tipos de eventos em JavaScript, como o evento "mouseover" para quando o usuário move o mouse sobre um elemento, o evento "keydown" para quando o usuário pressiona uma tecla no teclado e muito mais. Você pode usar esses eventos para criar interatividade e dinâmica em suas páginas da web.



## Existe uma forma de proteger nosso codigo para que arquivos(bibliotecas externas) não comflitem com nossas variaveis no escopo global, podemos criar uma funcao e tudo dentro dela iremos trabalhar como apredemos anteriomente a diferença é que não iremos conseguir acessar o que fizermos de outros arquivos, unica coisa que poderá conflitar é a execução da função

function escopoGlobal() {

}
escopoGlobal()
