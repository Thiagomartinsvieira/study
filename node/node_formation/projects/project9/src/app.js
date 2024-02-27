const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let JWTSecret = "nasnlkdanlkndsaljwoij129j21"

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/guiapics')
.then(() => {
    
}).catch(error => {
    console.log(error)
})

const User = mongoose.model('User', user)

app.get('/', (req, res) => {
    res.json({})
})

app.post('/user', (req, res) => {
    res.json({})
})

app.post('/user', async (req, res) => {

    if(req.body.name == '' || req.body.email == "" | req.body.password == "" ) {
        res.send(400)
        return
    }

    try {
        const user = await User.findOne({'email': req.body.email})

        if(user != undefined){

            res.statusCode(400)
            res.json({error: "E-mail already registered"})
            return
        }

        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const newUser = new User({name: req.body.name, email: req.body.email, password: hash})
        await newUser.save()
        res.status(200).json({email: req.body.email}) 
    } catch (error) {
        res.sendStatus(500)
    }
})

app.post("/auth", async (req, res) => {
    const {email, password} = req.body


    const user = await User.findOne({'email':email})

    if(user == undefined){
        res.statusCode = 403
        res.json({errors: {email: 'email not registered'}})
        return
    }

    const isPasswordRight = await bcrypt.compare(password, user.password)

    if(!isPasswordRight){
        res.statusCode(403)
        res.json({errors: {password: "incorrect password"}})
        return
    }

    jwt.sign({email, name: user.name, id: user._id}, JWTSecret, {expiresIn: '48h'}, (error, token) => {
        if(error){ 
            res.sendStatus(500)
            console.log(error)
        }else {
            res.json({token})
        }
    })
})

app.delete('/user/:email', async (req, res) => {
    await User.deleteOne({"email": req.params.email})
    res.sendStatus(200)
})

module.exports = app