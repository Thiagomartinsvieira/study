const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Catergory');

const Article = connection.define('article', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); // One category have many articles
Article.belongsTo(Category); // One article belong one category

module.exports = Article;