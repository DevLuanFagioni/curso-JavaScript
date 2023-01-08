function soma(x, y) {
    if (  typeof x !== 'number' ||  typeof y !== 'number' )  {
        throw new Error('x e y precisam ser números.'); // irá lançar o erro de maneira mais amigavel
    }
    return x + y;
}


// try{
//     // é executado quando nao há erros
// } catch(error) {
//     // é executado quando há erros
// }

try {
    console.log(soma(1, 2));
    // console.log(soma('1', 2));
} catch (error) {
    console.log(error);
    console.log('Mostrar alguma coisa mais amigável pro usuário.');
}