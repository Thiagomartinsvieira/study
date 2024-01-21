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