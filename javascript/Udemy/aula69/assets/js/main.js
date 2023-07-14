// Factory functions / Constructor functions / Classes

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;


    Object.freeze(this);

}

// {} <- this


// p1 = (endereçoDeMemoria) -> 'Valor'
// p1.endereçoDeMemoria = {nome: 'Outra coisa'}
// p1 = (novo endereço de memoria)

const p1 = new Pessoa('Thiago', 'Martins');
const p2 = new Pessoa('Sisleide', 'Costa');

console.log(p1);
console.log(p2);
