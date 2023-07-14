// Javascritp Aula31 - Objeto Postagem de Blog (Exercício)

// Eu quero que voce crie nesse exercicio um objeto de postagem de blog que vai conter as seguintes propriedades

// Postagem
/* 
Titulo
Mensagem
Autor
Visualizações
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'A',
    Mesagem: 'B',
    Autor:'C',
    Visualizações: 10,
    comentarios : [
        {autor: 'A',Mensagem: 'B'},
        {autor: 'A',Mensagem: 'B'}
    ],
    estaAoVivo : true
}

console.log(postagem);