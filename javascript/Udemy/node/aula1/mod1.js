class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Thiago';
const sobrenome = 'Vieira';

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.OutraCoisa = 'OutraCoisa';