var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'node_user',
      password : '1234',
      database : 'users'
    }
  });

module.exports = knex