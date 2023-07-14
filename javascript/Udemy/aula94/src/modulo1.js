export const nome = 'Lucas';
export const sobrenome = 'Vieira';
export const idade = 23;

export function soma(x,y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

