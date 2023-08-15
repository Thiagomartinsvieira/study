const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const { schema } = mongoose

const photoSchema = new Schema({
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    userId: mongoose.objectID,
    userName: String, 
},{
    timestamps: true
})

const Photo = mongoose.model("Photo", photoSchema)

module.exports = Photo