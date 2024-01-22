var database = require('./database')

// var data = [
//     {
//         name: 'GTA SA',
//         price: '19.54'
//     },
//     {
//         name: 'GTA VC',
//         price: '15.54'
//     },
//     {
//         name: 'GTA III',
//         price: '12.54'
//     },
    
// ]

// database.insert(data).into('games').then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })



// database.select(['id', 'price']).table('games').then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })

// database.insert({name: 'Black', price: 25}).into('games').then(data => {
//     database.select(['id', 'price']).table('games').then(data => {
//         console.log(data)
//     }).catch(error => {
//         console.log(error)
//     })
// }).catch(error => {
//     console.log(error)
// })

// database.select()
//     .whereRaw('name = "PES 2014" OR price > 20')
//     .table('games').then(data => {
//         console.log(data)
//     }).catch(error => {
//         console.log(error)
//     })

// database.raw('SELECT * FROM games').then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })

// database.where({id: 6}).delete().table('games').then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })

// database.where({id: 2}).update({name: 'WWE SVR11'}).table('games').then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })

// database.select().table('games').orderBy('name', 'asc').then(data => {
//     console.log(data)
// }).then(error => {
//     console.log(error)
// })

// database.insert({
//     name: 'Rockstar',
//     game_id: 4
// }).table('studios').then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });

// database.select(['games.*', 'studios.name as studio_name'])
// .table('games')
// .innerJoin('studios', 'studios.game_id', 'games.id')
// .where('games.id', 4)
// .then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })

// 1 to many
 
// database.select(['games.*', 'studios.name as studio_name'])
// .table('games')
// .innerJoin('studios', 'studios.game_id', 'games.id')
// .then(data => {
//     var studiosGamesArray = data
//     var game = {
//         id: 0,
//         name: '',
//         studios: []
//     }

//     game.id = data[0].id
//     game.name = data[0].name

//     data.forEach(studio => {column_3
//         game.studios.push({name: studio.studio_name})
//     })
//     console.log(game)

// }).catch(error => {
//     console.log(error)
// })

database.select([
    "studios.name as studio_name",
    "games.name as game_name",
    "games.price"
]).table('games_studios')
.innerJoin('games', 'games.id', '=', 'games_studios.game_id') 
.innerJoin('studios', 'studios.id', '=', 'games_studios.studio_id') 
.where('games.id', 4).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});