const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Vieira',
    Idade: 22,
    endereco: {
        rua: 'Ivani Isaac Pires',
        numero: 129
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto} = pessoa;
console.log(resto);