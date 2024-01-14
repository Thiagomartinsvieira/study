const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const session = require('express-session')

const CategoriesController = require('./categories/CategoriesController'); 
const ArticlesController = require('./articles/ArticlesController');
const UsersController = require('./users/usersController'); 

const Article = require('./articles/Article');
const Category = require('./categories/Category');
const User = require('./users/User');

// View engine
app.set('view engine', 'ejs');

// sessions
app.use(session({
    secret: "chjkvjksdbjksdjhklasdhjkladjkasdjjkdfbsdh",
    cookie: {maxAge: 30000}
}))

// Static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log('Database connection made successfully!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

// Routes
app.use('/', CategoriesController);
app.use('/', ArticlesController);
app.use('/', UsersController); 

app.get("/", (req, res) => {
    Article.findAll({
        order:[
            ['id','DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories});
        });
    });
})

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
        res.status(500).send('Internal Server Error');
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
        res.status(500).send('Internal Server Error');
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
