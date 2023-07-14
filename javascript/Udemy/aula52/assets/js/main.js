// Global 
function retornaFuncao(nome){
    
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Thiago');
const funcao2 = retornaFuncao('Lucas');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());