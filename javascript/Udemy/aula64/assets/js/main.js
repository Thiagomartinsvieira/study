// Filter => Sempre retornar um array, com a mesma quantidade de elementos

//Retorne os numeros maiores que 10
//               0 1 2 3 4 5 6 7 8....
const numeros = [5,6,7,8,9,10,11,12,13,14,15];

const numerosFiltrados = numeros.filter((valor, indice, array) => valor > 14);
// console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Thiago', idade: 23},
    {nome: 'Lucas', idade: 19},
    {nome: 'Eduardo', idade: 24},
    {nome: 'Maicon', idade: 07},
    {nome: 'Marco', idade: 58},
    {nome: 'Isabela', idade: 14},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade >= 50);

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(nomeTerminaComA);