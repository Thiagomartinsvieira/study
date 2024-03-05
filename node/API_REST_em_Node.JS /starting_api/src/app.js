const express = require('express')
const app = express()
const consign = require("consign")
const knex = require('knex')
const knexfile = require('../knexfile')
// const knexLogger = require('knex-logger')

// TODO create dynamic switching
app.db = knex(knexfile.test)

consign({cwd: "src", verbose: false})
.include("./config/middlewares.js")
.then('./services')
.then("./routes")
.then('./config/routes.js')
.into(app)

app.get("/", (req, res) => {
    console.log("Server is running")
    res.status(200).send()
})

app.use((error, req, res, next) => {
    const {name, message, stack} = error
    if (name === "ValidationError") res.status(400).json({error: message})
    else res.status(500).json({name, message, stack})
    next(error)
})

// app.db.on('query', (query) => {
//     console.log({slq: query.sql, bindigs: query.bindigs ? query.bindigs.join(','): ''})
// }).on('query-response', (response) => {
//     console.log(response)
// }).on('error', error => console.log(error))

module.exports = app