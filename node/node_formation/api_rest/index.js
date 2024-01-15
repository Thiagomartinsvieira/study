const express = require('express')
const app =  express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var DB = {
    games: [
        {
            id: 23,
            title: 'Bomba Patch',
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

app.listen(45678, () => {
    console.log('API is Runnig!')
})