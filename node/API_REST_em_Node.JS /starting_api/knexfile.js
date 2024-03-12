const { Connection } = require("pg");

module.exports = {
    test: {
        client: "pg",
        version: '8.11.3',
        connection: {
            host: "localhost",
            user: "postgres",
            password: "123456",
            databse: "starting_api",
        } ,
        migrations: {
            directory: 'src/migrations',
        },
        seeds: {
            directory: 'src/seeds',
        },
    },
}

