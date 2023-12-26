var name = 'My Calculator v1'

function sum(a, b){
    return a + b
}

function mult(a,b){
    return a * b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

module.exports = {
    sum,
    mult,
    sub,
    div,
    name,
}