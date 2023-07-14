//Operadores Aritmeticos

let salario = 100;

// +, -, *, /, **

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario / salario);
// console.log(salario * salario);
// console.log(salario ** salario);
// console.log(5 ** 5);

// ++ -- 
/*
let idade = 18;

console.log(idade --); 
console.log(idade); */

// ---------------------------

//Operadores de atribuição

// let valorTecladoGamer = 100;
//  valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
//  valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);



//Operadores de igualdade
// Operadores de igualdade estrita

// console.log(1 === 1);
// console.log('1' === 1);

// igualdadde solta


// console.log(1 == 1);
// console.log('1' == 1);

//operadores ternarios 
// tem um cliente, 100 premio, comun

// let pontos = 200;
// let tipo = pontos > 100 ? "Premio": "comun";

// console.log(tipo);

//Operadores lógicos e (&&)
// retorna True se os dois operadores forem true 

// console.log(false && true);
//Operador lógico ou (||)
//Retornar true se um dos operandos forem true
let maiorIdade = false;
let possuiCarteiraTrabalho = false;
let podeAplicar = maiorIdade || possuiCarteiraTrabalho;

console.log('podeAplicar', podeAplicar);

//Operador NOT (!)

let candidatoRecusado = !podeAplicar;

console.log('candidatoRecusado', candidatoRecusado);



//Comparações não boleanos
// false
//undefined
//null
//0 
//""
// NaN - not a number 


//truthy 

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil)