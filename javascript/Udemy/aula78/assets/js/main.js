const falar = {
    falar() {
        console.log(`${this.nome} esta falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo.`);
    },
};


const beber = {
    beber() {
        console.log(`${this.nome} esta bebendo.`);
    },
};


const pessoPrototype = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome){
    return Object.create(pessoPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Thiago', 'Martins');
const p2 = criaPessoa('Lucas', 'Vieira');

console.log(p2);