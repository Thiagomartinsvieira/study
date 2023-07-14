// função  constrtutora ->  Objetos
// Função Fabrica -> Objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    // Atributos ou Privadas metodos privados
    const ID = 123456;

    const metodoInterno = function(){

    };
    // Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = nome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    };
}


const p1 = new Pessoa('Thiago', 'Vieira');
const p2 = new Pessoa('Lucas', 'Martins');
p2.metodo();


