// 1 - var, let e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}

let i = 100

console.log(a)

for(let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName() {
    const name = 'Thiago'
    console.log(name)
}

const name = 'Lucas'

logName()

console.log(name)

// 2 arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b


console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return 'Ola ' + name + '!'
    } else {
        return 'olá'
    }
}

console.log(greeting('Thiago'))
console.log(greeting())

const testArrow = () => {
    console.log('testou')
}

testArrow()

const user = {
    name: 'Giulia',
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log('Username' + self.name)

        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username' + this.name)
        }, 700)
    }
}

// user.sayUserName()
// user.sayUserNameArrow()

// 3 filter
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [{name: 'Thiago', available: true}, {name: 'Lucas', available: true}, {name: 'Sisleide', available: true}, {name: 'Vitoria', available: false}]


const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)

console.log(notAvailableUsers)

// 4 Map
const products = [
    {name: 'camisa', price: 10.99, category: 'Roupas'}, 
    {name: 'Panela', price: 29.99, category: 'Ultencilios'}, 
    {name: 'Pijama', price: 16.99, category: 'Roupas'}, 
    {name: 'Abajur', price: 10.99, category: 'Eletro'}, 
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)