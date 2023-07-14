/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function - Passados por referência.
*/

const a = {
    nome:'Thiago',
    sobrenome:'Martins'
};
const b = a;

a.nome = 'Agatha';
console.log(a);
console.log(b);

/*
let a =[1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Thiago');
console.log(c);


let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Mercedes-Benz';
console.log(a, b);

//          123456...
let nome = 'Thiago';
nome[0] = 'R';
console.log(nome[0], nome);
*/