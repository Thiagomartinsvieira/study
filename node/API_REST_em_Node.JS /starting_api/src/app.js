const express = require('express')
const app = express()

app.get("/", (req, res) => {
    console.log("Server is running")
    res.status(200).send()
})

module.exports = app