// IIFE -> Immeduately invoked function exp

(function(idade, peso, altura) {
    
    const sobrenome = 'Vieira';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }   

    function falaNome() {
    console.log(criaNome('Thiago'));
    }
    falaNome();
    console.log(idade, peso, altura);

})(23, 80, 1.80);






