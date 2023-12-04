interface greetWithHelloProps {
    name: string
    age?: number
    [prop:string]: any
    greet:(lastName: string): void
}

function greetWithHello(person: greetWithHelloProps) {
    console.log('Hello', + person.name) 
}

function changeName(person: greetWithHelloProps) {
    person.name = 'Lucas'
}

const person: greetWithHelloProps = {
    name: 'Thiago',
    age: 23
    greet(lastName: string) {
        console.log(`Hello my name is ${this.name} ${this.lastName} `)
    }
}

greetWithHello(person)
changeName(person)
greetWithHello(person)
// greetWithHello({name: 'Sisleide', age: 60, height: 178})
person.greet('Zé')

// using class
class Client implements greetWithHelloProps {
    name: string
    lastBuy: Date = new Date
    greet(lastName: string) => {
        console.log(`Hello my name is ${this.name} ${this.lastName} `)
    }
}

const myClient = new Client()
myClient.name = 'Thiago'
greetWithHello(myClient)
myClient.greet('Vieira')
console.log(myClient.lastBuy)

// interface function

interface functionCalation {
    (a: number, b: number): number
}

let power: functionCalation

power = function(base: number, exp: number): number {
    // Math.pow(3,10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(power(3,10))
console.log(Math.pow(3,10))
console.log(3 ** 10)