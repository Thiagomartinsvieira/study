// string 
let user: string = 'Thiago'
console.log(user)
// name = 28

//numbers 
let age: number = 23
// age = 'Thiago'
age = 23.5
console.log(age)

let haveHobbies: boolean = false
// haveHobbies = 1
console.log(haveHobbies)

// exclud types 
let myAge: number
myAge = 23
console.log(typeof myAge)
console.log(typeof myAge)

// Array 

let hobbies: any[] = ['to cook', 'pratic sportas']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 'thiago']
// hobbies = 100
console.log(hobbies)

//tuplas
let address: [string, number] = ['Av main', 99]
console.log(address)

// enums 

enum Color {
    gray, 
    green, 
    blue,
    yellow = 100
}

let myColor: Color = Color.green
console.log(myColor) 

console.log(Color.blue)

// any 
let car: any = 'BMW'
console.log(car)
car = { brand: 'BMW', year: 2019}
console.log(car)