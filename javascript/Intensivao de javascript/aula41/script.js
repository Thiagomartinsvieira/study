// JavaScript AULA 41 Operador SPREAD

const fisrt = [1,2,3];
const second =  [4,5,6];
fisrt[0].id = 10;
// together
//const together = fisrt.concat(second);
const together = [...fisrt,'a', ...second,'#'];
console.log(together);
// const divide = together.slice();
const clone = [...together];
console.log(clone);

// spread 