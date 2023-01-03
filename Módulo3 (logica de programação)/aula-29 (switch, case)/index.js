function getDiaSemanaTexto(dia) {
    let diaTexto;

    // if (diaTexto === 0) {
    //     diaTexto = 'Domingo';
    //     return diaTexto;
    // } else if (diaTexto === 1) {
    //     diaTexto = 'Segunda';
    //     return diaTexto;
    // } else if (diaTexto === 2) {
    //     diaTexto = 'Terça';
    //     return diaTexto;
    // } else if (diaTexto === 3) {
    //     diaTexto = 'Quarta';
    //     return diaTexto;
    // } else if (diaTexto === 4) {
    //     diaTexto = 'Quinta';
    //     return diaTexto;
    // } else if (diaTexto === 5) {
    //     diaTexto = 'Sexta';
    //     return diaTexto;
    // } else if (diaTexto === 6) {
    //     diaTexto = 'Sábado';
    //     return diaTexto;
    // } else {
    //     diaTexto = '';
    //     return diaTexto;
    // }


    // quando precisamos checar varios valores da mesma variavel ao invez de utilizar estrutura condicional podemos simplificar utilizando switch 

    // case = caso
    // break = irá parar, parecido com return

    switch (dia) {
        case 0:
            diaTexto = 'Domingo';
            return diaTexto; // caso nao esteja dentro de uma funcao ao inves de return diaTexto; usariamos break
        case 1:
            diaTexto = 'Segunda';
            return diaTexto;
        case 2:
            diaTexto = 'Terça';
            return diaTexto;
        case 3:
            diaTexto = 'Quarta';
            return diaTexto;
        case 4:
            diaTexto = 'Quinta';
            return diaTexto;
        case 5:
            diaTexto = 'Sexta';
            return diaTexto;
        case 6:
            diaTexto = 'Sábado';
            return diaTexto;
        default:
            diaTexto = '';
            return diaTexto;
    }
}

const data = new Date('1987-04-21 00:00:00'); // dias da semana iniciando do 0 ao 6, sendo 0 domingo e 6 sabado
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);