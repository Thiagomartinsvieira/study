const express = require('express');
const app = express();

//         criar   ler   atualizar apagar
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET    PUT    DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página / sobre
// http://meusite.com/contato <- GET -> Entregue a página /Contato

app.get('/', (req, resp) => {
    resp.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, resp) => {
    resp.send("Recebi o Formulario");
});

app.get('/', (req, resp) => {
    resp.send('Hello <b>Word!</b>');
});

app.get('/contato', (req, resp) => {
    resp.send('Obrigado por entrar em contato com a gente.');
  });

app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});