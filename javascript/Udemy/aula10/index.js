// String, Number, undefined, null boolean

const nome = 'Thiago'; // String

const nome1 = "Agatha"; // String

const nome2 = `Lucas`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined -> Não Aponta para lugar nenhum na memória.
const sobrenomeAluno = null; // Nulo -> Não Aponta para lugar nenhum na memória.
const aprovado = true; // Boolean = true, false (Lógico)
/*
console.log(typeof aprovado, aprovado);

const a = [1, 2 ];
const b = a;

console.log(a, b);

b.push(3);
*/

let a = 2;
let b = a;

console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3,2

