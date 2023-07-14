// Factory function (função Fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'Falando sobre Nada'){
            return `${this.nome} esta falando ${assunto}`;
        },
        altura: a,
        peso: p,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Thiago', 'Martins', 1.80, 90);
const p2 = criaPessoa('Lucas', 'Martins', 1.70, 50);
const p3 = criaPessoa('Sisleide', 'Martins', 1.60, 170);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);






