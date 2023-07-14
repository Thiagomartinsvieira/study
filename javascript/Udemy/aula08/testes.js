/*
Thiago Martins Vieira tem 22 anos, pesa 80 kg tem 1.80 de altura e meu IMC é 24,7 Thiago Nasceu 2000
*/

const nome = 'Thiago';
const sobrenome = 'Martins Vieira';
const idade = 22;
const peso = 80;
const alturaEM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / ( alturaEM * alturaEM );

anoNascimento = 2022 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem idade anos pesa ${peso} Kg`);

console.log(`tem ${alturaEM} de altura e seu IMC é de ${indiceMassaCorporal}`);

console.log(`${nome} nasceu em ${anoNascimento}.`);