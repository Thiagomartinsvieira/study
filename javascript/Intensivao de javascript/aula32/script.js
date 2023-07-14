// Javascript Aula 46 - Constructor function (Exercicio)

// Criar um objeto Postagem 
// Titulo, mensagem, autor, visualizações, comentarios, estaAoVivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizações = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem  = new Postagem('a','b','c');
console.log(Postagem);