const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'node_user',
      password : '1234',
      database : 'knexjs'
    }
  });

  module.exports = knex
