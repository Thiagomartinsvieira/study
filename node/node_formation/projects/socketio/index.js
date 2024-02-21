var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {

    socket.on('disconnect', () => {
        console.log('X disconnected: ' + socket.id)
    })

    socket.on('welcome', (data) => {
        console.log('Running welcome event');
        console.log(data);
    });
    
    socket.on('word', (data) => {
        console.log(data)
        socket.emit('result', data + ' - Node formation')
    }) 
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(3000, () => {
    console.log("APP Running!");
});
