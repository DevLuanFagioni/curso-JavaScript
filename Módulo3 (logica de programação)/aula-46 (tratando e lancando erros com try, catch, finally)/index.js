// try{
//     // é executado quando nao há erros
// } catch(e) {
//     // é executado quando há erros
// } finally {
//     // é sempre executado
// }

// try{
//     // é executado quando nao há erros
// } catch(e) {
//     // é executado quando há erros
// } finally {
//     // é sempre executado
// }

// EXEMPLO

// try {
//     console.log(a)
//     console.log('Manipulando arquivo...')
// } catch (e) {
//     console.log('tratando erro')
// } finally {
//     console.log('FINALLY: sempre será executado')
// }



function retonaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora();
    console.log(hora);
} catch (e) {
    // Tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}