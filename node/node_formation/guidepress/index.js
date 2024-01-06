const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

const CategoriesControler = require('./categories/CatergoriesController');
const ArticlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

// view engine
app.set('view engine', "ejs");

// static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Databse

connection
    .authenticate()
    .then(() => {
        console.log('Conection made sucessfully!');
    }).catch((error) => {
        console.log(error);
    })

app.use('/', CategoriesControler);
app.use('/', ArticlesController);

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8080, () => {
    console.log('Server is running!');
})