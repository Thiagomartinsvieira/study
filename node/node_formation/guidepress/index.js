const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

const CategoriesController = require('./categories/CatergoriesController');
const ArticlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

// view engine
app.set('view engine', 'ejs');

// static
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log('Connection made successfully!');
    })
    .catch((error) => {
        console.log(error);
    });

// Routes
app.use('/', CategoriesController);
app.use('/', ArticlesController);

app.get('/', async (req, res) => {
    try {
        const articles = await Article.findAll({
            order: [['id', 'DESC']]
        });

        const categories = await Category.findAll();

        res.render('index', { articles, categories });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

app.get('/:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        const article = await Article.findOne({
            where: { slug }
        });

        if (article) {
            const categories = await Category.findAll();
            res.render('article', { article, categories });
        } else {
            res.redirect('/');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

app.get('/category/:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        const category = await Category.findOne({
            where: { slug },
            include: [{ model: Article }]
        });

        if (category) {
            const categories = await Category.findAll();
            res.render('index', { articles: category.articles, categories });
        } else {
            res.redirect('/');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

app.listen(8080, () => {
    console.log('Server is running!');
});
