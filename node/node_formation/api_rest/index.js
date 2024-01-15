const express = require('express')
const app =  express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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
    ]

}


app.get('/games', (req, res) => {
    res.statusCode = 200; 
    res.json(DB.games)
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

app.listen(8080, () => {
    console.log('API is Runnig!')
})