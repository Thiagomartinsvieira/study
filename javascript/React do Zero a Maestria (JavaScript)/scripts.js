// 1 - var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

let i = 100

console.log(a)

for (let i = 0; i < 5; i++) {
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
    if (name) {
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
        setTimeout(function () {
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
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [{ name: 'Thiago', available: true }, { name: 'Lucas', available: true }, { name: 'Sisleide', available: true }, { name: 'Vitoria', available: false }]


const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)

console.log(notAvailableUsers)

// 4 Map
const products = [
    { name: 'camisa', price: 10.99, category: 'Roupas' },
    { name: 'Panela', price: 29.99, category: 'Ultencilios' },
    { name: 'Pijama', price: 16.99, category: 'Roupas' },
    { name: 'Abajur', price: 10.99, category: 'Eletro' },
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

// 5 templates literals
const username = 'Thiago'
const age = 30

console.log(`Your user name is ${username} and he have ${age} `)

// 6 Destructuring 
const fruits = ['Apple', 'orange', 'limon']

const [f1, f2, f3] = fruits

console.log(f1)

console.log(f2)

console.log(f3)

const productDetails = {
    name: 'notebook',
    price: 1000.99,
    category: 'computer',
    color: 'red'
}

const { name: productName, price, category: productCategory, color } = productDetails

console.log(`O nome do produto é ${name}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)

// 7 spread operator 

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, ...a2, 7, 8, 'Thigas']

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = { brand: 'vw' }
const otherInfos = {km: 10000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)

// 8 classe 
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa gola v', 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const shoe = new Product('Shoe green', 120)

console.log(shoe.productWithDiscount(20))