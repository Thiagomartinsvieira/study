const Sequelize = require('sequelize');

const connection = new Sequelize('guidepress', 'node_user', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;