// JavaScript AULA 40 Combinando e cortando ARRAYS

const fisrt = [{id: 1}];
const second =  [4,5,6];
fisrt[0].id = 10;
// together
const together = fisrt.concat(second);
console.log(together);

// Divide 
const divide = together.slice();
console.log(divide);



