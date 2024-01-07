const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');

router.get('/admin/articles', (req, res) => {
    Article.findAll({
        include: [{ model: Category, required: true }]
    }).then(articles => {
        res.render('admin/articles/index', { articles: articles });
    });
});

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', { categories: categories });
    });
});

router.post('/articles/save', (req, res) => {
    console.log(req.body);
    
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect('/admin/articles');
    });
});

router.post('/articles/delete', (req, res) => {
    console.log('Received delete request');
    var id = req.body.id;

    console.log('Deleting category with ID:', id);

    if (isNaN(id)) {
        console.log('Not a number');
        res.redirect('/admin/articles');
    } else {
        Article.destroy({
            where: {
                id: id
            }
        }).then(() => {
            console.log('Category deleted successfully');
            res.redirect('/admin/articles');
        }).catch(error => {
            console.error('Error deleting category:', error);
            res.redirect('/admin/articles');
        });
    }
});

module.exports = router;
