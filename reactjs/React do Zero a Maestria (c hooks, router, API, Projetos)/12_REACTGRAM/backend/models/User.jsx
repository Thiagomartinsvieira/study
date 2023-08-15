const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const { schema } = mongoose

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
},
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema)

module.exports = User;