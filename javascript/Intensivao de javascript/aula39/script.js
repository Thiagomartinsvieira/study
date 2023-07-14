// JavaScript AULA 39 Esvaziando um ARRAY
let numeros = [1,2,3,4,5,6,7];
let outros = numeros;
// Solução 1
/* numeros = [];

console.log(outros);
 */

// // Solução 2
// numeros.length = 0;
// console.log(numeros);
// console.log(outros);

//  Solução 3
/* numeros.splice(0,numeros.length);
console.log(numeros);
console.log(outros); */

// // Solução 
// while(numeros.length > 0)
//     numeros.pop()