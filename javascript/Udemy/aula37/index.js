//            01234.......
const pessoa = {
    Nome: 'Thiago',
    Sobrenome: 'Martins Vieira'
};

for (let chave in pessoa){
    console.log(chave, pessoa [chave]);
}

// For Clássico - Geralmente como iteráveis ( Array ou strings)

// For in - Retorna o indice ou chave ( String , Array ou Objetos)

// For Of - Retorna o valor em si (iteráveis, Array ou Strings)


/*
for ( let valor of nomes){
    console.log(valor);
}

console.log('#######');


for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}


console.log('#######')

for (let i in nomes){
    console.log(nomes[i]);
}

console.log('#######')

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});
*/