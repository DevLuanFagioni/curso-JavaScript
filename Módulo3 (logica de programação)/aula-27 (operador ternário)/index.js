// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUSuario = 1000;

// if(pontuacaoUSuario >= 1000){
//     console.log('Usuario Vip')
// } else {
//     console.log('Usuario Comun')
// }

const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);



const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);