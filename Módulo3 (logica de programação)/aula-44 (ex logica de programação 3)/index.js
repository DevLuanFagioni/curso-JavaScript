// Escreva uma função que recebe um numero e retorne o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero não é divisivel por 3 e 5 = retorna o proprio numero

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}
  
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}