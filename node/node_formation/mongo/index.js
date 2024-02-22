const mongoose = require('mongoose')
const articleModel = require('./article')

mongoose.connect('mongodb://localhost:27017/learningMongo')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error)
    })

const Article = mongoose.model('Article', articleModel)


// Article.findByIdAndUpdate('65d7be3607342708ce77e833', {title: 'vue from scratch',
//  author: 'Lima', 
//  body: 'vue.js from scratch'}).then(() => {
//     console.log('updated!')
//  }).catch(error => {
//     console.log(error)
//  })


// Article.findOne({'resume.content':'bla bla bla'}).then(article => {
//     console.log(article)
// }).catch(error => {
//     console.log(error)
// })


// Article.findByIdAndDelete('65d7be3a64fec4ca2085ff88').then(() => {
//     console.log('Data removed')
// }).catch(error => {
//     console.log(error)
// })



Article.find({}).then(articles => {
    console.log(articles)
}).catch((error) => {
    console.log(error)
})













// Register

// const article = new Article({title: 'Hello world', 
//     author: 'Lucas Matins', 
//     body: 'React and Vue', 
//     special: true, 
//     resume: {
//         content: 'bla bla bla',
//         author: 'test!'
//     }})

// article.save().then(() => {
//     console.log('Saved article')
// }).catch((error) => {
//     console.log(error)
// })