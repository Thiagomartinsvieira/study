const pessoa1 = {
    nome:'Thiago',
    sobrenome: 'Matins Vieira',
    idade: 22,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


/*
function CriaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade };
}

const pessoa1 = CriaPessoa ('Thiago', 'Martins', 22);
const pessoa2 = CriaPessoa ('Pamela', 'Trindade', 25);
const pessoa3 = CriaPessoa ('Agatha', 'dos Santos', 21);
const pessoa4 = CriaPessoa ('lucas', 'Vieira', 19);
const pessoa5 = CriaPessoa ('Lara', 'Beatriz', 23);

console.log(pessoa1.nome, pessoa2.sobrenome);
*/
/*
const pessoa1 = {
    nome: 'Thigo', sobrenome: 'Martins', idade: 22
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const nome01 = 'Thiago';
const sobrenome01 = 'Martins';
const idade1 = 22;

const nome02 = 'Siseide';
const sobrenome01 = 'Costa';
const idade2 = 58;

let array = [1,2,3];
array.push(4);
Array[0] = 'Thiago'
array = 'outra';
console.log(array)
*/