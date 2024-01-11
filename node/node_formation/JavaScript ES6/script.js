var name = 'Thiago Martins' // Global 
let name2 = 'Lucas' // Global
// Global: Everyone can use
// Local: only the function where it was declared can use it

// Var only has two scopes: Global and Local
// Let too have two scopes: Global and Local, block


function func1(){
    var lastName = 'Vieira' // local
    let lastName2 = 'Vieirinha' // Local
    console.log("oi " + name + " " + lastName)
    console.log('Oi '+ name2 + " " + lastName2)
}

function func2(){
    console.log("olá " + name)
}

func1();
func2();
console.log(name)
console.log(name2)
console.log("------------------------------------------------------------");

var a = 10; // Global
let b = true; 

if(b){
    var c = 20 // Block
    console.log(a + c);
} else {
 console.log('is False')
}

console.log(a + c)