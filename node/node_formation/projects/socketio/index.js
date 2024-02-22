var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
 express.application

io.on('connection', (socket) => {
    console.log('New connection:', socket.id);

    socket.on('disconnect', () => {
        console.log('Disconnected:', socket.id);
    });

    socket.on('msg', (data) => {
        console.log('Received message:', data);
        io.emit('showmsg', data);
    });
});

io.on('connect_error', (error) => {
    console.error('Server connection error:', error);
    
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(3000, () => {
    console.log("APP Running!");
});
