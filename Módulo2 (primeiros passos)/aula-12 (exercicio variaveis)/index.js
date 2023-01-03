let varA = 'A'; // => B
let varB = 'B'; // => C
let varC = 'C'; // => A

// faça com que a variavel varA aponte para o resultado 'b', varB aponte para 'c' e varC aponte para 'a'

// varA = varB
// varB = varC
// varC = varA
// console.log(varA, varB, varC)


//maneira antiga de se fazer
// const varAtemp = varA
// varA = varB
// varB = varC
// varC = varAtemp
// console.log(varA, varB, varC)


//maneira mordern de se fazer
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);