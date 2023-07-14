// JavaScript AULA 36 Encontrando elementos (tipos de referencia)

const marcas = [
    {id:1, nome: 'Thiago'},
    {id:2, nome: 'Lucas'},
    {id:3, nome: 'Sisleide'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'Thiago';
});

console.log(marca);