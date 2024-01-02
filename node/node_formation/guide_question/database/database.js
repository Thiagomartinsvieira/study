const { Sequelize } = require('sequelize');

const connection = new Sequelize('guide_questions', 'node_user', '1234', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = connection; 