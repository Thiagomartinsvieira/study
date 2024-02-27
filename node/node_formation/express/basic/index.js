// index.js

const express = require('express') // Import express
const app = express(); // starting express


app.get('/', function(req, res){
    res.send('<h1>Welcome to programer guide</h1> <p>Santos</p>')
});

app.get('/blog/:article?', function(req, res){

    var article = req.params.article;

    if(article){
        res.send('<h2>Article:  ' + article + '</h2>')
    } else {
        res.send('<h1>welcome to my blog</h1><h2>https://portfolio-plum-rho-75.vercel.app/</h2><p>i am using express</p>')
    }

})

app.get('/profile/users', function(req, res){
    var profile = req.query['profile'];

    if(profile){
        res.send(profile)
    } else {
        res.send('no profile')
    }   
})

app.get('/hello/:name/:company', function(req, res){
    // req => Data sent by the user
    // res => response that will be sent by user 
    var name = req.params.name
    var company = req.params.company
    res.send('<h1>H1 my name is ' + name + '</h1>' +  "I Work in " + '<strong>' + company + '</strong>')
})

app.listen(4000, function(error){
    if(error) {
        console.log('an error has occured')
    } else {
        console.log('server starting successfully')
    }
})