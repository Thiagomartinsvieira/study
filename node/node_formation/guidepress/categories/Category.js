const Sequelize = require('sequelize');
const connection = require('../database/database');

const Catergory = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Catergory;