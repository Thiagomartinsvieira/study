// JavaScript Aula 47 - Faixa de Preço (Exercicio)

// É que voce crie um array de faixa de preço para que ela possa ser usado em um site igual ao mercado livre

//Faixas, tooltip, minimo, maximo

// Primeira Opção 

let faixas = [ 
    {tooltip: 'Até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 1000000}
];

//Segunda Opção (factory function)
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco("a",1,100),
    criarFaixaPreco("b",100,1000),
    criarFaixaPreco("c",1000,1000000),
]
// Terceira Opção (construction Function)

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo= maximo
}

let faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('d',20,30),
    new FaixaPreco('d',30,40)
]


console.log(faixas);
console.log(faixas2);
console.log(faixas3);
