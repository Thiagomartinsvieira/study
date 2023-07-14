const verdadeira = true;

// Let tem escopo de bloco {... bloco }
// Var só tem escopo de função
/*
let nome = 'Thiago'; // Criando 
var nome2 = 'Lucas'; // Criando



if(verdadeira){ 
    let nome = 'Thiago'; // criando
    var nome2 = 'Rogerio'; // Redeclarando
   

    if (verdadeira){
        var nome2 = 'Agatha'; // Redeclarada
        let nome ='Outra coisa';
        
    }
}
console.log(nome, nome2);
*/


/*
function falaoi(){
    var sobrenome = 'Agatha';    

    if (verdadeira) {
        let nome = 'Thiago';
        var sobrenome = 'Vieira';
        
    }
    let nome = 'Samantha';
    console.log(nome);
    console.log(sobrenome);
}

falaoi();
*/ 

let sobrenome = 'Thiago';

console.log(sobrenome);