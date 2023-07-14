//               0  1  2  3  4  5  6  7  8
// ... rest, ...spread
//                   0         1         2
//                0  1  2    0  1  2   0  1  2
const numeros = [[1, 2, 4], [4, 5, 6],[7, 8, 9]];

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);


/*
const [um, , tres , , cinco, , ,sete] = numeros;
console.log(um, tres, cinco, sete );




let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/