// Declaração de função  (function hoisting)
falaOi();
function falaOi(){
    console.log('oi');
}

// First-Class Objects (objetos de primeira classe)
// Function Expression
const souUmDado = function(){
    console.log('Sou um dado');
};

souUmDado();

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando....');
    }
};
obj.falar();

