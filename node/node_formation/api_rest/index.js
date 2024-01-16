const express = require('express')
const app =  express();
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const jwtSecret = "fjkabhjfbewuboqwnopwmeqdnqnooenwuopasd"

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

function auth(req, res, next){

    const authToken = req.headers['authorization']

    if(authToken != undefined){

        const bearer = authToken.split(' ')
        var token = bearer[1];

        jwt.verify(token, jwtSecret, (error, data) => {
            if (error) {
                res.status(401).json({ error: 'invalid token' });
            } else {
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};  
                req.company = "Udemy"
                console.log(data);
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'invalid token' });
    }
}

var DB = {
    games: [
        {
            id: 13,
            title: 'Bomba Patch 2024',
            year: 2024,
            price: 10
        },
        {
            id: 37,
            title: 'WWE 2k17',
            year: 2016,
            price: 40
        },
        {
            id: 23,
            title: 'Naruto Storm 4',
            year: 2015,
            price: 45
        },
    ], 
    users: [
        {
            id: 1,
            name: 'Thiago Martins',
            email: 'thiago@email.com',
            password: '1234'
         }, 
         {
            id: 10,
            name: 'Isadora',
            email: 'isadora@email.com',
            password: 'java123'
         },
    ]

}


app.get('/games', auth,  (req, res) => {
    req.statusCode = 200 
    res.json({company: req.company, user: req.loggedUser, games: DB.games})
})

app.get('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else{
        
        let id = parseInt(req.params.id)

        let game = DB.games.find(g => g.id == id)

        if(game != undefined){
            res.statusCode = 200
            res.json(game)
        }else {
            res.sendStatus(404)
        }
    }
})

// Register one game
app.post("/game", (req, res) => {
    let {title, price, year} = req.body
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });

    res.sendStatus(200)

})

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else{    
        let id = parseInt(req.params.id)
        let index = DB.games.findIndex(g => g.id == id)

        if(index == -1){
            res.sendStatus(404)
        }else{
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})

app.put('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else{
        
        let id = parseInt(req.params.id)

        let game = DB.games.find(g => g.id == id)

        if(game != undefined){
            
            var {title, price, year} = req.body

            if(title != undefined){
                game.title = title
            }

            if(price != undefined){
                game.price = price
            }

            if(year != undefined){
                game.year = year
            }

            res.sendStatus(200)

        }else {
            res.sendStatus(404)
        }
    }
})

app.post('/auth', (req, res) => {

    var {email, password} = req.body

    if(email != undefined){

         var user = DB.users.find(u => u.email == email)

         if(user != undefined){

            if(user.password == password){

                jwt.sign({id: user.id, email: user.email}, jwtSecret, {expiresIn: "48h"}, (error, token) => {
                    if(error){
                        res.status(400)
                        res.json({eror: 'internal failure'})
                    }else{

                        res.status(200);
                        res.json({token: token })

                    }
                })
            }else{
                res.status(401)
                res.json({error: "invalid credencials"})
            }

         }else{
            res.status(404)
            res.json({error: "email sent does not exist in the database"})
         }

    }else{
        res.status(400)
        res.json({error: 'Email is invalid'})
    }

})

app.listen(8080, () => {
    console.log('API is Runnig!')
})